import { useState, useEffect, useRef } from "react";
import CTA from "../components/CTA";
import HeroSlider from "../components/HeroSlider";
import partnerImg from "../assets/Partnerwithus.png";
import { Globe } from "@/components/ui/cobe-globe";
import aboutusImg from "../assets/aboutus.png";


const SECTORS = [
  { num: "01", name: "Corporate & Commercial Spaces", desc: "Workplaces are more than buildings, they are where ideas grow, teams connect, and performance takes shape. We help organizations create engaging, high-performing environments that elevate employee experiences and support business success.", bg: "#191919", img: "corporate.jpg", page: null },
  { num: "02", name: "Manufacturing & Industrial", desc: "Powering the environments that drive industry forward — strengthening operational continuity and resilience.", bg: "#43934A", img: "manufacturing.jpg", page: null },
  { num: "03", name: "Infrastructure & Smart Cities", desc: "Sustainable environments that support future-ready communities and large-scale public spaces.", bg: "#242424", img: "infrastructure.jpg", page: null },
  { num: "04", name: "Education & Community Living", desc: "Safe, welcoming, sustainable environments where people learn, grow, and connect.", bg: "#D96D00", img: "education.jpg", page: null },
  { num: "05", name: "Healthcare Technology Management", desc: "Enhancing patient experiences and the performance of critical healthcare technologies.", bg: "#2E5D33", img: "healthcare.jpg", page: "htm" },
];

const PRESENCE_DATA = [
  {
    id: "india", name: "India", region: "South Asia", flag: "🇮🇳", color: "#FF7F00", mx: 415, my: 276,
    desc: "Our primary operations hub — the largest team, widest service coverage, and deepest expertise across sectors.",
    offices: ["Mumbai", "Delhi NCR", "Bengaluru", "Chennai", "Hyderabad"]
  },
  {
    id: "dubai", name: "Dubai, UAE", region: "Middle East", flag: "🇦🇪", color: "#43934A", mx: 179, my: 240,
    desc: "Strategic Middle East presence enabling Catalyst to serve diverse organizations across the Gulf region.",
    offices: ["Dubai"]
  },
  {
    id: "singapore", name: "Singapore", region: "Southeast Asia", flag: "🇸🇬", color: "#FFB800", mx: 683, my: 524,
    desc: "Southeast Asia hub connecting regional partnerships and expanding our footprint across ASEAN markets.",
    offices: ["Singapore"]
  },
];

const CERTS = [
  { name: "ISO 9001:2015", sub: "Quality Management Systems", color: "#FF7F00", image: "/certs/iso-9001.webp", detail: "Certified Quality Management System ensuring consistent service delivery, process efficiency, and continuous improvement across all operations." },
  { name: "ISO 14001:2015", sub: "Environmental Management Systems", color: "#43934A", detail: "Environmental management framework guiding responsible stewardship, sustainability practices, and minimized ecological impact." },
  { name: "ISO 45001:2018", sub: "Occupational Health & Safety", color: "#FF7F00", detail: "Occupational health and safety management system ensuring safe work environments and a zero-harm culture across all sites." },
  { name: "FSSAI Certified", sub: "Food Safety & Regulatory Compliance", color: "#FFB800", detail: "Food Safety and Standards Authority of India certified operations ensuring the highest standards in food safety and hygiene." },
  { name: "NABH-Aligned", sub: "Healthcare Support Practices", color: "#43934A", detail: "Aligned with National Accreditation Board for Hospitals standards, supporting clinical environments with precision and compliance." },
  { name: "ESG Commitment", sub: "Responsible, Long-Term Stewardship", color: "#FF7F00", detail: "Commitment to Environmental, Social, and Governance principles—driving responsible business and sustainable long-term value creation." },
  { name: "Regulatory Compliance", sub: "Statutory Standards & Governance", color: "#43934A", detail: "Comprehensive regulatory compliance framework aligned to statutory requirements, industry standards, and governance best practices." },
  { name: "Safety Protocols", sub: "Industry-Specific Governance", color: "#FF7F00", detail: "Robust safety protocols tailored to each environment—healthcare, hospitality, corporate, and industrial—ensuring protection and accountability." },
];

