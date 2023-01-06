<template>
  <button :type="type" :class="mode" @click="customClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
    name:'BaseButton',
    props:['type', 'mode'],    
    components:{},
    data(){
        return {

        }
    },
    methods:{
        customClick(){
            this.$emit('clickEvent')
        }
    }
}
</script>

<style lang="scss" scoped>
    button{
        font-family: inherit;
        padding: 0.75rem 1.5rem;
        background-color: #3a0061;
        border:1px solid #3a0061;
        color: #fff;
        cursor: pointer;
        &:hover, &:active{
            background-color: #270041;
            border:1px solid #270041;
        }        
    }
    .flat{
        background-color: transparent;
        border:none;
        color:#3a0061;
        &:hover, &:active{
            background-color: #edd2ff;
        }        
    }
</style>