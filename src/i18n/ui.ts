export const languages = {
  zh: '中',
  en: 'EN',
  ja: '日',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'zh';

type Strings = {
  meta: { title: string; description: string };
  nav: {
    features: string;
    byok: string;
    roadmap: string;
    docs: string;
    download: string;
    github: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    h1: string;
    subtitle: string;
    free_badge: string;
    cta_primary: string;
    cta_secondary: string;
  };
  whatmochi: {
    h2: string;
    sub: string;
    tier_a_label: string;
    tier_a: { icon: string; title: string; body: string }[];
    tier_b_label: string;
    tier_b: { icon: string; title: string; body: string }[];
    foot: string;
  };
  howyouuse: {
    h2: string;
    items: { icon: string; title: string; body: string }[];
  };
  byok: {
    eyebrow_badge: string;
    h2: string;
    sub: string;
    steps: { n: number; title: string }[];
    compat_title: string;
    compat: string[];
    privacy: string;
  };
  sleep: {
    eyebrow: string;
    h2: string;
    body: string;
    tag: string;
    more: { icon: string; title: string; body: string }[];
  };
  roadmap: {
    h2: string;
    cols: { tag: string; title: string; items: string[] }[];
  };
  waitlist: {
    h2: string;
    perks: string[];
    email_label: string;
    email_placeholder: string;
    msg_label: string;
    msg_placeholder: string;
    submit: string;
    success: string;
    error: string;
  };
  download: {
    eyebrow: string;
    h2: string;
    sub: string;
    ready_cta: string;
    notready_cta: string;
    notready_note: string;
    meta_fallback: string;
    safety_title: string;
    safety: string[];
    no_store: string;
  };
  docs: {
    meta_title: string;
    meta_desc: string;
    back: string;
    eyebrow: string;
    title: string;
    intro: string;
    toc_title: string;
    providers_doc_label: string;
    sections: { id: string; icon: string; title: string; intro?: string; steps?: string[]; shots?: { src: string; alt: string }[]; note?: string; providers_title?: string; providers?: { name: string; base: string; doc: string }[]; providers_note?: string }[];
    faq_title: string;
    faq: { q: string; a: string }[];
    updated: string;
  };
  footer: {
    links_title: string;
    community_title: string;
    legal_title: string;
    links: { label: string; href: string }[];
    community: { label: string; href: string }[];
    legal: { label: string; href: string }[];
    bottom: string;
  };
  needs_translation: string;
};

const zh: Strings = {
  meta: {
    title: 'Mochi · 旧手机改造的低功耗语音 AI 桌面宠物',
    description: '把闲置旧手机改造成 AI 桌面宠物。不用动手,喊一声它就在那里。低功耗 always-on 语音唤醒、有表情的 AI 宠物伴侣。',
  },
  nav: {
    features: 'Mochi 能做什么',
    byok: '自定义模型',
    roadmap: '路线图',
    docs: '使用文档',
    download: '下载 APK',
    github: 'GitHub',
    cta: '加入等候名单',
  },
  hero: {
    eyebrow: '🚧 Android 内测进行中 · 旧手机改造',
    h1: '让闲置旧手机,变成 AI 桌面宠物',
    subtitle: '把抽屉里的旧手机改造成一只 AI 桌面宠物 · 低功耗、随叫随到的语音伴侣 · 像超轻量级 OpenClaw 一样轻,像宠物一样懂你',
    free_badge: '✨ 每天 30 次官方 AI 对话,完全免费',
    cta_primary: '加入等候名单',
    cta_secondary: '了解自定义模型 (BYOK)',
  },
  whatmochi: {
    h2: '🌟 Mochi 能为你做什么',
    sub: '一只住在桌面上的 AI 桌宠 —— 会卖萌、会聊天,还会帮你动手干活。',
    tier_a_label: '核心体验',
    tier_a: [
      { icon: '🐱', title: '会卖萌的桌宠', body: '有表情、有性格的像素小宠物,陪在桌面、床头、办公桌 · 不是冰冷工具,是会跟你互动的伙伴。' },
      { icon: '🎙', title: '喊一声就来', body: '不用解锁、不用打开 App,喊一声 Hi Mochi 就响应 · 本地语音唤醒,低功耗常驻一整天。' },
      { icon: '🕐', title: '桌面日历时钟', body: '旧手机横屏一放,Mochi 让到一边,变成大号像素时钟 + 日历 + 天气 · 喊一声又变回 AI 桌宠。' },
      { icon: '✅', title: '智能任务看板', body: '随口一句「提醒我下午三点开会」,自动整理成待办上墙 · 你的事它都帮你记着。' },
    ],
    tier_b_label: '一颗会动手的聪明大脑',
    tier_b: [
      { icon: '🧠', title: '类 OpenClaw 智能系统', body: '一个会自己调用工具的智能体大脑,听懂你要什么,自己分步骤搞定。' },
      { icon: '🔁', title: '多轮推理超强智能', body: '复杂需求也能想得深、拆得清,多轮推理一步步把事办对。' },
      { icon: '📱', title: '接管你的手机', body: '帮你打电话、发短信、分享到微信 QQ,动嘴不动手。' },
      { icon: '🗺', title: '内置百度地图', body: '专属百度地图 subagent,一句话查地点、规划路线、直接导航。' },
    ],
    foot: '所有能力默认全关,每一项都要你亲手打勾,才会开放给 Mochi。',
  },
  howyouuse: {
    h2: '三种使用方式',
    items: [
      { icon: '🎮', title: '游客', body: '不注册不联网也能玩 Mochi 本体,但云端对话不可用。' },
      { icon: '📧', title: '邮箱注册', body: '用官方 Mochi 云,每天 30 次 AI 对话完全免费 · Phase 1 只支持邮箱+密码,后续会加微信 / Google。' },
      { icon: '🔑', title: '自带模型 (BYOK)', body: '所有用户都能用,不是高级玩家专属 · 免费额度用完会自动停止,但 BYOK 永久可用 · 填你自己的 OpenAI 风格 RESTful API endpoint + key,服务器不保存任何信息。点这里跳到 BYOK 详情。' },
    ],
  },
  byok: {
    eyebrow_badge: '🔑 所有用户可用',
    h2: '你的 Mochi,你的 LLM',
    sub: '把 Mochi 接到任何 OpenAI 风格的 RESTful API,数据走你自己的 endpoint。不是高级玩家专属 —— 每位用户都能用。',
    steps: [
      { n: 1, title: '在设置里粘贴 base URL + API key' },
      { n: 2, title: '选模型(gpt-4o-mini / claude-haiku / 自部署 / qwen / deepseek 任选)' },
      { n: 3, title: '直接对话,不经过 Mochi 云' },
    ],
    compat_title: '已验证兼容',
    compat: ['OpenAI', 'Azure OpenAI', 'Anthropic', 'DeepSeek', '通义千问', 'Ollama', 'vLLM', 'LM Studio'],
    privacy: '你的对话不经过我们的服务器。我们不存,看不到,也不能要。',
  },
  sleep: {
    eyebrow: '🚧 下一站',
    h2: '让旧手机继续进化',
    body: 'Mochi 不止于桌面。下一步,它会成为你家的智能入口,还能戴上眼镜跟你出门。',
    tag: 'Coming Next 🚧',
    more: [
      { icon: '🔐', title: '微信 / 谷歌登录', body: '一键登录,告别邮箱密码 · 你的 Mochi 跟着账号走。' },
      { icon: '🏠', title: 'Matter 智能家居中控', body: '一句话开关灯、调空调、控窗帘 · 旧手机坐镇桌面,成为全屋智能的入口。' },
      { icon: '👓', title: '超低价 AR 眼镜', body: '接入 200 元以内的 AR 眼镜 · 让 Mochi 戴在眼前,陪你走出书桌。' },
    ],
  },
  roadmap: {
    h2: '路线图',
    cols: [
      {
        tag: 'Now ✅',
        title: '现在就能用',
        items: ['桌宠互动', '语音唤醒对话', '桌面日历时钟', '智能任务看板', '类 OpenClaw 智能系统', '接管短信 / 电话 / 微信', '内置百度地图', '多轮推理大脑'],
      },
      {
        tag: 'Next 🚧',
        title: '规划中',
        items: ['微信 / 谷歌登录', '🏠 Matter 智能家居中控', '👓 超低价 AR 眼镜接入(200 元内)'],
      },
      {
        tag: 'Later 🔮',
        title: '远景',
        items: ['学习陪伴模式', '更多平台,更多模型适配'],
      },
    ],
  },
  waitlist: {
    h2: '加入等候名单,优先拿到内测包',
    perks: ['🥚 优先内测', '💬 反馈影响产品', '✨ 永久铭刻早期用户标记'],
    email_label: '邮箱',
    email_placeholder: 'you@example.com',
    msg_label: '一句话告诉我们你期待什么(可选)',
    msg_placeholder: '我希望 Mochi 能...',
    submit: '加入等候名单',
    success: '✓ 已收到!我们会优先邮件你',
    error: '提交失败,请稍后再试或直接发邮件给我们。',
  },
  download: {
    eyebrow: '📦 直接从官网下载,不上应用商店',
    h2: '下载 Mochi APK',
    sub: '我们不走 Google Play —— APK 直接放官网,扫一眼安全提示就能装。',
    ready_cta: '⬇️ 下载 APK',
    notready_cta: '安装包打包中…',
    notready_note: '安装包还在打包,加入等候名单,做好我们第一时间通知你。',
    meta_fallback: 'Android 8.0+ · 国内可直连下载',
    safety_title: '安装小贴士',
    safety: [
      '下载后在「设置 → 安全」里允许「安装未知来源应用」',
      '只从本官网或官方 GitHub Releases 下载,认准链接',
      '装好后打开《使用文档》,3 分钟跑通第一句对话',
    ],
    no_store: '为什么不上架?上架商店成本高、审核慢 —— 官网直发能让你更快拿到新版本。',
  },
  docs: {
    meta_title: 'Mochi 使用文档 · 安装后如何上手',
    meta_desc: '装好 Mochi 之后怎么用?从安装、接入大脑、唤醒对话,到按需授权的工具能力、桌面时钟与今日待办,手把手带你 3 分钟跑通第一句对话。',
    back: '← 回首页',
    eyebrow: '📖 使用文档',
    title: '装好之后,这样玩转 Mochi',
    intro: '下面是从装好 APK 到用顺手的完整流程。照着走,3 分钟就能跟 Mochi 说上第一句话。',
    toc_title: '目录',
    providers_doc_label: '官方文档',
    sections: [
      {
        id: 'install',
        icon: '📦',
        title: '一、安装 APK',
        intro: 'Mochi 通过官网直接发布,不走应用商店。',
        steps: [
          '从官网「下载」区或官方 GitHub Releases 下载 .apk 文件',
          '首次安装会提示「未知来源」,到「设置 → 安全」里允许「安装未知来源应用」',
          '点开下载好的 APK,按提示完成安装',
          '建议用一台闲置旧手机长期插电运行,效果最好',
        ],
        note: '只从本官网或官方 GitHub 下载,不要装来路不明的安装包。',
      },
      {
        id: 'model',
        icon: '🧠',
        title: '二、选择大脑(账号 / 自定义模型)',
        intro: 'Mochi 需要一个「大脑」(大模型)才能聪明对话。三种方式任选:',
        steps: [
          '游客:不注册也能玩桌宠本体,但云端对话不可用',
          '邮箱注册并验证:用官方 Mochi 云,验证邮箱后每天 30 次 AI 对话免费(未验证邮箱为 0 次)',
          'BYOK(所有用户可用):在「设置 → 模型」粘贴你自己的 base URL + API Key,支持任意 OpenAI 风格的 RESTful API(OpenAI / Azure / DeepSeek / 通义千问 / Ollama / vLLM 等)',
        ],
        note: 'BYOK 模式下对话直连你填的 endpoint,不经过 Mochi 服务器,我们不存储任何内容。',
        shots: [
          { src: 'screens/login_page.jpg', alt: '登录 / 注册界面' },
          { src: 'screens/account_page.jpg', alt: '账户与每日免费额度' },
          { src: 'screens/BYOK.jpg', alt: 'BYOK:填入自己的 base URL + API Key' },
        ],
        providers_title: '常见服务商 base URL 速查(OpenAI 风格端点统一填到 /v1)',
        providers: [
          { name: 'OpenAI', base: 'https://api.openai.com/v1', doc: 'https://platform.openai.com/docs/api-reference' },
          { name: 'Azure OpenAI', base: 'https://{资源名}.openai.azure.com/openai/v1/', doc: 'https://learn.microsoft.com/azure/ai-services/openai/reference' },
          { name: 'Anthropic(Claude)', base: 'https://api.anthropic.com/v1/', doc: 'https://docs.anthropic.com/en/api/openai-sdk' },
          { name: 'DeepSeek', base: 'https://api.deepseek.com', doc: 'https://api-docs.deepseek.com/' },
          { name: '通义千问(阿里百炼)', base: 'https://dashscope.aliyuncs.com/compatible-mode/v1', doc: 'https://help.aliyun.com/zh/model-studio/compatibility-of-openai-with-dashscope' },
          { name: 'Ollama(本地)', base: 'http://localhost:11434/v1', doc: 'https://docs.ollama.com/api/openai-compatibility' },
          { name: 'vLLM(自建)', base: 'http://localhost:8000/v1', doc: 'https://docs.vllm.ai/en/stable/serving/openai_compatible_server/' },
          { name: 'LM Studio(本地)', base: 'http://localhost:1234/v1', doc: 'https://lmstudio.ai/docs/app/api/endpoints/openai' },
        ],
        providers_note: 'Azure 与标准 OpenAI 略有差异:用部署名而非模型名、需 api-version 参数、鉴权头是 api-key;Anthropic 的 OpenAI 兼容层主要用于测试评估,生产建议用其原生 API。本地类(Ollama / vLLM / LM Studio)若用旧手机访问,把 localhost 换成运行模型那台机器的局域网 IP,API Key 可随便填非空。',
      },
      {
        id: 'wake',
        icon: '🎙',
        title: '三、唤醒并开始对话',
        intro: '一切就绪后,试试你的第一句话:',
        steps: [
          '喊一声唤醒词(默认「Hi Mochi」),屏幕上的 Mochi 会有反应',
          '听到 / 看到它进入聆听状态后,直接说出你的需求',
          '例如:「现在几点」「帮我定个 8 点的闹钟」「导航到最近的咖啡店」',
          '说完稍等,Mochi 会多轮推理后回答或动手执行',
        ],
        note: '第一次启动会申请麦克风权限(语音唤醒 + 对话必需);再到电池优化里把 Mochi 设为「不受限制」,避免被系统杀后台,才能 always-on 常驻。',
        shots: [
          { src: 'screens/mochi_page.jpg', alt: '桌宠主界面' },
          { src: 'screens/conversation_mochi_page.jpg', alt: '语音对话界面' },
        ],
      },
      {
        id: 'tools',
        icon: '🧰',
        title: '四、工具能力与按需授权',
        intro: 'Mochi 能接管手机做事。工具默认全关,按分组自己打开;开启并第一次用到某项时,系统才会弹出对应权限——按需授权,不是一次把所有权限都要走。',
        steps: [
          '进入「设置 → 客户端工具」,按分组打开你需要的:',
          '提醒与日程:闹钟、计时器、日历(开「日历」会申请日历读写权限)',
          '联系人与通讯:通讯录查找 / 新建 / 修改,或打开拨号、短信草稿(申请通讯录权限)',
          '打开与分享:链接、地图(搜索地点 / 定位,申请位置权限)、分享文字(到微信、QQ、便签等)',
          '每开一项,Mochi 才能调用;真正用到时系统弹窗,你点「允许」即可,不需要的保持关闭更安全',
        ],
        note: '通知、触觉反馈、今日待办是常驻能力,无需单独开关。拨号和发短信始终要你在系统界面手动确认,Mochi 不会自动拨出或发送。所有权限都可随时在系统设置里关闭。',
        shots: [
          { src: 'screens/toolssetting_page.jpg', alt: '客户端工具与按需权限设置' },
        ],
      },
      {
        id: 'clock',
        icon: '🕐',
        title: '五、桌面时钟 & 今日待办',
        intro: '把旧手机变成床头 / 办公桌上的智能屏。在 Mochi 身上朝同一方向连续滑动,逐层切换:',
        steps: [
          '第一下(横屏向左滑 / 竖屏向下滑):Mochi 让到一边,显示大号像素时钟 + 日历 + 天气',
          '再滑一下(同方向):切到「今日待办」看板,列出 Mochi 帮你记下的任务;继续滑可翻看历史已完成',
          '待办由对话产生:跟 Mochi 说「帮我记一下买牛奶」,它就会加进看板',
          '语音对话始终后台待命,反方向滑回来、或喊一声唤醒词,就变回 AI 桌宠',
        ],
        note: '插上电源,就是一台会聊天、会记事的智能时钟。',
        shots: [
          { src: 'screens/mochi_clock_page.jpg', alt: 'Mochi 让到一边,大号像素时钟' },
          { src: 'screens/clock_todo_page.jpg', alt: '今日待办看板' },
        ],
      },
    ],
    faq_title: '常见问题',
    faq: [
      { q: '装好后不响应唤醒词?', a: '检查麦克风权限是否授予,并在电池优化里把 Mochi 设为不受限制,避免被系统杀后台。' },
      { q: '免费额度用完了怎么办?', a: '验证邮箱后官方云每天 30 次免费对话,用完会暂停;切换到 BYOK 填自己的 API Key 即可继续无限使用。' },
      { q: 'BYOK 支持哪些模型?', a: '任何 OpenAI 风格的 RESTful API 都行,包括 OpenAI、Azure、Anthropic、DeepSeek、通义千问,以及 Ollama / vLLM / LM Studio 等本地部署。' },
      { q: '我的对话数据安全吗?', a: 'BYOK 模式下对话直连你自己的 endpoint,不经过我们的服务器,我们不存储、看不到。' },
      { q: '一定要用旧手机吗?', a: '不强制,但 Mochi 为 always-on 常驻设计,用一台闲置旧手机插电长期运行体验最好。' },
    ],
    updated: '最后更新:2026-06',
  },
  footer: {
    links_title: '链接',
    community_title: '社区',
    legal_title: '法律',
    links: [
      { label: 'Mochi 能做什么', href: '#whatmochi' },
      { label: '使用文档', href: 'docs/' },
      { label: '下载 APK', href: '#download' },
      { label: '路线图', href: '#roadmap' },
    ],
    community: [
      { label: 'GitHub', href: 'https://github.com/gongpx20069/mochi-pet-web' },
      { label: '反馈', href: 'https://github.com/gongpx20069/mochi-pet-web/issues' },
    ],
    legal: [
      { label: '隐私政策', href: '#' },
      { label: '服务条款', href: '#' },
    ],
    bottom: '✦ Mochi · 低功耗语音 AI 宠物伴侣 · © 2026',
  },
  needs_translation: 'translation pending',
};

const en: Strings = {
  ...zh,
  meta: {
    title: 'Mochi · Turn an old phone into a low-power voice AI desktop pet',
    description: 'Repurpose a spare old phone into an AI desktop pet. Hands-free, always-on. Just speak — Mochi is there. A low-power voice AI pet that lives on your desk.',
  },
  nav: {
    features: 'What Mochi can do',
    byok: 'Custom Model',
    roadmap: 'Roadmap',
    docs: 'Docs',
    download: 'Download APK',
    github: 'GitHub',
    cta: 'Join the waitlist',
  },
  hero: {
    eyebrow: '🚧 Android closed beta · Repurpose an old phone',
    h1: 'Turn your old phone into an AI desktop pet',
    subtitle: 'Repurpose that spare phone in your drawer into an AI desktop pet · low-power, always-listening voice companion · as light as an ultra-lightweight OpenClaw, as warm as a pet.',
    free_badge: '✨ 30 free official AI chats every day — completely free',
    cta_primary: 'Join the waitlist',
    cta_secondary: 'Bring your own model (BYOK)',
  },
  whatmochi: {
    h2: '🌟 What Mochi can do for you',
    sub: 'An AI desktop pet that lives on your screen — it’s cute, it chats, and it actually gets things done for you.',
    tier_a_label: 'Core experience',
    tier_a: [
      { icon: '🐱', title: 'An expressive desk pet', body: 'A pixel pet with feelings and personality, living on your desk, nightstand, workspace · not a cold tool, but a companion that interacts with you.' },
      { icon: '🎙', title: 'Just call its name', body: 'No unlock, no app launch — say "Hi Mochi" and it’s there · on-device wake word, low-power and always-on all day.' },
      { icon: '🕐', title: 'Desk clock & calendar', body: 'Lay the old phone in landscape and Mochi steps aside into a big pixel clock + calendar + weather · call it and the AI pet is back.' },
      { icon: '✅', title: 'Smart task board', body: 'Just say "remind me about the 3pm meeting" and it lands on your board automatically · Mochi remembers everything for you.' },
    ],
    tier_b_label: 'A clever brain that takes action',
    tier_b: [
      { icon: '🧠', title: 'OpenClaw-style AI system', body: 'An agentic brain that calls tools on its own — understands what you want and works through the steps to do it.' },
      { icon: '🔁', title: 'Powerful multi-turn reasoning', body: 'Even complex requests get thought through and broken down — multi-turn reasoning gets it right step by step.' },
      { icon: '📱', title: 'Takes over your phone', body: 'Makes calls, sends texts, shares to WeChat & QQ — hands-free, all by voice.' },
      { icon: '🗺', title: 'Built-in Baidu Maps', body: 'A dedicated Baidu Maps subagent — find a place, plan a route, start navigation, all in one sentence.' },
    ],
    foot: 'Everything is off by default. Each capability requires your explicit toggle before Mochi can use it.',
  },
  howyouuse: {
    h2: 'Three ways to use it',
    items: zh.howyouuse.items.map((it, i) => ({
      ...it,
      title: ['Guest', 'Email signup', 'Bring your own model (BYOK)'][i],
    })),
  },
  byok: {
    ...zh.byok,
    eyebrow_badge: '🔑 Available to everyone',
    h2: 'Your Mochi, your LLM',
    sub: 'Point Mochi at any OpenAI-style RESTful API. Your data, your route. Not a power-user perk — every user gets it.',
    compat_title: 'Verified compatible',
    privacy: 'Your conversations never touch our servers. We don’t store them, see them, or have any way to ask for them.',
  },
  sleep: {
    eyebrow: '🚧 Coming next',
    h2: 'The old phone keeps evolving',
    body: 'Mochi doesn’t stop at your desk. Next, it becomes the gateway to your smart home — and even rides along on glasses when you head out.',
    tag: 'Coming Next 🚧',
    more: [
      { icon: '🔐', title: 'WeChat / Google login', body: 'One-tap sign-in, no more email & password · your Mochi follows your account.' },
      { icon: '🏠', title: 'Matter smart-home hub', body: 'Toggle lights, AC, curtains with a sentence · the old phone on your desk becomes the gateway to your whole smart home.' },
      { icon: '👓', title: 'Ultra-cheap AR glasses', body: 'Connect AR glasses under ¥200 · put Mochi right in front of your eyes and take it beyond the desk.' },
    ],
  },
  roadmap: {
    h2: 'Roadmap',
    cols: [
      { tag: 'Now ✅', title: 'Available now', items: ['Desk-pet interaction', 'Voice wake & chat', 'Desk clock & calendar', 'Smart task board', 'OpenClaw-style AI system', 'Texts / calls / WeChat', 'Built-in Baidu Maps', 'Multi-turn reasoning brain'] },
      { tag: 'Next 🚧', title: 'Planned', items: ['WeChat / Google login', '🏠 Matter smart-home hub', '👓 Ultra-cheap AR glasses (under ¥200)'] },
      { tag: 'Later 🔮', title: 'Long term', items: ['Study companion mode', 'More platforms, more model adapters'] },
    ],
  },
  waitlist: {
    ...zh.waitlist,
    h2: 'Join the waitlist for priority beta access',
    perks: ['🥚 Priority beta', '💬 Shape the product', '✨ Permanent early-user badge'],
    email_label: 'Email',
    email_placeholder: 'you@example.com',
    msg_label: 'Tell us what you’re hoping for (optional)',
    msg_placeholder: 'I’d love it if Mochi could...',
    submit: 'Join the waitlist',
    success: '✓ Got it! We’ll email you first.',
    error: 'Submission failed. Please try again later.',
  },
  download: {
    eyebrow: '📦 Download straight from the site — no app store',
    h2: 'Download the Mochi APK',
    sub: 'We skip Google Play — the APK lives right here. Glance at the safety notes and install.',
    ready_cta: '⬇️ Download APK',
    notready_cta: 'Build in progress…',
    notready_note: 'The build is still baking. Join the waitlist and we’ll ping you the moment it’s ready.',
    meta_fallback: 'Android 8.0+ · direct download',
    safety_title: 'Install tips',
    safety: [
      'After downloading, allow “Install unknown apps” in Settings → Security',
      'Only download from this site or our official GitHub Releases',
      'Once installed, open the Docs and run your first chat in 3 minutes',
    ],
    no_store: 'Why no store? Listing is costly and slow to review — direct downloads get you new versions faster.',
  },
  docs: {
    meta_title: 'Mochi Docs · Getting started after install',
    meta_desc: 'Just installed Mochi? Connect a brain, wake it up, use opt-in tools, and try the desk clock and today’s to-dos — get your first chat running in 3 minutes.',
    back: '← Back to home',
    eyebrow: '📖 Docs',
    title: 'After install, here’s how to use Mochi',
    intro: 'A full walkthrough from a fresh APK to a smooth daily setup. Follow along and you’ll be talking to Mochi in 3 minutes.',
    toc_title: 'Contents',
    providers_doc_label: 'Docs',
    sections: [
      {
        id: 'install',
        icon: '📦',
        title: '1 · Install the APK',
        intro: 'Mochi ships directly from the website, not an app store.',
        steps: [
          'Download the .apk from the site’s Download section or our official GitHub Releases',
          'First install will warn about “unknown sources” — allow “Install unknown apps” in Settings → Security',
          'Open the downloaded APK and follow the prompts to install',
          'For best results, run it on a spare old phone kept plugged in',
        ],
        note: 'Only download from this site or our official GitHub — never sideload an APK from an unknown source.',
      },
      {
        id: 'model',
        icon: '🧠',
        title: '2 · Pick a brain (account / custom model)',
        intro: 'Mochi needs a “brain” (an LLM) to chat smartly. Choose one of three:',
        steps: [
          'Guest: play with the pet itself without signup, but cloud chat is unavailable',
          'Email signup + verify: use the official Mochi cloud — 30 free AI chats per day once your email is verified (0 if unverified)',
          'BYOK (everyone): in Settings → Model, paste your own base URL + API key. Works with any OpenAI-style RESTful API (OpenAI / Azure / DeepSeek / Qwen / Ollama / vLLM, etc.)',
        ],
        note: 'In BYOK mode, chats go straight to your endpoint — never through Mochi’s servers, and we store nothing.',
        shots: [
          { src: 'screens/login_page.jpg', alt: 'Sign-up / login screen' },
          { src: 'screens/account_page.jpg', alt: 'Account & daily free quota' },
          { src: 'screens/BYOK.jpg', alt: 'BYOK: paste your own base URL + API key' },
        ],
        providers_title: 'Common provider base URLs (OpenAI-style endpoints all end in /v1)',
        providers: [
          { name: 'OpenAI', base: 'https://api.openai.com/v1', doc: 'https://platform.openai.com/docs/api-reference' },
          { name: 'Azure OpenAI', base: 'https://{resource}.openai.azure.com/openai/v1/', doc: 'https://learn.microsoft.com/azure/ai-services/openai/reference' },
          { name: 'Anthropic (Claude)', base: 'https://api.anthropic.com/v1/', doc: 'https://docs.anthropic.com/en/api/openai-sdk' },
          { name: 'DeepSeek', base: 'https://api.deepseek.com', doc: 'https://api-docs.deepseek.com/' },
          { name: 'Qwen (Alibaba Model Studio)', base: 'https://dashscope.aliyuncs.com/compatible-mode/v1', doc: 'https://www.alibabacloud.com/help/en/model-studio/compatibility-of-openai-with-dashscope' },
          { name: 'Ollama (local)', base: 'http://localhost:11434/v1', doc: 'https://docs.ollama.com/api/openai-compatibility' },
          { name: 'vLLM (self-hosted)', base: 'http://localhost:8000/v1', doc: 'https://docs.vllm.ai/en/stable/serving/openai_compatible_server/' },
          { name: 'LM Studio (local)', base: 'http://localhost:1234/v1', doc: 'https://lmstudio.ai/docs/app/api/endpoints/openai' },
        ],
        providers_note: 'Azure differs slightly from standard OpenAI: it uses a deployment name (not a model name), needs an api-version parameter, and authenticates with an api-key header. Anthropic’s OpenAI-compatible layer is meant mainly for testing/eval — use its native API in production. For local options (Ollama / vLLM / LM Studio) accessed from an old phone, replace localhost with the LAN IP of the machine running the model; the API key can be any non-empty string.',
      },
      {
        id: 'wake',
        icon: '🎙',
        title: '3 · Wake it and start talking',
        intro: 'Once set up, try your first sentence:',
        steps: [
          'Say the wake word (default “Hi Mochi”) and the on-screen Mochi reacts',
          'When it enters listening state, just say what you need',
          'e.g. “What time is it?”, “Set an alarm for 8”, “Navigate to the nearest café”',
          'Pause a moment — Mochi reasons across turns, then answers or acts',
        ],
        note: 'First launch asks for the microphone permission (required for voice wake + chat). Then set Mochi to “unrestricted” in battery optimization so the system won’t kill it — that’s what makes it always-on.',
        shots: [
          { src: 'screens/mochi_page.jpg', alt: 'The desktop pet (home) screen' },
          { src: 'screens/conversation_mochi_page.jpg', alt: 'Voice conversation screen' },
        ],
      },
      {
        id: 'tools',
        icon: '🧰',
        title: '4 · Tools & opt-in permissions',
        intro: 'Mochi can take over your phone. Tools are off by default — turn on what you need by group. The matching system permission is requested only when you enable a tool and first use it. Permissions come as needed, never all at once.',
        steps: [
          'Open Settings → Client tools and enable what you need by group:',
          'Reminders & schedule: alarms, timers, calendar (enabling Calendar requests calendar read/write)',
          'Contacts & communication: find/create/edit contacts, or open the dialer & SMS draft (requests contacts)',
          'Open & share: links, maps (search a place / locate, requests location), share text (to WeChat, QQ, notes, etc.)',
          'Only after you enable a tool can Mochi use it; tap “Allow” on the system prompt when it actually runs — keep what you don’t need off',
        ],
        note: 'Notifications, haptics and today’s to-dos are always-on and need no toggle. Dialing and sending SMS always require your manual confirmation in the system UI — Mochi never auto-dials or auto-sends. Every permission can be revoked anytime in system settings.',
        shots: [
          { src: 'screens/toolssetting_page.jpg', alt: 'Client tools & opt-in permissions' },
        ],
      },
      {
        id: 'clock',
        icon: '🕐',
        title: '5 · Desk clock & today’s to-dos',
        intro: 'Turn the old phone into a smart nightstand / desk screen. Keep swiping the same direction on Mochi to step through the layers:',
        steps: [
          'First swipe (left in landscape / down in portrait): Mochi steps aside for a big pixel clock + calendar + weather',
          'Swipe again (same direction): switch to the “Today” to-do board listing tasks Mochi saved for you; keep going to browse completed history',
          'To-dos come from conversation: say “remind me to buy milk” and Mochi adds it to the board',
          'Voice chat stays on standby in the background; swipe back the other way or call the wake word to return to the AI pet',
        ],
        note: 'Plug it in and you’ve got a smart clock that talks back and remembers things.',
        shots: [
          { src: 'screens/mochi_clock_page.jpg', alt: 'Mochi steps aside for a big pixel clock' },
          { src: 'screens/clock_todo_page.jpg', alt: 'Today’s to-do board' },
        ],
      },
    ],
    faq_title: 'FAQ',
    faq: [
      { q: 'It doesn’t respond to the wake word?', a: 'Check that the microphone permission is granted and set Mochi to unrestricted in battery optimization so it isn’t killed in the background.' },
      { q: 'What if I run out of free quota?', a: 'After verifying your email, the official cloud gives 30 free chats per day; when used up it pauses. Switch to BYOK with your own API key to keep going unlimited.' },
      { q: 'Which models does BYOK support?', a: 'Any OpenAI-style RESTful API — OpenAI, Azure, Anthropic, DeepSeek, Qwen, plus local setups like Ollama / vLLM / LM Studio.' },
      { q: 'Is my chat data safe?', a: 'In BYOK mode, chats connect straight to your own endpoint, never touching our servers — we store nothing and can’t see it.' },
      { q: 'Do I have to use an old phone?', a: 'Not required, but Mochi is built for always-on. A spare old phone kept plugged in gives the best experience.' },
    ],
    updated: 'Last updated: 2026-06',
  },
  footer: {
    ...zh.footer,
    links_title: 'Links',
    community_title: 'Community',
    legal_title: 'Legal',
    links: [
      { label: 'What Mochi can do', href: '#whatmochi' },
      { label: 'Docs', href: 'docs/' },
      { label: 'Download APK', href: '#download' },
      { label: 'Roadmap', href: '#roadmap' },
    ],
    community: zh.footer.community.map((c) => ({ ...c, label: c.label === '反馈' ? 'Feedback' : c.label })),
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
    bottom: '✦ Mochi · low-power voice AI pet companion · © 2026',
  },
  needs_translation: 'translation pending',
};

const ja: Strings = {
  ...zh,
  meta: {
    title: 'Mochi · 古いスマホを再活用した低消費電力 音声 AI デスクトップペット',
    description: '古いスマホを AI デスクトップペットに再活用。ハンズフリー、いつでも待機。呼べば、そこにいる。低消費電力の音声 AI ペット。',
  },
  nav: {
    features: 'Mochi にできること',
    byok: 'カスタムモデル',
    roadmap: 'ロードマップ',
    docs: '使い方ガイド',
    download: 'APK をダウンロード',
    github: 'GitHub',
    cta: 'ウェイトリストに参加',
  },
  hero: {
    eyebrow: '🚧 Android クローズドベータ中 · 古いスマホを再活用',
    h1: '使わない古いスマホを、AI デスクトップペットに',
    subtitle: '引き出しに眠る古いスマホを AI デスクトップペットに再活用 · 低消費電力で常時待機する音声コンパニオン · 超軽量な OpenClaw のように軽く、ペットのように寄り添う。',
    free_badge: '✨ 毎日 30 回の公式 AI 対話が完全無料',
    cta_primary: 'ウェイトリストに参加',
    cta_secondary: 'カスタムモデル (BYOK) について',
  },
  whatmochi: {
    h2: '🌟 Mochi にできること',
    sub: '画面に住む AI デスクトップペット — 可愛くて、おしゃべりして、ちゃんと用事もこなす。',
    tier_a_label: 'コア体験',
    tier_a: [
      { icon: '🐱', title: '表情豊かなデスクペット', body: '感情と個性のあるピクセルペット · 机・ベッドサイド・デスクに寄り添う、冷たい道具ではなく一緒に過ごす相棒。' },
      { icon: '🎙', title: '呼べばすぐ来る', body: 'ロック解除もアプリ起動も不要 ·「Hi Mochi」と言うだけ · オンデバイス起動語、低消費電力で一日中待機。' },
      { icon: '🕐', title: '置き時計とカレンダー', body: '古いスマホを横向きに置くと、Mochi が脇によけて大きなピクセル時計 + カレンダー + 天気に · 呼べば AI ペットに戻る。' },
      { icon: '✅', title: 'スマートタスクボード', body: '「15 時の会議をリマインドして」と一言で、自動的にボードに整理 · あなたの予定を全部覚えておく。' },
    ],
    tier_b_label: '行動できる賢い頭脳',
    tier_b: [
      { icon: '🧠', title: 'OpenClaw 風の知能システム', body: '自らツールを呼び出すエージェント頭脳 · あなたの意図を理解し、手順を踏んで実行する。' },
      { icon: '🔁', title: '強力なマルチターン推論', body: '複雑な要望も深く考え、分解 · マルチターン推論で一歩ずつ正しくこなす。' },
      { icon: '📱', title: 'スマホを操作', body: '電話・SMS・WeChat や QQ への共有 · 手を使わず声だけで。' },
      { icon: '🗺', title: 'Baidu マップ内蔵', body: '専用の Baidu マップ subagent · 一言で場所検索・経路案内・ナビ開始。' },
    ],
    foot: '初期状態は全てオフ。各機能は自分でチェックを入れて初めて Mochi が使えます。',
  },
  howyouuse: {
    h2: '3 つの使い方',
    items: zh.howyouuse.items.map((it, i) => ({
      ...it,
      title: ['ゲスト', 'メール登録', '自分のモデル (BYOK)'][i],
    })),
  },
  byok: {
    ...zh.byok,
    eyebrow_badge: '🔑 全ユーザー利用可',
    h2: 'あなたの Mochi、あなたの LLM',
    sub: 'OpenAI 形式のどんな RESTful API にも繋げます。データはあなたの経路を通る。上級者専用ではなく、すべてのユーザーが使えます。',
    compat_title: '動作確認済み',
    privacy: '会話は私たちのサーバーを通りません。保存しないし、見られないし、要求もできません。',
  },
  sleep: {
    eyebrow: '🚧 次の一手',
    h2: '古いスマホはさらに進化する',
    body: 'Mochi は机の上だけでは終わらない。次はスマートホームの入口になり、メガネに乗って外にも連れ出せる。',
    tag: 'Coming Next 🚧',
    more: [
      { icon: '🔐', title: 'WeChat / Google ログイン', body: 'ワンタップでサインイン、メール & パスワード不要 · あなたの Mochi はアカウントと共に。' },
      { icon: '🏠', title: 'Matter スマートホームハブ', body: '一言で照明・エアコン・カーテンを操作 · 机の上の古いスマホが全部屋スマート化の入口に。' },
      { icon: '👓', title: '超低価格 AR グラス', body: '¥200 以内の AR グラスに接続 · Mochi を目の前に、机を飛び出して一緒に。' },
    ],
  },
  roadmap: {
    h2: 'ロードマップ',
    cols: [
      { tag: 'Now ✅', title: '今すぐ使える', items: ['デスクペット', '音声ウェイク & 対話', '置き時計 & カレンダー', 'スマートタスクボード', 'OpenClaw 風知能システム', 'SMS / 通話 / WeChat', 'Baidu マップ内蔵', 'マルチターン推論の頭脳'] },
      { tag: 'Next 🚧', title: '計画中', items: ['WeChat / Google ログイン', '🏠 Matter スマートホームハブ', '👓 超低価格 AR グラス(¥200 以内)'] },
      { tag: 'Later 🔮', title: '将来', items: ['学習コンパニオンモード', 'より多くのプラットフォーム・モデル対応'] },
    ],
  },
  waitlist: {
    ...zh.waitlist,
    h2: 'ウェイトリストに参加して優先ベータ枠へ',
    perks: ['🥚 優先ベータ', '💬 フィードバックで方向を決める', '✨ 永久アーリーユーザー印'],
    email_label: 'メール',
    email_placeholder: 'you@example.com',
    msg_label: '期待していることを一言(任意)',
    msg_placeholder: 'Mochi に〇〇してほしい...',
    submit: 'ウェイトリストに参加',
    success: '✓ 受け取りました!優先でメールします',
    error: '送信に失敗しました。後でもう一度お試しください。',
  },
  download: {
    eyebrow: '📦 アプリストアではなく公式サイトから直接',
    h2: 'Mochi APK をダウンロード',
    sub: 'Google Play は使いません — APK はここに。安全のヒントを見てインストール。',
    ready_cta: '⬇️ APK をダウンロード',
    notready_cta: 'ビルド中…',
    notready_note: 'ビルドはまだ準備中です。ウェイトリストに参加すれば、でき次第すぐお知らせします。',
    meta_fallback: 'Android 8.0+ · 直接ダウンロード',
    safety_title: 'インストールのヒント',
    safety: [
      'ダウンロード後、設定 → セキュリティで「提供元不明のアプリ」を許可',
      'このサイトか公式 GitHub Releases からのみダウンロード',
      'インストールしたら使い方ガイドを開き、3 分で最初の対話を',
    ],
    no_store: 'なぜストアに出さない?審査は高コストで遅い — 直接配布なら新版をより速くお届けできます。',
  },
  docs: {
    meta_title: 'Mochi 使い方ガイド · インストール後の始め方',
    meta_desc: 'Mochi を入れたら?インストール・頭脳の接続・ウェイク対話から、必要に応じた権限付与のツール、置き時計と今日のTo-Doまで。3 分で最初の対話を。',
    back: '← ホームに戻る',
    eyebrow: '📖 使い方ガイド',
    title: 'インストール後、Mochi を使いこなす',
    intro: 'APK を入れてから快適に使うまでの全手順。沿って進めれば 3 分で最初の一言を話せます。',
    toc_title: '目次',
    providers_doc_label: '公式ドキュメント',
    sections: [
      {
        id: 'install',
        icon: '📦',
        title: '1 · APK をインストール',
        intro: 'Mochi はアプリストアではなく公式サイトから直接配布します。',
        steps: [
          'サイトのダウンロード欄、または公式 GitHub Releases から .apk を入手',
          '初回は「提供元不明」と警告 — 設定 → セキュリティで「提供元不明のアプリ」を許可',
          'ダウンロードした APK を開き、指示に従ってインストール',
          '使わない古いスマホを電源につないで常時稼働させると最適',
        ],
        note: 'このサイトか公式 GitHub からのみ入手し、出所不明の APK は入れないでください。',
      },
      {
        id: 'model',
        icon: '🧠',
        title: '2 · 頭脳を選ぶ(アカウント / カスタムモデル)',
        intro: 'Mochi には賢く話すための「頭脳」(LLM)が必要です。3 つから選択:',
        steps: [
          'ゲスト:登録なしでペット本体は遊べるが、クラウド対話は不可',
          'メール登録 + 認証:公式 Mochi クラウドを使用。メール認証後は毎日 30 回の AI 対話が無料(未認証は 0 回)',
          'BYOK(全ユーザー可):設定 → モデルで自分の base URL + API Key を貼り付け。OpenAI 形式の RESTful API なら何でも対応(OpenAI / Azure / DeepSeek / 通義千問 / Ollama / vLLM など)',
        ],
        note: 'BYOK では対話はあなたの endpoint に直接接続し、Mochi のサーバーを通りません。何も保存しません。',
        shots: [
          { src: 'screens/login_page.jpg', alt: 'ログイン / 新規登録画面' },
          { src: 'screens/account_page.jpg', alt: 'アカウントと毎日の無料枠' },
          { src: 'screens/BYOK.jpg', alt: 'BYOK:自分の base URL + API Key を入力' },
        ],
        providers_title: '主要プロバイダの base URL 早見表(OpenAI 形式の endpoint はすべて /v1 で終わる)',
        providers: [
          { name: 'OpenAI', base: 'https://api.openai.com/v1', doc: 'https://platform.openai.com/docs/api-reference' },
          { name: 'Azure OpenAI', base: 'https://{リソース名}.openai.azure.com/openai/v1/', doc: 'https://learn.microsoft.com/azure/ai-services/openai/reference' },
          { name: 'Anthropic(Claude)', base: 'https://api.anthropic.com/v1/', doc: 'https://docs.anthropic.com/en/api/openai-sdk' },
          { name: 'DeepSeek', base: 'https://api.deepseek.com', doc: 'https://api-docs.deepseek.com/' },
          { name: '通義千問(Alibaba Model Studio)', base: 'https://dashscope.aliyuncs.com/compatible-mode/v1', doc: 'https://www.alibabacloud.com/help/en/model-studio/compatibility-of-openai-with-dashscope' },
          { name: 'Ollama(ローカル)', base: 'http://localhost:11434/v1', doc: 'https://docs.ollama.com/api/openai-compatibility' },
          { name: 'vLLM(セルフホスト)', base: 'http://localhost:8000/v1', doc: 'https://docs.vllm.ai/en/stable/serving/openai_compatible_server/' },
          { name: 'LM Studio(ローカル)', base: 'http://localhost:1234/v1', doc: 'https://lmstudio.ai/docs/app/api/endpoints/openai' },
        ],
        providers_note: 'Azure は標準 OpenAI と少し異なります:モデル名ではなくデプロイ名を使用し、api-version パラメータが必要で、認証ヘッダーは api-key です。Anthropic の OpenAI 互換レイヤーは主にテスト/評価用です。本番ではネイティブ API を推奨します。ローカル系(Ollama / vLLM / LM Studio)を旧スマホから使う場合は、localhost をモデル実行マシンの LAN IP に置き換えてください。API Key は空でなければ何でも構いません。',
      },
      {
        id: 'wake',
        icon: '🎙',
        title: '3 · 起動して対話を始める',
        intro: '準備ができたら、最初の一言を:',
        steps: [
          'ウェイクワード(既定は「Hi Mochi」)を呼ぶと、画面の Mochi が反応',
          'リッスン状態になったら、そのまま要望を話す',
          '例:「今何時?」「8 時にアラームを設定して」「最寄りのカフェへナビして」',
          '少し待つと、Mochi がマルチターン推論の後に回答・実行します',
        ],
        note: '初回起動でマイク権限を要求(音声ウェイク + 対話に必須)。さらにバッテリー最適化で Mochi を「制限なし」にして、システムに止められないように — これで always-on になります。',
        shots: [
          { src: 'screens/mochi_page.jpg', alt: 'デスクトップペット(ホーム)画面' },
          { src: 'screens/conversation_mochi_page.jpg', alt: '音声対話画面' },
        ],
      },
      {
        id: 'tools',
        icon: '🧰',
        title: '4 · ツールと必要に応じた権限付与',
        intro: 'Mochi はスマホを操作できます。ツールは初期状態でオフ — グループごとに必要なものをオンに。対応する権限は、ツールを有効化して初めて使うときに要求されます。権限は必要に応じて、一度に全部ではありません。',
        steps: [
          '設定 → クライアントツールを開き、グループごとに必要なものをオン:',
          'リマインダーと予定:アラーム、タイマー、カレンダー(カレンダー有効化でカレンダー読み書き権限を要求)',
          '連絡先と通信:連絡先の検索 / 新規 / 編集、または発信・SMS 下書きを開く(連絡先権限を要求)',
          '開く & 共有:リンク、地図(場所検索 / 位置特定、位置権限を要求)、テキスト共有(WeChat、QQ、メモなどへ)',
          '有効化して初めて Mochi が使えます。実行時にシステムのダイアログで「許可」を — 不要なものはオフのままが安全',
        ],
        note: '通知・触覚フィードバック・今日のTo-Doは常時オンで切り替え不要。発信や SMS 送信はシステム画面での手動確認が必須 — Mochi が自動で発信・送信することはありません。すべての権限はいつでもシステム設定で無効化できます。',
        shots: [
          { src: 'screens/toolssetting_page.jpg', alt: 'クライアントツールと必要に応じた権限' },
        ],
      },
      {
        id: 'clock',
        icon: '🕐',
        title: '5 · 置き時計 & 今日のTo-Do',
        intro: '古いスマホをスマートなベッドサイド / 机の画面に。Mochi の上で同じ方向にスワイプし続けると、層を切り替えます:',
        steps: [
          '1 回目(横向きで左へ / 縦向きで下へ):Mochi が脇によけ、大きなピクセル時計 + カレンダー + 天気を表示',
          'もう一度(同じ方向):「今日」のTo-Doボードに切替。Mochi が記録したタスクを表示。さらに進むと完了履歴を閲覧',
          'To-Do は対話から生成:「牛乳を買うのをメモして」と言えばボードに追加',
          '音声対話はバックグラウンドで待機。逆方向にスワイプ、またはウェイクワードを呼べば AI ペットに戻る',
        ],
        note: '電源につなげば、おしゃべりしてメモも取るスマート時計に。',
        shots: [
          { src: 'screens/mochi_clock_page.jpg', alt: 'Mochi が脇によけ、大きなピクセル時計' },
          { src: 'screens/clock_todo_page.jpg', alt: '今日のTo-Doボード' },
        ],
      },
    ],
    faq_title: 'よくある質問',
    faq: [
      { q: 'ウェイクワードに反応しない?', a: 'マイク権限を確認し、バッテリー最適化で Mochi を制限なしに設定して、バックグラウンドで止められないようにしてください。' },
      { q: '無料枠を使い切ったら?', a: 'メール認証後、公式クラウドは毎日 30 回の無料対話を提供し、使い切ると一時停止します。BYOK に切り替えて自分の API Key を使えば無制限で継続できます。' },
      { q: 'BYOK はどのモデルに対応?', a: 'OpenAI 形式の RESTful API なら何でも — OpenAI、Azure、Anthropic、DeepSeek、通義千問、さらに Ollama / vLLM / LM Studio などのローカル構成も。' },
      { q: '会話データは安全?', a: 'BYOK では対話は自分の endpoint に直接接続し、私たちのサーバーを通りません。保存もせず、見ることもできません。' },
      { q: '古いスマホは必須?', a: '必須ではありませんが、Mochi は always-on 設計。使わない古いスマホを電源につないで常時稼働させるのが最適です。' },
    ],
    updated: '最終更新:2026-06',
  },
  footer: {
    ...zh.footer,
    links_title: 'リンク',
    community_title: 'コミュニティ',
    legal_title: '法的事項',
    links: [
      { label: 'Mochi にできること', href: '#whatmochi' },
      { label: '使い方ガイド', href: 'docs/' },
      { label: 'APK をダウンロード', href: '#download' },
      { label: 'ロードマップ', href: '#roadmap' },
    ],
    community: zh.footer.community.map((c) => ({ ...c, label: c.label === '反馈' ? 'フィードバック' : c.label })),
    legal: [
      { label: 'プライバシーポリシー', href: '#' },
      { label: '利用規約', href: '#' },
    ],
    bottom: '✦ Mochi · 低消費電力 音声 AI ペット · © 2026',
  },
  needs_translation: 'translation pending',
};

export const ui: Record<Lang, Strings> = { zh, en, ja };

export function t(lang: Lang) {
  return ui[lang] ?? ui[defaultLang];
}
