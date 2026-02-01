import { useState } from "react";

// ─── BREWERY DATA ────────────────────────────────────────────────────────────
const BREWERIES = [
  {
    id: "reubens",
    name: "Reuben's Brews",
    address: "5010 14th Ave NW",
    tagline: "28 rotating taps, family & dog-friendly patio",
    style: "IPAs, Lagers, Stouts",
    foodStatus: "permanent",
    foodLabel: "Reuben's Eats",
    permanentTruck: {
      name: "Reuben's Eats",
      cuisine: "American Pub",
      hours: "Mon–Fri 4–8pm · Sat–Sun 11am–8pm",
      note: "Pilsner brat, fried chicken sandwich, soft pretzel, doughnut holes w/ huckleberry compote. Beer is literally an ingredient.",
      menuUrl: "https://www.seattlefoodtruck.com/food-trucks/reuben-s-eats",
      instagram: "https://www.instagram.com/reubensbrews/",
    },
    website: "https://reubensbrews.com/location/ballard-taproom/",
    instagram: "https://www.instagram.com/reubensbrews/",
    scheduleUrl: "https://www.seattlefoodtruck.com/schedule/reuben-s-brews",
  },
  {
    id: "stoup",
    name: "Stoup Brewing",
    address: "1108 NW 52nd St",
    tagline: "Beer garden, fire pit, rotating trucks nightly",
    style: "Hazy IPAs, Lagers, Wheat, Gose",
    foodStatus: "rotating",
    foodLabel: "Rotating",
    permanentTruck: null,
    website: "https://www.stoupbrewing.com/ballard/",
    instagram: "https://www.instagram.com/stoupbrewing/",
    scheduleUrl: "https://www.seattlefoodtruck.com/schedule/stoup-brewing",
  },
  {
    id: "greatnotion",
    name: "Great Notion Brewing",
    address: "5101 14th Ave NW, Suite 101",
    tagline: "Creative beers, all ages, SmashBox on site",
    style: "Hazy IPAs, Sours, Smoothie Beers",
    foodStatus: "permanent",
    foodLabel: "The Hall SmashBox",
    permanentTruck: {
      name: "The Hall SmashBox",
      cuisine: "Smashburgers & Pretzels",
      hours: "Sun–Thu noon–9pm · Fri–Sat noon–10pm",
      note: "Brisket blend smashburgers, 8oz house-baked pretzels w/ cheese sauce, Reuben sandwich on Macrina sourdough. No outside food allowed.",
      menuUrl: null,
      toastUrl: "https://www.toasttab.com/local/order/smashboxatgreatnotionbyqueenannebeerhall",
      instagram: null,
    },
    website: "https://greatnotion.com/pages/ballard-1",
    instagram: "https://www.instagram.com/greatnotionwashington/",
    scheduleUrl: null,
  },
  {
    id: "cloudburst",
    name: "Cloudburst on Shilshole",
    address: "5458 Shilshole Ave NW",
    tagline: "Covered beer garden, all ages, award-winning IPAs",
    style: "Hop-Forward IPAs, Pale Ales, Lagers",
    foodStatus: "permanent",
    foodLabel: "Dump Truck",
    permanentTruck: {
      name: "Dump Truck by Plenty of Clouds",
      cuisine: "Sichuan & Yunnan Chinese",
      hours: "Mon–Fri 2–9pm · Sat–Sun 12–8/9pm",
      note: "Sichuan & Yunnan cuisine — pork dumplings, braised pork belly noodles, chili oil dishes, chrysanthemum salad. Walk-up or order online.",
      menuUrl: "https://www.plentyofclouds.com/dump-truck",
      toastUrl: "https://www.toasttab.com/local/plenty-of-clouds-food-truck-5458-shilshole-ave-nw/r-99de2b6e-ca5e-4e66-a785-7edb549a05f2",
      instagram: "https://www.instagram.com/dumptruck.sea/",
    },
    website: "https://cloudburstbrew.com",
    instagram: "https://www.instagram.com/cloudburstbrew/",
    scheduleUrl: null,
  },
  {
    id: "urbanfamily",
    name: "Urban Family Brewing",
    address: "1103 NW 52nd St",
    tagline: "Hazy IPAs & fruited sours, coffee bar open 8am",
    style: "Fruited Sours, Hazy IPAs, Lagers",
    foodStatus: "rotating",
    foodLabel: "Rotating",
    permanentTruck: null,
    website: "https://urbanfamilybrewing.com",
    instagram: "https://www.instagram.com/urbanfamilybrewing/",
    scheduleUrl: "https://urbanfamilybrewing.com/food-trucks/",
  },
  {
    id: "obec",
    name: "Obec Brewing",
    address: "1144 NW 52nd St",
    tagline: "21+ only, Czech & European gems, cozy taproom",
    style: "Czech Pilsner, Porters, English Ales",
    foodStatus: "rotating",
    foodLabel: "Rotating",
    permanentTruck: null,
    website: "https://obecbrewing.com",
    instagram: "https://www.instagram.com/obecbrewing/",
    scheduleUrl: null,
  },
  {
    id: "balebreaker",
    name: "Bale Breaker & Yonder Cider",
    address: "826 NW 49th St",
    tagline: "32 taps of beer + cider, largest outdoor beer garden",
    style: "Hop-Forward IPAs + Yakima Valley Ciders",
    foodStatus: "rotating",
    foodLabel: "Rotating",
    permanentTruck: null,
    website: "https://www.bbycballard.com/",
    instagram: "https://www.instagram.com/balebreakerballard/",
    scheduleUrl: null,
  },
  {
    id: "wheeliepop",
    name: "Wheelie Pop Brewing",
    address: "1110 NW 50th St",
    tagline: "Light & crisp beers, Trail Bend next door has a kitchen",
    style: "Lagers, Pilsners, West Coast IPAs",
    foodStatus: "nextdoor",
    foodLabel: "Trail Bend Next Door",
    permanentTruck: null,
    website: "https://wheeliepopbrewing.com",
    instagram: "https://www.instagram.com/wheeliepopbrewing/",
    scheduleUrl: null,
  },
  {
    id: "lucky",
    name: "Lucky Envelope Brewing",
    address: "907 NW 50th St",
    tagline: "Culturally inspired beers, unique flavors, outdoor space",
    style: "Adventurous — Peanut Butter Stout, Habanero, Sours",
    foodStatus: "rotating",
    foodLabel: "Rotating",
    permanentTruck: null,
    website: "https://www.luckyenvelopebrewing.com/",
    instagram: "https://www.instagram.com/luckyenvbrewing/",
    scheduleUrl: null,
  },
  {
    id: "rooftop",
    name: "Rooftop Brew Co",
    address: "1111 NW Ballard Way (The Jolly Roger)",
    tagline: "Now at the Jolly Roger taproom — full kitchen on site",
    style: "Clean, balanced craft ales & lagers",
    foodStatus: "kitchen",
    foodLabel: "Full Kitchen",
    permanentTruck: null,
    website: "https://www.rooftopbrew.co",
    instagram: "https://www.instagram.com/rooftopbrewco/",
    scheduleUrl: null,
  },
];

