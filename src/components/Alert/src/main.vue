<template>
    <transition name="el-alert-fade">
        <div role="alert" class="el-alert" :class="['el-alert--'+type, 'is-'+effect, {'is-center':center}]" v-if="visible">
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
export default {
  name: 'ClAlert',
  props: {
    type: {type: String, default: 'info'},
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
