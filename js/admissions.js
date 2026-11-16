// Admissions Multi-Step Wizard & Official Admission Slip Generator

function initAdmissionsWizard() {
  let currentStep = 1;
  const totalSteps = 4;

  const form = document.getElementById('admissions-wizard-form');
  if (!form) return;

  const btnNext = document.getElementById('wizard-btn-next');
  const btnPrev = document.getElementById('wizard-btn-prev');
  const btnSubmit = document.getElementById('wizard-btn-submit');
  const progressBar = document.getElementById('wizard-progress-bar');
  const stepIndicators = document.querySelectorAll('.wizard-step-indicator');

  function updateWizardUI() {
    // Hide all step sections
    for (let i = 1; i <= totalSteps; i++) {
      const stepEl = document.getElementById(`wizard-step-${i}`);
      if (stepEl) {
        stepEl.classList.toggle('hidden', i !== currentStep);
      }
    }

    // Update progress bar percentage
    if (progressBar) {
      const pct = ((currentStep - 1) / (totalSteps - 1)) * 100;
      progressBar.style.width = pct + '%';
    }

    // Update step numbers styling
    stepIndicators.forEach((ind, idx) => {
      const stepNum = idx + 1;
      const circle = ind.querySelector('.step-circle');
      const label = ind.querySelector('.step-label');

      if (stepNum < currentStep) {
        circle.className = 'step-circle w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm bg-emerald-600 text-white';
        circle.innerHTML = '<i class="fas fa-check"></i>';
        if (label) label.className = 'step-label text-xs font-semibold text-emerald-700 hidden sm:block';
      } else if (stepNum === currentStep) {
        circle.className = 'step-circle w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm bg-amber-500 text-slate-900 shadow-md ring-4 ring-amber-100';
        circle.textContent = stepNum;
        if (label) label.className = 'step-label text-xs font-bold text-amber-600 hidden sm:block';
      } else {
        circle.className = 'step-circle w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm bg-slate-200 text-slate-500';
        circle.textContent = stepNum;
        if (label) label.className = 'step-label text-xs font-medium text-slate-400 hidden sm:block';
      }
    });

    // Toggle button visibility
    if (btnPrev) btnPrev.classList.toggle('hidden', currentStep === 1);
    if (btnNext) btnNext.classList.toggle('hidden', currentStep === totalSteps);
    if (btnSubmit) btnSubmit.classList.toggle('hidden', currentStep !== totalSteps);

    // If step 4, populate review summary
    if (currentStep === 4) {
      populateReviewSummary();
    }
  }

  function validateStep(step) {
    let isValid = true;
    const stepEl = document.getElementById(`wizard-step-${step}`);
    if (!stepEl) return true;

    const requiredInputs = stepEl.querySelectorAll('input[required], select[required]');
    requiredInputs.forEach(input => {
      input.classList.remove('border-red-500', 'bg-red-50');
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('border-red-500', 'bg-red-50');
      }
    });

    if (!isValid) {
      window.showToast?.('Please fill in all required fields before proceeding.', 'error');
    }
    return isValid;
  }

  function populateReviewSummary() {
    const childFirst = document.getElementById('child-first-name')?.value || '-';
    const childLast = document.getElementById('child-last-name')?.value || '-';
    const childDob = document.getElementById('child-dob')?.value || '-';
    const childGender = document.getElementById('child-gender')?.value || '-';
    const grade = document.getElementById('app-grade')?.selectedOptions[0]?.text || '-';

    const parentName = document.getElementById('parent-name')?.value || '-';
    const parentPhone = document.getElementById('parent-phone')?.value || '-';
    const parentEmail = document.getElementById('parent-email')?.value || '-';
    const parentAddress = document.getElementById('parent-address')?.value || '-';

    const prevSchool = document.getElementById('prev-school')?.value || 'First Time Enrolling';
    const medicalNotes = document.getElementById('medical-notes')?.value || 'None reported';

    const reviewContent = document.getElementById('review-summary-content');
    if (reviewContent) {
      reviewContent.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div>
            <span class="text-xs uppercase text-slate-500 font-bold block mb-1">Student Details</span>
            <p class="font-bold text-slate-800 text-base">${childFirst} ${childLast}</p>
            <p class="text-slate-600"><strong>DOB:</strong> ${childDob} (${childGender})</p>
            <p class="text-amber-700 font-semibold"><strong>Target Grade:</strong> ${grade}</p>
          </div>
          <div>
            <span class="text-xs uppercase text-slate-500 font-bold block mb-1">Parent / Guardian</span>
            <p class="font-bold text-slate-800 text-base">${parentName}</p>
            <p class="text-slate-600"><i class="fas fa-phone mr-1 text-emerald-600"></i> ${parentPhone}</p>
            <p class="text-slate-600"><i class="fas fa-envelope mr-1 text-sky-600"></i> ${parentEmail}</p>
            <p class="text-slate-600"><i class="fas fa-map-marker-alt mr-1 text-red-500"></i> ${parentAddress}</p>
          </div>
          <div class="md:col-span-2 pt-2 border-t border-slate-200">
            <span class="text-xs uppercase text-slate-500 font-bold block mb-1">Medical & Academic Background</span>
            <p class="text-slate-600"><strong>Previous School:</strong> ${prevSchool}</p>
            <p class="text-slate-600"><strong>Health / Dietary Notes:</strong> ${medicalNotes}</p>
          </div>
        </div>
      `;
    }
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        if (currentStep < totalSteps) {
          currentStep++;
          updateWizardUI();
        }
      }
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateWizardUI();
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateStep(currentStep)) return;

      const randomId = Math.floor(1000 + Math.random() * 9000);
      const appRef = `IRA-2026-${randomId}`;

      const applicationData = {
        appRef,
        childFirst: document.getElementById('child-first-name')?.value,
        childLast: document.getElementById('child-last-name')?.value,
        childDob: document.getElementById('child-dob')?.value,
        childGender: document.getElementById('child-gender')?.value,
        grade: document.getElementById('app-grade')?.selectedOptions[0]?.text,
        parentName: document.getElementById('parent-name')?.value,
        parentPhone: document.getElementById('parent-phone')?.value,
        parentEmail: document.getElementById('parent-email')?.value,
        parentAddress: document.getElementById('parent-address')?.value,
        submittedAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
      };

      try {
        localStorage.setItem('ira_latest_application', JSON.stringify(applicationData));
      } catch (err) {
        console.warn('LocalStorage save failed:', err);
      }

      // Display Admission Slip Modal
      showAdmissionSlipModal(applicationData);
    });
  }

  updateWizardUI();
}

function showAdmissionSlipModal(app) {
  const modal = document.getElementById('admission-slip-modal');
  if (!modal) return;

  document.getElementById('slip-ref-code').textContent = app.appRef;
  document.getElementById('slip-date').textContent = app.submittedAt;
  document.getElementById('slip-student-name').textContent = `${app.childFirst} ${app.childLast}`;
  document.getElementById('slip-student-dob').textContent = app.childDob;
  document.getElementById('slip-student-gender').textContent = app.childGender;
  document.getElementById('slip-grade').textContent = app.grade;
  document.getElementById('slip-parent-name').textContent = app.parentName;
  document.getElementById('slip-parent-contact').textContent = `${app.parentPhone} | ${app.parentEmail}`;
  document.getElementById('slip-address').textContent = app.parentAddress;

  modal.classList.remove('hidden');
  modal.classList.add('flex');

  window.showToast?.('Application submitted successfully! Your official slip is ready.', 'success');
}

function closeAdmissionSlipModal() {
  const modal = document.getElementById('admission-slip-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

window.initAdmissionsWizard = initAdmissionsWizard;
window.closeAdmissionSlipModal = closeAdmissionSlipModal;
