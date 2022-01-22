Vue.component('product-item', {
  props: ['product'],
  template: `
 
      <div class="row no-gutters">
        <div class="col-md-2">
          <img class="img-thumbnail" v-bind:src="product.image_url" alt="Card image cap">
        </div>
        <div class="col-md-6"> 
            <h5>{{ product.name }}</h5>
            <p>{{ product.description }}</p>
            <p>{{ product.price }}</p>
 
        </div>
        <div class="col-md-4"> 
          <button type="button" class="btn btn-primary" @click="$emit('on-add-to-cart', product)">Agregar al carrito</button>
        </div>
      
      </div>
 
  `
})