export const ALERT_TYPES = ['info', 'success', 'warning', 'error']
ALERT_TYPES.forEach(type => { ALERT_TYPES[type] = type })
export default function (type) {
  return ALERT_TYPES.includes(type)
}
