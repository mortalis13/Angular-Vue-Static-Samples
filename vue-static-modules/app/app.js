import Vue from '/js/vue.esm.browser.js'
import httpVueLoader from '/js/httpVueLoader.js'

Vue.use(httpVueLoader);

const App = new Vue({
  el: '#app',

  components: {
    'app': 'url:./app/components/Main.vue'
  }
});

export default App;