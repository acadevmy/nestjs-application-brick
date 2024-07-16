import 'package:mason/mason.dart';

void run(HookContext context) async {
  logSentryConfiguration(context: context);
}

void logSentryConfiguration({required HookContext context}) {
  context.logger.info(
    '🛠️ To configure sentry, add values to the following environment variables:',
  );

  String applicationName = context.vars['applicationName'];

  context.logger.write(' ${applicationName}_SENTRY_DNS');
}
