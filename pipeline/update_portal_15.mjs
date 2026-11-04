import fs from 'fs';

const indexPath = 'D:/anurag/content_journey/docs/index.html';
let html = fs.readFileSync(indexPath, 'utf-8');

// 1. Update pill count: "All (10)" -> "All (15)"
html = html.replace('All (10)', 'All (15)');

// 2. Add new pill buttons before #CRAWL
const newPills = `        <button onclick="jumpToCode('3D')" class="px-2.5 py-1 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-pink-400 font-semibold transition-colors">#3D</button>
        <button onclick="jumpToCode('WHATSAPP')" class="px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-semibold transition-colors">#WHATSAPP</button>
        <button onclick="jumpToCode('CLINE')" class="px-2.5 py-1 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 text-teal-400 font-semibold transition-colors">#CLINE</button>
        <button onclick="jumpToCode('CALL')" class="px-2.5 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 font-semibold transition-colors">#CALL</button>
        <button onclick="jumpToCode('LOCAL')" class="px-2.5 py-1 rounded-lg bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 text-violet-400 font-semibold transition-colors">#LOCAL</button>
`;

if (!html.includes("jumpToCode('3D')")) {
  html = html.replace('<button onclick="jumpToCode(\'CRAWL\')"', `${newPills}        <button onclick="jumpToCode('CRAWL')"`);
}

