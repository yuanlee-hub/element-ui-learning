<template>
    <div class="demo">
        <dl>
            <dt>Demo</dt>
            <dd>
                <el-breadcrumb>
                    <el-breadcrumb-item :to="{name:'Alert'}">To Alert</el-breadcrumb-item>
                </el-breadcrumb>
            </dd>
        </dl>

        <dl>
            <dt>DEV</dt>
            <dd>
                <dl>
                    <dt>Base</dt>
                    <dd>
                        <cl-crumb>
                            <cl-crumb-item>ClCrumbItem-1</cl-crumb-item>
                            <cl-crumb-item>ClCrumbItem-2</cl-crumb-item>
                            <cl-crumb-item>ClCrumbItem-3</cl-crumb-item>
                        </cl-crumb>
                    </dd>
                </dl>
                <dl>
                    <dt>To</dt>
                    <dd>
                        <cl-crumb>
                            <cl-crumb-item :to="{name:'Alert'}">To Alert</cl-crumb-item>
                            <cl-crumb-item :to="{name:'Alert'}" replace>replace Alert </cl-crumb-item>
                            <cl-crumb-item><a href="#/alert">href</a></cl-crumb-item>
                        </cl-crumb>
                    </dd>
                </dl>
                <dl>
                    <dt>separatorClass</dt>
                    <dd>
                        <cl-crumb separator-class="el-icon-arrow-right">
                            <cl-crumb-item :to="{name:'Alert'}">To Alert</cl-crumb-item>
                            <cl-crumb-item :to="{name:'Alert'}" replace>replace Alert </cl-crumb-item>
                            <cl-crumb-item><a href="#/alert">href</a></cl-crumb-item>
                        </cl-crumb>
                    </dd>
                    <dd>
                        <cl-crumb separator-class="el-icon-arrow-down">
                            <cl-crumb-item :to="{name:'Alert'}">To Alert</cl-crumb-item>
                            <cl-crumb-item :to="{name:'Alert'}" replace>replace Alert </cl-crumb-item>
                            <cl-crumb-item><a href="#/alert">href</a></cl-crumb-item>
                        </cl-crumb>
                    </dd>
                </dl>
            </dd>
        </dl>

    </div>
</template>

<script>
import ClCrumb from '@/components/Crumb'
import ClCrumbItem from '@/components/CrumbItem'

export default {
  components: { ClCrumb, ClCrumbItem }
}
</script>
