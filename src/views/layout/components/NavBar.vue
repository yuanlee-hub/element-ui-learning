<template>
  <nav>
    <ul>
      <li v-for="name in components" :key="name" :class="{actived:$route.name===name}">
        <router-link :to="{name}">{{ name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      components: [
        'Alert',
        'Crumb',
        'PageHeader',
        'Collapse',
        'Progress',
        'Button',
        'Tag'
      ]
    }
  }
}
</script>

<style scoped>
  nav {
    width: 200px;
    padding: 50px 0 0;
    position: fixed;
    top: 0;
    bottom: 0;
    transition: padding-top .3s;
  }
  nav li {
    line-height: 30px;
  }
  nav .actived a {
    color: #e00;
  }
</style>
