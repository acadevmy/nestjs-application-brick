import Sentry from '@sentry/node';

Sentry.init({
  dsn: import.meta.env.{{applicationName.constantCase()}}_SENTRY_DNS,
  tracesSampleRate: 1.0,
});
