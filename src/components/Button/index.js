import Button from './src/button'
Button.install = function (Vue) {
  Vue.install(Button.name, Button)
}

export default Button
