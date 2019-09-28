import PageHeader from './src/main'
PageHeader.install = function (Vue) {
  Vue.install(PageHeader.name, PageHeader)
}

export default PageHeader
