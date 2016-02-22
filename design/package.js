Package.describe({
  name: 'themidgame:design',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Design package for meteor applications',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/themidgame/tmg-meteor-design.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');

  api.use('fourseven:scss', 'client');
  api.use('reywood:bootstrap3-sass', 'client');
  api.addFiles(getFilesForClient(), 'client');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('themidgame:design');
});

function getFilesForClient() {
  return [
    'stylesheets/main.scss',
    'stylesheets/bootstrap/_dropdown.scss',
    'stylesheets/bootstrap/_type.scss',
    'stylesheets/bootstrap/_variables.scss',
    'stylesheets/utils/_globals.scss',
    'stylesheets/utils/_icons.scss',
    'stylesheets/utils/_mixins.scss',
    'stylesheets/utils/_variables.scss',
  ];
};
