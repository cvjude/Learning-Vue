<template>
  <div id="show-blogs" v-theme:column="'wide'">
    <h1>All blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search blogs" />
    <div
      v-for="(blog, index) in filteredBlogs"
      v-bind:key="index"
      class="single-blog"
    >
      <h2 v-rainbow>{{ blog.title | touppercase }}</h2>
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
import seachMixim from '../mixins/searchMixin'

export default {
  data() {
    return {
      blogs: [],
      search: ''
    };
  },
  methods: {},
  created() {
    this.$http
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(data => (this.blogs = data.body.slice(0, 10)));
  },
  computed: {
    
  },
  filters: {
    //filters
    touppercase: value => {
      return value.toUpperCase();
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          '#' +
          Math.random()
            .toString()
            .slice(2, 8);
      }
    }
  }
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
