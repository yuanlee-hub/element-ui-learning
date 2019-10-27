<template>
    <div class="demo">
        <dl>
            <dt>Demo</dt>
            <dd>
              <dl>
                <dt>base</dt>
                <dd>
                  <el-button @click="elMessage({message:'base'})">base</el-button>
                  <el-button @click="elMessage({showClose:true, message: 'showClose'})">showClose</el-button>
                  <el-button @click="elCloseAll" type="warning">closeAll</el-button>
                  <el-button @click="elMessage({type:'success',duration:500})">duration:500</el-button>
                  <el-button @click="elMessage({type:'error',duration:1000})">duration:1000</el-button>
                  <el-button @click="elMessage({type:'info',center:true})">center</el-button>
                </dd>
              </dl>
            </dd>
        </dl>

        <hr>
        <br>
        <br>

        <dl>
            <dt>DEV</dt>
            <dd>
              <dl>
                <dt>base</dt>
                <dd>
                  <el-button @click="clMessage({message:'base'})">base</el-button>
                  <el-button @click="clMessage({message:'base',customClass:'customClass'})">customClass</el-button>
                  <el-button @click="clMessage({dangerouslyUseHTMLString:true, message: '<em>dangerouslyUseHTMLString</em>'})">dangerouslyUseHTMLString</el-button>
                  <el-button @click="clMessage({type:'info',center:true})">center</el-button>
                </dd>
              </dl>

              <dl>
                <dt>type</dt>
                <dd>
                  <el-button @click="clMessage({type:'success'})">success</el-button>
                  <el-button @click="clMessage({type:'error'})">error</el-button>
                </dd>
              </dl>

              <dl>
                <dt>showClose</dt>
                <dd>
                  <el-button @click="clMessage({showClose:true,message:'showClose'})">showClose</el-button>
                  <el-button @click="clMessage({showClose:true,type:'success'})">success</el-button>
                  <el-button @click="clMessage({showClose:true,type:'error'})">error</el-button>
                  <el-button @click="clCloseAll" type="warning">closeAll</el-button>
                </dd>
              </dl>

              <dl>
                <dt>duration</dt>
                <dd>
                  <el-button @click="clMessage({type:'success',duration:500,message:'duration:500'})">duration:500</el-button>
                  <el-button @click="clMessage({type:'error',duration:1000,message:'duration:1000'})">duration:1000</el-button>
                  <el-button @click="clMessage({type:'error',duration:5000,message:'duration:5000'})">duration:5000</el-button>
                </dd>
              </dl>

            </dd>
        </dl>

    </div>
</template>

<script>
const elMessageConf = {
  type: 'info',
  duration: 0
}

export default {
  name: 'Message' + 'Demo',
  data () {
    return {
      elMessages: [],
      clMessages: []
    }
  },
  methods: {
    elMessage (options) {
      options = Object.assign({}, elMessageConf, options)
      options.message = options.message || options.type
      if (options.showClose) {
        options.onClose = function () {
          console.log('close>args:', arguments)
        }
      }
      this.elMessages.push(this.$message(options))
    },
    elCloseAll () {
      this.elMessages.forEach(msg => { msg.close() })
      this.elMessages.length = 0
    },
    clMessage (options) {
      options = Object.assign({}, elMessageConf, options)
      options.message = 'Learn:::' + (options.message || options.type)
      if (options.showClose) {
        options.onClose = function () {
          console.log('close>args:', arguments)
        }
      }
      this.clMessages.push(this.$ClMessage(options))
    },
    clCloseAll () {
      this.clMessages.forEach(msg => { msg.close() })
      this.clMessages.length = 0
    }
  }
}
</script>
