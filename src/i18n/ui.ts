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
    download: '下载',
    github: 'GitHub',
    cta: '加入等候名单',
  },
  hero: {
    eyebrow: '🚧 Android 内测进行中 · 旧手机改造',
    h1: '让闲置旧手机,变成 AI 桌面宠物',
    subtitle: '把抽屉里的旧手机改造成一只 AI 桌面宠物 · 低功耗、随叫随到的语音伴侣 · 像超轻量级 OpenClaw 一样轻,像宠物一样懂你',
    free_badge: '✨ 每天 50 次官方 AI 对话,完全免费',
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
      { icon: '📧', title: '邮箱注册', body: '用官方 Mochi 云,每天 50 次 AI 对话完全免费 · Phase 1 只支持邮箱+密码,后续会加微信 / Google。' },
      { icon: '🔑', title: '自带模型 (BYOK)', body: '免费额度用完会自动停止,但 BYOK 永久可用 · 填你自己的 OpenAI 兼容 endpoint + key,服务器不保存任何信息。点这里跳到 BYOK 详情。' },
    ],
  },
  byok: {
    eyebrow_badge: '🔑 高级用户',
    h2: '你的 Mochi,你的 LLM',
    sub: '把 Mochi 接到任何 OpenAI 兼容的服务,数据走你自己的 endpoint。给愿意自己折腾的人。',
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
  footer: {
    links_title: '链接',
    community_title: '社区',
    legal_title: '法律',
    links: [
      { label: 'Mochi 能做什么', href: '#whatmochi' },
      { label: '路线图', href: '#roadmap' },
      { label: '隐私', href: '#privacy' },
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
    download: 'Download',
    github: 'GitHub',
    cta: 'Join the waitlist',
  },
  hero: {
    eyebrow: '🚧 Android closed beta · Repurpose an old phone',
    h1: 'Turn your old phone into an AI desktop pet',
    subtitle: 'Repurpose that spare phone in your drawer into an AI desktop pet · low-power, always-listening voice companion · as light as an ultra-lightweight OpenClaw, as warm as a pet.',
    free_badge: '✨ 50 free official AI chats every day — completely free',
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
    eyebrow_badge: '🔑 Power users',
    h2: 'Your Mochi, your LLM',
    sub: 'Point Mochi at any OpenAI-compatible endpoint. Your data, your route. For people happy to wire things up themselves.',
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
  footer: {
    ...zh.footer,
    links_title: 'Links',
    community_title: 'Community',
    legal_title: 'Legal',
    links: [
      { label: 'What Mochi can do', href: '#whatmochi' },
      { label: 'Roadmap', href: '#roadmap' },
      { label: 'Privacy', href: '#privacy' },
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
    download: 'ダウンロード',
    github: 'GitHub',
    cta: 'ウェイトリストに参加',
  },
  hero: {
    eyebrow: '🚧 Android クローズドベータ中 · 古いスマホを再活用',
    h1: '使わない古いスマホを、AI デスクトップペットに',
    subtitle: '引き出しに眠る古いスマホを AI デスクトップペットに再活用 · 低消費電力で常時待機する音声コンパニオン · 超軽量な OpenClaw のように軽く、ペットのように寄り添う。',
    free_badge: '✨ 毎日 50 回の公式 AI 対話が完全無料',
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
    eyebrow_badge: '🔑 上級ユーザー向け',
    h2: 'あなたの Mochi、あなたの LLM',
    sub: 'OpenAI 互換のどんなエンドポイントにも繋げます。データはあなたの経路を通る。自分でセットアップを楽しめる人向け。',
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
  footer: {
    ...zh.footer,
    links_title: 'リンク',
    community_title: 'コミュニティ',
    legal_title: '法的事項',
    links: [
      { label: 'Mochi にできること', href: '#whatmochi' },
      { label: 'ロードマップ', href: '#roadmap' },
      { label: 'プライバシー', href: '#privacy' },
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