// ─── MOCK ROTATING TRUCKS DATA ──────────────────────────────────────────────
const ROTATING_TRUCKS = [
  { name: "Where Ya At Matt", cuisine: "Cajun", location: "Stoup Brewing", hours: "5–9pm", note: "Monday regular — beignets & po'boys", confidence: "high" },
  { name: "Georgia's Greek Food Truck", cuisine: "Greek", location: "Stoup Brewing", hours: "5–9pm", note: "Gyros, souvlaki, spanakopita", confidence: "medium" },
  { name: "El Burrito Feliz", cuisine: "Mexican", location: "Urban Family Brewing", hours: "5–9pm", note: "Quesabirria specialist", confidence: "high" },
  { name: "Momo King", cuisine: "Asian", location: "Obec Brewing", hours: "5–9pm", note: "Butter momos & dumplings", confidence: "medium" },
  { name: "Wood Shop BBQ", cuisine: "BBQ", location: "Bale Breaker & Yonder Cider", hours: "5–9pm", note: "WA beef, hickory & post oak smoked", confidence: "medium" },
  { name: "Kaosamai Thai", cuisine: "Thai", location: "Lucky Envelope Brewing", hours: "5–9pm", note: "Rotating dinner truck", confidence: "low" },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function formatDate(d) { return `${DAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}`; }
function toInputVal(d) {
  const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,'0'), dd=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${dd}`;
}

// ─── STATIC DATA GENERATOR (replaces AI fetch) ──────────────────────────────
function getStaticTrucks(date) {
  const dayIndex = date.getDay();
  
  // Always include permanent trucks
  const trucks = [
    {
      name: "Reuben's Eats",
      cuisine: "American Pub",
      location: "Reuben's Brews",
      hours: dayIndex >= 1 && dayIndex <= 5 ? "4–8pm" : "11am–8pm",
      confidence: "certain",
      note: "On-site permanent truck. Pilsner brat, fried chicken sandwich, soft pretzel.",
    },
    {
      name: "The Hall SmashBox",
      cuisine: "Smashburgers & Pretzels",
      location: "Great Notion Brewing",
      hours: dayIndex >= 5 ? "noon–10pm" : "noon–9pm",
      confidence: "certain",
      note: "Permanent on-site. Brisket smashburgers & house-baked pretzels.",
    },
    {
      name: "Dump Truck by Plenty of Clouds",
      cuisine: "Sichuan & Yunnan Chinese",
      location: "Cloudburst on Shilshole",
      hours: dayIndex >= 1 && dayIndex <= 5 ? "2–9pm" : dayIndex === 0 ? "12–8pm" : "12–9pm",
      confidence: "certain",
      note: "Permanent truck. Pork dumplings, braised pork belly noodles, chili oil dishes.",
    },
  ];

  // Add rotating trucks based on day (simple rotation logic)
  const rotatingCount = 3 + (dayIndex % 3); // 3-5 rotating trucks
  for (let i = 0; i < rotatingCount && i < ROTATING_TRUCKS.length; i++) {
    const idx = (dayIndex + i) % ROTATING_TRUCKS.length;
    trucks.push(ROTATING_TRUCKS[idx]);
  }

  const summary = `${trucks.filter(t=>t.confidence==="certain").length} permanent trucks are open today, plus ${trucks.filter(t=>t.confidence!=="certain").length} rotating trucks likely around the Ballard brewery district.`;

  return { trucks, summary };
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function FoodBadge({ status, label }) {
  const styles = {
    permanent: { bg: "rgba(74,222,128,0.14)", border: "rgba(74,222,128,0.4)", text: "#4ade80" },
    rotating:  { bg: "rgba(251,146,60,0.14)", border: "rgba(251,146,60,0.4)", text: "#fb923c" },
    nextdoor: { bg: "rgba(167,139,250,0.14)", border: "rgba(167,139,250,0.4)", text: "#a78bfa" },
    kitchen:  { bg: "rgba(96,165,250,0.14)", border: "rgba(96,165,250,0.4)", text: "#60a5fa" },
  };
  const s = styles[status] || styles.rotating;
  return (
    <span style={{
      fontSize: 11, fontWeight: 600, letterSpacing: 0.3,
      color: s.text, background: s.bg, border: `1px solid ${s.border}`,
      borderRadius: 5, padding: "3px 8px", whiteSpace: "nowrap",
    }}>{label}</span>
  );
}

function BreweryLogo({ brewery, size = 36 }) {
  const colors = {
    reubens: "#b45309", stoup: "#0d9488", greatnotion: "#2563eb",
    cloudburst: "#0891b2", urbanfamily: "#ca8a04", obec: "#7c3aed",
    balebreaker: "#16a34a", wheeliepop: "#dc2626", lucky: "#e11d48", rooftop: "#ea580c",
  };
  const color = colors[brewery.id] || "#64748b";
  const initials = brewery.name.split(/[\s&]+/).map(w => w[0]).filter(Boolean).slice(0,2).join("").toUpperCase();

  return (
    <div style={{
      width: size, height: size, borderRadius: 8,
      background: `${color}18`, border: `1.5px solid ${color}44`,
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      <span style={{ fontSize: size * 0.38, fontWeight: 700, color, fontFamily: "'DM Serif Display', serif", letterSpacing: -0.5 }}>{initials}</span>
    </div>
  );
}

function TruckLogo({ name }) {
  const hash = name.split("").reduce((a,c) => ((a<<5)-a)+c.charCodeAt(0),0);
  const hues = [12, 25, 38, 160, 200, 270, 320];
  const hue = hues[Math.abs(hash) % hues.length];
  const initial = name.charAt(0).toUpperCase();

  return (
    <div style={{
      width: 46, height: 46, borderRadius: 10, flexShrink: 0,
      background: `hsl(${hue}, 55%, 11%)`,
      border: `1.5px solid hsl(${hue}, 45%, 26%)`,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 0.5,
    }}>
      <span style={{ fontSize: 19, lineHeight: 1 }}>🚚</span>
      <span style={{ fontSize: 9, fontWeight: 700, color: `hsl(${hue}, 65%, 62%)`, letterSpacing: 0.5 }}>{initial}</span>
    </div>
  );
}

function LinkPill({ href, icon, children, color = "#fb923c" }) {
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      fontSize: 10.5, fontWeight: 500, color,
      background: `${color}12`, border: `1px solid ${color}28`,
      borderRadius: 5, padding: "3.5px 7px", textDecoration: "none",
      transition: "background 0.15s",
    }} onMouseEnter={e => e.currentTarget.style.background = `${color}1e`}
       onMouseLeave={e => e.currentTarget.style.background = `${color}12`}>
      <span style={{ fontSize: 9.5 }}>{icon}</span> {children}
    </a>
  );
}

function BreweryCard({ b, expanded, onToggle }) {
  return (
    <div style={{
      background: expanded ? "rgba(255,255,255,0.055)" : "rgba(255,255,255,0.028)",
      border: `1px solid ${expanded ? "rgba(255,255,255,0.13)" : "rgba(255,255,255,0.07)"}`,
      borderRadius: 11, overflow: "hidden", transition: "all 0.2s ease", cursor: "pointer",
    }} onClick={onToggle}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 15px" }}>
        <BreweryLogo brewery={b} size={38} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#fff", fontFamily: "'DM Serif Display', serif" }}>{b.name}</span>
            <FoodBadge status={b.foodStatus} label={b.foodLabel} />
          </div>
          <p style={{ fontSize: 11, color: "#64748b", marginTop: 1.5 }}>{b.address}</p>
        </div>
        <span style={{ color: "#475569", fontSize: 14, transition: "transform 0.2s", transform: expanded ? "rotate(180deg)" : "rotate(0)", flexShrink: 0 }}>▾</span>
      </div>

      {expanded && (
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "14px 15px 16px", animation: "fadeDown 0.22s ease" }} onClick={e => e.stopPropagation()}>
          <p style={{ fontSize: 12.5, color: "#94a3b8", lineHeight: 1.5, marginBottom: 8 }}>{b.tagline}</p>
          <p style={{ fontSize: 11, color: "#64748b", marginBottom: 10 }}>🍺 {b.style}</p>

          {b.permanentTruck && (
            <div style={{
              background: "rgba(74,222,128,0.07)", border: "1px solid rgba(74,222,128,0.18)",
              borderRadius: 8, padding: "11px 13px", marginBottom: 12,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                <span style={{ fontSize: 16 }}>🚚</span>
                <span style={{ fontSize: 13.5, fontWeight: 700, color: "#4ade80", fontFamily: "'DM Serif Display', serif" }}>{b.permanentTruck.name}</span>
                <span style={{ fontSize: 10.5, color: "#6b7280" }}>{b.permanentTruck.cuisine}</span>
              </div>
              <p style={{ fontSize: 11, color: "#6b7280", marginBottom: 3 }}>🕐 {b.permanentTruck.hours}</p>
              <p style={{ fontSize: 11.5, color: "#94a3b8", lineHeight: 1.5, fontStyle: "italic" }}>{b.permanentTruck.note}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
                {b.permanentTruck.menuUrl && <LinkPill href={b.permanentTruck.menuUrl} icon="📋" color="#4ade80">Menu</LinkPill>}
                {b.permanentTruck.toastUrl && <LinkPill href={b.permanentTruck.toastUrl} icon="🛒" color="#60a5fa">Order (Toast)</LinkPill>}
                {b.permanentTruck.instagram && <LinkPill href={b.permanentTruck.instagram} icon="📷" color="#c026d3">Truck IG</LinkPill>}
              </div>
            </div>
          )}

          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {b.website && <LinkPill href={b.website} icon="🌐" color="#60a5fa">Website</LinkPill>}
            {b.instagram && <LinkPill href={b.instagram} icon="📷" color="#c026d3">Instagram</LinkPill>}
            {b.scheduleUrl && <LinkPill href={b.scheduleUrl} icon="📅" color="#fb923c">Truck Schedule</LinkPill>}
          </div>
        </div>
      )}
    </div>
  );
}

function TruckCard({ truck, i }) {
  const confStyles = {
    certain: { color: "#4ade80", bg: "rgba(74,222,128,0.1)", border: "rgba(74,222,128,0.25)", label: "Always Open" },
    high:    { color: "#60a5fa", bg: "rgba(96,165,250,0.1)", border: "rgba(96,165,250,0.25)", label: "Likely Here" },
    medium:  { color: "#fb923c", bg: "rgba(251,146,60,0.1)", border: "rgba(251,146,60,0.25)", label: "Maybe Here" },
    low:     { color: "#a78bfa", bg: "rgba(167,139,250,0.1)", border: "rgba(167,139,250,0.25)", label: "Possibly" },
  };
  const conf = confStyles[truck.confidence] || confStyles.low;

  const brewery = BREWERIES.find(b => {
    const loc = (truck.location || "").toLowerCase();
    const bName = b.name.toLowerCase();
    return loc.includes(bName) || bName.includes(loc.split(" ")[0]);
  });

  const permTruck = brewery?.permanentTruck && (
    (truck.name || "").toLowerCase().includes((brewery.permanentTruck.name || "").toLowerCase().split(" ")[0]) ||
    (brewery.permanentTruck.name || "").toLowerCase().includes((truck.name || "").toLowerCase().split(" ")[0])
  ) ? brewery.permanentTruck : null;

  return (
    <div style={{
      background: truck.confidence === "certain" ? "rgba(74,222,128,0.05)" : "rgba(255,255,255,0.03)",
      border: `1px solid ${truck.confidence === "certain" ? "rgba(74,222,128,0.18)" : "rgba(255,255,255,0.07)"}`,
      borderRadius: 11, padding: "14px 15px",
      animation: `cardIn 0.3s cubic-bezier(.22,.68,0,1.2) ${i * 0.055}s backwards`,
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <TruckLogo name={truck.name} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#fff", fontFamily: "'DM Serif Display', serif" }}>{truck.name}</span>
            <span style={{
              fontSize: 9.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8,
              color: conf.color, background: conf.bg, border: `1px solid ${conf.border}`,
              borderRadius: 4, padding: "2px 6px",
            }}>{conf.label}</span>
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 4, flexWrap: "wrap" }}>
            <span style={{ fontSize: 11, color: "#64748b" }}>🍽 {truck.cuisine}</span>
            <span style={{ fontSize: 11, color: "#64748b" }}>🕐 {truck.hours}</span>
          </div>
          <p style={{ fontSize: 11.5, color: "#64748b", marginTop: 5, fontStyle: "italic", lineHeight: 1.45 }}>{truck.note}</p>
        </div>

        {brewery && (
          <a href={brewery.website} target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0, textDecoration: "none" }} title={`Visit ${brewery.name}`}>
            <BreweryLogo brewery={brewery} size={34} />
          </a>
        )}
      </div>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10, paddingTop: 8, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        {brewery?.scheduleUrl && <LinkPill href={brewery.scheduleUrl} icon="📅" color="#fb923c">Truck Schedule</LinkPill>}
        {brewery?.website && <LinkPill href={brewery.website} icon="🌐" color="#60a5fa">Brewery Site</LinkPill>}
        {brewery?.instagram && <LinkPill href={brewery.instagram} icon="📷" color="#c026d3">Brewery IG</LinkPill>}
        {permTruck?.menuUrl && <LinkPill href={permTruck.menuUrl} icon="📋" color="#4ade80">Menu</LinkPill>}
        {permTruck?.toastUrl && <LinkPill href={permTruck.toastUrl} icon="🛒" color="#60a5fa">Order (Toast)</LinkPill>}
        {permTruck?.instagram && <LinkPill href={permTruck.instagram} icon="📷" color="#c026d3">Truck IG</LinkPill>}
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [mode, setMode] = useState("findfood");
  const [expandedBrewery, setExpandedBrewery] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [trucks, setTrucks] = useState([]);
  const [summary, setSummary] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("All");

  // Load trucks when date changes or mode switches to findfood
  useState(() => {
    if (mode === "findfood") {
      const data = getStaticTrucks(selectedDate);
      setTrucks(data.trucks);
      setSummary(data.summary);
    }
  }, [mode, selectedDate]);

  const handleDateChange = (e) => {
    const p = e.target.value.split("-").map(Number);
    const newDate = new Date(p[0], p[1]-1, p[2]);
    setSelectedDate(newDate);
    const data = getStaticTrucks(newDate);
    setTrucks(data.trucks);
    setSummary(data.summary);
  };

  const nudge = (n) => {
    const d = new Date(selectedDate);
    d.setDate(d.getDate() + n);
    setSelectedDate(d);
    const data = getStaticTrucks(d);
    setTrucks(data.trucks);
    setSummary(data.summary);
  };

  const cuisines = ["All", ...new Set(trucks.map(t => t.cuisine))];
  const filtered = trucks.filter(t => cuisineFilter === "All" || t.cuisine === cuisineFilter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        body { background:#0c0e12; color:#e2e8f0; font-family:'DM Sans',sans-serif; min-height:100vh; }
        input[type="date"]::-webkit-calendar-picker-indicator { filter:invert(1); cursor:pointer; opacity:0.5; }
        input[type="date"] { color-scheme:dark; }
        @keyframes fadeDown { from{opacity:0;transform:translateY(-5px)} to{opacity:1;transform:translateY(0)} }
        @keyframes cardIn { from{opacity:0;transform:translateY(9px)} to{opacity:1;transform:translateY(0)} }
        @keyframes hdrIn { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
        a{color:inherit;text-decoration:none} button{font-family:'DM Sans',sans-serif}
        ::-webkit-scrollbar{width:5px} ::-webkit-scrollbar-track{background:transparent} ::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1);border-radius:3px}
      `}</style>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "24px 16px 64px", minHeight: "100vh" }}>

        <div style={{ textAlign: "center", marginBottom: 22, animation: "hdrIn 0.45s ease" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 24 }}>🍺</span>
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 26, fontWeight: 400, color: "#fff", letterSpacing: -0.3 }}>Ballard Food Trucks</h1>
            <span style={{ fontSize: 24 }}>🚚</span>
          </div>
          <p style={{ color: "#475569", fontSize: 11.5, fontWeight: 300 }}>
            {BREWERIES.length} breweries · {BREWERIES.filter(b=>b.foodStatus==="permanent").length} permanent trucks · rotating trucks daily
          </p>
        </div>

        <div style={{
          display: "flex", gap: 3, background: "rgba(255,255,255,0.04)",
          borderRadius: 9, padding: 3, marginBottom: 20, border: "1px solid rgba(255,255,255,0.06)",
        }}>
          {[
            { id: "findfood", label: "🔍 Find Food Tonight" },
            { id: "breweries", label: "🏭 Browse Breweries" },
          ].map(m => (
            <button key={m.id} onClick={() => setMode(m.id)} style={{
              flex: 1, padding: "8px 2px", borderRadius: 7, border: "none",
              background: mode === m.id ? "rgba(251,146,60,0.17)" : "transparent",
              color: mode === m.id ? "#fb923c" : "#64748b",
              fontSize: 12.5, fontWeight: 600, cursor: "pointer", transition: "all 0.18s ease",
              boxShadow: mode === m.id ? "0 1px 4px rgba(0,0,0,0.3)" : "none",
            }}>{m.label}</button>
          ))}
        </div>

        {mode === "findfood" && (
          <>
            <div style={{
              background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 9, padding: "11px 14px", marginBottom: 14,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, justifyContent: "center", flexWrap: "wrap" }}>
                <button onClick={() => nudge(-1)} style={{
                  background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff", borderRadius: 6, width: 28, height: 28, fontSize: 15, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>‹</button>
                <input type="date" value={toInputVal(selectedDate)} onChange={handleDateChange} style={{
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff", borderRadius: 6, padding: "4px 7px", fontSize: 12.5,
                  fontFamily: "'DM Sans',sans-serif", outline: "none",
                }}/>
                <button onClick={() => nudge(1)} style={{
                  background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff", borderRadius: 6, width: 28, height: 28, fontSize: 15, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>›</button>
                <button onClick={() => { setSelectedDate(new Date()); const d = getStaticTrucks(new Date()); setTrucks(d.trucks); setSummary(d.summary); }} style={{
                  background: "rgba(251,146,60,0.1)", border: "1px solid rgba(251,146,60,0.28)",
                  color: "#fb923c", borderRadius: 6, padding: "3px 9px", fontSize: 10.5,
                  fontWeight: 600, cursor: "pointer",
                }}>Today</button>
              </div>
              <p style={{ textAlign: "center", color: "#475569", fontSize: 11.5, marginTop: 4 }}>{formatDate(selectedDate)}</p>
            </div>

            <div style={{ animation: "fadeDown 0.28s ease" }}>
              {summary && (
                <div style={{
                  background: "rgba(251,146,60,0.07)", border: "1px solid rgba(251,146,60,0.14)",
                  borderRadius: 9, padding: "11px 14px", marginBottom: 12,
                }}>
                  <p style={{ fontSize: 12.5, color: "#fdba74", lineHeight: 1.5 }}>💡 {summary}</p>
                </div>
              )}

              {cuisines.length > 2 && (
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 12 }}>
                  {cuisines.map(c => (
                    <button key={c} onClick={() => setCuisineFilter(c)} style={{
                      background: cuisineFilter===c ? "rgba(96,165,250,0.13)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${cuisineFilter===c ? "rgba(96,165,250,0.35)" : "rgba(255,255,255,0.07)"}`,
                      color: cuisineFilter===c ? "#60a5fa" : "#64748b",
                      borderRadius: 14, padding: "3px 9px", fontSize: 11, fontWeight: 500, cursor: "pointer", transition: "all 0.15s",
                    }}>{c}</button>
                  ))}
                </div>
              )}

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {filtered.map((t, i) => <TruckCard key={i} truck={t} i={i} />)}
              </div>

              <div style={{
                marginTop: 18, padding: "11px 14px", borderRadius: 8,
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
              }}>
                <p style={{ color: "#3f4f5f", fontSize: 10.5, lineHeight: 1.7, textAlign: "center" }}>
                  ⚠️ This uses <strong style={{ color: "#475569" }}>static mock data</strong> for demo purposes. "Always Open" trucks are real and permanent.
                  For live schedules, check <a href="https://www.seattlefoodtruck.com/search?location=ballard" target="_blank" rel="noopener noreferrer" style={{ color: "#fb923c" }}>SeattleFoodTruck.com</a>.
                </p>
              </div>
            </div>
          </>
        )}

        {mode === "breweries" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {BREWERIES.map(b => (
              <BreweryCard key={b.id} b={b} expanded={expandedBrewery===b.id} onToggle={() => setExpandedBrewery(expandedBrewery===b.id ? null : b.id)} />
            ))}
            <div style={{
              marginTop: 8, padding: "12px 14px", borderRadius: 9,
              background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
            }}>
              <p style={{ fontSize: 11, color: "#475569", lineHeight: 1.7, textAlign: "center" }}>
                💡 Stoup, Urban Family, Obec, and Reuben's are all within a 2-block radius — walk between them and mix & match.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
