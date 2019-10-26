<script>
export default {
  name: 'Cl' + 'Tag',
  props: {
    type: String,
    closable: {
      type: Boolean,
      default: false
    },
    disableTransitions: {
      type: Boolean,
      default: false
    },
    hit: {
      type: Boolean,
      default: false
    },
    color: String,
    size: String,
    effect: { // 主题 [dark/light/plain] light
      type: String,
      default: 'light'
    }
  },
  data () {
    return {

    }
  },
  computed: {
    tagSize () {
      return this.size || this.$ELEMENT.size
    },
    classList () {
      return [
        'el-tag',
        'el-tag--' + this.effect,
        this.type ? 'el-tag--' + this.type : '',
        this.tagSize ? 'el-tag--' + this.tagSize : '',
        this.hit && 'is-hit'
      ]
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    },
    handleClose (evt) {
      evt.stopPropagation()
      this.$emit('close', evt)
    }
  },
  render (h) {
    const tagEl = (
      <span
        class={this.classList} style={{backgroundColor: this.color}} on-click={this.handleClick}>
        {this.$slots.default}
        {this.closable && <i class="el-tag__close el-icon-close" on-click={this.handleClose}></i>}
      </span>
    )
    return this.disableTransitions ? tagEl : <transition name="el-zoom-center">{ tagEl }</transition>
  }
}
</script>
