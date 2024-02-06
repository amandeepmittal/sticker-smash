const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.amanhimself.stickersmash.dev";
  }

  if (IS_PREVIEW) {
    return "com.amanhimself.stickersmash.preview";
  }

  return "com.amanhimself.stickersmash";
};

const getAppName = () => {
  if (IS_DEV) {
    return "StickerSmash (Dev)";
  }

  if (IS_PREVIEW) {
    return "StickerSmash (Preview)";
  }

  return "StickerSmash: Emoji Stickers";
};

export default {
  name: getAppName(),
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
    supportsTablet: false,
    bundleIdentifier: getUniqueIdentifier(),
    config: {
      usesNonExemptEncryption: false,
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: getUniqueIdentifier(),
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  updates: {
    url: "https://u.expo.dev/6c02503d-3143-42e2-ac34-4bc24a6b5ef8",
  },
  runtimeVersion: {
    policy: "appVersion",
  },
  extra: {
    eas: {
      projectId: "6c02503d-3143-42e2-ac34-4bc24a6b5ef8",
    },
  },
  owner: "amanhimself",
};
