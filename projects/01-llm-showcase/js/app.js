// ============================================
// Model Data — 30 models, 9 providers
// ============================================
const MODELS = [
  // ── Anthropic ──
  { id:'claude-fable-5', name:'Claude Fable 5', org:'Anthropic', logo:'assets/logos/claude.svg', color:'#D4A574', badge:'Creative', openSource:false,
    desc:'Anthropic 创意旗舰模型，专为叙事、创意写作和复杂情境推理优化。在保持 Claude 系列安全性的基础上，大幅提升创造性输出能力。',
    strengths:['创意写作','叙事','推理','编程'], tags:['reasoning','coding'], context:'1M', multimodal:'文本 + 图像', released:'2026', bestFor:'创意写作、叙事生成、复杂情境推理', pricing:'$10 / $50' },
  { id:'claude-opus-4-8-thinking', name:'Claude Opus 4.8 (Thinking)', org:'Anthropic', logo:'assets/logos/claude.svg', color:'#D4A574', badge:'Thinking', openSource:false,
    desc:'Claude Opus 4.8 思维链版本，内置扩展推理能力。在数学证明、代码调试和多步推理任务中表现卓越。',
    strengths:['推理','编程','数学','长文档'], tags:['reasoning','coding'], context:'1M', multimodal:'文本 + 图像', released:'2026', bestFor:'复杂推理、数学证明、代码调试', pricing:'$5 / $25' },
  { id:'claude-opus-4-8', name:'Claude Opus 4.8', org:'Anthropic', logo:'assets/logos/claude.svg', color:'#D4A574', badge:'Flagship', openSource:false,
    desc:'Anthropic 最新旗舰模型，1M 上下文窗口。在编程、分析和指令遵循方面达到新高，响应速度显著提升。',
    strengths:['编程','指令遵循','分析','安全'], tags:['reasoning','coding'], context:'1M', multimodal:'文本 + 图像', released:'2026', bestFor:'代码生成、文档分析、企业应用', pricing:'$5 / $25' },
  { id:'claude-opus-4-7-thinking', name:'Claude Opus 4.7 (Thinking)', org:'Anthropic', logo:'assets/logos/claude.svg', color:'#D4A574', badge:'Thinking', openSource:false,
    desc:'Opus 4.7 思维链版本，在需要深度推理的场景中表现出色。支持渐进式思考，可调节推理深度。',
    strengths:['推理','编程','数学','科学'], tags:['reasoning','coding'], context:'1M', multimodal:'文本 + 图像', released:'2026', bestFor:'科学推理、算法设计、深度分析', pricing:'$5 / $25' },
  { id:'claude-opus-4-7', name:'Claude Opus 4.7', org:'Anthropic', logo:'assets/logos/claude.svg', color:'#D4A574', badge:'Pro', openSource:false,
    desc:'Opus 4.7 标准版本，在性能与成本之间取得平衡。适合需要高质量输出但不需要深度推理的场景。',
    strengths:['编程','分析','指令遵循'], tags:['reasoning','coding'], context:'1M', multimodal:'文本 + 图像', released:'2026', bestFor:'日常编程、文档处理、通用任务', pricing:'$5 / $25' },
  { id:'claude-opus-4-6-thinking', name:'Claude Opus 4.6 (Thinking)', org:'Anthropic', logo:'assets/logos/claude.svg', color:'#D4A574', badge:'Thinking', openSource:false,
    desc:'Opus 4.6 思维链版本，推理能力扎实。在数学和编程基准测试中持续保持高水准。',
    strengths:['推理','编程','数学'], tags:['reasoning','coding'], context:'1M', multimodal:'文本 + 图像', released:'2025', bestFor:'数学推理、代码生成、逻辑推演', pricing:'$5 / $25' },
  { id:'claude-opus-4-6', name:'Claude Opus 4.6', org:'Anthropic', logo:'assets/logos/claude.svg', color:'#D4A574', badge:'Pro', openSource:false,
    desc:'Opus 4.6 标准版本，稳定的高质量输出。在企业级应用和长文档处理场景中广受好评。',
    strengths:['编程','长文档','指令遵循'], tags:['reasoning','coding'], context:'1M', multimodal:'文本 + 图像', released:'2025', bestFor:'企业应用、长文档分析、代码审查', pricing:'$5 / $25' },
  { id:'claude-sonnet-4-6', name:'Claude Sonnet 4.6', org:'Anthropic', logo:'assets/logos/claude.svg', color:'#D4A574', badge:'Balanced', openSource:false,
    desc:'Claude Sonnet 系列最新版本，在性能与速度之间取得最佳平衡。适合高频调用场景，性价比突出。',
    strengths:['编程','速度','指令遵循'], tags:['reasoning','coding'], context:'1M', multimodal:'文本 + 图像', released:'2025', bestFor:'日常编程、快速原型、高频 API 调用', pricing:'$3 / $15' },
  { id:'claude-opus-4-5-thinking', name:'Claude Opus 4.5 (Thinking)', org:'Anthropic', logo:'assets/logos/claude.svg', color:'#D4A574', badge:'Thinking', openSource:false,
    desc:'Opus 4.5 思维链版本（2025 年 11 月发布），32K 扩展思考。在推理密集型任务中表现出色。',
    strengths:['推理','编程','数学'], tags:['reasoning','coding'], context:'200K', multimodal:'文本 + 图像', released:'2025', bestFor:'数学推理、逻辑分析、代码生成', pricing:'$5 / $25' },
  { id:'claude-opus-4-5', name:'Claude Opus 4.5', org:'Anthropic', logo:'assets/logos/claude.svg', color:'#D4A574', badge:'Legacy', openSource:false,
    desc:'Opus 4.5 标准版本（2025 年 11 月发布），200K 上下文。作为早期 Opus 系列的成熟版本，稳定性经过充分验证。',
    strengths:['编程','分析','安全'], tags:['reasoning','coding'], context:'200K', multimodal:'文本 + 图像', released:'2025', bestFor:'稳定生产环境、代码审查、文档分析', pricing:'$5 / $25' },

  // ── OpenAI ──
  { id:'gpt-5.5-high', name:'GPT-5.5 High', org:'OpenAI', logo:'assets/logos/openai.svg', color:'#10A37F', badge:'High', openSource:false,
    desc:'OpenAI 最强推理模型，1.1M 超长上下文。在复杂推理、多步规划和专家级任务中表现顶尖。',
    strengths:['推理','编程','数学','长上下文'], tags:['reasoning','coding'], context:'1.1M', multimodal:'文本 + 图像', released:'2026', bestFor:'专家级推理、复杂规划、研究分析', pricing:'$5 / $30' },
  { id:'gpt-5.5', name:'GPT-5.5', org:'OpenAI', logo:'assets/logos/openai.svg', color:'#10A37F', badge:'Standard', openSource:false,
    desc:'GPT-5.5 标准版本，平衡性能与成本。在通用任务和编程场景中表现出色，是 OpenAI 主力模型。',
    strengths:['通用','编程','多模态'], tags:['reasoning','coding','multimodal'], context:'1.1M', multimodal:'文本 + 图像', released:'2026', bestFor:'通用任务、编程辅助、内容创作', pricing:'$5 / $30' },
  { id:'gpt-5.5-instant', name:'GPT-5.5 Instant', org:'OpenAI', logo:'assets/logos/openai.svg', color:'#10A37F', badge:'Fast', openSource:false,
    desc:'GPT-5.5 极速版本，响应延迟极低。适合实时交互、聊天机器人和需要快速反馈的应用场景。',
    strengths:['速度','实时','通用'], tags:['coding','multimodal'], context:'1.1M', multimodal:'文本 + 图像', released:'2026', bestFor:'实时对话、聊天机器人、低延迟应用', pricing:'$5 / $30' },
  { id:'gpt-5.4-high', name:'GPT-5.4 High', org:'OpenAI', logo:'assets/logos/openai.svg', color:'#10A37F', badge:'High', openSource:false,
    desc:'GPT-5.4 高性能版本，在推理和编程任务中表现优异。相比 5.5 更具性价比。',
    strengths:['推理','编程','数学'], tags:['reasoning','coding'], context:'1.1M', multimodal:'文本 + 图像', released:'2026', bestFor:'复杂推理、代码生成、数学计算', pricing:'$2.50 / $15' },
  { id:'gpt-5.4', name:'GPT-5.4', org:'OpenAI', logo:'assets/logos/openai.svg', color:'#10A37F', badge:'Standard', openSource:false,
    desc:'GPT-5.4 标准版本，性价比之选。在通用任务中表现稳定，适合大规模部署。',
    strengths:['通用','编程','速度'], tags:['reasoning','coding','multimodal'], context:'1.1M', multimodal:'文本 + 图像', released:'2026', bestFor:'通用任务、大规模部署、API 集成', pricing:'$2.50 / $15' },
  { id:'gpt-5.2-chat', name:'GPT-5.2 Chat', org:'OpenAI', logo:'assets/logos/openai.svg', color:'#10A37F', badge:'Chat', openSource:false,
    desc:'GPT-5.2 对话优化版本，128K 上下文。在多轮对话和指令遵循方面经过专门优化，交互体验流畅。',
    strengths:['对话','指令遵循','速度'], tags:['coding','multimodal'], context:'128K', multimodal:'文本 + 图像', released:'2026', bestFor:'多轮对话、客服系统、交互式应用', pricing:'$1.75 / $14' },

  // ── Google DeepMind ──
  { id:'gemini-3.1-pro-preview', name:'Gemini 3.1 Pro (Preview)', org:'Google DeepMind', logo:'assets/logos/gemini.svg', color:'#4285F4', badge:'Preview', openSource:false,
    desc:'Google 最新预览模型，1M 上下文。在多模态推理和代码生成方面取得突破性进展，深度集成 Google 生态。',
    strengths:['推理','多模态','编程','长上下文'], tags:['reasoning','coding','multimodal','multilingual'], context:'1M', multimodal:'文本 + 图像 + 音频 + 视频', released:'2026', bestFor:'多模态分析、代码生成、Google 生态集成', pricing:'$2 / $12' },
  { id:'gemini-3-pro', name:'Gemini 3 Pro', org:'Google DeepMind', logo:'assets/logos/gemini.svg', color:'#4285F4', badge:'Pro', openSource:false,
    desc:'Gemini 3 稳定版本，在推理、编程和多模态任务中表现均衡。原生支持工具调用和代码执行。',
    strengths:['推理','编程','多模态','工具调用'], tags:['reasoning','coding','multimodal','multilingual'], context:'1M', multimodal:'文本 + 图像 + 音频 + 视频', released:'2026', bestFor:'全场景通用、工具集成、多模态应用', pricing:'$2 / $12' },
  { id:'gemini-3.5-flash', name:'Gemini 3.5 Flash', org:'Google DeepMind', logo:'assets/logos/gemini.svg', color:'#4285F4', badge:'Fast', openSource:false,
    desc:'Google 极速模型，1M 上下文但价格极低。适合大规模数据处理、批量推理和成本敏感场景。',
    strengths:['速度','效率','长上下文'], tags:['reasoning','coding','multimodal'], context:'1M', multimodal:'文本 + 图像 + 音频', released:'2026', bestFor:'批量处理、低成本推理、实时应用', pricing:'$0.50 / $3' },
  { id:'gemini-3-flash', name:'Gemini 3 Flash', org:'Google DeepMind', logo:'assets/logos/gemini.svg', color:'#4285F4', badge:'Fast', openSource:false,
    desc:'Gemini 3 Flash 版本，在速度和成本之间取得极致平衡。适合对延迟敏感的应用场景。',
    strengths:['速度','效率','通用'], tags:['reasoning','coding','multimodal'], context:'1M', multimodal:'文本 + 图像 + 音频', released:'2025', bestFor:'实时应用、低成本部署、快速原型', pricing:'$0.50 / $3' },

  // ── Zhipu AI ──
  { id:'glm-5.2-max', name:'GLM-5.2 (Max)', org:'Zhipu AI', logo:'assets/logos/zhipu.svg', color:'#4A90D9', badge:'Max', openSource:true,
    desc:'智谱 AI 最强模型，1M 上下文。在中文理解和多模态任务中表现突出，是国产模型中的佼佼者。',
    strengths:['中文','推理','多模态','编程'], tags:['reasoning','coding','multilingual','multimodal','opensource'], context:'1M', multimodal:'文本 + 图像', released:'2026', bestFor:'中文场景、国产化需求、多模态应用', pricing:'$1.40 / $4.40' },
  { id:'glm-5.1', name:'GLM-5.1', org:'Zhipu AI', logo:'assets/logos/zhipu.svg', color:'#4A90D9', badge:'Standard', openSource:true,
    desc:'智谱 AI 主力模型，202.8K 上下文。在中文生成和推理任务中表现稳定，性价比优秀。',
    strengths:['中文','推理','编程'], tags:['reasoning','coding','multilingual','opensource'], context:'202.8K', multimodal:'文本 + 图像', released:'2025', bestFor:'中文写作、推理任务、企业应用', pricing:'$1.40 / $4.40' },

  // ── xAI ──
  { id:'grok-4.20-reasoning', name:'Grok 4.20 (Reasoning)', org:'xAI', logo:'assets/logos/xai.svg', color:'#FFFFFF', badge:'Reasoning', openSource:false,
    desc:'xAI 推理旗舰，2M 超长上下文。在数学、编程和科学推理任务中表现出色，支持深度思维链。',
    strengths:['推理','数学','编程','长上下文'], tags:['reasoning','coding'], context:'2M', multimodal:'文本 + 图像', released:'2026', bestFor:'数学推理、科学分析、超长文档', pricing:'$2 / $6' },
  { id:'grok-4.20-beta1', name:'Grok 4.20 Beta', org:'xAI', logo:'assets/logos/xai.svg', color:'#FFFFFF', badge:'Beta', openSource:false,
    desc:'Grok 4.20 测试版本，集成 X 平台实时信息访问。在通用推理和信息检索方面表现强劲。',
    strengths:['实时信息','推理','通用'], tags:['reasoning','coding'], context:'--', multimodal:'文本 + 图像', released:'2026', bestFor:'实时信息检索、X 平台集成、通用推理', pricing:'--' },
  { id:'grok-4.20-multi-agent', name:'Grok 4.20 (Multi-Agent)', org:'xAI', logo:'assets/logos/xai.svg', color:'#FFFFFF', badge:'Agent', openSource:false,
    desc:'xAI 多智能体版本，支持多模型协作推理。在需要多步骤、多视角分析的复杂任务中表现突出。',
    strengths:['多智能体','推理','协作'], tags:['reasoning','coding'], context:'2M', multimodal:'文本 + 图像', released:'2026', bestFor:'多步骤推理、团队协作分析、复杂工作流', pricing:'$2 / $6' },
  { id:'grok-4.1-thinking', name:'Grok 4.1 (Thinking)', org:'xAI', logo:'assets/logos/xai.svg', color:'#FFFFFF', badge:'Thinking', openSource:false,
    desc:'Grok 4.1 思维链版本，在推理任务中引入显式思考过程。适合需要透明推理链的场景。',
    strengths:['推理','透明度','编程'], tags:['reasoning','coding'], context:'--', multimodal:'文本 + 图像', released:'2026', bestFor:'透明推理、教学演示、逻辑分析', pricing:'--' },

  // ── Alibaba ──
  { id:'qwen3.7-max-preview', name:'Qwen 3.7 Max (Preview)', org:'Alibaba', logo:'assets/logos/qwen.svg', color:'#615CED', badge:'Preview', openSource:false,
    desc:'通义千问最新预览模型，1M 上下文。中英文双语能力突出，在编程和数学任务中表现优异。',
    strengths:['中文','编程','数学','长上下文'], tags:['reasoning','coding','multilingual'], context:'1M', multimodal:'文本 + 图像', released:'2026', bestFor:'中英文场景、编程辅助、数学推理', pricing:'$1.25 / $3.75' },

  // ── Xiaomi ──
  { id:'mimo-v2.5-pro', name:'MiMo-v2.5-pro', org:'Xiaomi', logo:'assets/logos/xiaomi.svg', color:'#FF6900', badge:'Value', openSource:true,
    desc:'小米 AI 团队推理模型，1M 上下文，价格极具竞争力。在数学和编程基准上表现出色，性价比极高。',
    strengths:['推理','数学','编程','性价比'], tags:['reasoning','coding','opensource'], context:'1M', multimodal:'文本', released:'2025', bestFor:'数学推理、代码生成、成本敏感场景', pricing:'$0.43 / $0.87' },

  // ── Baidu ──
  { id:'ernie-5.1', name:'ERNIE 5.1', org:'Baidu', logo:'assets/logos/baidu.svg', color:'#DE3831', badge:'CN', openSource:false,
    desc:'百度文心大模型最新版本，在中文理解和生成任务中表现顶尖。深度集成百度生态，支持多模态输入。',
    strengths:['中文','多模态','通用'], tags:['reasoning','coding','multilingual','multimodal'], context:'--', multimodal:'文本 + 图像', released:'2026', bestFor:'中文场景、百度生态集成、多模态应用', pricing:'--' },

  // ── Muse ──
  { id:'muse-spark', name:'Muse Spark', org:'Muse AI', logo:'assets/logos/muse.svg', color:'#C084FC', badge:'New', openSource:false,
    desc:'新兴 AI 实验室推出的创意模型，专注于生成式创意任务。在艺术创作和设计辅助方面有独特优势。',
    strengths:['创意','设计','生成'], tags:['reasoning','coding'], context:'--', multimodal:'文本 + 图像', released:'2026', bestFor:'创意设计、艺术生成、设计辅助', pricing:'--' }
];

