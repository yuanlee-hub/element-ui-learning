<template>
    <div class="demo">
        <dl>
            <dt>Demo</dt>
            <dd>
              <dl>
                <dt>hit</dt>
                <dd>
                  <el-tag>Tag1</el-tag>
                  <el-tag hit>Tag2</el-tag>
                </dd>
              </dl>

              <dl>
                <dt>type</dt>
                <dd>
                  <el-tag>normal</el-tag>
                  <el-tag type="success">success</el-tag>
                  <el-tag type="info">success</el-tag>
                  <el-tag type="warning">warning</el-tag>
                  <el-tag type="danger">danger</el-tag>
                </dd>
              </dl>

              <dl>
                <dt>click/closable</dt>
                <dd>
                  <el-tag closable @close="handleClose" @click="handleClick">closable</el-tag>
                </dd>
              </dl>

              <dl>
                <dt>color</dt>
                <dd>
                  <el-tag color="red">red</el-tag>
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
                  <cl-tag>t1</cl-tag>
                  <cl-tag hit>hit</cl-tag>
                </dd>
              </dl>

              <dl>
                <dt>type</dt>
                <dd>
                  <cl-tag>normal</cl-tag>
                  <cl-tag type="success">success</cl-tag>
                  <cl-tag type="info">success</cl-tag>
                  <cl-tag type="warning">warning</cl-tag>
                  <cl-tag type="danger">danger</cl-tag>
                </dd>
              </dl>

              <dl>
                <dt>click/closable</dt>
                <dd>
                  <cl-tag>normal</cl-tag>
                  <cl-tag type="success" closable @close="handleClose" @click="handleClick">success</cl-tag>
                  <cl-tag type="info" closable @close="handleClose">info</cl-tag>
                  <cl-tag type="warning" closable @close="handleClose">warning</cl-tag>
                  <cl-tag type="danger" closable @close="handleClose">danger</cl-tag>
                </dd>
              </dl>

              <dl>
                <dt>size</dt>
                <dd>
                  <cl-tag>normal</cl-tag>
                  <cl-tag size="medium">medium</cl-tag>
                  <cl-tag size="small">small</cl-tag>
                  <cl-tag size="mini">mini</cl-tag>
                </dd>
              </dl>

              <dl>
                <dt>effect</dt>
                <dd>
                  <cl-tag effect="dark">normal</cl-tag>
                  <cl-tag effect="dark" type="success">success</cl-tag>
                  <cl-tag effect="dark" type="info">success</cl-tag>
                  <cl-tag effect="dark" type="warning">warning</cl-tag>
                  <cl-tag effect="dark" type="danger">danger</cl-tag>
                </dd>
              </dl>

              <dl>
                <dt>color</dt>
                <dd>
                  <cl-tag color="red">red</cl-tag>
                </dd>
              </dl>

              <dl>
                <dt>Transitions</dt>
                <dd>
                  <el-button @click="handleAdd">Add</el-button>
                  <hr>
                  <cl-tag v-for="(tag,idx) in tags" closable :disable-transitions="false" :key="tag.id" @close="handleRemove(idx)">{{ tag.name }}</cl-tag>
                </dd>
              </dl>

            </dd>
        </dl>

    </div>
</template>

<script>
import ClTag from '@/components/tag'
export default {
  name: 'Component' + 'Demo',
  components: { ClTag },
  data () {
    return {
      tags: []
    }
  },
  methods: {
    handleAdd () {
      const now = Date.now()
      this.tags.push({
        id: now,
        name: now
      })
    },
    handleRemove (idx) {
      this.tags.splice(idx, 1)
    },
    handleClick () {
      console.log('Click')
    },
    handleClose () {
      console.log('Close')
    }
  }
}
</script>
