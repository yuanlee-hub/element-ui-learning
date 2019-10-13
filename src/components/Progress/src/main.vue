<template>
    <div role="progress"
         aria-min="0"
         aria-max="100"
         :aria-valuenow="percentage"
         :class="classList">
        <div class="el-progress-bar">
            <div class="el-progress-bar__outer" :style="'height:'+strokeWidth+'px'">
                <div class="el-progress-bar__inner" :style="'width:'+percentage+'%;background-color:'+bgColor"></div>
            </div>
        </div>
        <div v-if="showText" class="el-progress__text">
            <template v-if="format">{{ textContent }}</template>
            <i v-else-if="status" :class="'el-icon-'+status"></i>
            <template v-else>{{percentage}}%</template>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ClProgress',
  props: {
    type: {
      type: String,
      default: 'line',
      validator: value => ['line', 'circle', 'dashborad'].includes(value)
    },
    percentage: {
      type: Number,
      required: true,
      default: 0,
      validator: value => value >= 0 && value <= 100
    },
    status: {
      type: String,
      validator: value => ['success', 'warning', 'error'].includes(value)
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    showText: {
      type: Boolean,
      default: true
    },
    textInside: {
      type: Boolean,
      default: false
    },
    format: Function,
    color: {
      type: [String, Array, Function],
      default: ''
    }
  },
  computed: {
    bgColor () {
      let bg = ''
      switch (typeof this.color) {
        case 'string':
          bg = this.color
          break
        case 'function':
          bg = this.color(this.percentage)
          break
        default:
          bg = this.getColor()
      }
      return bg
    },
    textContent () {
      return this.format ? this.format(this.percentage) : this.status
    },
    classList () {
      return [
        'el-progress',
        `el-progress--${this.type}`,
        this.status ? `is--${this.status}` : '',
        {
          'el-progress--without-text': !this.showText,
          'el-progress--text-inside': this.textInside
        }
      ]
    }
  },
  methods: {
    getColorArray () {
      return this.color.map((color, i) => {
        if (color.percentage) return color
        const percentage = (i + 1) / this.color.length * 100
        return {
          color,
          percentage
        }
      })
    },
    getColor () {
      const colorAry = this.getColorArray()
      // console.log('colorAry:', colorAry)
      colorAry.sort((a, b) => a - b)
      for (let i = 0; i < colorAry.length; i++) {
        if (this.percentage <= colorAry[i].percentage) return colorAry[i].color
      }
      return colorAry.pop().color
    }
  }
}
</script>
