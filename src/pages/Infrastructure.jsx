import CTA from "../components/CTA";
import infrastructureBg from "../assets/INFRASTRUCTURE SOLUTIONS.png";
import whyInfrastructureBg from "../assets/Why Infrastructure Matters.webp";
import constructionImg from "../assets/residential-building-under-construction-on-transparent-background-png.png";
import projectmanagementImg from "../assets/1c52bb738447fe1f3b8f8e001976c713.jpg";
import innovation from "../assets/86de25bf5b2b497bb8be816e43e60bc0.webp";
import { i } from "framer-motion/client";
export default function Infrastructure({ go }) {
  return (
    <div data-screen-label="Infrastructure Solutions">
      <section style={{ position: "relative", backgroundColor: "#191919", backgroundImage: `linear-gradient(  rgba(0, 0, 0, 0.57), rgba(25, 25, 25, 0.7)), url(${infrastructureBg})`, backgroundSize: "cover", backgroundPosition: "center", padding: "170px clamp(20px,4vw,56px) clamp(70px,8vw,110px)", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(circle at 55% 30%,#000,transparent 75%)" }}></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", width: "100%" }}>
          <div data-reveal className="shown" style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 22 }}><span style={{ fontSize: 18 }}></span> INFRASTRUCTURE SOLUTIONS</div>
          <h1 data-reveal data-delay="1" className="shown" style={{ fontSize: "clamp(36px,5.2vw,74px)", color: "#fff", maxWidth: 1000 }}>Building Foundations for <span className="gradtext">Progress</span></h1>
          <button data-reveal data-delay="2" className="shown mag" onClick={() => go("contact")} style={{ marginTop: 34, background: "#FF7F00", color: "#fff", fontWeight: 600, fontSize: 15, padding: "15px 30px", borderRadius: 999 }}>Talk to our team →</button>
        </div>
      </section>

      {/* Intro Description */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h3 data-reveal style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919", marginBottom: 24 }}>Delivering Infrastructure That Endures.</h3>
          <p data-reveal data-delay="1" style={{ fontSize: 18, lineHeight: 1.7, color: "#6E6A61", marginBottom: 16 }}>Infrastructure is more than construction—it is the foundation of growth, operational excellence, and long-term success. Every project has the potential to shape how organizations operate, collaborate, and evolve. At Catalyst, we bring together engineering expertise, disciplined project execution, and practical insight to develop infrastructure that is functional, resilient, and built for the future.</p>
          <p data-reveal data-delay="2" style={{ fontSize: 18, lineHeight: 1.7, color: "#6E6A61" }}>From industrial facilities and commercial developments to healthcare institutions and corporate campuses, our integrated approach ensures every project is delivered with precision, quality, and a clear focus on operational readiness.</p>
        </div>
      </section>

      {/* Why Infrastructure Matters */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div data-reveal style={{ position: "relative", borderRadius: 36, overflow: "hidden", minHeight: 420, background: `url(${whyInfrastructureBg}) center/cover no-repeat` }}>
            <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.15)" }}></div>
          </div>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Why Infrastructure Matters</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Enabling Productivity and Continuity</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Strong infrastructure creates more than physical spaces—it enables productivity, supports business continuity, and enhances the way organizations function every day.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>Thoughtfully executed projects improve efficiency, strengthen operational performance, and provide the flexibility to meet future demands with confidence.</p>
          </div>
        </div>
      </section>

      {/* Our Infrastructure Solutions */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Our Solutions</div>
          <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919", marginBottom: 40 }}>Our Infrastructure Solutions</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
            {[
              ["Construction Services", "Comprehensive construction solutions that combine engineering expertise, quality craftsmanship, and disciplined execution to deliver projects that are built to perform from day one.", "🏗️"],
              ["Industrial Infrastructure", "Infrastructure designed for manufacturing plants, heavy engineering, automobile, pharmaceutical, chemical, and power industries, supporting operational efficiency and long-term growth.", "🏭"],
              ["Commercial Infrastructure", "Modern office buildings, business parks, commercial spaces, and mixed-use developments designed to deliver functionality, efficiency, and exceptional user experiences.", "🏢"],
              ["Healthcare Infrastructure", "Specialized infrastructure for hospitals and healthcare facilities that supports clinical workflows, patient safety, and operational excellence.", "🏥"],
              ["Institutional Infrastructure", "Functional environments for educational institutions, research centres, and public facilities that encourage learning, collaboration, and community engagement.", "🏛️"],
              ["Interior Fit-outs & Renovation", "Transforming existing spaces through thoughtful renovations, interior development, and modernization that improve both functionality and aesthetics.", "🛋️"],
              ["Project Management", "End-to-end project coordination covering planning, execution, quality control, scheduling, and stakeholder management to ensure timely and efficient delivery.", "📋"]
            ].map(([title, desc, icon], i) => (
              <div key={i} data-reveal data-delay={String(Math.min(i % 3, 3))} className="lift" style={{ background: "#fff", border: "1px solid rgba(25,25,25,.07)", borderRadius: 24, padding: 32 }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{icon}</div>
                <h4 style={{ fontSize: 18, fontWeight: 600, color: "#191919", marginBottom: 12 }}>{title}</h4>
                <p style={{ fontSize: 15, color: "#6E6A61", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div data-reveal style={{ position: "relative", minHeight: 420, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={constructionImg} alt="Construction" style={{ width: "100%", maxHeight: 520, objectFit: "contain" }} />
          </div>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Construction</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Built with Precision. Delivered with Purpose.</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Every successful project begins with careful planning and disciplined execution. Catalyst approaches construction with a focus on quality, safety, coordination, and operational readiness, ensuring each development is completed to the highest standards while meeting project timelines and business objectives.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>By bringing together experienced professionals, structured processes, and collaborative project management, we create infrastructure that is ready to support operations from the moment it is handed over.</p>
            <p data-reveal data-delay="4" style={{ marginTop: 16, fontSize: 17, fontWeight: 500, color: "#191919" }}>Every structure is built not only to stand strong, but to perform with purpose.</p>
          </div>
        </div>
      </section>

      {/* Engineering & Project Management */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div style={{ order: 2 }} data-reveal>
            <img src={projectmanagementImg} alt="Construction" style={{ width: "100%", maxHeight: 520, objectFit: "contain" }} />
          </div>
          <div style={{ order: 1 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#377B3D", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#43934A" }}></span>Engineering & Project Management</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Planning Every Detail. Managing Every Milestone.</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Successful infrastructure is shaped long before construction begins. Our project management approach integrates engineering coordination, design reviews, scheduling, vendor management, quality assurance, and progress monitoring into a seamless delivery framework.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>Through proactive planning and continuous collaboration, projects move forward with greater efficiency, improved visibility, and consistent execution at every stage.</p>
          </div>
        </div>
      </section>

      {/* Innovation */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div data-reveal style={{ position: "relative", borderRadius: 36, overflow: "hidden", minHeight: 420 }}>
            <img src={innovation} alt="Construction" style={{ width: "130%", maxHeight: 520, objectFit: "contain" }} />
          </div>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Innovation</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Engineering Smarter Infrastructure</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Progress is driven by continuous improvement. Catalyst embraces modern construction methodologies, digital project monitoring, advanced planning tools, and efficient engineering practices to enhance project delivery and operational performance.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>Innovation is reflected in streamlined workflows, collaborative execution, and practical solutions that improve quality, optimize resources, and create infrastructure capable of adapting to evolving business needs.</p>
            <p data-reveal data-delay="4" style={{ marginTop: 16, fontSize: 17, fontWeight: 500, color: "#191919" }}>Innovation transforms projects into infrastructure that delivers lasting value.</p>
          </div>
        </div>
      </section>

      {/* Industries We Support */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#191919", color: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Industries We Support</div>
          <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)" }}>Tailored for Every Sector</h2>
          <p data-reveal data-delay="2" style={{ maxWidth: 700, margin: "22px auto 40px", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,.7)" }}>Every industry presents unique infrastructure requirements. Our expertise spans a diverse range of sectors, delivering projects tailored to operational priorities and future growth.</p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {[
              "Healthcare & Hospitals", "Commercial Offices", "Corporate Campuses", "Industrial Facilities", "Manufacturing",
              "Automobiles", "Heavy Engineering", "Pharmaceuticals", "Chemical & Ceramics", "Power & Energy",
              "Educational Institutions", "Hospitality", "Mixed-Use Developments", "Institutional Projects"
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
              ["Integrated Project Delivery", "From concept to completion, every stage is managed through a coordinated approach that ensures consistency, transparency, and accountability."],
              ["Engineering Expertise", "Experienced teams combine technical knowledge with practical execution to deliver infrastructure that performs reliably for years to come."],
              ["Quality & Safety", "Every project follows rigorous quality standards and safety practices, ensuring dependable outcomes without compromising execution."],
              ["Efficient Project Management", "Structured planning, proactive coordination, and disciplined monitoring keep projects aligned with timelines, budgets, and operational goals."],
              ["Collaborative Partnerships", "We work closely with stakeholders, consultants, and project teams to build lasting relationships founded on trust, communication, and shared success."],
              ["Future-Ready Thinking", "Our infrastructure is planned with adaptability in mind, supporting evolving operational requirements and long-term organizational growth."]
            ].map(([title, desc], i) => (
              <div key={i} data-reveal data-delay={String(Math.min(i % 3, 3))} className="lift" style={{ background: "#fff", border: "1px solid rgba(25,25,25,.07)", borderRadius: 24, padding: 32 }}>
                <h4 style={{ fontSize: 18, fontWeight: 600, color: "#191919", marginBottom: 12 }}>{title}</h4>
                <p style={{ fontSize: 15, color: "#6E6A61", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Infrastructure That Creates Lasting Value */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Building Infrastructure That Creates Lasting Value</div>
          <p data-reveal data-delay="1" style={{ marginTop: 24, fontSize: 18, lineHeight: 1.7, color: "#6E6A61" }}>Great infrastructure is measured by the opportunities it enables long after construction is complete. Whether developing industrial facilities, commercial spaces, healthcare environments, or institutional campuses, Catalyst partners with organizations to deliver infrastructure that combines engineering excellence, operational efficiency, and enduring value.</p>
        </div>
      </section>

      <CTA
        go={go}
        title="Transforming Vision into Lasting Infrastructure"
        subtitle="INFRASTRUCTURE SOLUTIONS"
        primaryLabel="Explore Infrastructure Solutions"
        primaryPage="contact"
        secondaryLabel="Start Your Next Project"
        secondaryPage="contact"
      />
    </div>
  );
}
