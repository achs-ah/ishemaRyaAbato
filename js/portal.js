// Parent & Student Portal Interactive Engine for Ishema rya Abato

function initParentPortal() {
  const tabs = document.querySelectorAll('.portal-tab-btn');
  const panels = document.querySelectorAll('.portal-tab-panel');

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');

      // Update button styles
      tabs.forEach(t => {
        t.classList.remove('bg-amber-500', 'text-slate-900', 'font-bold', 'shadow-sm');
        t.classList.add('bg-white', 'text-slate-600', 'hover:bg-slate-100');
      });
      tab.classList.remove('bg-white', 'text-slate-600', 'hover:bg-slate-100');
      tab.classList.add('bg-amber-500', 'text-slate-900', 'font-bold', 'shadow-sm');

      // Toggle panels
      panels.forEach(p => {
        p.classList.add('hidden');
        if (p.id === targetId) {
          p.classList.remove('hidden');
        }
      });
    });
  });

  // Render Grade Table from schoolData
  const gradesTableBody = document.getElementById('portal-grades-tbody');
  if (gradesTableBody && window.schoolData?.demoStudent?.subjects) {
    const subjects = window.schoolData.demoStudent.subjects;
    gradesTableBody.innerHTML = subjects.map((sub, i) => `
      <tr class="border-b border-slate-100 hover:bg-slate-50 transition">
        <td class="py-3 px-4 font-semibold text-slate-800">${sub.name}</td>
        <td class="py-3 px-4 font-bold text-center ${sub.score >= 90 ? 'text-emerald-600' : 'text-blue-600'}">
          <span class="inline-block px-2.5 py-1 rounded-full bg-slate-100">${sub.score}%</span>
        </td>
        <td class="py-3 px-4 font-bold text-center text-amber-600">${sub.grade}</td>
        <td class="py-3 px-4 text-xs text-slate-600">${sub.remark}</td>
      </tr>
    `).join('');
  }

  // Live Bus simulation ticker
  const busStatusEl = document.getElementById('bus-live-status');
  const busStopEl = document.getElementById('bus-live-stop');
  const busEtaEl = document.getElementById('bus-live-eta');

  const stops = [
    { stop: "Stop 1: Sonatubes Roundabout", eta: "7:12 AM" },
    { stop: "Stop 2: Niboye Commercial Avenue", eta: "7:18 AM" },
    { stop: "Stop 3: Kicukiro Centre Junction", eta: "7:25 AM" },
    { stop: "Stop 4: Rebero Viewpoint", eta: "7:32 AM" },
    { stop: "Arrived: Ishema rya Abato Campus Gates", eta: "7:38 AM" }
  ];

  let currentStopIndex = 0;
  setInterval(() => {
    if (busStopEl && busEtaEl) {
      currentStopIndex = (currentStopIndex + 1) % stops.length;
      busStopEl.textContent = stops[currentStopIndex].stop;
      busEtaEl.textContent = stops[currentStopIndex].eta;
    }
  }, 7000);

  // Homework check simulation
  const homeworkItems = document.querySelectorAll('.homework-check-item');
  homeworkItems.forEach(item => {
    item.addEventListener('click', () => {
      const badge = item.querySelector('.hw-status-badge');
      if (badge) {
        if (badge.textContent.trim() === 'Pending') {
          badge.textContent = 'Submitted';
          badge.className = 'hw-status-badge text-xs px-2.5 py-0.5 rounded-full font-semibold bg-emerald-100 text-emerald-800';
          window.showToast?.('Assignment marked as submitted by parent!', 'success');
        } else {
          badge.textContent = 'Pending';
          badge.className = 'hw-status-badge text-xs px-2.5 py-0.5 rounded-full font-semibold bg-amber-100 text-amber-800';
        }
      }
    });
  });

  // Report Card Modal / Print Trigger
  const btnPrintReport = document.getElementById('btn-print-report-card');
  if (btnPrintReport) {
    btnPrintReport.addEventListener('click', () => {
      openReportCardModal();
    });
  }
}

function openReportCardModal() {
  const modal = document.getElementById('report-card-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeReportCardModal() {
  const modal = document.getElementById('report-card-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

window.initParentPortal = initParentPortal;
window.openReportCardModal = openReportCardModal;
window.closeReportCardModal = closeReportCardModal;
