import Vue from 'Vue'
import Main from './main.vue'
import { ALERT_TYPES } from '@/utils/validateAlertType'

let MsgCtor = Vue.extend(Main)
let seed = 1
let zIndex = 3000
let instance
let instances = []

const Msg = function (options = {}) {
  if (Vue.prototype.$isServer) return
  if (typeof options === 'string') options = { message: options }
  let id = 'Message-' + seed++
  let userOnClose = options.onClose
  options.onClose = () => Msg.close(id, userOnClose)
  instance = new MsgCtor({ data: options })
  instance.id = id
  instance.$mount()
  document.body.appendChild(instance.$el)
  let verticalOffset = options.offset || 20
  instances.forEach(item => { verticalOffset += item.$el.offsetHeight + 16 })
  instance.verticalOffset = verticalOffset
  instance.$el.style.zIndex = zIndex++
  instance.visible = true
  // console.log('instance:', instance)
  instances.push(instance)
  return instance
}

ALERT_TYPES.forEach(type => {
  Msg[type] = (options = {}) => {
    if (typeof options === 'string') options = { message: options }
    options.type = type
    return Msg(options)
  }
})

Msg.close = (id, userOnClose) => {
  let closeIdx = -1
  let removeOffsetHeight = 0
  const len = instances.length
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      closeIdx = i
      removeOffsetHeight = instances[closeIdx].$el.offsetHeight
      typeof userOnClose === 'function' && userOnClose(instances[closeIdx])
      break
    }
  }
  instances.splice(closeIdx, 1)
  if (closeIdx === -1 || len <= 1 || closeIdx > len - 1) return
  for (let i = closeIdx; i < len - 1; i++) {
    const dom = instances[i].$el
    dom.style.top = Number.parseInt(dom.style.top, 10) - removeOffsetHeight - 16 + 'px'
  }
}

Msg.closeAll = () => {
  console.warn('Msg.closeAll')
  instances.forEach(ins => { ins.close() })
}

export default Msg
