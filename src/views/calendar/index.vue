<template>
    <div class="demo">
        <dl>
            <dt>Demo</dt>
            <dd>
              <el-calendar :value="demo" :first-day-of-week="3"></el-calendar>
            </dd>
        </dl>

        <dl>
            <dt>DEV</dt>
            <dd>
              <cl-calendar :value="value" :first-day-of-week="3" format="yyyy/MM/dd" @pickDate="onPickDate"></cl-calendar>
            </dd>
        </dl>

    </div>
</template>

<script>
import ClCalendar from '@/components/Calendar'
export default {
  name: 'Calendar' + 'Demo',
  components: { ClCalendar },
  data () {
    return {
      demo: new Date(),
      value: new Date('2019/10/1')
    }
  },
  methods: {
    onPickDate (date) {
      console.log('pick date:', date)
    }
  }
}
</script>
