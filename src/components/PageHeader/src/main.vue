<template>
    <div class="el-page-header">
        <div class="el-page-header__left" @click="goBack">
            <i class="el-icon-back"></i>
            <div class="el-page-header__title">
                <slot name="title">{{ title }}</slot>
            </div>
        </div>
        <div v-if="content || $slots.content" class="el-page-header__content">
            <slot name="content">{{ content }}</slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ClPageHeader',
  props: {
    title: String,
    content: String
  },
  methods: {
    goBack () {
      this.$emit('goBack')
    }
  }
}
</script>
<style scoped>
    .el-page-header>div {
        display: inline-block;
    }
    .el-page-header__left {
        cursor: pointer;
    }
    .el-page-header__title {
        display: inline-block;
    }
    .el-page-header__content {
        margin-left: 10px;
        padding-left: 10px;
        border-left: 1px solid #ccc;
    }
</style>
