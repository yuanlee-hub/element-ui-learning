<template>
  <div class="demo">
    <dl>
      <dt>Demo</dt>
      <dd>
        <dl>
          <dt>base</dt>
          <dd>
            <el-badge>
              <el-button>no value</el-button>
            </el-badge>

            <el-badge value="0">
              <el-button>0</el-button>
            </el-badge>

            <el-badge :value="10">
              <el-button>评论</el-button>
            </el-badge>

            <el-badge :value="10" is-dot>
              <el-button>dot</el-button>
            </el-badge>

            <el-badge :value="10" hidden>
              <el-button>hidden</el-button>
            </el-badge>
          </dd>
        </dl>

        <dl>
          <dt>type</dt>
          <dd>
            <el-badge :value="10">
              <el-button>normal</el-button>
            </el-badge>
            <el-badge :value="10" type="primary">
              <el-button>primary</el-button>
            </el-badge>
            <el-badge :value="10" type="success">
              <el-button>评论</el-button>
            </el-badge>
            <el-badge :value="10" type="danger">
              <el-button>评论</el-button>
            </el-badge>

          </dd>
        </dl>

        <dl>
          <dt>max</dt>
          <dd>
            <el-badge :value="9" :max="2">
              <el-button>评论</el-button>
            </el-badge>

            <el-badge :value="9" :max="0">
              <el-button>评论</el-button>
            </el-badge>
          </dd>
        </dl>


      </dd>
    </dl>

    <dl>
      <dt>DEV</dt>
      <dd>
        <dl>
          <dt>base</dt>
          <dd>
            <cl-badge>
              <cl-button>no value</cl-button>
            </cl-badge>

            <cl-badge value="0">
              <cl-button>0</cl-button>
            </cl-badge>

            <cl-badge :value="10">
              <cl-button>评论</cl-button>
            </cl-badge>

            <cl-badge :value="10" is-dot>
              <cl-button>dot</cl-button>
            </cl-badge>

            <cl-badge :value="10" hidden>
              <cl-button>hidden</cl-button>
            </cl-badge>
          </dd>
        </dl>

        <dl>
          <dt>type</dt>
          <dd>
            <cl-badge :value="10">
              <cl-button>normal</cl-button>
            </cl-badge>
            <cl-badge :value="10" type="primary">
              <cl-button>primary</cl-button>
            </cl-badge>
            <cl-badge :value="10" type="success">
              <cl-button>评论</cl-button>
            </cl-badge>
            <cl-badge :value="10" type="danger">
              <cl-button>评论</cl-button>
            </cl-badge>

          </dd>
        </dl>

        <dl>
          <dt>max</dt>
          <dd>
            <cl-badge :value="200" :max="100">
              <cl-button>评论</cl-button>
            </cl-badge>

            <cl-badge :value="9" :max="2">
              <cl-button>评论</cl-button>
            </cl-badge>

            <cl-badge :value="9" :max="0">
              <cl-button>评论</cl-button>
            </cl-badge>
          </dd>
        </dl>

      </dd>
    </dl>

  </div>
</template>

<script>
import ClButton from '@/components/Button'
import ClBadge from '@/components/Badge'
export default {
  name: 'Badge' + 'Demo',
  components: { ClButton, ClBadge }
}
</script>

<style scoped>
  dd > div {
    margin-right: 30px;
  }
</style>
