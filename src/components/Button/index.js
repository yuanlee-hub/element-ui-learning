import Button from './src/main'
Button.install = function (Vue) {
  Vue.install(Button.name, Button)
}

export default Button
