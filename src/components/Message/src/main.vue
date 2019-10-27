<template>
  <transition name="el-message-fade" @after-leave="handleAfterLeave">
    <div v-show="visible" aria="Message" :class="msgClass" :style="{top}">
      <i v-if="iconClass" :class="iconClass"></i>
      <i v-else :class="typeClass"></i>
      <slot>
        <div v-if="dangerouslyUseHTMLString" class="el-message__content" v-html="message"></div>
        <div v-else class="el-message__content">{{ message }}</div>
      </slot>
      <i v-if="showClose" class="el-message__closeBtn el-icon-close" @click="close"></i>
    </div>
  </transition>
</template>

<script>
import { ALERT_TYPES } from '@/utils/validateAlertType'

export default {
  name: 'Cl' + 'Message',
  data () {
    return {
      message: '',
      iconClass: '',
      customClass: '',
      center: '',
      type: '',
      visible: false,
      verticalOffset: 20,
      showClose: false,
      dangerouslyUseHTMLString: false,
      closed: false,
      duration: 3000,
      timer: null
    }
  },
  computed: {
    top () {
      return `${this.verticalOffset}px`
    },
    msgClass () {
      return [
        'el-message',
        {
          [`el-message--${this.type}`]: this.type && !this.iconClass,
          'is-center': this.center
        },
        this.customClass
      ]
    },
    typeClass () {
      return this.type && !this.iconClass ? `el-message__icon el-icon-${ALERT_TYPES[this.type]}` : ''
    }
  },
  watch: {
    closed (value) {
      this.visible = !value
    }
  },
  methods: {
    handleAfterLeave () {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    close () {
      this.closed = true
      // console.log('click close>this:', this)
      typeof this.onClose === 'function' && this.onClose()
    },
    setTimer () {
      if (this.duration === 0) return
      this.timer = setTimeout(() => {
        !this.closed && this.close()
      }, this.duration)
    },
    keydown (e) {
      if (e.keyCode === 27) {
        !this.closed && this.close()
      }
    }
  },
  mounted () {
    console.warn('Message>mounted')
    this.setTimer()
    document.addEventListener('keydown', this.keydown)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.keydown)
  }
}
</script>
