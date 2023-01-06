<template>
  <BaseCard>
    <form @submit.prevent="submitData">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" name="title" class="form-control" id="title" ref="inputTitle">       
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea row="3" name="discription" class="form-control" id="discription" ref="inputDes"></textarea>
      </div>
      <div class="form-group">
        <label for="link">Link</label>
        <input type="url" name="link" class="form-control" id="link" ref="inputLink">       
      </div>
      <BaseButton type="submit" class="btn btn-primary">Submit</BaseButton>
    </form>
  </BaseCard>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue'
import BaseCard from '@/components/UI/BaseCard.vue'
export default {
    name:'AddResource',
    inject:['resourceAdd'],
    components:{
      BaseCard,
      BaseButton
    },
    data(){
      return {
      }
    },
    methods:{
      submitData(){
        const enterTitle = this.$refs.inputTitle.value;
        const enterDescription = this.$refs.inputDes.value;
        const enterLink = this.$refs.inputLink.value;
        resourceAdd(enterTitle, enterDescription, enterLink);
      }
    }
}
</script>

<style>

</style>