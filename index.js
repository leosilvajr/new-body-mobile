import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// node version 22.14.0

//eas --version
// eas-cli/16.9.0 win32-x64 node-v22.14.0
registerRootComponent(App);
