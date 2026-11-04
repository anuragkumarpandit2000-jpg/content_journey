import fs from 'fs';
import path from 'path';

const timings = JSON.parse(fs.readFileSync('D:/anurag/content_journey/pipeline/timings_11_15.json', 'utf-8'));

const VIDEO_SPECS = {
  "video#11": {
    themeColor: '#8B5CF6',
    accentColor: '#EC4899',
    hookLetters: ['S', 'T', 'O', 'P', ' ', 'B', 'I', 'L', 'L', 'S', '!'],
    hookSub: "RUN 70B & DEEPSEEK LOCALLY",
    tag: "LOCAL AI • ZERO CLOUD COST",
    code: "LOCAL",
    sec2Title: "CLOUD LLMs ARE DRAINING YOUR WALLET",
    sec2Sub: "OpenAI & Anthropic bills keep piling up every month",
    sec3Title: "CLOUD OUTAGES & PRIVACY LEAKS",
    sec3Desc: "Sensitive client code sent to external servers + hard API rate limits.",
    sec4Badge: "✦ 100% OFFLINE FIX ✦",
    sec4Title: "OLLAMA + 4-BIT GGUF",
    sec5Steps: [
      { num: "01", title: "Install Ollama", code: "curl -fsSL https://ollama.com/install.sh | sh", color: "#FACC15" },
      { num: "02", title: "Pull DeepSeek-R1", code: "ollama run deepseek-r1:8b", color: "#38BDF8" },
      { num: "03", title: "Launch Open WebUI", code: "docker run -p 3000:8080 ghcr.io/open-webui", color: "#A855F7" },
      { num: "04", title: "45 Tokens/Sec Ready", code: "⚡ Zero Cloud Bills • 100% Private", color: "#10B981" }
    ],
    ctaTitle: "COMMENT 'LOCAL'",
    ctaSub: "Get the complete Local LLM setup guide & hardware sizing cheat sheet!",
    segments: [
      { start: 0, text: "Bhai! OpenAI aur Anthropic ke monthly API bills se agar aapka wallet khali ho raha hai, toh ye suno!", keywords: ["OPENAI", "API BILLS", "WALLET", "KHALI"] },
      { start: 1, text: "Cloud LLMs expensive hote hain, internet down hote hi kaam band, aur aapka sensitive client data kisi aur ke server par chala jaata hai!", keywords: ["EXPENSIVE", "INTERNET DOWN", "SENSITIVE DATA", "SERVER"] },
      { start: 2, text: "Solution hai Ollama aur GGUF 4-bit quantization! Aap apne normal PC par DeepSeek aur LLaMA 70B bilkul FREE aur offline run kar sakte ho!", keywords: ["OLLAMA", "GGUF", "DEEPSEEK", "70B", "FREE", "OFFLINE"] },
      { start: 3, text: "Sirf terminal me likho: ollama run deepseek-r1 ya llama3.3, aur zero latency ke saath unlimited code generation enjoy karo!", keywords: ["TERMINAL", "ZERO LATENCY", "UNLIMITED", "CODE GENERATION"] },
      { start: 4, text: "Ye complete Local LLM setup guide aur hardware sizing cheat sheet bilkul FREE chahiye? Abhi comment karo LOCAL aur main direct DM me bhej doonga!", keywords: ["FREE", "COMMENT", "LOCAL", "DIRECT DM"] }
    ]
  },
  "video#12": {
    themeColor: '#06B6D4',
    accentColor: '#3B82F6',
    hookLetters: ['3', '0', '0', 'M', 'S', ' ', 'C', 'A', 'L', 'L', '!'],
    hookSub: "REAL-TIME AI VOICE CALL AGENT",
    tag: "VOICE AI • ZERO DELAY",
    code: "CALL",
    sec2Title: "OLD ROBOTIC VOICE BOTS ARE DEAD",
    sec2Sub: "Users hate 3-second awkward delays & robotic voices",
    sec3Title: "ENTERPRISE TELEPHONY BILLS",
    sec3Desc: "Twilio per-minute markups & rigid voice flows cost thousands of dollars.",
    sec4Badge: "✦ SUB-300MS BREAKTHROUGH ✦",
    sec4Title: "LIVEKIT + WEBRTC AGENTS",
    sec5Steps: [
      { num: "01", title: "Setup LiveKit Agent", code: "pip install livekit-agents livekit-plugins-deepgram", color: "#FACC15" },
      { num: "02", title: "Connect Voice Pipeline", code: "assistant = VoiceAssistant(vad=silero, stt=deepgram)", color: "#38BDF8" },
      { num: "03", title: "Enable Natural Interruptions", code: "await assistant.say('Namaste!', allow_interruptions=True)", color: "#A855F7" },
      { num: "04", title: "Auto-Book Calendar", code: "⚡ 300ms Glass-Smooth Response Connected!", color: "#10B981" }
    ],
    ctaTitle: "COMMENT 'CALL'",
    ctaSub: "Get the complete Python LiveKit voice agent starter repo & telephony guide!",
    segments: [
      { start: 0, text: "Kya aapko pata hai ki 2026 me aap ek aisa AI bana sakte ho jo customer calls answer kare sirf 300 millisecond response time me?", keywords: ["2026", "AI", "CUSTOMER CALLS", "300 MILLISECOND"] },
      { start: 1, text: "Purane voice bots robotic hote the, user ke bolne ke 3 second baad reply karte the, aur Twilio ka bill hazaaro rupaye aata tha!", keywords: ["ROBOTIC", "3 SECOND", "TWILIO", "HAZAARO RUPAYE"] },
      { start: 2, text: "Ab LiveKit Agents framework ke saath aap WebRTC aur Gemini Live ko jod kar ultra-fast conversational voice bot create kar sakte ho!", keywords: ["LIVEKIT", "WEBRTC", "GEMINI LIVE", "CONVERSATIONAL"] },
      { start: 3, text: "Ye bot beech me interrupt hone par naturally ruk jaata hai, Hindi aur English dono samajhta hai, aur appointment calendar me book kar deta hai!", keywords: ["INTERRUPT", "HINDI", "ENGLISH", "CALENDAR BOOK"] },
      { start: 4, text: "Ye complete LiveKit Voice Agent Python source code aur free telephony template chahiye? Abhi comment karo CALL aur direct link DM me milega!", keywords: ["PYTHON SOURCE CODE", "COMMENT", "CALL", "DIRECT LINK"] }
    ]
  },
  "video#13": {
    themeColor: '#10B981',
    accentColor: '#06B6D4',
    hookLetters: ['C', 'U', 'R', 'S', 'O', 'R', ' ', 'D', 'E', 'A', 'D', '!'],
    hookSub: "VS CODE + CLINE FOR $0.05/DAY",
    tag: "AUTONOMOUS CODING • VS CODE",
    code: "CLINE",
    sec2Title: "STOP PAYING $20/MO FOR CURSOR",
    sec2Sub: "Proprietary fork, peak-hour throttling & hidden usage limits",
    sec3Title: "OVERPRICED MONTHLY SUBSCRIPTIONS",
    sec3Desc: "Why pay $240/year when open-source autonomous agents are 95% cheaper?",
    sec4Badge: "✦ THE 14-CENT REVOLUTION ✦",
    sec4Title: "CLINE + DEEPSEEK-V3",
    sec5Steps: [
      { num: "01", title: "Install Cline in VS Code", code: "ext install saoudrizwan.claude-dev", color: "#FACC15" },
      { num: "02", title: "Select DeepSeek V3", code: "Model: deepseek-chat ($0.14 / million tokens)", color: "#38BDF8" },
      { num: "03", title: "Add .clinerules", code: "- Never edit without running tests first", color: "#A855F7" },
      { num: "04", title: "Autonomous Terminal Ready", code: "⚡ Self-heals bugs & runs commands for $0.05/day!", color: "#10B981" }
    ],
    ctaTitle: "COMMENT 'CLINE'",
    ctaSub: "Get the complete Cline configuration guide & tested .clinerules template!",
    segments: [
      { start: 0, text: "Cursor AI ke $20 har mahine de rahe ho? Bhai stop it right now! Aapka 95% paisa barbaad ho raha hai!", keywords: ["CURSOR AI", "$20", "STOP IT", "95% PAISA"] },
      { start: 1, text: "Cursor fast hai lekin closed ecosystem hai aur high usage par request limits lag jaati hain!", keywords: ["CLOSED ECOSYSTEM", "REQUEST LIMITS"] },
      { start: 2, text: "Standard VS Code me install karo Cline ya Roo Code extension, aur connect karo DeepSeek V3 API se sirf 14 cents per million tokens me!", keywords: ["VS CODE", "CLINE", "DEEPSEEK V3", "14 CENTS"] },
      { start: 3, text: "Ye extension poore project folder ko analyze karta hai, terminal me commands khud execute karta hai, aur bugs bina single human touch ke fix kar deta hai!", keywords: ["TERMINAL", "COMMANDS", "BUGS", "HUMAN TOUCH"] },
      { start: 4, text: "Ye complete Cline configuration aur custom developer rules template bilkul FREE chahiye? Abhi comment karo CLINE aur link DM me turant aayega!", keywords: ["CLINE CONFIGURATION", "FREE", "COMMENT", "CLINE", "DM"] }
    ]
  },
  "video#14": {
    themeColor: '#22C55E',
    accentColor: '#10B981',
    hookLetters: ['W', 'H', 'A', 'T', 'S', 'A', 'P', 'P', ' ', 'A', 'I', '!'],
    hookSub: "24/7 AUTONOMOUS CLIENT RECEPTIONIST",
    tag: "CHAT AUTOMATION • ZERO META FEES",
    code: "WHATSAPP",
    sec2Title: "MANUAL CHATTING KILLS YOUR BUSINESS",
    sec2Sub: "Wasting hours answering the same FAQs, quotes & pricing queries",
    sec3Title: "META CLOUD API HEADACHES",
    sec3Desc: "Per-message fees, template rejection rejections, and painful business approvals.",
    sec4Badge: "✦ 100% AUTONOMOUS BOT ✦",
    sec4Title: "PYTHON + BAILEYS SOCKET",
    sec5Steps: [
      { num: "01", title: "Connect Phone Number", code: "const sock = makeWASocket({ auth: state });", color: "#FACC15" },
      { num: "02", title: "Attach Gemini Brain", code: "client.models.generate_content('Auto-reply quote')", color: "#38BDF8" },
      { num: "03", title: "Dispatch PDF Invoices", code: "sock.sendMessage(jid, { document: pdfBuffer });", color: "#A855F7" },
      { num: "04", title: "24/7 Auto-Pilot Ready", code: "⚡ Anti-ban delays & instant calendar bookings active!", color: "#10B981" }
    ],
    ctaTitle: "COMMENT 'WHATSAPP'",
    ctaSub: "Get the complete Python WhatsApp AI bot architecture & anti-ban setup blueprint!",
    segments: [
      { start: 0, text: "Agar aap business ya freelance karte ho, toh WhatsApp par 24 ghante manual chats ka reply karna band karo!", keywords: ["BUSINESS", "FREELANCE", "WHATSAPP", "24 GHANTE"] },
      { start: 1, text: "Official Meta WhatsApp Cloud API me per-message charges lagte hain aur approval lene me hafte nikal jaate hain!", keywords: ["META CLOUD API", "PER-MESSAGE", "APPROVAL"] },
      { start: 2, text: "Aap Python aur Baileys Webhook se ek custom AI brain connect kar sakte ho jo aapke personal ya business number par fully automate chalta hai!", keywords: ["PYTHON", "BAILEYS", "AI BRAIN", "FULLY AUTOMATE"] },
      { start: 3, text: "Ye bot client ke sawalon ka instant answer deta hai, portfolio links share karta hai, aur meetings Google Calendar me auto-schedule kar deta hai!", keywords: ["INSTANT ANSWER", "PORTFOLIO", "GOOGLE CALENDAR"] },
      { start: 4, text: "Ye complete Python WhatsApp AI bot architecture aur anti-ban setup guide chahiye? Abhi comment karo WHATSAPP aur direct blueprint DM me pao!", keywords: ["PYTHON WHATSAPP", "ANTI-BAN", "COMMENT", "WHATSAPP", "DM"] }
    ]
  },
  "video#15": {
    themeColor: '#EC4899',
    accentColor: '#8B5CF6',
    hookLetters: ['2', 'D', ' ', 'T', 'O', ' ', '3', 'D', ' ', 'M', 'E', 'S', 'H', '!'],
    hookSub: "GENERATE 3D IN 5 SECONDS WITH TRELLIS",
    tag: "3D GENERATIVE AI • BLENDER",
    code: "3D",
    sec2Title: "MANUAL 3D MODELING IS DEAD",
    sec2Sub: "Days spent on retopology, box modeling & UV unwrapping",
    sec3Title: "THE TEXTURE BAKING NIGHTMARE",
    sec3Desc: "Manual normal maps, ambient occlusion baking, and high-to-low poly workflows.",
    sec4Badge: "✦ 5-SECOND GENERATION ✦",
    sec4Title: "TRELLIS AI + BLENDER",
    sec5Steps: [
      { num: "01", title: "Upload 2D Image", code: "trellis-generate --image input.png", color: "#FACC15" },
      { num: "02", title: "Extract Textured Mesh", code: "⚡ Generates high-poly GLB with PBR materials", color: "#38BDF8" },
      { num: "03", title: "Run 1-Click Blender Script", code: "bpy.ops.import_scene.gltf(filepath='mesh.glb')", color: "#A855F7" },
      { num: "04", title: "Unreal Engine Ready", code: "⚡ Clean normals & auto-decimated for 60FPS!", color: "#10B981" }
    ],
    ctaTitle: "COMMENT '3D'",
    ctaSub: "Get the 1-click Blender Python auto-import script & local Trellis guide!",
    segments: [
      { start: 0, text: "Blender me 3D assets model karne me ghanto ya din lagte hain? 2026 me ye workflow poori tarah badal chuka hai!", keywords: ["BLENDER", "3D ASSETS", "GHANTO", "2026", "WORKFLOW"] },
      { start: 1, text: "Detailed game props, characters aur vehicles banane ke liye topology aur UV unwrapping me dimag kharab ho jaata hai!", keywords: ["TOPOLOGY", "UV UNWRAPPING", "DIMAG KHARAB"] },
      { start: 2, text: "Solution hai Microsoft Trellis aur TripoSR – sirf ek single flat 2D image do aur 5 second ke andar complete textured 3D mesh ready!", keywords: ["TRELLIS", "TRIPOSR", "2D IMAGE", "5 SECOND", "3D MESH"] },
      { start: 3, text: "Direct Blender Python script se mesh auto-import hota hai, vertex normals clean hote hain, aur instant rendering ya Unreal Engine export ke liye ready!", keywords: ["BLENDER PYTHON", "AUTO-IMPORT", "UNREAL ENGINE"] },
      { start: 4, text: "Ye 2D to 3D AI generator script aur Blender automation addon bilkul FREE chahiye? Abhi comment karo 3D aur link seedha DM me bhej doonga!", keywords: ["3D AI GENERATOR", "BLENDER ADDON", "FREE", "COMMENT", "3D"] }
    ]
  }
};

