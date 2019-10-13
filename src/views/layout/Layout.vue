<template>
    <div class="layout">
        <nav-bar></nav-bar>

        <main>
            <h1>{{ $route.name }}</h1>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: 'Layout',
  components: { NavBar },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
    .layout {
        padding: 30px;
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
