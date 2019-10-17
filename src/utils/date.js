const days = [1, 2, 3, 4, 5, 6, 0]

export function headDiffDays (date, firstDayOfWeek = 1) { // 距离传入的周起始天数
  // console.log('headDiffDays>firstDayOfWeek:', firstDayOfWeek)
  date = new Date(date)
  // console.log('headDiffDays>date:', date)
  const _days = days.slice(firstDayOfWeek - 1).concat(days.slice(0, firstDayOfWeek - 1))
  // console.log('headDiffDays>_days:', _days)
  // console.log('headDiffDays>diff:', _days.indexOf(date.getDay()))
  return _days.indexOf(date.getDay())
}

export function trailDiffDays (date, firstDayOfWeek = 1) { // 距离传入的周起始对应的天数
  date = new Date(date)
  const _days = days.slice(firstDayOfWeek - 1).concat(days.slice(0, firstDayOfWeek - 1))
  // console.log('trailDiffDays>_days:', _days)
  // console.log('trailDiffDays>days:', _days)
  // console.log('trailDiffDays>diff:', 7 - (_days.indexOf(date.getDay()) + 1))
  return 7 - (_days.indexOf(date.getDay()) + 1)
}

export function firstDate (date) {
  date = new Date(date)
  // console.log('firstDate:', new Date(date.getFullYear(), date.getMonth(), 1))
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

export function lastDate (date) {
  date = new Date(date)
  // console.log('lastDate:', new Date(date.getFullYear(), date.getMonth() + 1, 0))
  return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

export function tidy (date, firstDayOfWeek) {
  date = new Date(date)
  const [year, month] = [date.getFullYear(), date.getMonth()]
  // console.log('tidy:', { year, month })

  const _headDiff = headDiffDays(firstDate(date), firstDayOfWeek)
  // console.log('_headDiff:', _headDiff)
  const _headDates = Array.from({length: _headDiff}, (_, idx) => new Date(year, month, 1 - (idx + 1)))
  _headDates.reverse()
  // console.log('_headDates:', _headDates)

  const _lastDate = lastDate(date)
  // console.log('_lastDate:', _lastDate)
  const _trailDiff = trailDiffDays(lastDate(_lastDate), firstDayOfWeek)
  // console.log('_trailDiff:', _trailDiff)
  const _trailDates = Array.from({length: _trailDiff + (_trailDiff < 5 ? 7 : 0)}, (_, idx) => new Date(year, month + 1, idx + 1))
  // console.log('_trailDates:', _trailDates)

  const curr = Array.from({length: _lastDate.getDate()}, (_, idx) => new Date(year, month, idx + 1))

  const full = _headDates.concat(curr, _trailDates)
  // console.log('full:', full)

  const _tidy = []
  let tr = -1
  let td = 0
  let idx = 0
  while (idx < full.length) {
    if (idx % 7) {
      td++
      _tidy[tr][td] = new Date(full[idx])
    } else {
      tr++
      td = 0
      _tidy[tr] = [new Date(full[idx])]
    }
    idx++
  }
  return _tidy
}
