interface ImportMetaEnv {
  // Vite Env variable detect whether the app is running in production
  PROD: boolean;
  readonly {{applicationName.constantCase()}}_SENTRY_DNS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