// ============================================
// Use Cases
// ============================================
const USE_CASES = [
  { icon:'&#9881;', title:'代码开发', desc:'代码生成、调试、重构、技术方案设计',
    models:[ {name:'Claude Opus 4.8',color:'#D4A574'}, {name:'GPT-5.5 High',color:'#10A37F'}, {name:'Gemini 3 Pro',color:'#4285F4'} ] },
  { icon:'&#9878;', title:'深度推理', desc:'数学证明、科学分析、逻辑推演、策略规划',
    models:[ {name:'Claude Opus 4.8 (Thinking)',color:'#D4A574'}, {name:'GPT-5.5 High',color:'#10A37F'}, {name:'Grok 4.20 (Reasoning)',color:'#FFFFFF'} ] },
  { icon:'&#9733;', title:'多模态应用', desc:'图像理解、视频分析、跨模态内容生成',
    models:[ {name:'Gemini 3.1 Pro',color:'#4285F4'}, {name:'GPT-5.5',color:'#10A37F'}, {name:'ERNIE 5.1',color:'#DE3831'} ] },
  { icon:'&#9998;', title:'中文 / 多语言', desc:'中文写作、翻译、跨语言内容创作',
    models:[ {name:'GLM-5.2 (Max)',color:'#4A90D9'}, {name:'Qwen 3.7 Max',color:'#615CED'}, {name:'ERNIE 5.1',color:'#DE3831'} ] },
  { icon:'&#9889;', title:'极致性价比', desc:'低成本部署、大规模推理、预算敏感场景',
    models:[ {name:'MiMo-v2.5-pro',color:'#FF6900'}, {name:'Gemini 3.5 Flash',color:'#4285F4'}, {name:'GLM-5.1',color:'#4A90D9'} ] },
  { icon:'&#9734;', title:'创意写作', desc:'故事创作、营销文案、品牌叙事',
    models:[ {name:'Claude Fable 5',color:'#D4A574'}, {name:'Muse Spark',color:'#C084FC'}, {name:'GPT-5.5',color:'#10A37F'} ] }
];

