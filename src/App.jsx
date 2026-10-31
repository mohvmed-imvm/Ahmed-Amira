
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import "./App.css";

const CONFIG = {
  callerName: "Ahmed",
  subtitle: "incoming love call",
  password: "1562005",
  photos: [
    "public/photo2.jpg",
    "public/photo3.jpg",
    "public/photo4.jpg",
  ],
  message:
    "انتي مش عارفة أنا بحبك قد إيه بجد، ومش عارف حتى أبدأ كلامي منين ولا أوصفلك إيه ولا إيه، بس كل اللي أعرفه إنك بقيتي بالنسبالي حاجة كبيرة أوي، بقيتي جزء من يومي وتفكيري وكل تفصيلة في حياتي، بقيت أحب أسمع صوتك وأتكلم معاكي حتى لو مفيش كلام يتقال، مجرد وجودك معايا بيخليني مبسوط وبيهون عليا حاجات كتير أوي، بحب ضحكتك وهزارك ودلعك وطريقتك في الكلام وحتى خناقنا بحبها عشان في الآخر برجع ألاقي نفسي مش عايز غير إني أصالحك وأشوفك مبسوطة، انتي بالنسبالي مش مجرد واحدة بحبها، انتي الشخص اللي نفسي أحكيله كل حاجة بتحصل معايا، أول واحدة تيجي في بالي لما أفرح وأول واحدة نفسي تكون جنبي لما أكون مخنوق، نفسي أفضل معاكي وأعيش معاكي تفاصيل كتير أوي، نكبر سوا ونحقق أحلامنا ونفضل فاكرين كل لحظة حلوة عشناها، وصدقيني أنا مش مستني منك تكوني مثالية ولا عمري طلبت منك كده، أنا بحبك بكل تفاصيلك وبكل حالاتك، بحبك وإنتي فرحانة وزعلانة ومتنرفزة وبتتدلعي، ومهما حصل بينا مش عايزك تشكي لحظة إن ليكي مكانة كبيرة أوي عندي، أنا ممكن معرفش أعبر كل يوم عن اللي جوايا وممكن ساعات كلامي ميكونش كفاية، بس والله انتي غالية عندي بطريقة متتوصفش، وكل يوم بيعدي بحس إني متعلق بيكي أكتر، ونفسي أفضل الشخص اللي تلاقيه جنبك وقت ما تحتاجيه، واللي يطمنك ويضحكك ويخليكي حاسة إنك محبوبة ومهمة، أنا مش عايز من الدنيا غير إننا نفضل مع بعض ونفضل نختار بعض كل يوم، عشان أنا لما حبيتك مكنتش بدور على فترة حلوة وخلاص، أنا حبيت واحدة نفسي تكمل معايا العمر كله، وبجد يا أجمل حاجة حصلتلي أنا بحبك أوي أوي ومهما أقولك مش هعرف أوصلك حتى جزء صغير من اللي جوايا ليكي ❤️❤️",
};

const refusalMessages = [
  "!ردي بقولك",
  "بقول ردي",
  "!!اخر مره هقولك ردي",
];

function PhoneIcon({ type }) {
  if (type === "decline") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4.5 14.5c4.2-3.4 10.8-3.4 15 0l1.4 1.2-2.2 3.1a1.7 1.7 0 0 1-2 .6l-2.4-1a1.6 1.6 0 0 1-1-1.5v-.7a10 10 0 0 0-2.6 0v.7a1.6 1.6 0 0 1-1 1.5l-2.4 1a1.7 1.7 0 0 1-2-.6l-2.2-3.1z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4.5 14.5c4.2-3.4 10.8-3.4 15 0l1.4 1.2-2.2 3.1a1.7 1.7 0 0 1-2 .6l-2.4-1a1.6 1.6 0 0 1-1-1.5v-.7a10 10 0 0 0-2.6 0v.7a1.6 1.6 0 0 1-1 1.5l-2.4 1a1.7 1.7 0 0 1-2-.6l-2.2-3.1z"
        fill="currentColor"
      />
    </svg>
  );
}

