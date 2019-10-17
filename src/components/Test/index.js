import Test from './src/main'
Test.install = function (Vue) {
  Vue.install(Test.name, Test)
}

export default Test