// ============================================
// Comparison — top models across providers
// ============================================
const COMPARISON = [
  { model:'Claude Fable 5', logo:'assets/logos/claude.svg', color:'#D4A574', reasoning:5, coding:4, multimodal:4, multilingual:4, speed:3, context:5 },
  { model:'Claude Opus 4.8 (T)', logo:'assets/logos/claude.svg', color:'#D4A574', reasoning:5, coding:5, multimodal:4, multilingual:4, speed:3, context:5 },
  { model:'GPT-5.5 High', logo:'assets/logos/openai.svg', color:'#10A37F', reasoning:5, coding:5, multimodal:4, multilingual:4, speed:3, context:5 },
  { model:'GPT-5.4', logo:'assets/logos/openai.svg', color:'#10A37F', reasoning:4, coding:4, multimodal:4, multilingual:4, speed:4, context:5 },
  { model:'Gemini 3.1 Pro', logo:'assets/logos/gemini.svg', color:'#4285F4', reasoning:5, coding:5, multimodal:5, multilingual:5, speed:4, context:5 },
  { model:'Gemini 3.5 Flash', logo:'assets/logos/gemini.svg', color:'#4285F4', reasoning:3, coding:3, multimodal:4, multilingual:4, speed:5, context:5 },
  { model:'GLM-5.2 (Max)', logo:'assets/logos/zhipu.svg', color:'#4A90D9', reasoning:4, coding:4, multimodal:4, multilingual:5, speed:4, context:5 },
  { model:'Grok 4.20 (R)', logo:'assets/logos/xai.svg', color:'#FFFFFF', reasoning:5, coding:4, multimodal:3, multilingual:3, speed:4, context:5 },
  { model:'Qwen 3.7 Max', logo:'assets/logos/qwen.svg', color:'#615CED', reasoning:4, coding:4, multimodal:4, multilingual:5, speed:4, context:5 },
  { model:'MiMo-v2.5-pro', logo:'assets/logos/xiaomi.svg', color:'#FF6900', reasoning:4, coding:4, multimodal:1, multilingual:3, speed:4, context:5 },
  { model:'ERNIE 5.1', logo:'assets/logos/baidu.svg', color:'#DE3831', reasoning:3, coding:3, multimodal:4, multilingual:5, speed:4, context:1 },
  { model:'Muse Spark', logo:'assets/logos/muse.svg', color:'#C084FC', reasoning:3, coding:2, multimodal:3, multilingual:3, speed:3, context:1 }
];

