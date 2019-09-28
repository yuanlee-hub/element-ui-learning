import Tag from './src/main'
Tag.install = function (Vue) {
  Vue.install(Tag.name, Tag)
}

export default Tag
