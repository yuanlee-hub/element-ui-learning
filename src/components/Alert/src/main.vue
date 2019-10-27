<template>
    <transition name="el-alert-fade">
        <div role="alert" :class="classList" v-if="visible">
            <i v-if="showIcon" class="el-alert__icon" :class="['el-icon-'+type, isBig]"></i>
            <div class="el-alert_content">
            <span class="el-alert__title is-bold" v-if="$slots.title || title">
                <slot name="title">{{title}}</slot>
            </span>
                <p class="el-alert__description" v-if="$slots.default || desc">
                    <slot name="default">{{ desc }}</slot>
                </p>
                <i v-if="closeable" class="el-alert__closebtn" :class="[closeText ? 'is-customed' : 'el-icon-close']"
                   @click="close">{{ closeText }}</i>
            </div>
        </div>
    </transition>
</template>

<script>
import { default as validateAlertType, ALERT_TYPES } from '@/utils/validateAlertType'

export default {
  name: 'ClAlert',
  props: {
    type: {
      type: String,
      default: ALERT_TYPES.info,
      validator: validateAlertType
    },
    effect: {type: String, default: 'light'},
    title: String,
    desc: String,
    showIcon: Boolean,
    closeable: {
      type: Boolean,
      default: true
    },
    closeText: String,
    center: Boolean
  },
  data () {
    return {
      visible: true
    }
  },
  computed: {
    isBig () {
      return (this.showIcon && (this.title && (this.desc || this.$slots.default))) ? 'is-big' : ''
    },
    classList () {
      return [
        'el-alert',
        {
          [`el-alert--${this.type}`]: validateAlertType(this.type)
        },
        `is-${this.effect}`,
        this.center && 'is-center'
      ]
    }
  },
  methods: {
    close () {
      this.visible = false
      this.$emit('close')
    }
  }
}
</script>
