// ───────────────────────────────────────────────────────────
// 发布配置 / Release config
//
// APK 直接通过官网发布(不上 Google Play)。
// 默认下载 = 现代 64 位 ARM 手机(arm64-v8a),其余架构放在「其他版本」里。
// 升级版本时:把 v0.0.1 改成新 tag,并同步各 APK 文件名 / 体积即可。
// 留空 APK_URL 时,下载区会显示「即将上线」状态。
// ───────────────────────────────────────────────────────────

/** 当前发布版本号(展示用) */
export const APK_VERSION = 'v0.0.1';

/** GitHub Releases 资产基础路径 */
const REL = 'https://github.com/gongpx20069/mochi-pet-web/releases/download/v0.0.1';

/** 默认下载:arm64-v8a —— 适配绝大多数现代安卓手机 */
export const APK_URL = `${REL}/Mochi-0.0.1-arm64-v8a.apk`;
export const APK_META = 'v0.0.1 · arm64-v8a · ~71MB · Android 8.0+';

/**
 * 其他版本(折叠在「其他版本」面板里)。
 * arch 作为 key,对应 i18n 里 download.variant_labels 的本地化文案。
 * 注:x86_64 模拟器版暂不对外发布。
 */
export const APK_VARIANTS: { arch: string; url: string; size: string }[] = [
  { arch: 'armeabi', url: `${REL}/Mochi-0.0.1-armeabi-v7a.apk`, size: '~61MB' },
];

/** APK 是否已就绪(填了直链即视为就绪) */
export const APK_READY = APK_URL.trim().length > 0;
