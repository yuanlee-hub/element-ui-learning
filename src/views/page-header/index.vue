<template>
    <div class="demo">
        <dl>
            <dt>DEV</dt>
            <dd>
                <dl>
                    <dt>title</dt>
                    <dd>
                        <cl-Page-header title="title prop"></cl-Page-header>
                    </dd>
                </dl>

                <dl>
                    <dt>content</dt>
                    <dd>
                        <cl-Page-header title="title prop" content="content"></cl-Page-header>
                        <cl-Page-header title="no content"></cl-Page-header>
                    </dd>
                </dl>

                <dl>
                    <dt>goBack</dt>
                    <dd>
                        <cl-Page-header title="title goBack" content="content goBack" @goBack="handleGoBack"></cl-Page-header>
                    </dd>
                </dl>
            </dd>
        </dl>
    </div>
</template>

<script>
import ClPageHeader from '@/components/PageHeader'

export default {
  name: 'AlertDemo',
  components: { ClPageHeader },
  methods: {
    handleGoBack () {
      console.log('handleGoBack')
    }
  }
}
</script>
