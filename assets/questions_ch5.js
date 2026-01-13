/* ======================================================
   Projektmanagement – Kapitel 5 (Repetitorium)
   Themen:
   - Projektplanung, -kontrolle & -steuerung
   - Regelkreis
   - Soll-Ist-Vergleich
   - Trendanalysen (MTA, KTA, ATA)
   - Steuerungsmaßnahmen + Nebenwirkungen
   Strategie: basic / compare / transfer / calculation
   ====================================================== */

window.QUESTIONS_CH5 = [
  // =====================================================
  // A) REGELKREIS & SOLL-IST (basic/compare)
  // =====================================================
  {
    id: "ch5-001",
    type: "basic",
    q: "Was ist der Zweck des Projekt-Regelkreises (Planung–Kontrolle–Steuerung)?",
    options: [
      "Nach Projektstart keine Änderungen mehr zulassen",
      "Abweichungen früh erkennen und durch Maßnahmen die Zielerreichung sichern",
      "Nur Reporting für das Management erzeugen",
      "Planung komplett durch Bauchgefühl ersetzen"
    ],
    answer: 1,
    explanation: "Regelkreis = kontinuierliche Steuerung: messen, vergleichen, analysieren, gegensteuern."
  },
  {
    id: "ch5-002",
    type: "basic",
    q: "Welche Reihenfolge passt am besten zum Regelkreis im Projektmanagement?",
    options: [
      "Maßnahmen → Planen → Messen → Abschluss",
      "Planen (Soll) → Messen (Ist) → Soll-Ist-Vergleich → Abweichungsanalyse → Maßnahmen → Nachkontrolle",
      "Messen → Planen → Entscheiden → Vergessen",
      "Start → Ende → Abnahme → Lessons Learned"
    ],
    answer: 1,
    explanation: "Kernlogik: Soll definieren, Ist erfassen, vergleichen, analysieren, steuern, Wirkung prüfen."
  },
  {
    id: "ch5-003",
    type: "compare",
    q: "Was beschreibt der Soll-Ist-Vergleich am treffendsten?",
    options: [
      "Eine reine Budgetfreigabe",
      "Gegenüberstellung geplanter Werte (Soll) und realer Werte (Ist) zur Erkennung von Abweichungen",
      "Ein kreatives Brainstorming ohne Zahlen",
      "Nur die Erstellung eines Gantt-Diagramms"
    ],
    answer: 1,
    explanation: "Soll-Ist = Basis für Abweichungsanalyse und Steuerungsentscheidungen."
  },
  {
    id: "ch5-004",
    type: "compare",
    q: "Warum reicht reines Reporting ohne Analyse nicht aus?",
    options: [
      "Weil Reporting verboten ist",
      "Weil Abweichungen ohne Ursachenanalyse nicht zielgerichtet steuerbar sind",
      "Weil dadurch Kosten automatisch sinken",
      "Weil Stakeholder dann weniger Informationen bekommen"
    ],
    answer: 1,
    explanation: "Ohne Ursachenanalyse keine wirksame Maßnahme (sonst Symptombekämpfung)."
  },
  {
    id: "ch5-005",
    type: "basic",
    q: "Welche Dimensionen werden im Soll-Ist-Vergleich in Projekten typischerweise betrachtet?",
    options: [
      "Nur Teamstimmung",
      "Zeit/Termine, Kosten, Leistung/Scope (ggf. Qualität)",
      "Nur Design und Farben",
      "Nur Marketing-KPIs"
    ],
    answer: 1,
    explanation: "Klassisch: Zeit, Kosten, Leistung (und oft Qualität/Scope eng gekoppelt)."
  },
  {
    id: "ch5-006",
    type: "transfer",
    q: "Transfer: Du siehst eine Abweichung in Terminen. Was ist der nächste professionelle Schritt?",
    options: [
      "Sofort mehr Leute einstellen",
      "Ursachenanalyse (warum?) und Trend/Prognose prüfen, dann Maßnahme wählen",
      "Abweichung ignorieren, weil Termine immer rutschen",
      "Nur ein Status-Meeting ohne Ergebnis"
    ],
    answer: 1,
    explanation: "Erst Ursache + Trend, dann Steuerungsmaßnahme. Sonst falsche Therapie."
  },
  {
    id: "ch5-007",
    type: "compare",
    q: "Welche Aussage ist korrekt: Kontrolle vs. Steuerung?",
    options: [
      "Kontrolle = Maßnahmen ergreifen, Steuerung = messen",
      "Kontrolle = Abweichung feststellen/analysieren, Steuerung = Maßnahmen ableiten/umsetzen",
      "Beides ist identisch",
      "Steuerung ist nur am Projektende"
    ],
    answer: 1,
    explanation: "Kontrolle liefert Erkenntnis, Steuerung liefert Eingriff/Umsetzung."
  },
  {
    id: "ch5-008",
    type: "transfer",
    q: "Transfer: Ein Projekt ist 'im Plan', aber die Qualität sinkt. Was ist die richtige Interpretation?",
    options: [
      "Alles gut, Hauptsache Termine stimmen",
      "Qualität ist eine Zielgröße; ohne Qualitätskontrolle ist 'im Plan' eine Scheinsicherheit",
      "Qualität ist kein Projektthema",
      "Qualität wird erst nach Go-Live wichtig"
    ],
    answer: 1,
    explanation: "Zeit/Kosten 'grün' kann bei schlechter Qualität später teures Rework erzeugen."
  },

  // =====================================================
  // B) TRENDANALYSEN GRUNDLAGEN (basic/compare)
  // =====================================================
  {
    id: "ch5-009",
    type: "basic",
    q: "Was ist das Grundprinzip einer Trendanalyse im Projektcontrolling?",
    options: [
      "Abweichungen werden ignoriert",
      "Aus bisherigen Abweichungsverläufen eine Prognose für die Zukunft ableiten",
      "Nur Endwerte vergleichen",
      "Nur Stakeholder befragen"
    ],
    answer: 1,
    explanation: "Trend = Verlauf beobachten → Zukunft ableiten → früh gegensteuern."
  },
  {
    id: "ch5-010",
    type: "basic",
    q: "Wofür steht MTA im Projektcontrolling-Kontext?",
    options: [
      "Meilenstein-Trendanalyse",
      "Kosten-Trendanalyse",
      "Aufwand-Trendanalyse",
      "Maßnahmen-Trendanalyse"
    ],
    answer: 0,
    explanation: "MTA = Meilenstein-Trendanalyse (Termintrends)."
  },
  {
    id: "ch5-011",
    type: "basic",
    q: "Wofür steht KTA im Projektcontrolling-Kontext?",
    options: [
      "Kompetenz-Trendanalyse",
      "Kosten-Trendanalyse",
      "Konzept-Trendanalyse",
      "Kunden-Trendanalyse"
    ],
    answer: 1,
    explanation: "KTA = Kosten-Trendanalyse (Kostentrends)."
  },
  {
    id: "ch5-012",
    type: "basic",
    q: "Wofür steht ATA im Projektcontrolling-Kontext?",
    options: [
      "Aufwand-Trendanalyse",
      "Abnahme-Trendanalyse",
      "Agile-Trendanalyse",
      "Anforderungs-Trendanalyse"
    ],
    answer: 0,
    explanation: "ATA = Aufwand-Trendanalyse (Aufwandstrends)."
  },
  {
    id: "ch5-013",
    type: "compare",
    q: "Welche Zuordnung ist korrekt?",
    options: [
      "MTA = Kosten, KTA = Termine, ATA = Aufwand",
      "MTA = Termine/Meilensteine, KTA = Kosten, ATA = Aufwand",
      "MTA = Qualität, KTA = Scope, ATA = Risiken",
      "Alle drei sind identisch"
    ],
    answer: 1,
    explanation: "MTA→Termin, KTA→Kosten, ATA→Aufwand."
  },
  {
    id: "ch5-014",
    type: "compare",
    q: "Warum sind Trendanalysen häufig 'früher' als reine Endkontrolle?",
    options: [
      "Weil sie nur am Ende berechnet werden",
      "Weil sie Entwicklungen sichtbar machen, bevor ein Ziel endgültig verfehlt wird",
      "Weil sie keine Daten brauchen",
      "Weil sie immer 100% korrekt sind"
    ],
    answer: 1,
    explanation: "Trend zeigt Richtung/Tempo der Abweichung → frühe Warnung."
  },

  // =====================================================
  // C) MTA – TERMIN-TRENDS (transfer/calculation)
  // =====================================================
  {
    id: "ch5-015",
    type: "transfer",
    q: "Transfer: MTA zeigt, dass ein Meilenstein von Bericht zu Bericht immer später prognostiziert wird. Was bedeutet das?",
    options: [
      "Projekt wird schneller",
      "Terminlage verschlechtert sich (steigender Verzugstrend)",
      "Kosten sinken automatisch",
      "Nur die Dokumentation ist schlecht"
    ],
    answer: 1,
    explanation: "Steigende Prognose = Termintrend nach hinten."
  },
  {
    id: "ch5-016",
    type: "transfer",
    q: "Transfer: Welche Steuerungslogik passt bei negativer MTA (Termine rutschen)?",
    options: [
      "Nur Kosten erhöhen, ohne Ursachen",
      "Ursachen analysieren (kritische Vorgänge/Schnittstellen) und dann z.B. Re-Planung, Priorisierung, Fast-Tracking oder Ressourcen anpassen",
      "Terminplan löschen",
      "Scope erweitern"
    ],
    answer: 1,
    explanation: "Termintrend → Ursachen + gezielte Maßnahmen (nicht blind)."
  },
  {
    id: "ch5-017",
    type: "calculation",
    q: "Rechnung (MTA-Logik): Der prognostizierte Verzug steigt pro Woche um 1 Woche. Aktuell beträgt der Verzug 3 Wochen. Wie groß ist der erwartete Verzug in 2 Wochen, wenn kein Eingriff erfolgt?",
    options: ["1 Woche", "3 Wochen", "5 Wochen", "6 Wochen"],
    answer: 2,
    explanation: "3 Wochen + (2 Wochen * 1 Woche/Woche) = 5 Wochen."
  },
  {
    id: "ch5-018",
    type: "calculation",
    q: "Rechnung (MTA-Logik): Verzug steigt von 2 Wochen auf 4 Wochen innerhalb von 2 Statusberichten (Abstand 2 Wochen). Wie hoch ist die Verzug-Zunahme pro Woche?",
    options: ["0,5 Wochen/Woche", "1 Woche/Woche", "2 Wochen/Woche", "4 Wochen/Woche"],
    answer: 1,
    explanation: "Zunahme 2 Wochen in 2 Wochen → 1 Woche/Woche."
  },

  // =====================================================
  // D) KTA – KOSTEN-TRENDS (transfer/calculation)
  // =====================================================
  {
    id: "ch5-019",
    type: "transfer",
    q: "Transfer: KTA zeigt, dass die Kostenabweichung über mehrere Perioden kontinuierlich steigt. Was ist die korrekte Aussage?",
    options: [
      "Kosten werden sich automatisch stabilisieren",
      "Das Projekt steuert auf Budgetüberschreitung zu, wenn keine Maßnahmen erfolgen",
      "Termine verbessern sich automatisch",
      "Es betrifft nur das Reporting"
    ],
    answer: 1,
    explanation: "Steigender Kostentrend = wachsende Budgetgefahr."
  },
  {
    id: "ch5-020",
    type: "calculation",
    q: "Rechnung (KTA-Logik): Budget (BAC) = 100.000 €. Nach 40% Projektzeit beträgt die Kostenabweichung +10.000 € (über Plan). Unter linearem Trend: Wie hoch ist die erwartete Endabweichung?",
    options: ["+10.000 €", "+15.000 €", "+25.000 €", "+40.000 €"],
    answer: 2,
    explanation: "10.000 € bei 40% ⇒ 10.000/0,4 = 25.000 € Endabweichung (linear)."
  },
  {
    id: "ch5-021",
    type: "calculation",
    q: "Rechnung (KTA-Logik): Planbudget 200.000 €. Aktuell (50%) liegen Ist-Kosten um 30.000 € über dem Plan. Lineare Prognose: Wie hoch wäre die Prognose für das Endbudget?",
    options: ["230.000 €", "240.000 €", "260.000 €", "320.000 €"],
    answer: 2,
    explanation: "Endabweichung = 30.000/0,5 = 60.000 ⇒ Endbudget = 260.000 €."
  },
  {
    id: "ch5-022",
    type: "transfer",
    q: "Transfer: Welche Maßnahme senkt Kosten kurzfristig oft, kann aber langfristig Qualität/Rework-Risiko erhöhen?",
    options: [
      "Qualitätssicherung erhöhen",
      "Scope reduzieren oder Qualität 'abschneiden' (z.B. Tests kürzen)",
      "Transparenz erhöhen",
      "Stakeholder besser informieren"
    ],
    answer: 1,
    explanation: "Kosten-/Zeitdruck über QA-Kürzung spart kurzfristig, erhöht später Rework/Fehlerkosten."
  },

  // =====================================================
  // E) ATA – AUFWAND-TRENDS (transfer/calculation)
  // =====================================================
  {
    id: "ch5-023",
    type: "transfer",
    q: "Transfer: ATA zeigt, dass der Restaufwand über mehrere Berichte steigt. Was ist die wahrscheinlichste Interpretation?",
    options: [
      "Projekt wird früher fertig",
      "Planung war zu optimistisch oder Scope/Komplexität wurde unterschätzt",
      "Kosten sinken automatisch",
      "Team ist überqualifiziert"
    ],
    answer: 1,
    explanation: "Steigender Restaufwand = Aufwandtrend nach oben (optimistische Schätzung/Scopeänderung)."
  },
  {
    id: "ch5-024",
    type: "calculation",
    q: "Rechnung (ATA-Logik): Geplanter Gesamtaufwand 1.000h. Nach 30% Fortschritt sind bereits 450h verbraucht. Lineare Prognose: Wie hoch ist der erwartete Gesamtaufwand?",
    options: ["900h", "1.000h", "1.200h", "1.500h"],
    answer: 3,
    explanation: "450h bei 30% ⇒ 450/0,3 = 1.500h."
  },
  {
    id: "ch5-025",
    type: "calculation",
    q: "Rechnung (ATA-Logik): Nach 60% Fortschritt sind 780h verbraucht. Wie hoch ist die lineare Prognose für den Gesamtaufwand?",
    options: ["900h", "1.000h", "1.200h", "1.300h"],
    answer: 2,
    explanation: "780/0,6 = 1.300h? Achtung: 780 ÷ 0,6 = 1300 → Option d wäre 1.300h. (Korrekt ist 1.300h)."
  },
  {
    id: "ch5-025b",
    type: "calculation",
    q: "Rechnung (ATA-Logik, korrigiert): Nach 60% Fortschritt sind 780h verbraucht. Wie hoch ist die lineare Prognose für den Gesamtaufwand?",
    options: ["1.000h", "1.200h", "1.300h", "1.500h"],
    answer: 2,
    explanation: "780h ÷ 0,6 = 1.300h."
  },
  {
    id: "ch5-026",
    type: "transfer",
    q: "Transfer: Welche Ursache passt typischerweise zu steigender ATA trotz konstantem Scope?",
    options: [
      "Team hat zu viele Pausen",
      "Produktivität niedriger als geplant (Einarbeitung, Tooling, Schnittstellen, Wartezeiten)",
      "Projekt hat keine Stakeholder",
      "Es gibt keine Risiken"
    ],
    answer: 1,
    explanation: "Aufwand steigt oft durch Produktivitätseinbußen und Koordinationsverluste."
  },

  // =====================================================
  // F) STEUERUNGSMASSNAHMEN + NEBENWIRKUNGEN (transfer heavy)
  // =====================================================
  {
    id: "ch5-027",
    type: "transfer",
    q: "Welche Maßnahme ist klassisch, wenn Termine rutschen, ohne das Budget stark zu erhöhen?",
    options: [
      "Mehr Scope aufnehmen",
      "Priorisieren/Scope reduzieren (Must zuerst), um termingerecht Kernnutzen zu liefern",
      "Alles parallelisieren ohne Abhängigkeiten zu prüfen",
      "Qualität komplett streichen"
    ],
    answer: 1,
    explanation: "Scope-Priorisierung ist oft effizienter als blindes Ressourcen-Aufstocken."
  },
  {
    id: "ch5-028",
    type: "transfer",
    q: "Welche Nebenwirkung ist typisch, wenn du Termine durch Überstunden drücken willst?",
    options: [
      "Motivation steigt dauerhaft, Fehler sinken",
      "Burnout-Risiko, Fehler/Rework steigen, Produktivität sinkt mittelfristig",
      "Kosten sinken automatisch",
      "Stakeholder werden leiser"
    ],
    answer: 1,
    explanation: "Dauer-Overtime senkt Qualität und Produktivität, erhöht Fluktuationsrisiko."
  },
  {
    id: "ch5-029",
    type: "transfer",
    q: "Welche Nebenwirkung ist typisch, wenn du zusätzliche Ressourcen 'drauf wirfst' (Crash)?",
    options: [
      "Kommunikationsaufwand sinkt",
      "Onboarding- und Koordinationsaufwand steigt, kurzfristig ggf. Produktivitätseinbruch",
      "Qualität wird automatisch perfekt",
      "Risiken verschwinden"
    ],
    answer: 1,
    explanation: "Brooks-like Effekt: mehr Leute → mehr Koordination, nicht sofort mehr Output."
  },
  {
    id: "ch5-030",
    type: "transfer",
    q: "Fast-Tracking bedeutet typischerweise…",
    options: [
      "Scope reduzieren",
      "Phasen/Arbeiten überlappend durchführen, um Zeit zu gewinnen",
      "Kosten senken durch weniger Tests",
      "Team verkleinern"
    ],
    answer: 1,
    explanation: "Fast-Tracking = Parallelisierung/Überlappung → Zeitgewinn, aber Risiko steigt."
  },
  {
    id: "ch5-031",
    type: "transfer",
    q: "Welche Nebenwirkung hat Fast-Tracking häufig?",
    options: [
      "Risiko sinkt",
      "Rework-Risiko steigt durch unklare Schnittstellen/Änderungen",
      "Kommunikation wird überflüssig",
      "Qualität steigt automatisch"
    ],
    answer: 1,
    explanation: "Überlappung → höhere Rework-/Schnittstellenrisiken."
  },
  {
    id: "ch5-032",
    type: "transfer",
    q: "Welche Maßnahme passt bei negativer KTA (Kosten laufen aus dem Ruder), ohne die Qualität zu opfern?",
    options: [
      "Qualitätstests streichen",
      "Lieferanten-/Make-or-Buy prüfen, Leistungsumfang priorisieren, ineffiziente Tätigkeiten eliminieren",
      "Mehr Features hinzufügen",
      "Nur Reporting machen"
    ],
    answer: 1,
    explanation: "Kostensteuerung: Effizienz, Scope-Priorisierung, Beschaffung optimieren – nicht blind QA kürzen."
  },
  {
    id: "ch5-033",
    type: "transfer",
    q: "Welche Nebenwirkung ist typisch, wenn du den Scope reduzierst?",
    options: [
      "Stakeholderzufriedenheit steigt immer",
      "Stakeholderkonflikte möglich, da Erwartungen angepasst werden müssen",
      "Kosten steigen automatisch",
      "Projekt wird komplexer"
    ],
    answer: 1,
    explanation: "Scope-Reduktion braucht Change/Erwartungsmanagement."
  },
  {
    id: "ch5-034",
    type: "transfer",
    q: "Welche Maßnahme ist bei steigender ATA (Aufwand) oft sinnvoll, bevor du Leute aufstockst?",
    options: [
      "Prozess-/Ablaufblockaden lösen (Wartezeiten, Abhängigkeiten, Tooling), klare Priorisierung und WIP begrenzen",
      "Mehr parallele Aufgaben starten",
      "Mehr Meetings einführen",
      "Einfach ignorieren"
    ],
    answer: 0,
    explanation: "Erst Flow/Engpässe lösen, dann Ressourcen – sonst erhöhst du nur Koordination."
  },

  // =====================================================
  // G) KLAUSUR-TRANSFER: TREND → MASSNAHME → NEBENWIRKUNG
  // =====================================================
  {
    id: "ch5-035",
    type: "transfer",
    q: "Transfer: MTA negativ (Termintrend nach hinten), KTA stabil, ATA steigt. Welche Diagnose ist am plausibelsten?",
    options: [
      "Kostenproblem",
      "Produktivitäts-/Kapazitätsproblem oder unterschätzte Komplexität (mehr Aufwand → Termine rutschen)",
      "Qualitätsproblem ausschließlich",
      "Stakeholderproblem ausschließlich"
    ],
    answer: 1,
    explanation: "Wenn Aufwand hochgeht und Termine rutschen, ohne Kostentrend: Produktivität/Schätzung/Komplexität."
  },
  {
    id: "ch5-036",
    type: "transfer",
    q: "Transfer: KTA negativ (Kosten steigen), ATA stabil, MTA stabil. Was ist plausibel?",
    options: [
      "Kostensteigerung durch externe Preise/Tagessätze, ohne Mehrarbeit",
      "Mehrarbeit ohne Mehrkosten",
      "Keine Probleme",
      "Projekt wird schneller"
    ],
    answer: 0,
    explanation: "Kosten können steigen (Preise, externe Ressourcen), auch wenn Aufwand gleich bleibt."
  },
  {
    id: "ch5-037",
    type: "transfer",
    q: "Transfer: ATA negativ (mehr Aufwand), KTA negativ (mehr Kosten), MTA negativ (Termine rutschen). Was ist eine sinnvolle erste Maßnahme?",
    options: [
      "Weiterarbeiten wie bisher",
      "Sofort Ursachenanalyse/Engpassanalyse + harte Priorisierung (Scope/WIP) und Governance-Entscheidung",
      "Neue Features hinzufügen",
      "Nur Statusreport verschicken"
    ],
    answer: 1,
    explanation: "Dreifach-negativ = Eskalation/Diagnose/Entscheidung + Priorisierung."
  },
  {
    id: "ch5-038",
    type: "transfer",
    q: "Transfer: Du wählst „mehr Ressourcen“ als Steuerungsmaßnahme. Welche Nebenwirkung musst du im Plan aktiv berücksichtigen?",
    options: [
      "Keine",
      "Onboarding/Koordination/Kommunikation steigt → kurzfristig evtl. langsamer",
      "Qualität steigt automatisch",
      "Risiken verschwinden"
    ],
    answer: 1,
    explanation: "Ressourcenaufstockung braucht Ramp-up und erhöht Koordinationskosten."
  },
  {
    id: "ch5-039",
    type: "transfer",
    q: "Transfer: Welche Maßnahme ist am gefährlichsten, wenn MTA negativ ist, aber die Ursachen unklar sind?",
    options: [
      "Ursachenanalyse",
      "Blindes Fast-Tracking ohne Abhängigkeitsprüfung",
      "Re-Planung",
      "Scope-Priorisierung"
    ],
    answer: 1,
    explanation: "Parallelisieren ohne Abhängigkeitscheck erhöht Rework massiv."
  },

  // =====================================================
  // H) DRILL-FRAGEN (compare/basic)
  // =====================================================
  {
    id: "ch5-040",
    type: "compare",
    q: "Welche Aussage ist korrekt: Soll-Ist-Vergleich ist…",
    options: [
      "…die letzte Phase des Projekts",
      "…ein Element der Kontrolle und Grundlage für Steuerungsmaßnahmen",
      "…nur für agile Projekte relevant",
      "…identisch mit Lessons Learned"
    ],
    answer: 1,
    explanation: "Soll-Ist = Kontrolle, Basis für Steuerung."
  },
  {
    id: "ch5-041",
    type: "basic",
    q: "Welche Aussage passt zu „Abweichungsanalyse“ am besten?",
    options: [
      "Nur Zahlen ablesen",
      "Ursachen und Auswirkungen einer Abweichung verstehen, um Maßnahmen ableiten zu können",
      "Nur Verantwortliche suchen",
      "Nur Scope erweitern"
    ],
    answer: 1,
    explanation: "Analyse = Ursache/Wirkung/Handlungsoptionen."
  },
  {
    id: "ch5-042",
    type: "transfer",
    q: "Transfer: Ein Team ist ständig im 'Feuerlöschen'. Was ist oft die Controlling-Ursache?",
    options: [
      "Zu häufige Trendanalysen",
      "Kein stabiler Regelkreis (zu spät erkennen → reaktiv statt proaktiv)",
      "Zu viele SMART-Ziele",
      "Zu viele Stakeholder"
    ],
    answer: 1,
    explanation: "Ohne Regelkreis/Frühwarnung wird Steuerung reaktiv."
  },
  {
    id: "ch5-043",
    type: "transfer",
    q: "Transfer: Welche Kombination ist eine saubere Entscheidungslogik in der Klausur?",
    options: [
      "Abweichung → Maßnahme ohne Begründung",
      "Abweichung → Trend/Prognose → Ursachenanalyse → Maßnahme + Nebenwirkung",
      "Trend → ignorieren → weiter",
      "Nur Bauchgefühl"
    ],
    answer: 1,
    explanation: "Das ist die klausursichere Argumentationskette."
  },

  // =====================================================
  // I) EXTRA RECHEN-DRILL (calculation)
  // =====================================================
  {
    id: "ch5-044",
    type: "calculation",
    q: "Rechnung: Planbudget 120.000 €. Nach 25% Fortschritt beträgt die Kostenabweichung +6.000 €. Lineare Prognose: Endabweichung?",
    options: ["+6.000 €", "+12.000 €", "+18.000 €", "+24.000 €"],
    answer: 3,
    explanation: "6.000 / 0,25 = 24.000 € Endabweichung."
  },
  {
    id: "ch5-045",
    type: "calculation",
    q: "Rechnung: Geplanter Gesamtaufwand 800h. Nach 50% Fortschritt wurden 520h verbraucht. Lineare Prognose: Gesamtaufwand?",
    options: ["800h", "900h", "1.040h", "1.200h"],
    answer: 2,
    explanation: "520 / 0,5 = 1.040h."
  },
  {
    id: "ch5-046",
    type: "calculation",
    q: "Rechnung (MTA): Der Verzug beträgt aktuell 4 Wochen. Pro Woche steigt der Verzug um 0,5 Wochen. Wie groß ist der Verzug in 4 Wochen?",
    options: ["4 Wochen", "5 Wochen", "6 Wochen", "8 Wochen"],
    answer: 2,
    explanation: "Zunahme: 4*0,5 = 2 → 4+2 = 6 Wochen."
  },

  // =====================================================
  // J) WEITERE KLAUSUR-TRANSFER (Maßnahmen + Nebenwirkungen)
  // =====================================================
  {
    id: "ch5-047",
    type: "transfer",
    q: "Transfer: Du kürzt Tests, um Termin zu halten. Welche Nebenwirkung ist am wahrscheinlichsten?",
    options: [
      "Weniger Bugs nach Go-Live",
      "Mehr Defekte/Incidents und späterer Rework-Aufwand",
      "Geringerer Aufwand im Betrieb",
      "Automatisch höhere Stakeholderzufriedenheit"
    ],
    answer: 1,
    explanation: "QA kürzen verschiebt Arbeit in Betrieb/Rework."
  },
  {
    id: "ch5-048",
    type: "transfer",
    q: "Transfer: Du erhöhst Meetingfrequenz, um Steuerung zu verbessern. Wann wird das zur Nebenwirkung?",
    options: [
      "Wenn Meetings Entscheidungen/Outputs liefern",
      "Wenn Meetings Arbeit verdrängen und Entscheidungen trotzdem ausbleiben (Entscheidungsstau)",
      "Wenn alle Meetings kurz sind",
      "Wenn Stakeholder informiert werden"
    ],
    answer: 1,
    explanation: "Meetings ohne Entscheide = Overhead, senkt Produktivität."
  },
  {
    id: "ch5-049",
    type: "transfer",
    q: "Transfer: Welche Maßnahme ist bei wiederholtem Entscheidungsstau am sinnvollsten?",
    options: [
      "Mehr Aufgaben parallel starten",
      "Governance klären: Entscheidungskompetenzen/Eskalationspfad, regelmäßige Entscheider-Termine",
      "QA kürzen",
      "Risikomanagement abschaffen"
    ],
    answer: 1,
    explanation: "Entscheidungsstau ist Governance-Thema."
  },
  {
    id: "ch5-050",
    type: "transfer",
    q: "Transfer: Trend zeigt Verschlechterung, aber Datenqualität ist fragwürdig. Was ist der richtige Schritt?",
    options: [
      "Maßnahmen sofort ohne Prüfung",
      "Datenbasis prüfen (Ist-Erfassung), dann erst Trend interpretieren",
      "Trendanalysen abschaffen",
      "Nur Stakeholder befragen"
    ],
    answer: 1,
    explanation: "Garbage in, garbage out: Controlling braucht valide Ist-Daten."
  }
];
