// this file provides a list of unbundled files that
// need to be included when exporting the application
// for production.
module.exports = {
  'list': [
    'index.html',
    'config.js',
    'config-local.js',
    'favicon.ico',
    'LICENSE',
    'bower_components/paper-styles/color.html',
    'bower_components/paper-material/paper-material.html',
    'bower_components/paper-material/paper-material-shared-styles.html',
    'bower_components/paper-card/paper-card.html',
    'bower_components/paper-tabs/paper-tabs.html',
    'bower_components/paper-tabs/paper-tab.html',
    'bower_components/paper-tabs/paper-tabs-icons.html',
    'bower_components/paper-behaviors/paper-button-behavior.html',
    'bower_components/paper-behaviors/paper-ripple-behavior.html',
    'bower_components/paper-button/paper-button.html',
    'bower_components/paper-ripple/paper-ripple.html',
    'bower_components/paper-icon-button/paper-icon-button.html',
    'bower_components/paper-styles/shadow.html',
    'bower_components/iron-flex-layout/iron-flex-layout.html',
    'bower_components/paper-styles/default-theme.html',
    'bower_components/iron-selector/iron-multi-selectable.html',
    'bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html',
    'bower_components/iron-icon/iron-icon.html',
    'bower_components/iron-menu-behavior/iron-menubar-behavior.html',
    'bower_components/iron-menu-behavior/iron-menu-behavior.html',
    'bower_components/iron-resizable-behavior/iron-resizable-behavior.html',
    'bower_components/iron-media-query/iron-media-query.html',
    'bower_components/iron-iconset-svg/iron-iconset-svg.html',
    'bower_components/iron-selector/iron-selectable.html',
    'bower_components/iron-selector/iron-selector.html',
    'bower_components/iron-selector/iron-selection.html',
    'bower_components/iron-behaviors/iron-button-state.html',
    'bower_components/iron-behaviors/iron-control-state.html',
    'bower_components/iron-icons/social-icons.html',
    'bower_components/iron-icons/iron-icons.html',
    'bower_components/iron-icons/communication-icons.html',
    'bower_components/iron-image/iron-image.html',
    'bower_components/iron-meta/iron-meta.html',
    'bower_components/paper-drawer-panel/paper-drawer-panel.html',
    'bower_components/paper-header-panel/paper-header-panel.html',
    'bower_components/paper-toolbar/paper-toolbar.html',
    'bower_components/paper-behaviors/paper-inky-focus-behavior.html',
    'bower_components/paper-menu/paper-menu.html',
    'bower_components/paper-menu/paper-menu-shared-styles.html',
    'bower_components/paper-item/paper-item.html',
    'bower_components/paper-item/paper-item-behavior.html',
    'bower_components/paper-item/paper-item-shared-styles.html',
    'bower_components/paper-styles/typography.html',
    'bower_components/paper-listbox/paper-listbox.html',
    'bower_components/polymer/polymer.html',
    'bower_components/polymer/polymer-mini.html',
    'bower_components/polymer/polymer-micro.html',
    'bower_components/iron-flex-layout/classes/iron-flex-layout.html',
    'bower_components/iron-flex-layout/classes/iron-shadow-flex-layout.html',
    'bower_components/roboto-condensed/css/roboto-condensed.css',
    'bower_components/font-roboto/roboto.html',
    'bower_components/webcomponentsjs/webcomponents.min.js',
    'dist/*-bundle.js',
    "jspm_packages/npm/bluebird@3.4.1/js/browser/bluebird.min.js", 
    "jspm_packages/npm/moment@2.14.1/moment.js",
    'jspm_packages/system.js',
    'jspm_packages/system-polyfills.js',
    'jspm_packages/system-csp-production.js',
    'styles/styles.html',
    'styles/fonts.css',
    'styles/material-design-iconic-font/**/*',
    'images/*',
    'test-data/**/*'
  ],
  // this section lists any jspm packages that have
  // unbundled resources that need to be exported.
  // these files are in versioned folders and thus
  // must be 'normalized' by jspm to get the proper
  // path.
  'normalize': [
    [
      // include bootstrap's font files
      'bootstrap', [
        '/fonts/*'
      ]
    ], [
      'bluebird', [
        '/js/browser/bluebird.min.js'
      ]
    ]
  ]
};
