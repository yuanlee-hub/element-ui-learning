import Alert from './src/main'
Alert.install = function (Vue) {
  Vue.install(Alert.name, Alert)
}

export default Alert
