import fs from 'fs';

const htmlPath = 'D:/anurag/content_journey/docs/index.html';

const newCardsHTML = `
      <!-- CARD 10: CRAWL (Video #10) -->
      <div id="card-CRAWL" data-code="CRAWL" data-aliases="V10,CRAWL4AI,SCRAPER" class="resource-card glow-card bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-wider">CODE: CRAWL</span>
            <span class="text-[11px] font-semibold text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">Video #10 • Web Scraping</span>
          </div>
          <h2 class="text-xl font-bold text-white mb-2 leading-snug">Modern Web Scraping in 2026: Crawl4AI + Gemini Structured JSON</h2>
          <p class="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed">
            Stop using BeautifulSoup in 2026. Stealth headless Chromium engine that bypasses Cloudflare bot protection and extracts LLM-ready markdown with structured schema JSON output.
          </p>
          <div class="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5 mb-5 font-mono text-[11px] space-y-1.5 text-slate-300">
            <div class="text-slate-400 font-semibold text-[10px] uppercase tracking-wider mb-1">⚡ Deliverables Included:</div>
            <div>• 15-Second Crawl4AI Asyncio crawler setup</div>
            <div>• Pydantic schema-driven Gemini structured extractor</div>
            <div>• Complete anti-bot stealth configuration boilerplate</div>
          </div>
        </div>
        <div class="pt-2 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
          <a href="pdf/guide_video10_crawl4ai_web_scraper.pdf" download class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs transition-all shadow-md shadow-amber-600/20">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download PDF Guide
          </a>
          <a href="pdf/guide_video10_crawl4ai_web_scraper.pdf" target="_blank" class="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors">
            View PDF
          </a>
        </div>
      </div>

      <!-- CARD 9: 4K (Video #9) -->
      <div id="card-4K" data-code="4K" data-aliases="V9,FFMPEG,CRF23" class="resource-card glow-card bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="px-2.5 py-1 rounded-md bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold tracking-wider">CODE: 4K</span>
            <span class="text-[11px] font-semibold text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">Video #9 • Video Engineering</span>
          </div>
          <h2 class="text-xl font-bold text-white mb-2 leading-snug">Instagram 4K Crystal Sharpness Hack: 1080x1920 CRF 23 FFmpeg Engine</h2>
          <p class="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed">
            Stop Instagram from pixelating your 4K clips. Bypass Instagram's compression algorithm using BT.709 color profiles and native H.264 High Profile 1080x1920 master rendering.
          </p>
          <div class="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5 mb-5 font-mono text-[11px] space-y-1.5 text-slate-300">
            <div class="text-slate-400 font-semibold text-[10px] uppercase tracking-wider mb-1">⚡ Deliverables Included:</div>
            <div>• Master FFmpeg lossless vertical conversion command</div>
            <div>• Windows 1-click drag-and-drop batch converter</div>
            <div>• BT.709 color matrix & 320kbps AAC audio flags</div>
          </div>
        </div>
        <div class="pt-2 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
          <a href="pdf/guide_video9_4k_instagram_ffmpeg.pdf" download class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs transition-all shadow-md shadow-rose-600/20">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download PDF Guide
          </a>
          <a href="pdf/guide_video9_4k_instagram_ffmpeg.pdf" target="_blank" class="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors">
            View PDF
          </a>
        </div>
      </div>

      <!-- CARD 8: BOT (Video #8) -->
      <div id="card-BOT" data-code="BOT" data-aliases="V8,LANGGRAPH,AGENT2" class="resource-card glow-card bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">CODE: BOT</span>
            <span class="text-[11px] font-semibold text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">Video #8 • Autonomous Agents</span>
          </div>
          <h2 class="text-xl font-bold text-white mb-2 leading-snug">20-Line Python Autonomous Agent: LangGraph, Gemini Flash & Memory</h2>
          <p class="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed">
            Move beyond simple ChatGPT prompts. Build a cyclic autonomous agent with persistent SQLite memory, dynamic tool calling, and self-healing reasoning loops with zero server costs.
          </p>
          <div class="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5 mb-5 font-mono text-[11px] space-y-1.5 text-slate-300">
            <div class="text-slate-400 font-semibold text-[10px] uppercase tracking-wider mb-1">⚡ Deliverables Included:</div>
            <div>• Complete 20-line copy-paste LangGraph agent script</div>
            <div>• SQLite checkpointer memory architecture</div>
            <div>• DuckDuckGo search & Python REPL tool integration</div>
          </div>
        </div>
        <div class="pt-2 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
          <a href="pdf/guide_video8_python_autonomous_agent.pdf" download class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all shadow-md shadow-emerald-600/20">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download PDF Guide
          </a>
          <a href="pdf/guide_video8_python_autonomous_agent.pdf" target="_blank" class="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors">
            View PDF
          </a>
        </div>
      </div>

      <!-- CARD 7: DEEPSEEK (Video #7) -->
      <div id="card-DEEPSEEK" data-code="DEEPSEEK" data-aliases="V7,CURSOR,MOE" class="resource-card glow-card bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="px-2.5 py-1 rounded-md bg-sky-500/15 border border-sky-500/30 text-sky-400 text-xs font-mono font-bold tracking-wider">CODE: DEEPSEEK</span>
            <span class="text-[11px] font-semibold text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">Video #7 • Open-Source AI</span>
          </div>
          <h2 class="text-xl font-bold text-white mb-2 leading-snug">DeepSeek V3 Local & Cursor IDE Setup: 100x Cheaper than Claude 3.7</h2>
          <p class="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed">
            Stop paying monthly subscription fees for Claude 3.7. DeepSeek V3 671B MoE beats benchmarks at just $0.14 per 1M tokens. 1-click Cursor setup and local Ollama guide.
          </p>
          <div class="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5 mb-5 font-mono text-[11px] space-y-1.5 text-slate-300">
            <div class="text-slate-400 font-semibold text-[10px] uppercase tracking-wider mb-1">⚡ Deliverables Included:</div>
            <div>• Cursor IDE custom OpenAI base URL configuration</div>
            <div>• Local Ollama offline setup for private code reasoning</div>
            <div>• 90%+ SWE-Bench prompt templates</div>
          </div>
        </div>
        <div class="pt-2 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
          <a href="pdf/guide_video7_deepseek_v3_setup.pdf" download class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs transition-all shadow-md shadow-sky-600/20">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download PDF Guide
          </a>
          <a href="pdf/guide_video7_deepseek_v3_setup.pdf" target="_blank" class="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors">
            View PDF
          </a>
        </div>
      </div>

      <!-- CARD 6: VOICE (Video #6) -->
      <div id="card-VOICE" data-code="VOICE" data-aliases="V6,F5TTS,TTS" class="resource-card glow-card bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="px-2.5 py-1 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold tracking-wider">CODE: VOICE</span>
            <span class="text-[11px] font-semibold text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">Video #6 • Voice AI</span>
          </div>
          <h2 class="text-xl font-bold text-white mb-2 leading-snug">Stop Paying $22/Month for ElevenLabs: Free Local F5-TTS Voice Cloning</h2>
          <p class="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed">
            Clone your voice with 100% natural human emotions, accent and breathing pauses using just 5 seconds of audio. Runs completely offline on PyTorch CUDA with zero credit limits.
          </p>
          <div class="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5 mb-5 font-mono text-[11px] space-y-1.5 text-slate-300">
            <div class="text-slate-400 font-semibold text-[10px] uppercase tracking-wider mb-1">⚡ Deliverables Included:</div>
            <div>• 1-Click PyTorch & CUDA 12.1 environment installer</div>
            <div>• Complete Python F5-TTS voice synthesis script</div>
            <div>• Hindi, Hinglish & English natural flow matching guide</div>
          </div>
        </div>
        <div class="pt-2 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
          <a href="pdf/guide_video6_f5_tts_voice_cloning.pdf" download class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs transition-all shadow-md shadow-purple-600/20">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download PDF Guide
          </a>
          <a href="pdf/guide_video6_f5_tts_voice_cloning.pdf" target="_blank" class="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors">
            View PDF
          </a>
        </div>
      </div>
`;

