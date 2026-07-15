import CTA from "../components/CTA";
import chefImg from "../assets/Gemini_Generated_Image_56k6u556k6u556k6.png";
import joiFoodImg from "../assets/WhatsApp Image 2026-07-07 at 4.39.50 PM.jpeg";
import foodHeroBg from "../assets/Gemini_Generated_Image_313s4z313s4z313s.png";
const SOLUTIONS = [
  { icon: "🏢", name: "Workplace Dining", desc: "Contemporary dining programs that enhance employee wellbeing through diverse menus, healthy choices, and engaging workplace experiences." },
  { icon: "🏭", name: "Industrial & Manufacturing Catering", desc: "Reliable, high-volume catering designed for manufacturing plants, automobile facilities, heavy engineering, pharmaceuticals, chemical industries, and power sectors." },
  { icon: "🩺", name: "Patient Dining", desc: "Nutrition-focused meal programs that support recovery while meeting clinical dietary requirements and the highest standards of food safety." },
  { icon: "🎓", name: "Educational Institutions", desc: "Balanced, nutritious dining experiences for schools, colleges, and universities that promote healthy eating and student wellbeing." },
  { icon: "☕", name: "Cafeterias & Food Courts", desc: "Modern dining spaces offering multiple cuisines, café concepts, grab-and-go options, and flexible food experiences." },
  { icon: "🎉", name: "Events & Conferences", desc: "Professional catering services for conferences, corporate events, business meetings, and special occasions with seamless execution." },
  { icon: "🏨", name: "Guest House Management", desc: "Complete dining and hospitality management designed to provide premium guest experiences with personalized service and quality cuisine." },
];

const WHY_CATALYST = [
  { icon: "🎯", name: "Tailored Food Programs", desc: "Every dining solution is designed around operational needs, workforce preferences, and organizational culture." },
  { icon: "👨‍🍳", name: "Culinary Expertise", desc: "Experienced chefs and nutrition professionals deliver meals that balance taste, nutrition, and consistency." },
  { icon: "💡", name: "Technology-Enabled Operations", desc: "Smart ordering, digital management, and operational insights improve efficiency and customer experience." },
  { icon: "✅", name: "Quality & Food Safety", desc: "Robust quality systems and hygiene standards ensure confidence in every meal served." },
  { icon: "📈", name: "Scalable Delivery", desc: "From executive dining to high-volume industrial catering, our operations adapt seamlessly to every environment." },
  { icon: "🤝", name: "Hospitality-Led Approach", desc: "Every interaction is designed to create welcoming, engaging, and memorable dining experiences." },
];

const INDUSTRIES = [
  "Automobiles", "Heavy Engineering", "Pharmaceuticals", "Chemical & Ceramics",
  "Power & Energy", "IT & ITeS", "Corporate Workplaces", "Healthcare & Patient Dining", "Educational Institutions",
];

