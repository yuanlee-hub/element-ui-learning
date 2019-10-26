<template>
    <div class="demo">
        <dl>
            <dt>Demo</dt>
            <dd>
              <dl>
                <dt>base</dt>
                <dd>
                  <el-tabs v-model="ElTab1" @tab-click="handleClick">
                    <el-tab-pane name="name-1-1" label="Title-1-1">TabCon-1-1</el-tab-pane>
                    <el-tab-pane name="name-1-2" label="Title-1-2">TabCon-1-2</el-tab-pane>
                    <el-tab-pane name="name-1-3" label="Title-1-3">TabCon-1-3</el-tab-pane>
                  </el-tabs>
                </dd>
              </dl>
            </dd>
        </dl>

        <dl>
            <dt>DEV</dt>
            <dd>
              <dl>
                <dt>tab-pane</dt>
                <dd>
                  <cl-tab-pane name="tab-pane-1-1" label="tab-pane-1-1">tab-pane-1-1</cl-tab-pane>
                </dd>
              </dl>
              <dl>
                <dt>base</dt>
                <dd>
                  <cl-tabs v-model="ClTab1" @tab-click="handleClick">
                    <cl-tab-pane name="name-1-1" label="Title-1-1">TabCon-1-1</cl-tab-pane>
                    <cl-tab-pane name="name-1-2" label="Title-1-2">TabCon-1-2</cl-tab-pane>
                    <cl-tab-pane name="name-1-3" label="Title-1-3">TabCon-1-3</cl-tab-pane>
                  </cl-tabs>
                  <cl-tabs v-model="ClTab2" @tab-click="handleClick">
                    <cl-tab-pane name="name-2-1" label="Title-2-1">TabCon-2-1</cl-tab-pane>
                    <cl-tab-pane name="name-2-2" label="Title-2-2">TabCon-2-2</cl-tab-pane>
                    <cl-tab-pane name="name-2-3" label="Title-2-3">TabCon-2-3</cl-tab-pane>
                  </cl-tabs>
                  <cl-tabs v-model="ClTab3" @tab-click="handleClick">
                    <cl-tab-pane name="name-3-1" label="Title-3-1">TabCon-3-1</cl-tab-pane>
                    <cl-tab-pane name="name-3-2" label="Title-3-2">TabCon-3-2</cl-tab-pane>
                    <cl-tab-pane name="name-3-3" label="Title-3-3">TabCon-3-3</cl-tab-pane>
                  </cl-tabs>
                </dd>
              </dl>
            </dd>
        </dl>

    </div>
</template>

<script>
import ClTabs from '@/components/Tabs'
import ClTabPane from '@/components/TabPane'
export default {
  name: 'Tabs' + 'Demo',
  components: { ClTabs, ClTabPane },
  data () {
    return {
      ElTab1: '',
      ClTab1: '',
      ClTab2: 'name-2-2',
      ClTab3: 'name-3-3'
    }
  },
  methods: {
    handleClick () {
      console.log('Demo>handleClick>args:', arguments)
    }
  }
}
</script>
