
Package.describe({
  summary: "Selenium WebDriver support for CucumberJS"
});

Package.on_use(function (api, where) {
  api.imply(['cucumber', 'selenium']);
  api.use('coffeescript', 'server');
  api.use('cucumber', 'server');
  api.use('selenium', 'server');
  api.add_files('src/world.coffee', 'server');
});
