import ComponentName from './src/main'
ComponentName.install = function (Vue) {
  Vue.install(ComponentName.name, ComponentName)
}

export default ComponentName
