<template>
    <div
            class="el-button"
            :type="nativeType"
            :class="[
                    'el-button--' + this.type,
                    buttonSize ? 'el-button--' + buttonSize : '',
                    {
                        'is-plain': this.plain,
                        'is-round': this.round,
                        'is-circle': this.circle,
                        'is-disabled': this.disabled,
                        'is-loading': this.loading
                    }
            ]"
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
    }
  },
  methods: {
    handleClick () {
      this.$emit('click', arguments)
    }
  }
}
</script>
