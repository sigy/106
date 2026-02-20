function initDeadlines() {
  const btn = document.getElementById('showDeadlinesBtn');
  const card = document.getElementById('deadlineCard');
  if (!btn || !card) return;

  btn.addEventListener('click', () => {
    const today = new Date();

    const responseDue = addBusinessDays(today, 15);
    const extensionDue = addBusinessDays(today, 25);
    const appealDue = addBusinessDays(responseDue, 15);
    const complaintDue = addBusinessDays(responseDue, 30);

    const items = card.querySelectorAll('.deadline-item__date');
    if (items.length >= 4) {
      items[0].textContent = formatCzechDate(responseDue);
      items[1].textContent = formatCzechDate(extensionDue);
      items[2].textContent = formatCzechDate(appealDue);
      items[3].textContent = formatCzechDate(complaintDue);
    }

    card.classList.add('visible');
    btn.style.display = 'none';
  });
}

function addBusinessDays(start: Date, days: number): Date {
  const date = new Date(start);
  let added = 0;
  while (added < days) {
    date.setDate(date.getDate() + 1);
    const day = date.getDay();
    if (day !== 0 && day !== 6) added++;
  }
  return date;
}

function formatCzechDate(date: Date): string {
  const months = [
    'ledna', 'února', 'března', 'dubna', 'května', 'června',
    'července', 'srpna', 'září', 'října', 'listopadu', 'prosince',
  ];
  return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
}

initDeadlines();
