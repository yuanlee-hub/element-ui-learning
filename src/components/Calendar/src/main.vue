<template>
    <div aria="Calendar" class="el-calendar">
      <div class="el-calendar__header">
        <div class="el-calendar__title">{{ _title }}</div>
        <div class="el-calendar__button-group">
          <el-button-group>
            <el-button type="plain" @click="setPrevMonth">上个月</el-button>
            <el-button type="plain" @click="setToday">今天</el-button>
            <el-button type="plain" @click="setNextMonth">下个月</el-button>
          </el-button-group>
        </div>
      </div>
      <div class="el-calendar__body">
        <table class="el-calendar-table" cellspacing="0" cellpadding="0">
          <thead>
            <th v-for="name in weekNames" :key="name">{{ name }}</th>
          </thead>
          <tbody>
          <tr v-for="(tr,idx) in _tidy" :key="idx" class="el-calendar-table__row">
            <td v-for="td in tr" :key="td.getTime()"
                :class="['current',
                [td.getFullYear(),td.getMonth(),td.getDate()].join()===[date.getFullYear(),date.getMonth(),date.getDate()].join()?'is-selected is-today' : ''
                ]"
                @click="onClick(td)"
            >
              <div class="el-calendar-day">{{ _format(td) }}</div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import { tidy } from '@/utils/date'
const config = {
  weekNames: ['一', '二', '三', '四', '五', '六', '日']
}
export default {
  name: 'Cl' + 'Calendar',
  props: {
    value: [String, Number, Date],
    firstDayOfWeek: {
      type: Number,
      default: 1
    },
    format: {
      type: [Function, String],
      default: 'yyyy-MM-dd'
    }
  },
  data () {
    return {
      weekNames: config.weekNames.slice(this.firstDayOfWeek - 1).concat(config.weekNames.slice(0, this.firstDayOfWeek - 1)),
      date: null
    }
  },
  computed: {
    _title () {
      return `${this.date.getFullYear()}年${this.date.getMonth() + 1}月`
    },
    _format () {
      if (typeof this.format === 'function') return this.format
      return _ => {
        const [year, month, date] = [_.getFullYear(), _.getMonth() + 1, _.getDate()]
        return this.format.replace(/yyyy/g, year).replace(/MM/g, month < 10 ? '0' + month : month).replace(/dd/g, date < 10 ? '0' + date : date)
      }
    }
  },
  methods: {
    setPrevMonth () {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, 1)
      // console.log('prev:', this.date)
      this._tidy = tidy(this.date, this.firstDayOfWeek)
    },
    setToday () {
      this.date = new Date()
      // console.log('today:', this.date)
      this._tidy = tidy(this.date, this.firstDayOfWeek)
    },
    setNextMonth () {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1)
      // console.log('next:', this.date)
      this._tidy = tidy(this.date, this.firstDayOfWeek)
    },
    onClick (date) {
      this.$emit('pickDate', date)
    }
  },
  created () {
    // console.log('firstDayOfWeek:', this.firstDayOfWeek)
    this.date = new Date(this.value)
    const _tidy = tidy(this.date, this.firstDayOfWeek)
    // console.log('_tidy:', _tidy)
    this._tidy = _tidy
  }
}
</script>
