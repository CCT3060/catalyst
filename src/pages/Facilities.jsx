import CTA from "../components/CTA";
import fmImage from "../assets/fm.png";
import smartOpsImg from "../assets/image copy.png";
import commercialImg from "../assets/image copy 2.png";
import innovationImg from "../assets/Gemini_Generated_Image_e5koqpe5koqpe5ko.png";

export default function Facilities({ go }) {
  return (
    <div data-screen-label="Facility Management Solutions">
      <section style={{ position: "relative", background: "#191919", minHeight: "100vh", display: "flex", alignItems: "center", padding: "160px clamp(20px,4vw,56px) clamp(80px,10vw,140px)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${fmImage})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.4 }}></div>
        <div style={{ position: "absolute", inset: 0, background: "" }}></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", width: "100%" }}>
          <div style={{ maxWidth: 800 }}>
            <div data-reveal className="shown" style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 22 }}><span style={{ fontSize: 18 }}></span> FACILITY MANAGEMENT SOLUTIONS</div>
            <h1 data-reveal data-delay="1" className="shown" style={{ fontSize: "clamp(34px,5vw,72px)", color: "#fff", lineHeight: 1.1 }}>Creating Environments That <span className="gradtext">Perform Effortlessly</span></h1>
            <button data-reveal data-delay="2" className="shown mag" onClick={() => go("contact")} style={{ marginTop: 34, background: "#FF7F00", color: "#fff", fontWeight: 600, fontSize: 15, padding: "15px 30px", borderRadius: 999 }}>Talk to our team →</button>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(60px,8vw,100px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 data-reveal style={{ fontSize: "clamp(24px,3vw,36px)", color: "#191919", marginBottom: 24, fontWeight: 600 }}>Spaces That Perform. Experiences That Inspire.</h2>
          <p data-reveal data-delay="1" style={{ fontSize: "clamp(17px,1.5vw,20px)", lineHeight: 1.8, color: "#46433C" }}>
            A well-managed facility does more than support daily operations—it shapes first impressions, strengthens productivity, protects assets, and enhances every experience within it. At Catalyst, Facility Management is approached as a strategic function that keeps workplaces, healthcare facilities, industrial sites, educational campuses, and commercial properties operating at their best.
          </p>
          <p data-reveal data-delay="2" style={{ marginTop: 16, fontSize: "clamp(17px,1.5vw,20px)", lineHeight: 1.8, color: "#46433C" }}>
            By combining operational expertise, smart technology, and a hospitality-driven mindset, we deliver environments that are safe, efficient, welcoming, and ready to meet the demands of a rapidly evolving world.
          </p>
        </div>
      </section>

      {/* Our Facility Management Services */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Our Services</div>
          <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919", marginBottom: 40 }}>Our Facility Management Services</h2>
          <style>{`
            .fm-service-card {
              position: relative;
              overflow: hidden;
              border-radius: 24px;
              min-height: 280px;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              padding: 32px;
              background: #191919;
              cursor: pointer;
              box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            }
            .fm-service-card .bg-img {
              position: absolute;
              inset: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.7s ease, opacity 0.5s ease;
              opacity: 0.5;
            }
            .fm-service-card:hover .bg-img {
              transform: scale(1.1);
              opacity: 0.15;
            }
            .fm-service-card .content {
              position: relative;
              z-index: 1;
            }
            .fm-service-card .title {
              font-size: 20px;
              font-weight: 600;
              color: #fff;
              margin: 0;
            }
            .fm-service-card .desc {
              font-size: 15px;
              color: rgba(255,255,255,0.85);
              line-height: 1.6;
              max-height: 0;
              opacity: 0;
              overflow: hidden;
              transition: max-height 0.5s ease, opacity 0.5s ease, margin-top 0.5s ease;
            }
            .fm-service-card:hover .desc {
              max-height: 250px;
              opacity: 1;
              margin-top: 12px;
            }
          `}</style>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
            {[
              ["Integrated Facility Management", "A comprehensive approach that brings together people, processes, and technology to manage facilities with consistency, efficiency, and measurable performance.", "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=600"],
              ["Housekeeping Services", "Professional housekeeping programs that maintain hygiene, cleanliness, and presentation standards across corporate, healthcare, industrial, and institutional environments.", "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600"],
              ["Commercial Property Management", "Integrated management for commercial buildings and business parks, ensuring seamless operations, tenant satisfaction, compliance, and long-term asset value.", "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600"],
              ["Industrial Facility Management", "Reliable support for manufacturing plants, heavy engineering, automobile, pharmaceutical, chemical, and power industries with operations designed for demanding environments.", "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=600"],
              ["Healthcare Facility Management", "Specialized services that support infection prevention, regulatory compliance, patient comfort, and uninterrupted healthcare operations.", "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"],
              ["Educational Campus Management", "Safe, organized, and engaging campus environments that enhance learning experiences while maintaining high standards of cleanliness and operational efficiency.", "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600"],
              ["Technical Support Services", "Preventive maintenance and engineering support that improve equipment reliability, reduce downtime, and optimize building performance.", "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"],
              ["Business Support Services", "Front office, pantry, concierge, mailroom, and workplace support services that contribute to smooth day-to-day operations and exceptional visitor experiences.", "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600"]
            ].map(([title, desc, bgImg], i) => (
              <div key={i} data-reveal data-delay={String(Math.min(i % 4, 3))} className="fm-service-card lift">
                <img src={bgImg} alt={title} className="bg-img" />
                <div className="content">
                  <h4 className="title">{title}</h4>
                  <p className="desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Facility Operations */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div data-reveal style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 320, aspectRatio: "9/19", borderRadius: 44, border: "12px solid #191919", backgroundColor: "#fff", overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.12)" }}>
              {/* Phone Notch */}
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 140, height: 28, backgroundColor: "#191919", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, zIndex: 10 }}></div>
              <img src={smartOpsImg} alt="Smart Facility Operations" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              <div style={{ position: "absolute", left: 16, bottom: 16, right: 16, padding: "16px", borderRadius: 18, background: "rgba(25,25,25,.75)", backdropFilter: "blur(12px)", color: "#fff", fontSize: 13, fontWeight: 500, textAlign: "center", lineHeight: 1.5, zIndex: 20 }}>
                E-Cleaning Checklist<br />Digital audits<br />Real-time reporting
              </div>
            </div>
          </div>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Smart Facility Operations</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Intelligence Behind Every Inspection</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Consistency begins with visibility. Catalyst combines operational expertise with digital tools that simplify inspections, strengthen quality assurance, and improve service accountability.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>Our E-Cleaning Checklist, digital audits, mobile inspections, and real-time reporting provide complete visibility into daily operations. This technology-driven approach enables faster response times, standardized service delivery, and measurable performance across every facility—helping organizations maintain consistently high standards with confidence.</p>
          </div>
        </div>
      </section>

      {/* Commercial Property Management */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div style={{ order: 2 }} data-reveal>
            <div style={{ position: "relative", borderRadius: 36, overflow: "hidden", background: "linear-gradient(160deg,#43934A,#2b6330)" }}>
              <img src={commercialImg} alt="Commercial Property Management" style={{ width: "100%", height: "auto", display: "block", position: "relative", zIndex: 1 }} />
              <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)", backgroundSize: "40px 40px", zIndex: 2, pointerEvents: "none" }}></div>
            </div>
          </div>
          <div style={{ order: 1 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#377B3D", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#43934A" }}></span>Commercial Property Management</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Managing Properties. Enhancing Value.</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Commercial properties require more than routine maintenance—they demand proactive management that balances operational efficiency, tenant satisfaction, regulatory compliance, and long-term asset performance.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>Catalyst provides end-to-end property management for office towers, business parks, mixed-use developments, and corporate campuses, ensuring every facility operates smoothly while delivering an exceptional experience for occupants and visitors alike.</p>
            <p data-reveal data-delay="4" style={{ marginTop: 16, fontSize: 17, fontWeight: 500, color: "#191919" }}>Efficient property management is measured not only by how buildings operate, but by how they are experienced every day.</p>
          </div>
        </div>
      </section>

      {/* Innovation */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div data-reveal style={{ position: "relative", borderRadius: 36, overflow: "hidden" }}>
            <img src={innovationImg} alt="Innovation" style={{ width: "100%", height: "auto", display: "block", position: "relative", zIndex: 1 }} />

          </div>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Innovation</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Rethinking the Future of Facility Management</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Innovation is embedded into the way we manage environments. From our E-Cleaning Checklist and digital quality inspections to smart workforce deployment and modern cleaning technologies, every process is designed to improve efficiency, consistency, and operational control.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>By continuously refining workflows, adopting advanced equipment, and leveraging real-time operational insights, Catalyst delivers facility management that is proactive, transparent, and ready for the future.</p>
            <p data-reveal data-delay="4" style={{ marginTop: 16, fontSize: 17, fontWeight: 500, color: "#191919" }}>Innovation isn't about changing processes—it's about improving every experience those processes support.</p>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#191919", color: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Industries We Serve</div>
          <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)" }}>Tailored for Every Environment</h2>
          <p data-reveal data-delay="2" style={{ maxWidth: 700, margin: "22px auto 40px", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,.7)" }}>Every industry operates differently. Our facility management programs are tailored to the unique operational requirements of each environment.</p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {[
              "Commercial Properties", "Corporate Offices", "Business Parks", "IT & ITeS", "Healthcare & Hospitals",
              "Educational Institutions", "Automobiles", "Heavy Engineering", "Manufacturing", "Pharmaceuticals",
              "Chemical & Ceramics", "Power & Energy", "Industrial Facilities", "Residential Communities"
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
              ["Operational Excellence", "Structured processes, trained teams, and performance-driven execution ensure facilities operate efficiently every day."],
              ["Commercial Property Expertise", "Specialized capabilities in managing commercial assets, enhancing tenant experiences, and maximizing operational value."],
              ["Technology-Enabled Operations", "Digital inspections, E-Cleaning Checklists, and real-time reporting bring greater visibility, consistency, and accountability."],
              ["Hospitality-Led Service Culture", "Every interaction is guided by professionalism, responsiveness, and attention to detail, creating welcoming and well-managed environments."],
              ["Skilled & Certified Teams", "Experienced professionals, continuous training, and standardized operating procedures ensure consistent service quality across every location."],
              ["Continuous Improvement", "Regular performance reviews, operational insights, and process enhancements help facilities evolve with changing business needs."]
            ].map(([title, desc], i) => (
              <div key={i} data-reveal data-delay={String(Math.min(i % 3, 3))} className="lift" style={{ background: "#fff", border: "1px solid rgba(25,25,25,.07)", borderRadius: 24, padding: 32 }}>
                <h4 style={{ fontSize: 18, fontWeight: 600, color: "#191919", marginBottom: 12 }}>{title}</h4>
                <p style={{ fontSize: 15, color: "#6E6A61", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Build Better Environments */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Let's Build Better Environments</div>
          <p data-reveal data-delay="1" style={{ marginTop: 24, fontSize: 18, lineHeight: 1.7, color: "#6E6A61" }}>Exceptional facilities don't happen by chance—they are the result of thoughtful planning, operational discipline, and a commitment to continuous improvement. Whether managing a corporate headquarters, a commercial property, a healthcare facility, or a large industrial campus, Catalyst partners with organizations to create environments that enhance operational performance, strengthen everyday experiences, and support long-term business success.</p>
          <p data-reveal data-delay="2" style={{ marginTop: 16, fontSize: 18, lineHeight: 1.7, color: "#46433C", fontWeight: 500 }}>From corporate offices and commercial properties to healthcare facilities and industrial campuses, Catalyst delivers integrated facility management that enhances operational performance, workplace experiences, and long-term value.</p>
        </div>
      </section>

      <CTA
        go={go}
        title="Create Environments That Perform Every Day"
        subtitle="FACILITY MANAGEMENT SOLUTIONS"
        primaryLabel="Explore Facility Management"
        primaryPage="contact"
        secondaryLabel="Talk to Our FM Specialists"
        secondaryPage="contact"
      />
    </div>
  );
}
