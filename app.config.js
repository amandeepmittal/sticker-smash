const IS_DEV = process.env.APP_VARIANT === "development";

export default {
  name: IS_DEV ? "sticker-smash (dev)" : "sticker-smash (preview)",
  slug: "sticker-smash",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#25292e",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: IS_DEV
      ? "com.amanhimself.stickersmash-dev"
      : "com.amanhimself.stickersmash",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: IS_DEV
      ? "com.amanhimself.stickersmash-dev"
      : "com.amanhimself.stickersmash",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    eas: {
      projectId: "6c02503d-3143-42e2-ac34-4bc24a6b5ef8",
    },
  },
  owner: "amanhimself",
};
