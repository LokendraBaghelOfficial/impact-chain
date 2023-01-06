<template>
  <div>
    <LearningResource :title="res.title" :discription="res.discription" :link="res.link" v-for="res in resource" :key="res.id"></LearningResource>    
  </div>
</template>

<script>
import LearningResource from '@/components/Learning-Resouce/LearningResource.vue'
export default {
    inject:['resource'],
    components:{
        LearningResource
    }
}
</script>

<style>

</style>