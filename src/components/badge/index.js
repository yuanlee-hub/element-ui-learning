import Badge from './src/main'
Badge.install = function (Vue) {
  Vue.install(Badge.name, Badge)
}

export default Badge
