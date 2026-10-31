import React from 'react';

export const StudioProps: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        pointerEvents: 'none',
        zIndex: 25,
      }}
    >
      <svg
        viewBox="0 0 1080 1920"
        width="1080"
        height="1920"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        <defs>
          {/* Laptop Brushed Silver Aluminum Gradient */}
          <linearGradient id="laptopLid" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DFE1E8" />
            <stop offset="30%" stopColor="#CCD0D9" />
            <stop offset="70%" stopColor="#ADB2BE" />
            <stop offset="100%" stopColor="#8C919D" />
          </linearGradient>

          {/* Laptop Bevel Highlight */}
          <linearGradient id="lidBevel" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.8" />
          </linearGradient>

          {/* Studio Desk Surface */}
          <linearGradient id="deskSurface" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1A1822" />
            <stop offset="25%" stopColor="#13121A" />
            <stop offset="100%" stopColor="#0A090E" />
          </linearGradient>

          {/* Shure SM7B Mic Grille & Body */}
          <linearGradient id="micBody" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2A2A34" />
            <stop offset="50%" stopColor="#4A4A58" />
            <stop offset="100%" stopColor="#1E1E26" />
          </linearGradient>

          {/* Mic Windscreen Foam */}
          <linearGradient id="micFoam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#181820" />
            <stop offset="50%" stopColor="#2E2E3C" />
            <stop offset="100%" stopColor="#121218" />
          </linearGradient>
        </defs>

        {/* 1. Shure SM7B Studio Broadcast Microphone (Behind the laptop) */}
        <g transform="translate(580, 1180) rotate(-14)">
          {/* Boom Arm Pivot & Mount */}
          <path d="M 0 160 L 0 50" stroke="#16151E" strokeWidth="16" strokeLinecap="round" />
          <path d="M 0 160 L 0 50" stroke="#323140" strokeWidth="6" strokeLinecap="round" />

          {/* Metallic U-Yoke Bracket */}
          <path d="M -32 50 Q -32 10 0 5 Q 32 10 32 50" fill="none" stroke="#252430" strokeWidth="10" />

          {/* Microphone Body Metal Casing */}
          <rect
            x="-26"
            y="-50"
            width="52"
            height="70"
            rx="8"
            fill="url(#micBody)"
            stroke="#08070C"
            strokeWidth="5"
          />

          {/* Classic Shure Gold/Brass Accent Ring */}
          <rect x="-26" y="-55" width="52" height="6" fill="#D4AF37" />

          {/* Black Foam Pop-Filter / Windscreen */}
          <path
            d="M -25 -55 Q -25 -130 0 -138 Q 25 -130 25 -55 Z"
            fill="url(#micFoam)"
            stroke="#08070C"
            strokeWidth="5"
          />

          {/* Windscreen Center Seam */}
          <line x1="0" y1="-55" x2="0" y2="-138" stroke="#3E3E50" strokeWidth="2.5" opacity="0.6" />
        </g>

        {/* 2. Studio Desk Surface */}
        <path
          d="M 0 1620 L 1080 1620 L 1080 1920 L 0 1920 Z"
          fill="url(#deskSurface)"
          stroke="#262534"
          strokeWidth="4"
        />
        {/* Desk Edge Highlight */}
        <line x1="0" y1="1620" x2="1080" y2="1620" stroke="#3D3B52" strokeWidth="3.5" />

        {/* 3. Sleek Silver ASUS Zenbook Laptop Lid (Exact Framing like Real Podcast) */}
        <g transform="translate(540, 1610)">
          {/* Main Aluminum Screen Lid */}
          <rect
            x="-390"
            y="-340"
            width="780"
            height="460"
            rx="20"
            fill="url(#laptopLid)"
            stroke="#0A0910"
            strokeWidth="7"
          />

          {/* Beveled Outer Edge Reflection */}
          <rect
            x="-382"
            y="-332"
            width="764"
            height="444"
            rx="14"
            fill="none"
            stroke="url(#lidBevel)"
            strokeWidth="3"
          />

          {/* Subtle Concentric Zen Circles / Brush Texture */}
          <ellipse cx="0" cy="-110" rx="220" ry="220" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" />
          <ellipse cx="0" cy="-110" rx="310" ry="310" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" />

          {/* Embossed & Polished ASUS Logo */}
          <g transform="translate(0, -110)">
            {/* Shadow */}
            <text
              x="0"
              y="18"
              textAnchor="middle"
              fill="#525662"
              fontFamily="'Montserrat', 'Arial Black', sans-serif"
              fontSize="48"
              fontWeight="900"
              letterSpacing="10"
            >
              ASUS
            </text>
            {/* Main Metal Logo */}
            <text
              x="0"
              y="15"
              textAnchor="middle"
              fill="#181822"
              fontFamily="'Montserrat', 'Arial Black', sans-serif"
              fontSize="48"
              fontWeight="900"
              letterSpacing="10"
              style={{
                textShadow: '0 2px 3px rgba(255, 255, 255, 0.8)',
              }}
            >
              ASUS
            </text>
          </g>

          {/* Modern Cyan Glow cast onto the desk surface */}
          <ellipse
            cx="0"
            cy="130"
            rx="360"
            ry="28"
            fill="rgba(0, 229, 255, 0.14)"
          />
        </g>
      </svg>
    </div>
  );
};
