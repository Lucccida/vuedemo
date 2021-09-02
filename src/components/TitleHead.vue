<template>
  <div class="title-head">
    <h3>{{title}}</h3>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      default: '内容标题'
    }
  },
  data () {
    return {
      name: 'text'
    }
  }
}
</script>
