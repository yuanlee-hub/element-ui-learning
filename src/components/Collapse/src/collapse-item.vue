<template>
    <div class="el-collapse-item">
        <div class="el-collapse-item__header" @click="handleClick">
            <slot name="title">{{ title }}</slot>
            <i class="el-collapse-item__arrow el-icon-arrow-right"></i>
        </div>
        <el-collapse-transition>
            <div v-show="show" class="el-collapse-item__wrap">
                <div class="el-collapse-item__content">
                    <slot>{{ content }}</slot>
                </div>
            </div>
        </el-collapse-transition>
    </div>
</template>

<script>
import { generateId } from 'element-ui/src/utils/util'
import Emitter from '@/mixins/emitter'

export default {
  name: 'ClCollapse',
  componentName: 'ClCollapseItem',
  props: {
    name: {
      type: [String, Number],
      default: () => generateId()
    },
    title: String,
    content: String
  },
  inject: ['collapse'],
  mixins: [Emitter],
  computed: {
    show () {
      return this.collapse.activeNames.includes(this.name)
    }
  },
  methods: {
    handleClick () {
      this.dispatch('ClCollapse', 'item-click', this)
    },
    handleChangeActiveNames (activeNames) {
    }
  },
  created () {
    this.$on('changeActiveNames', this.handleChangeActiveNames)
  }
}
</script>
