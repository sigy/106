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

// Czech public holidays (zákon č. 245/2000 Sb.)
function getCzechHolidays(year: number): Set<string> {
  const key = (m: number, d: number) => `${year}-${m}-${d}`;
  const holidays = new Set<string>();

  // Fixed holidays
  const fixed: [number, number][] = [
    [1, 1],   // Den obnovy samostatného českého státu
    [5, 1],   // Svátek práce
    [5, 8],   // Den vítězství
    [7, 5],   // Den slovanských věrozvěstů Cyrila a Metoděje
    [7, 6],   // Den upálení mistra Jana Husa
    [9, 28],  // Den české státnosti
    [10, 28], // Den vzniku samostatného československého státu
    [11, 17], // Den boje za svobodu a demokracii
    [12, 24], // Štědrý den
    [12, 25], // 1. svátek vánoční
    [12, 26], // 2. svátek vánoční
  ];
  for (const [m, d] of fixed) holidays.add(key(m, d));

  // Easter (Anonymous Gregorian algorithm)
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;

  const easter = new Date(year, month - 1, day);
  // Velký pátek (Good Friday) = Easter - 2
  const goodFriday = new Date(easter);
  goodFriday.setDate(easter.getDate() - 2);
  holidays.add(key(goodFriday.getMonth() + 1, goodFriday.getDate()));
  // Velikonoční pondělí (Easter Monday) = Easter + 1
  const easterMonday = new Date(easter);
  easterMonday.setDate(easter.getDate() + 1);
  holidays.add(key(easterMonday.getMonth() + 1, easterMonday.getDate()));

  return holidays;
}

function isCzechHoliday(date: Date, cache: Map<number, Set<string>>): boolean {
  const y = date.getFullYear();
  if (!cache.has(y)) cache.set(y, getCzechHolidays(y));
  const holidays = cache.get(y)!;
  return holidays.has(`${y}-${date.getMonth() + 1}-${date.getDate()}`);
}

function addBusinessDays(start: Date, days: number): Date {
  const date = new Date(start);
  const holidayCache = new Map<number, Set<string>>();
  let added = 0;
  while (added < days) {
    date.setDate(date.getDate() + 1);
    const day = date.getDay();
    if (day !== 0 && day !== 6 && !isCzechHoliday(date, holidayCache)) added++;
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
