import fs from 'fs';
import path from 'path';

const timings = JSON.parse(fs.readFileSync('D:/anurag/content_journey/pipeline/timings_11_15.json', 'utf-8'));

const METADATA = {
  "video#11": {
    themeColor: '#8b5cf6',
    secondaryColor: '#ec4899',
    tag: "LOCAL AI • ZERO CLOUD BILLS",
    code: "LOCAL",
    hookTitle: "STOP CLOUD API BILLS!",
    hookSub: "Run 70B & DeepSeek-R1 Offline on your PC",
    scene2Title: "Cloud LLMs = Privacy Risk & High Costs",
    scene2Desc: "Metered tokens, unpredictable invoices & sensitive client code transmitted to third-party servers.",
    scene3Title: "Ollama + 4-Bit GGUF Quantization",
    scene3Chips: ["DeepSeek-R1 8B (35 t/s)", "Qwen 2.5 Coder 14B", "LLaMA 3.3 70B"],
    scene4Title: "Terminal Execution in 1 Line",
    scene4Code: "$ ollama run deepseek-r1:8b\\n⚡ 45 tokens/sec • 100% Offline • $0.00",
    ctaTitle: "Comment 'LOCAL' for Complete Guide",
    ctaSub: "Hardware Sizing Cheat Sheet + 1-Click Setup Blueprint"
  },
  "video#12": {
    themeColor: '#06b6d4',
    secondaryColor: '#3b82f6',
    tag: "VOICE AGENTS • SUB-300MS",
    code: "CALL",
    hookTitle: "REAL-TIME AI PHONE CALLS!",
    hookSub: "300ms Glass-Smooth Response Time with LiveKit",
    scene2Title: "Old Voice Bots = 3s Awkward Lag",
    scene2Desc: "Robotic voices, delayed replies, and expensive Twilio per-minute enterprise markups.",
    scene3Title: "LiveKit Agents + Gemini Live",
    scene3Chips: ["Bidirectional WebRTC", "Silero VAD (Zero Lag)", "Natural Turn-Taking"],
    scene4Title: "Instant Interruption & Booking",
    scene4Code: "assistant.say('Namaste! Appointment scheduled for 5 PM!')\\n⚡ Auto-resumes on interruption",
    ctaTitle: "Comment 'CALL' for Voice Bot Repo",
    ctaSub: "Complete Python LiveKit Starter + Telephony Template"
  },
  "video#13": {
    themeColor: '#10b981',
    secondaryColor: '#06b6d4',
    tag: "AUTONOMOUS CODING • VS CODE",
    code: "CLINE",
    hookTitle: "CURSOR AI IS OVERPRICED!",
    hookSub: "Setup VS Code + Cline + DeepSeek for $0.05/day",
    scene2Title: "$20/Mo Closed Ecosystem",
    scene2Desc: "Proprietary fork, peak-hour throttling, and overpriced monthly subscriptions.",
    scene3Title: "Cline + DeepSeek V3 ($0.14/M Tokens)",
    scene3Chips: ["Standard VS Code", "95% Cheaper than Cursor", "Autonomous Terminal"],
    scene4Title: "Zero-Hallucination .clinerules",
    scene4Code: "# .clinerules\\n- Self-heals compilation errors\\n- Runs test suites autonomously",
    ctaTitle: "Comment 'CLINE' for Setup Guide",
    ctaSub: "Tested .clinerules template + Budget API routing"
  },
  "video#14": {
    themeColor: '#22c55e',
    secondaryColor: '#10b981',
    tag: "WHATSAPP AGENT • 24/7 AUTO",
    code: "WHATSAPP",
    hookTitle: "24/7 WHATSAPP AI ASSISTANT!",
    hookSub: "Automate Client Chats, PDF Quotes & Calendar",
    scene2Title: "Meta Cloud API Headaches",
    scene2Desc: "Cumbersome business approvals, rigid template rejections, and per-message fees.",
    scene3Title: "Python + Baileys Socket Bridge",
    scene3Chips: ["Existing Phone Number", "Gemini 2.5 Flash Brain", "Anti-Ban Human Delays"],
    scene4Title: "Instant Invoices & Scheduling",
    scene4Code: "POST /send-message {\\n  'recipient': '+91...',\\n  'pdf': 'quote_invoice.pdf'\\n}",
    ctaTitle: "Comment 'WHATSAPP' for Blueprint",
    ctaSub: "Python FastAPI Bridge + Anti-Ban Protocol Guide"
  },
  "video#15": {
    themeColor: '#ec4899',
    secondaryColor: '#8b5cf6',
    tag: "3D GENERATIVE AI • BLENDER",
    code: "3D",
    hookTitle: "2D IMAGE TO 3D IN 5 SECONDS!",
    hookSub: "Stop Modeling from Scratch: Trellis AI + Blender",
    scene2Title: "Manual 3D Modeling Takes Days",
    scene2Desc: "Box modeling, retopology, UV unwrapping, and texture baking kill development speed.",
    scene3Title: "Microsoft Trellis + TripoSR",
    scene3Chips: ["Single 2D Input Photo", "High-Poly Textured Mesh", "PBR Albedo/Normal/Roughness"],
    scene4Title: "1-Click Blender Auto-Import",
    scene4Code: "import bpy\\nbpy.ops.import_scene.gltf(filepath='ai_mesh.glb')\\n⚡ Decimated & Unreal Ready!",
    ctaTitle: "Comment '3D' for Blender Addon",
    ctaSub: "Python Bridge Script + Local Trellis Setup Guide"
  }
};

