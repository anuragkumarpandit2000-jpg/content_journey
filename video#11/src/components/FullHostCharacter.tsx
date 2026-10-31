import React from 'react';
import timeline from '../data/timeline.json';

interface FullHostCharacterProps {
  frame: number;
  fps: number;
}

export const FullHostCharacter: React.FC<FullHostCharacterProps> = ({ frame, fps }) => {
  const currentSec = frame / fps;

  // 1. Audio-driven Lip Sync
  const mouthFrames = timeline.mouth || [];
  const mouthVal = mouthFrames[Math.min(mouthFrames.length - 1, frame)] || 0;

  // 2. Natural Breathing & Head Motion
  const breathY = Math.sin(frame * 0.08) * 3;
  const headTilt = Math.sin(frame * 0.035) * 1.5;
  const headNod = Math.cos(frame * 0.065) * (mouthVal > 0.3 ? 2.5 : 0.8);

  // 3. Eye Blinking (natural blink every 3.5 seconds, lasts 5 frames)
  const blinkCycle = frame % Math.floor(fps * 3.5);
  const isBlinking = blinkCycle > Math.floor(fps * 3.5) - 5;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        pointerEvents: 'none',
        zIndex: 20,
      }}
    >
      <svg
        viewBox="0 0 1080 1920"
        width="1080"
        height="1920"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        <defs>
          {/* Handsome Indian Warm Skin Gradient */}
          <linearGradient id="hostSkin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5C7A1" />
            <stop offset="50%" stopColor="#E0A479" />
            <stop offset="100%" stopColor="#C48256" />
          </linearGradient>

          {/* Under-Jaw & Neck Shadow (Deep rich cel tone) */}
          <linearGradient id="neckShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#965D37" />
            <stop offset="100%" stopColor="#703A1B" />
          </linearGradient>

          {/* Voluminous Curly Black Hair with Anime Cel Shading */}
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2A2838" />
            <stop offset="40%" stopColor="#191824" />
            <stop offset="100%" stopColor="#0D0C13" />
          </linearGradient>

          {/* Anime Hair Light Sheen */}
          <linearGradient id="hairSheen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#44425F" />
            <stop offset="50%" stopColor="#7B78A8" />
            <stop offset="100%" stopColor="#44425F" />
          </linearGradient>

          {/* Dark Black Studio Polo Shirt */}
          <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#24222E" />
            <stop offset="40%" stopColor="#15141D" />
            <stop offset="100%" stopColor="#08080C" />
          </linearGradient>

          {/* Stubble Texture Gradient */}
          <radialGradient id="stubbleGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4A2814" stopOpacity="0.28" />
            <stop offset="80%" stopColor="#4A2814" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#4A2814" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ================= 1. ATHLETIC TORSO & SHOULDERS ================= */}
        <g transform={`translate(0, ${breathY})`}>
          {/* Broad Athletic Torso filling screen behind laptop */}
          <path
            d="M 20 1920 L 20 1340 Q 160 1140 370 1040 L 400 970 Q 540 990 680 970 L 710 1040 Q 920 1140 1060 1340 L 1060 1920 Z"
            fill="url(#shirtGrad)"
            stroke="#08070C"
            strokeWidth="7"
          />

          {/* Subtle Studio Cyan Rim Light along Left Shoulder */}
          <path
            d="M 20 1340 Q 160 1140 370 1040"
            stroke="#00E5FF"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            opacity="0.55"
          />

          {/* Chest & Muscle Seam Contours */}
          <path d="M 240 1200 Q 300 1300 340 1440" stroke="#0A0910" strokeWidth="6" fill="none" />
          <path d="M 840 1200 Q 780 1300 740 1440" stroke="#0A0910" strokeWidth="6" fill="none" />
          <path d="M 420 1150 Q 540 1230 660 1150" stroke="#1A1924" strokeWidth="6" fill="none" />

          {/* Ribbed Collar Band */}
          <path
            d="M 390 970 Q 540 1030 690 970 Q 540 1000 390 970 Z"
            fill="#302E40"
            stroke="#08070C"
            strokeWidth="6"
          />

          {/* Short, Athletic, Masculine Neck (Proper Anatomy: Wide 280px, Height ~70px) */}
          <path
            d="M 400 970 Q 540 1015 680 970 L 675 900 Q 540 930 405 900 Z"
            fill="url(#neckShadow)"
          />

          {/* Neck Tendons & Adam's Apple */}
          <path d="M 460 915 Q 485 965 510 990" stroke="#5C2E13" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M 620 915 Q 595 965 570 990" stroke="#5C2E13" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M 525 940 Q 540 950 555 940" stroke="#6E3817" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>

        {/* ================= 2. HEAD, JAW & HAIR (RAJ SHAMANI PROPORTIONS) ================= */}
        <g transform={`translate(540, 780) rotate(${headTilt}) translate(-540, -780) translate(0, ${headNod + breathY})`}>
          {/* Back Volume of Curly Hair */}
          <path
            d="M 320 620 Q 280 430 410 330 Q 540 270 670 330 Q 800 430 760 620 L 735 730 Q 685 760 645 740 L 435 740 Q 385 760 345 730 Z"
            fill="#100F17"
            stroke="#08070C"
            strokeWidth="8"
          />

          {/* Left Ear with Details & Cyan Rim Light */}
          <g>
            <ellipse cx="338" cy="710" rx="26" ry="42" fill="#E0A479" stroke="#08070C" strokeWidth="6" />
            <path d="M 340 685 Q 352 710 340 735" stroke="#753C1B" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M 320 680 Q 316 710 324 740" stroke="#00E5FF" strokeWidth="3" fill="none" opacity="0.65" />
          </g>

          {/* Right Ear (Subtle 3/4 Perspective) */}
          <g>
            <ellipse cx="742" cy="710" rx="20" ry="36" fill="#CE9067" stroke="#08070C" strokeWidth="5.5" />
            <path d="M 740 690 Q 732 710 740 730" stroke="#753C1B" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          </g>

          {/* Chiseled Masculine Face & Jaw (Chin sits right at Y=925!) */}
          <path
            d="M 355 580 Q 345 720 385 810 Q 430 910 540 925 Q 650 910 695 810 Q 735 720 725 580 Z"
            fill="url(#hostSkin)"
            stroke="#08070C"
            strokeWidth="7"
          />

          {/* Under-Chin Shadow */}
          <path
            d="M 410 840 Q 470 915 540 925 Q 610 915 670 840 Q 605 875 540 880 Q 475 875 410 840 Z"
            fill="url(#neckShadow)"
            opacity="0.8"
          />

          {/* Masculine 5 O'Clock Stubble across Jaw & Upper Lip */}
          <path
            d="M 380 770 Q 440 900 540 915 Q 640 900 700 770 Q 645 825 540 830 Q 435 825 380 770 Z"
            fill="url(#stubbleGrad)"
          />
          <ellipse cx="540" cy="830" rx="46" ry="11" fill="url(#stubbleGrad)" />

          {/* Strong Chin Contour */}
          <path d="M 515 895 Q 540 905 565 895" stroke="#6B3415" strokeWidth="3.5" fill="none" strokeLinecap="round" />

          {/* Cheekbone Cel Shadows */}
          <path d="M 365 650 Q 380 750 420 805 L 395 720 Z" fill="rgba(140, 68, 30, 0.22)" />
          <path d="M 715 650 Q 700 750 660 805 L 685 720 Z" fill="rgba(140, 68, 30, 0.22)" />

          {/* ================= 3. EYEBROWS & SHARP CONFIDENT ANIME EYES ================= */}
          {/* Left Eyebrow (Arching, masculine) */}
          <path
            d="M 405 655 Q 460 630 515 648"
            stroke="#12111A"
            strokeWidth="13"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 410 653 Q 460 632 510 648"
            stroke="#2E2C3D"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Right Eyebrow */}
          <path
            d="M 565 648 Q 620 630 675 655"
            stroke="#12111A"
            strokeWidth="13"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 570 648 Q 620 632 670 653"
            stroke="#2E2C3D"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Eyes System */}
          {isBlinking ? (
            <g>
              <path d="M 425 700 Q 470 714 512 700" stroke="#08070C" strokeWidth="7" strokeLinecap="round" fill="none" />
              <path d="M 568 700 Q 610 714 652 700" stroke="#08070C" strokeWidth="7" strokeLinecap="round" fill="none" />
            </g>
          ) : (
            <g>
              {/* Left Eye */}
              <ellipse cx="468" cy="695" rx="34" ry="19" fill="#FFFFFF" stroke="#08070C" strokeWidth="5" />
              {/* Rich Espresso Iris */}
              <circle cx="474" cy="695" r="14" fill="#321C10" />
              <circle cx="474" cy="695" r="11.5" fill="#4E2B18" />
              {/* Black Pupil */}
              <circle cx="475" cy="695" r="7" fill="#08070C" />
              {/* Specular Catchlight */}
              <circle cx="470" cy="689" r="4.8" fill="#FFFFFF" />
              <circle cx="480" cy="699" r="2.2" fill="#FFFFFF" />
              {/* Upper Lash Line with Confidence Wing */}
              <path d="M 422 692 Q 468 672 514 692" stroke="#08070C" strokeWidth="7" fill="none" strokeLinecap="round" />
              {/* Upper Eyelid Crease */}
              <path d="M 436 678 Q 468 667 500 678" stroke="#7C4424" strokeWidth="3.5" fill="none" strokeLinecap="round" />

              {/* Right Eye */}
              <ellipse cx="610" cy="695" rx="34" ry="19" fill="#FFFFFF" stroke="#08070C" strokeWidth="5" />
              {/* Rich Espresso Iris */}
              <circle cx="616" cy="695" r="14" fill="#321C10" />
              <circle cx="616" cy="695" r="11.5" fill="#4E2B18" />
              {/* Black Pupil */}
              <circle cx="617" cy="695" r="7" fill="#08070C" />
              {/* Specular Catchlight */}
              <circle cx="612" cy="689" r="4.8" fill="#FFFFFF" />
              <circle cx="622" cy="699" r="2.2" fill="#FFFFFF" />
              {/* Upper Lash Line */}
              <path d="M 566 692 Q 612 672 658 692" stroke="#08070C" strokeWidth="7" fill="none" strokeLinecap="round" />
              {/* Upper Eyelid Crease */}
              <path d="M 580 678 Q 612 667 644 678" stroke="#7C4424" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            </g>
          )}

          {/* ================= 4. MASCULINE NOSE ================= */}
          <path d="M 538 662 L 534 742 L 548 764 L 526 764" stroke="#6F3414" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="538" cy="767" rx="8" ry="4" fill="#502008" />
          <line x1="535" y1="675" x2="532" y2="735" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="2.5" strokeLinecap="round" />

          {/* ================= 5. AUDIO-DRIVEN LIP SYNC MOUTH ================= */}
          {mouthVal < 0.12 ? (
            /* Natural Confident Closed Smile */
            <g>
              <path
                d="M 490 832 Q 540 845 590 832"
                stroke="#08070C"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
              <path d="M 515 848 Q 540 855 565 848" stroke="#945330" strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>
          ) : mouthVal < 0.38 ? (
            /* Small Speech Opening with White Teeth */
            <g>
              <path
                d="M 488 828 Q 540 818 592 828 Q 540 852 488 828 Z"
                fill="#3E0F0F"
                stroke="#08070C"
                strokeWidth="5"
              />
              <path d="M 506 826 Q 540 830 574 826" stroke="#FFFFFF" strokeWidth="5" fill="none" strokeLinecap="round" />
            </g>
          ) : mouthVal < 0.68 ? (
            /* Active Speech (Medium Open Anime Mouth) */
            <g>
              <ellipse cx="540" cy="838" rx="36" ry={17 * mouthVal + 8} fill="#480D0D" stroke="#08070C" strokeWidth="5.5" />
              <path d="M 510 828 Q 540 833 570 828" stroke="#FFFFFF" strokeWidth="5.5" fill="none" strokeLinecap="round" />
              <ellipse cx="540" cy="847" rx="20" ry="8" fill="#E65265" />
            </g>
          ) : (
            /* High Intensity / Exclamation (Wide Open Anime Mouth) */
            <g>
              <ellipse cx="540" cy="842" rx="42" ry={25 * mouthVal + 6} fill="#350606" stroke="#08070C" strokeWidth="6" />
              <path d="M 505 828 Q 540 835 575 828" stroke="#FFFFFF" strokeWidth="6.5" fill="none" strokeLinecap="round" />
              <path d="M 515 856 Q 540 851 565 856" stroke="#FFFFFF" strokeWidth="4.5" fill="none" strokeLinecap="round" />
              <ellipse cx="540" cy="854" rx="24" ry="12" fill="#E65265" />
            </g>
          )}

          {/* ================= 6. NATURAL WAVY CURLY ANIME HAIR ================= */}
          {/* Main Top Crown Silhouette */}
          <path
            d="M 330 610 Q 295 410 405 315 Q 540 255 675 315 Q 785 410 750 610 Q 705 505 645 470 Q 540 445 435 470 Q 375 505 330 610 Z"
            fill="url(#hairGrad)"
            stroke="#08070C"
            strokeWidth="7"
          />

          {/* Layered Organic Curly Locks Over Forehead */}
          {/* Curl 1 - Left Temple */}
          <path
            d="M 345 550 Q 375 660 415 635 Q 405 570 425 510 Z"
            fill="#262436"
            stroke="#08070C"
            strokeWidth="5"
          />
          {/* Curl 2 - Left Bang */}
          <path
            d="M 390 495 Q 430 635 475 620 Q 455 540 470 480 Z"
            fill="#1B1A26"
            stroke="#08070C"
            strokeWidth="5"
          />
          {/* Curl 3 - Center Left Bang */}
          <path
            d="M 450 475 Q 485 625 528 620 Q 515 540 530 465 Z"
            fill="#2E2C3F"
            stroke="#08070C"
            strokeWidth="5"
          />
          {/* Curl 4 - Center Right Signature Curl */}
          <path
            d="M 515 465 Q 555 630 592 615 Q 575 535 590 470 Z"
            fill="#222030"
            stroke="#08070C"
            strokeWidth="5"
          />
          {/* Curl 5 - Right Bang */}
          <path
            d="M 575 480 Q 620 635 660 620 Q 640 540 655 485 Z"
            fill="#1B1A26"
            stroke="#08070C"
            strokeWidth="5"
          />
          {/* Curl 6 - Right Temple */}
          <path
            d="M 645 510 Q 685 660 725 625 Q 700 555 710 500 Z"
            fill="#262436"
            stroke="#08070C"
            strokeWidth="5"
          />

          {/* Crown Anime Highlights */}
          <path
            d="M 410 360 Q 540 295 670 360"
            stroke="url(#hairSheen)"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 445 405 Q 540 350 635 405"
            stroke="url(#hairSheen)"
            strokeWidth="4.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Electric Cyan Rim Highlight on Hair */}
          <path
            d="M 330 610 Q 295 410 405 315"
            stroke="#00E5FF"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />
        </g>
      </svg>
    </div>
  );
};
