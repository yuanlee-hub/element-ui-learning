import Component from './src/main'
Component.install = function (Vue) {
  Vue.install(Component.name, Component)
}

export default Component
