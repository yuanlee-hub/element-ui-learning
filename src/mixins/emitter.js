export default {
  methods: {
    dispatch (componentName, eventName, params) { // 向上传递事件
      let $parent = this.$parent || this.$root
      let name = $parent.$options.componentName
      while ($parent && (!name || name !== componentName)) {
        $parent = $parent.$parent
        if ($parent) {
          name = $parent.$options.componentName
        }
      }
      $parent && $parent.$emit.apply($parent, [eventName].concat(params))
    },

    broadcast (componentName, eventName, params) { // 向下广播事件
      // console.warn('broadcast')
      broadcast.call(this, componentName, eventName, params)
    }
  }
}
function broadcast (componentName, eventName, params) {
  this.$children.forEach($child => {
    if ($child.$options.componentName === componentName) $child.$emit.apply($child, [eventName].concat(params))
    broadcast.call($child, componentName, eventName, params)
  })
}
