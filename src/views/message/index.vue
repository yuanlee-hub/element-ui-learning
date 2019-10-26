<template>
    <div class="demo">
        <dl>
            <dt>Demo</dt>
            <dd>
              <el-button @click="elBase">base</el-button>
            </dd>
        </dl>

        <dl>
            <dt>DEV</dt>
            <dd></dd>
        </dl>

    </div>
</template>

<script>
import ClMessage from '@/components/Message'
export default {
  name: 'Message' + 'Demo',
  components: { ClMessage },
  methods: {
    elBase () {
      this.$message({
        message: 'base',
        duration: 0
      })
    }
  }
}
</script>