// ============================================
// Render Model Cards
// ============================================
const modelsGrid = document.getElementById('modelsGrid');

function renderModels(filter) {
  const filtered = filter === 'all' ? MODELS : MODELS.filter(m => m.tags.includes(filter));
  modelsGrid.innerHTML = filtered.map((m, i) => `
    <div class="model-card fade-up" style="--i:${i}; --card-accent:${m.color};" data-id="${m.id}" data-tags="${m.tags.join(',')}">
      <div class="model-card__head">
        <div class="model-card__logo"><img src="${m.logo}" alt="${m.org}" loading="lazy"></div>
        <div class="model-card__info">
          <div class="model-card__name">${m.name}</div>
          <div class="model-card__org">${m.org}</div>
        </div>
        <span class="model-card__badge">${m.badge}</span>
      </div>
      <p class="model-card__desc">${m.desc}</p>
      <div class="model-card__strengths">
        ${m.strengths.map((s,j) => `<span class="strength-tag${j===0?' highlight':''}" style="--card-accent:${m.color}">${s}</span>`).join('')}
      </div>
      <div class="model-card__meta">
        <div class="meta-item"><div class="meta-item__value">${m.context}</div><div class="meta-item__label">上下文</div></div>
        <div class="meta-item"><div class="meta-item__value">${m.released}</div><div class="meta-item__label">发布</div></div>
        <div class="meta-item"><div class="meta-item__value${m.pricing==='--'?' meta-item__value--na':''}">${m.pricing||'--'}</div><div class="meta-item__label">输入/输出</div></div>
      </div>
    </div>`).join('');
  requestAnimationFrame(() => { document.querySelectorAll('.model-card.fade-up').forEach((el,i) => { setTimeout(() => el.classList.add('visible'), i*40); }); });
}
renderModels('all');

