import Progress from './src/main'
Progress.install = function (Vue) {
  Vue.install(Progress.name, Progress)
}

export default Progress
