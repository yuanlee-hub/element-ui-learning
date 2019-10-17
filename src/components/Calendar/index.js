import Calendar from './src/main'
Calendar.install = function (Vue) {
  Vue.install(Calendar.name, Calendar)
}

export default Calendar
