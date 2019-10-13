<template>
  <div aria="Badge" class="el-badge">
    <slot></slot>
    <sup :class="classList" v-show="value!==void 0 && !hidden">{{ content }}</sup>
  </div>
</template>

<script>
export default {
  name: 'Cl' + 'Badge',
  props: {
    value: {
      type: [String, Number]
    },
    max: Number,
    isDot: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    },
    type: {
      type: String
    }
  },
  computed: {
    classList () {
      const list = ['el-badge__content', 'is-fixed', this.type ? 'el-badge__content--' + this.type : '']
      list.push({
        'is-dot': this.isDot
      })
      return list
    },
    content () {
      if (this.isDot) return
      const { value, max } = this
      if (typeof value === 'number' && typeof max === 'number') {
        return value > max ? `${max}+` : value
      }
      return value
    }
  }
}
</script>
