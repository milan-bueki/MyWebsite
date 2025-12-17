import React, { useState } from "react";
import "./DiaryPage.css";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';


const DiaryPage = () => {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const [password2, setPassword2] = useState("");
  const [unlocked2, setUnlocked2] = useState(false);

  const [password3, setPassword3] = useState("");
  const [unlocked3, setUnlocked3] = useState(false);

  const [password4, setPassword4] = useState("");
  const [unlocked4, setUnlocked4] = useState(false);

  //  Hartcodiertes Passwort
  const correctPassword = "Planck";
  const correctPassword2 = "Enigma";
  const correctPassword3 = "Zweiundvierzig";
  const correctPassword4 = "Konzert";

  const handleUnlock = () => {
    if (password.trim().toUpperCase() === correctPassword.toUpperCase()) {
      setUnlocked(true);
    } else {
      alert("Falsches Passwort. Versuche es erneut.");
    }
  };

  const handleUnlock2 = () => {
    if (password2.trim().toUpperCase() === correctPassword2.toUpperCase()) {
      setUnlocked2(true);
    } else {
      alert("Falsches Passwort. Versuche es erneut.");
    }
  };

  const handleUnlock3 = () => {
    if (password3.trim().toUpperCase() === correctPassword3.toUpperCase()) {
      setUnlocked3(true);
    } else {
      alert("Falsches Passwort. Versuche es erneut.");
    }
  };

    const handleUnlock4 = () => {
    if (password4.trim().toUpperCase() === correctPassword4.toUpperCase()) {
      setUnlocked4(true);
    } else {
      alert("Falsches Passwort. Versuche es erneut.");
    }
  };

  return (
    <main className="diary-wrapper">
      <section className="diary-page">
        <header className="diary-header">
          <div className="diary-date">12. November 1942</div>
          <h1 className="diary-title">Dietrichs Tagebuch</h1>
          <div className="diary-subtitle">
            Ein Eintrag, den wohl nur Eingeweihte verstehen werden.
          </div>
        </header>

        <div className="diary-content">
          <p>
            Heute habe ich wieder lange an meinen kleinen Geheimnissen
            gearbeitet. Draußen scheint die Welt aus den Fugen geraten zu sein,
            aber hier, zwischen diesen vergilbten Seiten, gelten nur Logik und
            Ordnung. Wenn jemand diesen Eintrag eines Tages liest, soll er oder
            sie erst beweisen müssen, dass genug Verstand und Geduld vorhanden
            sind.
          </p>
          <p>
            Ich selbst konnte dieses Rätsel, und damit auch die folgenden,
            leider nie lösen, daher hoffe ich, dass es irgendwann jemandem
            gelingt. Das folgende ist das Einzige, was ich weiß:
          </p>

          <hr className="diary-divider" />

          {/* Rätsel 1 */}
          <div className="diary-riddle">
            <p className="diary-riddle-hint">
              „Manchmal genügt eine einfache Rotation um x&nbsp;Stellen im
              diskreten Raum der Zeichen. Doch bevor du diese erkennst, musst
              du zunächst die quantisierte Codierung entziffern. Selbst die
              Römer wären erstaunt.“
            </p>

            <pre className="diary-riddle-table">
{`01001 10111 10110 01001 00111 01111 00011 00101 01010 10110
01000 10111 00111 10100 00110 00011 10101 10000 00011 00111
00101 01010 10101 10110 00111 10100 00011 00111 10110 10101
00111 01110 00100 10100 00011 10111 00101 01010 10101 10110
00110 10111 00111 01011 10000 10101 00101 01010 01110 10111
00111 10101 10101 00111 01110 11001 10001 10100 10110 00111
10101 01110 00011 10111 10110 00111 10110 10010 01110 00011
10000 00101 01101
`}
            </pre>

            <p>
              Was ich noch weiß: Es gibt insgesamt fünf Rätsel, um an das
              Geheimnis zu gelangen. Nach jedem Rätsel wird das Lösungswort
              abgefragt, um das nächste Rätsel zu erhalten.
            </p>
          </div>

          {/* Passwortschutz zu Rätsel 2 */}
          {!unlocked && (
            <div className="password-section">
              <h2 className="password-title">🔐 Zugang geschützt</h2>
              <p>
                Gib das Lösungswort des ersten Rätsels ein, um den nächsten
                Hinweis zu erhalten.
              </p>

              <input
                className="password-input"
                type="text"
                placeholder="Lösungswort eingeben…"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="password-button" onClick={handleUnlock}>
                Weiter
              </button>
            </div>
          )}

          {/* Rätsel 2 */}
          {unlocked && (
            <>
              <div className="password-section">
                <h2 className="password-title">🔓 Gut gemacht!</h2>
                <p>
                  Du hast das erste Rätsel erfolgreich gelöst. Doch dies war nur der
                  Anfang – die folgenden Aufgaben werden komplexer.
                </p>
              </div>

              <div className="diary-riddle" style={{ marginTop: "24px" }}>
                <h2 className="diary-title" style={{ fontSize: "1.5rem" }}>
                  Zweites Rätsel
                </h2>

                <p>
                  In der klassischen Informationstheorie benutzt man oft nur eine feste
                  Zuordnung zwischen Symbolen und Zuständen. In der Quantenphysik dagegen
                  ist ein Basiswechsel etwas völlig Natürliches: derselbe Zustand kann in
                  verschiedenen Basen sehr unterschiedliche Koordinaten haben.
                </p>

                <p>
                  Auch hier genügt eine einzige Größe, die du bereits im ersten Rätsel
                  gefunden hast, um einen ganzen Raum von möglichen Transformationen zu
                  beschreiben. Führe damit eine geeignete Folge von Basiswechseln im
                  Alphabet durch, um die folgende Nachricht zu entschlüsseln.
                </p>

                <p>
                  <em>Verschlüsselte Nachricht:</em>
                </p>

                <pre className="diary-riddle-table">
{`VFTTGWPNHGFEWLSGFOCKWRKDTYSPJBXETOGCILNQ
GXSFWRKCHENHPGXPMNPNXPBNUSHTMNNZWLBRVWTS
RSCMWHEPJCTWTQKOCLEPJCIPPEWOUFNTKCIVEVPO
GPIAGPDCMRNWTSRFQXSPRAGSCPEYGUICOZGMWLNV
UMWPMNUMWTNRCEHHAYBOCFNQNSRSTRTXXSRACWTT
SGFKHRRVGMWTSPJOLZRGHETCRNGDHPL`}
                </pre>
              </div>
            </>
          )}

          {/* Passwortabfrage für Rätsel 3 */}
          {unlocked && !unlocked2 && (
            <div className="password-section" style={{ marginTop: "24px" }}>
              <h2 className="password-title">🔐 Zugang geschützt — Rätsel 3</h2>
              <p>Gib das Lösungswort des zweiten Rätsels ein, um weiterzukommen.</p>

              <input
                className="password-input"
                type="text"
                placeholder="Lösungswort eingeben…"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />

              <button className="password-button" onClick={handleUnlock2}>
                Weiter
              </button>
            </div>
          )}

          {/* Rätsel 3 */}
          {unlocked2 && (
            <>
              <div className="password-section" style={{ marginTop: "24px" }}>
                <h2 className="password-title">
                  🔓 Das zweite Rätsel hast du also auch geschafft!
                </h2>
                <p>Weiter geht&apos;s mit Rätsel 3. Immer weiter und höher hinaus.</p>
              </div>

              <div className="diary-riddle" style={{ marginTop: "24px" }}>
                <h2 className="diary-title" style={{ fontSize: "1.5rem" }}>
                  Rätsel 3
                </h2>

                <p>
                  Die folgenden Seiten stammen aus dem persönlichen Tagebuch eines Funkers, einem Freund von mir,
                  der 1942 in einer abgelegenen Schneestation stationiert war.
                  Als hätten die Ereignisse ihn dazu gedrängt, hat er im Text
                  mehrere verborgene Hinweise hinterlassen – nicht zufällig,
                  sondern bewusst so platziert, dass nur jemand mit scharfem Blick
                  sie erkennen kann.
                </p>

                <p>
                  Nach allem, was wir heute wissen, versuchte er damit,
                  die streng geheime Verschlüsselungstechnik seiner Zeit zu überlisten.
                  Eine Maschine, die man damals für unknackbar hielt.
                </p>

                <p>
                  Wer seine letzte Meldung verstehen will,
                  muss den Text genau lesen. Das einzige was ich hierzu weiß ist, dass es drei Steckerpaare gibt.
                </p>

                <p>Die Maschine, die es zu knacken gilt, ist hier zu finden:</p>

                <a
                  href="https://www.101computing.net/enigma-machine-emulator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="password-button"
                >
                  Zur Maschine
                </a>

                <p>Der Tagebucheintrag meines Freundes:</p>

                <div className="diary-quote-box">
                  <p>Schneestation, 10. November 1942</p>
                  <p>
                    Heute Morgen bin ich wieder früh aufgestanden.
                    Wie üblich habe ich zuerst die drei Kontrollberichte der Nacht geprüft.
                    Der erste war unvollständig, der zweite kaum lesbar,
                    aber der dritte war der einzige, der noch intakt war.
                  </p>
                  <p>
                    Danach ging ich zur Werkzeugkammer.
                    Dort hängen unsere alten Markierungsschilder an der Wand –
                    vier Stück an der Zahl.
                    Das erste ist bereits gesplittert,
                    das zweite verbogen,
                    das dritte kaum noch lesbar,
                    aber das vierte hat den Sturm erstaunlich gut überstanden.
                  </p>
                  <p>
                    In der Küche stand wie immer ein kleines Frühstück bereit.
                    Der Koch sortiert alles streng:
                    Ganz links steht immer der Tee,
                    in der Mitte legt er das Apfelmus ab
                    und rechts stehen die Säcke mit Gerste.
                  </p>
                  <p>
                    Als ich zum Funkraum hinüberschlitterte,
                    musste ich zuerst am alten Steg vorbei.
                    Dort führen drei Wegpunkte hintereinander:
                    zuerst der Messpfosten,
                    dann das schiefe Igelhindernis
                    und schließlich der morsche Bohlensteg.
                  </p>
                  <p>
                    Im Funkraum roch es wieder nach dem üblichen Gemisch
                    aus feuchtem Holz und scharfem Reiniger.
                    Neben der Tür lag der verrostete Kanister neben der alten Laterne,
                    und auf dem Tisch fand ich eine vergessene Postkarte
                    mitten im Flockengestöber.
                  </p>
                  <p>
                    Hoffentlich hält die Leitung heute.
                    Wenn ich die Meldung nicht rechtzeitig herausbekomme,
                    war die ganze Nachtschicht umsonst.
                  </p>
                  <p>— Ende des Eintrags —</p>
                </div>

                <p>AUXYP SSCZG BCNVO UALHS LVTTF KZCUF QYHTC XOGRM TPPOE EUINT SR</p>
              </div>
            </>
          )}

          {/* Passwortabfrage für Rätsel 4 */}
          {unlocked2 && !unlocked3 && (
            <div className="password-section" style={{ marginTop: "24px" }}>
              <h2 className="password-title">🔐 Zugang geschützt — Rätsel 4</h2>
              <p>Gib das Lösungswort des dritten Rätsels ein, um weiterzugehen.</p>

              <input
                className="password-input"
                type="text"
                placeholder="Lösungswort eingeben…"
                value={password3}
                onChange={(e) => setPassword3(e.target.value)}
              />

              <button className="password-button" onClick={handleUnlock3}>
                Weiter
              </button>
            </div>
          )}

{/* Rätsel 4 (E91 Quantenoptik) */}
{unlocked3 && (
  <>
    <div className="password-section" style={{ marginTop: "24px" }}>
      <h2 className="password-title">🔓 Gut gemacht!</h2>
      <p>
        Du löst ein Rätsel nach dem andern hier,<br />
        drum wartet nun geduldig Rätsel vier.
      </p>
    </div>

    <div className="diary-riddle" style={{ marginTop: "24px" }}>
      <h2 className="diary-title" style={{ fontSize: "1.5rem" }}>
        Rätsel 4 — E91 (Quantenoptik)
      </h2>

      <p>
        Eine Quelle erzeugt polarisations-verschränkte Photonenpaare nahe{" "}
        <InlineMath math={String.raw`\lvert\Phi^+\rangle = (\lvert HH\rangle + \lvert VV\rangle)/\sqrt{2}`} />
        {" "}Gemessen wird beidseitig mit Analysator (HWP) + PBS + zwei Detektoren (H/V).
        {" "}Für jedes Winkelpaar (α,β) erhältst du Coincidence-Counts{" "}
        <InlineMath math={String.raw`N_{HH},\; N_{HV},\; N_{VH},\; N_{VV}`} />
        innerhalb eines Zeitfensters.
      </p>

      <p className="diary-riddle-hint">
        Wichtig (verknüpft mit dem vorherigen Lösungswort):
        <br />
        Dein Lösungswort war <strong>„Zweiundvierzig“</strong>. Damit gilt:
        Verwende ausschließlich die Fensterfolge{" "}
        <strong>4, 2, 4, 2, …</strong> (beginnend mit Fenster 4). Das gilt
        sowohl für den Bell-Test als auch für die Schlüsselerzeugung.
      </p>

      <hr className="diary-divider" />

      <h3 style={{ marginTop: "0.5rem" }}>Teil 1 — Bell-Test (CHSH)</h3>

      <p>
        Winkel (in Grad):{" "}
          <InlineMath math={String.raw`\alpha_0 = 0^\circ`} /> ·{" "}
          <InlineMath math={String.raw`\alpha_1 = 45^\circ`} /> ·{" "}
          <InlineMath math={String.raw`\beta_0 = 22.5^\circ`} /> ·{" "}
          <InlineMath math={String.raw`\beta_1 = -22.5^\circ`} />
      </p>


      <div className="diary-riddle-table">
        <BlockMath
          math={String.raw`\begin{aligned}
E(\alpha,\beta) &= \frac{N_{HH} + N_{VV} - N_{HV} - N_{VH}}{N_{HH} + N_{HV} + N_{VH} + N_{VV}} \\
S &= E(\alpha_0,\beta_0) + E(\alpha_0,\beta_1) + E(\alpha_1,\beta_0) - E(\alpha_1,\beta_1) \\
\text{Akzeptanzregel: } &\lvert S\rvert > 2.42
\end{aligned}`}
        />
      </div>

      <p>
        Messdaten: Für jedes Setting existieren zwei Zeitfenster (2 und 4).
        Nutze für die vier Settings der Reihe nach die Fensterfolge{" "}
        <strong>4, 2, 4, 2</strong> für A–D.
      </p>

      <pre className="diary-riddle-table">{`Setting A: (α0,β0) = (0°, 22,5°)
Fenster 2: HH=15, HV=6,  VH=6,  VV=15
Fenster 4: HH=18, HV=3,  VH=3,  VV=18

Setting B: (α0,β1) = (0°, −22,5°)
Fenster 2: HH=18, HV=3,  VH=3,  VV=18
Fenster 4: HH=14, HV=7,  VH=7,  VV=14

Setting C: (α1,β0) = (45°, 22,5°)
Fenster 2: HH=15, HV=6,  VH=6,  VV=15
Fenster 4: HH=18, HV=3,  VH=3,  VV=18

Setting D: (α1,β1) = (45°, −22,5°)
Fenster 2: HH=3,  HV=18, VH=18, VV=3
Fenster 4: HH=7,  HV=14, VH=14, VV=7`}</pre>

      <p>
        <strong>Aufgabe:</strong> Berechne <InlineMath math={String.raw`E`} /> für A–D (mit Fensterfolge 4,2,4,2),
        dann <InlineMath math={String.raw`S`} />. Entscheide, ob <InlineMath math={String.raw`\lvert S\rvert > 2.42`} />
        gilt.
      </p>

      <hr className="diary-divider" />

      <h3 style={{ marginTop: "0.5rem" }}>Teil 2 — Schlüssel aus Coincidences</h3>

<p>
  Für die Schlüsselerzeugung wird ein kompatibles Key-Setting verwendet:
  <br />
  <InlineMath math={String.raw`K:\ (\alpha_2,\beta_2) = (0^\circ,0^\circ)`} />
</p>

<p>
  Du bekommst die Coincidence-Ereignisse in zeitlicher Reihenfolge für Fenster 2 und Fenster 4.
</p>

<p><strong>Bit-Regel (Parität):</strong></p>
<ul>
  <li>
    <InlineMath math={String.raw`HH \ \text{oder}\ VV \rightarrow 0`} />
  </li>
  <li>
    <InlineMath math={String.raw`HV \ \text{oder}\ VH \rightarrow 1`} />
  </li>
</ul>

<p>
  Fensterregel: Lies Ereignisse alternierend aus Fenster <strong>4</strong> und <strong>2</strong>,
  bis du <strong>35 Bits</strong> hast.
  <br />
  Dekodierung: 35 Bits → 7 Blöcke à 5 Bit →{" "}
  <InlineMath math={String.raw`A=00000,\ B=00001,\ \dots,\ Z=11001`} />
</p>


      <pre className="diary-riddle-table">{`Key-Ereignisse Fenster 4 (in Reihenfolge):
HH, VV, HH, HV, VH, VV, HV, VH, HV, HH, VV, VH, HH, VV, HH, HV, VV, VH

Key-Ereignisse Fenster 2 (in Reihenfolge):
HV, VH, HH, HV, VV, VH, HH, HV, VV, VH, HH, VV, HV, HH, VH, VV, HV`}</pre>

      <p>
        <strong>Aufgabe:</strong> Extrahiere 35 Bits mit der Fensterfolge 4,2,4,2,…,
        dekodiere → das Ergebnis ist dein <strong>Codewort</strong>.
      </p>

      {/* Passwortabfrage nach Rätsel 4 */}
      {unlocked3 && !unlocked4 && (
        <div className="password-section" style={{ marginTop: "24px" }}>
          <h2 className="password-title">🔐 Zugang geschützt — Abschluss</h2>
          <p>Gib das Codewort aus Rätsel 4 ein, um fortzufahren.</p>

          <input
            className="password-input"
            type="text"
            placeholder="Codewort eingeben…"
            value={password4}
            onChange={(e) => setPassword4(e.target.value)}
          />

          <button className="password-button" onClick={handleUnlock4}>
            Weiter
          </button>
        </div>
      )}

      {unlocked4 && (
        <div className="password-section" style={{ marginTop: "24px" }}>
          <h2 className="password-title">🎉 Geschafft!</h2>
          <p>
            Jetzt fehlt noch eins auf diesem Pfad,<br />
            dann endet hier der letzte Rat.
          </p>
        </div>
      )}
    </div>
  </>
)}
        </div>

        <footer className="diary-footer">
          <span className="diary-signature">— D.</span>
        </footer>
      </section>
    </main>
  );
};

export default DiaryPage;