// 3. New Cards for Videos 11 to 15
const newCards = `      <!-- CARD 15: 3D (Video #15) -->
      <div id="card-3D" data-code="3D" data-aliases="V15,TRELLIS,MESH" class="resource-card glow-card bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="px-2.5 py-1 rounded-md bg-pink-500/15 border border-pink-500/30 text-pink-400 text-xs font-mono font-bold tracking-wider">CODE: 3D</span>
            <span class="text-[11px] font-semibold text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">Video #15 • 3D AI Generation</span>
          </div>
          <h2 class="text-xl font-bold text-white mb-2 leading-snug">2D to 3D AI Masterclass: Generate Game-Ready 3D Assets with Trellis & Blender</h2>
          <p class="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed">
            Stop 3D modeling from scratch! Transform single 2D concept images into textured, high-poly 3D meshes in 5 seconds with Microsoft Trellis & TripoSR.
          </p>
          <div class="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5 mb-5 font-mono text-[11px] space-y-1.5 text-slate-300">
            <div class="text-slate-400 font-semibold text-[10px] uppercase tracking-wider mb-1">⚡ Deliverables Included:</div>
            <div>• 1-Click Blender Python auto-import & optimization script</div>
            <div>• Trellis & TripoSR local environment setup guide</div>
            <div>• Game-ready PBR albedo/normal/roughness texture workflow</div>
          </div>
        </div>
        <div class="pt-2 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
          <a href="pdf/guide_video15_ai_3d_mesh_blender.pdf" download class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold text-xs transition-all shadow-md shadow-pink-600/20">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download PDF Guide
          </a>
          <a href="pdf/guide_video15_ai_3d_mesh_blender.pdf" target="_blank" class="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors">
            View PDF
          </a>
        </div>
      </div>

      <!-- CARD 14: WHATSAPP (Video #14) -->
      <div id="card-WHATSAPP" data-code="WHATSAPP" data-aliases="V14,CHATBOT,BOT2" class="resource-card glow-card bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">CODE: WHATSAPP</span>
            <span class="text-[11px] font-semibold text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">Video #14 • Chat Automation</span>
          </div>
          <h2 class="text-xl font-bold text-white mb-2 leading-snug">Autonomous WhatsApp AI Assistant with Python & Baileys</h2>
          <p class="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed">
            Turn your WhatsApp into a 24/7 autonomous client receptionist. Auto-replies, portfolio dispatch, and Google Calendar scheduling without Meta Cloud API per-message fees.
          </p>
          <div class="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5 mb-5 font-mono text-[11px] space-y-1.5 text-slate-300">
            <div class="text-slate-400 font-semibold text-[10px] uppercase tracking-wider mb-1">⚡ Deliverables Included:</div>
            <div>• Complete Python FastAPI + Baileys Webhook bridge</div>
            <div>• Anti-ban human typing delay & session recovery protocol</div>
            <div>• System prompt engineering for client conversion</div>
          </div>
        </div>
        <div class="pt-2 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
          <a href="pdf/guide_video14_whatsapp_ai_bot.pdf" download class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all shadow-md shadow-emerald-600/20">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download PDF Guide
          </a>
          <a href="pdf/guide_video14_whatsapp_ai_bot.pdf" target="_blank" class="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors">
            View PDF
          </a>
        </div>
      </div>

      <!-- CARD 13: CLINE (Video #13) -->
      <div id="card-CLINE" data-code="CLINE" data-aliases="V13,CURSOR,ROO" class="resource-card glow-card bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="px-2.5 py-1 rounded-md bg-teal-500/15 border border-teal-500/30 text-teal-400 text-xs font-mono font-bold tracking-wider">CODE: CLINE</span>
            <span class="text-[11px] font-semibold text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">Video #13 • Autonomous Coding</span>
          </div>
          <h2 class="text-xl font-bold text-white mb-2 leading-snug">Cursor AI Killer: Autonomous Coding in VS Code with Cline & DeepSeek</h2>
          <p class="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed">
            Stop paying $20/month for Cursor AI. Setup standard VS Code with Cline + DeepSeek-V3 for $0.05/day with full terminal execution and whole-repo context.
          </p>
          <div class="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5 mb-5 font-mono text-[11px] space-y-1.5 text-slate-300">
            <div class="text-slate-400 font-semibold text-[10px] uppercase tracking-wider mb-1">⚡ Deliverables Included:</div>
            <div>• Battle-tested .clinerules developer configuration</div>
            <div>• DeepSeek-V3 ultra-low cost API routing guide</div>
            <div>• Model Context Protocol (MCP) integrations checklist</div>
          </div>
        </div>
        <div class="pt-2 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
          <a href="pdf/guide_video13_cline_cursor_alternative.pdf" download class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs transition-all shadow-md shadow-teal-600/20">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download PDF Guide
          </a>
          <a href="pdf/guide_video13_cline_cursor_alternative.pdf" target="_blank" class="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors">
            View PDF
          </a>
        </div>
      </div>

      <!-- CARD 12: CALL (Video #12) -->
      <div id="card-CALL" data-code="CALL" data-aliases="V12,LIVEKIT,VOICEBOT" class="resource-card glow-card bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="px-2.5 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-wider">CODE: CALL</span>
            <span class="text-[11px] font-semibold text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">Video #12 • Voice Agents</span>
          </div>
          <h2 class="text-xl font-bold text-white mb-2 leading-snug">Real-Time AI Voice Agent Architecture: LiveKit + WebRTC</h2>
          <p class="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed">
            Build conversational voice bots with sub-300ms latency. Instant user interruption detection, bilingual Hindi/English speech, and automated calendar bookings.
          </p>
          <div class="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5 mb-5 font-mono text-[11px] space-y-1.5 text-slate-300">
            <div class="text-slate-400 font-semibold text-[10px] uppercase tracking-wider mb-1">⚡ Deliverables Included:</div>
            <div>• Complete Python LiveKit Agents starter project</div>
            <div>• Silero VAD + Deepgram Nova-2 WebRTC pipeline</div>
            <div>• Phone number SIP trunking configuration guide</div>
          </div>
        </div>
        <div class="pt-2 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
          <a href="pdf/guide_video12_livekit_voice_agent.pdf" download class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-xs transition-all shadow-md shadow-cyan-600/20">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download PDF Guide
          </a>
          <a href="pdf/guide_video12_livekit_voice_agent.pdf" target="_blank" class="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors">
            View PDF
          </a>
        </div>
      </div>

      <!-- CARD 11: LOCAL (Video #11) -->
      <div id="card-LOCAL" data-code="LOCAL" data-aliases="V11,OLLAMA,DEEPSEEKR1" class="resource-card glow-card bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="px-2.5 py-1 rounded-md bg-violet-500/15 border border-violet-500/30 text-violet-400 text-xs font-mono font-bold tracking-wider">CODE: LOCAL</span>
            <span class="text-[11px] font-semibold text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">Video #11 • Local AI</span>
          </div>
          <h2 class="text-xl font-bold text-white mb-2 leading-snug">The 100% Free Local AI Master Guide: Run 70B & DeepSeek Offline</h2>
          <p class="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed">
            Zero cloud API bills. Run DeepSeek-R1, LLaMA 3.3 70B, and Qwen 2.5 on consumer GPUs / Macbooks using Ollama, 4-bit GGUF quantization, and Open WebUI.
          </p>
          <div class="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5 mb-5 font-mono text-[11px] space-y-1.5 text-slate-300">
            <div class="text-slate-400 font-semibold text-[10px] uppercase tracking-wider mb-1">⚡ Deliverables Included:</div>
            <div>• Complete VRAM / RAM hardware sizing cheat sheet</div>
            <div>• 3-Minute 1-line Ollama setup & Dockerized WebUI</div>
            <div>• OpenAI-compatible Python drop-in script</div>
          </div>
        </div>
        <div class="pt-2 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
          <a href="pdf/guide_video11_local_llm_ollama.pdf" download class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-xs transition-all shadow-md shadow-violet-600/20">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download PDF Guide
          </a>
          <a href="pdf/guide_video11_local_llm_ollama.pdf" target="_blank" class="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors">
            View PDF
          </a>
        </div>
      </div>
`;

if (!html.includes('id="card-15"') && !html.includes('id="card-3D"')) {
  html = html.replace('<!-- CARD 10: CRAWL (Video #10) -->', `${newCards}\n      <!-- CARD 10: CRAWL (Video #10) -->`);
}

fs.writeFileSync(indexPath, html, 'utf-8');
console.log('✅ Successfully updated docs/index.html with all 15 video cards and pills!');
