Vue.component('category-list', {
  data: function () {
    return { 
      categories: [],
      loading: true,
      token: localStorage.getItem('token'),
      current_category: '',
    }
  },
  mounted: function () {
    self = this;
    fetch('http://silabuz-api-project.herokuapp.com/products/categories/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + this.token
      }
    })
    .then(function (response) {
      return response.json();
      console.log("response");
    })
    .then(function (data) {
      console.log(data);
      self.loading = false;
      self.categories = data;
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

      <ul class="nav nav-pills nav-fill">
        <category-item v-for="category in categories" :category="category" :current_category="current_category"></category-item>
      </ul>
    </div>
  `

})