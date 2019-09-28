<template>
    <div role="crumb" class="el-breadcrumb">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'ClCrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorClass: String
  },
  provide () {
    return {
      crumb: this
    }
  },
  data () {
    return {
      visible: true
    }
  }
}
</script>
