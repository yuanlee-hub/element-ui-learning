<script>
import TabNav from './tab-nav'
export default {
  name: 'Cl' + 'Tabs',
  components: {
    TabNav
  },
  props: {
    value: String,
    tabPosition: {
      type: String,
      default: 'top'
    },
    beforeLeave: Function
  },
  provide () {
    return {
      rootTabs: this
    }
  },
  data () {
    return {
      oldName: this.value,
      currentName: this.value,
      panes: []
    }
  },
  watch: {
    value (value) {
      this.setCurrentName(value)
    }
  },
  computed: {
  },
  methods: {
    setCurrentName (name) {
      this.currentName = name
      this.$emit('input', name)
    },
    handleTabClick (tabName, tab, event) {
      this.setCurrentName(tabName)
      this.$emit('tab-click', tabName, tab, event)
    },
    calcPaneInstances (isForceUpdate = false) {
      if (this.$slots.default) {
        const paneSlots = this.$slots.default.filter(vnode => vnode.tag && vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'ClTabPane')
        const panes = paneSlots.map(({ componentInstance }) => {
          componentInstance.active = componentInstance.name === this.value // Fix: componentInstance 没有自动注入active属性
          return componentInstance
        })
        const changed = !(this.panes.length === panes.length && panes.every((pane, idx) => pane === this.panes[idx]))
        if (isForceUpdate || changed || this.oldName !== this.currentName) {
          this.oldName = this.currentName
          this.panes = panes
        }
      }
    }
  },
  render (h) {
    let {
      panes,
      currentName,
      tabPosition,
      handleTabClick
    } = this

    const navData = {
      props: {
        panes,
        currentName,
        onTabClick: handleTabClick
      },
      ref: 'nav'
    }

    const header = (
      <div class={['el-tabs__header', `is-${tabPosition}`]}>
        <tab-nav {...navData}></tab-nav>
      </div>
    )

    const panels = (
      <div class="el-tabs__content">
        {this.$slots.default}
      </div>
    )
    // console.log('panels:', panels)
    return (
      <div class={{
        'el-tabs': true,
        [`el-tabs--${tabPosition}`]: true
      }}>
        { tabPosition !== 'bottom' ? [header, panels] : [panels, header] }
      </div>
    )
  },
  created () {
    if (!this.currentName) this.setCurrentName('0')
    this.$on('tab-nav-update', this.calcPaneInstances.bind(null, true))
  },
  mounted () {
    this.calcPaneInstances()
  },
  updated () {
    this.calcPaneInstances()
  }
}
</script>
