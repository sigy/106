interface Authority {
  name: string;
  address: string;
  category: string;
}

const AUTHORITIES: Authority[] = [
  // Ministerstva (14)
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

  // Ústřední orgány státní správy
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
  { name: 'Český báňský úřad', address: 'Kozí 4, 110 01 Praha 1', category: 'Ústřední orgán' },
  { name: 'Správa státních hmotných rezerv', address: 'Šeříková 616/1, 150 85 Praha 5', category: 'Ústřední orgán' },
  { name: 'Státní pozemkový úřad', address: 'Husinecká 1024/11a, 130 00 Praha 3', category: 'Ústřední orgán' },
  { name: 'Úřad pro zastupování státu ve věcech majetkových', address: 'Rašínovo nábřeží 390/42, 128 00 Praha 2', category: 'Ústřední orgán' },
  { name: 'Národní bezpečnostní úřad', address: 'Na Popelce 2/16, 150 06 Praha 5', category: 'Ústřední orgán' },
  { name: 'Český úřad bezpečnosti práce', address: 'Kolowratská 4/8, 110 00 Praha 1', category: 'Ústřední orgán' },
  { name: 'Státní úřad inspekce práce', address: 'Kolářská 451/13, 746 01 Opava', category: 'Ústřední orgán' },
  { name: 'Úřad pro dohled nad hospodařením politických stran a hnutí', address: 'Kounicova 284/39, 602 00 Brno', category: 'Ústřední orgán' },
  { name: 'Rada pro rozhlasové a televizní vysílání', address: 'Škrétova 44/6, 120 00 Praha 2', category: 'Ústřední orgán' },
  { name: 'Generální finanční ředitelství', address: 'Lazarská 15/7, 117 22 Praha 1', category: 'Ústřední orgán' },
  { name: 'Generální ředitelství cel', address: 'Budějovická 7, 140 96 Praha 4', category: 'Ústřední orgán' },
  { name: 'Česká obchodní inspekce', address: 'Štěpánská 567/15, 120 00 Praha 2', category: 'Ústřední orgán' },
  { name: 'Státní veterinární správa', address: 'Slezská 100/7, 120 00 Praha 2', category: 'Ústřední orgán' },
  { name: 'Státní zemědělská a potravinářská inspekce', address: 'Květná 15, 603 00 Brno', category: 'Ústřední orgán' },
  { name: 'Ústav pro studium totalitních režimů', address: 'Siwiecova 2, 130 00 Praha 3', category: 'Ústřední orgán' },
  { name: 'Česká školní inspekce', address: 'Fráni Šrámka 37, 150 21 Praha 5', category: 'Ústřední orgán' },
  { name: 'Úřad práce České republiky', address: 'Dobrovského 1278/25, 170 00 Praha 7', category: 'Ústřední orgán' },

  // Soudy
  { name: 'Ústavní soud', address: 'Joštova 8, 660 83 Brno', category: 'Soud' },
  { name: 'Nejvyšší soud', address: 'Burešova 571/20, 657 37 Brno', category: 'Soud' },
  { name: 'Nejvyšší správní soud', address: 'Moravské nám. 6, 657 40 Brno', category: 'Soud' },
  { name: 'Městský soud v Praze', address: 'Spálená 6/2, 112 16 Praha 2', category: 'Soud' },
  { name: 'Krajský soud v Brně', address: 'Rooseveltova 16/18, 601 95 Brno', category: 'Soud' },
  { name: 'Krajský soud v Ostravě', address: 'Havlíčkovo nábřeží 34, 728 81 Ostrava', category: 'Soud' },
  { name: 'Krajský soud v Plzni', address: 'Veleslavínova 21/40, 306 17 Plzeň', category: 'Soud' },
  { name: 'Krajský soud v Hradci Králové', address: 'Československé armády 218/5, 502 08 Hradec Králové', category: 'Soud' },
  { name: 'Krajský soud v Českých Budějovicích', address: 'Zátkovo nábřeží 2, 370 84 České Budějovice', category: 'Soud' },
  { name: 'Krajský soud v Ústí nad Labem', address: 'Národního odboje 1274/26, 400 92 Ústí nad Labem', category: 'Soud' },

  // Státní zastupitelství
  { name: 'Nejvyšší státní zastupitelství', address: 'Jezuitská 585/4, 660 55 Brno', category: 'Státní zastupitelství' },
  { name: 'Vrchní státní zastupitelství v Praze', address: 'nám. Hrdinů 1300, 140 65 Praha 4', category: 'Státní zastupitelství' },
  { name: 'Vrchní státní zastupitelství v Olomouci', address: 'tř. 17. listopadu 909/44, 779 00 Olomouc', category: 'Státní zastupitelství' },

  // Veřejný ochránce práv
  { name: 'Veřejný ochránce práv (Ombudsman)', address: 'Údolní 39, 602 00 Brno', category: 'Nezávislý orgán' },

  // Bezpečnostní sbory
  { name: 'Policie České republiky', address: 'Strojnická 27, 170 89 Praha 7', category: 'Bezpečnostní sbor' },
  { name: 'Hasičský záchranný sbor ČR', address: 'Kloknerova 26, 148 01 Praha 4', category: 'Bezpečnostní sbor' },
  { name: 'Vězeňská služba České republiky', address: 'Soudní 1672/1a, 140 67 Praha 4', category: 'Bezpečnostní sbor' },
  { name: 'Celní správa České republiky', address: 'Budějovická 7, 140 96 Praha 4', category: 'Bezpečnostní sbor' },

  // Veřejné instituce
  { name: 'Česká televize', address: 'Kavčí hory, 140 70 Praha 4', category: 'Veřejná instituce' },
  { name: 'Český rozhlas', address: 'Vinohradská 12, 120 99 Praha 2', category: 'Veřejná instituce' },
  { name: 'Česká tisková kancelář (ČTK)', address: 'Opletalova 5/7, 111 44 Praha 1', category: 'Veřejná instituce' },
  { name: 'Všeobecná zdravotní pojišťovna (VZP)', address: 'Orlická 4/2020, 130 00 Praha 3', category: 'Zdravotní pojišťovna' },
  { name: 'Vojenská zdravotní pojišťovna', address: 'Drahobejlova 1404/4, 190 03 Praha 9', category: 'Zdravotní pojišťovna' },
  { name: 'Česká průmyslová zdravotní pojišťovna', address: 'Jeremenkova 11, 703 00 Ostrava', category: 'Zdravotní pojišťovna' },
  { name: 'Oborová zdravotní pojišťovna', address: 'Roškotova 1225/1, 140 00 Praha 4', category: 'Zdravotní pojišťovna' },
  { name: 'Zaměstnanecká pojišťovna Škoda', address: 'Husova 302, 293 01 Mladá Boleslav', category: 'Zdravotní pojišťovna' },
  { name: 'Zdravotní pojišťovna ministerstva vnitra', address: 'Vinohradská 2577/178, 130 00 Praha 3', category: 'Zdravotní pojišťovna' },
  { name: 'RBP, zdravotní pojišťovna', address: 'Michálkovická 967/108, 710 00 Ostrava', category: 'Zdravotní pojišťovna' },
  { name: 'Lesy České republiky', address: 'Přemyslova 1106/19, 500 08 Hradec Králové', category: 'Státní podnik' },
  { name: 'Povodí Vltavy', address: 'Holečkova 3178/8, 150 00 Praha 5', category: 'Státní podnik' },
  { name: 'Povodí Labe', address: 'Víta Nejedlého 951/8, 500 03 Hradec Králové', category: 'Státní podnik' },
  { name: 'Povodí Moravy', address: 'Dřevařská 932/11, 602 00 Brno', category: 'Státní podnik' },
  { name: 'Povodí Ohře', address: 'Bezručova 4219, 430 03 Chomutov', category: 'Státní podnik' },
  { name: 'Povodí Odry', address: 'Varenská 3101/49, 702 00 Ostrava', category: 'Státní podnik' },
  { name: 'Ředitelství silnic a dálnic ČR', address: 'Na Pankráci 546/56, 140 00 Praha 4', category: 'Státní organizace' },
  { name: 'Správa železnic', address: 'Dlážděná 1003/7, 110 00 Praha 1', category: 'Státní organizace' },
  { name: 'Česká pošta', address: 'Politických vězňů 909/4, 225 99 Praha 1', category: 'Státní podnik' },
  { name: 'Státní fond životního prostředí', address: 'Olbrachtova 2006/9, 140 00 Praha 4', category: 'Státní fond' },
  { name: 'Státní fond dopravní infrastruktury', address: 'Sokolovská 278, 190 00 Praha 9', category: 'Státní fond' },
  { name: 'Státní fond kultury', address: 'Maltézské nám. 1, 118 11 Praha 1', category: 'Státní fond' },

  // Veřejné vysoké školy
  { name: 'Univerzita Karlova', address: 'Ovocný trh 5, 116 36 Praha 1', category: 'Vysoká škola' },
  { name: 'České vysoké učení technické v Praze', address: 'Jugoslávských partyzánů 1580/3, 160 00 Praha 6', category: 'Vysoká škola' },
  { name: 'Masarykova univerzita', address: 'Žerotínovo nám. 617/9, 601 77 Brno', category: 'Vysoká škola' },
  { name: 'Vysoké učení technické v Brně', address: 'Antonínská 548/1, 601 90 Brno', category: 'Vysoká škola' },
  { name: 'Vysoká škola ekonomická v Praze', address: 'nám. Winstona Churchilla 1938/4, 130 67 Praha 3', category: 'Vysoká škola' },
  { name: 'Univerzita Palackého v Olomouci', address: 'Křížkovského 511/8, 779 00 Olomouc', category: 'Vysoká škola' },
  { name: 'VŠB – Technická univerzita Ostrava', address: '17. listopadu 2172/15, 708 00 Ostrava', category: 'Vysoká škola' },
  { name: 'Západočeská univerzita v Plzni', address: 'Univerzitní 2732/8, 301 00 Plzeň', category: 'Vysoká škola' },
  { name: 'Jihočeská univerzita v Českých Budějovicích', address: 'Branišovská 1645/31a, 370 05 České Budějovice', category: 'Vysoká škola' },
  { name: 'Mendelova univerzita v Brně', address: 'Zemědělská 1665/1, 613 00 Brno', category: 'Vysoká škola' },
  { name: 'Technická univerzita v Liberci', address: 'Studentská 1402/2, 461 17 Liberec', category: 'Vysoká škola' },
  { name: 'Univerzita Pardubice', address: 'Studentská 95, 532 10 Pardubice', category: 'Vysoká škola' },
  { name: 'Univerzita Hradec Králové', address: 'Rokitanského 62, 500 03 Hradec Králové', category: 'Vysoká škola' },
  { name: 'Univerzita Jana Evangelisty Purkyně v Ústí nad Labem', address: 'Pasteurova 3544/1, 400 96 Ústí nad Labem', category: 'Vysoká škola' },
  { name: 'Ostravská univerzita', address: 'Dvořákova 7, 701 03 Ostrava', category: 'Vysoká škola' },
  { name: 'Slezská univerzita v Opavě', address: 'Na Rybníčku 626/1, 746 01 Opava', category: 'Vysoká škola' },
  { name: 'Česká zemědělská univerzita v Praze', address: 'Kamýcká 129, 165 00 Praha 6', category: 'Vysoká škola' },
  { name: 'Veterinární univerzita Brno', address: 'Palackého tř. 1946/1, 612 42 Brno', category: 'Vysoká škola' },
  { name: 'Akademie múzických umění v Praze', address: 'Malostranské nám. 259/12, 118 00 Praha 1', category: 'Vysoká škola' },
  { name: 'Akademie výtvarných umění v Praze', address: 'U Akademie 4, 170 22 Praha 7', category: 'Vysoká škola' },
  { name: 'Vysoká škola uměleckoprůmyslová v Praze', address: 'nám. Jana Palacha 80, 116 93 Praha 1', category: 'Vysoká škola' },

  // Krajské úřady (14)
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

  // Statutární města (26)
  { name: 'Magistrát města Brna', address: 'Dominikánské nám. 196/1, 602 00 Brno', category: 'Statutární město' },
  { name: 'Magistrát města Ostravy', address: 'Prokešovo nám. 8, 729 30 Ostrava', category: 'Statutární město' },
  { name: 'Magistrát města Plzně', address: 'nám. Republiky 1, 306 32 Plzeň', category: 'Statutární město' },
  { name: 'Magistrát města Liberce', address: 'nám. Dr. E. Beneše 1, 460 59 Liberec', category: 'Statutární město' },
  { name: 'Magistrát města Olomouce', address: 'Horní nám. 583, 779 11 Olomouc', category: 'Statutární město' },
  { name: 'Magistrát města České Budějovice', address: 'nám. Přemysla Otakara II. 1/1, 370 92 České Budějovice', category: 'Statutární město' },
  { name: 'Magistrát města Hradce Králové', address: 'Československé armády 408/51, 502 00 Hradec Králové', category: 'Statutární město' },
  { name: 'Magistrát města Pardubic', address: 'Pernštýnské nám. 1, 530 21 Pardubice', category: 'Statutární město' },
  { name: 'Magistrát města Ústí nad Labem', address: 'Velká Hradební 2336/8, 401 00 Ústí nad Labem', category: 'Statutární město' },
  { name: 'Magistrát města Zlína', address: 'nám. Míru 12, 760 01 Zlín', category: 'Statutární město' },
  { name: 'Magistrát města Havířova', address: 'Svornosti 86/2, 736 01 Havířov', category: 'Statutární město' },
  { name: 'Magistrát města Opavy', address: 'Horní nám. 382/69, 746 26 Opava', category: 'Statutární město' },
  { name: 'Magistrát města Karviné', address: 'Fryštátská 72/1, 733 24 Karviná', category: 'Statutární město' },
  { name: 'Magistrát města Frýdku-Místku', address: 'Radniční 1148, 738 22 Frýdek-Místek', category: 'Statutární město' },
  { name: 'Magistrát města Mostu', address: 'Radniční 1/2, 434 69 Most', category: 'Statutární město' },
  { name: 'Magistrát města Teplice', address: 'nám. Svobody 2, 415 95 Teplice', category: 'Statutární město' },
  { name: 'Magistrát města Karlovy Vary', address: 'Moskevská 21, 361 20 Karlovy Vary', category: 'Statutární město' },
  { name: 'Magistrát města Jihlavy', address: 'Masarykovo nám. 97/1, 586 28 Jihlava', category: 'Statutární město' },
  { name: 'Magistrát města Děčína', address: 'Mírové nám. 1175/5, 405 38 Děčín', category: 'Statutární město' },
  { name: 'Magistrát města Chomutova', address: 'Zborovská 4602, 430 28 Chomutov', category: 'Statutární město' },
  { name: 'Magistrát města Přerova', address: 'Bratrská 709/34, 750 02 Přerov', category: 'Statutární město' },
  { name: 'Magistrát města Jablonce nad Nisou', address: 'Mírové nám. 3100/19, 467 51 Jablonec nad Nisou', category: 'Statutární město' },
  { name: 'Magistrát města Prostějova', address: 'nám. T. G. Masaryka 130/14, 796 01 Prostějov', category: 'Statutární město' },
  { name: 'Magistrát města Třince', address: 'Jablunkovská 160, 739 61 Třinec', category: 'Statutární město' },
  { name: 'Magistrát města Mladé Boleslavi', address: 'Komenského nám. 61, 293 01 Mladá Boleslav', category: 'Statutární město' },
  { name: 'Magistrát města Kladna', address: 'nám. Starosty Pavla 44, 272 52 Kladno', category: 'Statutární město' },

  // Městské části Prahy
  { name: 'Úřad městské části Praha 1', address: 'Vodičkova 18, 115 68 Praha 1', category: 'Městská část' },
  { name: 'Úřad městské části Praha 2', address: 'nám. Míru 20, 120 39 Praha 2', category: 'Městská část' },
  { name: 'Úřad městské části Praha 3', address: 'Havlíčkovo nám. 700/9, 130 85 Praha 3', category: 'Městská část' },
  { name: 'Úřad městské části Praha 4', address: 'Antala Staška 2059/80b, 140 46 Praha 4', category: 'Městská část' },
  { name: 'Úřad městské části Praha 5', address: 'nám. 14. října 1381/4, 150 22 Praha 5', category: 'Městská část' },
  { name: 'Úřad městské části Praha 6', address: 'Čs. armády 601/23, 160 52 Praha 6', category: 'Městská část' },
  { name: 'Úřad městské části Praha 7', address: 'nábřeží Kpt. Jaroše 1000/7, 170 00 Praha 7', category: 'Městská část' },
  { name: 'Úřad městské části Praha 8', address: 'Zenklova 1/35, 180 48 Praha 8', category: 'Městská část' },
  { name: 'Úřad městské části Praha 9', address: 'Sokolovská 14/324, 180 49 Praha 9', category: 'Městská část' },
  { name: 'Úřad městské části Praha 10', address: 'Vršovická 68, 101 38 Praha 10', category: 'Městská část' },
  { name: 'Úřad městské části Praha 11', address: 'Ocelíkova 672/1, 149 41 Praha 4', category: 'Městská část' },
  { name: 'Úřad městské části Praha 12', address: 'Písková 830/25, 143 12 Praha 4', category: 'Městská část' },
  { name: 'Úřad městské části Praha 13', address: 'Sluneční nám. 2580/13, 158 00 Praha 5', category: 'Městská část' },
  { name: 'Úřad městské části Praha 14', address: 'Bratří Venclíků 1073, 198 21 Praha 9', category: 'Městská část' },
  { name: 'Úřad městské části Praha 15', address: 'Boloňská 478/1, 109 00 Praha 10', category: 'Městská část' },
  { name: 'Úřad městské části Praha 16', address: 'Václava Balého 23/3, 153 00 Praha 5', category: 'Městská část' },
  { name: 'Úřad městské části Praha 17', address: 'Žalanského 291/12b, 163 02 Praha 6', category: 'Městská část' },
  { name: 'Úřad městské části Praha 18', address: 'Bechyňská 639, 199 00 Praha 9', category: 'Městská část' },
  { name: 'Úřad městské části Praha 19', address: 'Semilská 43/1, 197 00 Praha 9', category: 'Městská část' },
  { name: 'Úřad městské části Praha 20', address: 'Jívanská 647/10, 193 21 Praha 9', category: 'Městská část' },
  { name: 'Úřad městské části Praha 21', address: 'Staroklánovická 260, 190 16 Praha 9', category: 'Městská část' },
  { name: 'Úřad městské části Praha 22', address: 'Nové náměstí 1250, 104 00 Praha 10', category: 'Městská část' },

  // Městské části Brna
  { name: 'Úřad městské části Brno-střed', address: 'Dominikánská 2, 601 69 Brno', category: 'Městská část' },
  { name: 'Úřad městské části Brno-sever', address: 'Bratislavská 70, 601 47 Brno', category: 'Městská část' },
  { name: 'Úřad městské části Brno-jih', address: 'Mariánské nám. 13, 617 00 Brno', category: 'Městská část' },
  { name: 'Úřad městské části Brno-Židenice', address: 'Šámalova 60, 615 00 Brno', category: 'Městská část' },
  { name: 'Úřad městské části Brno-Královo Pole', address: 'Palackého tř. 59, 612 93 Brno', category: 'Městská část' },
  { name: 'Úřad městské části Brno-Líšeň', address: 'Jírova 2, 628 00 Brno', category: 'Městská část' },
  { name: 'Úřad městské části Brno-Bystrc', address: 'nám. 28. dubna 60, 635 00 Brno', category: 'Městská část' },
  { name: 'Úřad městské části Brno-Černovice', address: 'Bolzanova 1, 618 00 Brno', category: 'Městská část' },
  { name: 'Úřad městské části Brno-Žabovřesky', address: 'Horova 28, 616 00 Brno', category: 'Městská část' },
  { name: 'Úřad městské části Brno-Kohoutovice', address: 'Bašného 36, 623 00 Brno', category: 'Městská část' },

  // Městské obvody Ostravy
  { name: 'Úřad městského obvodu Moravská Ostrava a Přívoz', address: 'nám. Dr. E. Beneše 555/6, 729 29 Ostrava', category: 'Městský obvod' },
  { name: 'Úřad městského obvodu Ostrava-Jih', address: 'Horní 791/3, 700 30 Ostrava', category: 'Městský obvod' },
  { name: 'Úřad městského obvodu Poruba', address: 'Klimkovická 55/28, 708 56 Ostrava', category: 'Městský obvod' },
  { name: 'Úřad městského obvodu Slezská Ostrava', address: 'Těšínská 35, 710 16 Ostrava', category: 'Městský obvod' },
  { name: 'Úřad městského obvodu Mariánské Hory a Hulváky', address: 'Přemyslovců 63, 709 36 Ostrava', category: 'Městský obvod' },
  { name: 'Úřad městského obvodu Vítkovice', address: 'Mírové nám. 1, 703 79 Ostrava', category: 'Městský obvod' },

  // Městské obvody Plzně
  { name: 'Úřad městského obvodu Plzeň 1', address: 'alej Svobody 60, 323 00 Plzeň', category: 'Městský obvod' },
  { name: 'Úřad městského obvodu Plzeň 2 – Slovany', address: 'Koterovská 83, 326 00 Plzeň', category: 'Městský obvod' },
  { name: 'Úřad městského obvodu Plzeň 3', address: 'sady Pětatřicátníků 7/8, 305 83 Plzeň', category: 'Městský obvod' },
  { name: 'Úřad městského obvodu Plzeň 4', address: 'Mohylová 55, 312 64 Plzeň', category: 'Městský obvod' },

  // Obce s rozšířenou působností – Středočeský kraj
  { name: 'Městský úřad Benešov', address: 'Masarykovo nám. 100, 256 01 Benešov', category: 'ORP město' },
  { name: 'Městský úřad Beroun', address: 'Husovo nám. 68, 266 01 Beroun', category: 'ORP město' },
  { name: 'Městský úřad Brandýs nad Labem-Stará Boleslav', address: 'Masarykovo nám. 1/6, 250 01 Brandýs nad Labem', category: 'ORP město' },
  { name: 'Městský úřad Čáslav', address: 'nám. Jana Žižky z Trocnova 1, 286 01 Čáslav', category: 'ORP město' },
  { name: 'Městský úřad Černošice', address: 'Podskalská 19, 120 00 Praha 2', category: 'ORP město' },
  { name: 'Městský úřad Český Brod', address: 'nám. Husovo 70, 282 01 Český Brod', category: 'ORP město' },
  { name: 'Městský úřad Dobříš', address: 'Mírové nám. 119, 263 01 Dobříš', category: 'ORP město' },
  { name: 'Městský úřad Hořovice', address: 'Palackého nám. 2, 268 01 Hořovice', category: 'ORP město' },
  { name: 'Městský úřad Kolín', address: 'Karlovo nám. 78, 280 12 Kolín', category: 'ORP město' },
  { name: 'Městský úřad Kralupy nad Vltavou', address: 'Palackého nám. 1, 278 01 Kralupy nad Vltavou', category: 'ORP město' },
  { name: 'Městský úřad Kutná Hora', address: 'Havlíčkovo nám. 552/1, 284 01 Kutná Hora', category: 'ORP město' },
  { name: 'Městský úřad Lysá nad Labem', address: 'Husovo nám. 23, 289 22 Lysá nad Labem', category: 'ORP město' },
  { name: 'Městský úřad Mnichovo Hradiště', address: 'Masarykovo nám. 1, 295 21 Mnichovo Hradiště', category: 'ORP město' },
  { name: 'Městský úřad Neratovice', address: 'Kojetická 1028, 277 11 Neratovice', category: 'ORP město' },
  { name: 'Městský úřad Nymburk', address: 'nám. Přemyslovců 163, 288 02 Nymburk', category: 'ORP město' },
  { name: 'Městský úřad Poděbrady', address: 'Jiřího nám. 20/I, 290 31 Poděbrady', category: 'ORP město' },
  { name: 'Městský úřad Příbram', address: 'Tyršova 108, 261 19 Příbram', category: 'ORP město' },
  { name: 'Městský úřad Rakovník', address: 'Husovo nám. 27, 269 18 Rakovník', category: 'ORP město' },
  { name: 'Městský úřad Říčany', address: 'Masarykovo nám. 53/40, 251 01 Říčany', category: 'ORP město' },
  { name: 'Městský úřad Sedlčany', address: 'nám. T. G. Masaryka 32, 264 01 Sedlčany', category: 'ORP město' },
  { name: 'Městský úřad Slaný', address: 'Velvarská 136, 274 01 Slaný', category: 'ORP město' },
  { name: 'Městský úřad Vlašim', address: 'Jana Masaryka 302, 258 01 Vlašim', category: 'ORP město' },
  { name: 'Městský úřad Votice', address: 'Komenského nám. 700, 259 01 Votice', category: 'ORP město' },

  // ORP – Jihočeský kraj
  { name: 'Městský úřad Český Krumlov', address: 'nám. Svornosti 1, 381 01 Český Krumlov', category: 'ORP město' },
  { name: 'Městský úřad Dačice', address: 'Krajířova 190/I, 380 13 Dačice', category: 'ORP město' },
  { name: 'Městský úřad Jindřichův Hradec', address: 'Klášterská 135/II, 377 22 Jindřichův Hradec', category: 'ORP město' },
  { name: 'Městský úřad Kaplice', address: 'Náměstí 70, 382 41 Kaplice', category: 'ORP město' },
  { name: 'Městský úřad Milevsko', address: 'nám. E. Beneše 420, 399 01 Milevsko', category: 'ORP město' },
  { name: 'Městský úřad Písek', address: 'Velké nám. 114, 397 19 Písek', category: 'ORP město' },
  { name: 'Městský úřad Prachatice', address: 'Velké nám. 3, 383 01 Prachatice', category: 'ORP město' },
  { name: 'Městský úřad Soběslav', address: 'nám. Republiky 59/I, 392 01 Soběslav', category: 'ORP město' },
  { name: 'Městský úřad Strakonice', address: 'Velké nám. 2, 386 21 Strakonice', category: 'ORP město' },
  { name: 'Městský úřad Tábor', address: 'Žižkovo nám. 2, 390 15 Tábor', category: 'ORP město' },
  { name: 'Městský úřad Třeboň', address: 'Palackého nám. 46, 379 01 Třeboň', category: 'ORP město' },
  { name: 'Městský úřad Trhové Sviny', address: 'Žižkovo nám. 32, 374 17 Trhové Sviny', category: 'ORP město' },
  { name: 'Městský úřad Týn nad Vltavou', address: 'nám. Míru 2, 375 01 Týn nad Vltavou', category: 'ORP město' },
  { name: 'Městský úřad Vimperk', address: 'Steinbrenerova 6, 385 17 Vimperk', category: 'ORP město' },
  { name: 'Městský úřad Vodňany', address: 'nám. Svobody 18, 389 01 Vodňany', category: 'ORP město' },
  { name: 'Městský úřad Blatná', address: 'tř. T. G. Masaryka 322, 388 01 Blatná', category: 'ORP město' },

  // ORP – Plzeňský kraj
  { name: 'Městský úřad Blovice', address: 'Masarykovo nám. 143, 336 01 Blovice', category: 'ORP město' },
  { name: 'Městský úřad Domažlice', address: 'nám. Míru 1, 344 20 Domažlice', category: 'ORP město' },
  { name: 'Městský úřad Horažďovice', address: 'Mírové nám. 1, 341 01 Horažďovice', category: 'ORP město' },
  { name: 'Městský úřad Horšovský Týn', address: 'nám. Republiky 52, 346 01 Horšovský Týn', category: 'ORP město' },
  { name: 'Městský úřad Klatovy', address: 'nám. Míru 62, 339 01 Klatovy', category: 'ORP město' },
  { name: 'Městský úřad Kralovice', address: 'Markrabího 2/73, 331 41 Kralovice', category: 'ORP město' },
  { name: 'Městský úřad Nepomuk', address: 'nám. Augustina Němejce 63, 335 01 Nepomuk', category: 'ORP město' },
  { name: 'Městský úřad Nýřany', address: 'Benešova tř. 315, 330 23 Nýřany', category: 'ORP město' },
  { name: 'Městský úřad Přeštice', address: 'Masarykovo nám. 107, 334 01 Přeštice', category: 'ORP město' },
  { name: 'Městský úřad Rokycany', address: 'Masarykovo nám. 1, 337 01 Rokycany', category: 'ORP město' },
  { name: 'Městský úřad Stod', address: 'nám. ČSA 294, 333 01 Stod', category: 'ORP město' },
  { name: 'Městský úřad Sušice', address: 'nám. Svobody 138, 342 01 Sušice', category: 'ORP město' },
  { name: 'Městský úřad Tachov', address: 'Hornická 1695, 347 01 Tachov', category: 'ORP město' },

  // ORP – Karlovarský kraj
  { name: 'Městský úřad Aš', address: 'Kamenná 52, 352 01 Aš', category: 'ORP město' },
  { name: 'Městský úřad Cheb', address: 'nám. Krále Jiřího z Poděbrad 1/14, 350 20 Cheb', category: 'ORP město' },
  { name: 'Městský úřad Kraslice', address: 'nám. 28. října 1438, 358 20 Kraslice', category: 'ORP město' },
  { name: 'Městský úřad Mariánské Lázně', address: 'Ruská 155, 353 01 Mariánské Lázně', category: 'ORP město' },
  { name: 'Městský úřad Ostrov', address: 'Jáchymovská 1, 363 01 Ostrov', category: 'ORP město' },
  { name: 'Městský úřad Sokolov', address: 'Rokycanova 1929, 356 01 Sokolov', category: 'ORP město' },

  // ORP – Ústecký kraj
  { name: 'Městský úřad Bílina', address: 'Břežánská 50/4, 418 31 Bílina', category: 'ORP město' },
  { name: 'Městský úřad Kadaň', address: 'Mírové nám. 1, 432 01 Kadaň', category: 'ORP město' },
  { name: 'Městský úřad Litoměřice', address: 'Mírové nám. 15/7, 412 01 Litoměřice', category: 'ORP město' },
  { name: 'Městský úřad Litvínov', address: 'Městský úřad Litvínov, nám. Míru 11, 436 01 Litvínov', category: 'ORP město' },
  { name: 'Městský úřad Louny', address: 'Mírové nám. 35, 440 23 Louny', category: 'ORP město' },
  { name: 'Městský úřad Lovosice', address: 'Školní 407/2, 410 30 Lovosice', category: 'ORP město' },
  { name: 'Městský úřad Podbořany', address: 'Masarykovo nám. 146, 441 01 Podbořany', category: 'ORP město' },
  { name: 'Městský úřad Roudnice nad Labem', address: 'Karlovo nám. 21, 413 21 Roudnice nad Labem', category: 'ORP město' },
  { name: 'Městský úřad Rumburk', address: 'tř. 9. května 1366/48, 408 01 Rumburk', category: 'ORP město' },
  { name: 'Městský úřad Varnsdorf', address: 'nám. E. Beneše 470, 407 47 Varnsdorf', category: 'ORP město' },
  { name: 'Městský úřad Žatec', address: 'nám. Svobody 1, 438 01 Žatec', category: 'ORP město' },

  // ORP – Liberecký kraj
  { name: 'Městský úřad Česká Lípa', address: 'nám. T. G. Masaryka 1, 470 36 Česká Lípa', category: 'ORP město' },
  { name: 'Městský úřad Frýdlant', address: 'nám. T. G. Masaryka 37, 464 01 Frýdlant', category: 'ORP město' },
  { name: 'Městský úřad Jilemnice', address: 'Masarykovo nám. 82, 514 01 Jilemnice', category: 'ORP město' },
  { name: 'Městský úřad Nový Bor', address: 'nám. Míru 1, 473 01 Nový Bor', category: 'ORP město' },
  { name: 'Městský úřad Semily', address: 'Husova 82, 513 13 Semily', category: 'ORP město' },
  { name: 'Městský úřad Tanvald', address: 'Palackého 359, 468 41 Tanvald', category: 'ORP město' },
  { name: 'Městský úřad Turnov', address: 'Antonína Dvořáka 335, 511 01 Turnov', category: 'ORP město' },
  { name: 'Městský úřad Železný Brod', address: 'nám. 3. května 1, 468 22 Železný Brod', category: 'ORP město' },

  // ORP – Královéhradecký kraj
  { name: 'Městský úřad Broumov', address: 'třída Masarykova 239, 550 01 Broumov', category: 'ORP město' },
  { name: 'Městský úřad Dobruška', address: 'nám. F. L. Věka 11, 518 01 Dobruška', category: 'ORP město' },
  { name: 'Městský úřad Dvůr Králové nad Labem', address: 'nám. T. G. Masaryka 38, 544 17 Dvůr Králové nad Labem', category: 'ORP město' },
  { name: 'Městský úřad Hořice', address: 'nám. Jiřího z Poděbrad 342, 508 19 Hořice', category: 'ORP město' },
  { name: 'Městský úřad Jaroměř', address: 'nám. Československé armády 16, 551 01 Jaroměř', category: 'ORP město' },
  { name: 'Městský úřad Jičín', address: 'Žižkovo nám. 18, 506 01 Jičín', category: 'ORP město' },
  { name: 'Městský úřad Kostelec nad Orlicí', address: 'Palackého nám. 38, 517 41 Kostelec nad Orlicí', category: 'ORP město' },
  { name: 'Městský úřad Náchod', address: 'Masarykovo nám. 40, 547 01 Náchod', category: 'ORP město' },
  { name: 'Městský úřad Nová Paka', address: 'Dukelské nám. 39, 509 24 Nová Paka', category: 'ORP město' },
  { name: 'Městský úřad Nové Město nad Metují', address: 'nám. Republiky 6, 549 01 Nové Město nad Metují', category: 'ORP město' },
  { name: 'Městský úřad Nový Bydžov', address: 'Masarykovo nám. 1, 504 01 Nový Bydžov', category: 'ORP město' },
  { name: 'Městský úřad Rychnov nad Kněžnou', address: 'Havlíčkova 136, 516 01 Rychnov nad Kněžnou', category: 'ORP město' },
  { name: 'Městský úřad Trutnov', address: 'Slovanské nám. 165, 541 16 Trutnov', category: 'ORP město' },
  { name: 'Městský úřad Vrchlabí', address: 'Zámek 1, 543 11 Vrchlabí', category: 'ORP město' },

  // ORP – Pardubický kraj
  { name: 'Městský úřad Hlinsko', address: 'Poděbradovo nám. 1, 539 23 Hlinsko', category: 'ORP město' },
  { name: 'Městský úřad Holice', address: 'Holubova 1, 534 14 Holice', category: 'ORP město' },
  { name: 'Městský úřad Chrudim', address: 'Resselovo nám. 77, 537 16 Chrudim', category: 'ORP město' },
  { name: 'Městský úřad Králíky', address: 'Velké nám. 5, 561 69 Králíky', category: 'ORP město' },
  { name: 'Městský úřad Lanškroun', address: 'nám. J. M. Marků 12, 563 16 Lanškroun', category: 'ORP město' },
  { name: 'Městský úřad Litomyšl', address: 'Bří Šťastných 1000, 570 20 Litomyšl', category: 'ORP město' },
  { name: 'Městský úřad Moravská Třebová', address: 'nám. T. G. Masaryka 29, 571 01 Moravská Třebová', category: 'ORP město' },
  { name: 'Městský úřad Polička', address: 'Palackého nám. 160, 572 01 Polička', category: 'ORP město' },
  { name: 'Městský úřad Přelouč', address: 'Československé armády 1665, 535 33 Přelouč', category: 'ORP město' },
  { name: 'Městský úřad Svitavy', address: 'T. G. Masaryka 35, 568 02 Svitavy', category: 'ORP město' },
  { name: 'Městský úřad Ústí nad Orlicí', address: 'Sychrova 16, 562 24 Ústí nad Orlicí', category: 'ORP město' },
  { name: 'Městský úřad Vysoké Mýto', address: 'B. Smetany 92, 566 32 Vysoké Mýto', category: 'ORP město' },
  { name: 'Městský úřad Žamberk', address: 'Masarykovo nám. 166, 564 01 Žamberk', category: 'ORP město' },

  // ORP – Kraj Vysočina
  { name: 'Městský úřad Bystřice nad Pernštejnem', address: 'Příční 405, 593 14 Bystřice nad Pernštejnem', category: 'ORP město' },
  { name: 'Městský úřad Chotěboř', address: 'Trčků z Lípy 69, 583 01 Chotěboř', category: 'ORP město' },
  { name: 'Městský úřad Havlíčkův Brod', address: 'Havlíčkovo nám. 57, 580 61 Havlíčkův Brod', category: 'ORP město' },
  { name: 'Městský úřad Humpolec', address: 'Horní nám. 300, 396 22 Humpolec', category: 'ORP město' },
  { name: 'Městský úřad Moravské Budějovice', address: 'nám. Míru 36, 676 02 Moravské Budějovice', category: 'ORP město' },
  { name: 'Městský úřad Náměšť nad Oslavou', address: 'Masarykovo nám. 104, 675 71 Náměšť nad Oslavou', category: 'ORP město' },
  { name: 'Městský úřad Nové Město na Moravě', address: 'Vratislavovo nám. 103, 592 31 Nové Město na Moravě', category: 'ORP město' },
  { name: 'Městský úřad Pacov', address: 'nám. Svobody 1, 395 01 Pacov', category: 'ORP město' },
  { name: 'Městský úřad Pelhřimov', address: 'Masarykovo nám. 1, 393 01 Pelhřimov', category: 'ORP město' },
  { name: 'Městský úřad Světlá nad Sázavou', address: 'nám. Trčků z Lípy 18, 582 91 Světlá nad Sázavou', category: 'ORP město' },
  { name: 'Městský úřad Telč', address: 'nám. Zachariáše z Hradce 10, 588 56 Telč', category: 'ORP město' },
  { name: 'Městský úřad Třebíč', address: 'Karlovo nám. 104/55, 674 01 Třebíč', category: 'ORP město' },
  { name: 'Městský úřad Velké Meziříčí', address: 'Radnická 29/1, 594 13 Velké Meziříčí', category: 'ORP město' },
  { name: 'Městský úřad Žďár nad Sázavou', address: 'Žižkova 227/1, 591 31 Žďár nad Sázavou', category: 'ORP město' },

  // ORP – Jihomoravský kraj
  { name: 'Městský úřad Blansko', address: 'nám. Svobody 3, 678 01 Blansko', category: 'ORP město' },
  { name: 'Městský úřad Boskovice', address: 'Masarykovo nám. 4/2, 680 18 Boskovice', category: 'ORP město' },
  { name: 'Městský úřad Břeclav', address: 'nám. T. G. Masaryka 42/3, 690 81 Břeclav', category: 'ORP město' },
  { name: 'Městský úřad Bučovice', address: 'Jiráskova 502, 685 01 Bučovice', category: 'ORP město' },
  { name: 'Městský úřad Hodonín', address: 'Masarykovo nám. 53/1, 695 35 Hodonín', category: 'ORP město' },
  { name: 'Městský úřad Hustopeče', address: 'Dukelské nám. 2/2, 693 17 Hustopeče', category: 'ORP město' },
  { name: 'Městský úřad Ivančice', address: 'Palackého nám. 196/6, 664 91 Ivančice', category: 'ORP město' },
  { name: 'Městský úřad Kuřim', address: 'Jungmannova 968/75, 664 34 Kuřim', category: 'ORP město' },
  { name: 'Městský úřad Kyjov', address: 'Masarykovo nám. 30/1, 697 01 Kyjov', category: 'ORP město' },
  { name: 'Městský úřad Mikulov', address: 'Náměstí 1, 692 20 Mikulov', category: 'ORP město' },
  { name: 'Městský úřad Moravský Krumlov', address: 'nám. Klášterní 125, 672 11 Moravský Krumlov', category: 'ORP město' },
  { name: 'Městský úřad Pohořelice', address: 'Vídeňská 699, 691 23 Pohořelice', category: 'ORP město' },
  { name: 'Městský úřad Rosice', address: 'Palackého nám. 13, 665 01 Rosice', category: 'ORP město' },
  { name: 'Městský úřad Slavkov u Brna', address: 'Palackého nám. 65, 684 01 Slavkov u Brna', category: 'ORP město' },
  { name: 'Městský úřad Šlapanice', address: 'Masarykovo nám. 100/7, 664 51 Šlapanice', category: 'ORP město' },
  { name: 'Městský úřad Tišnov', address: 'nám. Míru 111, 666 19 Tišnov', category: 'ORP město' },
  { name: 'Městský úřad Veselí nad Moravou', address: 'tř. Masarykova 119, 698 01 Veselí nad Moravou', category: 'ORP město' },
  { name: 'Městský úřad Vyškov', address: 'Masarykovo nám. 1, 682 01 Vyškov', category: 'ORP město' },
  { name: 'Městský úřad Znojmo', address: 'Obroková 1/12, 669 22 Znojmo', category: 'ORP město' },
  { name: 'Městský úřad Židlochovice', address: 'Masarykova 100, 667 01 Židlochovice', category: 'ORP město' },

  // ORP – Olomoucký kraj
  { name: 'Městský úřad Hranice', address: 'Pernštejnské nám. 1, 753 37 Hranice', category: 'ORP město' },
  { name: 'Městský úřad Jeseník', address: 'Masarykovo nám. 167/1, 790 01 Jeseník', category: 'ORP město' },
  { name: 'Městský úřad Konice', address: 'Masarykovo nám. 27, 798 52 Konice', category: 'ORP město' },
  { name: 'Městský úřad Lipník nad Bečvou', address: 'nám. T. G. Masaryka 89, 751 31 Lipník nad Bečvou', category: 'ORP město' },
  { name: 'Městský úřad Litovel', address: 'nám. Přemysla Otakara 778, 784 01 Litovel', category: 'ORP město' },
  { name: 'Městský úřad Mohelnice', address: 'U Brány 916/2, 789 85 Mohelnice', category: 'ORP město' },
  { name: 'Městský úřad Šternberk', address: 'Horní nám. 16, 785 01 Šternberk', category: 'ORP město' },
  { name: 'Městský úřad Šumperk', address: 'nám. Míru 1, 787 01 Šumperk', category: 'ORP město' },
  { name: 'Městský úřad Uničov', address: 'Masarykovo nám. 1, 783 91 Uničov', category: 'ORP město' },
  { name: 'Městský úřad Zábřeh', address: 'Masarykovo nám. 6/510, 789 01 Zábřeh', category: 'ORP město' },

  // ORP – Zlínský kraj
  { name: 'Městský úřad Bystřice pod Hostýnem', address: 'Masarykovo nám. 137, 768 61 Bystřice pod Hostýnem', category: 'ORP město' },
  { name: 'Městský úřad Holešov', address: 'Masarykova 628, 769 17 Holešov', category: 'ORP město' },
  { name: 'Městský úřad Kroměříž', address: 'Velké nám. 115, 767 01 Kroměříž', category: 'ORP město' },
  { name: 'Městský úřad Luhačovice', address: 'nám. 28. října 543, 763 26 Luhačovice', category: 'ORP město' },
  { name: 'Městský úřad Otrokovice', address: 'nám. 3. května 1340, 765 02 Otrokovice', category: 'ORP město' },
  { name: 'Městský úřad Rožnov pod Radhoštěm', address: 'Masarykovo nám. 128, 756 61 Rožnov pod Radhoštěm', category: 'ORP město' },
  { name: 'Městský úřad Uherské Hradiště', address: 'Masarykovo nám. 19, 686 01 Uherské Hradiště', category: 'ORP město' },
  { name: 'Městský úřad Uherský Brod', address: 'Masarykovo nám. 100, 688 01 Uherský Brod', category: 'ORP město' },
  { name: 'Městský úřad Valašské Klobouky', address: 'Masarykovo nám. 189, 766 01 Valašské Klobouky', category: 'ORP město' },
  { name: 'Městský úřad Valašské Meziříčí', address: 'Soudní 1221, 757 01 Valašské Meziříčí', category: 'ORP město' },
  { name: 'Městský úřad Vizovice', address: 'Masarykovo nám. 1007, 763 12 Vizovice', category: 'ORP město' },
  { name: 'Městský úřad Vsetín', address: 'Svárov 1080, 755 24 Vsetín', category: 'ORP město' },

  // ORP – Moravskoslezský kraj
  { name: 'Městský úřad Bílovec', address: 'Slezské nám. 1, 743 01 Bílovec', category: 'ORP město' },
  { name: 'Městský úřad Bohumín', address: 'Masarykova 158, 735 81 Bohumín', category: 'ORP město' },
  { name: 'Městský úřad Bruntál', address: 'Nádražní 994/20, 792 01 Bruntál', category: 'ORP město' },
  { name: 'Městský úřad Český Těšín', address: 'nám. ČSA 1/1, 737 01 Český Těšín', category: 'ORP město' },
  { name: 'Městský úřad Frenštát pod Radhoštěm', address: 'nám. Míru 1, 744 01 Frenštát pod Radhoštěm', category: 'ORP město' },
  { name: 'Městský úřad Frýdlant nad Ostravicí', address: 'Hlavní 139, 739 11 Frýdlant nad Ostravicí', category: 'ORP město' },
  { name: 'Městský úřad Hlučín', address: 'Mírové nám. 23, 748 01 Hlučín', category: 'ORP město' },
  { name: 'Městský úřad Jablunkov', address: 'Dukelská 144, 739 91 Jablunkov', category: 'ORP město' },
  { name: 'Městský úřad Kopřivnice', address: 'Štefánikova 1163, 742 21 Kopřivnice', category: 'ORP město' },
  { name: 'Městský úřad Kravaře', address: 'Náměstí 405/43, 747 21 Kravaře', category: 'ORP město' },
  { name: 'Městský úřad Krnov', address: 'Hlavní nám. 1, 794 01 Krnov', category: 'ORP město' },
  { name: 'Městský úřad Nový Jičín', address: 'Masarykovo nám. 1, 741 01 Nový Jičín', category: 'ORP město' },
  { name: 'Městský úřad Odry', address: 'Masarykovo nám. 25, 742 35 Odry', category: 'ORP město' },
  { name: 'Městský úřad Orlová', address: 'Osvobození 796, 735 14 Orlová', category: 'ORP město' },
  { name: 'Městský úřad Rýmařov', address: 'nám. Míru 230/1, 795 01 Rýmařov', category: 'ORP město' },
  { name: 'Městský úřad Vítkov', address: 'nám. Jana Zajíce 7, 749 01 Vítkov', category: 'ORP město' },
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
    .slice(0, 10);
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
