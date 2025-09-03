module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"], // ✅ handles expo-router automatically in SDK 50+
  };
};
