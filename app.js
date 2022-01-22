var app = new Vue({
  el: '#app',
  data: {
    logged: false
  },
  methods: {
    onLogin: function (token) {
      console.log("onlogin");
      this.logged = true;
      localStorage.setItem('token', token);
    },
  },
  create: function () {
    // This is the first time the app is created
    if ( localStorage.getItem("token") === null ) {
      this.logged = false;
    } else {
      this.logged = true;
    }
  }
});