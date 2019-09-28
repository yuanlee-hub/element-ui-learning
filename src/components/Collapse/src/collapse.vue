<template>
    <div class="el-collapse">
        <slot></slot>
    </div>
</template>

<script>
import Emitter from '@/mixins/emitter'

export default {
  name: 'ClCollapse',
  componentName: 'ClCollapse',
  mixins: [Emitter],
  props: {
    accordion: Boolean,
    value: {
      type: [Array, String, Number],
      default: () => []
    }
  },
  provide () {
    return {
      collapse: this
    }
  },
  data () {
    return {
      activeNames: [].concat(this.value)
    }
  },
  computed: {

  },
  watch: {
    value (value) {
      this.activeNames = [].concat(value)
      console.log('watch>value:', value)
    }
  },
  methods: {
    setActiveNames (activeNames) {
      this.activeNames = [].concat(activeNames)
      const value = this.accordion ? activeNames[0] : activeNames
      this.$emit('input', value)
      this.$emit('change', value)
      this.broadcast('ClCollapseItem', 'changeActiveNames', value)
    },
    handleItemClick (item) {
      let activeNames
      if (this.accordion) {
        activeNames = this.activeNames.includes(item.name) ? [] : [item.name]
      } else {
        const idx = this.activeNames.indexOf(item.name)
        activeNames = this.activeNames.slice()
        if (idx !== -1) { // 已经展开
          activeNames.splice(idx, 1)
        } else { // 未展开
          activeNames.push(item.name)
        }
      }
      this.setActiveNames(activeNames)
    }
  },
  created () {
    this.$on('item-click', this.handleItemClick)
  }
}
</script>
