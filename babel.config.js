module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module-resolver',

      {
        root: ['./src'],

        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],

        alias: {
          '@navigation': './src/navigation',

          '@components': './src/components',

          '@constants': './src/constants',

          '@services': './src/services',

          '@screens': './src/screens',

          '@src-types': './src/types',

          '@context': './src/context',

          '@helpers': './src/helpers',

          '@hooks': './src/hooks',

          assets: ['./assets'],
        },
      },
    ],
  ],
};
