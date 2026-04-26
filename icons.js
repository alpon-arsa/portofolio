// ===== SVG ICON LIBRARY =====
const icons = {

  // ---- SOCIAL ----
  github: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>`,

  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>`,

  instagram: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>`,

  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
  </svg>`,

  // ---- TOOL ICONS ----

  // React — atom icon
  react: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="3.5" fill="#61DAFB"/>
    <ellipse cx="24" cy="24" rx="20" ry="7.5" stroke="#61DAFB" stroke-width="2" fill="none"/>
    <ellipse cx="24" cy="24" rx="20" ry="7.5" stroke="#61DAFB" stroke-width="2" fill="none" transform="rotate(60 24 24)"/>
    <ellipse cx="24" cy="24" rx="20" ry="7.5" stroke="#61DAFB" stroke-width="2" fill="none" transform="rotate(120 24 24)"/>
  </svg>`,

  // Tailwind — wave/wind icon
  tailwind: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 20c2-8 8-12 12-12 6 0 9 4 9 8s-3 6-6 8c-4 2-6 4-6 8 0 2 1 4 3 4" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <path d="M20 28c2-8 8-12 12-12 6 0 9 4 9 8s-3 6-6 8c-4 2-6 4-6 8 0 2 1 4 3 4" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.5"/>
  </svg>`,

  // Firebase — flame icon
  firebase: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 38L20 14l6 10 4-18 10 32H14z" fill="#FFA000"/>
    <path d="M14 38l6-12 4 6 4-8 6 14H14z" fill="#F57C00"/>
    <path d="M24 24l4-10 10 24H14l10-14z" fill="#FFCA28" opacity="0.8"/>
  </svg>`,

  // Next.js — N letter
  nextjs: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" fill="#000" stroke="#333" stroke-width="1"/>
    <path d="M16 32V16l16 16V16" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`,

  // VS Code — brackets icon
  vscode: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34 8L44 16v16L34 40 4 26V22L34 8z" fill="#0078D4"/>
    <path d="M34 8v32L4 26v-4L34 8z" fill="#1BA1E2" opacity="0.7"/>
    <path d="M34 8L44 16 34 24V8z" fill="#0078D4"/>
    <path d="M20 18l-8 6 8 6M28 18l8 6-8 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`,

  // Git/Github — branch icon
  git: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="12" r="4" fill="#F05032" stroke="#F05032" stroke-width="1"/>
    <circle cx="14" cy="36" r="4" fill="#F05032" stroke="#F05032" stroke-width="1"/>
    <circle cx="34" cy="18" r="4" fill="#F05032" stroke="#F05032" stroke-width="1"/>
    <line x1="14" y1="16" x2="14" y2="32" stroke="#F05032" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M14 16c0-4 4-8 8-8h8a4 4 0 014 4" stroke="#F05032" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  </svg>`,

  // Figma — figma logo shapes
  figma: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="8" width="10" height="10" rx="5" fill="#F24E1E"/>
    <rect x="24" y="8" width="10" height="10" rx="5" fill="#FF7262"/>
    <rect x="14" y="18" width="10" height="10" rx="0" fill="#A259FF"/>
    <rect x="24" y="18" width="10" height="10" rx="5" fill="#1ABCFE"/>
    <rect x="14" y="28" width="10" height="10" rx="5" fill="#0ACF83"/>
  </svg>`,

  // Photoshop — Ps letters
  photoshop: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="#001E36"/>
    <text x="7" y="34" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="#31A8FF">Ps</text>
  </svg>`,

  // Lightroom — Lr letters
  lightroom: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="#001A2B"/>
    <text x="6" y="34" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="#31A8FF">Lr</text>
  </svg>`,

  // Illustrator — Ai letters
  illustrator: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="#330000"/>
    <text x="7" y="34" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="#FF9A00">Ai</text>
  </svg>`,

  // Canva — C letter
  canva: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="24" fill="url(#canva-g)"/>
    <text x="12" y="34" font-family="Arial, sans-serif" font-size="26" font-weight="900" fill="white">C</text>
    <defs>
      <linearGradient id="canva-g" x1="0" y1="0" x2="48" y2="48">
        <stop stop-color="#7D2AE8"/>
        <stop offset="1" stop-color="#00C4CC"/>
      </linearGradient>
    </defs>
  </svg>`,

  // Sketch — diamond icon
  sketch: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 6l18 12-18 24L6 18 24 6z" fill="#FDB300"/>
    <path d="M6 18h36L24 42 6 18z" fill="#EA6C00" opacity="0.7"/>
    <path d="M24 6l18 12H6L24 6z" fill="#FDAD00"/>
  </svg>`,

  // Premiere Pro — Pr letters
  premiere: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="#00005B"/>
    <text x="6" y="34" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="#9999FF">Pr</text>
  </svg>`,

  // After Effects — Ae letters
  aftereffects: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="#00005B"/>
    <text x="5" y="34" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="#9999FF">Ae</text>
  </svg>`,

  // CapCut — scissors icon
  capcut: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="18" r="5" stroke="white" stroke-width="2.5" fill="none"/>
    <circle cx="14" cy="30" r="5" stroke="white" stroke-width="2.5" fill="none"/>
    <line x1="18" y1="21" x2="38" y2="10" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="18" y1="27" x2="38" y2="38" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="26" y1="24" x2="38" y2="24" stroke="white" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>
  </svg>`,

  // DaVinci — D letter
  davinci: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="#1A0000"/>
    <text x="10" y="34" font-family="Arial, sans-serif" font-size="26" font-weight="900" fill="#E8472A">D</text>
  </svg>`,

  // Audition — Au letters
  audition: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="#001A1A"/>
    <text x="4" y="34" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="#00E4BB">Au</text>
  </svg>`,

  // OBS Studio — record circle icon
  obs: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" stroke="#7B68EE" stroke-width="2.5" fill="none"/>
    <circle cx="24" cy="24" r="10" fill="#7B68EE" opacity="0.3"/>
    <circle cx="24" cy="24" r="6" fill="#7B68EE"/>
    <circle cx="24" cy="24" r="3" fill="white"/>
  </svg>`,

  // ---- CONTACT ICONS ----
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>`,

  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>`,

  signal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 8.5a13 13 0 0121 0"/>
    <path d="M5 12a10 10 0 0114 0"/>
    <path d="M8.5 15.5a6 6 0 017 0"/>
    <circle cx="12" cy="19" r="1" fill="currentColor"/>
  </svg>`,

  person: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>`,

  envelope: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>`
};

// ===== INJECT ICONS =====
function injectIcons() {

  // Hero social icons
  const heroSocials = [
    { id: 'icon-github',    icon: 'github' },
    { id: 'icon-linkedin',  icon: 'linkedin' },
    { id: 'icon-instagram', icon: 'instagram' },
    { id: 'icon-tiktok',    icon: 'tiktok' }
  ];

  // Tool grid icons
  const toolIcons = [
    { id: 'tool-react',        icon: 'react' },
    { id: 'tool-tailwind',     icon: 'tailwind' },
    { id: 'tool-firebase',     icon: 'firebase' },
    { id: 'tool-nextjs',       icon: 'nextjs' },
    { id: 'tool-vscode',       icon: 'vscode' },
    { id: 'tool-git',          icon: 'git' },
    { id: 'tool-figma',        icon: 'figma' },
    { id: 'tool-photoshop',    icon: 'photoshop' },
    { id: 'tool-lightroom',    icon: 'lightroom' },
    { id: 'tool-illustrator',  icon: 'illustrator' },
    { id: 'tool-canva',        icon: 'canva' },
    { id: 'tool-sketch',       icon: 'sketch' },
    { id: 'tool-premiere',     icon: 'premiere' },
    { id: 'tool-aftereffects', icon: 'aftereffects' },
    { id: 'tool-capcut',       icon: 'capcut' },
    { id: 'tool-davinci',      icon: 'davinci' },
    { id: 'tool-audition',     icon: 'audition' },
    { id: 'tool-obs',          icon: 'obs' }
  ];

  // Contact section icons
  const contactIcons = [
    { id: 'contact-icon-email',  icon: 'email' },
    { id: 'contact-icon-wa',     icon: 'whatsapp' },
    { id: 'contact-icon-signal', icon: 'signal' },
    { id: 'form-icon-person',    icon: 'person' },
    { id: 'form-icon-email',     icon: 'envelope' }
  ];

  // Contact social buttons
  const contactSocials = [
    { id: 'cs-github',    icon: 'github' },
    { id: 'cs-linkedin',  icon: 'linkedin' },
    { id: 'cs-instagram', icon: 'instagram' }
  ];

  const all = [...heroSocials, ...toolIcons, ...contactIcons, ...contactSocials];

  all.forEach(({ id, icon }) => {
    const el = document.getElementById(id);
    if (el && icons[icon]) {
      el.innerHTML = icons[icon];
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectIcons);
} else {
  injectIcons();
}
