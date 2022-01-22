Vue.component('product-list', {
  data: function () {
    return { 
      products: [],
      loading: true,
      token: localStorage.getItem('token'),
      search: '',
    }
  },
  created: function () {
    var self = this;
    fetch('http://silabuz-api-project.herokuapp.com/products/products/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + this.token
      }
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      self.products = data;
      self.loading = false;
    })
    .catch(function (error) {
      console.log('Request failed', error);
    })
  },
  template: `
    <div v-if="loading">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-12">
          <div class="search">
            <input type="text" class="form-control" placeholder="Buscar producto" v-model="search">
          </div>
        </div>
      </div>
      <hr/>
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <a class="nav-link active sm" aria-current="page" href="#">Alimentos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tecnologia</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ropa</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Farmacia</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Belleza</a>
        </li>
      </ul>
      <hr/>
      <div class="row">
        <div class="col-12">
          <product-item v-for="product in products" v-bind:product="product"></product-item>
        </div>
      </div>
    </div>
  `,
})