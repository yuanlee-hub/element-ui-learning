<template>
    <div class="demo">

        <dl>
            <dt>Demo</dt>
            <dd>
                <dl>
                    <dt>Base</dt>
                    <dd>
                        <xmp>
                            stroke-width(高度):
                            默认值6px
                            inside:
                            percentage：不溢出隐藏
                        </xmp>
                    </dd>
                    <dd><el-progress :percentage="1"></el-progress></dd>
                </dl>
                <dl>
                    <dt>show-text</dt>
                    <dd>
                        <dl>
                            <dt>默认显示</dt>
                            <dd>
                                <el-progress :percentage="50"></el-progress>
                                <el-progress :percentage="50" :stroke-width="26"></el-progress>
                            </dd>
                            <dt>不显示</dt>
                            <dd>
                                <el-progress :percentage="50" :show-text="false"></el-progress>
                                <el-progress :percentage="50" :stroke-width="26" :show-text="false"></el-progress>
                                <el-progress :percentage="50" :stroke-width="26" :show-text="false" status="success"></el-progress>
                            </dd>
                        </dl>
                    </dd>
                </dl>
                <dl>
                    <dt>text-inside</dt>
                    <dd>
                        <dl>
                            <dt>默认 stroke-width,不显示 </dt>
                            <dd>
                                <el-progress :percentage="100" text-inside></el-progress>
                            </dd>
                            <dt>stroke-width=20,显示</dt>
                            <dd>
                                <el-progress :percentage="100" :stroke-width="20" text-inside></el-progress>
                            </dd>
                        </dl>
                    </dd>
                </dl>
                <dl>
                    <dt>no percentage</dt>
                    <dd>
                        <xmp>
                            percentage 必需
                            未设置percentage时，Vue组件报错
                            但组件仍然渲染
                        </xmp>
                    </dd>
                    <dd>
                        <el-progress></el-progress>
                    </dd>
                </dl>
                <dl>
                    <dt>stroke-width</dt>
                    <dd>
                        <el-progress :percentage="1" :stroke-width="26" text-inside></el-progress>
                        <el-progress :percentage="50" :stroke-width="26" text-inside></el-progress>
                    </dd>
                </dl>

                <dl>
                    <dt>status</dt>
                    <dd>
                        <el-progress :percentage="10" :stroke-width="26" status="success"></el-progress>
                        <el-progress :percentage="10" :stroke-width="26" status="warning"></el-progress>
                        <el-progress :percentage="10" :stroke-width="26" status="exception"></el-progress>
                    </dd>
                </dl>
                <dl>
                    <dt>color</dt>
                    <dd>
                        <dl>
                            <dt>Type String</dt>
                            <dd>
                                <el-progress :color="'#3C3'" :percentage="10" :stroke-width="20" status="success"></el-progress>
                                <el-progress :color="'#33C'" :percentage="60" :stroke-width="20" status="success"></el-progress>
                                <el-progress :color="'#C33'" :percentage="100" :stroke-width="20" status="success"></el-progress>
                            </dd>
                            <dt>Type Array</dt>
                            <dd>
                                <el-progress :color="colors" :percentage="10" :stroke-width="20"></el-progress>
                                <el-progress :color="colors" :percentage="50" :stroke-width="20"></el-progress>
                                <el-progress :color="colors" :percentage="90" :stroke-width="20"></el-progress>
                            </dd>
                            <dt>Type Function</dt>
                            <dd>
                                <el-progress :color="colorMethod" :percentage="10" :stroke-width="20" status="success"></el-progress>
                                <el-progress :color="colorMethod" :percentage="50" :stroke-width="20" status="success"></el-progress>
                                <el-progress :color="colorMethod" :percentage="100" :stroke-width="20" status="success"></el-progress>
                            </dd>
                        </dl>
                    </dd>
                </dl>
            </dd>
        </dl>

        <dl>
            <dt>DEV</dt>
            <dd>
                <dl>
                    <dt>Base</dt>
                    <dd><cl-progress :percentage="1"></cl-progress></dd>
                </dl>
                <dl>
                    <dt>show-text</dt>
                    <dd>
                        <dl>
                            <dt>默认显示</dt>
                            <dd>
                                <cl-progress :percentage="50"></cl-progress>
                                <cl-progress :percentage="50" :stroke-width="26"></cl-progress>
                            </dd>
                            <dt>不显示</dt>
                            <dd>
                                <cl-progress :percentage="50" :show-text="false"></cl-progress>
                                <cl-progress :percentage="50" :stroke-width="26" :show-text="false"></cl-progress>
                            </dd>
                        </dl>
                    </dd>
                </dl>
                <dl>
                    <dt>text-inside</dt>
                    <dd>
                        <dl>
                            <dt>默认 stroke-width,不显示 </dt>
                            <dd>
                                <cl-progress :percentage="100" text-inside></cl-progress>
                            </dd>
                            <dt>stroke-width=20,显示</dt>
                            <dd>
                                <cl-progress :percentage="100" :stroke-width="20" text-inside></cl-progress>
                            </dd>
                        </dl>
                    </dd>
                </dl>
                <dl>
                    <dt>no percentage</dt>
                    <dd>
                        <cl-progress></cl-progress>
                    </dd>
                </dl>
                <dl>
                    <dt>stroke-width</dt>
                    <dd>
                        <cl-progress :percentage="1" :stroke-width="26" text-inside></cl-progress>
                        <cl-progress :percentage="50" :stroke-width="26" text-inside></cl-progress>
                    </dd>
                </dl>

                <dl>
                    <dt>status(图标)</dt>
                    <dd>
                        <cl-progress :percentage="10" :stroke-width="26" status="error"></cl-progress>
                        <cl-progress :percentage="50" :stroke-width="26" status="warning"></cl-progress>
                        <cl-progress :percentage="90" :stroke-width="26" status="success"></cl-progress>
                    </dd>
                </dl>

                <dl>
                    <dt>format</dt>
                    <dd>
                        <cl-progress :percentage="10" :stroke-width="26" :format="format" status="success"></cl-progress>
                        <cl-progress :percentage="50" :stroke-width="26" :format="format" status="warning"></cl-progress>
                        <cl-progress :percentage="90" :stroke-width="26" :format="format" status="error"></cl-progress>
                        <cl-progress :percentage="10" :stroke-width="26" :format="format"></cl-progress>
                        <cl-progress :percentage="10" :stroke-width="26" :format="format" :show-text="false"></cl-progress>
                    </dd>
                </dl>

                <dl>
                    <dt>color</dt>
                    <dd>
                        <dl>
                            <dt>Type String</dt>
                            <dd>
                                <cl-progress :color="'red'" :percentage="10" :stroke-width="20"></cl-progress>
                                <cl-progress :color="'yellow'" :percentage="60" :stroke-width="20"></cl-progress>
                                <cl-progress :color="'green'" :percentage="100" :stroke-width="20"></cl-progress>
                            </dd>
                            <dt>Type Array</dt>
                            <dd>
                                <dl>
                                    <dt>Object</dt>
                                    <dd>
                                        <cl-progress :color="colors" :percentage="10" :stroke-width="20"></cl-progress>
                                        <cl-progress :color="colors" :percentage="50" :stroke-width="20"></cl-progress>
                                        <cl-progress :color="colors" :percentage="90" :stroke-width="20"></cl-progress>
                                    </dd>
                                    <dt>String</dt>
                                    <cl-progress :color="['red','yellow','green']" :percentage="10" :stroke-width="20"></cl-progress>
                                    <cl-progress :color="['red','yellow','green']" :percentage="50" :stroke-width="20"></cl-progress>
                                    <cl-progress :color="['red','yellow','green']" :percentage="90" :stroke-width="20"></cl-progress>
                                </dl>
                            </dd>
                            <dt>Type Function</dt>
                            <dd>
                                <cl-progress :color="colorMethod" :percentage="10" :stroke-width="20"></cl-progress>
                                <cl-progress :color="colorMethod" :percentage="50" :stroke-width="20"></cl-progress>
                                <cl-progress :color="colorMethod" :percentage="100" :stroke-width="20"></cl-progress>
                            </dd>
                        </dl>
                    </dd>
                </dl>

            </dd>
        </dl>
    </div>
</template>

<script>
import ClProgress from '@/components/Progress'

export default {
  name: 'Progress' + 'Demo',
  components: { ClProgress },
  data () {
    return {
      colors: [{ color: 'red', percentage: 30 }, { color: 'yellow', percentage: 60 }, { color: 'green', percentage: 100 }]
    }
  },
  methods: {
    colorMethod (progress) {
      // console.log('colorMethod>progress:', progress)
      return progress <= 30 ? 'red' : progress <= 60 ? 'yellow' : 'green'
    },
    format (progress) {
      // console.log('format>progress:', progress)
      let st
      switch (true) {
        case progress <= 34:
          st = '差'
          break
        case progress <= 67:
          st = '中'
          break
        case progress <= 100:
          st = '好'
          break
      }
      // console.log('format>ret:', st)
      return st
    }
  }
}
</script>
