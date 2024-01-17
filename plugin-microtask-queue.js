const { writeFileSync } = require("fs");
const { withAppBuildGradle } = require("@expo/config-plugins");

/** @type import("@expo/config-plugins").ConfigPlugin */
const withMicrotaskQueue = (config) => {
  return withAppBuildGradle(config, (config) => {
    // In the react {} section, extract the hermesFlags option, which is expected to be an array of strings that may span across multiple lines.
    const [, hermesFlags] = config.modResults.contents.match(
      /hermesFlags\s*=\s*\[([^\]]+)\]/s
    );

    config.modResults.contents += `# Added by @expo/config-plugins`;

    return config;
  });
};

module.exports = withMicrotaskQueue;

// module.exports = (config) => {
//   const newGraddleProperties = [
//     {
//       type: "property",
//       key: "AsyncStorage_db_size_in_MB",
//       value: "10", // Maybe you should set this to 15?
//     },
//     // Added this to demostrate multiple gradle properties change
//     {
//       type: "property",
//       key: "FLIPPER_VERSION",
//       value: "0.144.0", // Fix app names with accented and diacritics characters
//     },
//   ];

//   return withAppBuildGradle(config, (config) => {
//     config;

//     // path: string;
//     // language: L;
//     // contents: string;
//   });

//   // return withGradleProperties(config, (config) => {
//   //   newGraddleProperties.map((gradleProperty) =>
//   //     config.modResults.push(gradleProperty)
//   //   );

//   //   return config;
//   // });
// };
