// Interactive Fee Calculator Logic for Ishema rya Abato School

function initFeeCalculator() {
  const gradeSelect = document.getElementById('calc-grade');
  const mealSelect = document.getElementById('calc-meal');
  const transportSelect = document.getElementById('calc-transport');
  const currencyToggle = document.getElementById('calc-currency-toggle');
  const chkUniform = document.getElementById('calc-uniform');
  const chkInsurance = document.getElementById('calc-insurance');
  const chkReg = document.getElementById('calc-reg');

  if (!gradeSelect) return;

  function formatMoney(amount, currency) {
    if (currency === 'USD') {
      return '$' + Math.round(amount).toLocaleString();
    }
    return Math.round(amount).toLocaleString() + ' RWF';
  }

  function recalculate() {
    const isUsd = currencyToggle && currencyToggle.checked;
    const currency = isUsd ? 'USD' : 'RWF';

    const gradeKey = gradeSelect.value;
    const mealKey = mealSelect.value;
    const transportKey = transportSelect.value;

    const data = window.schoolData.feeStructure;

    const gradeData = data.tuition[gradeKey] || { termRwf: 0, termUsd: 0, label: '' };
    const mealData = data.mealPlans[mealKey] || { termRwf: 0, termUsd: 0, label: '' };
    const transportData = data.transportZones[transportKey] || { termRwf: 0, termUsd: 0, label: '' };

    const tuition = isUsd ? gradeData.termUsd : gradeData.termRwf;
    const meals = isUsd ? mealData.termUsd : mealData.termRwf;
    const transport = isUsd ? transportData.termUsd : transportData.termRwf;

    let extras = 0;
    if (chkUniform && chkUniform.checked) {
      extras += isUsd ? data.oneTimeFees.uniformPack.usd : data.oneTimeFees.uniformPack.rwf;
    }
    if (chkInsurance && chkInsurance.checked) {
      extras += isUsd ? data.oneTimeFees.insurance.usd : data.oneTimeFees.insurance.rwf;
    }
    if (chkReg && chkReg.checked) {
      extras += isUsd ? data.oneTimeFees.registration.usd : data.oneTimeFees.registration.rwf;
    }

    const totalTerm = tuition + meals + transport;
    const grandTotal = totalTerm + extras;

    // Update UI elements
    const tuitionEl = document.getElementById('val-tuition');
    const mealsEl = document.getElementById('val-meals');
    const transportEl = document.getElementById('val-transport');
    const extrasEl = document.getElementById('val-extras');
    const totalEl = document.getElementById('val-total');
    const grandTotalEl = document.getElementById('val-grand-total');

    if (tuitionEl) tuitionEl.textContent = formatMoney(tuition, currency);
    if (mealsEl) mealsEl.textContent = formatMoney(meals, currency);
    if (transportEl) transportEl.textContent = formatMoney(transport, currency);
    if (extrasEl) extrasEl.textContent = formatMoney(extras, currency);
    if (totalEl) totalEl.textContent = formatMoney(totalTerm, currency);
    if (grandTotalEl) grandTotalEl.textContent = formatMoney(grandTotal, currency);

    // Update progress bars
    const safeTotal = grandTotal > 0 ? grandTotal : 1;
    const pTuition = Math.round((tuition / safeTotal) * 100);
    const pMeals = Math.round((meals / safeTotal) * 100);
    const pTransport = Math.round((transport / safeTotal) * 100);
    const pExtras = Math.round((extras / safeTotal) * 100);

    const barTuition = document.getElementById('bar-tuition');
    const barMeals = document.getElementById('bar-meals');
    const barTransport = document.getElementById('bar-transport');
    const barExtras = document.getElementById('bar-extras');

    if (barTuition) barTuition.style.width = pTuition + '%';
    if (barMeals) barMeals.style.width = pMeals + '%';
    if (barTransport) barTransport.style.width = pTransport + '%';
    if (barExtras) barExtras.style.width = pExtras + '%';
  }

  // Event listeners
  [gradeSelect, mealSelect, transportSelect].forEach(el => {
    if (el) el.addEventListener('change', recalculate);
  });

  if (currencyToggle) {
    currencyToggle.addEventListener('change', () => {
      const label = document.getElementById('currency-mode-label');
      if (label) label.textContent = currencyToggle.checked ? 'USD ($)' : 'RWF (Frw)';
      recalculate();
    });
  }

  [chkUniform, chkInsurance, chkReg].forEach(el => {
    if (el) el.addEventListener('change', recalculate);
  });

  // Action button: Use this quote in application
  const btnApplyQuote = document.getElementById('btn-apply-calculated-quote');
  if (btnApplyQuote) {
    btnApplyQuote.addEventListener('click', (e) => {
      e.preventDefault();
      const appGradeSelect = document.getElementById('app-grade');
      if (appGradeSelect && gradeSelect) {
        // Map calc grade to app grade
        const val = gradeSelect.value;
        for (let i = 0; i < appGradeSelect.options.length; i++) {
          if (appGradeSelect.options[i].value.includes(val) || val.includes(appGradeSelect.options[i].value)) {
            appGradeSelect.selectedIndex = i;
            break;
          }
        }
      }

      // Scroll to application section smoothly
      const appSection = document.getElementById('admissions-form-section');
      if (appSection) {
        appSection.scrollIntoView({ behavior: 'smooth' });
        // Flash animation
        appSection.classList.add('ring-4', 'ring-amber-400');
        setTimeout(() => appSection.classList.remove('ring-4', 'ring-amber-400'), 2500);
      }
    });
  }

  // Initial calculation
  recalculate();
}

window.initFeeCalculator = initFeeCalculator;