for (const [vKey, spec] of Object.entries(VIDEO_SPECS)) {
  const vDir = path.join('D:/anurag/content_journey/videos', vKey);
  const t = timings[vKey];
  const s1 = t.scene1.frames;
  const s2 = t.scene2.frames;
  const s3 = t.scene3.frames;
  const s4 = t.scene4.frames;
  const s5 = t.scene5.frames;
  const total = t.total_frames;

  const cum1 = s1;
  const cum2 = cum1 + s2;
  const cum3 = cum2 + s3;
  const cum4 = cum3 + s4;

  // 1. timelineData.ts
  const timelineSegments = [
    {
      id: 0,
      startFrame: 0,
      endFrame: cum1,
      hinglish: spec.segments[0].text,
      keywords: spec.segments[0].keywords
    },
    {
      id: 1,
      startFrame: cum1,
      endFrame: cum2,
      hinglish: spec.segments[1].text,
      keywords: spec.segments[1].keywords
    },
    {
      id: 2,
      startFrame: cum2,
      endFrame: cum3,
      hinglish: spec.segments[2].text,
      keywords: spec.segments[2].keywords
    },
    {
      id: 3,
      startFrame: cum3,
      endFrame: cum4,
      hinglish: spec.segments[3].text,
      keywords: spec.segments[3].keywords
    },
    {
      id: 4,
      startFrame: cum4,
      endFrame: total,
      hinglish: spec.segments[4].text,
      keywords: spec.segments[4].keywords
    }
  ];

  const timelineDataTs = `export interface SegmentTiming {
  id: number;
  startFrame: number;
  endFrame: number;
  hinglish: string;
  keywords: string[];
}

export const TIMELINE_SEGMENTS: SegmentTiming[] = ${JSON.stringify(timelineSegments, null, 2)};
`;
  fs.mkdirSync(path.join(vDir, 'src/data'), { recursive: true });
  fs.writeFileSync(path.join(vDir, 'src/data/timelineData.ts'), timelineDataTs, 'utf-8');

  // 2. DynamicCaptions.tsx
  const dynamicCaptionsTsx = `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { TIMELINE_SEGMENTS } from '../data/timelineData';

export const DynamicCaptions: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const activeSegment = TIMELINE_SEGMENTS.find(
    (seg) => frame >= seg.startFrame && frame < seg.endFrame
  );

  if (!activeSegment) return null;

  const words = activeSegment.hinglish.split(' ');

  const pillSpring = spring({
    frame: frame - activeSegment.startFrame,
    fps,
    config: { damping: 14, stiffness: 160 },
  });

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 120,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 50,
        pointerEvents: 'none',
        padding: '0 40px',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(15, 23, 42, 0.94)',
          backdropFilter: 'blur(16px)',
          borderRadius: 24,
          padding: '18px 36px',
          border: '1.5px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5)',
          transform: \`scale(\${interpolate(pillSpring, [0, 1], [0.88, 1])})\`,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: 980,
        }}
      >
        {words.map((word, i) => {
          const upper = word.toUpperCase();
          const isKeyword = activeSegment.keywords.some((k) => upper.includes(k));

          return (
            <span
              key={i}
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 32,
                fontWeight: isKeyword ? 900 : 700,
                color: isKeyword ? '#FACC15' : '#FFFFFF',
                textShadow: isKeyword
                  ? '0 0 20px rgba(250, 204, 21, 0.75)'
                  : 'none',
                letterSpacing: '0.02em',
              }}
            >
              {word}
            </span>
          );
        })}
      </div>
    </div>
  );
};
`;
  fs.mkdirSync(path.join(vDir, 'src/components'), { recursive: true });
  fs.writeFileSync(path.join(vDir, 'src/components/DynamicCaptions.tsx'), dynamicCaptionsTsx, 'utf-8');

  // 3. Scene 1: Kinetic Letter Spring Hook (White background with dot grid)
  const scene1HookTsx = `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const letters = ${JSON.stringify(spec.hookLetters)};

  const containerScale = interpolate(frame, [0, 60], [1, 1.05], {
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        transform: \`scale(\${containerScale})\`,
      }}
    >
      {/* Background Graphic Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, #E2E8F0 2px, transparent 2px)',
          backgroundSize: '48px 48px',
          opacity: 0.8,
        }}
      />

      {/* Top Geometric Badge */}
      <div
        style={{
          position: 'absolute',
          top: 180,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '14px 32px',
          borderRadius: 999,
          backgroundColor: '#0F172A',
          color: '#FFFFFF',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        }}
      >
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: '#10B981',
            display: 'inline-block',
            boxShadow: '0 0 12px #10B981',
          }}
        />
        ${spec.tag}
      </div>

      {/* Massive Bold Hook Letter-by-Letter Typography */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        {letters.map((char, index) => {
          if (char === ' ') {
            return <div key={index} style={{ width: 32 }} />;
          }

          const delay = index * 2.2;
          const letterSpring = spring({
            frame: frame - delay,
            fps,
            config: { damping: 10, mass: 0.4, stiffness: 180 },
          });

          return (
            <span
              key={index}
              style={{
                fontFamily: 'Anton, Montserrat, sans-serif',
                fontSize: 116,
                fontWeight: 900,
                color: index % 3 === 0 ? '${spec.themeColor}' : '#0F172A',
                display: 'inline-block',
                transform: \`scale(\${interpolate(letterSpring, [0, 1], [0.1, 1])}) translateY(\${interpolate(letterSpring, [0, 1], [40, 0])}px)\`,
                opacity: interpolate(letterSpring, [0, 1], [0, 1]),
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* Subtitle Punchline */}
      <div
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 32,
          fontWeight: 800,
          color: '#64748B',
          marginTop: 28,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          zIndex: 10,
          transform: \`scale(\${spring({ frame: frame - 25, fps })})\`,
        }}
      >
        ${spec.hookSub}
      </div>
    </div>
  );
};
`;
  fs.mkdirSync(path.join(vDir, 'src/scenes'), { recursive: true });
  fs.writeFileSync(path.join(vDir, 'src/scenes/Scene1Hook.tsx'), scene1HookTsx, 'utf-8');

  // 4. Scene 2: Relatability (Pastel background with high contrast Anton typography)
  const scene2RelatabilityTsx = `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene2Relatability: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#FDF2F8',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Pink Dot Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, #F472B6 2px, transparent 2px)',
          backgroundSize: '44px 44px',
          opacity: 0.35,
        }}
      />

      <div
        style={{
          padding: '14px 34px',
          borderRadius: 999,
          backgroundColor: '#BE185D',
          color: '#FFFFFF',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.14em',
          marginBottom: 36,
          transform: \`scale(\${spring({ frame, fps })})\`,
          boxShadow: '0 10px 25px rgba(190, 24, 93, 0.3)',
        }}
      >
        ✦ CRITICAL REALITY CHECK ✦
      </div>

      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, Montserrat, sans-serif',
          fontSize: 108,
          lineHeight: 1.05,
          color: '#0F172A',
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          transform: \`translateY(\${interpolate(spring({ frame: frame - 10, fps }), [0, 1], [50, 0])}px)\`,
        }}
      >
        ${spec.sec2Title}
      </div>

      <div
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 34,
          fontWeight: 700,
          color: '#BE185D',
          marginTop: 32,
          textAlign: 'center',
          maxWidth: 820,
          lineHeight: 1.4,
          transform: \`scale(\${spring({ frame: frame - 20, fps })})\`,
        }}
      >
        ${spec.sec2Sub}
      </div>
    </div>
  );
};
`;
  fs.writeFileSync(path.join(vDir, 'src/scenes/Scene2Relatability.tsx'), scene2RelatabilityTsx, 'utf-8');

  // 5. Scene 3: Problem Glitch (Dark CRT scanlines with screen shake & red alert)
  const scene3GlitchTsx = `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene3ProblemGlitch: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const shakeX = Math.sin(frame * 2.8) * 8;
  const shakeY = Math.cos(frame * 3.1) * 6;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#030712',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        transform: \`translate(\${shakeX}px, \${shakeY}px)\`,
      }}
    >
      {/* Glitch CRT Scanlines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.45) 50%)',
          backgroundSize: '100% 6px',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Red Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.22) 0%, transparent 70%)',
          zIndex: 1,
        }}
      />

      {/* Top Warning Bar */}
      <div
        style={{
          position: 'absolute',
          top: 180,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '12px 28px',
          borderRadius: 12,
          backgroundColor: '#7F1D1D',
          border: '1px solid #DC2626',
          zIndex: 10,
        }}
      >
        <span
          style={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            backgroundColor: '#EF4444',
            boxShadow: '0 0 12px #EF4444',
            opacity: frame % 14 < 7 ? 1 : 0.3,
          }}
        />
        <span
          style={{
            color: '#FEE2E2',
            fontSize: 20,
            fontWeight: 900,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          CRITICAL THREAT TO YOUR PIPELINE
        </span>
      </div>

      <div
        style={{
          zIndex: 10,
          textAlign: 'center',
          maxWidth: 880,
        }}
      >
        <h2
          style={{
            fontFamily: 'Anton, Montserrat, sans-serif',
            fontSize: 104,
            lineHeight: 1.05,
            color: '#EF4444',
            textTransform: 'uppercase',
            marginBottom: 28,
            textShadow: '0 0 40px rgba(239, 68, 68, 0.6)',
          }}
        >
          ${spec.sec3Title}
        </h2>
        <div
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            border: '1.5px solid rgba(239, 68, 68, 0.5)',
            borderRadius: 24,
            padding: '28px 40px',
            fontSize: 32,
            color: '#F87171',
            fontWeight: 700,
            lineHeight: 1.4,
          }}
        >
          ${spec.sec3Desc}
        </div>
      </div>
    </div>
  );
};
`;
  fs.writeFileSync(path.join(vDir, 'src/scenes/Scene3ProblemGlitch.tsx'), scene3GlitchTsx, 'utf-8');

  // 6. Scene 4: Solution Reveal (Mint / Emerald / Cyan breakthrough)
  const scene4SolutionTsx = `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene4SolutionReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#F0FDF4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Emerald Dot Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, #34D399 2px, transparent 2px)',
          backgroundSize: '44px 44px',
          opacity: 0.35,
        }}
      />

      <div
        style={{
          padding: '14px 34px',
          borderRadius: 999,
          backgroundColor: '#059669',
          color: '#FFFFFF',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.14em',
          marginBottom: 36,
          transform: \`scale(\${spring({ frame, fps })})\`,
          boxShadow: '0 10px 25px rgba(5, 150, 105, 0.3)',
        }}
      >
        ${spec.sec4Badge}
      </div>

      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, Montserrat, sans-serif',
          fontSize: 110,
          lineHeight: 1.05,
          color: '#065F46',
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          transform: \`translateY(\${interpolate(spring({ frame: frame - 10, fps }), [0, 1], [50, 0])}px)\`,
        }}
      >
        ${spec.sec4Title}
      </div>

      <div
        style={{
          display: 'flex',
          gap: 20,
          marginTop: 40,
        }}
      >
        <div style={{ background: '#059669', color: '#fff', padding: '16px 28px', borderRadius: 18, fontSize: 26, fontWeight: 800 }}>
          ✓ 100% FREE
        </div>
        <div style={{ background: '#065F46', color: '#fff', padding: '16px 28px', borderRadius: 18, fontSize: 26, fontWeight: 800 }}>
          ✓ ZERO LATENCY
        </div>
        <div style={{ background: '#047857', color: '#fff', padding: '16px 28px', borderRadius: 18, fontSize: 26, fontWeight: 800 }}>
          ✓ PRODUCTION READY
        </div>
      </div>
    </div>
  );
};
`;
  fs.writeFileSync(path.join(vDir, 'src/scenes/Scene4SolutionReveal.tsx'), scene4SolutionTsx, 'utf-8');

  // 7. Scene 5: Interactive Tutorial Mockup (Dark tech UI with step headers & live code chips)
  const scene5TutorialTsx = `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene5Tutorial: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const steps = ${JSON.stringify(spec.sec5Steps)};
  const stepIndex = Math.min(steps.length - 1, Math.floor(interpolate(frame, [0, ${s4}], [0, steps.length])));
  const activeStep = steps[stepIndex];

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#070A11',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '120px 50px',
      }}
    >
      {/* Background Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: 150,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: \`radial-gradient(circle, \${activeStep.color}22 0%, transparent 70%)\`,
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      {/* Top Fixed Step Header Banner */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 40,
          zIndex: 10,
        }}
      >
        <div
          style={{
            padding: '10px 24px',
            borderRadius: 999,
            backgroundColor: activeStep.color,
            color: '#000000',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 20,
            fontWeight: 900,
            letterSpacing: '0.1em',
            marginBottom: 12,
            boxShadow: \`0 0 20px \${activeStep.color}88\`,
          }}
        >
          STEP \${activeStep.num} OF 04
        </div>
        <div
          style={{
            fontFamily: 'Anton, Montserrat, sans-serif',
            fontSize: 54,
            color: '#FFFFFF',
            textAlign: 'center',
            letterSpacing: '0.02em',
          }}
        >
          \${activeStep.title}
        </div>
      </div>

      {/* Interactive Terminal / Code Box */}
      <div
        style={{
          width: '100%',
          maxWidth: 920,
          backgroundColor: '#0F172A',
          border: \`2px solid \${activeStep.color}88\`,
          borderRadius: 24,
          padding: 36,
          boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
          zIndex: 10,
        }}
      >
        <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: '#EF4444' }} />
          <div style={{ width: 14, height: 14, borderRadius: 7, background: '#F59E0B' }} />
          <div style={{ width: 14, height: 14, borderRadius: 7, background: '#10B981' }} />
        </div>
        <pre
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 28,
            color: '#38BDF8',
            whiteSpace: 'pre-wrap',
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          \${activeStep.code}
        </pre>
      </div>

      {/* Step Indicators List */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          width: '100%',
          maxWidth: 920,
          marginTop: 40,
          zIndex: 10,
        }}
      >
        {steps.map((st, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              padding: '16px 24px',
              borderRadius: 16,
              backgroundColor: i === stepIndex ? 'rgba(30, 41, 59, 0.9)' : 'rgba(15, 23, 42, 0.5)',
              border: i === stepIndex ? \`1.5px solid \${st.color}\` : '1px solid rgba(255, 255, 255, 0.08)',
              color: i === stepIndex ? '#FFFFFF' : '#64748B',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            <span style={{ color: st.color, fontWeight: 900 }}>✓ STEP {st.num}:</span>
            <span>{st.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
`;
  fs.writeFileSync(path.join(vDir, 'src/scenes/Scene5Tutorial.tsx'), scene5TutorialTsx, 'utf-8');

  // 8. Scene 6: Outro CTA (High-energy pulsing badge & deliverable card)
  const scene6OutroTsx = `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene6OutroCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pulse = interpolate(Math.sin(frame * 0.2), [-1, 1], [0.96, 1.04]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 60px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Background Cyber Glow */}
      <div
        style={{
          position: 'absolute',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, ${spec.themeColor}33 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 40,
          fontWeight: 800,
          color: '#94A3B8',
          marginBottom: 28,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          zIndex: 10,
        }}
      >
        Want the Complete Source Code?
      </div>

      {/* Massive Gradient CTA Box */}
      <div
        style={{
          background: 'linear-gradient(135deg, ${spec.themeColor}, ${spec.accentColor})',
          borderRadius: 36,
          padding: '40px 72px',
          boxShadow: '0 25px 70px ${spec.themeColor}77',
          zIndex: 10,
          transform: \`scale(\${pulse})\`,
          marginBottom: 36,
        }}
      >
        <div
          style={{
            fontFamily: 'Anton, Montserrat, sans-serif',
            fontSize: 82,
            color: '#FFFFFF',
            letterSpacing: '0.04em',
            lineHeight: 1,
          }}
        >
          ${spec.ctaTitle}
        </div>
      </div>

      <div
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 32,
          fontWeight: 600,
          color: '#CBD5E1',
          maxWidth: 820,
          lineHeight: 1.4,
          marginBottom: 44,
          zIndex: 10,
        }}
      >
        ${spec.ctaSub}
      </div>

      {/* Deliverable Badge */}
      <div
        style={{
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
          border: '1.5px solid #334155',
          borderRadius: 22,
          padding: '18px 40px',
          fontSize: 26,
          color: '#38BDF8',
          fontFamily: 'JetBrains Mono, monospace',
          zIndex: 10,
        }}
      >
        🔗 parker-render.netlify.app/${spec.code.toLowerCase()}
      </div>
    </div>
  );
};
`;
  fs.writeFileSync(path.join(vDir, 'src/scenes/Scene6OutroCTA.tsx'), scene6OutroTsx, 'utf-8');

  // 9. MainReel.tsx with SFX sync
  const mainReelTsx = `import React from 'react';
import { Audio, Sequence, staticFile, useCurrentFrame } from 'remotion';
import '../styles/fonts.css';
import { Scene1Hook } from './scenes/Scene1Hook';
import { Scene2Relatability } from './scenes/Scene2Relatability';
import { Scene3ProblemGlitch } from './scenes/Scene3ProblemGlitch';
import { Scene4SolutionReveal } from './scenes/Scene4SolutionReveal';
import { Scene5Tutorial } from './scenes/Scene5Tutorial';
import { Scene6OutroCTA } from './scenes/Scene6OutroCTA';
import { DynamicCaptions } from './components/DynamicCaptions';

export const MainReel: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Visual Scenes Sequence */}
      <Sequence from={0} durationInFrames={${s1}}>
        <Scene1Hook />
      </Sequence>

      <Sequence from={${cum1}} durationInFrames={${s2}}>
        <Scene2Relatability />
      </Sequence>

      <Sequence from={${cum2}} durationInFrames={${s3}}>
        <Scene3ProblemGlitch />
      </Sequence>

      <Sequence from={${cum3}} durationInFrames={${s4}}>
        <Scene5Tutorial />
      </Sequence>

      <Sequence from={${cum4}} durationInFrames={${s5}}>
        <Scene6OutroCTA />
      </Sequence>

      {/* Synchronized Sound Effects */}
      <Sequence from={0} durationInFrames={40}>
        <Audio src={staticFile('sfx/bass_hit.wav')} volume={0.4} />
      </Sequence>

      <Sequence from={${cum1}} durationInFrames={30}>
        <Audio src={staticFile('sfx/whoosh.wav')} volume={0.3} />
      </Sequence>

      <Sequence from={${cum2}} durationInFrames={45}>
        <Audio src={staticFile('sfx/glitch.wav')} volume={0.4} />
      </Sequence>

      <Sequence from={${cum3}} durationInFrames={25}>
        <Audio src={staticFile('sfx/click.wav')} volume={0.25} />
      </Sequence>

      <Sequence from={${cum3 + 120}} durationInFrames={40}>
        <Audio src={staticFile('sfx/digital_scan.wav')} volume={0.3} />
      </Sequence>

      <Sequence from={${cum4}} durationInFrames={50}>
        <Audio src={staticFile('sfx/shield_up.wav')} volume={0.4} />
        <Audio src={staticFile('sfx/pop.wav')} volume={0.3} />
      </Sequence>

      {/* Voiceover Scenes */}
      <Sequence from={0} durationInFrames={${s1}}>
        <Audio src={staticFile('scene1.mp3')} volume={1.0} />
      </Sequence>
      <Sequence from={${cum1}} durationInFrames={${s2}}>
        <Audio src={staticFile('scene2.mp3')} volume={1.0} />
      </Sequence>
      <Sequence from={${cum2}} durationInFrames={${s3}}>
        <Audio src={staticFile('scene3.mp3')} volume={1.0} />
      </Sequence>
      <Sequence from={${cum3}} durationInFrames={${s4}}>
        <Audio src={staticFile('scene4.mp3')} volume={1.0} />
      </Sequence>
      <Sequence from={${cum4}} durationInFrames={${s5}}>
        <Audio src={staticFile('scene5.mp3')} volume={1.0} />
      </Sequence>

      {/* Background Music with Auto-Ducking */}
      <Audio src={staticFile('bg_music.mp3')} volume={frame >= ${cum4} ? 0.12 : 0.07} loop />

      {/* Dynamic Word-by-Word Captions with Yellow Highlights */}
      <DynamicCaptions />
    </div>
  );
};
`;
  fs.writeFileSync(path.join(vDir, 'src/MainReel.tsx'), mainReelTsx, 'utf-8');

  // 10. Root.tsx
  const rootTsx = `import React from 'react';
import { Composition } from 'remotion';
import { MainReel } from './MainReel';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="MasterReel"
        component={MainReel}
        durationInFrames={${total}}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
`;
  fs.writeFileSync(path.join(vDir, 'src/Root.tsx'), rootTsx, 'utf-8');

  console.log(`✅ Built Video #2 Identical Architecture for ${vKey} (${total} frames)`);
}

console.log('ALL 5 VIDEOS UPGRADED TO VIDEO #2 STYLE SUCCESSFULLY!');
