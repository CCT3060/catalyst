import { useCallback, useEffect, useRef, useState } from "react";
import "./HeroSlider.css";
import img3 from "../assets/3.png";
import img2 from "../assets/2.png";
import img1 from "../assets/1.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";


const AUTO_MS = 6500;

// accent = headline highlight (brand hues), blob = the big circle behind the images
const SLIDES = [
  {
    id: "food",
    kicker: "Food Services",
    accent: "#FF7F00",
    blob: "#FF7F00",
    wash: "#FBF4EA",
    lines: [
      [{ t: "Food" },
      { t: " Experiences", a: true }],
      [{ t: "That Nourish " },
      { t: "Well-Being.", a: true }],
    ],
    para: "Food has the power to shape experiences far beyond the dining table. We design dining environments that combine nutrition, hospitality, and innovation — from workplaces to healthcare institutions and educational campuses.",
    img: img2,
    alt: "Fresh, colourful healthy food bowl",
  },
  {
    id: "facilities",
    kicker: "Facility Management",
    accent: "#43934A",
    blob: "#43934A",
    wash: "#F3F7F1",
    lines: [
      [{ t: "Spaces That " }, { t: "Perform.", a: true }],
      [{ t: "Experiences That" }],
      [{ t: "Inspire.", a: true }],
    ],
    para: "Exceptional facilities don't happen by chance. We deliver integrated facility management that enhances operational performance, elevates everyday experiences, and supports long-term value.",
    img: img3,
    alt: "Wind turbines and sustainable energy in a green field",
  },
  {
    id: "people",
    kicker: "Our People",
    accent: "#D99000",
    blob: "#FFB800",
    wash: "#FBF5E6",
    lines: [
      [{ t: "People at the " }, { t: "Heart", a: true }],
      [{ t: "of Everything " }, { t: "We Do", a: true }],
    ],
    para: "We partner with organizations to build healthier workplaces, safer communities, smarter infrastructure, and exceptional everyday experiences through integrated solutions that enhance well-being and drive performance.",
    img: img1,
    alt: "Team of professionals collaborating",
  },
  {
    id: "infra",
    kicker: "Infrastructure Solutions",
    accent: "#D96D00",
    blob: "#D96D00",
    wash: "#F9F2EA",
    lines: [
      [{ t: "Building the " }, { t: "Foundations", a: true }],
      [{ t: "for Better " }, { t: "Experiences.", a: true }],
    ],
    para: "Creating resilient environments that support growth, inspire confidence, and deliver lasting value through thoughtful infrastructure solutions.",
    img: img5,
    alt: "Construction site with modern infrastructure taking shape",
  },
  {
    id: "healthcare",
    kicker: "Healthcare Solutions",
    accent: "#43934A",
    blob: "#43934A",
    wash: "#F1F6F2",
    lines: [
      [{ t: "Advancing " }, { t: "Well-Being", a: true }],
      [{ t: "Through Better" }],
      [{ t: "Care Environments.", a: true }],
    ],
    para: "Creating integrated healthcare environments that empower caregivers, enhance patient experiences, and support operational excellence.",
    img: img4,
    alt: "Modern healthcare environment with medical professionals",
  },
];

const N = SLIDES.length;
const STEP = 360 / N; // degrees the wheel turns per slide

export default function HeroSlider({ go }) {
  // rotation accumulates so the orbit wheel always keeps spinning the same way
  const [state, setState] = useState({ current: 0, rotation: 0, leaving: null });
  const { current, rotation, leaving } = state;
  const leaveTimer = useRef(null);

  const goTo = useCallback((i) => {
    setState(s => {
      const next = ((i % N) + N) % N;
      if (next === s.current) return s;
      let d = next - s.current;
      if (d > N / 2) d -= N;
      if (d < -N / 2) d += N;
      return { current: next, rotation: s.rotation - d * STEP, leaving: s.current };
    });
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => setState(s => ({ ...s, leaving: null })), 750);
  }, []);

  // auto-advance, restarts whenever the slide changes (manual or automatic)
  useEffect(() => {
    const t = setTimeout(() => goTo(current + 1), AUTO_MS);
    return () => clearTimeout(t);
  }, [current, goTo]);

  useEffect(() => () => clearTimeout(leaveTimer.current), []);

  const slide = SLIDES[current];

  return (
    <section
      className="hs-section"
      style={{ background: slide.wash, "--hs-dur": `${AUTO_MS}ms`, "--hs-blob-color": slide.blob }}
      aria-roledescription="carousel"
      aria-label="Catalyst highlights"
    >
      {/* shared visual: persistent blob + orbiting image wheel */}
      <div className="hs-visual" aria-hidden="true">
        <div className="hs-blob-par">
          <div className="hs-blob-wrap">
            <div className="hs-blob" style={{ background: slide.blob }}></div>
          </div>
        </div>
        <div className="hs-img-par">
          <div className="hs-orbit-box">
            <div className="hs-orbit" style={{ transform: `rotate(${rotation}deg)` }}>
              {SLIDES.map((s, i) => {
                const slotAngle = 270 + i * STEP; // active slot rests to the left of the blob centre
                return (
                  <div
                    key={s.id}
                    className={`hs-slot${i === current ? " on" : ""}${s.photo ? " hs-slot-photo" : ""}`}
                    style={{ transform: `rotate(${slotAngle}deg) translateY(calc(-1 * var(--hs-r)))` }}
                  >
                    {/* counter-rotates so the photo stays upright while it orbits */}
                    <div className="hs-slot-in" style={{ transform: `rotate(${-(rotation + slotAngle)}deg)` }}>
                      <div className="hs-slot-scale">
                        <div className="hs-img-float">
                          <img src={s.img} alt="" loading={i === 0 ? "eager" : "lazy"} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {SLIDES.map((s, i) => {
        const st = i === current ? "hs-enter" : i === leaving ? "hs-leave" : "";
        return (
          <div key={s.id} className={`hs-slide ${st}`} style={{ "--hsa": s.accent }} aria-hidden={i !== current}>
            <div className="hs-inner">
              <div className="hs-copy">
                <div className="hs-kicker"><span className="hs-kicker-dash"></span>{s.kicker}</div>
                <h1 className="hs-title">
                  {s.lines.map((line, li) => (
                    <span className="hs-line" key={li} style={{ "--ld": `${0.16 + li * 0.08}s` }}>
                      <span className="hs-line-in">
                        {line.map((seg, si) => (
                          <span key={si} className={seg.a ? "hs-accent" : undefined}>{seg.t}</span>
                        ))}
                      </span>
                    </span>
                  ))}
                </h1>
                <p className="hs-para">{s.para}</p>
                <div className="hs-btns">
                  <button className="hs-btn-fill mag" onClick={() => go("solutions")}>Explore Solutions →</button>
                  <button className="hs-btn-ghost mag" onClick={() => go("contact")}>Partner With Us</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="hs-controls" style={{ "--hsa": slide.accent }}>
        <div className="hs-dots" role="tablist" aria-label="Slides">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === current}
              aria-label={`Slide ${i + 1}`}
              className={`hs-dot${i === current ? " on" : ""}`}
              onClick={() => goTo(i)}
            >
              {i === current && <span key={`fill-${rotation}`} className="hs-dot-fill"></span>}
            </button>
          ))}
        </div>
        <div className="hs-arrows">
          <button className="hs-arrow" aria-label="Previous slide" onClick={() => goTo(current - 1)}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button className="hs-arrow" aria-label="Next slide" onClick={() => goTo(current + 1)}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
