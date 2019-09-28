<template>
    <div class="demo">
        <dl>
            <dt>Demo</dt>
            <dd>
                <dl>
                    <dt>type</dt>
                    <dd>
                        <el-button>No</el-button>
                        <el-button type="primary">type=primary</el-button>
                        <el-button type="success">type=success</el-button>
                        <el-button type="text">type=text</el-button>
                    </dd>
                </dl>
                <dl>
                    <dt>plain</dt>
                    <el-button type="success" plain>plain</el-button>
                </dl>
                <dl>
                    <dt>round+circle+loading</dt>
                    <dd>
                        <el-button round>round</el-button>
                        <el-button circle>circle</el-button>
                        <el-button round circle>round+circle</el-button>
                        <el-button type="danger" icon="el-icon-delete" loading>icon=el-icon-delete</el-button>
                    </dd>
                </dl>
                <dl>
                    <dt>click</dt>
                    <dd>
                        <cl-button @click="handleClick">click</cl-button>
                    </dd>
                </dl>
                <dl>
                    <dt>autofocus</dt>
                    <dd>
                        <cl-button autofocus>autofocus</cl-button>
                    </dd>
                </dl>
            </dd>
        </dl>

        <dl>
            <dt>DEV</dt>
            <dd>
                <dl>
                    <dt>type</dt>
                    <dd>
                        <cl-button>No</cl-button>
                        <cl-button type="primary">type=primary</cl-button>
                        <cl-button type="success">type=success</cl-button>
                        <cl-button type="text">type=text</cl-button>
                    </dd>
                </dl>
                <dl>
                    <dt>plain</dt>
                    <cl-button type="success" plain>plain</cl-button>
                </dl>
                <dl>
                    <dt>round+circle</dt>
                    <dd>
                        <cl-button round>round</cl-button>
                        <cl-button circle>circle</cl-button>
                        <cl-button round circle>round+circle</cl-button>
                    </dd>
                </dl>
                <dl>
                    <dt>icon</dt>
                    <dd>
                        <cl-button type="danger" icon="el-icon-delete">icon=el-icon-delete</cl-button>
                        <cl-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></cl-button>
                    </dd>
                </dl>
                <dl>
                    <dt>disabled + loading</dt>
                    <dd>
                        <cl-button type="danger" icon="el-icon-delete" disabled>icon=el-icon-delete</cl-button>
                        <cl-button type="danger" icon="el-icon-delete" loading>icon=el-icon-delete</cl-button>
                    </dd>
                </dl>
                <dl>
                    <dt>size</dt>
                    <dd>
                        <cl-button>default</cl-button>
                        <cl-button size="medium">medium</cl-button>
                        <cl-button size="small">small</cl-button>
                        <cl-button size="mini">mini</cl-button>
                    </dd>
                </dl>
                <dl>
                    <dt>click</dt>
                    <dd>
                        <cl-button @click="handleClick">click</cl-button>
                    </dd>
                </dl>
                <dl>
                    <dt>autofocus</dt>
                    <dd>
                        <el-button autofocus>autofocus</el-button>
                    </dd>
                </dl>
            </dd>
        </dl>

    </div>
</template>

<script>
import ClButton from '@/components/Button'
export default {
  name: 'Button' + 'Demo',
  components: { ClButton },
  methods: {
    handleClick () {
      console.log(arguments)
    }
  }
}
</script>
