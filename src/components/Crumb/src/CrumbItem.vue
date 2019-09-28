<template>
    <span class="el-breadcrumb__item">
        <span role="link" ref="link" class="el-breadcrumb__inner" :class="{'is-link': to}" @click="route"><slot></slot></span>
        <i v-if="separatorClass" role="presentation" class="el-breadcrumb__separator" :class="[separatorClass]"></i>
        <span v-else role="presentation" class="el-breadcrumb__separator">{{ separator }}</span>
    </span>
</template>

<script>
export default {
  name: 'ClCrumbItem',
  inject: ['crumb'],
  props: {
    to: Object,
    replace: Boolean
  },
  data () {
    return {
      separator: this.crumb.separator,
      separatorClass: this.crumb.separatorClass
    }
  },
  methods: {
    route () {
      const { to, $router } = this
      if (!to || !$router) return
      this.replace ? $router.replace(to) : $router.push(to)
    }
  }
}
</script>
