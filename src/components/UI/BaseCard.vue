<template>
  <div class="CaseCard" :class="modifierStyle">
    <slot name="header"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:['modifierStyle']
}
</script>

<style scoped>
.CaseCard{
    background:white;
    padding:20px;
    border-radius: 6px;
    transition: all .3s;
    margin-bottom: 30px;
    border: rgba(0,0,0, 0.1) solid 1px;
    float: left;
    width: 100%;
}
</style>