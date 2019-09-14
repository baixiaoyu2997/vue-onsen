cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-baidumaplocation.baidumap_location",
      "file": "plugins/cordova-plugin-baidumaplocation/www/baidumap_location.js",
      "pluginId": "cordova-plugin-baidumaplocation",
      "clobbers": [
        "cordova.plugins.baidumap_location",
        "plugin.baidumap_location",
        "baidumap_location"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-baidumaplocation": "4.0.2"
  };
});