for (const [videoKey, vMeta] of Object.entries(METADATA)) {
  const vDir = path.join('D:/anurag/content_journey/videos', videoKey);
  const t = timings[videoKey];
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

  // 1. Root.tsx
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

  // 2. MainReel.tsx
  const mainReelTsx = `import React from 'react';
import { Audio, Sequence, staticFile, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { CameraRig } from './components/CameraRig';
import { FilmGrain } from './components/FilmGrain';

export const MainReel: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const getMusicVolume = (f: number): number => {
    if (f < 15) return (f / 15) * 0.08;
    if (f >= ${cum4}) return 0.12;
    return 0.075;
  };

  return (
    <CameraRig>
      <div
        style={{
          width: 1080,
          height: 1920,
          backgroundColor: '#05070e',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          color: '#ffffff',
        }}
      >
        {/* Background Cyber Glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 50% 25%, ${vMeta.themeColor}22 0%, transparent 70%), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '100% 100%, 64px 64px, 64px 64px',
          }}
        />

        {/* Top Header Tag */}
        <div style={{ position: 'absolute', top: 90, left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 30 }}>
          <div style={{
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid ${vMeta.themeColor}66',
            borderRadius: 999,
            padding: '10px 28px',
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: 2.5,
            color: '${vMeta.themeColor}',
            textTransform: 'uppercase',
            backdropFilter: 'blur(12px)',
          }}>
            ⚡ ${vMeta.tag}
          </div>
        </div>

        {/* SCENE 1: HOOK */}
        <Sequence from={0} durationInFrames={${s1}}>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 60px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
            <div style={{
              background: '${vMeta.themeColor}22',
              border: '2px solid ${vMeta.themeColor}',
              borderRadius: 24,
              padding: '16px 36px',
              color: '${vMeta.themeColor}',
              fontSize: 26,
              fontWeight: 900,
              letterSpacing: 1.5,
              marginBottom: 40,
            }}>
              🚨 CRITICAL TECH ALERT
            </div>
            <h1 style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.15, textTransform: 'uppercase', marginBottom: 28, textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
              ${vMeta.hookTitle}
            </h1>
            <p style={{ fontSize: 34, color: '#94a3b8', fontWeight: 600, maxWidth: 840, lineHeight: 1.4 }}>
              ${vMeta.hookSub}
            </p>
          </div>
        </Sequence>

        {/* SCENE 2: PROBLEM */}
        <Sequence from={${cum1}} durationInFrames={${s2}}>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 60px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
            <div style={{ background: '#ef444422', border: '2px solid #ef4444', borderRadius: 20, padding: '12px 32px', color: '#f87171', fontSize: 24, fontWeight: 800, marginBottom: 36 }}>
              ⚠️ THE HUGE HIDDEN PROBLEM
            </div>
            <h2 style={{ fontSize: 62, fontWeight: 900, lineHeight: 1.2, marginBottom: 28 }}>
              ${vMeta.scene2Title}
            </h2>
            <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(239, 68, 68, 0.4)', borderRadius: 28, padding: 36, maxWidth: 860, fontSize: 32, color: '#cbd5e1', lineHeight: 1.5 }}>
              ${vMeta.scene2Desc}
            </div>
          </div>
        </Sequence>

        {/* SCENE 3: SOLUTION */}
        <Sequence from={${cum2}} durationInFrames={${s3}}>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 60px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
            <div style={{ background: '${vMeta.themeColor}22', border: '2px solid ${vMeta.themeColor}', borderRadius: 20, padding: '12px 32px', color: '${vMeta.themeColor}', fontSize: 24, fontWeight: 800, marginBottom: 36 }}>
              💡 MODERN 2026 STACK
            </div>
            <h2 style={{ fontSize: 60, fontWeight: 900, lineHeight: 1.2, marginBottom: 36 }}>
              ${vMeta.scene3Title}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%', maxWidth: 840 }}>
              ${vMeta.scene3Chips.map(chip => `
                <div style={{ background: 'rgba(30, 41, 59, 0.85)', border: '1px solid ${vMeta.themeColor}66', borderRadius: 20, padding: '24px 32px', fontSize: 32, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 18, color: '#f8fafc' }}>
                  <span style={{ color: '${vMeta.themeColor}', fontSize: 36 }}>⚡</span> ${chip}
                </div>
              `).join('')}
            </div>
          </div>
        </Sequence>

        {/* SCENE 4: CODE / ACTION */}
        <Sequence from={${cum3}} durationInFrames={${s4}}>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 60px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
            <div style={{ background: '${vMeta.secondaryColor}22', border: '2px solid ${vMeta.secondaryColor}', borderRadius: 20, padding: '12px 32px', color: '${vMeta.secondaryColor}', fontSize: 24, fontWeight: 800, marginBottom: 36 }}>
              💻 PRODUCTION IMPLEMENTATION
            </div>
            <h2 style={{ fontSize: 58, fontWeight: 900, lineHeight: 1.2, marginBottom: 32 }}>
              ${vMeta.scene4Title}
            </h2>
            <div style={{ background: '#020617', border: '2px solid ${vMeta.secondaryColor}88', borderRadius: 28, padding: 36, width: '100%', maxWidth: 880, textAlign: 'left', fontFamily: 'monospace', fontSize: 28, color: '#38bdf8', lineHeight: 1.6, boxShadow: '0 20px 50px rgba(0,0,0,0.8)' }}>
              <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                <div style={{ width: 14, height: 14, borderRadius: 7, background: '#ef4444' }} />
                <div style={{ width: 14, height: 14, borderRadius: 7, background: '#f59e0b' }} />
                <div style={{ width: 14, height: 14, borderRadius: 7, background: '#10b981' }} />
              </div>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>${vMeta.scene4Code}</pre>
            </div>
          </div>
        </Sequence>

        {/* SCENE 5: OUTRO CTA */}
        <Sequence from={${cum4}} durationInFrames={${s5}}>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 60px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
            <div style={{ fontSize: 44, fontWeight: 800, color: '#94a3b8', marginBottom: 24 }}>
              Want the Full Deliverable & Source Code?
            </div>
            <div style={{
              background: 'linear-gradient(135deg, ${vMeta.themeColor}, ${vMeta.secondaryColor})',
              borderRadius: 36,
              padding: '36px 64px',
              fontSize: 68,
              fontWeight: 900,
              color: '#ffffff',
              boxShadow: '0 20px 60px ${vMeta.themeColor}66',
              marginBottom: 36,
              letterSpacing: 2,
              transform: \`scale(\${interpolate(Math.sin(frame * 0.15), [-1, 1], [0.97, 1.03])})\`,
            }}>
              COMMENT "${vMeta.code}"
            </div>
            <p style={{ fontSize: 32, color: '#cbd5e1', maxWidth: 800, lineHeight: 1.4, marginBottom: 40 }}>
              ${vMeta.ctaSub}
            </p>
            <div style={{ background: 'rgba(15, 23, 42, 0.9)', border: '1px solid #334155', borderRadius: 20, padding: '16px 36px', fontSize: 24, color: '#38bdf8', fontFamily: 'monospace' }}>
              parker-render.netlify.app/${vMeta.code.toLowerCase()}
            </div>
          </div>
        </Sequence>

        {/* ==================================================== */}
        {/* 🎙️ GEMINI NATURAL VOICEOVER SCENE TRACKS              */}
        {/* ==================================================== */}
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

        {/* 🎵 BACKGROUND MUSIC */}
        <Audio src={staticFile('bg_music.mp3')} volume={getMusicVolume(frame)} loop />

        <FilmGrain />
      </div>
    </CameraRig>
  );
};
`;
  fs.writeFileSync(path.join(vDir, 'src/MainReel.tsx'), mainReelTsx, 'utf-8');

  // 3. package.json
  const pkg = {
    name: `content-journey-${videoKey.replace('#', '-')}`,
    version: "1.0.0",
    description: vMeta.hookTitle,
    scripts: {
      start: "remotion preview src/index.ts",
      render: "remotion render src/index.ts MasterReel out/master_reel.mp4"
    },
    dependencies: {
      "@remotion/cli": "4.0.539",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "remotion": "4.0.539"
    }
  };
  fs.writeFileSync(path.join(vDir, 'package.json'), JSON.stringify(pkg, null, 2), 'utf-8');

  console.log(`✅ Generated Remotion Project for ${videoKey} (Total frames: ${total})`);
}

console.log('ALL REMOTION PROJECTS (11-15) CREATED SUCCESSFULLY!');
