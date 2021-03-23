
const App = new Vue({
  el: '#app',
  components: {
    'app': window.httpVueLoader('/app/components/Main.vue')
  },
});
