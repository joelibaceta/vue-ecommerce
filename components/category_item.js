Vue.component('category-item', {
  props: ['category', 'current_category'],
  template: `
    <li class="nav-item">
      <a class="nav-link sm" 
        :class="{ 'active' : category === current_category }">
          {{category.name}}
      </a>
    </li>
  `
})