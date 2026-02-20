interface Authority {
  name: string;
  address: string;
  category: string;
}

const AUTHORITIES: Authority[] = [
  // Ministerstva
  { name: 'Ministerstvo financí', address: 'Letenská 15, 118 10 Praha 1', category: 'Ministerstvo' },
  { name: 'Ministerstvo vnitra', address: 'Nad Štolou 3, 170 34 Praha 7', category: 'Ministerstvo' },
  { name: 'Ministerstvo spravedlnosti', address: 'Vyšehradská 16, 128 10 Praha 2', category: 'Ministerstvo' },
  { name: 'Ministerstvo práce a sociálních věcí', address: 'Na Poříčním právu 1, 128 01 Praha 2', category: 'Ministerstvo' },
  { name: 'Ministerstvo průmyslu a obchodu', address: 'Na Františku 32, 110 15 Praha 1', category: 'Ministerstvo' },
  { name: 'Ministerstvo pro místní rozvoj', address: 'Staroměstské nám. 6, 110 15 Praha 1', category: 'Ministerstvo' },
  { name: 'Ministerstvo životního prostředí', address: 'Vršovická 65, 100 10 Praha 10', category: 'Ministerstvo' },
  { name: 'Ministerstvo školství, mládeže a tělovýchovy', address: 'Karmelitská 529/5, 118 12 Praha 1', category: 'Ministerstvo' },
  { name: 'Ministerstvo kultury', address: 'Maltézské nám. 1, 118 11 Praha 1', category: 'Ministerstvo' },
  { name: 'Ministerstvo zdravotnictví', address: 'Palackého nám. 4, 128 01 Praha 2', category: 'Ministerstvo' },
  { name: 'Ministerstvo zemědělství', address: 'Těšnov 17, 117 05 Praha 1', category: 'Ministerstvo' },
  { name: 'Ministerstvo dopravy', address: 'nábřeží Ludvíka Svobody 1222/12, 110 15 Praha 1', category: 'Ministerstvo' },
  { name: 'Ministerstvo obrany', address: 'Tychonova 1, 160 01 Praha 6', category: 'Ministerstvo' },
  { name: 'Ministerstvo zahraničních věcí', address: 'Loretánské nám. 5, 118 00 Praha 1', category: 'Ministerstvo' },

  // Ústřední orgány
  { name: 'Úřad vlády České republiky', address: 'nábřeží Edvarda Beneše 4, 118 01 Praha 1', category: 'Ústřední orgán' },
  { name: 'Český statistický úřad', address: 'Na padesátém 81, 100 82 Praha 10', category: 'Ústřední orgán' },
  { name: 'Český telekomunikační úřad', address: 'Sokolovská 219, 190 00 Praha 9', category: 'Ústřední orgán' },
  { name: 'Úřad pro ochranu hospodářské soutěže', address: 'třída Kpt. Jaroše 7, 604 55 Brno', category: 'Ústřední orgán' },
  { name: 'Úřad pro ochranu osobních údajů', address: 'Pplk. Sochora 27, 170 00 Praha 7', category: 'Ústřední orgán' },
  { name: 'Nejvyšší kontrolní úřad', address: 'Jankovcova 1518/2, 170 04 Praha 7', category: 'Ústřední orgán' },
  { name: 'Česká národní banka', address: 'Na Příkopě 28, 115 03 Praha 1', category: 'Ústřední orgán' },
  { name: 'Energetický regulační úřad', address: 'Masarykovo nám. 5, 586 01 Jihlava', category: 'Ústřední orgán' },
  { name: 'Státní úřad pro jadernou bezpečnost', address: 'Senovážné nám. 9, 110 00 Praha 1', category: 'Ústřední orgán' },
  { name: 'Česká správa sociálního zabezpečení', address: 'Křížová 25, 225 08 Praha 5', category: 'Ústřední orgán' },
  { name: 'Finanční analytický úřad', address: 'Washingtonova 1621/11, 110 00 Praha 1', category: 'Ústřední orgán' },
  { name: 'Český úřad zeměměřický a katastrální', address: 'Pod sídlištěm 9, 182 11 Praha 8', category: 'Ústřední orgán' },
  { name: 'Česká inspekce životního prostředí', address: 'Na Břehu 267, 190 00 Praha 9', category: 'Ústřední orgán' },
  { name: 'Úřad průmyslového vlastnictví', address: 'Antonína Čermáka 2a, 160 68 Praha 6', category: 'Ústřední orgán' },

  // Krajské úřady
  { name: 'Magistrát hlavního města Prahy', address: 'Mariánské nám. 2, 110 01 Praha 1', category: 'Kraj' },
  { name: 'Krajský úřad Středočeského kraje', address: 'Zborovská 11, 150 21 Praha 5', category: 'Kraj' },
  { name: 'Krajský úřad Jihočeského kraje', address: 'U Zimního stadionu 1952/2, 370 76 České Budějovice', category: 'Kraj' },
  { name: 'Krajský úřad Plzeňského kraje', address: 'Škroupova 18, 306 13 Plzeň', category: 'Kraj' },
  { name: 'Krajský úřad Karlovarského kraje', address: 'Závodní 353/88, 360 06 Karlovy Vary', category: 'Kraj' },
  { name: 'Krajský úřad Ústeckého kraje', address: 'Velká Hradební 3118/48, 400 02 Ústí nad Labem', category: 'Kraj' },
  { name: 'Krajský úřad Libereckého kraje', address: 'U Jezu 642/2a, 461 80 Liberec', category: 'Kraj' },
  { name: 'Krajský úřad Královéhradeckého kraje', address: 'Pivovarské nám. 1245, 500 03 Hradec Králové', category: 'Kraj' },
  { name: 'Krajský úřad Pardubického kraje', address: 'Komenského nám. 125, 532 11 Pardubice', category: 'Kraj' },
  { name: 'Krajský úřad Kraje Vysočina', address: 'Žižkova 57, 587 33 Jihlava', category: 'Kraj' },
  { name: 'Krajský úřad Jihomoravského kraje', address: 'Žerotínovo nám. 3, 601 82 Brno', category: 'Kraj' },
  { name: 'Krajský úřad Olomouckého kraje', address: 'Jeremenkova 40a, 779 00 Olomouc', category: 'Kraj' },
  { name: 'Krajský úřad Zlínského kraje', address: 'třída Tomáše Bati 21, 761 90 Zlín', category: 'Kraj' },
  { name: 'Krajský úřad Moravskoslezského kraje', address: '28. října 117, 702 18 Ostrava', category: 'Kraj' },

  // Velká města
  { name: 'Magistrát města Brna', address: 'Dominikánské nám. 196/1, 602 00 Brno', category: 'Město' },
  { name: 'Magistrát města Ostravy', address: 'Prokešovo nám. 8, 729 30 Ostrava', category: 'Město' },
  { name: 'Magistrát města Plzně', address: 'nám. Republiky 1, 306 32 Plzeň', category: 'Město' },
  { name: 'Magistrát města Liberce', address: 'nám. Dr. E. Beneše 1, 460 59 Liberec', category: 'Město' },
  { name: 'Magistrát města Olomouce', address: 'Horní nám. 583, 779 11 Olomouc', category: 'Město' },
  { name: 'Magistrát města České Budějovice', address: 'nám. Přemysla Otakara II. 1/1, 370 92 České Budějovice', category: 'Město' },
  { name: 'Magistrát města Hradce Králové', address: 'Československé armády 408/51, 502 00 Hradec Králové', category: 'Město' },
  { name: 'Magistrát města Pardubic', address: 'Pernštýnské nám. 1, 530 21 Pardubice', category: 'Město' },
  { name: 'Magistrát města Ústí nad Labem', address: 'Velká Hradební 2336/8, 401 00 Ústí nad Labem', category: 'Město' },
  { name: 'Magistrát města Zlína', address: 'nám. Míru 12, 760 01 Zlín', category: 'Město' },
];

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function searchAuthorities(query: string): Authority[] {
  if (!query.trim()) return [];
  const q = normalize(query);
  const words = q.split(/\s+/).filter(Boolean);

  return AUTHORITIES
    .filter((a) => {
      const target = normalize(a.name) + ' ' + normalize(a.category);
      return words.every((w) => target.includes(w));
    })
    .slice(0, 8);
}