// ============================================
// Filter Logic
// ============================================
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderModels(btn.dataset.filter);
  });
});

// ============================================
// Render Comparison Table
// ============================================
const comparisonBody = document.getElementById('comparisonBody');
function renderComparison() {
  comparisonBody.innerHTML = COMPARISON.map(c => {
    const cells = ['reasoning','coding','multimodal','multilingual','speed','context'].map(dim => {
      const v = c[dim];
      return `<td><span class="rating">${Array.from({length:5},(_,i)=>`<span class="rating__dot${i<v?' filled':''}" style="${i<v?`background:${c.color}`:''}"></span>`).join('')}</span></td>`;
    }).join('');
    return `<tr><td><div class="model-cell"><div class="model-cell-logo"><img src="${c.logo}" alt="${c.model}" loading="lazy"></div><span class="model-cell-name">${c.model}</span></div></td>${cells}</tr>`;
  }).join('');
}
renderComparison();

// ============================================
// Render Use Cases
// ============================================
const useCasesGrid = document.getElementById('useCasesGrid');
function renderUseCases() {
  useCasesGrid.innerHTML = USE_CASES.map(uc => `
    <div class="use-case-card fade-up">
      <div class="use-case-card__icon">${uc.icon}</div>
      <div class="use-case-card__title">${uc.title}</div>
      <p class="use-case-card__desc">${uc.desc}</p>
      <div class="use-case-card__models">${uc.models.map(m=>`<span class="use-case-card__model" style="--mc:${m.color}">${m.name}</span>`).join('')}</div>
    </div>`).join('');
  requestAnimationFrame(() => { document.querySelectorAll('.use-case-card.fade-up').forEach((el,i) => { setTimeout(() => el.classList.add('visible'), i*80); }); });
}
renderUseCases();

// ============================================
// Scroll Animations
// ============================================
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.section__header.fade-up,.filter-bar.fade-up').forEach(el => observer.observe(el));

// ============================================
// Nav Active State
// ============================================
const navLinks = document.querySelectorAll('.nav__links a');
const sections = document.querySelectorAll('.section[id]');
function updateNav() {
  const y = window.scrollY + 100;
  sections.forEach(s => {
    const t = s.offsetTop, b = t + s.offsetHeight, id = s.getAttribute('id');
    navLinks.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === `#${id}` && y >= t && y < b);
    });
  });
}
window.addEventListener('scroll', updateNav, { passive: true });
