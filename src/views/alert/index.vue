<template>
    <div class="demo">
        <dl>
            <dt>Demo</dt>
            <dd>
                <dl>
                    <dt>showIcon</dt>
                    <dd>
                        <el-alert type="info" title="info" show-icon>xxxx</el-alert>
                    </dd>
                    <dt>close</dt>
                    <dd>
                        <el-alert type="info" title="info" show-icon>xxxx</el-alert>
                    </dd>
                </dl>
            </dd>
        </dl>

        <dl>
            <dt>DEV</dt>
            <dd>
                <dl>
                    <dt>Type</dt>
                    <dd>
                        <cl-alert>默认Type</cl-alert>
                        <cl-alert type="info">info</cl-alert>
                        <cl-alert type="success">success</cl-alert>
                        <cl-alert type="warning">warning</cl-alert>
                        <cl-alert type="error">error</cl-alert>
                        <cl-alert type="非法Type">非法Type</cl-alert>
                    </dd>
                </dl>

                <dl>
                    <dt>Desc</dt>
                    <dd>
                        <dl>
                            <dt>prop</dt>
                            <dd>
                                <cl-alert desc="通过prop" type="success"></cl-alert>
                            </dd>
                            <dt>slot</dt>
                            <dd>
                                <cl-alert type="success"><slot>通过slot</slot></cl-alert>
                            </dd>
                            <dt>
                                prop + slot
                            </dt>
                            <dd>
                                <cl-alert desc="通过prop" type="success"><slot>通过slot</slot></cl-alert>
                            </dd>
                        </dl>
                    </dd>
                </dl>

                <dl>
                    <dt>Title</dt>
                    <dd>
                        <dl>
                            <dt>prop</dt>
                            <dd>
                                <cl-alert title="通过prop" type="success"></cl-alert>
                            </dd>
                            <dt>slot</dt>
                            <dd>
                                <cl-alert type="success"><template slot="title">通过slot</template></cl-alert>
                            </dd>
                            <dt>prop + slot</dt>
                            <dd>
                                <cl-alert type="success" title="通过prop"><template slot="title">通过slot</template></cl-alert>
                            </dd>
                            <dt>title + desc</dt>
                            <dd>
                                <cl-alert type="success" title="通过prop">desc</cl-alert>
                            </dd>
                        </dl>
                    </dd>
                </dl>

                <dl>
                    <dt>Dark</dt>
                    <dd>
                        <cl-alert type="info" effect="dark">info</cl-alert>
                        <cl-alert type="success" effect="dark">success</cl-alert>
                        <cl-alert type="warning" effect="dark">warning</cl-alert>
                        <cl-alert type="error" effect="dark">error</cl-alert>
                    </dd>
                </dl>

                <dl>
                    <dt>Icon</dt>
                    <dd>
                        <cl-alert type="info" title="title" show-icon>info</cl-alert>
                        <cl-alert type="success" show-icon>success</cl-alert>
                        <cl-alert type="warning" show-icon>warning</cl-alert>
                        <cl-alert type="error" show-icon>error</cl-alert>
                    </dd>
                </dl>

                <dl>
                    <dt>Close</dt>
                    <dd>
                        <cl-alert type="info" title="title" show-icon>desc</cl-alert>
                        <cl-alert type="success" title="title" show-icon :closeable="false">无法关闭</cl-alert>
                        <cl-alert type="warning" title="title" show-icon :close-text="'点我关闭'">自定义关闭文本</cl-alert>
                        <cl-alert type="error" title="title" show-icon @close="handleClose">关闭事件</cl-alert>
                    </dd>
                </dl>

                <dl>
                    <dt>Center</dt>
                    <dd>
                        <cl-alert type="info" title="title" center>desc</cl-alert>
                    </dd>
                </dl>
            </dd>
        </dl>

    </div>
</template>

<script>
import ClAlert from '@/components/Alert'
export default {
  components: { ClAlert },
  methods: {
    handleClose () {
      console.log('close')
    }
  }
}
</script>
