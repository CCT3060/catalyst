import CTA from "../components/CTA";
import staffingBg from "../assets/12.png";
import strategyImg from "../assets/workforce_strategy_1784028590821.png";
import planningImg from "../assets/workforce_planning_1784028602430.png";
import payrollImg from "../assets/workforce_payroll_1784028619619.png";
import futureImg from "../assets/workforce_future_1784028629761.png";

export default function Workforce({ go }) {
  return (
    <div data-screen-label="Staffing Solutions">
      <section style={{ position: "relative", backgroundColor: "#191919", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.48), rgba(25, 25, 25, 0.7)), url(${staffingBg})`, backgroundSize: "cover", backgroundPosition: "center", padding: "170px clamp(20px,4vw,56px) clamp(70px,8vw,110px)", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(circle at 55% 30%,#000,transparent 75%)" }}></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", width: "100%" }}>
          <div data-reveal className="shown" style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 22 }}><span style={{ fontSize: 18 }}></span> STAFFING SOLUTIONS</div>
          <h1 data-reveal data-delay="1" className="shown" style={{ fontSize: "clamp(36px,5.4vw,76px)", color: "#fff", maxWidth: 1000 }}>Building Capable <span className="gradtext">Teams</span></h1>
          <button data-reveal data-delay="2" className="shown mag" onClick={() => go("contact")} style={{ marginTop: 34, background: "#FF7F00", color: "#fff", fontWeight: 600, fontSize: 15, padding: "15px 30px", borderRadius: 999 }}>Talk to our team →</button>
        </div>
      </section>

      {/* Intro Description */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h3 data-reveal style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919", marginBottom: 24 }}>Strengthening Business Performance.</h3>
          <p data-reveal data-delay="1" style={{ fontSize: 18, lineHeight: 1.7, color: "#6E6A61", marginBottom: 16 }}>Behind every successful organization is a workforce equipped to adapt, perform, and grow. As businesses evolve, finding the right talent is only part of the equation. Sustaining productivity, ensuring compliance, and building workforce resilience require a strategic approach that goes beyond traditional staffing.</p>
          <p data-reveal data-delay="2" style={{ fontSize: 18, lineHeight: 1.7, color: "#6E6A61" }}>At Catalyst, we partner with organizations to develop workforce solutions that align with business objectives, operational demands, and long-term growth. From sourcing skilled professionals to managing workforce administration and compliance, every engagement is designed to help organizations remain agile, productive, and ready for the future.</p>
        </div>
      </section>

      {/* Why Workforce Strategy Matters */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div data-reveal style={{position:"relative",borderRadius:36,overflow:"hidden",minHeight:420,background:"linear-gradient(160deg,#FF7F00,#191919)"}}>
            <img src={strategyImg} alt="Workforce Strategy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{position:"absolute",left:24,bottom:24,right:24,padding:"18px 22px",borderRadius:22,background:"rgba(25,25,25,.5)",backdropFilter:"blur(12px)",color:"#fff",fontSize:14,fontWeight:500}}>Strategy · Productivity · Resilience</div>
          </div>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Why Workforce Strategy Matters</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>A Competitive Advantage</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>A strong workforce is one of an organization's greatest competitive advantages. The right skills, deployed at the right time, improve operational efficiency, strengthen customer experiences, and support sustainable growth.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>Strategic workforce planning creates stability, reduces business risk, and enables organizations to respond confidently to changing market demands.</p>
          </div>
        </div>
      </section>

      {/* Our Staffing Solutions */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Our Solutions</div>
          <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919", marginBottom: 40 }}>Our Staffing Solutions</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
            {[
              ["Permanent Staffing", "Connecting organizations with skilled professionals who align with business goals, culture, and long-term growth strategies.", "👤"],
              ["Temporary & Contract Staffing", "Flexible workforce solutions that help businesses scale operations, manage seasonal demand, and support project-based requirements with confidence.", "📋"],
              ["Industrial Staffing", "Reliable staffing support for manufacturing, engineering, pharmaceuticals, automotive, chemical, and power industries where operational continuity is critical.", "🏭"],
              ["Corporate Staffing", "Professional talent for administrative, technical, operational, and leadership functions across diverse business environments.", "🏢"],
              ["Workforce Planning", "Strategic resource planning that aligns workforce capabilities with evolving business priorities, ensuring the right skills are available at the right time.", "📈"],
              ["Payroll & Compliance Management", "Comprehensive payroll administration and statutory compliance services that simplify workforce management while reducing administrative complexity.", "✅"],
              ["Recruitment Process Support", "Structured hiring processes that streamline talent acquisition, improve candidate experience, and accelerate workforce onboarding.", "🔍"]
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

      {/* Workforce Planning */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div data-reveal style={{position:"relative",borderRadius:36,overflow:"hidden",minHeight:420,background:"linear-gradient(160deg,#191919,#282828)"}}>
            <img src={planningImg} alt="Workforce Planning" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Workforce Planning</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Planning Today for Tomorrow's Workforce</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Business priorities change, markets evolve, and workforce requirements continue to grow more specialized. Catalyst helps organizations anticipate these changes through strategic workforce planning that combines skill mapping, resource forecasting, and deployment strategies with long-term business objectives.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>Rather than reacting to workforce gaps, organizations gain the confidence to build capable teams that support operational continuity and sustainable growth.</p>
            <p data-reveal data-delay="4" style={{ marginTop: 16, fontSize: 17, fontWeight: 500, color: "#191919" }}>The strongest organizations don't simply hire talent—they plan for capability.</p>
          </div>
        </div>
      </section>

      {/* Payroll & Compliance */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div style={{ order: 2 }} data-reveal>
            <div style={{position:"relative",borderRadius:36,overflow:"hidden",minHeight:420,background:"linear-gradient(160deg,#43934A,#2b6330)"}}>
              <img src={payrollImg} alt="Payroll & Compliance" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div style={{ order: 1 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#377B3D", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#43934A" }}></span>Payroll & Compliance</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Confidence in Every Process</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Managing a workforce extends far beyond recruitment. Accurate payroll, statutory compliance, documentation, and regulatory requirements all contribute to a well-governed organization.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>Catalyst simplifies workforce administration through structured payroll management and compliance support, helping businesses reduce risk, improve accuracy, and maintain confidence in every stage of the employee lifecycle.</p>
          </div>
        </div>
      </section>

      {/* Building Future-Ready Teams */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div data-reveal style={{position:"relative",borderRadius:36,overflow:"hidden",minHeight:420,background:"#191919"}}>
            <img src={futureImg} alt="Future-Ready Teams" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Building Future-Ready Teams</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Preparing Organizations for the Future of Work</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Workplaces continue to evolve, bringing new expectations, emerging skill requirements, and changing ways of working. Catalyst embraces modern recruitment practices, skill-based assessments, workforce insights, and continuous capability development to help organizations remain prepared for tomorrow's challenges.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>By combining industry expertise with a forward-looking approach, we help businesses build adaptable teams that are ready to perform in a dynamic and competitive environment.</p>
            <p data-reveal data-delay="4" style={{ marginTop: 16, fontSize: 17, fontWeight: 500, color: "#191919" }}>Future-ready organizations begin with future-ready teams.</p>
          </div>
        </div>
      </section>

      {/* Industries We Support */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#191919", color: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Industries We Support</div>
          <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)" }}>Tailored for Every Sector</h2>
          <p data-reveal data-delay="2" style={{ maxWidth: 700, margin: "22px auto 40px", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,.7)" }}>Every industry has unique workforce challenges. Our staffing solutions are tailored to meet the operational, technical, and compliance requirements of diverse sectors.</p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {[
              "Corporate Offices", "IT & ITeS", "Healthcare", "Manufacturing", "Automobiles",
              "Heavy Engineering", "Pharmaceuticals", "Chemical & Ceramics", "Power & Energy",
              "Educational Institutions", "Commercial Facilities", "Infrastructure Projects", "Industrial Operations"
            ].map((industry, i) => (
              <div key={i} data-reveal data-delay={String(Math.min(i % 5, 5))} className="lift" style={{ padding: "12px 24px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 999, fontSize: 15, fontWeight: 500 }}>
                {industry}
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
              ["Strategic Workforce Partnership", "We work alongside organizations to understand business priorities and build workforce strategies that support long-term success."],
              ["Industry-Focused Expertise", "Our understanding of diverse industries enables us to identify professionals with the skills and experience required for specialized operational environments."],
              ["Compliance with Confidence", "Robust payroll administration and statutory compliance processes help organizations manage workforce responsibilities with accuracy and transparency."],
              ["Flexible Workforce Models", "Scalable staffing solutions adapt to changing business needs, supporting everything from project-based hiring to long-term workforce expansion."],
              ["Quality-Driven Talent Acquisition", "A structured recruitment approach emphasizes capability, cultural alignment, and long-term value rather than simply filling vacancies."],
              ["Long-Term Workforce Value", "Every engagement is built around strengthening workforce capability, supporting business continuity, and creating lasting organizational impact."]
            ].map(([title, desc], i) => (
              <div key={i} data-reveal data-delay={String(Math.min(i % 3, 3))} className="lift" style={{ background: "#fff", border: "1px solid rgba(25,25,25,.07)", borderRadius: 24, padding: 32 }}>
                <h4 style={{ fontSize: 18, fontWeight: 600, color: "#191919", marginBottom: 12 }}>{title}</h4>
                <p style={{ fontSize: 15, color: "#6E6A61", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Workforces That Drive Progress */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Building Workforces That Drive Progress</div>
          <p data-reveal data-delay="1" style={{ marginTop: 24, fontSize: 18, lineHeight: 1.7, color: "#6E6A61" }}>The strength of an organization lies in the capability of its workforce. Whether supporting large industrial operations, expanding corporate teams, or managing specialized talent requirements, Catalyst partners with organizations to build skilled, dependable, and future-ready workforces that contribute to sustained business performance and long-term success.</p>
        </div>
      </section>

      <CTA
        go={go}
        title="Build Teams Ready for What's Next"
        subtitle="STAFFING SOLUTIONS"
        primaryLabel="Explore Staffing Solutions"
        primaryPage="contact"
        secondaryLabel="Connect with Our Workforce Experts"
        secondaryPage="contact"
      />
    </div>
  );
}
