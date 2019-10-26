<script>
import TabBar from './tab-bar'
export default {
  name: 'Cl' + 'TabNav',
  components: {
    TabBar
  },
  inject: ['rootTabs'],
  props: {
    panes: Array,
    currentName: String,
    onTabClick: Function
  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    handleClick () {
      console.log('handleClick>args:', arguments)
    }
  },
  created () {
  },
  render () {
    const {
      panes,
      onTabClick
    } = this
    const tabs = this._l(panes, (pane, idx) => {
      const tabName = pane.name || pane.index || idx
      const label = pane.$slots.label || pane.label
      return (
        <div
          class={{
            'el-tabs__item': true,
            [`is-${this.rootTabs.tabPosition}`]: true,
            'is-active': pane.active
          }}
          id={`tab-${tabName}`}
          key={`tab-${tabName}`}
          role="tab"
          ref="tabs"
          on-click={e => onTabClick(tabName, pane, e)}
        >
          {label}
        </div>
      )
    })
    return (
      <div class="el-tabs__nav-scroll" ref="navScroll">
        <div class="el-tabs__nav is-top">
          <tab-bar tabs={panes}></tab-bar>
          {tabs}
        </div>
      </div>
    )
  }
}
</script>
