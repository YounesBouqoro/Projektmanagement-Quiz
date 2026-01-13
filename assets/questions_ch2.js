/* ======================================================
   Projektmanagement – Kapitel 2 (Repetitorium)
   Strategie: basic / compare / transfer
   Cluster:
   1) Phasenmodell
   2) Ablauf- vs. Aufbauorganisation
   3) Wasserfall vs. Spiralmodell
   4) Projektorganisation & Rollen
   5) Stab / Matrix / Reine Projektorganisation (Transfer)
   ====================================================== */

window.QUESTIONS_CH2 = [
  // =====================================================
  // CLUSTER 1: Phasenmodell (basic/compare)
  // =====================================================
  {
    id: "ch2-001",
    type: "basic",
    q: "Was beschreibt ein Phasenmodell im Projektmanagement am treffendsten?",
    options: [
      "Abbildung der gesamten Aufbauorganisation (Rollen/Weisungslinien) im Unternehmen",
      "Strukturierung des Projektverlaufs in zeitliche Abschnitte (Phasen) mit Meilensteinen/Kontrollpunkten",
      "Ein reines Tool zur Zeiterfassung",
      "Eine Budgetfreigabe"
    ],
    answer: 1,
    explanation: "Phasenmodelle strukturieren den Projektverlauf zeitlich; Meilensteine dienen als Kontrollpunkte."
  },
  {
    id: "ch2-002",
    type: "basic",
    q: "Was ist ein Meilenstein nach DIN-Logik (sinngemäß)?",
    options: [
      "Ein Arbeitspaket mit Dauer",
      "Ein Ereignis besonderer Bedeutung mit zugeordnetem Ergebnis und Plantermin",
      "Ein optionaler Workshop",
      "Ein Risikoregistereintrag"
    ],
    answer: 1,
    explanation: "Meilenstein = Ereignis, dem ein Ergebnis (Phasenergebnis) und ein Termin zugeordnet sind."
  },
  {
    id: "ch2-003",
    type: "compare",
    q: "Welche Aussage trifft den Unterschied: Phasenplan vs. Detailplanung?",
    options: [
      "Phasenplan ist operativ, Detailplanung ist strategisch",
      "Phasenplan legt grob den Rahmen; Detailplanung füllt mit konkreten Aufgaben (z.B. Netzplan) auf",
      "Beide sind identisch",
      "Detailplanung ersetzt Meilensteine grundsätzlich"
    ],
    answer: 1,
    explanation: "Phasenplan = grob/strategisch; Detailplanung = konkret/operativ (z.B. Netzplantechnik)."
  },
  {
    id: "ch2-004",
    type: "basic",
    q: "Warum werden Phasenübergänge häufig als Gates gestaltet?",
    options: [
      "Damit niemand Entscheidungen treffen muss",
      "Damit Ergebnisse geprüft und Go/No-Go-Entscheidungen sauber getroffen werden",
      "Damit man ohne Review schneller weitermachen kann",
      "Damit Dokumentation vermieden wird"
    ],
    answer: 1,
    explanation: "Gates sind Entscheidungs- und Kontrollpunkte auf Basis von Ergebnissen/Qualität."
  },
  {
    id: "ch2-005",
    type: "compare",
    q: "Welcher Vorteil von Projektphasenplänen ist klausurtypisch korrekt?",
    options: [
      "Phasenpläne verhindern Änderungen vollständig",
      "Transparenz durch Meilensteine ermöglicht Überwachung von Kosten, Terminen und Leistung",
      "Phasenpläne funktionieren nur in agilen Projekten",
      "Phasenpläne sind grundsätzlich ohne Schulungsaufwand"
    ],
    answer: 1,
    explanation: "Meilensteine schaffen Transparenz/Kontrolle (Zeit/Kosten/Leistung)."
  },
  {
    id: "ch2-006",
    type: "compare",
    q: "Welcher Nachteil von Projektphasenplänen ist klausurtypisch korrekt?",
    options: [
      "Phasenpläne sind immer zu flexibel",
      "Phasenmodelle können idealisiert/starr wirken und sind unflexibel bei Änderungen oder neuen Erkenntnissen",
      "Phasenpläne sind immer ohne Bürokratie",
      "Phasenpläne verhindern Standardisierung"
    ],
    answer: 1,
    explanation: "Kritik: idealisiertes sequenzielles Vorgehen, Bürokratie, eingeschränkte Anpassungsfähigkeit."
  },
  {
    id: "ch2-007",
    type: "basic",
    q: "Welche Aussage passt am besten zum Zweck eines Phasenplans?",
    options: [
      "Er ersetzt Projektorganisation/Rollen vollständig",
      "Er strukturiert den Projektverlauf in übersichtliche zeitliche Abschnitte als Basis für Detailplanung",
      "Er ist nur eine Kommunikationsliste",
      "Er ist identisch mit dem Organigramm"
    ],
    answer: 1,
    explanation: "Phasenplan = Fundament für detaillierte Ablaufplanung; schafft Struktur."
  },
  {
    id: "ch2-008",
    type: "compare",
    q: "Welche Aussage zu Standardisierung ist korrekt?",
    options: [
      "Standardisierung verhindert jede Effizienz",
      "Standardisierte Phasenpläne werden bei wiederkehrenden Projekttypen genutzt und angepasst",
      "Standardisierung ist nur in Behörden zulässig",
      "Standardisierung macht Meilensteine überflüssig"
    ],
    answer: 1,
    explanation: "Norm-Phasenpläne werden als Grundlage genutzt und projektspezifisch angepasst."
  },
  {
    id: "ch2-009",
    type: "transfer",
    q: "Ein Projekt läuft streng sequenziell. In der Implementierung wird ein Requirements-Fehler entdeckt. Was ist das klassische Risiko dieses Vorgehens?",
    options: [
      "Fehler werden automatisch billig behoben",
      "Feedback/Tests kommen spät, Änderungen sind dann teuer (Rework-Risiko)",
      "Keine Auswirkungen, weil Meilensteine existieren",
      "Die Qualität steigt automatisch"
    ],
    answer: 1,
    explanation: "Sequenzielle Modelle: späte Rückkopplung/Tests → teure Änderungen/Rework."
  },
  {
    id: "ch2-010",
    type: "transfer",
    q: "Du sollst ein Phasenmodell aufsetzen. Was ist eine saubere Gate-Formulierung?",
    options: [
      "„Wir machen weiter, wenn wir Lust haben.“",
      "„Phase endet, wenn definierte Ergebnisse vollständig vorliegen und freigegeben sind.“",
      "„Phase endet, wenn die Zeit um ist, egal was geliefert wurde.“",
      "„Phase endet ohne Kriterien, Hauptsache dokumentiert.“"
    ],
    answer: 1,
    explanation: "Gate = Ergebnis-/Abnahmekriterium + Entscheidung (Go/No-Go/Change)."
  },

  // =====================================================
  // CLUSTER 2: Ablauforganisation vs. Aufbauorganisation (basic/compare/transfer)
  // =====================================================
  {
    id: "ch2-011",
    type: "basic",
    q: "Was beschreibt Ablauforganisation im Projekt am besten?",
    options: [
      "Weisungsbefugnisse und Rollen",
      "Zeitliche/logische Organisation von Arbeitsschritten (Ablauf des Vorgehens)",
      "Nur Budgetplanung",
      "Nur Teamaufbau"
    ],
    answer: 1,
    explanation: "Ablauforganisation = wie Aufgaben zeitlich/logisch ablaufen."
  },
  {
    id: "ch2-012",
    type: "basic",
    q: "Was beschreibt Aufbauorganisation im Projekt am besten?",
    options: [
      "Zeitplan und Meilensteinplan",
      "Struktur: Rollen, Zuständigkeiten, Entscheidungswege, Weisungsbefugnisse und Eskalationspfade",
      "Nur Tools und Methoden",
      "Nur Kundenanforderungen"
    ],
    answer: 1,
    explanation: "Aufbauorganisation = wer entscheidet/arbeitet wie, inkl. Weisungs- und Eskalationslogik."
  },
  {
    id: "ch2-013",
    type: "compare",
    q: "Welche Abgrenzung ist korrekt?",
    options: [
      "Ablauf = Wer/Weisung; Aufbau = Wann/Wie",
      "Ablauf = Wann/Wie; Aufbau = Wer/Zuständigkeit/Weisung",
      "Beide Begriffe sind identisch",
      "Aufbau ist nur bei agilen Projekten relevant"
    ],
    answer: 1,
    explanation: "Ablauf: Prozess/Sequenz. Aufbau: Rollen/Verantwortung/Weisung."
  },
  {
    id: "ch2-014",
    type: "transfer",
    q: "In einem Projekt gibt es dauernd Entscheidungsstau, Zuständigkeiten sind unklar. Welcher Bereich ist primär zu schwach?",
    options: [
      "Ablauforganisation (Phasenplan fehlt) – sonst alles gut",
      "Aufbauorganisation (Rollen/Entscheidungs- und Eskalationswege sind unklar)",
      "Nur die Dokumentation ist zu schön",
      "Das Projekt braucht nur mehr Meetings"
    ],
    answer: 1,
    explanation: "Entscheidungsstau/unklare Zuständigkeit = Aufbauorganisation/Governance-Problem."
  },
  {
    id: "ch2-015",
    type: "transfer",
    q: "Welche Maßnahme ist typisch, um Aufbauorganisation zu stabilisieren?",
    options: [
      "Weisungsbefugnisse, Entscheidungskompetenzen und Eskalationspfade klar festlegen",
      "Phasenmodell komplett streichen",
      "Alle Aufgaben an eine Person geben",
      "Kommunikation einstellen"
    ],
    answer: 0,
    explanation: "Aufbauorganisation: klare Verantwortlichkeiten/Kompetenzen/Eskalationspfade."
  },

  // =====================================================
  // CLUSTER 3: Wasserfall vs. Spiralmodell (compare/transfer)
  // =====================================================
  {
    id: "ch2-016",
    type: "basic",
    q: "Wodurch ist das Wasserfallmodell charakterisiert?",
    options: [
      "Iterativ-inkrementell mit Risiko-Fokus je Zyklus",
      "Sequenziell: Phasen folgen aufeinander, Ergebnisse werden „eingefroren“ und weitergereicht",
      "Ohne Dokumentation",
      "Ohne Abnahme/Tests"
    ],
    answer: 1,
    explanation: "Wasserfall: Phasen liefern Ergebnisse, die Grundlage der nächsten Phase sind (Einfroren/Übergabe)."
  },
  {
    id: "ch2-017",
    type: "compare",
    q: "Welche Kritik am Wasserfallmodell ist klausurrelevant?",
    options: [
      "Tests kommen sehr früh, dadurch zu viel Qualität",
      "Späte Tests und fehlende Rückkopplung bei Fehlern/Lücken in früheren Phasen",
      "Zu viele Iterationen machen es unsteuerbar",
      "Es ist per Definition agil"
    ],
    answer: 1,
    explanation: "Kritik: späte Tests, wenig Rückkopplung, dokumentengetrieben, starr."
  },
  {
    id: "ch2-018",
    type: "basic",
    q: "Was ist die Kernidee des Spiralmodells?",
    options: [
      "Einmaliger Durchlauf ohne Wiederholung",
      "Iterativ-inkrementell: Zyklen mit Bewertung/Prototyping und explizitem Risikofokus",
      "Nur Testphase",
      "Nur Abschlussphase"
    ],
    answer: 1,
    explanation: "Spiral: wiederholte Zyklen, Risikoanalyse + Lernen/Feedback."
  },
  {
    id: "ch2-019",
    type: "compare",
    q: "Welcher Vorteil passt eher zum Spiralmodell als zum Wasserfall?",
    options: [
      "Sehr geringe Management-Komplexität",
      "Frühe Risikoreduktion durch Iterationen/Feedback und Prototyping",
      "Änderungen werden grundsätzlich verboten",
      "Keine Stakeholder-Einbindung nötig"
    ],
    answer: 1,
    explanation: "Spiral: früh lernen/Feedback, Risiko kontrollieren."
  },
  {
    id: "ch2-020",
    type: "compare",
    q: "Welcher Nachteil passt eher zum Spiralmodell?",
    options: [
      "Es ist immer dokumentenfrei",
      "Hoher Planungs-/Managementaufwand, Steuerung/Koordination komplexer",
      "Keine Iteration möglich",
      "Nur für trivialste Projekte geeignet"
    ],
    answer: 1,
    explanation: "Iterativ/spiralartig kann Managementaufwand und Governance-Anspruch erhöhen."
  },
  {
    id: "ch2-021",
    type: "transfer",
    q: "Projekt mit stabilen Anforderungen, hoher Regulatorik, starker Dokumentationspflicht: welches Modell passt eher?",
    options: [
      "Spiral/iterativ ohne klare Gates",
      "Wasserfall/phasenorientiert mit klaren Ergebnissen und Abnahmen",
      "Kein Modell",
      "Nur Daily Standups"
    ],
    answer: 1,
    explanation: "Stabil + Compliance/Doku → phasenorientiert/sequenziell mit klaren Übergaben."
  },
  {
    id: "ch2-022",
    type: "transfer",
    q: "Projekt mit unsicheren Anforderungen und hohem Innovationsgrad: welches Modell passt eher?",
    options: [
      "Wasserfall (weil Änderungen teuer sind)",
      "Spiral/iterativ (weil Lernen/Feedback erforderlich ist)",
      "Nur Abschlussphase",
      "Nur Meilensteinplan ohne Inhalte"
    ],
    answer: 1,
    explanation: "Unsicherheit/Innovation → iterativ/spiralartig sinnvoll."
  },

  // =====================================================
  // CLUSTER 4: Projektorganisation & Rollen (basic/compare/transfer)
  // =====================================================
  {
    id: "ch2-023",
    type: "basic",
    q: "Welche Rolle gibt Ziele vor und trifft Entscheidungen bei Eskalationen (klassisch)?",
    options: [
      "Projektteam",
      "Auftraggeber/Sponsor",
      "Projektassistenz",
      "Qualitätssicherung"
    ],
    answer: 1,
    explanation: "Auftraggeber/Sponsor setzt Rahmen (Ziel, Budget, Ressourcen) und entscheidet bei Eskalation."
  },
  {
    id: "ch2-024",
    type: "basic",
    q: "Wozu dient der Lenkungsausschuss (Steering Committee) typischerweise?",
    options: [
      "Er ersetzt die Projektleitung im Tagesgeschäft",
      "Er überwacht/steuert auf höherer Ebene und entscheidet bei Ziel-/Scope-/Budgetfragen",
      "Er schreibt die Spezifikation",
      "Er führt das Projektteam disziplinarisch"
    ],
    answer: 1,
    explanation: "Steering = übergeordnetes Steuerungs-/Entscheidungsgremium."
  },
  {
    id: "ch2-025",
    type: "basic",
    q: "Was ist eine Kernaufgabe der Projektleitung laut Repetitorium?",
    options: [
      "Nur fachlich arbeiten, keine Führung",
      "Projektführung/-steuerung und Verantwortung für Auftragserfüllung und Zielerreichung",
      "Nur Marketing",
      "Nur Budget genehmigen"
    ],
    answer: 1,
    explanation: "Projektleiter konkretisiert, führt, steuert und verantwortet Zielerreichung."
  },
  {
    id: "ch2-026",
    type: "compare",
    q: "Welche Aussage beschreibt Schnittstellenmanagement der Projektleitung korrekt?",
    options: [
      "Projektleitung hat keine Schnittstellen",
      "Projektleitung pflegt Schnittstellen zwischen Projektteam, Kunden, Linie, PMO und Auftraggeber",
      "Schnittstellen macht ausschließlich das PMO",
      "Schnittstellen sind nur technisch"
    ],
    answer: 1,
    explanation: "Schnittstellenpflege zwischen Team, Linie, Kunde, PMO, Auftraggeber ist zentrale PM-Aufgabe."
  },
  {
    id: "ch2-027",
    type: "basic",
    q: "Was ist ein PMO laut Repetitorium typischerweise?",
    options: [
      "Ein operatives Entwicklerteam",
      "Ein Stabsgremium unter Management, das beim Aufsetzen hilft und Vorgehensmodell/Dokumente definiert",
      "Ein Ersatz für den Sponsor",
      "Ein reines Urlaubsplanungstool"
    ],
    answer: 1,
    explanation: "PMO als Stabsgremium: unterstützt Setup, definiert Vorgehensmodell/Dokumentationsanforderungen."
  },
  {
    id: "ch2-028",
    type: "transfer",
    q: "In deinem Projekt eskaliert ständig die Frage „Wer darf was entscheiden?“. Was ist die naheliegende Lösung?",
    options: [
      "Mehr Dokumente ohne Zuständigkeit",
      "Entscheidungskompetenzen + Eskalationspfade sauber festlegen (Governance)",
      "Projektteam verkleinern",
      "Phasenmodell entfernen"
    ],
    answer: 1,
    explanation: "Klarheit über Kompetenzen/Weisung/Eskalation ist Aufbauorganisations-Kern."
  },
  {
    id: "ch2-029",
    type: "transfer",
    q: "Welche Situation ist ein typischer Eskalationsgrund zum Steering Committee?",
    options: [
      "Welche Farbe hat das Dashboard?",
      "Ziel-/Scope-/Budgetkonflikt mit hoher Tragweite",
      "Wer schreibt das Protokoll?",
      "Wann ist Mittagspause?"
    ],
    answer: 1,
    explanation: "Strategische Entscheidungen/konflikte → Steering."
  },
  {
    id: "ch2-030",
    type: "compare",
    q: "Welche Aussage zu Projektteam vs. Linienmitarbeiter ist korrekt (klassisch)?",
    options: [
      "Projektteammitglieder sind stärker dem Projekt zugeordnet; Linienmitarbeiter werden ggf. temporär zugeteilt",
      "Projektteammitglieder sind nie dem Projekt zugeordnet",
      "Linienmitarbeiter sind immer disziplinarisch dem Projektleiter unterstellt",
      "Es gibt keine Unterschiede"
    ],
    answer: 0,
    explanation: "Projektteam eher projektzugeordnet; Fachabteilung temporär/parallel in Linie eingebunden."
  },

  // =====================================================
  // CLUSTER 5: Stab / Matrix / Reine Projektorganisation (compare + transfer heavy)
  // =====================================================
  {
    id: "ch2-031",
    type: "basic",
    q: "Welche Modelle der Projektaufbauorganisation werden im Repetitorium genannt?",
    options: [
      "Kanban, Scrum, XP",
      "Stabs-Projektorganisation, Matrix-Projektorganisation, Reine Projektorganisation",
      "Nur Linienorganisation",
      "Nur Prozessorganisation"
    ],
    answer: 1,
    explanation: "Klassische Modelle: Stab, Matrix, Reine Projektorganisation."
  },
  {
    id: "ch2-032",
    type: "compare",
    q: "Wie ist die Matrix-Projektorganisation definiert (Kernidee)?",
    options: [
      "Nur ein Gliederungsmerkmal (rein funktionsorientiert)",
      "Zwei Gliederungsmerkmale gleichzeitig; Kompetenzen zwischen funktionalem und projektorientiertem System aufgeteilt",
      "Projekt wird vollständig aus der Linie ausgegliedert",
      "Projekt hat keine Weisungswege"
    ],
    answer: 1,
    explanation: "Matrix = Doppelunterstellung / Kompetenzteilung Linie + Projekt."
  },
  {
    id: "ch2-033",
    type: "compare",
    q: "Welche Herausforderung ist typisch für Matrix-Projektorganisationen?",
    options: [
      "Keine Unsicherheit und keine Konflikte",
      "Konfliktpotenzial wegen Doppelunterstellung und Prioritätenkonflikten",
      "Keine Dokumentation nötig",
      "Projektleiter hat immer volle Weisungsbefugnis"
    ],
    answer: 1,
    explanation: "Matrix: Konflikte/Prioritäten wegen Doppelunterstellung."
  },
  {
    id: "ch2-034",
    type: "compare",
    q: "Welche Aussage passt am besten zur reinen Projektorganisation?",
    options: [
      "Projekt bleibt in der Linie, Projektleiter hat kaum Durchgriff",
      "Projekt wird aus der Linie ausgegliedert; Team ist vollständig dem Projektleiter fachlich & personell unterstellt",
      "Projekt hat keine Führung",
      "Nur externe Ressourcen sind erlaubt"
    ],
    answer: 1,
    explanation: "Reine Projektorga: volle Zuordnung und Weisungsbefugnis beim Projektleiter."
  },
  {
    id: "ch2-035",
    type: "compare",
    q: "Welcher Vorteil ist typisch für die reine Projektorganisation?",
    options: [
      "Keine Identifikation und geringe Motivation",
      "Eindeutige Weisungsbefugnis und hohe Motivation/Identifikation",
      "Keine Verantwortung",
      "Sehr geringe Kosten immer"
    ],
    answer: 1,
    explanation: "Reine Projektorga: klare Weisung + hohe Motivation/Identifikation."
  },
  {
    id: "ch2-036",
    type: "compare",
    q: "Welcher Nachteil ist typisch für die reine Projektorganisation?",
    options: [
      "Mitarbeiter bleiben automatisch perfekt integriert",
      "Schwierige Wiedereingliederung der Mitarbeiter nach Projektende / Akzeptanzprobleme",
      "Keine Konflikte möglich",
      "Projekt läuft immer langsamer"
    ],
    answer: 1,
    explanation: "Reintegration/ Akzeptanz des Projektergebnisses kann problematisch sein."
  },
  {
    id: "ch2-037",
    type: "compare",
    q: "Welche Aussage passt am besten zur Stabs-Projektorganisation (Kernlogik)?",
    options: [
      "Projekt wird vollständig aus der Linie ausgegliedert",
      "Projektstab wird in die bestehende Organisation eingebettet; Umsetzung bleibt stark liniennah",
      "Projektleiter hat immer volle personelle Weisungsbefugnis",
      "Stab bedeutet immer Doppelunterstellung"
    ],
    answer: 1,
    explanation: "Stab: Einbettung in Linie, Stab unterstützt/koordiniert – Projekt ist weniger selbstständig."
  },
  {
    id: "ch2-038",
    type: "compare",
    q: "Welcher Nachteil ist typisch für Stabs-Projektorganisation?",
    options: [
      "Eindeutige Verantwortungsübernahme immer vorhanden",
      "Problem der Verantwortungsübernahme/fehlende Identifikation + Spannungsverhältnis Stab-Linie",
      "Keine Akzeptanz der Lösungen",
      "Nie flexibel einsetzbar"
    ],
    answer: 1,
    explanation: "Stab: Verantwortungsdiffusion + Stab-Linie-Spannung möglich."
  },
  {
    id: "ch2-039",
    type: "compare",
    q: "Welche Empfehlung passt zur Auswahl Stabs-Projektorganisation laut Repetitorium?",
    options: [
      "Sehr komplex, hohes Risiko, starker Zeitdruck",
      "Kleinere Projekte mit geringem Risiko und ohne starken Zeitdruck; Schwerpunkt in einem Bereich",
      "Nur internationale Programme",
      "Nur wenn keine Linie existiert"
    ],
    answer: 1,
    explanation: "Stab: eher klein/geringes Risiko/kein starker Zeitdruck; Fokus in einer Abteilung."
  },
  {
    id: "ch2-040",
    type: "compare",
    q: "Welche Empfehlung passt zur Matrix-Projektorganisation laut Repetitorium?",
    options: [
      "Nur für sehr einfache Projekte",
      "Viele parallele Vorhaben, stark abteilungsübergreifend; ähnliche Technologien/Methoden",
      "Wenn keinerlei Abstimmung nötig ist",
      "Wenn Projekt komplett isoliert sein muss"
    ],
    answer: 1,
    explanation: "Matrix: viele Parallelprojekte + abteilungsübergreifend; Spezialwissen flexibel."
  },
  {
    id: "ch2-041",
    type: "compare",
    q: "Welche Empfehlung passt zur reinen Projektorganisation laut Repetitorium?",
    options: [
      "Klein, risikoarm, ohne Zeitdruck",
      "Sehr komplex/neuartig, hohes Risiko und starker Zeitdruck; strategisch bedeutsam",
      "Nur wenn Ressourcen knapp sind",
      "Nur für Routine"
    ],
    answer: 1,
    explanation: "Rein: komplex + Risiko + Zeitdruck + strategische Bedeutung."
  },

  // =====================================================
  // TRANSFER-BLOCK: Orgaform wählen (mind. 15 Szenarien)
  // =====================================================
  {
    id: "ch2-042",
    type: "transfer",
    q: "Transfer: Ein Projekt ist zeitkritisch, hat klare Anforderungen, aber knappe Ressourcen. Welche Organisationsform ist am geeignetsten – und warum?",
    options: [
      "Reine Projektorganisation – weil Ressourcen knapp sind und Doppelunterstellung hilft",
      "Matrix-Projektorganisation – weil knappe Ressourcen flexiblen Personaleinsatz erfordern (trotz Konfliktpotenzial)",
      "Stabs-Projektorganisation – weil Zeitdruck immer niedrig ist",
      "Keine Projektorganisation nötig"
    ],
    answer: 1,
    explanation: "Knappe Ressourcen → Matrix oft pragmatisch (Ressourcenteilung). Zeitdruck muss durch klare Governance abgefedert werden."
  },
  {
    id: "ch2-043",
    type: "transfer",
    q: "Transfer: Sehr komplexes, neuartiges Projekt mit hohem Risiko und starkem Zeitdruck. Welche Orgaform passt?",
    options: [
      "Stabs-Projektorganisation",
      "Matrix-Projektorganisation",
      "Reine Projektorganisation",
      "Linienorganisation ohne Projektleitung"
    ],
    answer: 2,
    explanation: "Reine Projektorga wird für sehr komplex/neuartig/hohes Risiko/hoher Zeitdruck empfohlen."
  },
  {
    id: "ch2-044",
    type: "transfer",
    q: "Transfer: Kleines Projekt, geringes Risiko, kein starker Zeitdruck, Schwerpunkt in einer Fachabteilung. Welche Orgaform passt?",
    options: [
      "Reine Projektorganisation",
      "Matrix-Projektorganisation",
      "Stabs-Projektorganisation",
      "Nur externe Projektorganisation"
    ],
    answer: 2,
    explanation: "Stab ist für kleinere, risikoarme Projekte ohne starken Zeitdruck geeignet."
  },
  {
    id: "ch2-045",
    type: "transfer",
    q: "Transfer: Viele parallele Projekte laufen gleichzeitig, starke abteilungsübergreifende Anforderungen. Welche Orgaform passt am ehesten?",
    options: [
      "Stabs-Projektorganisation",
      "Matrix-Projektorganisation",
      "Reine Projektorganisation für jedes Projekt",
      "Keine Struktur nötig"
    ],
    answer: 1,
    explanation: "Matrix ist sinnvoll bei vielen Parallelprojekten und starker Bereichsübergreifung."
  },
  {
    id: "ch2-046",
    type: "transfer",
    q: "Transfer: In Matrixprojekten kommt es regelmäßig zu Prioritätskonflikten Linie vs. Projekt. Was ist die stärkste Gegenmaßnahme?",
    options: [
      "Konflikte ignorieren",
      "Eskalationspfade + Entscheidungskompetenzen (Sponsor/Steering) klar definieren",
      "Nur mehr Dokumentation",
      "Projektleitung entmachten"
    ],
    answer: 1,
    explanation: "Matrix braucht Governance: klare Priorisierung + Eskalation."
  },
  {
    id: "ch2-047",
    type: "transfer",
    q: "Transfer: Projektleiter hat fachliche Verantwortung, aber keine personelle Weisungsbefugnis. Welche Orgaform ist wahrscheinlich?",
    options: [
      "Reine Projektorganisation",
      "Matrix-Projektorganisation",
      "Stabs-Projektorganisation",
      "Keine Projektorganisation"
    ],
    answer: 1,
    explanation: "Matrix: Projektleitung oft fachlich, Linie disziplinarisch."
  },
  {
    id: "ch2-048",
    type: "transfer",
    q: "Transfer: In Stabs-Projektorganisation entsteht 'Verantwortungsdiffusion'. Was bedeutet das?",
    options: [
      "Verantwortung ist klar beim Projektleiter gebündelt",
      "Niemand fühlt sich eindeutig verantwortlich, weil Stab eher unterstützt/koordiniert",
      "Stab übernimmt automatisch alles",
      "Linie hat keine Aufgaben"
    ],
    answer: 1,
    explanation: "Stab kann zu unklarer Verantwortungsübernahme führen."
  },
  {
    id: "ch2-049",
    type: "transfer",
    q: "Transfer: Dein Projekt braucht maximale Geschwindigkeit und klare Durchgriffsmacht der Projektleitung. Welche Orgaform passt?",
    options: [
      "Stab",
      "Matrix",
      "Reine Projektorganisation",
      "Nur Linie"
    ],
    answer: 2,
    explanation: "Reine Projektorga: eindeutige Weisungsbefugnis, hohe Fokussierung."
  },
  {
    id: "ch2-050",
    type: "transfer",
    q: "Transfer: Ein Projekt liefert Ergebnis, aber Linie akzeptiert es nicht (Einführung scheitert). Welche Orgaform hat dieses Risiko typischerweise stärker?",
    options: [
      "Reine Projektorganisation (Akzeptanzprobleme möglich)",
      "Matrix-Projektorganisation (Akzeptanz immer garantiert)",
      "Stab (Akzeptanz immer unmöglich)",
      "Keine"
    ],
    answer: 0,
    explanation: "Reine Projektorga kann Akzeptanz/Reintegration erschweren."
  },
  {
    id: "ch2-051",
    type: "transfer",
    q: "Transfer: Projekt verlangt Spezialwissen aus mehreren Abteilungen, aber niemand kann 100% ins Projekt wechseln. Beste Wahl?",
    options: [
      "Reine Projektorganisation",
      "Matrix-Projektorganisation",
      "Stabs-Projektorganisation",
      "Keine Projektorganisation"
    ],
    answer: 1,
    explanation: "Matrix ermöglicht gezielte Übertragung von Spezialwissen und flexiblen Personaleinsatz."
  },
  {
    id: "ch2-052",
    type: "transfer",
    q: "Transfer: Du willst Konflikte der Doppelunterstellung vermeiden und Ressourcen komplett fokussieren. Was ist die Konsequenz?",
    options: [
      "Matrix wählen",
      "Stab wählen",
      "Reine Projektorganisation wählen (aber Reintegration beachten)",
      "Gar keine Projektorganisation"
    ],
    answer: 2,
    explanation: "Rein reduziert Doppelunterstellung, erhöht Fokus, aber Reintegration/ Akzeptanz managen."
  },
  {
    id: "ch2-053",
    type: "transfer",
    q: "Transfer: Ein Projekt ist inhaltlich klein, aber politisch sensibel (viele Interessen). Welche Struktur hilft, Entscheidungen zu beschleunigen?",
    options: [
      "Ohne Governance arbeiten",
      "Steering/Sponsor mit klaren Entscheidungskompetenzen + Eskalationspfad definieren",
      "Nur das Projektteam entscheiden lassen",
      "Alles per E-Mail klären"
    ],
    answer: 1,
    explanation: "Politische Konflikte brauchen klare Governance/Entscheidungswege."
  },
  {
    id: "ch2-054",
    type: "transfer",
    q: "Transfer: In einem Projekt sind Rollen sauber definiert, aber es fehlt ein klares Gate-Kriterium. Was ist das Risiko?",
    options: [
      "Kein Risiko, weil Rollen reichen",
      "Phasenübergänge erfolgen ohne Ergebnis-/Qualitätsprüfung → Rework und Fehlentwicklungen",
      "Nur Reporting wird schöner",
      "Stakeholder werden automatisch zufriedener"
    ],
    answer: 1,
    explanation: "Ohne Gate-Kriterien schleppst du Unklarheiten/Fehler in die nächste Phase."
  },
  {
    id: "ch2-055",
    type: "transfer",
    q: "Transfer: Du musst zwischen Stab und Matrix wählen. Projekt ist abteilungsübergreifend, aber Risiko und Zeitdruck sind moderat. Was passt eher?",
    options: [
      "Stab (weil abteilungsübergreifend immer Stab ist)",
      "Matrix (weil abteilungsübergreifend und Ressourcen geteilt werden müssen)",
      "Rein (weil immer besser)",
      "Linie"
    ],
    answer: 1,
    explanation: "Abteilungsübergreifend + Ressourcenteilung → Matrix typischer Fit."
  },
  {
    id: "ch2-056",
    type: "transfer",
    q: "Transfer: Projekt ist klein/risikoarm, aber Zeitdruck ist hoch. Was ist die Gefahr einer Stabs-Projektorganisation?",
    options: [
      "Sie ist immer schneller als reine Projektorga",
      "Verlängerte Reaktionszeit und Spannungsverhältnis Stab-Linie können Zeitdruck verschärfen",
      "Zeitdruck spielt keine Rolle",
      "Stab ist per Definition ohne Linie"
    ],
    answer: 1,
    explanation: "Stab kann Reaktionszeit verlängern; bei hohem Zeitdruck kritisch prüfen."
  },

  // =====================================================
  // Zusätzliche Vergleichs-/Transferfragen zur Klausursicherheit
  // =====================================================
  {
    id: "ch2-057",
    type: "compare",
    q: "Welche Kombination ist in klassischen Projekten für Steuerbarkeit am stärksten?",
    options: [
      "Nur Phasenplan ohne Meilensteine",
      "Phasenplan + Meilensteine (Kontrollpunkte) + klare Rollen/Governance",
      "Nur Daily Standups",
      "Nur Tools, keine Struktur"
    ],
    answer: 1,
    explanation: "Steuerbarkeit entsteht durch Struktur (Phasen/Meilensteine) + Governance/Rollen."
  },
  {
    id: "ch2-058",
    type: "transfer",
    q: "Transfer: In einem Wasserfall-Projekt sollen Anforderungen nachträglich stark geändert werden. Welche Maßnahme ist am saubersten?",
    options: [
      "Änderungen informell einbauen, ohne Dokumente",
      "Change-Control/Gate-Entscheidung: Auswirkungen prüfen (Zeit/Kosten/Leistung) und Entscheidung herbeiführen",
      "Änderungen komplett ignorieren",
      "Projektplan löschen"
    ],
    answer: 1,
    explanation: "Klassisch: Änderungen über definierte Entscheidungsprozesse/Gates steuern."
  },
  {
    id: "ch2-059",
    type: "transfer",
    q: "Transfer: Projektteam liefert Ergebnisse, aber niemand nimmt ab. Welches Element fehlt am ehesten?",
    options: [
      "Ablauforganisation (Phasen/Gates/Abnahmen sind nicht sauber definiert)",
      "Nur Marketing",
      "Nur IT",
      "Nur Budget"
    ],
    answer: 0,
    explanation: "Abnahme ist Teil der Ablauforganisation (Gates/Meilensteine)."
  },
  {
    id: "ch2-060",
    type: "compare",
    q: "Welche Aussage ist in klassischen Projekten zur Dokumentation am treffendsten?",
    options: [
      "Dokumentation ist immer Selbstzweck",
      "Dokumentation reduziert Interpretationsspielräume und stabilisiert Übergaben zwischen Phasen",
      "Dokumentation ist nur in agilen Projekten nötig",
      "Dokumentation verhindert jede Steuerung"
    ],
    answer: 1,
    explanation: "Dokumentation stützt Übergaben/Transparenz und Nachvollziehbarkeit."
  },

  // =====================================================
  // Füllung auf 100: weitere klausurtypische Varianten (mehr Transfer/Compare)
  // =====================================================
  {
    id: "ch2-061",
    type: "compare",
    q: "Welche Aussage zu Matrix-Projektorganisation ist korrekt?",
    options: [
      "Projektmitarbeiter sind ausschließlich dem Projekt unterstellt",
      "Kompetenzen werden zwischen funktionsorientierter und projektorientierter Leitung geteilt",
      "Es gibt keine Konflikte",
      "Projektleiter hat automatisch personelle Weisung"
    ],
    answer: 1,
    explanation: "Matrix = Kompetenzteilung zwischen Linie und Projekt."
  },
  {
    id: "ch2-062",
    type: "transfer",
    q: "Transfer: Du willst in Matrix-Projekten die 'Schwarzer-Peter'-Problematik reduzieren. Was ist ein Hebel?",
    options: [
      "Verantwortlichkeiten pro Deliverable eindeutig zuordnen (Accountability)",
      "Mehr Doppelunterstellung einführen",
      "Eskalation verbieten",
      "Nur informelle Kommunikation"
    ],
    answer: 0,
    explanation: "Klare Verantwortlichkeit reduziert Abschieben von Zuständigkeiten."
  },
  {
    id: "ch2-063",
    type: "basic",
    q: "Welche Aussage beschreibt den Sinn eines Projektoffice/Projektbüros am ehesten?",
    options: [
      "Es entscheidet über Scope",
      "Es pflegt Projektdokumente und unterstützt administrativ (Berichte, Organisation)",
      "Es ersetzt den Sponsor",
      "Es ist nur für externe Presse da"
    ],
    answer: 1,
    explanation: "Projektoffice: administrative Unterstützung, Dokumente/Reports."
  },
  {
    id: "ch2-064",
    type: "transfer",
    q: "Transfer: Du hast knappe Ressourcen, aber willst trotzdem Zeitdruck beherrschen. Was ist die Mindestabsicherung?",
    options: [
      "Matrix ohne Governance laufen lassen",
      "Matrix + klare Priorisierung/Eskalation + sauberes Reporting und Gates",
      "Nur Stab einführen",
      "Keine Struktur"
    ],
    answer: 1,
    explanation: "Matrix braucht Governance, sonst eskaliert Zeitdruck über Konflikte/Entscheidungsstau."
  },
  {
    id: "ch2-065",
    type: "compare",
    q: "Welche Aussage ist korrekt: Gate vs. Meilenstein?",
    options: [
      "Gate ist nur ein Meeting ohne Entscheidung",
      "Gate ist ein Meilenstein mit Entscheidung/Reviewlogik zur Freigabe des nächsten Abschnitts",
      "Meilensteine sind Arbeitspakete",
      "Beides ist identisch mit dem Projektbudget"
    ],
    answer: 1,
    explanation: "Gate ist ein Meilenstein mit expliziter Entscheidungs-/Reviewfunktion."
  },

  // --- weitere Transfer-Szenarien (Orgaform + Rollen + Modelle)
  {
    id: "ch2-066",
    type: "transfer",
    q: "Transfer: Ein Projekt ist strategisch extrem wichtig. Das Management will maximale Kontrolle über Entscheidungen. Welche Governance passt?",
    options: [
      "Kein Steering, nur Team entscheidet",
      "Steering Committee + Sponsor mit klaren Entscheidungskompetenzen und Eskalationspfad",
      "Nur Projektoffice entscheidet",
      "Nur Linienvorgesetzte entscheiden ohne Projektrolle"
    ],
    answer: 1,
    explanation: "Strategische Projekte brauchen starke Governance (Sponsor/Steering)."
  },
  {
    id: "ch2-067",
    type: "transfer",
    q: "Transfer: In einem Wasserfallprojekt werden Ergebnisse einer Phase 'eingefroren'. Warum?",
    options: [
      "Damit man schneller ohne Abnahme weiterläuft",
      "Weil das Ergebnis die Grundlage der nächsten Phase bildet und Stabilität für Folgeschritte braucht",
      "Damit keine Dokumente entstehen",
      "Weil das Projekt sonst agil wird"
    ],
    answer: 1,
    explanation: "Einfroren = stabile Basis für nächste Phase (Übergabeprinzip)."
  },
  {
    id: "ch2-068",
    type: "compare",
    q: "Welche Aussage ist korrekt: Stab vs. Rein (Grad der Selbstständigkeit)?",
    options: [
      "Stab hat höchsten Selbstständigkeitsgrad",
      "Rein hat höchsten Selbstständigkeitsgrad; Stab den niedrigsten",
      "Matrix hat niedrigsten, Rein mittleren",
      "Alle gleich"
    ],
    answer: 1,
    explanation: "Rein = höchste Projekt-Selbstständigkeit; Stab = niedrig."
  },
  {
    id: "ch2-069",
    type: "transfer",
    q: "Transfer: Dein Projekt ist klein, aber abteilungsübergreifend. Du willst Konflikte minimal halten. Was ist realistisch?",
    options: [
      "Reine Projektorganisation (immer konfliktfrei)",
      "Matrix (Konflikte möglich) + klare Priorisierung/Entscheidungskompetenzen",
      "Stab ohne Abstimmung",
      "Keine Projektleitung"
    ],
    answer: 1,
    explanation: "Abteilungsübergreifend → Matrix naheliegend, Konflikte über Governance managen."
  },
  {
    id: "ch2-070",
    type: "transfer",
    q: "Transfer: In deinem Projekt gibt es starke politische Konflikte. Welche Rolle/Instanz ist dafür primär gedacht?",
    options: [
      "Projektassistenz",
      "Sponsor/Steering Committee (politisches/entscheidendes Teilsystem)",
      "Nur Entwickler",
      "Nur Kunde"
    ],
    answer: 1,
    explanation: "Politische/strategische Konflikte gehören auf Sponsor/Steering-Ebene."
  },

  // =====================================================
  // Auffüllen bis 100: kompakte, klausurtaugliche Drill-Fragen
  // (Alle bleiben in den 5 Clustern, kein Abschluss/Schätzung etc.)
  // =====================================================
  {
    id: "ch2-071",
    type: "basic",
    q: "Welche drei Ebenen/Teilsysteme der Projektorganisation werden im Repetitorium (grobe Logik) unterschieden?",
    options: [
      "IT, HR, Marketing",
      "Politisches (Steuerung/Entscheidung), Administratives (Support), Operatives (Durchführung/Projektleitung)",
      "Nur Operativ",
      "Nur Administrativ"
    ],
    answer: 1,
    explanation: "Projektorganisation umfasst Steuerung/Entscheidung, Unterstützung und operative Durchführung."
  },
  {
    id: "ch2-072",
    type: "compare",
    q: "Was ist ein typischer Vorteil von Matrix-Projektorganisation laut Folienlogik?",
    options: [
      "Keine Unsicherheit für Mitarbeiter und flexibler Personaleinsatz",
      "Keine Doppelunterstellung möglich",
      "Projekt läuft ohne Abstimmung",
      "Reintegration ist immer schwierig"
    ],
    answer: 0,
    explanation: "Matrix: flexibler Personaleinsatz, Spezialwissen, weniger Unsicherheit (aber Konfliktpotenzial)."
  },
  {
    id: "ch2-073",
    type: "transfer",
    q: "Transfer: Du willst im Projekt schnelle Entscheidungen. Was ist der größte Hebel in Aufbauorganisation?",
    options: [
      "Mehr Tools",
      "Entscheidungskompetenzen und Eskalationspfade sauber klären",
      "Mehr Urlaub",
      "Weniger Stakeholder"
    ],
    answer: 1,
    explanation: "Entscheidungsqualität/-geschwindigkeit hängt stark an klaren Kompetenzen/Eskalation."
  },
  {
    id: "ch2-074",
    type: "compare",
    q: "Welche Aussage ist klausurrelevant korrekt: Warum scheitern Projekte oft?",
    options: [
      "Weil fachliche Kompetenz fehlt",
      "Oft wegen organisatorischer Schwächen (Struktur/Rollen/Entscheidungen), nicht primär fachlich",
      "Nur wegen Tools",
      "Nur wegen Budget"
    ],
    answer: 1,
    explanation: "Klassische PM-Lehre: Organisation/Governance ist häufig Engpass."
  },
  {
    id: "ch2-075",
    type: "transfer",
    q: "Transfer: Projektteam arbeitet 'nebenbei' in Matrix, Termine kippen. Welche Ursache ist am wahrscheinlichsten?",
    options: [
      "Zu viele Meilensteine",
      "Kapazitäts-/Prioritätskonflikte Linie vs. Projekt (Ressourcenengpass)",
      "Zu wenig Dokumente",
      "Zu viel Innovation"
    ],
    answer: 1,
    explanation: "Teilzeit-Ressourcen + Linie vs. Projekt → Prioritätskonflikte/Engpässe."
  },

  // --- 25 kurze Drill-Fragen (76-100), alle klausurrelevant, Cluster-konform
  {
    id: "ch2-076", type: "basic",
    q: "Was liefert jede Projektphase im Wasserfall typischerweise?",
    options: ["Nur Meetings", "Ein Ergebnis/Deliverable als Input für die nächste Phase", "Nur Risiken", "Nur Budget"],
    answer: 1, explanation: "Phasenübergabeprinzip: Ergebnis fließt in nächste Phase."
  },
  {
    id: "ch2-077", type: "compare",
    q: "Welche Aussage ist korrekt: Wasserfall vs. Spiral?",
    options: ["Wasserfall ist iterativ, Spiral sequenziell", "Wasserfall ist sequenziell, Spiral iterativ/risikogetrieben", "Beide sind identisch", "Spiral hat keine Planung"],
    answer: 1, explanation: "Wasserfall sequenziell; Spiral iterativ mit Risiko-Fokus."
  },
  {
    id: "ch2-078", type: "transfer",
    q: "Transfer: Du willst frühe Sichtbarkeit von Ergebnissen/Feedback. Was ist gegenüber Wasserfall der Vorteil iterativer Modelle?",
    options: ["Spätere Tests", "Frühe Rückkopplung/Prototyping reduziert Fehlentwicklungen", "Mehr Starrheit", "Weniger Lernen"],
    answer: 1, explanation: "Iterativ = früh testen/lernen → weniger Spät-Rework."
  },
  {
    id: "ch2-079", type: "basic",
    q: "Welche Aufgabe ist typisch für den Sponsor/Auftraggeber?",
    options: ["Operative Detailplanung", "Rahmen setzen: Ziele/Budget/Ressourcen + Entscheidungen bei Eskalation", "Nur QA", "Nur Protokolle"],
    answer: 1, explanation: "Sponsor stellt Rahmen und entscheidet auf Managementebene."
  },
  {
    id: "ch2-080", type: "basic",
    q: "Welche Aussage passt zum Projektoffice?",
    options: ["Entscheidet über Change Requests", "Pflegt Dokumente und erstellt Berichte/Administration", "Führt disziplinarisch", "Ist Steering"],
    answer: 1, explanation: "Projektoffice = administrative Supportfunktion."
  },
  {
    id: "ch2-081", type: "compare",
    q: "Welche Aussage ist korrekt: PMO vs. Projektleitung?",
    options: ["PMO steuert das konkrete Projekt operativ", "Projektleitung steuert operativ; PMO unterstützt/standardisiert übergreifend", "PMO ersetzt Sponsor", "Projektleitung ist nur Doku"],
    answer: 1, explanation: "PMO übergreifend; Projektleitung projektbezogen operativ."
  },
  {
    id: "ch2-082", type: "transfer",
    q: "Transfer: Es gibt Change Requests ohne Entscheidung. Welches Gremium ist dafür typisch (klassisch)?",
    options: ["Kernteam", "Change Control Board (CCB)", "Projektoffice", "Beliebige Person"],
    answer: 1, explanation: "CCB entscheidet über Änderungsanforderungen (klassische Governance)."
  },
  {
    id: "ch2-083", type: "compare",
    q: "Welche Aussage ist korrekt: Stab-Projektorga hat tendenziell…",
    options: ["hohen Selbstständigkeitsgrad", "geringen Selbstständigkeitsgrad (Einbettung in Linie)", "keine Linie", "immer volle Weisung"],
    answer: 1, explanation: "Stab = eingebettet in Linie, geringere Selbstständigkeit."
  },
  {
    id: "ch2-084", type: "transfer",
    q: "Transfer: Projekt ist auf einen Bereich fokussiert, andere Abteilungen unterstützen nur punktuell. Beste Orgaform?",
    options: ["Matrix", "Rein", "Stab", "Keine"],
    answer: 2, explanation: "Stab passt, wenn Schwerpunkt in einer Abteilung liegt, andere unterstützen."
  },
  {
    id: "ch2-085", type: "transfer",
    q: "Transfer: Projekt braucht klare personelle Weisung durch Projektleiter. Welche Orgaform liefert das?",
    options: ["Stab", "Matrix", "Rein", "Linie"],
    answer: 2, explanation: "Rein: fachlich und personell unterstellt."
  },
  {
    id: "ch2-086", type: "compare",
    q: "Welches Risiko steigt typischerweise bei Doppelunterstellung?",
    options: ["Keine Konflikte", "Konfliktpotenzial und Prioritätskonflikte", "Mehr Freizeit", "Kein Reporting"],
    answer: 1, explanation: "Doppelunterstellung = Konflikt-/Prioritätsrisiko."
  },
  {
    id: "ch2-087", type: "basic",
    q: "Welche Aussage zu Meilensteinen ist korrekt?",
    options: ["Meilensteine sind Arbeitspakete", "Meilensteine sind Ereignisse/Entscheidungspunkte", "Meilensteine ersetzen Rollen", "Meilensteine sind optional ohne Nutzen"],
    answer: 1, explanation: "Meilenstein = Ereignis besonderer Bedeutung."
  },
  {
    id: "ch2-088", type: "transfer",
    q: "Transfer: Du hast viele Schnittstellen, Gefahr von Missverständnissen. Was ist die stärkste Maßnahme im phasenorientierten Vorgehen?",
    options: ["Ohne Übergaben arbeiten", "Klare Deliverables + Abnahmekriterien + Gate-Reviews", "Dokumente löschen", "Nur telefonieren"],
    answer: 1, explanation: "Übergaberisiko wird über klare Ergebnisse/Kriterien/Reviews reduziert."
  },
  {
    id: "ch2-089", type: "compare",
    q: "Welche Aussage zur Standardisierung ist kritisch richtig?",
    options: ["Standardisierung ignoriert Kontext nie", "Zu strikte Standardisierung kann Individualität verlieren und Flexibilität reduzieren", "Standardisierung ist immer schlecht", "Standardisierung ersetzt Führung"],
    answer: 1, explanation: "Over-Standardization = Flexibilitätsverlust möglich."
  },
  {
    id: "ch2-090", type: "transfer",
    q: "Transfer: Zeitdruck hoch, Risiko hoch, strategisch wichtig. Du willst maximale Fokussierung. Welche Orgaform?",
    options: ["Stab", "Matrix", "Rein", "Linie"],
    answer: 2, explanation: "Reine Projektorganisation ist für komplex/risikoreich/zeitkritisch/strategisch geeignet."
  },
  {
    id: "ch2-091", type: "transfer",
    q: "Transfer: Du willst Spezialwissen nutzen und Mitarbeiter nicht aus der Linie herauslösen. Welche Orgaform passt?",
    options: ["Rein", "Matrix", "Stab", "Keine"],
    answer: 1, explanation: "Matrix ermöglicht Spezialwissen + flexiblen Einsatz ohne vollständige Herauslösung."
  },
  {
    id: "ch2-092", type: "basic",
    q: "Welche Aussage zur Projektleitung ist korrekt?",
    options: ["Kommunikation ist nebensächlich", "Kommunikation/Vernetzung ist ein großer Teil der Projektleitungsaufgaben", "Projektleitung macht nur Technik", "Projektleitung entscheidet Budget immer allein"],
    answer: 1, explanation: "Kommunikation/Vernetzung ist zentraler Aufgabenblock."
  },
  {
    id: "ch2-093", type: "transfer",
    q: "Transfer: Ein Projekt scheitert nicht fachlich, sondern organisatorisch. Nenne den typischen Engpass im klassischen PM.",
    options: ["Fehlende Tools", "Unklare Rollen/Entscheidungswege/Strukturen", "Zu viele Stakeholder", "Zu viele Tests"],
    answer: 1, explanation: "Organisation/Governance ist häufiger Engpass als Fachlichkeit."
  },
  {
    id: "ch2-094", type: "compare",
    q: "Welche Aussage ist korrekt: Gate-Review Inhalt?",
    options: ["Nur Smalltalk", "Prüfung von Ergebnissen + Risiken + Termin/Kosten/Leistung → Entscheidung", "Nur Design", "Nur Code"],
    answer: 1, explanation: "Gate prüft Ergebnislage und trifft Fortsetzungsentscheidung."
  },
  {
    id: "ch2-095", type: "transfer",
    q: "Transfer: In Matrix wird der Projektleiter überstimmt von Linie bei Ressourcenzuteilung. Was fehlt?",
    options: ["Mehr Slack", "Klare Priorisierungsentscheidung/Kompetenz durch Sponsor/Steering", "Mehr Meilensteine", "Weniger Stakeholder"],
    answer: 1, explanation: "Matrix benötigt übergeordnete Priorisierung und Eskalation."
  },
  {
    id: "ch2-096", type: "transfer",
    q: "Transfer: Projekt ist klein und risikoarm, aber betrifft fast alle Abteilungen (breite Beteiligung). Was ist ein realistischer Fit?",
    options: ["Stab (nur eine Abteilung)", "Matrix (bereichsübergreifend)", "Rein (zu schwergewichtig)", "Keine"],
    answer: 1, explanation: "Breit abteilungsübergreifend → Matrix typischer Fit."
  },
  {
    id: "ch2-097", type: "compare",
    q: "Welche Aussage ist korrekt: Reine Projektorganisation – Nachteil?",
    options: ["Eindeutige Weisung", "Schwierige Wiedereingliederung nach Projektende", "Hohe Motivation", "Unternehmer im Unternehmen"],
    answer: 1, explanation: "Reintegration ist klassischer Nachteil."
  },
  {
    id: "ch2-098", type: "compare",
    q: "Welche Aussage ist korrekt: Stabs-Projektorganisation – Vorteil?",
    options: ["Einfache organisatorische Umsetzung und relativ hohe Akzeptanz der Lösungen", "Immer volle Weisung", "Keine Linie", "Immer höchste Geschwindigkeit"],
    answer: 0, explanation: "Stab: einfache Umsetzung, Akzeptanz, flexible Einbettung."
  },
  {
    id: "ch2-099", type: "transfer",
    q: "Transfer: Bei hohem Zeitdruck wählst du Matrix. Welche Nebenwirkung musst du aktiv managen?",
    options: ["Keine", "Doppelunterstellung → Konflikte/Prioritäten → Entscheidungsstau", "Mehr Freizeit", "Weniger Abstimmung nötig"],
    answer: 1, explanation: "Matrix braucht aktive Governance gegen Konflikte/Entscheidungsstau."
  },
  {
    id: "ch2-100", type: "transfer",
    q: "Transfer: Du musst im Exam schnell begründen. Was ist die beste Begründungsstruktur für Orgaform-Entscheidungen?",
    options: [
      "Gefühl + Bauchentscheidung",
      "Kontext → Anforderungen (Zeitdruck/Risiko/Komplexität/Ressourcen) → passende Orgaform + typische Nebenwirkungen",
      "Nur Vorteil nennen, Nachteile ignorieren",
      "Nur das Diagramm auswendig aufsagen"
    ],
    answer: 1,
    explanation: "Klausurlogik: Kontextfaktoren → Entscheidung → Begründung inkl. Nebenwirkungen."
  }
];
