/* ======================================================
   Projektmanagement – Kapitel 1 (Repetitorium-Setup)
   Typen: basic | compare | transfer | calculation
   ====================================================== */

window.QUESTIONS_CH1 = [
  // ------------------------------------------------------
  // A) GRUNDLAGEN: Projekt / Prozess / Produkt / PM-Definition
  // ------------------------------------------------------
  {
    id: "ch1-001",
    type: "basic",
    q: "Welche Aussage trifft die Abgrenzung Projekt vs. Prozess am besten?",
    options: [
      "Prozess ist einmalig, Projekt ist wiederkehrend",
      "Projekt ist zeitlich befristet und einzigartig; Prozess ist wiederholbar und standardisiert",
      "Projekt ist immer in der Linie, Prozess ist immer außerhalb",
      "Beide Begriffe bedeuten dasselbe"
    ],
    answer: 1,
    explanation: "Projekt: befristet + neuartig/einmalig; Prozess: wiederholbare Ablauffolge zur Leistungserstellung."
  },
  {
    id: "ch1-002",
    type: "basic",
    q: "Welche Aussage beschreibt ein Projekt am treffendsten?",
    options: [
      "Dauerhafte Routineaufgabe ohne Endtermin",
      "Zeitlich befristetes Vorhaben zur Schaffung eines einzigartigen Ergebnisses",
      "Nur eine Liste von Meetings",
      "Ein reiner Kostenplan"
    ],
    answer: 1,
    explanation: "Kernmerkmale: Befristung, Einmaligkeit/Neuartigkeit, Zielvorgabe, Komplexität."
  },
  {
    id: "ch1-003",
    type: "compare",
    q: "Welche Kombination gehört typischerweise zu Projekten (nicht zur Linie)?",
    options: [
      "Hohe Standardisierung, geringer Wandel, stabile Aufgaben",
      "Einmaligkeit, hohe Komplexität, interdisziplinäres Team, begrenzte Ressourcen",
      "Dauerhafte Zuständigkeit, klare Routineprozesse, geringe Unsicherheit",
      "Wiederholbarkeit, gleiche Outputs, fixe Abläufe"
    ],
    answer: 1,
    explanation: "Projekte sind häufig neuartig, komplex, zeitlich/ressourcenmäßig begrenzt und interdisziplinär."
  },
  {
    id: "ch1-004",
    type: "basic",
    q: "Welche Definition beschreibt Projektmanagement am besten?",
    options: [
      "Nur Terminplanung mit Gantt",
      "Gesamtheit der Aufgaben, Methoden und Mittel von Definition bis Abschluss und Führung zur erfolgreichen Projektabwicklung",
      "Ausschließlich Softwareeinsatz im Projekt",
      "Nur Budgetfreigabe und Controlling"
    ],
    answer: 1,
    explanation: "PM umfasst Definition, Planung, Steuerung, Abschluss und Führung – als Gesamtpaket."
  },
  {
    id: "ch1-005",
    type: "compare",
    q: "Welche Aussage passt zu 'Produkt' im Gegensatz zum 'Projekt'?",
    options: [
      "Produkt ist die Vorgehensweise, Projekt ist das Ergebnis",
      "Produkt ist der Output/Ergebnisgegenstand; Projekt ist das Vorhaben zur Erstellung dieses Outputs",
      "Produkt ist immer immateriell, Projekt immer materiell",
      "Produkt und Projekt sind identisch"
    ],
    answer: 1,
    explanation: "Projekt erzeugt Output; das Produkt ist der materielle/immaterielle Ergebnisgegenstand."
  },
  {
    id: "ch1-006",
    type: "basic",
    q: "Welche sind typische Gründe, warum Unternehmen Projektmanagement einsetzen?",
    options: [
      "Mehr Meetings und höhere Bürokratie",
      "Frühe Erkennung von Planabweichungen, bessere Zusammenarbeit, geringere Kosten/Zeiten, Zielerreichung",
      "Nur zur Erhöhung der Reisekosten",
      "Weil Projekte sonst rechtlich verboten sind"
    ],
    answer: 1,
    explanation: "PM soll Planbarkeit, Steuerbarkeit, Zusammenarbeit und Zielerreichung verbessern."
  },
  {
    id: "ch1-007",
    type: "basic",
    q: "Was sind typische Ziele des Projektmanagements?",
    options: [
      "Nur maximale Dokumentation",
      "Planbarkeit, Führbarkeit, Produktivität, Kosten-Transparenz/Reduktion, kürzere Dauer, höhere Objektqualität",
      "Nur Marketing und PR",
      "Nur Personalabbau"
    ],
    answer: 1,
    explanation: "PM zielt u.a. auf bessere Steuerung (Zeit/Kosten/Leistung) und Qualität."
  },
  {
    id: "ch1-008",
    type: "basic",
    q: "Welche Aussage zu Projektzielen ist korrekt?",
    options: [
      "Ziele liegen immer in der Vergangenheit",
      "Ziele dienen als Nachweis der Aufgabenerfüllung und fließen in den Projektauftrag ein",
      "Ziele sind optional und nicht zu dokumentieren",
      "Ziele sind nur technische Spezifikationen"
    ],
    answer: 1,
    explanation: "Ziele sind zukünftige angestrebte Zustände und Bestandteil der Auftrags-/Zieldefinition."
  },
  {
    id: "ch1-009",
    type: "compare",
    q: "Welche Aussage beschreibt 'Magisches Dreieck' korrekt?",
    options: [
      "Zeit, Kosten, Leistung sind unabhängig voneinander",
      "Änderungen in Zeit/Kosten/Leistung wirken wechselseitig; Balance ist Kernaufgabe",
      "Nur Zeit ist relevant",
      "Es beschreibt ausschließlich Stakeholder"
    ],
    answer: 1,
    explanation: "Trade-offs: Anpassung in einem Zielbereich beeinflusst die anderen."
  },
  {
    id: "ch1-010",
    type: "transfer",
    q: "Projekt ist 4 Wochen früher fällig, Budget bleibt gleich. Welche Konsequenz ist im Magischen Dreieck am wahrscheinlichsten?",
    options: [
      "Leistung/Qualität muss meist priorisiert/reduziert werden oder Aufwand steigt",
      "Es gibt keine Konsequenzen",
      "Kosten sinken automatisch",
      "Stakeholder werden irrelevant"
    ],
    answer: 0,
    explanation: "Zeitdruck erhöht oft Kosten (Überstunden/Express) oder reduziert Leistung/Qualität."
  },
  {
    id: "ch1-011",
    type: "compare",
    q: "Welche Aussage passt am ehesten zur traditionellen (planorientierten) Sicht im Vergleich zur agilen (mehrwertorientierten) Sicht?",
    options: [
      "Traditionell: flexibel, früh Feedback; Agil: alles am Anfang fix",
      "Traditionell: Ziele/Umfang stark zu Beginn festlegen; Agil: iterativ anpassen und früh Feedback nutzen",
      "Beide sind identisch",
      "Agil ist immer ohne Kundenkontakt"
    ],
    answer: 1,
    explanation: "Traditionell plant stark vorab; agil arbeitet iterativ und nutzt frühes Feedback."
  },
  {
    id: "ch1-012",
    type: "basic",
    q: "Was bedeutet SMART bei der Zielformulierung (S in SMART)?",
    options: [
      "Schnell",
      "Spezifisch",
      "Sozial",
      "Stabil"
    ],
    answer: 1,
    explanation: "SMART: Spezifisch, Messbar, Attraktiv/Achievable, Relevant, Terminiert."
  },
  {
    id: "ch1-013",
    type: "basic",
    q: "Welche SMART-Komponente stellt sicher, dass Fortschritt überprüfbar ist?",
    options: ["Relevant", "Messbar", "Terminiert", "Attraktiv"],
    answer: 1,
    explanation: "Messbar = klare Kriterien/Indikatoren zur Überprüfung."
  },
  {
    id: "ch1-014",
    type: "compare",
    q: "Welches Ziel ist am ehesten SMART formuliert?",
    options: [
      "Wir verbessern die Kommunikation bald",
      "Wir führen bis 30.06. ein Tool ein, das 95% der E-Mails in 10 Sekunden verarbeitet, und schulen 100% der Mitarbeitenden",
      "Wir machen das Projekt so gut wie möglich",
      "Wir versuchen, Kosten zu reduzieren"
    ],
    answer: 1,
    explanation: "SMART: konkret, messbar, realistisch/attraktiv, relevant, terminiert."
  },
  {
    id: "ch1-015",
    type: "transfer",
    q: "Ein Ziel lautet: 'Qualität maximieren, aber Budget strikt senken und Termin vorziehen.' Was ist die beste PM-Reaktion?",
    options: [
      "Ignorieren und einfach starten",
      "Zielkonflikt transparent machen, Prioritäten/Trade-offs mit Auftraggeber klären",
      "Nur Termin anpassen, Rest fix lassen",
      "Nur Stakeholderanalyse durchführen, sonst nichts"
    ],
    answer: 1,
    explanation: "Magisches Dreieck erzeugt Zielkonflikte → Priorisierung/Entscheidung erforderlich."
  },

  // ------------------------------------------------------
  // B) PROJEKTUMFELD & STAKEHOLDER
  // ------------------------------------------------------
  {
    id: "ch1-016",
    type: "basic",
    q: "Was ist das primäre Ziel einer Projekt-Umfeldanalyse?",
    options: [
      "Nur die Projektkosten zu senken",
      "Stakeholder und Einflussfaktoren systematisch zu erkennen, um Chancen/Risiken früh zu identifizieren",
      "Ausschließlich den Projektplan zu erstellen",
      "Nur die Teamstruktur festzulegen"
    ],
    answer: 1,
    explanation: "Umfeldanalyse identifiziert Stakeholder + Einflussfaktoren und leitet Maßnahmen zur Beziehungsgestaltung ab."
  },
  {
    id: "ch1-017",
    type: "basic",
    q: "Welche Aussage trifft die Stakeholder-Definition (sinngemäß) am besten?",
    options: [
      "Stakeholder sind nur Projektteam-Mitglieder",
      "Stakeholder sind alle Personen mit Budgetverantwortung",
      "Stakeholder sind alle, die Interesse am Projekt haben oder betroffen sind",
      "Stakeholder sind ausschließlich externe Parteien"
    ],
    answer: 2,
    explanation: "Stakeholder: Einzelpersonen/Gruppen/Organisationen mit Interesse oder Betroffenheit."
  },
  {
    id: "ch1-018",
    type: "compare",
    q: "Was gehört typischerweise zum engeren Projektumfeld?",
    options: [
      "Gesellschaft und politische Instanzen",
      "Technologische Entwicklung und Finanzmarkt",
      "Auftraggeber, Projektleitung, Projektteam, Lieferanten, Gesamtunternehmen",
      "Nur Behörden und Regulierungsstellen"
    ],
    answer: 2,
    explanation: "Engeres Umfeld: direkte Akteure mit unmittelbarem Einfluss auf Planung/Durchführung."
  },
  {
    id: "ch1-019",
    type: "compare",
    q: "Was gehört typischerweise zum weiteren Projektumfeld?",
    options: [
      "Projektteam und Projektleitung",
      "Lieferanten und Auftraggeber",
      "Gesellschaft/Politik/Behörden, Natur/Umwelt, Technologie, Finanzmarkt, gesamtwirtschaftliche Entwicklung",
      "Nur interne Abteilungen"
    ],
    answer: 2,
    explanation: "Weiteres Umfeld: indirekte Rahmenbedingungen als Chancen-/Risikotreiber."
  },
  {
    id: "ch1-020",
    type: "basic",
    q: "Welche Reihenfolge beschreibt den Ablauf einer Umfeldanalyse korrekt?",
    options: [
      "Maßnahmen → Stakeholderanalyse → Abgrenzung → Einflussfaktorenanalyse",
      "Abgrenzung → Stakeholderanalyse → Analyse sonstiger Einflussfaktoren → Maßnahmen ableiten",
      "Stakeholderanalyse → Maßnahmen → Abgrenzung → Abschluss",
      "Abgrenzung → Maßnahmen → Abschluss → Stakeholderanalyse"
    ],
    answer: 1,
    explanation: "Standard: Abgrenzen, Stakeholder analysieren, sonstige Faktoren analysieren, Maßnahmen ableiten."
  },
  {
    id: "ch1-021",
    type: "compare",
    q: "Warum ist Stakeholdermanagement ein kontinuierlicher Prozess?",
    options: [
      "Stakeholder sind nur in der Abschlussphase relevant",
      "Stakeholder verändern sich; Einfluss/Einstellung kann im Projektverlauf schwanken",
      "Ohne Stakeholdermanagement ist Budget illegal",
      "Es ist gesetzlich wöchentlich vorgeschrieben"
    ],
    answer: 1,
    explanation: "Monitoring über den Lebenszyklus: neue Stakeholder, geänderte Macht/Einstellung, Wirksamkeit der Maßnahmen."
  },
  {
    id: "ch1-022",
    type: "basic",
    q: "Welche Dimensionen sind in einer Stakeholderanalyse typischerweise relevant?",
    options: [
      "Einfluss/Macht, Betroffenheit, Einstellung (Ziele/Interessen)",
      "Nur Sympathie und Alter",
      "Nur Budget und Headcount",
      "Nur Projektphase und Gantt-Plan"
    ],
    answer: 0,
    explanation: "Kern: Einfluss, Betroffenheit, Einstellung/Ziele/Interessen."
  },
  {
    id: "ch1-023",
    type: "basic",
    q: "Was ist der Zweck eines Stakeholderregisters?",
    options: [
      "Es ersetzt den Projektplan",
      "Systematische Dokumentation von Stakeholdern inkl. Einstellungen/Zielen/Einfluss und Maßnahmen",
      "Es speichert ausschließlich Lieferantenpreise",
      "Es dient nur als Kontaktliste ohne Analyse"
    ],
    answer: 1,
    explanation: "Register = strukturierte Erfassung/Analyse + Maßnahmen/Strategien."
  },
  {
    id: "ch1-024",
    type: "compare",
    q: "Welche Information gehört NICHT zu den Mindestinhalten eines Stakeholderregisters?",
    options: [
      "Einstellung zum Projekt",
      "Projekt-relevante Ziele",
      "Bedeutung/Macht/Einfluss (z.B. 1–5)",
      "Kompletter Netzplan mit kritischem Pfad"
    ],
    answer: 3,
    explanation: "Netzplan = Detailplanung (Ablauf), nicht Stakeholderregister."
  },
  {
    id: "ch1-025",
    type: "compare",
    q: "Was beschreibt eine Portfoliodarstellung im Stakeholdermanagement am besten?",
    options: [
      "Liste aller Meilensteine",
      "Matrix zur Einordnung nach Einfluss und z.B. Einstellung oder Konfliktpotenzial",
      "Finanzportfolio für Budgets",
      "Urlaubsübersicht des Teams"
    ],
    answer: 1,
    explanation: "Portfolio: 2D-Clusterung (z.B. Einfluss vs. Einstellung/Konfliktpotenzial)."
  },
  {
    id: "ch1-026",
    type: "transfer",
    q: "Stakeholder hat hohen Einfluss und hohes Konfliktpotenzial. Welche Maßnahme passt am besten?",
    options: [
      "Ignorieren",
      "Nur beobachten",
      "Aktiv managen: intensive Kommunikation, Einbindung/Verhandlung, Konfliktmanagement",
      "Einmalige Info-Mail reicht"
    ],
    answer: 2,
    explanation: "High/High ist erfolgskritisch → aktive Steuerung und Beteiligung/Verhandlung."
  },
  {
    id: "ch1-027",
    type: "compare",
    q: "Welche Strategie passt zu Stakeholdern ohne erfolgskritischen Einfluss?",
    options: ["Beobachtungsstrategie", "Repressive Strategie", "Beteiligungsstrategie", "Ausschlussstrategie"],
    answer: 0,
    explanation: "Beobachten und periodisch prüfen; meist keine intensive Interaktion nötig."
  },
  {
    id: "ch1-028",
    type: "compare",
    q: "Welche Strategie passt zu Stakeholdern mit starkem Einfluss?",
    options: ["Beobachtungsstrategie", "Informationsstrategie", "Beteiligungsstrategie", "Keine Strategie nötig"],
    answer: 2,
    explanation: "Starker Einfluss → Einbindung (Workshops, Steering, Transparenz)."
  },
  {
    id: "ch1-029",
    type: "basic",
    q: "Was ist der Unterschied zwischen Projektkommunikation und Projektmarketing?",
    options: [
      "Kommunikation = extern, Marketing = intern",
      "Kommunikation = intern (Informationsflüsse/Zusammenarbeit), Marketing = extern (Image/Unterstützer)",
      "Beides ist ausschließlich intern",
      "Beides ist ausschließlich extern"
    ],
    answer: 1,
    explanation: "Kommunikation fokussiert interne Stakeholder, Marketing externe Stakeholder/Projektimage."
  },
  {
    id: "ch1-030",
    type: "basic",
    q: "Welche Aussage zur Kommunikationsmatrix ist korrekt?",
    options: [
      "Nur Stakeholdernamen ohne Maßnahmen",
      "Dokumentiert geplante Kommunikationsmaßnahmen inkl. Verantwortlichkeit und Häufigkeit",
      "Identisch mit Netzplan",
      "Ersetzt Stakeholderregister vollständig"
    ],
    answer: 1,
    explanation: "Matrix: Stakeholder, Maßnahme, Inhalt, Umfang, Häufigkeit, Verantwortlicher."
  },
  {
    id: "ch1-031",
    type: "compare",
    q: "Welche Kommunikationsstrategie ist riskant, weil sie mit Druck/Drohung, selektiver Info oder Desinformation arbeiten kann?",
    options: [
      "Diskursive Kommunikationsstrategie",
      "Partizipative Kommunikationsstrategie",
      "Repressive Kommunikationsstrategie",
      "Transparente Kommunikationsstrategie"
    ],
    answer: 2,
    explanation: "Repressiv: selektive Info, Druck, 'vollendete Tatsachen' – hohe Nebenwirkungen."
  },
  {
    id: "ch1-032",
    type: "transfer",
    q: "Du stellst im Monitoring fest: Ein neuer externer Stakeholder (Behörde) bekommt plötzlich hohe Macht. Was ist die richtige Reihenfolge?",
    options: [
      "Ignorieren, bis ein Problem entsteht",
      "Stakeholderregister aktualisieren → strategisch einordnen → Kommunikations-/Maßnahmenplan anpassen",
      "Nur Projektplan drucken",
      "Nur Budget erhöhen"
    ],
    answer: 1,
    explanation: "Monitoring löst Aktualisierung der Analyse und Anpassung der Maßnahmen/Strategien aus."
  },
  {
    id: "ch1-033",
    type: "compare",
    q: "Welche Aussage ist für Stakeholdermanagement zentral?",
    options: [
      "Stakeholder sind nur Betroffene ohne Einfluss",
      "Projektziele sollten mit Stakeholderzielen abgeglichen werden und konkreten Nutzen bieten",
      "Stakeholderanalyse ist nur für PR",
      "Stakeholder ändern sich nie"
    ],
    answer: 1,
    explanation: "Alignment reduziert Widerstand und erhöht Unterstützung."
  },

  // ------------------------------------------------------
  // C) RISIKO / CHANCE – Begriffe, Kategorien, Paare, Prozess
  // ------------------------------------------------------
  {
    id: "ch1-034",
    type: "basic",
    q: "Wie ist 'Risiko' im Projektkontext definiert (sinngemäß)?",
    options: [
      "Sichere positive Abweichung vom Plan",
      "Gefahr einer negativen Abweichung des realisierten Ergebnisses vom geplanten Ergebnis",
      "Beliebige Abweichung ohne Bewertung",
      "Nur Naturkatastrophen"
    ],
    answer: 1,
    explanation: "Risiko = negative Abweichung vom Planergebnis (Unsicherheit)."
  },
  {
    id: "ch1-035",
    type: "basic",
    q: "Wie ist 'Chance' im Projektkontext definiert (sinngemäß)?",
    options: [
      "Erwartete Erreichung oder Übertreffen des geplanten Ergebnisses",
      "Wenn sicher Kosten steigen",
      "Wenn Stakeholder nicht reagieren",
      "Wenn man ein Risiko ignoriert"
    ],
    answer: 0,
    explanation: "Chance = positive Abweichung / Übertreffen des Plans."
  },
  {
    id: "ch1-036",
    type: "compare",
    q: "Warum entstehen Chancen und Risiken in Projekten typischerweise?",
    options: [
      "Durch vollständige Information über die Zukunft",
      "Durch unzureichende Information über die Zukunft und vielfältige Einflussfaktoren (Menschen/Umfeld)",
      "Nur durch schlechte Projektleiter",
      "Nur durch fehlende Software"
    ],
    answer: 1,
    explanation: "Ungewissheit + komplexe Einflussfaktoren (u.a. Verhalten von Beteiligten)."
  },
  {
    id: "ch1-037",
    type: "compare",
    q: "Welche Risikokategorie bezieht sich auf Fehleinschätzungen/Unterschätzung von Umfang und Komplexität?",
    options: [
      "Risiken im emotionalen Umfeld",
      "Risiken in der Projektaufgabe",
      "Risiken im fachlichen Wandel",
      "Risiken im sonstigen Umfeld"
    ],
    answer: 1,
    explanation: "Projektaufgabe: Planung/Umfang/Komplexität/Kompetenzprofile."
  },
  {
    id: "ch1-038",
    type: "compare",
    q: "Welche Risikokategorie bezieht sich auf Motivation, Erwartungen, Befürchtungen und Veränderungsbereitschaft?",
    options: [
      "Risiken im emotionalen Umfeld",
      "Risiken im fachlichen Wandel",
      "Risiken in der Projektaufgabe",
      "Risiken im Einsatz des Projektmanagements"
    ],
    answer: 0,
    explanation: "Emotionales Umfeld: Reaktionen der Beteiligten."
  },
  {
    id: "ch1-039",
    type: "compare",
    q: "Welche Risikokategorie bezieht sich auf veraltetes Wissen durch Innovationen oder neue Konkurrenz?",
    options: [
      "Risiken im fachlichen Wandel",
      "Risiken im emotionalen Umfeld",
      "Risiken im sonstigen Umfeld",
      "Risiken in der Natur"
    ],
    answer: 0,
    explanation: "Fachlicher Wandel: Innovationen, Konkurrenz, Technologiewechsel."
  },
  {
    id: "ch1-040",
    type: "compare",
    q: "Welche Risikokategorie bezieht sich auf Probleme bei Anwendung von PM-Methoden (fehlende Akzeptanz/Know-how)?",
    options: [
      "Risiken im Einsatz des Projektmanagements",
      "Risiken im fachlichen Wandel",
      "Risiken in der Projektaufgabe",
      "Risiken im emotionalen Umfeld"
    ],
    answer: 0,
    explanation: "PM-Einsatz: Methodenprobleme, fehlende Kenntnisse/Akzeptanz."
  },
  {
    id: "ch1-041",
    type: "compare",
    q: "Welche Risikokategorie bezieht sich auf mangelnde Projekterfahrung oder Motivation der Projektleitung?",
    options: [
      "Risiken in der Person des Projektleiters",
      "Risiken in der Projektaufgabe",
      "Risiken im fachlichen Wandel",
      "Risiken im Einsatz des Projektmanagements"
    ],
    answer: 0,
    explanation: "Projektleiterbezogene Risiken: Erfahrung, Motivation, Akzeptanz."
  },
  {
    id: "ch1-042",
    type: "compare",
    q: "Welche Aussage beschreibt ein symmetrisches Risiko-/Chance-Paar korrekt?",
    options: [
      "Es gibt nur Risiko, keine Chance",
      "Risiko eines Schadens steht eine Chance gegenüber, das geplante Ergebnis zu übertreffen",
      "Chance ist immer unabhängig vom Risiko",
      "Es handelt sich nur um Naturereignisse"
    ],
    answer: 1,
    explanation: "Symmetrisch: Downside ↔ Upside (z.B. Markterfolg vs. Flop)."
  },
  {
    id: "ch1-043",
    type: "compare",
    q: "Was ist ein 'reines Schadensrisiko'?",
    options: [
      "Risiko mit entsprechender Gegenchance",
      "Risiko, das nur Schaden verursachen kann; im besten Fall tritt es nicht ein, ohne Zusatznutzen",
      "Eine Chance ohne Risiko",
      "Ein Risiko, das immer eintritt"
    ],
    answer: 1,
    explanation: "Kein Upside – nur Schaden oder 'nichts passiert'."
  },
  {
    id: "ch1-044",
    type: "compare",
    q: "Was ist eine 'reine Nutzenchance'?",
    options: [
      "Chance ohne Verbindung zu Risiko; Nicht-Nutzung gefährdet das Planergebnis nicht, kann aber verbessern",
      "Chance, die zwingend eintreten muss",
      "Chance, die automatisch Budget sprengt",
      "Chance, die nur bei Naturereignissen besteht"
    ],
    answer: 0,
    explanation: "Optionaler Upside ohne Downside-Verknüpfung."
  },
  {
    id: "ch1-045",
    type: "basic",
    q: "Welche Reihenfolge entspricht dem Prozess des Chancen- und Risikomanagements?",
    options: [
      "Bewertung → Überwachung → Identifikation → Gestaltung → Analyse",
      "Identifikation → Analyse → Bewertung → Gestaltung → Überwachung",
      "Analyse → Identifikation → Überwachung → Bewertung → Gestaltung",
      "Gestaltung → Identifikation → Analyse → Bewertung → Abschluss"
    ],
    answer: 1,
    explanation: "5 Schritte: Identifikation, Analyse, Bewertung, Gestaltung, Überwachung."
  },
  {
    id: "ch1-046",
    type: "basic",
    q: "Was ist das Hauptziel der Chancen- und Risikoidentifikation?",
    options: [
      "Nur formale Dokumentation ohne Nutzen",
      "Frühzeitige Erkennung und Sammlung von Risiken/Chancen zur Erhöhung der Projektsicherheit",
      "Nur Budgetfreigabe",
      "Nur Teamaufbau"
    ],
    answer: 1,
    explanation: "Frühe Erkennung erhöht Steuerbarkeit und Projektsicherheit."
  },
  {
    id: "ch1-047",
    type: "compare",
    q: "Welche Technik gehört zur Identifikation von Chancen und Risiken?",
    options: ["FMEA", "Abnahmeprotokoll", "Urlaubsplan", "Nur Gantt-Chart ohne Analyse"],
    answer: 0,
    explanation: "Zur Identifikation: u.a. FMEA, Checklisten, Projektumfeldanalyse, Szenario, Früherkennungssysteme."
  },
  {
    id: "ch1-048",
    type: "compare",
    q: "Welche Aussage zu Checklisten im Risikomanagement ist korrekt?",
    options: [
      "Checklisten sind immer vollständig",
      "Checklisten verhindern das Übersehen wichtiger Aspekte, müssen aber mit anderen Methoden kombiniert werden",
      "Checklisten sind nur für agile Projekte erlaubt",
      "Checklisten ersetzen Monitoring"
    ],
    answer: 1,
    explanation: "Hilfreich, aber nie vollständig → Methodenmix notwendig."
  },
  {
    id: "ch1-049",
    type: "compare",
    q: "Wodurch unterscheidet sich qualitative von quantitativer Risikoanalyse typischerweise?",
    options: [
      "Qualitativ = Eurobeträge, quantitativ = Text",
      "Qualitativ = verbal/beschreibend; quantitativ = zahlen-/modellbasiert (z.B. Mehr-Punkt, Sensitivität)",
      "Beide sind identisch",
      "Qualitativ nur Technik, quantitativ nur HR"
    ],
    answer: 1,
    explanation: "Qualitativ: Beschreibungen/Listen; quantitativ: Zahlenmodelle und Verfahren."
  },
  {
    id: "ch1-050",
    type: "compare",
    q: "Was wird in qualitativen Risikolisten typischerweise zusätzlich betrachtet?",
    options: [
      "Nur Feiertage",
      "Wechselwirkungen: Risiken können akkumulieren oder sich kompensieren",
      "Nur Code-Qualität",
      "Nur Presse"
    ],
    answer: 1,
    explanation: "Kombinationen verändern die reale Wirkung: Verstärkung oder Abschwächung."
  },

  // ------------------------------------------------------
  // D) FMEA / RISIKOKLASSE / RPZ (inkl. Rechnen) – klausurtypische Fallen
  // ------------------------------------------------------
  {
    id: "ch1-051",
    type: "basic",
    q: "Was ist FMEA (kurz)?",
    options: [
      "Methode zur Personalplanung",
      "Systematische Methode zur Identifikation/Analyse potenzieller Fehler und ihrer Auswirkungen",
      "Ein Gantt-Diagramm",
      "Ein Stakeholderportfolio"
    ],
    answer: 1,
    explanation: "FMEA = Fehler-Möglichkeits- und Einfluss-Analyse."
  },
  {
    id: "ch1-052",
    type: "compare",
    q: "Welche Größen werden für die RPZ in der FMEA typischerweise herangezogen?",
    options: [
      "Eintrittswahrscheinlichkeit, Bedeutung/Schwere, Entdeckungswahrscheinlichkeit",
      "Nur Budget und Dauer",
      "Nur Stakeholder-Einstellung und Macht",
      "Teamgröße und Toolauswahl"
    ],
    answer: 0,
    explanation: "RPZ basiert auf Occurrence (Eintritt), Severity (Bedeutung), Detection (Entdeckung)."
  },
  {
    id: "ch1-053",
    type: "calculation",
    q: "Berechne die Risikoklasse: Eintrittswahrscheinlichkeit = 4, Schadenshöhe = 3. (Formel: P * Schaden)",
    options: ["7", "12", "1", "43"],
    answer: 1,
    explanation: "Risikoklasse = 4 * 3 = 12."
  },
  {
    id: "ch1-054",
    type: "calculation",
    q: "Berechne die Risikopriorität (RPZ-nahe Logik): Entdeckungswahrscheinlichkeit = 2, Risikoklasse = 12. (Formel: Entdeckung * Risikoklasse)",
    options: ["24", "14", "10", "6"],
    answer: 0,
    explanation: "Risikopriorität = 2 * 12 = 24."
  },
  {
    id: "ch1-055",
    type: "calculation",
    q: "Ein Risiko hat P=5 und Schaden=2. Wie hoch ist die Risikoklasse?",
    options: ["7", "10", "25", "3"],
    answer: 1,
    explanation: "Risikoklasse = 5 * 2 = 10."
  },
  {
    id: "ch1-056",
    type: "calculation",
    q: "RPZ: Eintritt=3, Bedeutung=4, Entdeckung=2. (RPZ = 3*4*2)",
    options: ["9", "18", "24", "32"],
    answer: 2,
    explanation: "RPZ = 3*4*2 = 24."
  },

  // ------------------------------------------------------
  // E) RISIKOBEWERTUNG / STRATEGIEN / ÜBERWACHUNG (mit Transfer)
  // ------------------------------------------------------
  {
    id: "ch1-057",
    type: "compare",
    q: "Welche Aussage beschreibt den Kern der Chancen-/Risikobewertung am besten?",
    options: [
      "Nur neue Tools kaufen",
      "Skalen/Klassen definieren und konsistent bewerten (z.B. wann 'hoch' oder 'katastrophal')",
      "Nur Stakeholder umstimmen",
      "Nur Projektplan drucken"
    ],
    answer: 1,
    explanation: "Bewertung: Definition von Klassen/Schwellen + konsistente Einstufung."
  },
  {
    id: "ch1-058",
    type: "basic",
    q: "Welcher Faktor beeinflusst Bewertungen/Entscheidungen bei Risiken laut Skript stark?",
    options: [
      "Risikopräferenz (Risikoappetit) des Entscheiders",
      "Wetterbericht",
      "Lieblingsfarbe des Projektleiters",
      "Nur Teamgröße"
    ],
    answer: 0,
    explanation: "Risikofreudig/neutral/avers beeinflusst Priorisierung und Maßnahmenwahl."
  },
  {
    id: "ch1-059",
    type: "compare",
    q: "Welche Aussage beschreibt 'risikoavers' korrekt?",
    options: [
      "Neigung zur Risikoakzeptanz",
      "Keine Präferenz",
      "Tendenz zur Vermeidung von Risiken und Minimierung von Unsicherheiten",
      "Systematisches Ignorieren von Risiken"
    ],
    answer: 2,
    explanation: "Risikoavers = vermeiden/minimieren."
  },
  {
    id: "ch1-060",
    type: "compare",
    q: "Welche Aussage beschreibt 'risikofreudig' korrekt?",
    options: [
      "Tendenz, Risiken zu akzeptieren und zu verwerten",
      "Risiken immer vermeiden",
      "Keine Präferenz",
      "Nur dokumentieren, nie handeln"
    ],
    answer: 0,
    explanation: "Risikofreudig = eher Akzeptanz/Verwertung."
  },
  {
    id: "ch1-061",
    type: "basic",
    q: "Welche Risikostrategie bedeutet: Änderung der Projektstrategie/Bedingungen, um Risiko zu vermeiden?",
    options: ["Risikovermeidung", "Risikoübernahme", "Risikoüberwälzung", "Risikoverringerung"],
    answer: 0,
    explanation: "Vermeidung: Ursache umgehen (Scope/Strategie ändern)."
  },
  {
    id: "ch1-062",
    type: "basic",
    q: "Welche Risikostrategie bedeutet: Eintrittswahrscheinlichkeit oder Auswirkung reduzieren?",
    options: ["Risikoverringerung", "Risikovermeidung", "Risikoübernahme", "Risikoignoranz"],
    answer: 0,
    explanation: "Verringern: präventive Maßnahmen (P/Impact runter)."
  },
  {
    id: "ch1-063",
    type: "basic",
    q: "Welche Risikostrategie bedeutet: Risiko auf Dritte übertragen (z.B. Vertrag/Versicherung)?",
    options: ["Risikoverringerung", "Risikoüberwälzung", "Risikoübernahme", "Risikovermeidung"],
    answer: 1,
    explanation: "Überwälzen = Transfer, z.B. Versicherung/Lieferant."
  },
  {
    id: "ch1-064",
    type: "basic",
    q: "Welche Risikostrategie bedeutet: Risiko akzeptieren und sich auf Konsequenzen vorbereiten?",
    options: ["Risikoübernahme", "Risikoüberwälzung", "Risikovermeidung", "Risikoverdrängung"],
    answer: 0,
    explanation: "Übernahme: akzeptieren + Plan B/Reserven vorbereiten."
  },
  {
    id: "ch1-065",
    type: "compare",
    q: "Was ist der Unterschied zwischen präventiven und korrektiven Maßnahmen?",
    options: [
      "Präventiv reagiert nach Eintritt, korrektiv verhindert Eintritt",
      "Präventiv verhindert/vermindert Eintritt; korrektiv wirkt bei Eintritt (Notfall-/Vorsorgeplan)",
      "Beide sind identisch",
      "Präventiv ist nur Kommunikation"
    ],
    answer: 1,
    explanation: "Präventiv: Eintritt verhindern/reduzieren; korrektiv: Umgang im Eintrittsfall."
  },
  {
    id: "ch1-066",
    type: "transfer",
    q: "Ein Risiko ist 'reines Schadensrisiko' (kein Upside). Welche Management-Konsequenz ist am passendsten?",
    options: [
      "Chancenmaximierung steht im Fokus",
      "Fokus auf Risikominderung und Schadensbegrenzung",
      "Keine Maßnahmen möglich",
      "Nur Dokumentation, nie handeln"
    ],
    answer: 1,
    explanation: "Ohne Upside steht Minderung/Begrenzung im Vordergrund."
  },
  {
    id: "ch1-067",
    type: "transfer",
    q: "Du hast ein symmetrisches Risiko/Chance-Paar (Upside & Downside). Was ist die beste Konsequenz?",
    options: [
      "Nur Risiken minimieren, Chancen ignorieren",
      "Parallel Risiken minimieren und Chancen aktiv maximieren",
      "Nur dokumentieren",
      "Nur Stakeholder informieren, sonst nichts"
    ],
    answer: 1,
    explanation: "Parallelität: Risikominimierung + Chancenmaximierung."
  },
  {
    id: "ch1-068",
    type: "basic",
    q: "Welche Aussage zur Risikoüberwachung ist korrekt?",
    options: [
      "Überwachung ist optional nach der Analyse",
      "Überwachung prüft Umsetzung/Wirkung der Maßnahmen und Entwicklung von Risiken/Chancen",
      "Überwachung findet nur am Projektende statt",
      "Überwachung ersetzt Identifikation"
    ],
    answer: 1,
    explanation: "Monitoring: Entwicklung, Maßnahmencontrolling, Prozessdisziplin, Reporting, Doku, Lessons Learned."
  },
  {
    id: "ch1-069",
    type: "transfer",
    q: "Welche Aussage beschreibt die 'Überwachung des Chancen- und Risikomanagementprozesses' am besten?",
    options: [
      "Nur Terminüberwachung",
      "Einhaltung Prozess, Verantwortlichkeiten, sinnvolle Methoden, Reporting, Dokumentation, Lessons Learned",
      "Nur Stakeholder zufriedenzustellen",
      "Nur ein Tool anschaffen"
    ],
    answer: 1,
    explanation: "Überwachung umfasst auch Governance/Prozessdisziplin, nicht nur einzelne Risiken."
  },

  // ------------------------------------------------------
  // F) TRANSFER-DRILL: Projekt vs Linie, Ziele, Stakeholder, Risiko
  // ------------------------------------------------------
  {
    id: "ch1-070",
    type: "transfer",
    q: "Du leitest ein Projekt, aber die Linienabteilung blockiert Ressourcen. Was ist die beste erste Maßnahme im Sinne von Stakeholdermanagement?",
    options: [
      "Sofort Eskalation ohne Gespräch",
      "Stakeholder identifizieren/Einfluss klären und Kommunikations-/Beteiligungsstrategie definieren",
      "Nur den Projektstrukturplan ändern",
      "Team austauschen"
    ],
    answer: 1,
    explanation: "Erst Stakeholderlage (Einfluss/Einstellung/Betroffenheit) sauber verstehen und Strategie wählen."
  },
  {
    id: "ch1-071",
    type: "transfer",
    q: "Welche Aussage ist ein typisches Projekt-Risiko aus dem emotionalen Umfeld?",
    options: [
      "Neue Konkurrenztechnologie",
      "Mitarbeitende verweigern Mitarbeit wegen Befürchtungen/geringer Veränderungsbereitschaft",
      "Fehlerhafte Kostenschätzung im Plan",
      "Verspätete Lieferungen durch externen Dienstleister"
    ],
    answer: 1,
    explanation: "Emotionales Umfeld: Motivation, Erwartungen, Befürchtungen, Veränderungsbereitschaft."
  },
  {
    id: "ch1-072",
    type: "compare",
    q: "Welche Zuordnung ist korrekt: sachliche Einflussfaktoren vs. Stakeholder?",
    options: [
      "Einflussfaktoren = Personen; Stakeholder = Umweltgrößen",
      "Stakeholder = Personen/Organisationen; Einflussfaktoren = Umfeldgrößen (z.B. Konjunktur, Technologie)",
      "Beides sind immer interne Abteilungen",
      "Beides sind immer externe Behörden"
    ],
    answer: 1,
    explanation: "Stakeholder sind Akteure; Einflussfaktoren sind Rahmenbedingungen."
  },
  {
    id: "ch1-073",
    type: "basic",
    q: "Welche Gruppe ist typischerweise ein externer Stakeholder?",
    options: ["Projektteam", "Projektleitung", "Behörden/Regulierungsstellen", "Geschäftsführung"],
    answer: 2,
    explanation: "Behörden sind extern (liegen außerhalb der Organisation)."
  },
  {
    id: "ch1-074",
    type: "basic",
    q: "Welche Gruppe ist typischerweise ein interner Stakeholder?",
    options: ["Presse", "Konkurrent", "Geschäftsführung", "Anwohnergruppe"],
    answer: 2,
    explanation: "Geschäftsführung ist intern."
  },
  {
    id: "ch1-075",
    type: "compare",
    q: "Welche Reihenfolge passt zu den Phasen des Stakeholdermanagements (vereinfacht)?",
    options: [
      "Maßnahmen planen → Stakeholder identifizieren → Steuerung → Monitoring",
      "Stakeholder identifizieren → Infos sammeln → Betroffenheit analysieren → Ziele abgleichen → strategisch einordnen → Maßnahmen planen → Umfeld steuern",
      "Nur identifizieren, dann fertig",
      "Erst Abnahmeprotokoll, dann Stakeholder"
    ],
    answer: 1,
    explanation: "Logik: Identifikation → Analyse → Abgleich → Strategie → Maßnahmen → Steuerung + Monitoring."
  },
  {
    id: "ch1-076",
    type: "transfer",
    q: "Du hast Stakeholder A (hoher Einfluss, positive Einstellung) und Stakeholder B (hoher Einfluss, negative Einstellung). Was ist die beste Priorisierung?",
    options: [
      "Beide ignorieren",
      "A eng einbinden; B aktiv managen (Verhandlung/Transparenz), da B Projekterfolg gefährden kann",
      "Nur A informieren, B beobachten",
      "Nur B informieren, A beobachten"
    ],
    answer: 1,
    explanation: "Hoher Einfluss ist immer priorisiert; negative Einstellung braucht aktives Gegensteuern."
  },
  {
    id: "ch1-077",
    type: "compare",
    q: "Welche Aussage zur Wirksamkeitsprüfung im Stakeholder-Monitoring ist korrekt?",
    options: [
      "Wirksamkeit wird nie geprüft",
      "Man prüft, ob Maßnahmen je Stakeholder positiv/negativ wirken und passt Strategien an",
      "Nur Budget prüfen",
      "Nur Terminplan prüfen"
    ],
    answer: 1,
    explanation: "Wirksamkeitsmatrix: Wirkung der Maßnahmen (sehr negativ bis sehr positiv) je Stakeholder."
  },
  {
    id: "ch1-078",
    type: "transfer",
    q: "Ein Risiko ist identifiziert, aber du hast keine Ressourcen für alle Maßnahmen. Was ist die richtige Logik?",
    options: [
      "Alles parallel bearbeiten",
      "Analyse/Bewertung → Priorisierung → Maßnahmen für Top-Risiken, Rest monitoren",
      "Nur dokumentieren, nie handeln",
      "Nur Stakeholder informieren"
    ],
    answer: 1,
    explanation: "Ressourcen sind begrenzt → Priorisierung nach Eintritt/Auswirkung + Relevanz."
  },

  // ------------------------------------------------------
  // G) FEINERES KLAUSURWISSEN: Fallen / Begriffe / Mini-Transfers
  // ------------------------------------------------------
  {
    id: "ch1-079",
    type: "compare",
    q: "Welche Aussage zur Magisches-Dreieck-Logik ist am korrektesten?",
    options: [
      "Zeit, Kosten, Leistung sind komplett unabhängig",
      "Änderungen in einem Zielbereich erfordern meist Anpassungen/Trade-offs in den anderen Bereichen",
      "Nur Kosten beeinflussen die anderen Ziele",
      "Nur Leistung beeinflusst Zeit und Kosten"
    ],
    answer: 1,
    explanation: "Wechselwirkungen sind der Kern – Balance ist dauerhafte Führungsaufgabe."
  },
  {
    id: "ch1-080",
    type: "transfer",
    q: "Dein Projekt soll schneller werden, ohne Mehrkosten. Welche Maßnahme ist am plausibelsten, ohne sofort Leistung zu reduzieren?",
    options: [
      "Qualität heimlich senken",
      "Produktivität steigern (Training, bessere Koordination), Abhängigkeiten reduzieren",
      "Mehr Scope hinzufügen",
      "Zusätzliche Stakeholder ignorieren"
    ],
    answer: 1,
    explanation: "Zeit ohne Kosten: häufig nur über Produktivität/Prozessoptimierung oder Scope-Trade-offs."
  },
  {
    id: "ch1-081",
    type: "basic",
    q: "Was ist ein Meilenstein (Grundidee)?",
    options: [
      "Ein beliebiger Task im Backlog",
      "Ein Ereignis besonderer Bedeutung mit Ergebnis und Plantermin",
      "Eine Budgetreserve",
      "Ein Stakeholder in der Matrix"
    ],
    answer: 1,
    explanation: "Meilenstein = Kontroll-/Entscheidungspunkt; Ergebnis + Termin."
  },
  {
    id: "ch1-082",
    type: "compare",
    q: "Wozu dienen Meilensteine in Projekten typischerweise (im Kontext Magisches Dreieck)?",
    options: [
      "Nur zur Deko",
      "Als Kontrollpunkte für Kosten, Termine und Leistung – frühzeitige Abweichungserkennung",
      "Nur zur Personalplanung",
      "Nur zur Vertragsstrafe"
    ],
    answer: 1,
    explanation: "Meilensteine schaffen Transparenz/Steuerbarkeit."
  },
  {
    id: "ch1-083",
    type: "basic",
    q: "Warum ist frühes Erfassen von Erwartungen und Befürchtungen im Stakeholderregister wichtig?",
    options: [
      "Damit man sie ignorieren kann",
      "Um Widerstände/Supporthebel früh zu erkennen und Maßnahmen abzuleiten",
      "Weil es nur fürs Design wichtig ist",
      "Weil es nur für die Presse wichtig ist"
    ],
    answer: 1,
    explanation: "Frühzeitigkeit reduziert spätere Eskalationen und verbessert Akzeptanz."
  },
  {
    id: "ch1-084",
    type: "compare",
    q: "Welche Aussage trifft für 'Risiko = unsicheres Ereignis' am besten zu?",
    options: [
      "Es ist sicher, dass es eintritt",
      "Es ist sicher, dass es nicht eintritt",
      "Eintritt und/oder Schadenshöhe sind unsicher",
      "Es ist nur eine Meinung ohne Auswirkungen"
    ],
    answer: 2,
    explanation: "Unsicherheit betrifft Eintrittswahrscheinlichkeit und/oder Schadensausmaß."
  },
  {
    id: "ch1-085",
    type: "transfer",
    q: "Du nutzt Checklisten, findest aber ein neuartiges Risiko nicht. Was ist die richtige Schlussfolgerung?",
    options: [
      "Checklisten sind nutzlos",
      "Checklisten sind nicht vollständig → Methodenmix (z.B. Szenario, Umfeldanalyse, FMEA) einsetzen",
      "Man sollte Risiken nicht mehr identifizieren",
      "Nur Reporting erhöhen"
    ],
    answer: 1,
    explanation: "Checklisten reduzieren Blindspots, ersetzen aber keine weiteren Verfahren."
  },
  {
    id: "ch1-086",
    type: "basic",
    q: "Welche zwei Kernfragen stehen in der Risikoanalyse im Vordergrund?",
    options: [
      "Wer ist Projektleiter? und Wer ist Sponsor?",
      "Wie wahrscheinlich ist der Eintritt? und welche Auswirkungen hat es auf Zeit/Kosten/Leistung?",
      "Wie viele Meetings? und wie viele E-Mails?",
      "Welche Farbe hat das Dashboard?"
    ],
    answer: 1,
    explanation: "Analyse = Probability + Impact (oft auf Magisches Dreieck bezogen)."
  },
  {
    id: "ch1-087",
    type: "compare",
    q: "Welche Aussage zur Risikoberichterstattung ist korrekt?",
    options: [
      "Risikoinformationen sind nur fürs Team",
      "Wesentliche Risiken müssen an Leitungs-/Kontrollorgane kommuniziert werden",
      "Reporting ist nur in agilen Projekten nötig",
      "Reporting ersetzt Maßnahmen"
    ],
    answer: 1,
    explanation: "Transparenz für Management/Lenkung ist zentral."
  },
  {
    id: "ch1-088",
    type: "basic",
    q: "Warum sind Lessons Learned im Chancen- und Risikomanagement relevant?",
    options: [
      "Weil sie Budget automatisch erhöhen",
      "Weil Erfahrungen gesichert und in die organisationale Wissensbasis integriert werden",
      "Weil sie Stakeholder ersetzen",
      "Weil sie nur formal gefordert sind"
    ],
    answer: 1,
    explanation: "Wissenssicherung verbessert Identifikation/Checklisten/Methoden in Folgeprojekten."
  },
  {
    id: "ch1-089",
    type: "compare",
    q: "Welche Aussage passt am ehesten zur diskursiven Kommunikationsstrategie?",
    options: [
      "Selektive Information und Druck",
      "Einbindung/Beteiligung mit Interessenausgleich",
      "Informieren, Beteiligung an Arbeit/Entscheidungen, Verhandlungen, Konfliktmanagement",
      "Keine Kommunikation"
    ],
    answer: 2,
    explanation: "Diskursiv = dialog-/verhandlungsorientiert, konfliktfähig."
  },
  {
    id: "ch1-090",
    type: "compare",
    q: "Welche Kommunikationsstrategie bedeutet: Einbindung/Beteiligung, Ausgleich verschiedener Interessen?",
    options: [
      "Partizipative Kommunikationsstrategie",
      "Repressive Kommunikationsstrategie",
      "Selektive Informationsstrategie",
      "Keine Kommunikation"
    ],
    answer: 0,
    explanation: "Partizipativ = aktiv einbinden, Interessen ausgleichen."
  },

  // ------------------------------------------------------
  // H) KLAUSUR-TRANSFER: typische Szenarien
  // ------------------------------------------------------
  {
    id: "ch1-091",
    type: "transfer",
    q: "Ein Stakeholder ist indirekt betroffen, hat aber mittleren Einfluss. Welche Strategie ist am passendsten?",
    options: [
      "Beteiligung in allen Entscheidungen",
      "Informationsstrategie: maßgeschneiderte Updates, Erwartungsmanagement",
      "Repressive Strategie",
      "Komplett ignorieren"
    ],
    answer: 1,
    explanation: "Mittlerer Einfluss → informieren, Erwartungen antizipieren, passende Frequenz/Content."
  },
  {
    id: "ch1-092",
    type: "transfer",
    q: "Du hast ein Ziel, das messbar ist, aber ohne Termin. Welche SMART-Komponente fehlt?",
    options: ["Relevant", "Terminiert", "Spezifisch", "Attraktiv"],
    answer: 1,
    explanation: "Time-bound fehlt."
  },
  {
    id: "ch1-093",
    type: "transfer",
    q: "Ein Projekt ist neuartig und komplex. Welche Konsequenz ist für Risiko-/Chancenmanagement am plausibelsten?",
    options: [
      "Weniger Monitoring nötig",
      "Höhere Bedeutung von früher Identifikation, kontinuierlicher Überprüfung und Maßnahmen-Controlling",
      "Risiken sind automatisch geringer",
      "Nur Checkliste einmal am Anfang reicht"
    ],
    answer: 1,
    explanation: "Komplexität/Neuartigkeit erhöht Unsicherheit → mehr Prozessdisziplin im Risiko-/Chancenmanagement."
  },
  {
    id: "ch1-094",
    type: "transfer",
    q: "Im Projekt taucht ein Risiko auf, das bestandsgefährdend sein könnte. Welche Ebene sollte typischerweise entscheiden?",
    options: [
      "Nur einzelne Projektmitarbeiter",
      "Projektteam ohne Rücksprache",
      "Auftraggeber/Management (höhere Entscheidungsebene)",
      "Nur Lieferant"
    ],
    answer: 2,
    explanation: "Große/existenzielle Risiken gehören auf Entscheider-Ebene."
  },
  {
    id: "ch1-095",
    type: "compare",
    q: "Welche Aussage zur Kombination von Risikostrategien ist korrekt?",
    options: [
      "Man darf nur eine Strategie pro Risiko wählen",
      "Strategien können kombiniert werden (vermeiden/verringern/überwälzen/übernehmen), um Gesamtrisiko zu optimieren",
      "Übernehmen ist immer besser als vermeiden",
      "Nur überwälzen ist erlaubt"
    ],
    answer: 1,
    explanation: "Kombination ist möglich; Ziel ist Restrisiko/ Gesamtposition zu optimieren."
  },
  {
    id: "ch1-096",
    type: "basic",
    q: "Warum wird im Stakeholderregister häufig eine Skala (z.B. 1–5) für Einfluss/Macht genutzt?",
    options: [
      "Damit man Stakeholder entfernen kann",
      "Für vergleichbare Priorisierung und Ableitung passender Maßnahmen/Intensität",
      "Nur für Designzwecke",
      "Damit man Budget berechnen kann"
    ],
    answer: 1,
    explanation: "Skalen schaffen Vergleichbarkeit und Priorisierungsfähigkeit."
  },
  {
    id: "ch1-097",
    type: "compare",
    q: "Welche Zuordnung ist am sinnvollsten (Intensität nach Einfluss)?",
    options: [
      "Hoher Einfluss → Beobachtung; niedriger Einfluss → Beteiligung",
      "Niedriger Einfluss → Beobachtung; mittlerer Einfluss → Information; hoher Einfluss → Beteiligung",
      "Alle Stakeholder → Beteiligung",
      "Alle Stakeholder → keine Maßnahmen"
    ],
    answer: 1,
    explanation: "Intensität steigt mit Einfluss/Macht."
  },
  {
    id: "ch1-098",
    type: "transfer",
    q: "Ein Risiko wird überwälzt (Transfer). Was ist eine typische Voraussetzung, damit das wirklich wirkt?",
    options: [
      "Es reicht, es im Risikolog zu markieren",
      "Vertragliche/versicherungsrechtliche Absicherung und klare Verantwortlichkeiten",
      "Nur eine E-Mail an den Lieferanten",
      "Nur ein neues Tool kaufen"
    ],
    answer: 1,
    explanation: "Transfer braucht konkrete Mechanismen (Vertrag/Versicherung/Scope)."
  },
  {
    id: "ch1-099",
    type: "transfer",
    q: "Wozu dient ein Kommunikationsplan im Stakeholdermanagement?",
    options: [
      "Er ersetzt das Projektziel",
      "Er strukturiert, wer wann wie informiert/eingebunden wird und ermöglicht Wirksamkeitskontrolle",
      "Er ist nur eine Meetingliste ohne Inhalt",
      "Er gilt nur für externe Presse"
    ],
    answer: 1,
    explanation: "Systematische Planung, Durchführung, Überwachung und Anpassung der Kommunikation."
  },
  {
    id: "ch1-100",
    type: "transfer",
    q: "Warum muss man Risiken und Chancen priorisieren?",
    options: [
      "Weil man nur ein Risiko pro Projekt haben darf",
      "Weil Ressourcen begrenzt sind und nicht alles gleichzeitig bearbeitet werden kann",
      "Weil Priorisierung nur fürs Reporting ist",
      "Weil Priorisierung den Netzplan ersetzt"
    ],
    answer: 1,
    explanation: "Priorisierung = Fokus auf wesentliche Themen; Rest wird überwacht."
  }
];
