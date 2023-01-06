<template>
  <div>
    <TheHeader></TheHeader>
    <TheResource></TheResource>
  </div>
</template>

<script>
import StoredResource from '@/components/Learning-Resouce/StoredResource.vue'
import TheHeader from '@/components/Layout/TheHeader.vue'
import TheResource from '@/components/Learning-Resouce/TheResource.vue'
export default {
    name:'',
    components:{
        StoredResource,
        TheHeader,
        TheResource
    },    
    data(){
        return {            
            
        }
    },
    methods:{
        // storedSourceDelete(){
        //     storedSource.splice(index, 1)
        // }
    }
}
</script>

<style>

</style>