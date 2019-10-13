<template>
    <div class="layout">
        <nav>
            <ul>
                <li v-for="name in components" :key="name" :class="{actived:$route.name===name}">
                  <router-link :to="{name}">{{ name }}</router-link>
                </li>
            </ul>
        </nav>

        <main>
            <h1>{{ $route.name }}</h1>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
  name: 'Layout',
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
    .layout {
        padding: 30px;
    }
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
    main {
        padding-left: 220px;
        padding-bottom: 100px;
        box-sizing: border-box;
    }
    main>h1 {
        text-align: center;
        line-height: 60px;
    }
</style>
