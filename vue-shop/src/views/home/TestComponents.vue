<template>
    <div>
        <div>
        <confirm :show="showConfirm" :content="content" @confirm="confirm" :showCancel="true" confirmText="知道了"></confirm>
        <button @click="showConfirm = true">show confirm</button>
    </div>
    </div>
</template>
<script>
import   confirm   from   '../../components/confirm.vue'
export default {
      name: "TestComponents",
      components:{
        confirm
      },
       data() {
            return {
                content: 'asdasdadad我哦我我我我哦我我我我我我我哦我哦我我我我我',
                showConfirm: true
            }
        },
        showConfirm(){

            this.$confirm('content','cancelText','confrimText',true, function(){}, function(){});
        }

}
</script>
<style scoped>

</style>