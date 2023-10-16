module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/components': './src/components',
          '@/pages': './src/pages',
          '@/utils': './src/utils',
          '@/assets': './src/assets',
          '@/config': './src/config',
          '@/store': './src/store',
          '@/navigator': './src/navigator',
        },
      },
    ],
  ],
};