let html = fs.readFileSync(htmlPath, 'utf-8');

// Insert new cards right at the start of cardsGrid
html = html.replace('<div id="cardsGrid" class="grid grid-cols-1 md:grid-cols-2 gap-6">', '<div id="cardsGrid" class="grid grid-cols-1 md:grid-cols-2 gap-6">' + newCardsHTML);

// Update Quick Code Filter Pills
const oldPills = `<button onclick="filterByCode('')" class="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 transition-colors">All (5)</button>`;
const newPills = `<button onclick="filterByCode('')" class="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 transition-colors">All (10)</button>
        <button onclick="jumpToCode('CRAWL')" class="px-2.5 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 font-semibold transition-colors">#CRAWL</button>
        <button onclick="jumpToCode('4K')" class="px-2.5 py-1 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 font-semibold transition-colors">#4K</button>
        <button onclick="jumpToCode('BOT')" class="px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-semibold transition-colors">#BOT</button>
        <button onclick="jumpToCode('DEEPSEEK')" class="px-2.5 py-1 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-400 font-semibold transition-colors">#DEEPSEEK</button>
        <button onclick="jumpToCode('VOICE')" class="px-2.5 py-1 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-400 font-semibold transition-colors">#VOICE</button>`;

html = html.replace(oldPills, newPills);

fs.writeFileSync(htmlPath, html, 'utf-8');
console.log('Successfully updated docs/index.html with all 10 cards and filter pills!');