export default function FoodServices({ go }) {
  return (
    <div data-screen-label="Food Services">

      {/* Hero */}
      <section style={{ position: "relative", backgroundColor: "#191919", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.7)), url(${foodHeroBg})`, backgroundSize: "cover", backgroundPosition: "center", padding: "170px clamp(20px,4vw,56px) clamp(70px,8vw,110px)", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", width: "100%" }}>
          <div data-reveal className="shown" style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 22 }}><span style={{ fontSize: 18 }}></span> FOOD SERVICES</div>
          <h1 data-reveal data-delay="1" className="shown" style={{ fontSize: "clamp(36px,5.5vw,76px)", color: "#fff", maxWidth: 860, lineHeight: 1.1 }}>Nourishing Experiences.<br />Enabling <span className="gradtext">Performance.</span></h1>
          <button data-reveal data-delay="2" className="shown mag" onClick={() => go("contact")} style={{ marginTop: 34, background: "#FF7F00", color: "#fff", fontWeight: 600, fontSize: 15, padding: "15px 30px", borderRadius: 999 }}>Talk to our team →</button>
        </div>
      </section>


      {/* Overview */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#D96D00", fontWeight: 600, fontSize: 13, letterSpacing: ".14em", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>OVERVIEW</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Food experiences that create value far beyond the plate</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.75, color: "#46433C" }}>Food has the power to shape experiences far beyond the dining table. It influences wellbeing, productivity, collaboration, recovery, and everyday engagement.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: "#6E6A61" }}>At Catalyst, we partner with organizations to design food environments that combine nutrition, hospitality, operational excellence, and innovation — from corporate workplaces and industrial facilities to hospitals, educational institutions, and guest houses.</p>
          </div>
          <div data-reveal data-delay="1" style={{ position: "relative", borderRadius: 36, overflow: "hidden", minHeight: 400 }}>
            <img src={chefImg} alt="Culinary excellence in action" data-no-reveal style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", minHeight: 400 }} />
          </div>
        </div>
      </section>

      {/* Why Food Matters */}
      <section style={{ padding: "clamp(70px,9vw,120px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#D96D00", fontWeight: 600, fontSize: 13, letterSpacing: ".14em", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>WHY FOOD MATTERS</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Great food creates lasting impressions</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.75, color: "#46433C" }}>Great food energizes workforces, supports patient recovery, enriches learning environments, and strengthens organizational culture.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: "#6E6A61" }}>By combining quality ingredients, culinary expertise, smart operations, and exceptional hospitality, Catalyst transforms everyday dining into an experience that contributes to healthier, happier, and more engaged environments.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[["⚡", "Energizes Workforces", "Dining programs that fuel productivity and team performance."], ["🏥", "Supports Recovery", "Nutrition-led meals that aid patient health and healing."], ["📚", "Enriches Learning", "Healthy dining that supports focus and student wellbeing."], ["🤝", "Strengthens Culture", "Food that brings people together and builds belonging."]].map(([icon, name, desc], i) => (
              <div key={i} data-reveal data-delay={String(i)} className="lift" style={{ background: "#fff", border: "1px solid rgba(25,25,25,.07)", borderRadius: 24, padding: 24 }}>
                <div style={{ fontSize: 28 }}>{icon}</div>
                <div style={{ fontFamily: "Inter Tight", fontWeight: 600, fontSize: 16, color: "#191919", marginTop: 12 }}>{name}</div>
                <p style={{ fontSize: 13, color: "#6E6A61", lineHeight: 1.6, marginTop: 8 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Food Solutions */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 680, marginBottom: 56 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#D96D00", fontWeight: 600, fontSize: 13, letterSpacing: ".14em", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>OUR FOOD SOLUTIONS</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Tailored dining for every environment</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }} data-3col>
            {SOLUTIONS.map((s, i) => (
              <div key={i} data-reveal data-delay={String(i % 3)} className="lift" style={{ background: "#F9F7F3", border: "1px solid rgba(25,25,25,.07)", borderRadius: 28, padding: 30 }}>
                <div style={{ fontSize: 28 }}>{s.icon}</div>
                <h4 style={{ fontFamily: "Inter Tight", fontSize: 19, color: "#191919", marginTop: 14, fontWeight: 600 }}>{s.name}</h4>
                <p style={{ fontSize: "13.5px", color: "#6E6A61", lineHeight: 1.65, marginTop: 10 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOI Food */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(55% 60% at 85% 10%,rgba(255,127,0,.06),transparent 60%),radial-gradient(40% 50% at 10% 90%,rgba(67,147,74,.05),transparent 60%)" }}></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>

            {/* LEFT: Phone mockup + feature badges */}
            <div data-reveal style={{ display: "grid", gridTemplateColumns: "clamp(180px,18vw,240px) 1fr", gap: "clamp(14px,2vw,24px)", alignItems: "center" }}>

              {/* Phone frame */}
              <div style={{ width: "clamp(180px,18vw,240px)", height: "clamp(370px,37vw,494px)", borderRadius: 36, background: "#0A0A18", border: "7px solid #1E1E32", boxShadow: "0 24px 60px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.06)", position: "relative", overflow: "hidden", flexShrink: 0, alignSelf: "center" }}>
                {/* Notch */}
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 72, height: 20, background: "#0A0A18", borderRadius: "0 0 14px 14px", zIndex: 10 }}></div>
                {/* CSS-rendered screen — always visible as reliable fallback */}
                <div style={{ position: "absolute", inset: 0, background: "#f5f5f5", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                  <div style={{ height: 20, background: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "0 10px", flexShrink: 0 }}>
                    <span style={{ fontSize: 7, color: "#333", fontWeight: 600 }}>4:39</span>
                  </div>
                  <div style={{ background: "#C62828", padding: "8px 10px 10px", flexShrink: 0 }}>
                    <div style={{ color: "#fff", fontWeight: 800, fontSize: 9.5, lineHeight: 1.2 }}>Select Your Store</div>
                    <div style={{ color: "rgba(255,255,255,.75)", fontSize: 7, marginTop: 2 }}>Choose a store to access</div>
                  </div>
                  <div style={{ display: "flex", gap: 4, padding: "6px 8px 4px", background: "#fff", flexShrink: 0, overflowX: "hidden" }}>
                    {["All", "KOT", "Premeal", "QSR"].map((t, i) => (
                      <div key={t} style={{ padding: "2px 7px", borderRadius: 20, background: i === 0 ? "#C62828" : "#f0f0f0", color: i === 0 ? "#fff" : "#555", fontSize: 6.5, fontWeight: i === 0 ? 700 : 400, flexShrink: 0 }}>{t}</div>
                    ))}
                  </div>
                  <div style={{ flex: 1, background: "#fff", padding: "4px 0", overflow: "hidden" }}>
                    {[["KOT Store", "Line 1 City", "KOT", false], ["Premeal Store 1", "Vijayawada, AP", "PREMEAL", false], ["Test Store", "101 Vijayawada", "QSR", true]].map(([name, addr, type, sel], i) => (
                      <div key={i} style={{ margin: "3px 6px", background: "#fff", border: sel ? "1.5px solid #C62828" : "1px solid #eee", borderRadius: 8, padding: "5px 6px", display: "flex", gap: 6, alignItems: "center" }}>
                        <div style={{ width: 26, height: 26, borderRadius: 6, flexShrink: 0, backgroundImage: "url('/food-service-hero.png')", backgroundSize: "cover", backgroundPosition: "center", background: "#d4c0ac" }}></div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontWeight: 700, fontSize: 7, color: "#111", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</div>
                          <div style={{ fontSize: 6, color: "#888", marginTop: 1 }}>{addr}</div>
                        </div>
                        <div style={{ padding: "1px 5px", borderRadius: 6, background: "#eee", fontSize: 5.5, color: "#555", fontWeight: 600, flexShrink: 0, whiteSpace: "nowrap" }}>{type}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: "5px 8px 12px", background: "#fff", flexShrink: 0 }}>
                    <div style={{ background: "#C62828", borderRadius: 18, padding: "6px", textAlign: "center", color: "#fff", fontWeight: 700, fontSize: 8.5 }}>Continue</div>
                  </div>
                </div>
                {/* Real screenshot overlays the CSS fallback */}
                <img src={joiFoodImg} alt="" data-no-reveal style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block", zIndex: 5 }} />
              </div>

              {/* Feature badges */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["📱", "Pre-Meal Ordering", "Order ahead for a seamless, queue-free dining experience.", "#FF7F00"],
                  ["⚡", "Quick Service Restaurants", "Fast, quality food across multiple cuisine concepts.", "#43934A"],
                  ["☕", "Café & Grab-and-Go", "Flexible counter formats for every pace of workday.", "#FFB800"],
                  ["🖥️", "Digital Food Ordering", "Smart platforms that simplify choices and speed service.", "#FF7F00"],
                ].map(([icon, name, desc, color], i) => (
                  <div key={i} style={{ background: "#F9F7F3", border: `1px solid ${color}44`, borderRadius: 14, padding: "10px 12px", display: "flex", gap: 10, alignItems: "flex-start", position: "relative" }}>
                    <div style={{ position: "absolute", left: -10, top: "50%", transform: "translateY(-50%)", width: 8, height: 8, borderRadius: "50%", background: color, boxShadow: `0 0 8px ${color}66` }}></div>
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: `${color}18`, border: `1px solid ${color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{icon}</div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontFamily: "Inter Tight", fontWeight: 700, fontSize: "clamp(11px,1vw,13px)", color: "#191919", lineHeight: 1.2 }}>{name}</div>
                      <div style={{ fontSize: "clamp(10px,0.85vw,11.5px)", color: "#6E6A61", marginTop: 3, lineHeight: 1.4 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Text content */}
            <div>
              <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#D96D00", fontWeight: 600, fontSize: 13, letterSpacing: ".14em", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>JOI FOOD</div>
              <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Smart Dining for Modern Workplaces</h2>
              <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.75, color: "#46433C" }}>JOI Food brings together technology and hospitality to deliver a seamless dining experience. With Pre-Meal Ordering, Quick Service Restaurants (QSR), café concepts, grab-and-go counters, and digital food ordering, it offers greater convenience, faster service, and more choice.</p>
              <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: "#6E6A61" }}>Designed for today's dynamic workplaces, JOI Food transforms traditional cafeterias into vibrant dining destinations where speed, quality, and customer experience come together effortlessly.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Culinary Excellence & Innovation */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(50px,7vw,100px)" }} data-2col>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#D96D00", fontWeight: 600, fontSize: 13, letterSpacing: ".14em", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>CULINARY EXCELLENCE</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(26px,3vw,40px)", color: "#191919" }}>Every Meal Begins with Passion</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 16.5, lineHeight: 1.75, color: "#46433C" }}>Exceptional dining starts with exceptional culinary talent. Our chefs and nutrition experts combine regional flavours, global inspirations, and evolving food trends to create menus that are balanced, innovative, and memorable.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 14, fontSize: 16.5, lineHeight: 1.75, color: "#6E6A61" }}>Every recipe reflects a commitment to quality, consistency, nutrition, and hospitality, ensuring every meal is prepared with care and purpose.</p>
          </div>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#D96D00", fontWeight: 600, fontSize: 13, letterSpacing: ".14em", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>INNOVATION</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(26px,3vw,40px)", color: "#191919" }}>Shaping the Future of Food Services</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 16.5, lineHeight: 1.75, color: "#46433C" }}>From electric kitchens and modern QSR concepts to smart ordering platforms and technology-enabled food operations, Catalyst continuously explores new ways to improve efficiency, dining experiences, and operational performance.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 14, fontSize: 16.5, lineHeight: 1.75, color: "#6E6A61" }}>Every innovation is designed to simplify service while delivering greater convenience, consistency, and quality.</p>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#191919", color: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Industries We Serve</div>
          <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)" }}>Tailored for every sector</h2>
          <p data-reveal data-delay="2" style={{ maxWidth: 700, margin: "22px auto 40px", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,.7)" }}>Our food solutions are tailored to the unique needs of diverse industries and institutional environments.</p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {INDUSTRIES.map((ind, i) => (
              <div key={i} data-reveal data-delay={String(Math.min(i % 5, 5))} className="lift" style={{ padding: "12px 24px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 999, fontSize: 15, fontWeight: 500 }}>
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Catalyst */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 680, marginBottom: 56 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#D96D00", fontWeight: 600, fontSize: 13, letterSpacing: ".14em", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>WHY CATALYST</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>What makes our food services different</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }} data-3col>
            {WHY_CATALYST.map((w, i) => (
              <div key={i} data-reveal data-delay={String(i % 3)} className="lift" style={{ background: "#fff", border: "1px solid rgba(25,25,25,.07)", borderRadius: 28, padding: 30 }}>
                <div style={{ fontSize: 28 }}>{w.icon}</div>
                <h4 style={{ fontFamily: "Inter Tight", fontSize: 18, color: "#191919", marginTop: 14, fontWeight: 600 }}>{w.name}</h4>
                <p style={{ fontSize: "13.5px", color: "#6E6A61", lineHeight: 1.65, marginTop: 10 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA go={go} title="Let's Reimagine Everyday Dining" subtitle="Whether you're managing a corporate workplace, an industrial facility, a healthcare institution, or an educational campus, Catalyst partners with you to create dining experiences that bring together nutrition, hospitality, and operational excellence." primaryLabel="Explore Food Solutions →" primaryPage="contact" secondaryLabel="Connect with Our Food Experts" secondaryPage="contact" />
    </div>
  );
}
