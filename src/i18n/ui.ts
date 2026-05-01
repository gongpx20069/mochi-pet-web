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
    cta_primary: string;
    cta_secondary: string;
  };
  whatmochi: {
    h2: string;
    sub: string;
    tier_a_label: string;
    tier_a: { icon: string; title: string; body: string }[];
    tier_b_label: string;
    tier_b: { icon: string; title: string }[];
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
    title: 'Mochi · 低功耗语音 AI 宠物伴侣',
    description: '不用动手,喊一声它就在那里。低功耗 always-on 语音唤醒、有表情的 AI 宠物伴侣。',
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
    eyebrow: '🚧 Android 内测进行中',
    h1: '不用动手,它就在那里',
    subtitle: '一个低功耗、随叫随到的语音 AI 伴侣 · 你不用动手,它就在那里 · 像 OpenClaw 一样轻,像宠物一样懂你',
    cta_primary: '加入等候名单',
    cta_secondary: '了解自定义模型 (BYOK)',
  },
  whatmochi: {
    h2: '🌟 Mochi 能为你做什么',
    sub: '一个有表情的语音伙伴 — 不只是工具,而是一直陪在桌面、床头、办公桌上的小宠物。',
    tier_a_label: '核心能力',
    tier_a: [
      { icon: '🎙', title: '随叫随到', body: '不用解锁,不用打开 App。喊一声 Hi Mochi 就来 · 本地唤醒,飞行模式也响应。' },
      { icon: '🔋', title: '低功耗常驻', body: '优化的待机功耗,可以挂在桌面一整天不掉电太多 · 真正的 always-on 而不是噱头。' },
      { icon: '🌙', title: '躺床上也能用', body: '睡前不想动手?让 Mochi 调闹钟、设白噪音、放个故事 · 黑暗里语音就够了。' },
      { icon: '🎨', title: '有表情的陪伴', body: 'EmotionFace 表情系统 · 喜怒哀乐都画在脸上 · 不是冰冷工具,是有性格的伙伴。' },
    ],
    tier_b_label: '它能帮你做的事',
    tier_b: [
      { icon: '⏰', title: '设闹钟 / 计时器' },
      { icon: '📅', title: '安排日历' },
      { icon: '👥', title: '找联系人 / 打电话' },
      { icon: '🔗', title: '打开网址' },
      { icon: '🗺', title: '打开地图' },
      { icon: '💬', title: '分享内容到微信、QQ、邮件等' },
      { icon: '🔔', title: '通知 + 触觉提醒(默认开)' },
    ],
    foot: '默认全关。每个能力都要你主动打勾才会暴露给 Mochi 大脑。',
  },
  howyouuse: {
    h2: '三种使用方式',
    items: [
      { icon: '🎮', title: '游客', body: '不注册不联网也能玩 Mochi 本体,但云端对话不可用。' },
      { icon: '📧', title: '邮箱注册', body: '用官方 Mochi 云。Phase 1 只支持邮箱+密码,后续会加微信 / Google。' },
      { icon: '🔑', title: '自带模型 (BYOK)', body: '填你自己的 OpenAI 兼容 endpoint + key,数据完全自主。点这里跳到 BYOK 详情。' },
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
    eyebrow: '🌙 新功能预告',
    h2: '睡眠陪伴模式',
    body: '晚上躺下不想动手?Mochi 会陪你入睡 · 助眠白噪音 · 梦境记录 · 早晨温柔唤醒。',
    tag: 'Coming Next 🚧',
  },
  roadmap: {
    h2: '路线图',
    cols: [
      {
        tag: 'Now ✅',
        title: 'Android 内测',
        items: ['像素 Mochi', '唤醒词', '语音对话', 'BYOK', '邮箱注册', '中英日', '客户端工具'],
      },
      {
        tag: 'Next 🚧',
        title: '规划中',
        items: ['iOS', '微信登录(Phase 2 主推)', '🌙 睡眠陪伴模式(主打新功能)', '更多表情包'],
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
    title: 'Mochi · A low-power, voice-first AI pet companion',
    description: 'Hands-free, always-on. Just speak — Mochi is there. A low-power voice AI pet that lives on your desk.',
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
    eyebrow: '🚧 Android closed beta',
    h1: 'Hands-free. Just speak — it’s there.',
    subtitle: 'A low-power, always-listening, voice-first AI companion · As light as OpenClaw, as warm as a pet.',
    cta_primary: 'Join the waitlist',
    cta_secondary: 'Bring your own model (BYOK)',
  },
  whatmochi: {
    h2: '🌟 What Mochi can do for you',
    sub: 'An expressive voice companion — not just a tool, but a tiny pet that lives on your desk, your nightstand, your workspace.',
    tier_a_label: 'Core capabilities',
    tier_a: [
      { icon: '🎙', title: 'Always within earshot', body: 'No unlock, no app launch. Say "Hi Mochi" and it’s there · On-device wake word, works in airplane mode.' },
      { icon: '🔋', title: 'Low-power, always-on', body: 'Optimized standby — leave it on your desk all day without draining the battery · Real always-on, not a gimmick.' },
      { icon: '🌙', title: 'Use it from bed', body: 'Don’t want to touch the phone before sleep? Ask Mochi to set an alarm, play white noise, tell a story.' },
      { icon: '🎨', title: 'A face that has feelings', body: 'EmotionFace expression system · Joy, calm, sleepy — all written on its face. A companion with personality.' },
    ],
    tier_b_label: 'Things it can do for you',
    tier_b: [
      { icon: '⏰', title: 'Set alarms & timers' },
      { icon: '📅', title: 'Manage your calendar' },
      { icon: '👥', title: 'Find contacts & call' },
      { icon: '🔗', title: 'Open links' },
      { icon: '🗺', title: 'Open maps' },
      { icon: '💬', title: 'Share to WeChat, QQ, email & more' },
      { icon: '🔔', title: 'Notifications + haptics (on by default)' },
    ],
    foot: 'All off by default. Every capability requires an explicit toggle before being exposed to Mochi’s brain.',
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
    eyebrow: '🌙 Coming soon',
    h2: 'Sleep companion mode',
    body: 'Don’t want to lift a finger before bed? Mochi will help you fall asleep · soothing white noise · dream journaling · gentle morning wake-up.',
    tag: 'Coming Next 🚧',
  },
  roadmap: {
    h2: 'Roadmap',
    cols: [
      { tag: 'Now ✅', title: 'Android beta', items: ['Pixel Mochi', 'Wake word', 'Voice chat', 'BYOK', 'Email signup', 'zh / en / ja', 'Client tools'] },
      { tag: 'Next 🚧', title: 'Planned', items: ['iOS', 'WeChat login (Phase 2 push)', '🌙 Sleep companion mode (flagship next feature)', 'More expression packs'] },
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
    title: 'Mochi · 低消費電力 音声 AI ペット',
    description: 'ハンズフリー、いつでも待機。呼べば、そこにいる。低消費電力の音声 AI ペット。',
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
    eyebrow: '🚧 Android クローズドベータ中',
    h1: '触らなくていい。呼べば、そこにいる。',
    subtitle: '低消費電力で常時待機する、声で動く AI コンパニオン · OpenClaw のように軽く、ペットのように寄り添う。',
    cta_primary: 'ウェイトリストに参加',
    cta_secondary: 'カスタムモデル (BYOK) について',
  },
  whatmochi: {
    h2: '🌟 Mochi にできること',
    sub: '表情のある音声コンパニオン — 道具ではなく、机の上やベッドサイドに住む小さなペット。',
    tier_a_label: 'コア機能',
    tier_a: [
      { icon: '🎙', title: '呼べばすぐ来る', body: 'ロック解除もアプリ起動も不要。「Hi Mochi」と言うだけ · オンデバイス起動語、機内モードでも応答。' },
      { icon: '🔋', title: '低消費電力で常時待機', body: '最適化された待機電力 · 一日机の上に置いてもバッテリーが大きく減らない。本物の always-on。' },
      { icon: '🌙', title: 'ベッドからでも使える', body: '寝る前に手を動かしたくない?Mochi にアラーム・ホワイトノイズ・物語を頼もう。' },
      { icon: '🎨', title: '表情のある相棒', body: 'EmotionFace 表情システム · 喜怒哀楽が顔に出る · 冷たい道具ではなく、性格のあるペット。' },
    ],
    tier_b_label: 'やってくれること',
    tier_b: [
      { icon: '⏰', title: 'アラーム / タイマー' },
      { icon: '📅', title: 'カレンダー管理' },
      { icon: '👥', title: '連絡先 / 通話' },
      { icon: '🔗', title: 'URL を開く' },
      { icon: '🗺', title: '地図を開く' },
      { icon: '💬', title: 'WeChat、QQ、メールなどに共有' },
      { icon: '🔔', title: '通知 + 触覚フィードバック(初期 ON)' },
    ],
    foot: '初期状態は全てオフ。各機能は自分でチェックを入れて初めて Mochi の頭脳に公開されます。',
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
    eyebrow: '🌙 新機能予告',
    h2: '睡眠コンパニオンモード',
    body: '夜、横になって手を動かしたくない?Mochi が入眠をサポート · ホワイトノイズ · 夢の記録 · 朝はやさしく起こします。',
    tag: 'Coming Next 🚧',
  },
  roadmap: {
    h2: 'ロードマップ',
    cols: [
      { tag: 'Now ✅', title: 'Android ベータ', items: ['ピクセル Mochi', '起動語', '音声対話', 'BYOK', 'メール登録', '中英日', 'クライアントツール'] },
      { tag: 'Next 🚧', title: '計画中', items: ['iOS', 'WeChat ログイン(Phase 2 主軸)', '🌙 睡眠コンパニオンモード(目玉新機能)', '表情パック追加'] },
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
