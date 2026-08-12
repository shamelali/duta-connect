import { cn } from "@/lib/utils";

type Props = {
  type: string;
  className?: string;
  label?: boolean;
};

const GRADIENTS: Record<string, [string, string, string]> = {
  kos: ["#0d9488", "#10b282", "#34d3a4"],
  apartemen: ["#2563eb", "#3b82f6", "#60a5fa"],
  rumah: ["#9333ea", "#a855f7", "#c084fc"],
  studio: ["#0891b2", "#06b6d4", "#22d3ee"],
  roommate: ["#ea580c", "#f97316", "#fb923c"],
};

/**
 * Bespoke inline-SVG property illustrations. Self-contained (no network),
 * so they render in the sandboxed preview AND production. Each property type
 * gets a distinct architectural scene over a branded gradient.
 */
export function HousingArt({ type, className, label = false }: Props) {
  const [c1, c2, c3] = GRADIENTS[type] ?? GRADIENTS.kos;
  const gid = `grad-${type}`;
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(135deg, ${c1} 0%, ${c2} 55%, ${c3} 100%)`,
      }}
    >
      <svg
        viewBox="0 0 400 240"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`${gid}-sun`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${gid}-sheen`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* soft sun glow */}
        <circle cx="320" cy="60" r="70" fill={`url(#${gid}-sun)`} />
        {/* sheen */}
        <rect x="0" y="0" width="400" height="240" fill={`url(#${gid}-sheen)`} />

        {/* dotted texture */}
        <g fill="#ffffff" opacity="0.10">
          {Array.from({ length: 9 }).map((_, r) =>
            Array.from({ length: 16 }).map((__, c) => (
              <circle key={`${r}-${c}`} cx={c * 26 + 6} cy={r * 26 + 6} r="1.4" />
            ))
          )}
        </g>

        <g fill="#ffffff">
          <Scene type={type} />
        </g>
      </svg>

      {label && (
        <span className="absolute bottom-3 left-3 rounded-full bg-black/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {labelText(type)}
        </span>
      )}
    </div>
  );
}

function labelText(type: string) {
  const map: Record<string, string> = {
    kos: "Kos",
    apartemen: "Apartemen",
    rumah: "Rumah",
    studio: "Studio",
    roommate: "Cari Roommate",
  };
  return map[type] ?? "Properti";
}

function Scene({ type }: { type: string }) {
  switch (type) {
    case "apartemen":
      return <ApartemenScene />;
    case "rumah":
      return <RumahScene />;
    case "studio":
      return <StudioScene />;
    case "roommate":
      return <RoommateScene />;
    case "kos":
    default:
      return <KosScene />;
  }
}

/* ---- Apartment high-rise skyline ---- */
function ApartemenScene() {
  return (
    <g opacity="0.95">
      {/* back building */}
      <rect x="250" y="60" width="70" height="160" rx="3" opacity="0.55" />
      {/* main building */}
      <rect x="120" y="40" width="90" height="180" rx="4" />
      {/* side building */}
      <rect x="60" y="100" width="55" height="120" rx="3" opacity="0.75" />
      {/* windows on main building */}
      <g opacity="0.55">
        {[0, 1, 2, 3, 4, 5].map((r) =>
          [0, 1, 2].map((c) => (
            <rect
              key={`m-${r}-${c}`}
              x={132 + c * 24}
              y={54 + r * 26}
              width="14"
              height="16"
              rx="1.5"
            />
          ))
        )}
      </g>
      {/* windows on back building */}
      <g opacity="0.45">
        {[0, 1, 2, 3, 4].map((r) =>
          [0, 1].map((c) => (
            <rect
              key={`b-${r}-${c}`}
              x={262 + c * 26}
              y={74 + r * 26}
              width="14"
              height="16"
              rx="1.5"
            />
          ))
        )}
      </g>
      {/* ground line */}
      <rect x="0" y="218" width="400" height="22" opacity="0.25" />
    </g>
  );
}

