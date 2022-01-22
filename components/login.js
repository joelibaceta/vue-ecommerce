Vue.component('login-form', {
  props: ['callback'],
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    "DoLogin": function () {
      var self = this;
      fetch('http://silabuz-api-project.herokuapp.com/authentication/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        self.$emit('on-login', data.token);
      })
      .catch(function (error) {
        console.log('Request failed', error);
      })
    }
  },
  template: `
    <form>
      <div class="form-group">
        <label for="username">Usuario</label>
        <input type="text" class="form-control" id="username" v-model="username">
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" class="form-control" id="password" v-model="password">
      </div>
      <button type="submit" class="btn btn-primary col-12" @click.prevent="DoLogin">Iniciar Sesión</button>
    </form>
  `,
})