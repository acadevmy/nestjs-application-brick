import 'package:mason/mason.dart';
import 'package:chalkdart/chalk.dart';

void run(HookContext context) async {
  logSentryConfiguration(context: context);
}

void logSentryConfiguration({required HookContext context}) {
  print(chalk.blue(
    '🛠️ To configure Sentry, add values to the following environment variables:',
  ));

  String applicationName = context.vars['applicationName'];

  print('   ${applicationName.constantCase}_SENTRY_DNS\n');
}
