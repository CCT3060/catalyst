import CTA from "../components/CTA";
import healthcareBg from "../assets/Gemini_Generated_Image_sf1puasf1puasf1p.png";
import constructionImg from "../assets/Screenshot 2026-07-13 161017.png"
import complaintImg from "../assets/image.png";
import img from "../assets/d5e77d7fc54915ea01a1790a7111c9cc.jpg"

export default function HealthcareTech({ go }) {
  return (
    <div data-screen-label="Healthcare Solutions">
      <section style={{ position: "relative", backgroundColor: "#191919", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(25, 25, 25, 0.7)), url(${healthcareBg})`, backgroundSize: "cover", backgroundPosition: "center", padding: "170px clamp(20px,4vw,56px) clamp(70px,8vw,110px)", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", width: "100%" }}>
          <div data-reveal className="shown" style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 22 }}><span style={{ fontSize: 18 }}></span> HEALTHCARE SOLUTIONS</div>
          <h1 data-reveal data-delay="1" className="shown" style={{ fontSize: "clamp(34px,5vw,72px)", color: "#fff", maxWidth: 1000 }}>Technology That Supports <span className="gradtext">Better Care</span></h1>
          <button data-reveal data-delay="2" className="shown mag" onClick={() => go("contact")} style={{ marginTop: 34, background: "#FF7F00", color: "#fff", fontWeight: 600, fontSize: 15, padding: "15px 30px", borderRadius: 999 }}>Talk to our team →</button>
        </div>
      </section>

      {/* Intro Description */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h3 data-reveal style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919", marginBottom: 24 }}>Expertise That Strengthens Every Hospital.</h3>
          <p data-reveal data-delay="1" style={{ fontSize: 18, lineHeight: 1.7, color: "#6E6A61", marginBottom: 16 }}>Exceptional healthcare depends on more than advanced medical equipment—it depends on technology that is available, reliable, and expertly managed throughout its lifecycle. Catalyst partners with healthcare institutions to optimize medical technology, improve operational efficiency, and support clinical teams with intelligent Healthcare Technology Management services.</p>
          <p data-reveal data-delay="2" style={{ fontSize: 18, lineHeight: 1.7, color: "#6E6A61" }}>Through structured asset management, responsive engineering support, and digital service intelligence, we help hospitals maximize equipment performance while enabling safer care, stronger operational control, and better patient outcomes.</p>
        </div>
      </section>

      {/* Our Healthcare Technology Services */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Our Services</div>
          <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919", marginBottom: 40 }}>Our Healthcare Technology Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
            {[
              ["Medical Asset Management", "Gain complete visibility into every medical asset with centralized tracking, lifecycle planning, utilization monitoring, and maintenance management that support informed operational decisions.", "🩻"],
              ["Complaint Management", "A structured digital complaint management system enables faster issue reporting, transparent service tracking, and timely resolution to minimize equipment downtime.", "📱"],
              ["Preventive & Corrective Maintenance", "Proactive maintenance programs and responsive engineering support improve equipment reliability, extend asset life, and reduce operational interruptions.", "🔧"],
              ["Clinical Engineering Support", "Dedicated technical expertise supports hospitals with equipment assessments, performance optimization, regulatory compliance, and technology planning.", "🧬"]
            ].map(([title, desc, icon], i) => (
              <div key={i} data-reveal data-delay={String(Math.min(i % 4, 3))} className="lift" style={{ background: "#fff", border: "1px solid rgba(25,25,25,.07)", borderRadius: 24, padding: 32 }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{icon}</div>
                <h4 style={{ fontSize: 18, fontWeight: 600, color: "#191919", marginBottom: 12 }}>{title}</h4>
                <p style={{ fontSize: 15, color: "#6E6A61", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Asset Management */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div data-reveal style={{ position: "relative", borderRadius: 36, overflow: "hidden", minHeight: 420 }}>
            <div data-reveal style={{ position: "relative", minHeight: 420, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={constructionImg} alt="Medical Asset Management" style={{ width: "100%", maxHeight: 520, objectFit: "contain", borderRadius: 24, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }} />
            </div>
          </div>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Medical Asset Management</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Every Asset Accounted For. Every Decision Informed.</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Medical technology represents one of a hospital's most valuable investments. Catalyst's Asset Management approach provides complete visibility into equipment location, performance, maintenance history, utilization, and lifecycle status.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>This enables healthcare leaders to improve planning, optimize investments, and ensure critical devices remain available whenever needed.</p>
            <p data-reveal data-delay="4" style={{ marginTop: 16, fontSize: 17, fontWeight: 500, color: "#191919" }}>Visibility transforms medical assets into strategic healthcare resources.</p>
          </div>
        </div>
      </section>

      {/* Complaint Management */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div style={{ order: 2 }} data-reveal>
            <div style={{ position: "relative", minHeight: 420, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
              <div style={{ border: "10px solid #191919", borderRadius: 40, overflow: "hidden", boxShadow: "0 25px 50px rgba(0,0,0,0.15)", width: "100%", maxWidth: 280, maxHeight: "700px", aspectRatio: "9/19.5", backgroundColor: "#fff" }}>
                <img src={complaintImg} alt="Complaint Management" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
              </div>
            </div>
          </div>
          <div style={{ order: 1 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#377B3D", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#43934A" }}></span>Complaint Management</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Rapid Response. Reliable Support.</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>When medical equipment requires attention, every minute matters. Our Complaint Management platform streamlines issue reporting, tracks service requests in real time, and ensures faster resolution through structured workflows and transparent communication.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>The result is improved equipment availability and greater confidence for clinical teams.</p>
          </div>
        </div>
      </section>

      {/* Smart Healthcare Operations */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div data-reveal style={{ position: "relative", borderRadius: 36, overflow: "hidden", minHeight: 420 }}>
            <div data-reveal style={{ position: "relative", minHeight: 420, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={img} alt="Construction" style={{ width: "100%", maxHeight: 520, objectFit: "contain" }} />
            </div>
          </div>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Smart Healthcare Operations</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Digital Intelligence for Smarter Hospitals</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Digital dashboards, asset tracking, maintenance schedules, performance reports, and operational analytics provide healthcare teams with a connected view of their technology ecosystem.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>These insights simplify planning, strengthen compliance, and improve the overall efficiency of hospital operations.</p>
          </div>
        </div>
      </section>

      {/* Beyond Healthcare Technology */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#191919", color: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Beyond Healthcare Technology</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)" }}>Integrated Expertise for Better Care</h2>
            <p data-reveal data-delay="2" style={{ maxWidth: 700, margin: "22px auto 0", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,.7)" }}>Healthcare excellence requires more than well-managed equipment. It demands integrated expertise across planning, operations, and patient support. Catalyst brings together specialized capabilities that strengthen every stage of the healthcare journey.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
            {[
              ["Hospital Consulting", "Strategic solutions for better care outcomes.", "From operational assessments and workflow optimization to healthcare planning and advisory services, Catalyst works alongside healthcare leaders to improve efficiency, patient experience, and long-term institutional performance."],
              ["Healthcare Projects", "Designing healthcare infrastructure for tomorrow.", "Our project teams support the planning and execution of healthcare facilities with a focus on functionality, compliance, operational readiness, and future scalability—creating environments built around the evolving needs of modern healthcare."],
              ["Integrated Food & Facility Management", "Creating safe, efficient environments that enable wellbeing.", "Healthcare extends beyond clinical spaces. Catalyst delivers integrated facility management, patient dining, housekeeping, infection-control support, and workplace services that help hospitals maintain safe, hygienic, and patient-focused environments aligned with NABH and JCI expectations."]
            ].map(([title, subtitle, desc], i) => (
              <div key={i} data-reveal data-delay={String(Math.min(i % 3, 3))} className="lift" style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 24, padding: 32 }}>
                <h4 style={{ fontSize: 18, fontWeight: 600, color: "#fff", marginBottom: 8 }}>{title}</h4>
                <div style={{ fontSize: 15, fontWeight: 500, color: "#FF7F00", marginBottom: 16 }}>{subtitle}</div>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,.7)", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Catalyst */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#377B3D", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#43934A" }}></span>Why Catalyst</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>The Catalyst Advantage</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 24 }}>
            {[
              ["Integrated Healthcare Expertise", "A comprehensive approach that brings together technology, infrastructure, operations, and support services under one trusted partner."],
              ["Lifecycle-Focused Asset Management", "Structured lifecycle planning helps maximize equipment performance, utilization, and long-term value."],
              ["Intelligent Service Management", "Digital asset visibility, complaint management, and performance reporting support informed operational decisions."],
              ["Clinical Engineering Excellence", "Experienced technical professionals work closely with healthcare teams to maintain reliable and compliant medical technology."],
              ["Future-Ready Healthcare Infrastructure", "From hospital consulting to project execution, every solution is designed with long-term operational success in mind."],
              ["A Partner in Better Care", "Our focus extends beyond maintaining equipment—we help healthcare organizations build environments where technology, infrastructure, and support services work together to improve patient outcomes."]
            ].map(([title, desc], i) => (
              <div key={i} data-reveal data-delay={String(Math.min(i % 3, 3))} className="lift" style={{ background: "#fff", border: "1px solid rgba(25,25,25,.07)", borderRadius: 24, padding: 32 }}>
                <h4 style={{ fontSize: 18, fontWeight: 600, color: "#191919", marginBottom: 12 }}>{title}</h4>
                <p style={{ fontSize: 15, color: "#6E6A61", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Better Care Through Integrated Healthcare Solutions */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Supporting Better Care Through Integrated Healthcare Solutions</div>
          <p data-reveal data-delay="1" style={{ marginTop: 24, fontSize: 18, lineHeight: 1.7, color: "#6E6A61" }}>Healthcare performs at its best when technology, infrastructure, and operational services work as one. By bringing together Healthcare Technology Management, Hospital Consulting, Healthcare Projects, and Integrated Food & Facility Management, Catalyst helps healthcare institutions create safer environments, strengthen clinical performance, and deliver exceptional care with confidence.</p>
        </div>
      </section>

      <CTA
        go={go}
        title="Empowering Better Care Through Smarter Technology"
        subtitle="HEALTHCARE TECHNOLOGY MANAGEMENT"
        primaryLabel="Explore Healthcare Technology Management"
        primaryPage="contact"
        secondaryLabel="Speak with Our Healthcare Experts"
        secondaryPage="contact"
      />
    </div>
  );
}
