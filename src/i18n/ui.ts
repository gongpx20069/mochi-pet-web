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
  pillars: {
    h2: string;
    items: { icon: string; title: string; body: string }[];
  };
  howyouuse: {
    h2: string;
    items: { icon: string; title: string; body: string }[];
  };
  byok: {
    h2: string;
    sub: string;
    steps: { n: number; title: string }[];
    compat_title: string;
    compat: string[];
    privacy: string;
  };
  tools: {
    h2: string;
    items: { icon: string; title: string }[];
    foot: string;
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
    title: 'Mochi · 像素风 AI 宠物伴侣',
    description: '喊一声 Hi Mochi,它就在那里。本地唤醒、像素表情、自带模型 BYOK 的 AI 桌面宠物。',
  },
  nav: {
    features: '功能',
    byok: '自定义模型',
    roadmap: '路线图',
    download: '下载',
    github: 'GitHub',
    cta: '加入等候名单',
  },
  hero: {
    eyebrow: '🚧 Android 内测进行中',
    h1: '一句「Hi Mochi」,它就在那里',
    subtitle: '像素风 AI 宠物伴侣 · 你的手机就是它的脸 · 本地唤醒 · 离线也能见',
    cta_primary: '加入等候名单',
    cta_secondary: '了解自定义模型 (BYOK)',
  },
  pillars: {
    h2: '三件让 Mochi 不一样的事',
    items: [
      { icon: '🎙', title: '本地唤醒', body: '喊一声 Hi Mochi 就到。无需联网,识别在手机上完成。' },
      { icon: '🎨', title: '像素表情', body: '喜怒哀乐都画在脸上,基于 EmotionFace 表情系统。' },
      { icon: '⏰', title: '侧时钟模式', body: 'Mochi 让到一边,大像素时钟登场。桌面常驻不打扰。' },
    ],
  },
  howyouuse: {
    h2: '三种使用方式',
    items: [
      { icon: '🎮', title: '游客', body: '不注册不联网也能玩 Mochi 本体,但云端对话不可用。' },
      { icon: '📧', title: '邮箱注册', body: '用官方 Mochi 云。Phase 1 只支持邮箱+密码,后续会加 Google / 微信。' },
      { icon: '🔑', title: '自带模型 (BYOK)', body: '填你自己的 OpenAI 兼容 endpoint + key,数据完全自主。点这里跳到 BYOK 详情。' },
    ],
  },
  byok: {
    h2: '你的 Mochi,你的 LLM',
    sub: '把 Mochi 接到任何 OpenAI 兼容的服务,数据走你自己的 endpoint。',
    steps: [
      { n: 1, title: '在设置里粘贴 base URL + API key' },
      { n: 2, title: '选模型(gpt-4o-mini / claude-haiku / 自部署 / qwen / deepseek 任选)' },
      { n: 3, title: '直接对话,不经过 Mochi 云' },
    ],
    compat_title: '已验证兼容',
    compat: ['OpenAI', 'Azure OpenAI', 'Anthropic', 'DeepSeek', '通义千问', 'Ollama', 'vLLM', 'LM Studio'],
    privacy: '你的对话不经过我们的服务器。我们不存,看不到,也不能要。',
  },
  tools: {
    h2: 'Mochi 能帮你做什么',
    items: [
      { icon: '⏰', title: '闹钟 / 计时器' },
      { icon: '📅', title: '日历' },
      { icon: '👥', title: '联系人(打电话/发短信走系统)' },
      { icon: '🔗', title: '打开网址' },
      { icon: '🗺', title: '打开地图' },
      { icon: '📤', title: '系统分享' },
      { icon: '🔔', title: '通知 + 触觉反馈(默认开)' },
    ],
    foot: '默认全关。每个工具都要你主动打勾才会暴露给 LLM。',
  },
  roadmap: {
    h2: '路线图(诚实版)',
    cols: [
      {
        tag: 'Now ✅',
        title: 'Android 内测',
        items: ['像素 Mochi', '唤醒词', '语音对话', 'BYOK', '邮箱注册', '中英日', '客户端工具'],
      },
      {
        tag: 'Next 🚧',
        title: '规划中',
        items: ['iOS', 'Google 登录', '更多表情包', '多设备同步'],
      },
      {
        tag: 'Later 🔮',
        title: '远景',
        items: ['微信登录', '学习陪伴模式', '睡眠陪伴模式'],
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
      { label: '功能', href: '#pillars' },
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
    bottom: '✦ Mochi · 像素风 AI 宠物伴侣 · © 2026',
  },
  needs_translation: 'translation pending',
};

const en: Strings = {
  ...zh,
  meta: {
    title: 'Mochi · A pixel-style AI pet companion',
    description: 'Say "Hi Mochi" and it appears. On-device wake word, pixel emotions, BYOK desktop pet.',
  },
  nav: {
    features: 'Features',
    byok: 'Custom Model',
    roadmap: 'Roadmap',
    download: 'Download',
    github: 'GitHub',
    cta: 'Join the waitlist',
  },
  hero: {
    eyebrow: '🚧 Android closed beta',
    h1: 'Say “Hi Mochi” — and there it is',
    subtitle: 'A pixel-style AI pet · Your phone is its face · On-device wake word · Works offline',
    cta_primary: 'Join the waitlist',
    cta_secondary: 'Bring your own model (BYOK)',
  },
  pillars: {
    h2: 'Three things that make Mochi different',
    items: zh.pillars.items.map((it, i) => ({
      ...it,
      title: ['On-device wake word', 'Pixel emotions', 'Side-clock mode'][i],
    })),
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
    h2: 'Your Mochi, your LLM',
    sub: 'Point Mochi at any OpenAI-compatible endpoint. Your data, your route.',
    compat_title: 'Verified compatible',
    privacy: 'Your conversations never touch our servers. We don’t store them, see them, or have any way to ask for them.',
  },
  tools: { ...zh.tools, h2: 'What Mochi can do', foot: 'All off by default. Every tool requires an explicit toggle before being exposed to the LLM.' },
  roadmap: {
    h2: 'Roadmap (the honest version)',
    cols: [
      { tag: 'Now ✅', title: 'Android beta', items: zh.roadmap.cols[0].items },
      { tag: 'Next 🚧', title: 'Planned', items: zh.roadmap.cols[1].items },
      { tag: 'Later 🔮', title: 'Long term', items: zh.roadmap.cols[2].items },
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
      { label: 'Features', href: '#pillars' },
      { label: 'Roadmap', href: '#roadmap' },
      { label: 'Privacy', href: '#privacy' },
    ],
    community: zh.footer.community.map((c) => ({ ...c, label: c.label === '反馈' ? 'Feedback' : c.label })),
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
    bottom: '✦ Mochi · pixel-style AI pet companion · © 2026',
  },
  needs_translation: 'translation pending',
};

const ja: Strings = {
  ...zh,
  meta: {
    title: 'Mochi · ピクセル風 AI ペット',
    description: '「Hi Mochi」と呼べば、そこにいる。オンデバイス起動語のピクセル AI ペット。',
  },
  nav: {
    features: '機能',
    byok: 'カスタムモデル',
    roadmap: 'ロードマップ',
    download: 'ダウンロード',
    github: 'GitHub',
    cta: 'ウェイトリストに参加',
  },
  hero: {
    eyebrow: '🚧 Android クローズドベータ中',
    h1: '「Hi Mochi」と呼べば、そこにいる',
    subtitle: 'ピクセル風 AI ペット · スマホがその顔 · オンデバイス起動語 · オフラインでも会える',
    cta_primary: 'ウェイトリストに参加',
    cta_secondary: 'カスタムモデル (BYOK) について',
  },
  pillars: {
    h2: 'Mochi が違う 3 つの理由',
    items: zh.pillars.items.map((it, i) => ({
      ...it,
      title: ['オンデバイス起動語', 'ピクセル表情', 'サイドクロック'][i],
    })),
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
    h2: 'あなたの Mochi、あなたの LLM',
    sub: 'OpenAI 互換のどんなエンドポイントにも繋げます。データはあなたの経路を通ります。',
    compat_title: '動作確認済み',
    privacy: '会話は私たちのサーバーを通りません。保存しないし、見られないし、要求もできません。',
  },
  tools: { ...zh.tools, h2: 'Mochi にできること', foot: '初期状態は全てオフ。各ツールは自分でチェックを入れて初めて LLM に公開されます。' },
  roadmap: {
    h2: 'ロードマップ(正直版)',
    cols: [
      { tag: 'Now ✅', title: 'Android ベータ', items: zh.roadmap.cols[0].items },
      { tag: 'Next 🚧', title: '計画中', items: zh.roadmap.cols[1].items },
      { tag: 'Later 🔮', title: '将来', items: zh.roadmap.cols[2].items },
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
      { label: '機能', href: '#pillars' },
      { label: 'ロードマップ', href: '#roadmap' },
      { label: 'プライバシー', href: '#privacy' },
    ],
    community: zh.footer.community.map((c) => ({ ...c, label: c.label === '反馈' ? 'フィードバック' : c.label })),
    legal: [
      { label: 'プライバシーポリシー', href: '#' },
      { label: '利用規約', href: '#' },
    ],
    bottom: '✦ Mochi · ピクセル風 AI ペット · © 2026',
  },
  needs_translation: 'translation pending',
};

export const ui: Record<Lang, Strings> = { zh, en, ja };

export function t(lang: Lang) {
  return ui[lang] ?? ui[defaultLang];
}
