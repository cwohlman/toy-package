Package.describe({
  name: 'cwohlman:toy-package',
  summary: 'Nothing - just testing',
  version: "1.1.3",
  git: ''
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');
  api.addFiles('toy-package.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cwohlman:toy-package');
  api.addFiles('toy-package-tests.js');
});