// Autocomplete UI — safe DOM construction (no innerHTML)
function initAutocomplete() {
  const input = document.getElementById('authority') as HTMLInputElement;
  const addressInput = document.getElementById('authorityAddress') as HTMLInputElement;
  const dropdown = document.getElementById('authorityDropdown') as HTMLElement;

  if (!input || !dropdown) return;

  let selectedIndex = -1;
  let results: Authority[] = [];

  function createItem(a: Authority, index: number): HTMLElement {
    const item = document.createElement('div');
    item.className = `autocomplete__item${index === selectedIndex ? ' highlighted' : ''}`;
    item.dataset.index = String(index);

    const nameSpan = document.createElement('span');
    nameSpan.className = 'autocomplete__name';
    nameSpan.textContent = a.name;

    const catSpan = document.createElement('span');
    catSpan.className = 'autocomplete__category';
    catSpan.textContent = a.category;

    item.appendChild(nameSpan);
    item.appendChild(catSpan);
    return item;
  }

  function render() {
    dropdown.replaceChildren();

    if (results.length === 0) {
      dropdown.classList.remove('visible');
      return;
    }

    results.forEach((a, i) => dropdown.appendChild(createItem(a, i)));
    dropdown.classList.add('visible');
  }

  function select(index: number) {
    const a = results[index];
    if (!a) return;
    input.value = a.name;
    addressInput.value = a.address;
    dropdown.classList.remove('visible');
    results = [];
    selectedIndex = -1;
  }

  input.addEventListener('input', () => {
    results = searchAuthorities(input.value);
    selectedIndex = -1;
    render();
  });

  input.addEventListener('keydown', (e) => {
    if (!dropdown.classList.contains('visible')) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = Math.min(selectedIndex + 1, results.length - 1);
      render();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = Math.max(selectedIndex - 1, 0);
      render();
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      select(selectedIndex);
    } else if (e.key === 'Escape') {
      dropdown.classList.remove('visible');
    }
  });

  dropdown.addEventListener('click', (e) => {
    const item = (e.target as HTMLElement).closest('[data-index]');
    if (item) {
      select(Number(item.getAttribute('data-index')));
    }
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target as Node) && !dropdown.contains(e.target as Node)) {
      dropdown.classList.remove('visible');
    }
  });
}

initAutocomplete();