export default function Home({ go }) {
  const [activeSector, setActiveSector] = useState(0);
  const [activePresence, setActivePresence] = useState("india");
  const sectorWrapRef = useRef(null);

  useEffect(() => {
    const onMove = e => {
      document.querySelectorAll('[data-glow-card]').forEach(card => {
        card.style.setProperty('--x', e.clientX);
        card.style.setProperty('--y', e.clientY);
      });
    };
    document.addEventListener('pointermove', onMove);
    return () => document.removeEventListener('pointermove', onMove);
  }, []);


  useEffect(() => {
    const onScroll = () => {
      const el = sectorWrapRef.current;
      if (!el) return;
      const runway = el.offsetHeight - window.innerHeight;
      if (runway <= 0) return;
      const progress = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / runway));
      const idx = Math.min(SECTORS.length - 1, Math.floor(progress * SECTORS.length));
      setActiveSector(prev => (prev === idx ? prev : idx));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div data-screen-label="Home">

      {/* Hero */}
      <HeroSlider go={go} />

      {/* About snippet */}
      <section style={{ padding: "clamp(90px,11vw,150px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,90px)", alignItems: "center" }} data-split>
          <div style={{ position: "relative", height: 520 }}>
            {/* Box 1 (Top Left) */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "48%", height: "48%", borderRadius: 24, overflow: "hidden", border: "6px solid #F9F7F3", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", zIndex: 1 }}>
              <img src={aboutusImg} alt="About Catalyst" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            {/* Box 2 (Middle Right) */}
            <div style={{ position: "absolute", top: "15%", right: 0, width: "55%", height: "55%", borderRadius: 24, overflow: "hidden", border: "6px solid #F9F7F3", boxShadow: "0 20px 40px rgba(0,0,0,0.12)", zIndex: 2 }}>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team Collaboration" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            {/* Box 3 (Bottom Left) */}
            <div style={{ position: "absolute", bottom: "10%", left: "5%", width: "42%", height: "42%", borderRadius: 24, overflow: "hidden", border: "6px solid #F9F7F3", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", zIndex: 3 }}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Meeting" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            {/* Box 4 (Bottom Right) */}
            <div style={{ position: "absolute", bottom: 0, right: "10%", width: "45%", height: "30%", borderRadius: 24, overflow: "hidden", border: "6px solid #F9F7F3", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", zIndex: 4 }}>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="Office Space" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>About Catalyst</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,3.6vw,50px)", color: "#191919" }}>An integrated services partner built around people</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 24, fontSize: 18, lineHeight: 1.7, color: "#46433C" }}>Catalyst Service Solutions is an integrated services partner dedicated to enhancing the environments where people work, heal, learn, live, and connect.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 18, fontSize: 18, lineHeight: 1.7, color: "#6E6A61" }}>By combining operational excellence, technology, and human-centered solutions, we help organizations improve performance, elevate experiences, and create lasting value.</p>
            <button data-reveal data-delay="4" className="mag" onClick={() => go("about")} style={{ marginTop: 34, background: "#191919", color: "#fff", fontWeight: 600, fontSize: 15, padding: "15px 30px", borderRadius: 999 }}>Discover our story →</button>
          </div>
        </div>
      </section>

      {/* Solutions Ecosystem */}
      <section style={{ padding: "clamp(90px,11vw,150px) clamp(20px,4vw,56px)", background: "rgb(249, 247, 243)", overflow: "hidden" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 70px" }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18, justifyContent: "center" }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Solutions Ecosystem<span style={{ width: 26, height: 2, background: "#43934A" }}></span></div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,4vw,54px)", color: "#060606" }}>Five capabilities. One integrated system.</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 18, lineHeight: 1.7, color: "rgba(0, 0, 0, 0.76)" }}>When specialized expertise works in harmony, performance improves and meaningful outcomes follow.</p>
          </div>

          {/* Hexagonal honeycomb grid (desktop / tablet) */}
          <div data-reveal data-hexwrap style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Row 1 — 3 hexagons */}
            <div style={{ display: "flex", gap: 18 }}>
              {[["food", "", "Food Services", "/food-service-hero.png"], ["ifm", "", "Integrated Facilities Management", "/sectors/corporate.jpg"], ["infra", "", "Infrastructure Solutions", "/sectors/infrastructure.jpg"]].map(([p, icon, name, img]) => (
                <div key={p} onClick={() => go(p)} style={{ width: "clamp(200px,22vw,310px)", aspectRatio: "240/277", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", backgroundImage: `linear-gradient(rgba(0,0,0,.52),rgba(0,0,0,.52)),url(${img})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", overflow: "hidden", cursor: "pointer", flexShrink: 0, transition: "filter .3s" }} onMouseEnter={e => e.currentTarget.style.filter = "brightness(1.2)"} onMouseLeave={e => e.currentTarget.style.filter = ""}>
                  <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, padding: "28% 10%", textAlign: "center" }}>
                    <span style={{ fontSize: "clamp(26px,3.2vw,46px)" }}>{icon}</span>
                    <span style={{ color: "#fff", fontFamily: "Inter Tight", fontWeight: 700, fontSize: "clamp(12px,1.3vw,17px)", lineHeight: 1.25 }}>{name}</span>
                    <span style={{ padding: "6px 14px", border: "1px solid rgba(255,255,255,.6)", borderRadius: 3, color: "#fff", fontSize: "clamp(9px,0.7vw,11px)", fontWeight: 700, letterSpacing: ".12em" }}>LEARN MORE</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Row 2 — 2 hexagons, naturally centred by flex; negative margin creates honeycomb overlap */}
            <div style={{ display: "flex", gap: 18, marginTop: "clamp(-58px,-6.35vw,-90px)" }}>
              {[["htm", "", "Healthcare Technology Management", "/sectors/healthcare.jpg"], ["workforce", "", "Workforce Solutions", "/sectors/education.jpg"]].map(([p, icon, name, img]) => (
                <div key={p} onClick={() => go(p)} style={{ width: "clamp(200px,22vw,310px)", aspectRatio: "240/277", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", backgroundImage: `linear-gradient(rgba(0,0,0,.52),rgba(0,0,0,.52)),url(${img})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", overflow: "hidden", cursor: "pointer", flexShrink: 0, transition: "filter .3s" }} onMouseEnter={e => e.currentTarget.style.filter = "brightness(1.2)"} onMouseLeave={e => e.currentTarget.style.filter = ""}>
                  <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, padding: "28% 10%", textAlign: "center" }}>
                    <span style={{ fontSize: "clamp(26px,3.2vw,46px)" }}>{icon}</span>
                    <span style={{ color: "#fff", fontFamily: "Inter Tight", fontWeight: 700, fontSize: "clamp(12px,1.3vw,17px)", lineHeight: 1.25 }}>{name}</span>
                    <span style={{ padding: "6px 14px", border: "1px solid rgba(255,255,255,.6)", borderRadius: 3, color: "#fff", fontSize: "clamp(9px,0.7vw,11px)", fontWeight: 700, letterSpacing: ".12em" }}>LEARN MORE</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile — stacked capability cards (hexagons overflow small screens) */}
          <div data-reveal data-solutions-mobile style={{ display: "none", flexDirection: "column", gap: 14 }}>
            {[["food", "Food Services", "/food-service-hero.png"], ["ifm", "Integrated Facilities Management", "/sectors/corporate.jpg"], ["infra", "Infrastructure Solutions", "/sectors/infrastructure.jpg"], ["htm", "Healthcare Technology Management", "/sectors/healthcare.jpg"], ["workforce", "Workforce Solutions", "/sectors/education.jpg"]].map(([p, name, img]) => (
              <div key={p} onClick={() => go(p)} style={{ position: "relative", minHeight: 116, borderRadius: 22, overflow: "hidden", backgroundImage: `linear-gradient(90deg, rgba(10,10,10,.74) 34%, rgba(10,10,10,.28)), url(${img})`, backgroundSize: "cover", backgroundPosition: "center", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, padding: "18px 18px" }}>
                <div>
                  <div style={{ color: "#fff", fontFamily: "Inter Tight", fontWeight: 600, fontSize: 17, lineHeight: 1.3, maxWidth: 230 }}>{name}</div>
                  <div style={{ color: "rgba(255,255,255,.65)", fontSize: 11.5, fontWeight: 600, letterSpacing: ".14em", marginTop: 6 }}>LEARN MORE</div>
                </div>
                <span style={{ width: 40, height: 40, borderRadius: 999, background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.35)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0 }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors — full-screen scroll reveal */}
      <section style={{ background: "#F9F7F3", position: "relative" }}>
        <div style={{ padding: "clamp(90px,11vw,150px) clamp(20px,4vw,56px) clamp(40px,5vw,70px)" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto" }}>
            <div style={{ maxWidth: 720 }}>
              <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Sectors We Serve</div>
              <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,4vw,52px)", color: "#191919" }}>Every environment presents unique challenges and opportunities</h2>
              <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>Catalyst combines industry expertise, integrated services, and technology-driven solutions to create healthier, safer, and more efficient environments that enhance experiences and deliver lasting value.</p>
            </div>
          </div>
        </div>
        <div ref={sectorWrapRef} style={{ position: "relative", height: `${SECTORS.length * 100}vh` }}>
          <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
            {SECTORS.map((s, i) => (
              <div key={i} aria-hidden={activeSector !== i} style={{ position: "absolute", inset: 0, backgroundColor: s.bg, backgroundImage: `linear-gradient(rgba(15,15,15,.42),rgba(15,15,15,.42)),url(/sectors/${s.img})`, backgroundSize: "cover", backgroundPosition: "center", clipPath: i <= activeSector ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)", transition: "clip-path .9s cubic-bezier(.77,0,.18,1)", willChange: "clip-path" }}></div>
            ))}
            <div aria-hidden key={`num-${activeSector}`} className="sector-swap" style={{ position: "absolute", right: "-2vw", bottom: "-6vw", fontFamily: "Inter Tight", fontWeight: 600, fontSize: "clamp(200px,30vw,420px)", lineHeight: 1, color: "rgba(255,255,255,.12)", userSelect: "none" }}>{SECTORS[activeSector].num}</div>
            <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px clamp(20px,4vw,56px) 40px" }}>
              <div onClick={SECTORS[activeSector].page ? () => go(SECTORS[activeSector].page) : undefined} style={{ background: "#fff", borderRadius: 36, padding: "clamp(28px,3.5vw,52px)", maxWidth: 640, width: "100%", textAlign: "center", boxShadow: "0 40px 100px rgba(0,0,0,.35)", cursor: SECTORS[activeSector].page ? "pointer" : "default" }}>
                <div key={`head-${activeSector}`} className="sector-swap">
                  <div style={{ fontFamily: "Caveat, cursive", fontSize: 24, fontWeight: 600, color: "#D96D00" }}>Sector {SECTORS[activeSector].num}</div>
                  <h3 style={{ fontFamily: "Inter Tight", fontWeight: 600, fontSize: "clamp(26px,3vw,40px)", letterSpacing: "-.02em", color: "#191919", marginTop: 8, lineHeight: 1.15 }}>{SECTORS[activeSector].name}</h3>
                </div>
                <div style={{ marginTop: "clamp(18px,2.5vw,30px)", height: "clamp(160px,24vh,240px)", borderRadius: 24, border: "1px solid rgba(25,25,25,.06)", overflow: "hidden", position: "relative" }}>
                  {SECTORS.map((s, i) => (
                    <div key={i} style={{ position: "absolute", inset: 0, backgroundColor: `${s.bg}14`, backgroundImage: `url(/sectors/${s.img})`, backgroundSize: "cover", backgroundPosition: "center", clipPath: i <= activeSector ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)", transition: "clip-path .85s cubic-bezier(.77,0,.18,1) .22s", willChange: "clip-path" }}></div>
                  ))}
                </div>
                <div key={`desc-${activeSector}`} className="sector-swap">
                  <p style={{ marginTop: "clamp(18px,2.5vw,28px)", fontSize: "clamp(14px,1.2vw,16px)", lineHeight: 1.7, color: "#6E6A61", maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>{SECTORS[activeSector].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "clamp(50px,6vw,80px) clamp(20px,4vw,56px)" }}>
          <div data-reveal style={{ textAlign: "center", fontSize: "clamp(18px,2vw,26px)", fontFamily: "Inter Tight", fontWeight: 500, color: "#46433C", maxWidth: 900, margin: "0 auto", lineHeight: 1.5 }}>Wherever people work, learn, heal, live, or connect, Catalyst creates environments that enable well-being, inspire performance, and deliver lasting value.</div>
        </div>
      </section>

      {/* Foundations / Metrics */}
      <section style={{ padding: "clamp(90px,11vw,150px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 60 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Our Foundations</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,4vw,52px)", color: "#191919" }}>People are at the heart of every great experience</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>At Catalyst, our foundations define how we create value and deliver impact. This belief drives our commitment to operational excellence, inspires our approach to innovation, and shapes our responsibility towards people, communities, and the environment.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }} data-metricgrid>
            {[["XX+", "Years", "Delivering integrated solutions across diverse industries.", "1"], ["XX+", "Locations", "Supporting organizations across India.", "2"], ["XX,XXX+", "Workforce", "Driving excellence through skilled and dedicated professionals.", "3"], ["XX+", "Client Partnerships", "Built on trust, performance, and long-term collaboration.", "4"], ["XX M+", "Meals Served Annually", "Nourishing workplaces, communities, and institutions every day.", ""], ["XX M+", "Sq. Ft. Managed", "Maintaining safe, efficient, and high-performing environments.", "1"], ["XX+", "Healthcare Assets Managed", "Supporting reliable healthcare operations and patient care.", "2"], ["XX+", "Infrastructure & Community Projects", "Contributing to sustainable growth and resilient ecosystems.", "3"]].map(([num, label, desc, delay], i) => (
              <div key={i} data-reveal data-delay={delay || undefined} className="lift" style={{ background: "#fff", border: "1px solid rgba(25,25,25,.07)", borderRadius: 28, padding: 30, boxShadow: "0 8px 30px rgba(25,25,25,.04)" }}>
                <div className="counter" style={{ fontFamily: "Inter Tight", fontSize: 42, fontWeight: 600, background: "#FF7F00", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{num}</div>
                <div style={{ fontWeight: 600, fontSize: 15, color: "#191919", marginTop: 8 }}>{label}</div>
                <div style={{ fontSize: 13, color: "#6E6A61", marginTop: 4, lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding: "clamp(80px,9vw,120px) 0", background: "#fff", borderTop: "1px solid rgba(25,25,25,.06)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,4vw,56px)" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(44px,5vw,64px)" }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 14, justifyContent: "center" }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>CERTIFICATIONS &amp; ACCREDITATIONS<span style={{ width: 26, height: 2, background: "#43934A" }}></span></div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,44px)", color: "#191919" }}>Built on standards you can trust</h2>
          </div>
        </div>
        <div className="cert-marquee" data-reveal>
          <div className="cert-track">
            {[...CERTS, ...CERTS].map((cert, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, padding: "0 clamp(25px,3vw,45px)", flex: "none", width: "clamp(230px,22vw,280px)" }}>
                {cert.image ? (
                  <img src={cert.image} alt={cert.name} style={{ height: 135, width: "auto", objectFit: "contain" }} />
                ) : (
                  <div style={{ width: 135, height: 135, borderRadius: "50%", border: `2px solid ${cert.color}`, background: `${cert.color}14`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, padding: 16, textAlign: "center", flex: "none" }}>
                    <span style={{ fontFamily: "Inter Tight", fontWeight: 600, fontSize: 16, lineHeight: 1.15, color: "#191919" }}>{cert.name.split(":")[0]}</span>
                    <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: ".12em", color: cert.color }}>CERTIFIED</span>
                  </div>
                )}
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "Inter Tight", fontWeight: 600, fontSize: 17, color: "#191919" }}>{cert.name}</div>
                  <div style={{ fontSize: 13, color: "#6E6A61", marginTop: 4 }}>{cert.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Presence */}
      <section style={{ padding: "clamp(80px,10vw,130px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 680, marginBottom: 56 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Our Presence</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,4vw,52px)", color: "#191919" }}>Delivering Impact Across Borders</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>Present across India, the Middle East, and Southeast Asia, Catalyst brings integrated expertise to diverse environments worldwide.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: "clamp(30px,5vw,60px)", alignItems: "start" }} data-2col>

            {/* LEFT — Interactive Cobe Globe */}
            <div data-reveal style={{ borderRadius: 24, overflow: "hidden", background: "#fff", boxShadow: "0 20px 60px rgba(0,0,0,.08)", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(16px,3vw,40px)" }}>
              <div style={{ width: "100%", maxWidth: 550, aspectRatio: "1" }}>
                <Globe
                  markers={[
                    { id: "india", location: [20.6, 78.96], label: "India" },
                    { id: "dubai", location: [25.2, 55.27], label: "Dubai, UAE" },
                    { id: "singapore", location: [1.35, 103.82], label: "Singapore" },
                  ]}
                  markerColor={[1, 0.498, 0]}
                  baseColor={[1, 1, 1]}
                  glowColor={[0.9, 0.9, 0.9]}
                  dark={0}
                  mapBrightness={10}
                  markerSize={0.07}
                  markerElevation={0.01}
                  speed={0.002}
                  initialPhi={1.5}
                  theta={0.3}
                  diffuse={1.2}
                  mapSamples={16000}
                />
              </div>
            </div>

            {/* RIGHT — Country cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {PRESENCE_DATA.map((country) => {
                const active = activePresence === country.id;
                return (
                  <div key={country.id} onClick={() => setActivePresence(country.id)} style={{ background: "#fff", border: `2px solid ${active ? country.color : "rgba(25,25,25,.08)"}`, borderRadius: 22, padding: "20px 22px", cursor: "pointer", transition: "border-color .25s, box-shadow .25s", boxShadow: active ? `0 6px 24px ${country.color}28` : "0 2px 8px rgba(0,0,0,.04)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 30 }}>{country.flag}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "Inter Tight", fontWeight: 700, fontSize: 17, color: "#191919" }}>{country.name}</div>
                        <div style={{ fontSize: 12, color: "#6E6A61", marginTop: 2, letterSpacing: ".06em" }}>{country.region}</div>
                      </div>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: active ? country.color : "rgba(25,25,25,.15)", transition: "background .25s" }}></div>
                    </div>
                    {active && (
                      <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid rgba(25,25,25,.07)" }}>
                        <p style={{ fontSize: 14, lineHeight: 1.65, color: "#46433C", margin: 0 }}>{country.desc}</p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
                          {country.offices.map((city, i) => (
                            <span key={i} style={{ padding: "4px 12px", borderRadius: 20, background: `${country.color}14`, border: `1px solid ${country.color}44`, fontSize: 12, fontWeight: 500, color: country.color }}>{city}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Summary stat */}
              <div style={{ background: "#191919", borderRadius: 22, padding: "20px 22px", marginTop: 4 }}>
                <div style={{ display: "flex", gap: 20, justifyContent: "space-around" }}>
                  {[["3", "Countries"], ["2", "Continents"], ["6+", "Key Cities"]].map(([num, label], i) => (
                    <div key={i} style={{ textAlign: "center" }}>
                      <div style={{ fontFamily: "Inter Tight", fontWeight: 700, fontSize: 28, color: "#FF7F00" }}>{num}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", marginTop: 2, letterSpacing: ".08em" }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTA go={go} title="Let's Create Impact Together" subtitle="" primaryLabel="Partner With Us →" primaryPage="contact" secondaryLabel="Explore Sectors" secondaryPage="sectors" image={partnerImg} />
    </div>
  );
}
