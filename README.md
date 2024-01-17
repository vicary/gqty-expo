# Expo GQty v8

This is a barebone example of how to use GQty with Expo in all supported js engines.

## Switching JavaScript Engines

To switch js engines, update `app.json` accordingly.

### Hermes

1. Set `expo.jsEngine` to `hermes`
2. Make sure `expo.plugins` does NOT include `react-native-v8`.

### JSC

1. Set `expo.jsEngine` to `jsc`
2. Make sure `expo.plugins` does NOT include `react-native-v8`.

### V8

1. Set `expo.jsEngine` to `jsc`
2. Make sure `expo.plugins` includes `react-native-v8`.

## Running it

In case of errors, try `yarn expo prebuild --clean` before running the following commands.

### ios

1. `yarn ios`

### android

1. `yarn and`
