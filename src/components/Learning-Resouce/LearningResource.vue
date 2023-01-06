<template>    
    <BaseCard>
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-text">{{ discription }}</p>
        <nav><a class="btn btn-primary" target="_blank" :href="link" >View Resource</a></nav>
        <BaseButton @clickEvent="deteleResource(id)"  :mode="btnColor" style="position:absolute; top:0; right:20px">Delete</BaseButton>
    </BaseCard>            
</template>

<script>
import BaseCard from '@/components/UI/BaseCard.vue'
import BaseButton from '@/components/UI/BaseButton.vue'
export default {
    name:'LearningResource',
    props:['id','title', 'discription','link'],
    inject:['deteleResource'],
    components:{
        BaseCard,
        BaseButton
    },
    data(){
        return {
            btnColor:'rounded-0'
        }
    },
    methods:{
        
    }
}
</script>

<style>

</style>