function FloatingHearts() {
  return (
    <div className="floating-hearts" aria-hidden="true">
      {Array.from({ length: 12 }, (_, index) => (
        <motion.span
          key={index}
          className={`floating-heart heart-${index + 1}`}
          animate={{
            y: [0, -18 - (index % 4) * 8, 0],
            rotate: [0, 10, -8, 0],
            opacity: [0.35, 0.8, 0.35],
          }}
          transition={{
            duration: 4 + (index % 4),
            delay: index * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {index % 3 === 0 ? "♡" : "♥"}
        </motion.span>
      ))}
    </div>
  );
}

export default function App() {
const [currentTime, setCurrentTime] = useState(() =>
  new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).replace(/\s?[AP]M$/i, "")
);

useEffect(() => {
  const updateTime = () => {
    setCurrentTime(
      new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).replace(/\s?[AP]M$/i, "")
    );
  };

  updateTime();
  const timer = window.setInterval(updateTime, 1000);

  return () => window.clearInterval(timer);
}, []);
  const [screen, setScreen] = useState("call");
  const [refusals, setRefusals] = useState(0);
  const [digits, setDigits] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const rejectCall = () => {
    setRefusals((previous) => previous + 1);
  };

  const answerCall = () => {
    setScreen("passcode");
  };


const pressDigit = (digit) => {
  const passwordLength = CONFIG.password.length;

  if (digits.length >= passwordLength) return;

  const next = digits + digit;
  setDigits(next);
  setWrongPassword(false);

  if (next.length === passwordLength) {
    if (next === CONFIG.password) {
      window.setTimeout(() => setScreen("home"), 350);
    } else {
      window.setTimeout(() => {
        setDigits("");
        setWrongPassword(true);
      }, 350);
    }
  }
};


  const deleteDigit = () => {
    setDigits((previous) => previous.slice(0, -1));
    setWrongPassword(false);
  };

  const restart = () => {
    setScreen("call");
    setRefusals(0);
    setDigits("");
    setWrongPassword(false);
    setSelectedPhoto(null);
  };

  return (
    <main className="experience">
      <FloatingHearts />

      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="brand">
        <span className="brand-mark">4U</span>
        <span className="brand-divider" />
        <span className="brand-name">A LITTLE SURPRISE</span>
      </header>

      <section className="stage">
        <motion.div
          className="stage-copy"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">SOMEONE WANTS YOU</span>
          <h1>
            Pick up,
            <br />
            <em>my love.</em>
          </h1>
          <p>
            There’s a little something
            <br />
            waiting for you inside.
          </p>
          <div className="copy-decoration">
            <span>♡</span>
            <i />
            <span>✳</span>
            <i />
            <span>♡</span>
          </div>
        </motion.div>

        <motion.div
          className="phone-wrap"
          initial={{ opacity: 0, y: 45, rotateY: -12, rotateZ: 3 }}
          animate={{ opacity: 1, y: 0, rotateY: 0, rotateZ: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="phone"
            animate={
              screen === "call"
                ? { y: [0, -3, 0], rotateZ: [0, 0.25, 0] }
                : { y: 0, rotateZ: 0 }
            }
            transition={{
              duration: 4,
              repeat: screen === "call" ? Infinity : 0,
              ease: "easeInOut",
            }}
          >
            <div className="phone-frame">
              <div className="phone-bezel">
                <div className="phone-screen">
                  <div className="screen-wallpaper" />

                  <div className="dynamic-island">
                    <span className="island-camera" />
                    {screen === "call" && (
                      <motion.span
                        className="island-pulse"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </div>

<div className="status-bar">
  <span>{currentTime}</span>

  <div className="status-icons">
<svg
  className="wifi-icon"
  viewBox="0 0 24 24"
  aria-label="Wi-Fi"
>
  <path
    d="M2 8.5 Q12 0.5 22 8.5
       M5.5 12 Q12 6.5 18.5 12
       M9 15.5 Q12 13 15 15.5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  />
  <circle cx="12" cy="19" r="1.5" fill="currentColor" />
</svg>

    <span className="battery-icon" aria-label="Battery">
      <i />
    </span>
  </div>
</div>

                  <AnimatePresence mode="wait">
                    {screen === "call" && (
                      <motion.div
                        className="call-screen"
                        key="call"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.35 }}
                      >
                        <div className="call-top-note">
                          <span className="call-dot" />
                          INCOMING CALL
                        </div>

                        <motion.div
                          className="caller-avatar"
                          animate={{
                            boxShadow: [
                              "0 0 0 0 rgba(233,130,164,0.25)",
                              "0 0 0 12px rgba(233,130,164,0)",
                              "0 0 0 0 rgba(233,130,164,0)",
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <img
                            src="\public\photo1.jpg"
                            alt="Caller portrait"
                          />
                          <span className="avatar-heart">♥</span>
                        </motion.div>

                        <h2 className="caller-name">{CONFIG.callerName}</h2>
                        <p className="caller-subtitle">{CONFIG.subtitle}</p>

                        <div className="call-wave" aria-hidden="true">
                          {Array.from({ length: 21 }, (_, index) => (
                            <motion.span
                              key={index}
                              animate={{
                                height: [
                                  4 + (index % 3) * 2,
                                  7 + ((index * 7) % 15),
                                  4 + (index % 3) * 2,
                                ],
                              }}
                              transition={{
                                duration: 0.7 + (index % 5) * 0.13,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.035,
                              }}
                            />
                          ))}
                        </div>

                        <div className="call-actions">
                          <button
                            className="call-action decline"
                            onClick={rejectCall}
                            aria-label="Decline call"
                          >
                            <span className="call-action-icon">
                              <PhoneIcon type="decline" />
                            </span>
                            <span>Decline</span>
                          </button>

                          <button
                            className="call-action accept"
                            onClick={answerCall}
                            aria-label="Answer call"
                          >
                            <span className="call-action-icon">
                              <PhoneIcon type="accept" />
                            </span>
                            <span>Answer</span>
                          </button>
                        </div>

                        <AnimatePresence mode="wait">
                          <motion.div
                            key={Math.min(refusals, 3)}
                            className={`plea-message ${
                              refusals > 0 ? "plea-visible" : ""
                            }`}
                            initial={{ opacity: 0, y: 8, scale: 0.94 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.3 }}
                          >
                            {refusals === 0
                              ? "!ردي"
                              : refusalMessages[
                                  Math.min(refusals - 1, refusalMessages.length - 1)
                                ]}
                          </motion.div>
                        </AnimatePresence>
                      </motion.div>
                    )}

                    {screen === "passcode" && (
                      <motion.div
                        className="passcode-screen"
                        key="passcode"
                        initial={{ opacity: 0, x: 35 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -25 }}
                        transition={{ duration: 0.4 }}
                      >
                        <button
                          className="back-button"
                          onClick={() => setScreen("call")}
                          aria-label="Back to call"
                        >
                          ‹
                        </button>

                        <div className="passcode-icon">♡</div>
                        <span className="passcode-overline">ONE LITTLE SECRET</span>
                        <h2>Unlock my heart</h2>
                        <p>Enter our special 4-digit code</p>

                        <div className={`passcode-dots ${wrongPassword ? "wrong" : ""}`}>
                          {Array.from(
  { length: CONFIG.password.length },
  (_, index) => index
).map((index) => (
                            <motion.span
                              key={index}
                              animate={
                                wrongPassword
                                  ? { x: [0, -5, 5, -4, 4, 0] }
                                  : { scale: digits.length > index ? 1.1 : 1 }
                              }
                              transition={{ duration: 0.3 }}
                              className={digits.length > index ? "filled" : ""}
                            />
                          ))}
                        </div>

                        <AnimatePresence>
                          {wrongPassword && (
                            <motion.span
                              className="wrong-message"
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                            >
                              Not quite, try again ♡
                            </motion.span>
                          )}
                        </AnimatePresence>

                        <div className="keypad">
                          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "heart", "0", "delete"].map(
                            (key) => (
                              <button
                                key={key}
                                className={`keypad-key ${key === "heart" ? "heart-key" : ""}`}
                                onClick={() => {
                                  if (key === "delete") deleteDigit();
                                  else if (key === "heart") pressDigit("1");
                                  else pressDigit(key);
                                }}
                                aria-label={
                                  key === "delete"
                                    ? "Delete digit"
                                    : key === "heart"
                                      ? "Enter one"
                                      : `Enter ${key}`
                                }
                              >
                                {key === "heart" ? "♡" : key === "delete" ? "⌫" : key}
                              </button>
                            )
                          )}
                        </div>

                        <span className="passcode-footnote">
                          A little code, a lot of love
                        </span>
                      </motion.div>
                    )}

                    {screen === "home" && (
                      <motion.div
                        className="home-screen"
                        key="home"
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="home-greeting">
                          <span>YOU MADE IT ♡</span>
                          <h2>
                            Hey,
                            <br />
                            beautiful.
                          </h2>
                          <p>I saved a little piece of my heart for you.</p>
                        </div>

                        <div className="home-widget">
                          <div className="widget-icon">♡</div>
                          <div>
                            <span>JUST A REMINDER</span>
                            <strong>You are loved. So much.</strong>
                          </div>
                        </div>

                        <div className="gallery-title">
                          <span>OUR LITTLE WORLD</span>
                          <span>✳</span>
                        </div>

                        <div className="photo-grid">
                          {CONFIG.photos.map((photo, index) => (
                            <motion.button
                              key={photo}
                              className={`memory-photo memory-${index + 1}`}
                              onClick={() => setSelectedPhoto(photo)}
                              whileHover={{ y: -4, rotate: 0, scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              initial={{ opacity: 0, y: 20, rotate: index % 2 ? 4 : -4 }}
                              animate={{ opacity: 1, y: 0, rotate: index % 2 ? 3 : -3 }}
                              transition={{ delay: 0.2 + index * 0.13 }}
                            >
                              <img src={photo} alt={`Memory ${index + 1}`} />
                              <span>{["our moment", "my favorite", "always us"][index]}</span>
                            </motion.button>
                          ))}
                        </div>

                        <motion.div
                          className="love-note"
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.65, duration: 0.7 }}
                        >
                          <span className="note-flower">✿</span>
                          <span className="note-label">A NOTE FOR YOU</span>
                          <p>{CONFIG.message}</p>
                          <span className="note-signature">yours, always ♡</span>
                        </motion.div>

                        <button className="restart-button" onClick={restart}>
                          ↺ &nbsp; EXPERIENCE IT AGAIN
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {screen !== "call" && (
                    <div className="home-indicator">
                      <span />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="phone-reflection" />
          </motion.div>

          <motion.div
            className="phone-side-note"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
          >
            <span className="side-note-line" />
            <span>YOUR WORLD,</span>
            <span>IN ONE LITTLE PHONE</span>
            <span className="side-note-heart">♡</span>
          </motion.div>
        </motion.div>
      </section>

      <footer className="page-footer">
        <span>MADE WITH LOVE</span>
        <span className="footer-heart">♥</span>
        <span>MADE FOR YOU</span>
      </footer>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="photo-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.img
              src={selectedPhoto}
              alt="Selected memory"
              initial={{ scale: 0.8, rotate: -4 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.85 }}
              onClick={(event) => event.stopPropagation()}
            />
            <button onClick={() => setSelectedPhoto(null)} aria-label="Close photo">
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
