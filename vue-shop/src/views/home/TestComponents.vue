<template>
  <div>
    <div>
      <button @click="showConfirm = true">show confirm</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "TestComponents",
  components: {
    confirm,
  },
  data() {
    return {};
  },
  showConfirm() {
    // this.$confirm('content','cancelText','confrimText',true, function(){}, function(){});debugger

  },
};
</script>
<style scoped>
</style>