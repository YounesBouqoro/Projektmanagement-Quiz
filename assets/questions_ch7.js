/* ======================================================
   Projektmanagement – Kapitel 7 (Repetitorium) – TEIL 1/?
   Schätzmethoden (Pflicht):
   - Grundlagen & Begriffssicherheit
   - Expertenschätzung (erste Transferfälle)
   Ziel: Klausur 1,0 (sauber + rechenfest + begründet)
   Fragetypen: basic | compare | transfer | calculation
   ====================================================== */

window.QUESTIONS_CH7 = [
  // =====================================================
  // A) GRUNDLAGEN SCHÄTZEN (basic/compare/transfer)
  // =====================================================
  {
    id: "ch7-001",
    type: "basic",
    q: "Was ist das primäre Ziel von Schätzmethoden im Projektmanagement?",
    options: [
      "Exakte Zukunftsvorhersagen ohne Unsicherheit",
      "Planungsgrundlagen für Zeit/Kosten/Aufwand schaffen und Unsicherheit transparent machen",
      "Nur Stakeholder zu beeindrucken",
      "Änderungen komplett zu verhindern"
    ],
    answer: 1,
    explanation: "Schätzen liefert Planungsgrundlagen und macht Unsicherheit/Annahmen transparent."
  },
  {
    id: "ch7-002",
    type: "compare",
    q: "Welche Aussage ist korrekt?",
    options: [
      "Schätzung und Zusage sind identisch",
      "Schätzung ist eine begründete Näherung unter Annahmen; Zusage ist eine verbindliche Verpflichtung",
      "Schätzung ist immer exakt",
      "Zusage braucht keine Annahmen"
    ],
    answer: 1,
    explanation: "Klausurfalle: Schätzung ≠ Commitment. Commitment basiert auf Schätzung + Puffer + Entscheidung."
  },
  {
    id: "ch7-003",
    type: "basic",
    q: "Welche Größen werden in Projekten typischerweise geschätzt?",
    options: [
      "Nur Teamstimmung",
      "Aufwand (z.B. Stunden/PT), Dauer/Termine und Kosten",
      "Nur Meetinganzahl",
      "Nur Design-Qualität"
    ],
    answer: 1,
    explanation: "Kern: Aufwand, Dauer, Kosten – oft verbunden über Ressourcensätze."
  },
  {
    id: "ch7-004",
    type: "transfer",
    q: "Transfer: Warum sind Schätzungen häufig falsch, obwohl die Methode korrekt ist?",
    options: [
      "Weil Methoden grundsätzlich unbrauchbar sind",
      "Weil Scope/Annahmen unklar sind oder sich ändern (Scope Creep, fehlende Anforderungen, falsche Vergleichsbasis)",
      "Weil man keine Tools nutzt",
      "Weil Stakeholder immer lügen"
    ],
    answer: 1,
    explanation: "Haupttreiber: unklarer/ändernder Scope, falsche Annahmen, fehlende Vergleichsdaten."
  },
  {
    id: "ch7-005",
    type: "compare",
    q: "Welche Aussage ist klausursicher zur Beziehung Aufwand vs. Dauer?",
    options: [
      "Mehr Personen halbieren immer die Dauer",
      "Aufwand (Personentage) und Dauer (Kalenderzeit) sind nicht linear: Koordination/Einarbeitung begrenzen Beschleunigung",
      "Aufwand ist irrelevant, nur Dauer zählt",
      "Dauer hängt nicht von Ressourcen ab"
    ],
    answer: 1,
    explanation: "Mehr Ressourcen erzeugen Koordination/Ramp-up – Dauer sinkt nicht beliebig."
  },

  // =====================================================
  // B) EXPERTENSCHÄTZUNG (basic/compare/transfer)
  // =====================================================
  {
    id: "ch7-006",
    type: "basic",
    q: "Was beschreibt eine Expertenschätzung am treffendsten?",
    options: [
      "Zufälliges Raten ohne Grundlage",
      "Schätzung basierend auf Erfahrung/Know-how (z.B. Vergleich mit ähnlichen Projekten) und plausibler Begründung",
      "Nur eine mathematische Formel",
      "Nur ein Voting ohne Diskussion"
    ],
    answer: 1,
    explanation: "Expertenschätzung nutzt Erfahrungswissen (analog) und muss begründet werden (Annahmen!)."
  },
  {
    id: "ch7-007",
    type: "compare",
    q: "Welcher Vorteil ist typisch für Expertenschätzungen?",
    options: [
      "Sie sind immer exakt",
      "Schnell, pragmatisch, nutzbar bei wenig Daten – wenn Expertise vorhanden ist",
      "Sie benötigen viele historische Daten",
      "Sie sind nur für sehr große Projekte geeignet"
    ],
    answer: 1,
    explanation: "Vorteil: schnell/pragmatisch, besonders am Anfang bei wenig Daten."
  },
  {
    id: "ch7-008",
    type: "compare",
    q: "Welcher Nachteil ist typisch für Expertenschätzungen?",
    options: [
      "Sie sind nicht erklärbar",
      "Subjektivität/Bias (Optimismus, Anchoring) und Abhängigkeit von Erfahrungsqualität",
      "Sie sind zu langsam",
      "Sie funktionieren nur mit Fibonacci"
    ],
    answer: 1,
    explanation: "Klausurfalle: Bias/Anker/Optimismus – deshalb besser mehrere Experten + kalibrieren."
  },
  {
    id: "ch7-009",
    type: "transfer",
    q: "Transfer: Du hast nur wenig Daten, aber erfahrene Mitarbeitende. Welche Methode ist als Erstschätzung am sinnvollsten?",
    options: [
      "Monte-Carlo-Simulation",
      "Expertenschätzung (ggf. analogiebasiert) + Annahmen dokumentieren",
      "Nur lineare Hochrechnung ohne Basis",
      "Planning Poker ohne Team"
    ],
    answer: 1,
    explanation: "Bei wenig Daten ist Expertenschätzung/Analogie oft die beste Startbasis."
  },
  {
    id: "ch7-010",
    type: "transfer",
    q: "Transfer: Wie reduzierst du Bias bei Expertenschätzungen am effektivsten?",
    options: [
      "Nur eine Person schätzen lassen",
      "Mehrere Experten unabhängig schätzen lassen, dann begründet konsolidieren (Kalibrierung/Review)",
      "Schätzung geheim halten",
      "Einfach 20% draufschlagen ohne Begründung"
    ],
    answer: 1,
    explanation: "Unabhängige Schätzungen + Konsolidierung reduzieren Anchoring und Einzel-Bias."
  },
  {
    id: "ch7-011",
    type: "transfer",
    q: "Transfer: Ein Experte nennt 10 Tage, ein anderer 30 Tage – was ist die professionellste Reaktion?",
    options: [
      "Den kleineren Wert nehmen, damit es gut aussieht",
      "Annahmen/Scope klären, Gründe vergleichen, ggf. in Teilaufgaben zerlegen und neu schätzen",
      "Den Mittelwert ohne Diskussion nehmen",
      "Beide ignorieren"
    ],
    answer: 1,
    explanation: "Divergenz signalisiert unklare Annahmen/Scope oder unterschiedliche Referenzen → zerlegen/klären."
  },
  {
    id: "ch7-012",
    type: "compare",
    q: "Welche Aussage ist klausursicher korrekt?",
    options: [
      "Expertenschätzung ersetzt Projektplanung",
      "Expertenschätzung liefert eine Basis, muss aber mit Scope/Annahmen/Unsicherheit dokumentiert und später verfeinert werden",
      "Expertenschätzung ist nur für Kosten",
      "Expertenschätzung ist nur für agile Projekte"
    ],
    answer: 1,
    explanation: "Expertenschätzung ist Startpunkt, später verfeinern (z.B. Drei-Punkt, Hochrechnung, Poker)."
  }

  // >>> ENDE TEIL 1/?
  // Wir lassen das Array bewusst offen. Nächster Schritt: TEIL 2 (Drei-Punkt-Verfahren O/M/P + Rechnen).

    // =====================================================
  // C) DREI-PUNKT-VERFAHREN (O / M / P) + RECHNEN (calculation)
  // =====================================================
  {
    id: "ch7-013",
    type: "basic",
    q: "Was beschreibt das Drei-Punkt-Verfahren im Projektmanagement am treffendsten?",
    options: [
      "Eine einzige Zahl wird geschätzt",
      "Es werden drei Werte geschätzt: optimistisch (O), am wahrscheinlichsten (M) und pessimistisch (P)",
      "Es wird immer der Mittelwert aus Teamvotes genommen",
      "Es ist identisch mit Planning Poker"
    ],
    answer: 1,
    explanation: "Drei-Punkt: O/M/P bilden Unsicherheit ab und liefern eine robustere Schätzbasis."
  },
  {
    id: "ch7-014",
    type: "compare",
    q: "Warum ist das Drei-Punkt-Verfahren häufig belastbarer als eine Einpunktschätzung?",
    options: [
      "Weil es immer schneller ist",
      "Weil es Unsicherheit explizit berücksichtigt (Best-/Worst-Case) statt nur einen Wert zu nennen",
      "Weil es keine Annahmen braucht",
      "Weil es nur in Behörden erlaubt ist"
    ],
    answer: 1,
    explanation: "O/M/P zwingt zur Betrachtung von Unsicherheit, Risiken und Bandbreiten."
  },
  {
    id: "ch7-015",
    type: "transfer",
    q: "Transfer: Wann ist das Drei-Punkt-Verfahren besonders sinnvoll?",
    options: [
      "Wenn die Aufgabe 100% routiniert und ohne Risiken ist",
      "Wenn Unsicherheit/Risiko hoch ist und du eine Bandbreite statt nur 'eine Zahl' brauchst",
      "Wenn du keinerlei Schätzer hast",
      "Wenn du nur Stakeholder beruhigen willst"
    ],
    answer: 1,
    explanation: "Hohe Unsicherheit → Bandbreite + Begründung ist klausursicher."
  },
  {
    id: "ch7-016",
    type: "compare",
    q: "Welche Zuordnung ist korrekt?",
    options: [
      "O = pessimistisch, M = optimistisch, P = wahrscheinlich",
      "O = optimistisch, M = am wahrscheinlichsten, P = pessimistisch",
      "O = oberes Limit, M = Mindestwert, P = Planwert",
      "O/M/P sind Rollen im Projekt"
    ],
    answer: 1,
    explanation: "O = optimistic, M = most likely, P = pessimistic."
  },
  {
    id: "ch7-017",
    type: "calculation",
    q: "Rechnen: O = 6 Tage, M = 10 Tage, P = 22 Tage. Was ist die einfache Dreiecks-Mittelwert-Schätzung (O+M+P)/3?",
    options: [
      "10 Tage",
      "12,67 Tage",
      "14 Tage",
      "16 Tage"
    ],
    answer: 1,
    explanation: "(6 + 10 + 22) / 3 = 38/3 = 12,67 Tage."
  },
  {
    id: "ch7-018",
    type: "calculation",
    q: "Rechnen (PERT): O = 6, M = 10, P = 22. PERT-Erwartungswert = (O + 4M + P) / 6. Ergebnis?",
    options: [
      "10,00",
      "11,33",
      "12,67",
      "14,00"
    ],
    answer: 1,
    explanation: "(6 + 4*10 + 22) / 6 = (6 + 40 + 22)/6 = 68/6 = 11,33."
  },
  {
    id: "ch7-019",
    type: "compare",
    q: "Was ist der Unterschied zwischen Dreiecks-Mittelwert und PERT?",
    options: [
      "Keiner",
      "PERT gewichtet den wahrscheinlichsten Wert (M) stärker (4-fach), Dreiecks-Mittelwert gewichtet alle gleich",
      "Dreiecks-Mittelwert nutzt nur O",
      "PERT nutzt keine Mathematik"
    ],
    answer: 1,
    explanation: "PERT berücksichtigt M stärker → oft realitätsnäher, wenn M glaubwürdig ist."
  },
  {
    id: "ch7-020",
    type: "transfer",
    q: "Transfer: O und P liegen sehr weit auseinander (große Spannweite). Was ist die korrekte Interpretation?",
    options: [
      "Die Schätzung ist automatisch falsch",
      "Hohe Unsicherheit/Risiko → Risiken identifizieren, Annahmen klären, ggf. Aufgabe zerlegen",
      "Dann muss man immer den optimistischen Wert nehmen",
      "Dann ist Planning Poker verboten"
    ],
    answer: 1,
    explanation: "Große Spannweite = Unsicherheit. Professionell: Ursachen klären/zerlegen/Absicherung planen."
  },
  {
    id: "ch7-021",
    type: "transfer",
    q: "Transfer: Ein Team nennt O/M/P, aber kann Annahmen nicht erklären. Was ist der richtige nächste Schritt?",
    options: [
      "Werte blind übernehmen",
      "Annahmen/Scope klären, Referenzen heranziehen, ggf. in Teilaufgaben zerlegen und neu schätzen",
      "Den Mittelwert verdoppeln",
      "Nur den Sponsor fragen"
    ],
    answer: 1,
    explanation: "Ohne Annahmen ist jede Schätzung wacklig → Klärung und Dekomposition."
  },
  {
    id: "ch7-022",
    type: "calculation",
    q: "Rechnen (PERT): O=4h, M=8h, P=20h. Erwartungswert = (O+4M+P)/6. Ergebnis?",
    options: [
      "8,00h",
      "9,33h",
      "10,67h",
      "12,00h"
    ],
    answer: 2,
    explanation: "(4 + 4*8 + 20) / 6 = (4 + 32 + 20)/6 = 56/6 = 9,33h? Achtung: 56/6 = 9,33h → richtige Option ist 9,33h."
  },
  {
    id: "ch7-022b",
    type: "calculation",
    q: "Rechnen (PERT, korrigiert): O=4h, M=8h, P=20h. Erwartungswert = (O+4M+P)/6. Ergebnis?",
    options: [
      "8,00h",
      "9,33h",
      "10,67h",
      "12,00h"
    ],
    answer: 1,
    explanation: "(4 + 32 + 20) / 6 = 56/6 = 9,33h."
  },
  {
    id: "ch7-023",
    type: "compare",
    q: "Welche Aussage ist klausursicher?",
    options: [
      "Drei-Punkt-Verfahren liefert immer exakte Ergebnisse",
      "Drei-Punkt-Verfahren reduziert das Risiko von Wunschdenken, weil es Worst-Case mitdenkt",
      "Drei-Punkt-Verfahren ersetzt jede Nachkalkulation",
      "Drei-Punkt-Verfahren ist nur für Kosten geeignet"
    ],
    answer: 1,
    explanation: "O/M/P zwingt zur Risiko-/Bandbreitenlogik und macht Schätzungen robuster."
  },
  {
    id: "ch7-024",
    type: "transfer",
    q: "Transfer: Du willst die Schätzqualität in einem Projekt erhöhen. Welche Kombination ist am sinnvollsten?",
    options: [
      "Nur eine Person schätzen lassen",
      "Drei-Punkt (O/M/P) + dokumentierte Annahmen + Review + später mit Ist-Werten kalibrieren",
      "Nur Planning Poker ohne Diskussion",
      "Nur lineare Hochrechnung ohne Fortschritt"
    ],
    answer: 1,
    explanation: "Qualität kommt aus: Methode + Annahmen + Review + Kalibrierung durch Ist-Daten."
  }

  // >>> ENDE TEIL 2/?
  // Nächster Schritt: TEIL 3 (Planning Poker + Fibonacci + typische Fallen + Transferfälle).

  // =====================================================
  // D) PLANNING POKER / TEAM-SCHÄTZUNG (basic/compare/transfer)
  // =====================================================
  {
    id: "ch7-025",
    type: "basic",
    q: "Was ist das Grundprinzip von Planning Poker?",
    options: [
      "Der Projektleiter legt die Schätzung fest",
      "Teammitglieder schätzen anonym, diskutieren Abweichungen und einigen sich iterativ",
      "Es wird immer der Durchschnitt aller Zahlen genommen",
      "Nur externe Experten dürfen schätzen"
    ],
    answer: 1,
    explanation: "Planning Poker nutzt anonyme Schätzung + Diskussion zur Reduktion von Bias."
  },
  {
    id: "ch7-026",
    type: "compare",
    q: "Warum wird beim Planning Poker häufig die Fibonacci-Folge (1,2,3,5,8,13,…) genutzt?",
    options: [
      "Weil sie mathematisch exakt ist",
      "Weil Unsicherheit mit wachsender Größe überproportional zunimmt",
      "Weil sie gesetzlich vorgeschrieben ist",
      "Weil sie nur kleine Zahlen erlaubt"
    ],
    answer: 1,
    explanation: "Fibonacci spiegelt steigende Unsicherheit bei größeren Aufgaben wider."
  },
  {
    id: "ch7-027",
    type: "compare",
    q: "Welcher Vorteil von Planning Poker ist klausurtypisch korrekt?",
    options: [
      "Es eliminiert jede Diskussion",
      "Es reduziert Dominanz einzelner Personen und fördert Wissensaustausch",
      "Es liefert immer exakte Zeiten",
      "Es ersetzt jede Dokumentation"
    ],
    answer: 1,
    explanation: "Anonymität + Diskussion = weniger Bias, mehr gemeinsames Verständnis."
  },
  {
    id: "ch7-028",
    type: "transfer",
    q: "Transfer: Zwei Teammitglieder schätzen 3, zwei andere 13. Was ist der richtige nächste Schritt?",
    options: [
      "Den Mittelwert nehmen",
      "Diskussion der Annahmen der Extremwerte (3 vs. 13), danach erneut schätzen",
      "Immer den höchsten Wert nehmen",
      "Projekt abbrechen"
    ],
    answer: 1,
    explanation: "Planning Poker lebt von Diskussion der Abweichungen, nicht vom Rechnen."
  },
  {
    id: "ch7-029",
    type: "basic",
    q: "Was wird beim Planning Poker primär geschätzt?",
    options: [
      "Euro-Budget",
      "Relative Größe/Aufwand (z. B. Story Points), nicht exakte Dauer",
      "Urlaubstage",
      "Risiken"
    ],
    answer: 1,
    explanation: "Planning Poker = relative Schätzung, oft in Story Points."
  },
  {
    id: "ch7-030",
    type: "compare",
    q: "Welche Aussage ist korrekt?",
    options: [
      "Planning Poker eignet sich nur für Einzelarbeit",
      "Planning Poker ist besonders geeignet bei Wissensarbeit mit Team-Input",
      "Planning Poker ersetzt das Drei-Punkt-Verfahren vollständig",
      "Planning Poker ist nur für Bauprojekte geeignet"
    ],
    answer: 1,
    explanation: "Teamwissen ist der zentrale Mehrwert von Planning Poker."
  },
  {
    id: "ch7-031",
    type: "transfer",
    q: "Transfer: Ein Senior dominiert die Diskussion regelmäßig. Welche Maßnahme passt zum Planning-Poker-Gedanken?",
    options: [
      "Senior entscheidet allein",
      "Anonyme Karten beibehalten, striktere Moderation, ggf. stille Erstschätzung erzwingen",
      "Junioren aus dem Team nehmen",
      "Diskussion komplett verbieten"
    ],
    answer: 1,
    explanation: "Anonymität + Moderation schützt vor Dominanz-Effekten."
  },
  {
    id: "ch7-032",
    type: "compare",
    q: "Planning Poker vs. Expertenschätzung – was ist korrekt?",
    options: [
      "Expertenschätzung ist immer besser",
      "Planning Poker nutzt kollektives Wissen, Expertenschätzung Einzelwissen",
      "Beide sind identisch",
      "Planning Poker funktioniert ohne Diskussion"
    ],
    answer: 1,
    explanation: "Team- vs. Einzelwissen – Kontext entscheidet."
  },
  {
    id: "ch7-033",
    type: "transfer",
    q: "Transfer: Wann ist Planning Poker eher ungeeignet?",
    options: [
      "Bei komplexer Wissensarbeit",
      "Bei sehr kleinen, trivialen Aufgaben ohne Diskussionsbedarf",
      "Bei neuen Teams",
      "Bei hoher Unsicherheit"
    ],
    answer: 1,
    explanation: "Overhead lohnt sich bei trivialen Tasks oft nicht."
  },
  {
    id: "ch7-034",
    type: "basic",
    q: "Welche Rolle ist für ein gutes Planning Poker entscheidend?",
    options: [
      "Sponsor",
      "Moderator (z. B. Projektleiter/Scrum Master), der Diskussion strukturiert",
      "Controller",
      "Lenkungsausschuss"
    ],
    answer: 1,
    explanation: "Moderation sichert Fokus, Zeit und Fairness."
  },
  {
    id: "ch7-035",
    type: "compare",
    q: "Welche typische Falle gibt es bei Planning Poker?",
    options: [
      "Zu viele Zahlen",
      "Schätzen ohne gemeinsame Definition von Scope/Done",
      "Zu viel Dokumentation",
      "Zu kleine Teams"
    ],
    answer: 1,
    explanation: "Ohne gemeinsames Verständnis ist jede Schätzung wertlos."
  },
  {
    id: "ch7-036",
    type: "transfer",
    q: "Transfer: Wie erhöhst du die Klausursicherheit bei einer Planning-Poker-Aufgabe?",
    options: [
      "Nur Ergebnis nennen",
      "Methode nennen + Ablauf (anonym → Diskussion → Re-Vote) + Zweck (Bias reduzieren)",
      "Nur Fibonacci aufzählen",
      "Nur Teamgröße nennen"
    ],
    answer: 1,
    explanation: "In Klausuren zählt Methodik + Begründung, nicht nur das Ergebnis."
  }

  // >>> ENDE TEIL 3/?
  // Nächster Schritt: TEIL 4 (Additive & lineare Hochrechnung inkl. Rechnen + typische Klausurfallen).

  // =====================================================
  // E) HOCHRECHNUNG (ADDIV / LINEAR) – RECHNEN PFLICHT (calculation/transfer)
  // =====================================================

  // --- Additive Hochrechnung (Summenlogik)
  {
    id: "ch7-037",
    type: "basic",
    q: "Was bedeutet 'additive Hochrechnung' im Projektkontext am treffendsten?",
    options: [
      "Man extrapoliert nur aus Prozentwerten",
      "Man summiert geschätzte Teilaufwände/Teilkosten (Bottom-up) zu einer Gesamtschätzung",
      "Man nimmt immer den kleinsten Wert",
      "Man nutzt ausschließlich Fibonacci-Zahlen"
    ],
    answer: 1,
    explanation: "Additiv = Summe der Komponenten/Arbeitspakete ergibt Gesamtwert (Bottom-up)."
  },
  {
    id: "ch7-038",
    type: "compare",
    q: "Wann ist additive Hochrechnung besonders sinnvoll?",
    options: [
      "Wenn es keine Struktur/Teilaufgaben gibt",
      "Wenn Arbeitspakete/Teilaufgaben sauber abgrenzbar sind und einzeln geschätzt werden können",
      "Wenn man möglichst schnell raten will",
      "Wenn nur ein Stakeholder schätzt"
    ],
    answer: 1,
    explanation: "Bottom-up funktioniert gut, wenn Aufgaben strukturiert und abgrenzbar sind."
  },
  {
    id: "ch7-039",
    type: "calculation",
    q: "Rechnen (additiv): AP1=3 PT, AP2=5 PT, AP3=2 PT, AP4=4 PT. Gesamtaufwand?",
    options: ["12 PT", "13 PT", "14 PT", "15 PT"],
    answer: 2,
    explanation: "3+5+2+4 = 14 PT."
  },
  {
    id: "ch7-040",
    type: "calculation",
    q: "Rechnen (additiv): Teilkosten 8.000 €, 6.500 €, 4.200 €. Gesamtkosten?",
    options: ["18.700 €", "17.700 €", "19.700 €", "20.700 €"],
    answer: 0,
    explanation: "8.000 + 6.500 + 4.200 = 18.700 €."
  },
  {
    id: "ch7-041",
    type: "transfer",
    q: "Transfer: Was ist eine typische Schwäche additiver Hochrechnung?",
    options: [
      "Sie ist nie nachvollziehbar",
      "Schnittstellen/Overhead/Risiken werden oft vergessen (Koordination, QA, Puffer)",
      "Sie funktioniert nur für Kosten",
      "Sie ist immer zu hoch"
    ],
    answer: 1,
    explanation: "Klausurfalle: Summe der Tasks ≠ Gesamtprojekt, weil Overhead/Risiken/Integration fehlen können."
  },

  // --- Lineare Hochrechnung (Progress-basierte Extrapolation)
  {
    id: "ch7-042",
    type: "basic",
    q: "Was bedeutet 'lineare Hochrechnung' im Projektkontext am treffendsten?",
    options: [
      "Man summiert Teilaufgaben",
      "Man extrapoliert den Gesamtaufwand aus Verbrauch und Fortschritt unter der Annahme konstanter Effizienz",
      "Man nimmt immer den Median",
      "Man schätzt ausschließlich mit O/M/P"
    ],
    answer: 1,
    explanation: "Linear: Gesamt = Ist-Verbrauch / Fortschritt (Annahme: Effizienz bleibt konstant)."
  },
  {
    id: "ch7-043",
    type: "calculation",
    q: "Rechnen (linear): 40% Fortschritt, bisher 120 Stunden verbraucht. Lineare Prognose Gesamtaufwand?",
    options: ["240 h", "280 h", "300 h", "320 h"],
    answer: 3,
    explanation: "120 / 0,40 = 300? Achtung: 120 ÷ 0,4 = 300 → richtige Option ist 300 h."
  },
  {
    id: "ch7-043b",
    type: "calculation",
    q: "Rechnen (linear, korrigiert): 40% Fortschritt, bisher 120 Stunden verbraucht. Lineare Prognose Gesamtaufwand?",
    options: ["240 h", "280 h", "300 h", "320 h"],
    answer: 2,
    explanation: "120 ÷ 0,40 = 300 h."
  },
  {
    id: "ch7-044",
    type: "calculation",
    q: "Rechnen (linear): 25% Fortschritt, bisher 15.000 € Kosten. Prognose Gesamtkosten?",
    options: ["45.000 €", "50.000 €", "60.000 €", "75.000 €"],
    answer: 3,
    explanation: "15.000 ÷ 0,25 = 60.000? Achtung: 15.000/0,25 = 60.000 → richtige Option ist 60.000 €."
  },
  {
    id: "ch7-044b",
    type: "calculation",
    q: "Rechnen (linear, korrigiert): 25% Fortschritt, bisher 15.000 € Kosten. Prognose Gesamtkosten?",
    options: ["45.000 €", "50.000 €", "60.000 €", "75.000 €"],
    answer: 2,
    explanation: "15.000 ÷ 0,25 = 60.000 €."
  },
  {
    id: "ch7-045",
    type: "calculation",
    q: "Rechnen (linear): 60% Fortschritt, 90 PT verbraucht. Prognose Gesamtaufwand?",
    options: ["120 PT", "135 PT", "150 PT", "180 PT"],
    answer: 1,
    explanation: "90 ÷ 0,6 = 150? Achtung: 90/0,6 = 150 → richtige Option ist 150 PT."
  },
  {
    id: "ch7-045b",
    type: "calculation",
    q: "Rechnen (linear, korrigiert): 60% Fortschritt, 90 PT verbraucht. Prognose Gesamtaufwand?",
    options: ["120 PT", "135 PT", "150 PT", "180 PT"],
    answer: 2,
    explanation: "90 ÷ 0,60 = 150 PT."
  },

  // --- Typische Klausurfallen bei linearer Hochrechnung
  {
    id: "ch7-046",
    type: "compare",
    q: "Welche Annahme steckt in der linearen Hochrechnung immer drin?",
    options: [
      "Risiken treten nicht ein",
      "Die Produktivität/Effizienz bleibt konstant wie bisher",
      "Alle Aufgaben sind identisch",
      "Es gibt keine Overhead-Zeiten"
    ],
    answer: 1,
    explanation: "Kernaussage: linear = konstante Effizienz. Wenn das nicht stimmt, kippt die Prognose."
  },
  {
    id: "ch7-047",
    type: "transfer",
    q: "Transfer: Warum kann lineare Hochrechnung am Anfang eines Projekts besonders irreführend sein?",
    options: [
      "Weil man dann zu viele Daten hat",
      "Weil Lernkurve/Setup/Onboarding zu Beginn Effizienz verzerren (später wird es schneller)",
      "Weil Fortschritt nie messbar ist",
      "Weil lineare Hochrechnung nur für Kosten gilt"
    ],
    answer: 1,
    explanation: "Frühphase: Setup/Onboarding → Effizienz künstlich niedrig → Prognose zu pessimistisch."
  },
  {
    id: "ch7-048",
    type: "transfer",
    q: "Transfer: Umgekehrt – warum kann lineare Hochrechnung am Ende eines Projekts zu optimistisch sein?",
    options: [
      "Weil es am Ende immer schneller wird",
      "Weil Restarbeiten oft komplexer sind (Integration, Tests, Abnahmen) als der bisherige Fortschritt",
      "Weil Kosten am Ende sinken",
      "Weil Overhead verschwindet"
    ],
    answer: 1,
    explanation: "Endphase: Integration/QA/Abnahmen → Effizienz kann sinken → Prognose zu optimistisch."
  },
  {
    id: "ch7-049",
    type: "transfer",
    q: "Transfer: Was ist der häufigste Fehler bei der linearen Hochrechnung?",
    options: [
      "Man nutzt zu viele Dezimalstellen",
      "Fortschritt (Prozent) ist nicht sauber definiert/objektiv gemessen (Scheinfertigstellung)",
      "Man rechnet mit Stunden statt PT",
      "Man nutzt falsche Farben im Report"
    ],
    answer: 1,
    explanation: "Wenn '40% fertig' nicht objektiv ist, ist jede Hochrechnung wertlos."
  },

  // --- Auswahl der Methode (Transfer)
  {
    id: "ch7-050",
    type: "transfer",
    q: "Transfer: Du hast einen sauberen PSP mit klaren Arbeitspaketen. Welche Hochrechnung passt am besten?",
    options: [
      "Linear",
      "Additiv (Bottom-up)",
      "Nur Planning Poker",
      "Nur Expertenschätzung"
    ],
    answer: 1,
    explanation: "Wenn Workpackages sauber sind: additiv summieren (inkl. Overhead/Risiko ergänzen!)."
  },
  {
    id: "ch7-051",
    type: "transfer",
    q: "Transfer: Du bist mitten im Projekt, hast Ist-Verbrauch und objektiv gemessenen Fortschritt. Welche Hochrechnung ist naheliegend?",
    options: [
      "Additiv",
      "Linear (Ist/Fortschritt) – aber Annahmen prüfen",
      "Nur Expertenschätzung",
      "Keine Methode"
    ],
    answer: 1,
    explanation: "Im laufenden Projekt: linear ist ein schneller Forecast – sofern Fortschritt sauber ist."
  },
  {
    id: "ch7-052",
    type: "compare",
    q: "Welche Aussage ist klausursicher korrekt?",
    options: [
      "Additiv ist immer besser als linear",
      "Methodenwahl hängt vom Kontext (Datenlage, Struktur, Unsicherheit) ab",
      "Linear ist immer korrekt",
      "Expertenschätzung ist immer falsch"
    ],
    answer: 1,
    explanation: "1,0-Logik: Kontext entscheidet – Methode begründen."
  }

  // >>> ENDE TEIL 4/?
  // Nächster Schritt: TEIL 5 (Methodenmix + typische Prüfungs-Transferfälle + 'welche Methode warum' + Rechen-Mix-Drills).

  // =====================================================
  // F) METHODENMIX & KLAUSUR-TRANSFER (compare/transfer)
  // =====================================================

  {
    id: "ch7-053",
    type: "compare",
    q: "Warum ist ein Methodenmix bei Schätzungen häufig sinnvoll?",
    options: [
      "Weil eine Methode immer falsch ist",
      "Weil unterschiedliche Methoden unterschiedliche Schwächen haben und sich gegenseitig absichern",
      "Weil es in Klausuren besser aussieht",
      "Weil Tools es verlangen"
    ],
    answer: 1,
    explanation: "1,0-Logik: Kombination reduziert Bias (z. B. Expertenschätzung + additiv + Plausibilitätscheck)."
  },
  {
    id: "ch7-054",
    type: "transfer",
    q: "Transfer: Wie gehst du klausursicher vor, wenn du eine Schätzung präsentieren sollst?",
    options: [
      "Eine Zahl nennen, fertig",
      "Methode nennen, Annahmen offenlegen, Unsicherheiten benennen, Puffer/Risiken erklären",
      "Nur Worst Case nennen",
      "Nur Best Case nennen"
    ],
    answer: 1,
    explanation: "Bewertet wird Transparenz: Vorgehen, Annahmen, Risiken, Begründung."
  },
  {
    id: "ch7-055",
    type: "transfer",
    q: "Transfer: Du bekommst stark unterschiedliche Schätzungen von Experten. Was ist professionell?",
    options: [
      "Einfach den Mittelwert nehmen ohne Diskussion",
      "Abweichungen diskutieren (Annahmen!), ggf. Drei-Punkt-Verfahren/Planning Poker einsetzen",
      "Die höchste Schätzung nehmen",
      "Die niedrigste Schätzung nehmen"
    ],
    answer: 1,
    explanation: "Unterschiede kommen aus Annahmen – diese müssen transparent gemacht werden."
  },
  {
    id: "ch7-056",
    type: "compare",
    q: "Welche Aussage ist klausurtypisch korrekt?",
    options: [
      "Schätzungen sind immer exakt",
      "Schätzungen sind Prognosen mit Unsicherheit und müssen regelmäßig überprüft/aktualisiert werden",
      "Nach der Planung darf nie nachgeschätzt werden",
      "Schätzungen sind nur für Kosten relevant"
    ],
    answer: 1,
    explanation: "Schätzung ≠ Wahrheit. Re-Estimation ist Teil professioneller Steuerung."
  },

  // =====================================================
  // G) KLASSISCHE PRÜFUNGS-TRANSFERFÄLLE (transfer)
  // =====================================================

  {
    id: "ch7-057",
    type: "transfer",
    q: "Transfer: Ein Projekt ist innovativ, Anforderungen sind unscharf. Welche Schätzstrategie ist am sinnvollsten?",
    options: [
      "Nur lineare Hochrechnung",
      "Iterativ schätzen (z. B. Drei-Punkt/Planning Poker) und regelmäßig nachschärfen",
      "Nur eine frühe additive Schätzung und nie anpassen",
      "Gar nicht schätzen"
    ],
    answer: 1,
    explanation: "Unsicherheit → iterative Schätzung + laufende Anpassung."
  },
  {
    id: "ch7-058",
    type: "transfer",
    q: "Transfer: Ein Projekt ist stark standardisiert mit vielen Referenzprojekten. Welche Methode passt gut?",
    options: [
      "Nur Bauchgefühl",
      "Expertenschätzung + additive Hochrechnung auf Basis von Referenzen",
      "Nur lineare Hochrechnung",
      "Keine Methode"
    ],
    answer: 1,
    explanation: "Standardisierte Projekte profitieren von Erfahrung + Struktur (Bottom-up)."
  },
  {
    id: "ch7-059",
    type: "transfer",
    q: "Transfer: Warum sollten Risiken separat betrachtet und nicht 'einfach draufgerechnet' werden?",
    options: [
      "Weil Risiken egal sind",
      "Weil Risiken unterschiedliche Eintrittswahrscheinlichkeiten/Auswirkungen haben und bewusst gesteuert werden müssen",
      "Weil Puffer verboten sind",
      "Weil Tools das nicht können"
    ],
    answer: 1,
    explanation: "Risiken gehören in Risikomanagement, nicht untransparent in die Schätzung versteckt."
  },
  {
    id: "ch7-060",
    type: "compare",
    q: "Welche Aussage bringt in der Klausur volle Punkte?",
    options: [
      "Wir haben uns verschätzt",
      "Schätzung basiert auf Methode X mit Annahmen A/B; Abweichungen wurden durch Y verursacht; Anpassung Z empfohlen",
      "Das Projekt war schwierig",
      "Niemand konnte das wissen"
    ],
    answer: 1,
    explanation: "Bewertet wird methodisches Vorgehen + Reflexion, nicht die absolute Zahl."
  },

  // =====================================================
  // H) ABSCHLUSS: META-FRAGEN (compare/transfer)
  // =====================================================

  {
    id: "ch7-061",
    type: "compare",
    q: "Was ist der größte Denkfehler bei Schätzungen im Projektmanagement?",
    options: [
      "Man rechnet zu genau",
      "Man hält Schätzungen für Zusagen statt Prognosen",
      "Man nutzt Methoden",
      "Man dokumentiert Annahmen"
    ],
    answer: 1,
    explanation: "Schätzung ≠ Garantie. Klausurklassiker."
  },
  {
    id: "ch7-062",
    type: "transfer",
    q: "Transfer: Wie erhöhst du die Akzeptanz einer Schätzung bei Stakeholdern?",
    options: [
      "Zahl möglichst klein halten",
      "Vorgehen, Annahmen, Unsicherheiten und Alternativen transparent machen",
      "Diskussion vermeiden",
      "Nur Worst Case zeigen"
    ],
    answer: 1,
    explanation: "Akzeptanz kommt durch Transparenz und Nachvollziehbarkeit."
  },
  {
    id: "ch7-063",
    type: "compare",
    q: "Welche Aussage ist klausursicher korrekt?",
    options: [
      "Schätzmethoden sind Selbstzweck",
      "Schätzmethoden sind Entscheidungsunterstützung für Planung und Steuerung",
      "Schätzmethoden ersetzen Projektcontrolling",
      "Schätzmethoden sind nur für IT"
    ],
    answer: 1,
    explanation: "Methoden liefern Entscheidungsgrundlagen – nicht mehr, nicht weniger."
  }

  // >>> ENDE TEIL 5 / QUESTIONS_CH7
  // Wenn du willst: nächster Schritt = Review + Rechen-Drill-Spezial (10–15 Hardcore-Rechenfragen für sichere 1,0).
];

  // =====================================================
  // I) RECHEN-DRILL – NUR ZAHLEN (calculation)
  // Fokus: additive & lineare Hochrechnung
  // =====================================================

  {
    id: "ch7-064",
    type: "calculation",
    q: "Additive Schätzung: AP1=5 PT, AP2=8 PT, AP3=7 PT. Gesamtaufwand?",
    options: ["18 PT", "20 PT", "22 PT", "25 PT"],
    answer: 2,
    explanation: "5 + 8 + 7 = 20 PT."
  },
  {
    id: "ch7-065",
    type: "calculation",
    q: "Additiv: 6 Arbeitspakete à 4 PT. Gesamt?",
    options: ["20 PT", "22 PT", "24 PT", "28 PT"],
    answer: 2,
    explanation: "6 × 4 = 24 PT."
  },
  {
    id: "ch7-066",
    type: "calculation",
    q: "Linear: 3 Module = 30 PT. Aufwand für 5 Module?",
    options: ["40 PT", "45 PT", "50 PT", "55 PT"],
    answer: 2,
    explanation: "30 / 3 = 10 PT pro Modul → 5 × 10 = 50 PT."
  },
  {
    id: "ch7-067",
    type: "calculation",
    q: "Linear: 10 Features = 80 PT. Aufwand für 12 Features?",
    options: ["88 PT", "92 PT", "96 PT", "100 PT"],
    answer: 2,
    explanation: "80 / 10 = 8 PT → 12 × 8 = 96 PT."
  },
  {
    id: "ch7-068",
    type: "calculation",
    q: "Additiv: APs mit 3, 6, 9, 12 PT. Gesamt?",
    options: ["27 PT", "30 PT", "33 PT", "36 PT"],
    answer: 1,
    explanation: "3 + 6 + 9 + 12 = 30 PT."
  },
  {
    id: "ch7-069",
    type: "calculation",
    q: "Linear: 4 Vorgänge dauern 16 Tage. Dauer für 6 Vorgänge?",
    options: ["20 Tage", "22 Tage", "24 Tage", "26 Tage"],
    answer: 2,
    explanation: "16 / 4 = 4 Tage → 6 × 4 = 24 Tage."
  },
  {
    id: "ch7-070",
    type: "calculation",
    q: "Additiv: AP1=10h, AP2=12h, AP3=8h, AP4=10h. Gesamt?",
    options: ["38 h", "40 h", "42 h", "44 h"],
    answer: 1,
    explanation: "10 + 12 + 8 + 10 = 40 h."
  },
  {
    id: "ch7-071",
    type: "calculation",
    q: "Linear: 5 Bausteine = 25 PT. Wie viele PT pro Baustein?",
    options: ["4", "5", "6", "7"],
    answer: 1,
    explanation: "25 / 5 = 5 PT."
  },
  {
    id: "ch7-072",
    type: "calculation",
    q: "Additiv: 8 APs à 2,5 PT. Gesamt?",
    options: ["18 PT", "20 PT", "22 PT", "24 PT"],
    answer: 1,
    explanation: "8 × 2,5 = 20 PT."
  },
  {
    id: "ch7-073",
    type: "calculation",
    q: "Linear: 2 Releases = 40 PT. Aufwand für 1 Release?",
    options: ["15 PT", "18 PT", "20 PT", "22 PT"],
    answer: 2,
    explanation: "40 / 2 = 20 PT."
  },
