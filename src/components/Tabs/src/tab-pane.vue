<template>
    <div aria="TabPane" v-show="active">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Cl' + 'TabPane',
  props: {
    label: String,
    name: String
  },
  data () {
    return {

    }
  },
  computed: {
    active: {
      get () {
        return this.$parent.currentName === this.name
      },
      set (value) {
        return value
      }
    }
  },
  methods: {

  },
  created () {
  },
  updated () {
    this.$parent.$emit('tab-nav-update')
  }
}
</script>
