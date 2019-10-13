<template>
    <div
            :type="nativeType"
            :class="classList"
            :disabled="buttonDisabled"
            :autofocus="autofocus"
            @click="handleClick"
    >
        <i v-if="icon" :class="loading ? 'el-icon-loading' : icon"></i>
        <span><slot></slot></span>
    </div>
</template>

<script>
export default {
  name: 'Cl' + 'Button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    size: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean,
    loading: Boolean,
    autofocus: Boolean
  },
  inject: {
    clForm: {
      default: ''
    },
    clFormItem: {
      default: ''
    }
  },
  data () {
    return {}
  },
  computed: {
    buttonSize () {
      return this.size || this.clFormItem.clFromItemSize || this.$ELEMENT.size
    },
    buttonDisabled () {
      return this.disabled || this.clForm.disabled
    },
    classList () {
      return [
        'el-button',
        `el-button--${this.type}`,
        this.buttonSize ? `el-button--${this.buttonSize}` : '',
        {
          'is-plain': this.plain,
          'is-round': this.round,
          'is-circle': this.circle,
          'is-disabled': this.disabled,
          'is-loading': this.loading
        }
      ]
    }
  },
  methods: {
    handleClick () {
      this.$emit('click', arguments)
    }
  }
}
</script>
