import type vue from 'vue';

declare module 'vue' {
  function createApp(App: vue.DefineComponent): DefineComponent;

  export default vue;
  export { createApp };
}
