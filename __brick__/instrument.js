import * as Sentry from "@sentry/nestjs";
import { nodeProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
  dsn: import.meta.env.{{applicationName.constantCase()}}_SENTRY_DNS,
  integrations: [
    nodeProfilingIntegration(),
  ],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
});
