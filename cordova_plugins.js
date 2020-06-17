cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-baidumaplocation/www/baidumap_location.js",
        "id": "cordova-plugin-baidumaplocation.baidumap_location",
        "pluginId": "cordova-plugin-baidumaplocation",
        "clobbers": [
            "cordova.plugins.baidumap_location",
            "plugin.baidumap_location",
            "baidumap_location"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-baidumaplocation": "4.0.2",
    "cordova-plugin-whitelist": "1.3.4"
}
// BOTTOM OF METADATA
});