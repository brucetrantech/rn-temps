const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
    watchFolders: [
        path.resolve(__dirname, 'libs'), // 👈 Thêm thư mục libs vào watchFolders
    ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
