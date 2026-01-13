/* ======================================================
   Projektmanagement – Kapitel 6 (Repetitorium) – TEIL 1/?
   Lernplan:
   - Projektabschluss
   - Abschlussbericht
   - Abnahmeprotokoll
   - Lessons Learned
   Ziel: Klausur 1,0 (Definitionen + Abgrenzungen + Transferfälle)
   Fragetypen: basic | compare | transfer | calculation (hier i.d.R. 0)
   ====================================================== */

window.QUESTIONS_CH6 = [
  // =====================================================
  // A) PROJEKTABSCHLUSS – GRUNDLOGIK (basic/compare)
  // =====================================================
  {
    id: "ch6-001",
    type: "basic",
    q: "Was ist das primäre Ziel des Projektabschlusses?",
    options: [
      "Neue Anforderungen sammeln und sofort starten",
      "Ergebnisse formell übergeben, Abnahme sichern, Verantwortung überführen und Projekt sauber schließen",
      "Nur eine Abschlussfeier organisieren",
      "Projektteam ohne Dokumentation auflösen"
    ],
    answer: 1,
    explanation: "Projektabschluss = formale Schließung inkl. Abnahme, Übergabe, Dokumentation und Entlastung."
  },
  {
    id: "ch6-002",
    type: "compare",
    q: "Welche Abgrenzung ist korrekt: 'fachlich fertig' vs. 'formal abgeschlossen'?",
    options: [
      "Fachlich fertig bedeutet automatisch formal abgeschlossen",
      "Formal abgeschlossen heißt: Abnahme/Übergabe/Dokumentation/Entlastung sind erledigt – nicht nur 'fast fertig'",
      "Formal abgeschlossen ist nur ein Gefühl",
      "Fachlich fertig ist unwichtig"
    ],
    answer: 1,
    explanation: "Formalabschluss erfordert klare Entscheidung + Doku + Verantwortungswechsel."
  },
  {
    id: "ch6-003",
    type: "basic",
    q: "Welche drei Kernelemente gehören in Kapitel 6 (Lernplan)?",
    options: [
      "Kickoff, PSP, Netzplan",
      "Abschlussbericht, Abnahmeprotokoll, Lessons Learned",
      "Risikoanalyse, MoSCoW, Scrum",
      "Trendanalysen, Regelkreis, Steuerungsmaßnahmen"
    ],
    answer: 1,
    explanation: "Kapitel 6 fokussiert Abschlussbericht, Abnahmeprotokoll, Lessons Learned."
  },
  {
    id: "ch6-004",
    type: "compare",
    q: "Warum ist ein sauberer Projektabschluss aus Management-Sicht erfolgskritisch?",
    options: [
      "Damit weniger Transparenz entsteht",
      "Weil sonst Nutzen/Verantwortung unklar bleiben und Risiken (Betrieb, Nachforderungen, Haftung/Scope-Creep) steigen",
      "Weil Abschluss nur Formalität ist",
      "Weil dadurch automatisch Budget sinkt"
    ],
    answer: 1,
    explanation: "Ohne Abschluss: kein klarer Verantwortungswechsel, kein belastbarer Nachweis, erhöhte Konflikte."
  },
  {
    id: "ch6-005",
    type: "transfer",
    q: "Transfer: Projekt ist 'fertig', aber es gibt keine formale Übergabe an Betrieb/Linie. Was ist das größte Risiko?",
    options: [
      "Keins – Betrieb regelt das schon",
      "Niemand ist verantwortlich (Support/Weiterentwicklung), Nutzen kippt, offene Punkte werden Schattenprojekt",
      "Projekt wird automatisch günstiger",
      "Team wird schneller"
    ],
    answer: 1,
    explanation: "Übergabe ist Teil des Abschlusses. Ohne Ownership droht Stillstand und Chaos nach Go-Live."
  },

  // =====================================================
  // B) ABNAHMEPROTOKOLL – KERN (basic/compare/transfer)
  // =====================================================
  {
    id: "ch6-006",
    type: "basic",
    q: "Wozu dient ein Abnahmeprotokoll im Projektabschluss?",
    options: [
      "Als Marketingunterlage",
      "Als formaler Nachweis der Prüfung und Entscheidung (angenommen/unter Vorbehalt/abgelehnt) inkl. Mängeln/Fristen",
      "Als Ersatz für den Projektplan",
      "Nur als Notizzettel fürs Team"
    ],
    answer: 1,
    explanation: "Abnahmeprotokoll dokumentiert Entscheidung, Mängel, Verantwortliche, Fristen und Unterschriften."
  },
  {
    id: "ch6-007",
    type: "basic",
    q: "Welche Mindestinhalte gehören typischerweise in ein Abnahmeprotokoll?",
    options: [
      "Teamfotos und Logo",
      "Liefergegenstände, Kriterien, Ergebnis, Mängelliste, Fristen/Owner, Unterschriften",
      "Nur Budgetzahlen",
      "Nur Stakeholderliste"
    ],
    answer: 1,
    explanation: "Klausursicher: Kriterien + Entscheidung + Mängel + Verbindlichkeit (Owner/Frist) + Unterschrift."
  },
  {
    id: "ch6-008",
    type: "compare",
    q: "Warum sind klare Abnahmekriterien so wichtig?",
    options: [
      "Damit man schneller ohne Prüfung abnimmt",
      "Damit 'fertig' objektiv prüfbar ist und Interpretationsspielräume/Konflikte reduziert werden",
      "Damit keine Dokumente entstehen",
      "Damit man keine Tests braucht"
    ],
    answer: 1,
    explanation: "Ohne Kriterien entsteht Streit über Scope/Qualität und Nachforderungen werden wahrscheinlicher."
  },
  {
    id: "ch6-009",
    type: "transfer",
    q: "Transfer: Kunde will 'unter Vorbehalt' abnehmen (kleinere Mängel). Was ist die sauberste Lösung?",
    options: [
      "Mängel ignorieren",
      "Abnahme unter Vorbehalt mit Mängelliste, Priorität, Owner und fixen Fristen dokumentieren (ggf. Nachabnahme)",
      "Abnahme grundsätzlich verweigern",
      "Nur mündlich zusagen"
    ],
    answer: 1,
    explanation: "Unter Vorbehalt ist nur sauber, wenn Mängel verbindlich gemanagt werden (Owner/Frist/Kriterien)."
  },
  {
    id: "ch6-010",
    type: "transfer",
    q: "Transfer: Sponsor unterschreibt nicht, obwohl fachlich alles okay ist. Was ist die korrekte Projektmanagement-Aussage?",
    options: [
      "Unterschrift ist egal",
      "Ohne formale Abnahme kein sauberer Abschluss: Risiko für Verantwortung, Abrechnung, Nachforderungen und Betrieb",
      "Dann ist Lessons Learned wichtiger",
      "Dann ist das Projekt automatisch abgeschlossen"
    ],
    answer: 1,
    explanation: "Formalabschluss braucht Abnahme/Entscheidung. Ohne diese bleibt das Projekt im Schwebezustand."
  },
  {
    id: "ch6-011",
    type: "transfer",
    q: "Transfer: Abnahme wird abgelehnt. Was ist der richtige nächste Schritt?",
    options: [
      "Projekt sofort schließen",
      "Mängel/Ursachen dokumentieren, Nachbesserungsplan (Scope/Owner/Fristen) und erneute Abnahme organisieren",
      "Nur eskalieren ohne Fakten",
      "Alles ignorieren"
    ],
    answer: 1,
    explanation: "Ablehnung = klare Mängellage + Plan + erneuter Prüftermin."
  },

  // =====================================================
  // C) ABSCHLUSSBERICHT – KERN (basic/compare/transfer)
  // =====================================================
  {
    id: "ch6-012",
    type: "basic",
    q: "Was ist der Zweck eines Abschlussberichts?",
    options: [
      "Nur eine Story fürs Intranet",
      "Nachweis und Zusammenfassung: Ziele/Scope, Ergebnisse, Soll/Ist (Zeit/Kosten/Aufwand), Abweichungen/Ursachen, offene Punkte, Übergabe",
      "Projektplan ersetzen",
      "Nur Team loben"
    ],
    answer: 1,
    explanation: "Abschlussbericht = Management-Nachweis + Wissensbasis für Folgeprojekte."
  },
  {
    id: "ch6-013",
    type: "compare",
    q: "Welche Inhalte sind klausurtypisch Pflicht im Abschlussbericht?",
    options: [
      "Nur Lessons Learned",
      "Ziele/Scope, Deliverables, Soll/Ist, Abweichungen+Ursachen, Risiken/Entscheidungen, offene Punkte, Abnahme/Übergabe",
      "Nur Organigramm",
      "Nur Marketing-Text"
    ],
    answer: 1,
    explanation: "Klausur: Vollständigkeit + Prüfbarkeit + Transparenz."
  },
  {
    id: "ch6-014",
    type: "transfer",
    q: "Transfer: Ergebnisziel erreicht, aber Zeit/Kosten wurden deutlich überschritten. Wie musst du das im Abschlussbericht darstellen?",
    options: [
      "Gar nicht – Ergebnis zählt",
      "Transparent: Zielerreichung ja, aber Abweichungen inkl. Ursachen, Entscheidungen, Auswirkungen und Empfehlung",
      "Nur Schuldige benennen",
      "Nur 'war schwierig' schreiben"
    ],
    answer: 1,
    explanation: "1,0-Antwort: Ergebnis + Abweichung + Ursache + Entscheidung + Empfehlung."
  }

  // >>> ENDE TEIL 1/?
  // Wir lassen das Array bewusst offen.
  // Nächster Schritt: TEIL 2 (Lessons Learned + mehr Transferfälle + Trickfragen).

     // =====================================================
  // D) LESSONS LEARNED – KERN (basic/compare/transfer)
  // =====================================================
  {
    id: "ch6-015",
    type: "basic",
    q: "Was ist das primäre Ziel eines Lessons-Learned-Prozesses?",
    options: [
      "Schuldige finden",
      "Erkenntnisse sichern und in Standards/Prozesse für zukünftige Projekte überführen",
      "Abnahme ersetzen",
      "Budget erhöhen"
    ],
    answer: 1,
    explanation: "Lessons Learned = organisationales Lernen (Do/Don't, Standards, Checklisten, Templates)."
  },
  {
    id: "ch6-016",
    type: "compare",
    q: "Welche Abgrenzung ist korrekt: Lessons Learned vs. Abschlussbericht?",
    options: [
      "Lessons Learned = Faktenbericht, Abschlussbericht = nur Gefühle",
      "Abschlussbericht dokumentiert Fakten/Ergebnisse; Lessons Learned fokussiert Verbesserungen (Ursache→Wirkung→Maßnahme)",
      "Lessons Learned ersetzt Abnahmeprotokoll",
      "Lessons Learned ist nur für agile Projekte"
    ],
    answer: 1,
    explanation: "LL = Verbesserung/Verbesserungsmaßnahmen; Abschlussbericht = Nachweis/Faktenlage."
  },
  {
    id: "ch6-017",
    type: "transfer",
    q: "Transfer: Ein Lessons-Learned-Workshop endet mit „war alles gut“. Warum ist das klausurtypisch schlecht?",
    options: [
      "Weil Positivität verboten ist",
      "Weil keine konkreten Ursachen/Verbesserungen dokumentiert sind – der Lerneffekt verpufft",
      "Weil dadurch der Abschlussbericht länger wird",
      "Weil man dann mehr Budget bekommt"
    ],
    answer: 1,
    explanation: "1,0-Logik: LL muss konkret sein (Beobachtung→Ursache→Wirkung→Maßnahme→Owner)."
  },
  {
    id: "ch6-018",
    type: "basic",
    q: "Welche Struktur macht Lessons Learned klausursicher verwertbar?",
    options: [
      "Nur Stichworte",
      "Beobachtung → Ursache → Wirkung → Maßnahme/Empfehlung → Owner/Termin → Transfer in Standard",
      "Nur Lob",
      "Nur neue Tools"
    ],
    answer: 1,
    explanation: "Mit Owner/Termin + Transfer in Standard wird LL wirksam und prüfbar."
  },
  {
    id: "ch6-019",
    type: "transfer",
    q: "Transfer: Was ist die größte Nebenwirkung, wenn LL zwar erstellt, aber nicht umgesetzt wird?",
    options: [
      "Mehr Transparenz",
      "Gleiche Fehler wiederholen sich, weil keine Standards/Checklisten angepasst werden",
      "Projekt wird schneller",
      "Budget sinkt"
    ],
    answer: 1,
    explanation: "LL ohne Transfer/Owner ist Deko und bringt keinen Reifegrad."
  },

  // =====================================================
  // E) TRANSFER-FÄLLE: ABNAHME + ABSCHLUSSBERICHT + LL (transfer heavy)
  // =====================================================
  {
    id: "ch6-020",
    type: "transfer",
    q: "Transfer: Es gibt offene Restarbeiten. Was ist die sauberste Abschlusslogik?",
    options: [
      "Restarbeiten verschweigen",
      "Offene Punkte als Restliste (Priorität/Owner/Frist) dokumentieren, Abnahme ggf. unter Vorbehalt, Übergabe regeln",
      "Projekt einfach beenden",
      "Nur mündlich zusagen"
    ],
    answer: 1,
    explanation: "Klausur: Restliste + Verbindlichkeit + Übergabe verhindert Schattenprojekt."
  },
  {
    id: "ch6-021",
    type: "transfer",
    q: "Transfer: Abnahme ist erfolgt, aber Betrieb kann die Lösung nicht nutzen (fehlende Doku/Training). Was ist das?",
    options: [
      "Kein Problem",
      "Übergaberisiko: Projektabschluss unvollständig (Enablement/Doku/Support-Setup fehlt)",
      "Nur ein Budgetproblem",
      "Nur ein Stakeholderproblem"
    ],
    answer: 1,
    explanation: "Abnahme allein reicht nicht. Nutzbarkeit/Übergabe ist eigener Erfolgsfaktor."
  },
  {
    id: "ch6-022",
    type: "transfer",
    q: "Transfer: Nach Abnahme fordert ein Stakeholder „kleine Änderungen“. Was ist klausurtypisch korrekt?",
    options: [
      "Einfach umsetzen ohne Doku",
      "Als Change/Follow-up behandeln: bewerten, priorisieren, ggf. neues Mini-Projekt/Backlog im Betrieb",
      "Ablehnen ohne Begründung",
      "Nur mündlich zusagen"
    ],
    answer: 1,
    explanation: "Nach Abnahme ist das Change-Governance, sonst Scope-Creep."
  },
  {
    id: "ch6-023",
    type: "transfer",
    q: "Transfer: Du willst verhindern, dass nach Projektende neuer Scope „durch die Hintertür“ entsteht. Was hilft am meisten?",
    options: [
      "Kein Abschlussbericht",
      "Sauberer Abschlussbericht + dokumentierte offene Punkte + definierte Change-Regel für Nachprojektphase",
      "Nur ein LL-Workshop",
      "Nur ein neues Tool"
    ],
    answer: 1,
    explanation: "Dokumentation + Governance schützt vor Schatten-Scope."
  },
  {
    id: "ch6-024",
    type: "transfer",
    q: "Transfer: Sponsor möchte trotz kritischem Mangel abnehmen, um Termin zu halten. Was ist die saubere PM-Antwort?",
    options: [
      "Sofort abnehmen und Mangel ignorieren",
      "Abnahmeentscheidung an Kriterien koppeln: ablehnen oder unter Vorbehalt mit Mängelplan/Owner/Frist und Risiko-Transparenz",
      "Nur Team informieren",
      "Nur Abschlussbericht schreiben"
    ],
    answer: 1,
    explanation: "1,0-Antwort: Kriterien + Risiko + Verbindlichkeit. Sonst Rework/Haftung/Qualitätsdebakel."
  },

  // =====================================================
  // F) TRICK- & FALLENFRAGEN (compare/transfer)
  // =====================================================
  {
    id: "ch6-025",
    type: "compare",
    q: "Welche Aussage ist am ehesten falsch?",
    options: [
      "Abnahmeprotokoll dokumentiert Mängel und Nacharbeiten",
      "Abschlussbericht enthält Soll/Ist und Abweichungen",
      "Lessons Learned ersetzt die Abnahme, wenn das Team zufrieden ist",
      "Projektabschluss regelt Übergabe und Verantwortungswechsel"
    ],
    answer: 2,
    explanation: "LL ersetzt nie die Abnahme. Abnahme ist formale Akzeptanz/Übergang."
  },
  {
    id: "ch6-026",
    type: "transfer",
    q: "Transfer: Ein Abschlussbericht ohne Abweichungsursachen ist aus PM-Sicht schwach, weil…",
    options: [
      "…er zu kurz ist",
      "…kein Lernen/keine Entscheidungsqualität möglich ist (warum lief es so?)",
      "…er keine Bilder enthält",
      "…er nur intern gelesen wird"
    ],
    answer: 1,
    explanation: "Ohne Ursachen keine Steuerungs-/Lernlogik → verschenkte Reifegradchance."
  },
  {
    id: "ch6-027",
    type: "compare",
    q: "Welche Aussage ist korrekt zum Zeitpunkt von Lessons Learned?",
    options: [
      "Nur am Projektende, egal wie spät",
      "Möglichst zeitnah zum Abschluss, solange Wissen/Details noch präsent sind (sonst Verlust)",
      "Am besten vor Projektstart",
      "Nur nach 12 Monaten"
    ],
    answer: 1,
    explanation: "Zu spät = Wissensverlust, geringere Qualität der Erkenntnisse."
  }

  // >>> ENDE TEIL 2/?
  // Nächster Schritt: TEIL 3 (Dokumenten-/Transfer-Drill: extrem kurze, harte Klausur-Items + Abschluss auf 40–60 Fragen).

  // =====================================================
  // G) DOKUMENTEN- & BEGRIFFS-DRILL (klausurhart, kurz, präzise)
  // Ziel: sichere 1,0-Punkte durch saubere Zuordnung
  // =====================================================
  {
    id: "ch6-028",
    type: "basic",
    q: "Welches Dokument bestätigt formal die Übernahme der Projektergebnisse?",
    options: [
      "Projektauftrag",
      "Abnahmeprotokoll",
      "Lessons-Learned-Protokoll",
      "Projektplan"
    ],
    answer: 1,
    explanation: "Formale Übernahme/Accept = Abnahmeprotokoll."
  },
  {
    id: "ch6-029",
    type: "basic",
    q: "Welches Dokument fasst den gesamten Projektverlauf inkl. Soll-Ist zusammen?",
    options: [
      "Abnahmeprotokoll",
      "Abschlussbericht",
      "Risikoregister",
      "Stakeholderanalyse"
    ],
    answer: 1,
    explanation: "Der Abschlussbericht ist das Gesamt- und Nachweisdokument."
  },
  {
    id: "ch6-030",
    type: "compare",
    q: "Welche Zuordnung ist korrekt?",
    options: [
      "Abnahmeprotokoll → Lernen | Lessons Learned → Übernahme",
      "Abschlussbericht → Fakten & Ergebnis | Lessons Learned → Verbesserung",
      "Lessons Learned → Vertrag | Abnahme → Erfahrung",
      "Abnahme → Motivation | Abschlussbericht → Stimmung"
    ],
    answer: 1,
    explanation: "Saubere Trennung: Fakten vs. Lernen."
  },
  {
    id: "ch6-031",
    type: "compare",
    q: "Welches Dokument ist primär entscheidungs- und haftungsrelevant?",
    options: [
      "Lessons Learned",
      "Abnahmeprotokoll",
      "Teamfeedback",
      "Meilensteinplan"
    ],
    answer: 1,
    explanation: "Abnahme hat rechtliche/organisatorische Wirkung."
  },
  {
    id: "ch6-032",
    type: "compare",
    q: "Welche Reihenfolge ist aus PM-Sicht logisch korrekt?",
    options: [
      "Lessons Learned → Abnahme → Abschlussbericht",
      "Abnahme → Abschlussbericht → Lessons Learned",
      "Abschlussbericht → Abnahme → Lessons Learned",
      "Reihenfolge egal"
    ],
    answer: 1,
    explanation: "Erst formale Übergabe, dann Dokumentation, dann Lernen."
  },

  // =====================================================
  // H) EXTREM TYPISCHE KLAUSUR-TRANSFERFRAGEN (kurz, präzise)
  // =====================================================
  {
    id: "ch6-033",
    type: "transfer",
    q: "Transfer: Projekt fachlich fertig, aber keine Abnahme. Wie bewertest du das?",
    options: [
      "Projekt abgeschlossen",
      "Projekt nicht abgeschlossen (formaler Abschluss fehlt)",
      "Nur Dokumentationsproblem",
      "Kein PM-Thema"
    ],
    answer: 1,
    explanation: "Ohne Abnahme kein formaler Projektabschluss."
  },
  {
    id: "ch6-034",
    type: "transfer",
    q: "Transfer: Kunde nutzt Ergebnis produktiv, weigert sich aber zu unterschreiben. PM-Bewertung?",
    options: [
      "Abnahme gilt automatisch",
      "Nutzung ≠ formale Abnahme → Risiko bleibt",
      "Projekt gilt als beendet",
      "Nur ein Kommunikationsproblem"
    ],
    answer: 1,
    explanation: "Nutzung ersetzt keine formale Abnahme."
  },
  {
    id: "ch6-035",
    type: "transfer",
    q: "Transfer: Lessons Learned werden dokumentiert, aber nie gelesen. PM-Reifegrad?",
    options: [
      "Hoch",
      "Niedrig, da kein organisationales Lernen",
      "Sehr hoch",
      "Irrelevant"
    ],
    answer: 1,
    explanation: "Ohne Nutzung kein Lernprozess."
  },
  {
    id: "ch6-036",
    type: "transfer",
    q: "Transfer: Abschlussbericht fehlt, Projekt ist aber abgenommen. Was fehlt?",
    options: [
      "Nichts",
      "Transparenz, Nachweis und Lernbasis für Organisation",
      "Abnahme",
      "Projektauftrag"
    ],
    answer: 1,
    explanation: "Abnahme ≠ Dokumentation ≠ Lernen."
  },
  {
    id: "ch6-037",
    type: "transfer",
    q: "Transfer: Warum ist ein Abschluss ohne Lessons Learned aus PM-Sicht schwach?",
    options: [
      "Weil Budget fehlt",
      "Weil Verbesserungen und Standards nicht weiterentwickelt werden",
      "Weil Team unzufrieden ist",
      "Weil Abnahme fehlt"
    ],
    answer: 1,
    explanation: "LL ist der Hebel für langfristige Qualität."
  }

  // >>> ENDE TEIL 3/?
  // Nächster Schritt: TEIL 4 = Prüfungsfallen, Ja/Nein-Aussagen & Mini-Cases (für sichere 1,0).

  // =====================================================
  // I) PRÜFUNGSFALLEN & JA/NEIN-LOGIK (FOM-typisch)
  // Ziel: typische Fehlannahmen eliminieren
  // =====================================================
  {
    id: "ch6-038",
    type: "compare",
    q: "Welche Aussage zum Projektabschluss ist falsch?",
    options: [
      "Ein Projekt kann fachlich abgeschlossen sein, ohne formal abgeschlossen zu sein",
      "Ohne Abnahme ist ein Projekt formal nicht beendet",
      "Lessons Learned ersetzen den Abschlussbericht",
      "Abschlussdokumente sichern Transparenz und Nachvollziehbarkeit"
    ],
    answer: 2,
    explanation: "LL ersetzen weder Abschlussbericht noch Abnahme."
  },
  {
    id: "ch6-039",
    type: "compare",
    q: "Welche Aussage zur Abnahme ist NICHT korrekt?",
    options: [
      "Abnahme kann unter Vorbehalt erfolgen",
      "Abnahme ist ein formaler Entscheidungsakt",
      "Abnahme dient primär dem Lernen für Folgeprojekte",
      "Abnahme kann rechtliche/organisatorische Wirkung haben"
    ],
    answer: 2,
    explanation: "Lernen ist Aufgabe der Lessons Learned, nicht der Abnahme."
  },
  {
    id: "ch6-040",
    type: "compare",
    q: "Welche Aussage zum Abschlussbericht ist falsch?",
    options: [
      "Er dokumentiert Zielerreichung und Abweichungen",
      "Er ist Grundlage für zukünftige Projekte",
      "Er ersetzt die formale Abnahme",
      "Er enthält Soll-Ist-Vergleiche"
    ],
    answer: 2,
    explanation: "Der Abschlussbericht ersetzt niemals die Abnahme."
  },
  {
    id: "ch6-041",
    type: "compare",
    q: "Welche Aussage zu Lessons Learned ist korrekt?",
    options: [
      "Sie dienen der Schuldzuweisung",
      "Sie sind nur für agile Projekte relevant",
      "Sie müssen in Standards/Prozesse überführt werden",
      "Sie ersetzen das Abnahmeprotokoll"
    ],
    answer: 2,
    explanation: "LL entfalten Nutzen erst durch Transfer in Organisation/Standards."
  },

  // =====================================================
  // J) MINI-CASES (1–2 SÄTZE, KLAUSURFORMAT)
  // =====================================================
  {
    id: "ch6-042",
    type: "transfer",
    q: "Mini-Case: Projekt endet, Budget ist aufgebraucht. Abnahme fehlt. Wie bewerten?",
    options: [
      "Projekt ist beendet, da kein Geld mehr da ist",
      "Projekt ist nicht formal abgeschlossen",
      "Projekt gilt als abgenommen",
      "Projekt ist automatisch gescheitert"
    ],
    answer: 1,
    explanation: "Budgetende ersetzt keine formale Abnahme."
  },
  {
    id: "ch6-043",
    type: "transfer",
    q: "Mini-Case: Ergebnisse übergeben, Betrieb startet, aber keine Dokumentation. PM-Bewertung?",
    options: [
      "Sauberer Abschluss",
      "Teilabschluss mit Übergaberisiko",
      "Kein Projektabschlussproblem",
      "Nur Kommunikationsfehler"
    ],
    answer: 1,
    explanation: "Fehlende Doku = unvollständige Übergabe."
  },
  {
    id: "ch6-044",
    type: "transfer",
    q: "Mini-Case: LL-Workshop findet statt, Ergebnisse werden nicht gespeichert. Folge?",
    options: [
      "Kein Problem",
      "Kein nachhaltiger Lerneffekt",
      "Bessere Teamstimmung",
      "Automatische Prozessverbesserung"
    ],
    answer: 1,
    explanation: "Ohne Dokumentation kein organisationales Lernen."
  },
  {
    id: "ch6-045",
    type: "transfer",
    q: "Mini-Case: Kunde unterschreibt Abnahme trotz bekannter Mängel ohne Protokoll. Risiko?",
    options: [
      "Keines",
      "Unklare Restarbeiten und Streitpotenzial",
      "Bessere Qualität",
      "Automatische Nachbesserung"
    ],
    answer: 1,
    explanation: "Mängel müssen dokumentiert werden, sonst Konflikte."
  },

  // =====================================================
  // K) ABSCHLUSS-CHECK (KLAUSUR-1,0-MERKSÄTZE)
  // =====================================================
  {
    id: "ch6-046",
    type: "basic",
    q: "Welche Kombination beschreibt einen vollständigen Projektabschluss korrekt?",
    options: [
      "Abnahme + Abschlussbericht + Lessons Learned",
      "Abschlussbericht + Kickoff",
      "Lessons Learned + Projektauftrag",
      "Abnahme + Risikoanalyse"
    ],
    answer: 0,
    explanation: "Alle drei Bausteine sind erforderlich."
  },
  {
    id: "ch6-047",
    type: "basic",
    q: "Welcher Punkt wird in Klausuren beim Projektabschluss am häufigsten vergessen?",
    options: [
      "Abschlussfeier",
      "Formale Abnahme",
      "Projektstart",
      "Teamgröße"
    ],
    answer: 1,
    explanation: "Ohne Abnahme kein formaler Abschluss."
  },
  {
    id: "ch6-048",
    type: "basic",
    q: "Was macht den Unterschied zwischen gutem und sehr gutem Projektabschluss?",
    options: [
      "Mehr Dokumente",
      "Saubere Abnahme + transparente Abweichungen + überführte Lessons Learned",
      "Lange Laufzeit",
      "Großes Team"
    ],
    answer: 1,
    explanation: "1,0 = Formal sauber + Lerntransfer."
  }

  // >>> ENDE TEIL 4/?
  // Nächster Teil (TEIL 5): Ultra-harte Prüfungsfallen & Entscheidungsfragen („Was ist am sinnvollsten?“)

  // =====================================================
  // L) ULTRA-PRÜFUNGSFALLEN & ENTSCHEIDUNGSFRAGEN
  // Fokus: „Was ist am sinnvollsten?“ (Top-Down-Logik, FOM-Style)
  // =====================================================
  {
    id: "ch6-049",
    type: "transfer",
    q: "Ein Projekt ist fachlich fertig, Abnahme steht an. Der Sponsor drängt auf schnellen Abschluss ohne Dokumentation. Was ist am sinnvollsten?",
    options: [
      "Abnahme sofort durchführen, Dokumentation später",
      "Abnahme verschieben, bis Abnahmekriterien und Protokoll vorliegen",
      "Projekt schließen und Dokumentation weglassen",
      "Lessons Learned vorziehen"
    ],
    answer: 1,
    explanation: "Ohne klare Kriterien/Protokoll ist Abnahme fachlich und formal angreifbar."
  },
  {
    id: "ch6-050",
    type: "transfer",
    q: "Nach Projektende fordert ein Stakeholder neue Funktionen. Was ist die professionellste Reaktion?",
    options: [
      "Funktionen direkt umsetzen",
      "Auf Abschlussbericht, Abnahme und Change-Regel der Betriebsphase verweisen",
      "Projekt wieder öffnen",
      "Anforderung ignorieren"
    ],
    answer: 1,
    explanation: "Nach Projektabschluss greifen Betriebs-/Change-Regeln, kein stiller Scope-Shift."
  },
  {
    id: "ch6-051",
    type: "transfer",
    q: "Lessons Learned zeigen massive Planungsfehler. Wie gehst du als Projektleitung am sinnvollsten damit um?",
    options: [
      "Fehler relativieren, um Konflikte zu vermeiden",
      "Erkenntnisse dokumentieren und in Standards/Schätzlogiken überführen",
      "Nur intern behalten",
      "LL nicht veröffentlichen"
    ],
    answer: 1,
    explanation: "Reifegrad entsteht durch konsequenten Transfer in Organisation/Standards."
  },
  {
    id: "ch6-052",
    type: "compare",
    q: "Welche Aussage ist im Klausurkontext AM EHDESTEN richtig?",
    options: [
      "Abnahme ist optional, wenn Ergebnis gut ist",
      "Projektabschluss ohne Lessons Learned ist vollständig",
      "Projektabschluss ohne formale Abnahme ist unvollständig",
      "Abschlussbericht ist nur für große Projekte relevant"
    ],
    answer: 2,
    explanation: "Formale Abnahme ist zwingender Bestandteil des Projektabschlusses."
  },
  {
    id: "ch6-053",
    type: "transfer",
    q: "Ein Projekt endet, aber es gibt keine klare Übergabe an den Betrieb. Welche Nebenwirkung ist am wahrscheinlichsten?",
    options: [
      "Bessere Flexibilität",
      "Unklare Verantwortlichkeiten und operative Störungen",
      "Höhere Qualität",
      "Schnellere Weiterentwicklung"
    ],
    answer: 1,
    explanation: "Fehlende Übergabe erzeugt Chaos in Betrieb/Support."
  },

  // =====================================================
  // M) KLAUSUR-VERDICHTUNG (MERKSATZ-FORMAT)
  // =====================================================
  {
    id: "ch6-054",
    type: "basic",
    q: "Welcher Merksatz ist klausursicher richtig?",
    options: [
      "Abnahme ersetzt Lessons Learned",
      "Ohne Abnahme kein formaler Projektabschluss",
      "Abschlussbericht ist optional",
      "Lessons Learned sind nur Dokumentation"
    ],
    answer: 1,
    explanation: "Das ist ein klassischer 1,0-Merksatz."
  },
  {
    id: "ch6-055",
    type: "basic",
    q: "Was prüft die FOM im Projektabschluss besonders gerne?",
    options: [
      "Tools",
      "Abgrenzung: fachlich fertig vs. formal abgeschlossen",
      "Teamgröße",
      "Projektlaufzeit"
    ],
    answer: 1,
    explanation: "Saubere Begriffsabgrenzung bringt sichere Punkte."
  },
  {
    id: "ch6-056",
    type: "basic",
    q: "Was ist der größte Mehrwert von Lessons Learned?",
    options: [
      "Teamzufriedenheit",
      "Organisationales Lernen und Vermeidung gleicher Fehler",
      "Kürzere Projekte",
      "Mehr Meetings"
    ],
    answer: 1,
    explanation: "LL sind ein Reifegrad-Hebel, kein Selbstzweck."
  },
  {
    id: "ch6-057",
    type: "compare",
    q: "Welche Aussage ist falsch?",
    options: [
      "Abnahme kann rechtliche Wirkung haben",
      "Abschlussbericht dokumentiert Abweichungen",
      "Lessons Learned ersetzen Abnahme",
      "Projektabschluss umfasst Übergabe"
    ],
    answer: 2,
    explanation: "LL ersetzen keine formalen Abschlussartefakte."
  },

  // =====================================================
  // N) FINALER PRÜFUNGSBLOCK (SELEKTIV, HART)
  // =====================================================
  {
    id: "ch6-058",
    type: "transfer",
    q: "Letzter Prüfungsfall: Was zeigt am deutlichsten einen professionellen Projektabschluss?",
    options: [
      "Schneller Abbruch ohne Dokumentation",
      "Formale Abnahme, transparenter Abschlussbericht, überführte Lessons Learned",
      "Nur Lessons Learned",
      "Nur Abnahme"
    ],
    answer: 1,
    explanation: "Das ist die vollständige, klausursichere Lösung."
  }

  // =====================================================
  // >>> ENDE QUESTIONS_CH6
  // Kapitel 6 ist jetzt prüfungsreif (Definition + Abgrenzung + Transfer)
  // =====================================================
];
