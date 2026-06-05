// ───────────────────────────────────────────────────────────
// 发布配置 / Release config
//
// APK 直接通过官网发布(不上 Google Play)。
// 等安装包打包好,把下载直链填到 APK_URL 即可 —— 全站下载按钮会自动激活。
// 留空时,下载区会显示「即将上线」状态。
//
// 示例:
//   export const APK_URL = 'https://github.com/gongpx20069/mochi-pet-web/releases/download/v0.1.0/mochi.apk';
//   export const APK_META = 'v0.1.0 · 约 24MB · Android 8+';
// ───────────────────────────────────────────────────────────

export const APK_URL = '';
export const APK_META = '';

/** APK 是否已就绪(填了直链即视为就绪) */
export const APK_READY = APK_URL.trim().length > 0;
