/* ======================================================
   Projektmanagement – Kapitel 1 (Repetitorium)
   Strategie: Definitionen → Vergleiche → Transfer → Rechnen
   Types: basic | compare | transfer | calculation
   ====================================================== */

window.QUESTIONS_CH1 = [
  // ------------------------------------------------------
  // A) GRUNDLAGEN / UMWELDANALYSE / STAKEHOLDER (basic/compare/transfer)
  // ------------------------------------------------------
  {
    id: "ch1-001",
    type: "basic",
    q: "Was ist das primäre Ziel einer Projekt-Umfeldanalyse?",
    options: [
      "Nur die Projektkosten zu senken",
      "Stakeholder und Einflussfaktoren systematisch zu erkennen, um Chancen/Risiken früh zu identifizieren",
      "Ausschließlich den Projektplan zu erstellen",
      "Nur die Teamstruktur festzulegen"
    ],
    answer: 1,
    explanation: "Umfeldanalyse = systematische Untersuchung von Stakeholdern und Einflussfaktoren zur frühen Chancen-/Risikoerkennung."
  },
  {
    id: "ch1-002",
    type: "basic",
    q: "Welche Aussage trifft die Stakeholder-Definition nach ISO 10006 sinngemäß?",
    options: [
      "Stakeholder sind nur Projektteam-Mitglieder.",
      "Stakeholder sind alle Personen mit Budgetverantwortung.",
      "Stakeholder sind alle, die ein Interesse am Projekt haben oder davon betroffen sind.",
      "Stakeholder sind ausschließlich externe Parteien."
    ],
    answer: 2,
    explanation: "Stakeholder = Personen/Organisationen mit Interesse am Projekt oder Betroffenheit."
  },
  {
    id: "ch1-003",
    type: "basic",
    q: "Was gehört typischerweise zum engeren Projektumfeld?",
    options: [
      "Technologische Entwicklung und Finanzmarkt",
      "Gesellschaft und politische Instanzen",
      "Auftraggeber, Projektmanager, Projektmitarbeiter, Lieferanten, Gesamtunternehmen",
      "Nur Behörden und Regulierungsstellen"
    ],
    answer: 2,
    explanation: "Engeres Umfeld = direkte Akteure/Einflüsse auf Planung und Durchführung."
  },
  {
    id: "ch1-004",
    type: "basic",
    q: "Was gehört typischerweise zum weiteren Projektumfeld?",
    options: [
      "Projektteam und Projektleiter",
      "Lieferanten und Auftraggeber",
      "Gesellschaft, Politik/Behörden, Natur/Umwelt, Finanzmarkt, gesamtwirtschaftliche Entwicklung, Technologie",
      "Nur interne Abteilungen"
    ],
    answer: 2,
    explanation: "Weiteres Umfeld = indirekte Rahmenbedingungen mit Chancen/Risiken."
  },
  {
    id: "ch1-005",
    type: "basic",
    q: "Welche Reihenfolge beschreibt den Ablauf einer Umfeldanalyse korrekt?",
    options: [
      "Maßnahmen → Stakeholderanalyse → Abgrenzung → Einflussfaktorenanalyse",
      "Abgrenzung → Stakeholderanalyse → Analyse sonstiger Einflussfaktoren → Maßnahmen ableiten",
      "Stakeholderanalyse → Maßnahmen → Abgrenzung → Abschluss",
      "Abgrenzung → Maßnahmen → Abschluss → Stakeholderanalyse"
    ],
    answer: 1,
    explanation: "Klassischer Ablauf: Abgrenzung, Stakeholderanalyse, sonstige Faktoren, Maßnahmen."
  },
  {
    id: "ch1-006",
    type: "basic",
    q: "Warum ist Stakeholdermanagement ein kontinuierlicher Prozess?",
    options: [
      "Weil Stakeholder nur in der Abschlussphase relevant sind",
      "Weil Stakeholder sich ändern können und Einfluss/Einstellung im Projektverlauf schwanken",
      "Weil man sonst kein Budget genehmigt bekommt",
      "Weil es gesetzlich wöchentlich vorgeschrieben ist"
    ],
    answer: 1,
    explanation: "Stakeholder können neu hinzukommen oder Einfluss/Einstellung ändern → laufendes Monitoring."
  },
  {
    id: "ch1-007",
    type: "basic",
    q: "Welche Dimensionen sind in einer Stakeholderanalyse typischerweise relevant?",
    options: [
      "Macht/Einfluss, Betroffenheit, Einstellung/Ziele/Interessen",
      "Nur Sympathie und Alter",
      "Nur Budget und Headcount",
      "Nur Projektphase und Gantt-Plan"
    ],
    answer: 0,
    explanation: "Typisch: Einfluss/Macht, Betroffenheit, Ziele/Interessen/Einstellung."
  },
  {
    id: "ch1-008",
    type: "basic",
    q: "Was ist der Zweck eines Stakeholderregisters?",
    options: [
      "Es ersetzt den Projektplan vollständig",
      "Es dokumentiert Stakeholder inkl. Einstellung, Zielen, Einfluss und Maßnahmen/Strategien",
      "Es speichert ausschließlich Lieferantenpreise",
      "Es dient nur als Kontaktliste ohne Analyse"
    ],
    answer: 1,
    explanation: "Register = strukturierte Erfassung/Analyse inkl. Erwartungen/Befürchtungen + Maßnahmen."
  },
  {
    id: "ch1-009",
    type: "compare",
    q: "Welche Information gehört NICHT zu den Mindestinhalten eines Stakeholderregisters?",
    options: [
      "Einstellung zum Projekt",
      "Projekt-relevante Ziele",
      "Bedeutung/Macht/Einfluss (z.B. 1–5)",
      "Kompletter Netzplan mit kritischem Pfad"
    ],
    answer: 3,
    explanation: "Netzplan ist Terminplanung – gehört nicht ins Stakeholderregister."
  },
  {
    id: "ch1-010",
    type: "basic",
    q: "Was beschreibt eine Portfoliodarstellung im Stakeholdermanagement am besten?",
    options: [
      "Eine Liste aller Meilensteine",
      "Ein Diagramm zur Einordnung von Stakeholdern nach Einfluss und z.B. Konfliktpotenzial/Einstellung",
      "Ein Finanzportfolio für Projektbudgets",
      "Eine Übersicht über Urlaubsplanung"
    ],
    answer: 1,
    explanation: "Portfolio = 2D-Einordnung (z.B. Einfluss vs. Konfliktpotenzial oder Einstellung)."
  },
  {
    id: "ch1-011",
    type: "transfer",
    q: "Ein Stakeholder hat hohen Einfluss, aber aktuell neutrale Einstellung. Was ist die beste Grundstrategie?",
    options: [
      "Ignorieren, weil keine Gefahr besteht",
      "Beobachten ohne Kommunikation",
      "Aktiv informieren und gezielt einbinden, um Einstellung stabil positiv zu halten",
      "Repressive Kommunikation einsetzen"
    ],
    answer: 2,
    explanation: "Hoher Einfluss = aktiv managen (Information/Beteiligung je nach Situation), damit keine Blockade entsteht."
  },
  {
    id: "ch1-012",
    type: "basic",
    q: "Welche Strategie passt typischerweise zu Stakeholdern ohne erfolgskritischen Einfluss?",
    options: [
      "Beobachtungsstrategie",
      "Repressive Kommunikationsstrategie",
      "Beteiligungsstrategie",
      "Ausschlussstrategie"
    ],
    answer: 0,
    explanation: "Niedriger Einfluss → beobachten/periodisch prüfen."
  },
  {
    id: "ch1-013",
    type: "basic",
    q: "Welche Strategie passt typischerweise zu Stakeholdern mit starkem Einfluss?",
    options: [
      "Beobachtungsstrategie",
      "Informationsstrategie",
      "Beteiligungsstrategie",
      "Keine Strategie nötig"
    ],
    answer: 2,
    explanation: "Starker Einfluss → Einbindung (Workshops, Steering, Abstimmung)."
  },
  {
    id: "ch1-014",
    type: "compare",
    q: "Was ist der Unterschied zwischen Projektkommunikation und Projektmarketing im Stakeholderkontext?",
    options: [
      "Kommunikation = extern, Marketing = intern",
      "Kommunikation = intern (Informationsflüsse/Zusammenarbeit), Marketing = extern (Image/Unterstützer)",
      "Beides ist ausschließlich extern",
      "Beides ist identisch"
    ],