/* ---- House with pitched roof ---- */
function RumahScene() {
  return (
    <g opacity="0.95">
      {/* roof */}
      <path d="M90 120 L160 70 L230 120 Z" opacity="0.7" />
      <path d="M230 120 L290 80 L345 120 Z" opacity="0.6" />
      {/* body */}
      <rect x="100" y="118" width="130" height="100" rx="2" />
      <rect x="235" y="118" width="105" height="100" rx="2" opacity="0.78" />
      {/* door */}
      <rect x="148" y="160" width="26" height="58" rx="2" opacity="0.45" />
      <circle cx="169" cy="190" r="1.6" fill={undefined} />
      {/* windows */}
      <rect x="112" y="138" width="24" height="24" rx="1.5" opacity="0.45" />
      <rect x="196" y="138" width="24" height="24" rx="1.5" opacity="0.45" />
      <rect x="260" y="138" width="26" height="26" rx="1.5" opacity="0.4" />
      <rect x="298" y="138" width="26" height="26" rx="1.5" opacity="0.4" />
      {/* chimney */}
      <rect x="195" y="86" width="14" height="26" opacity="0.7" />
      {/* ground */}
      <rect x="0" y="218" width="400" height="22" opacity="0.22" />
      {/* tree */}
      <circle cx="60" cy="150" r="22" opacity="0.4" />
      <rect x="56" y="165" width="8" height="28" opacity="0.45" />
    </g>
  );
}

/* ---- Cozy single room (kos) ---- */
function KosScene() {
  return (
    <g opacity="0.95">
      {/* window with frame */}
      <rect x="232" y="56" width="120" height="96" rx="4" opacity="0.45" />
      <line x1="292" y1="56" x2="292" y2="152" stroke="#fff" strokeWidth="3" opacity="0.5" />
      <line x1="232" y1="104" x2="352" y2="104" stroke="#fff" strokeWidth="3" opacity="0.5" />
      {/* bed */}
      <rect x="56" y="150" width="150" height="56" rx="6" opacity="0.85" />
      {/* pillow */}
      <rect x="64" y="138" width="44" height="22" rx="4" opacity="0.6" />
      {/* blanket line */}
      <rect x="120" y="158" width="86" height="48" rx="4" opacity="0.4" />
      {/* picture frame */}
      <rect x="70" y="70" width="52" height="40" rx="2" opacity="0.5" />
      <circle cx="96" cy="86" r="8" opacity="0.6" />
      {/* nightstand */}
      <rect x="210" y="172" width="22" height="34" rx="2" opacity="0.7" />
      {/* floor */}
      <rect x="0" y="206" width="400" height="34" opacity="0.22" />
    </g>
  );
}

/* ---- Open studio ---- */
function StudioScene() {
  return (
    <g opacity="0.95">
      {/* large window */}
      <rect x="48" y="44" width="200" height="120" rx="5" opacity="0.4" />
      <line x1="148" y1="44" x2="148" y2="164" stroke="#fff" strokeWidth="3" opacity="0.45" />
      <line x1="48" y1="104" x2="248" y2="104" stroke="#fff" strokeWidth="3" opacity="0.45" />
      {/* low cabinet / desk */}
      <rect x="268" y="120" width="96" height="40" rx="3" opacity="0.8" />
      <rect x="276" y="128" width="34" height="24" rx="2" opacity="0.4" />
      <rect x="318" y="128" width="34" height="24" rx="2" opacity="0.4" />
      {/* plant */}
      <rect x="288" y="86" width="14" height="26" rx="2" opacity="0.7" />
      <circle cx="295" cy="78" r="16" opacity="0.5" />
      {/* floor bed */}
      <rect x="80" y="186" width="150" height="20" rx="4" opacity="0.6" />
      {/* floor */}
      <rect x="0" y="206" width="400" height="34" opacity="0.22" />
    </g>
  );
}

/* ---- Twin beds shared room ---- */
function RoommateScene() {
  return (
    <g opacity="0.95">
      {/* left bed */}
      <rect x="40" y="132" width="130" height="56" rx="6" opacity="0.85" />
      <rect x="48" y="120" width="42" height="22" rx="4" opacity="0.6" />
      <rect x="100" y="140" width="70" height="48" rx="4" opacity="0.4" />
      {/* right bed */}
      <rect x="230" y="132" width="130" height="56" rx="6" opacity="0.85" />
      <rect x="310" y="120" width="42" height="22" rx="4" opacity="0.6" />
      <rect x="230" y="140" width="70" height="48" rx="4" opacity="0.4" />
      {/* center divider / shelf */}
      <rect x="186" y="96" width="28" height="92" rx="3" opacity="0.7" />
      <rect x="190" y="104" width="20" height="8" rx="1" opacity="0.45" />
      <rect x="190" y="120" width="20" height="8" rx="1" opacity="0.45" />
      <rect x="190" y="136" width="20" height="8" rx="1" opacity="0.45" />
      {/* wall frames */}
      <rect x="70" y="60" width="40" height="30" rx="2" opacity="0.5" />
      <rect x="290" y="60" width="40" height="30" rx="2" opacity="0.5" />
      {/* floor */}
      <rect x="0" y="188" width="400" height="52" opacity="0.22" />
    </g>
  );
}
