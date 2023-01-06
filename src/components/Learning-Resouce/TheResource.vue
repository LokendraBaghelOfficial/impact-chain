<template>
  <div>
    <BaseCard>
      <BaseButton class="rounded-0 border-0 m-0" @clickEvent="setSelectedTab('stored-resource')" :class="btnstoredSesource">Stored Resource</BaseButton>
      <BaseButton class="rounded-0 border-0 m-0" @clickEvent="setSelectedTab('add-resource')"  :class="btnaddResource">Add Resource</BaseButton>
    </BaseCard>
    <keep-alive>
      <compoenet :is="selectedTab"></compoenet>
    </keep-alive>
  </div>
</template>

<script>
import BaseCard from '@/components/UI/BaseCard.vue'
import BaseButton from '@/components/UI/BaseButton.vue'
import StoredResource from '@/components/Learning-Resouce/StoredResource.vue'
import AddResource from '@/components/Learning-Resouce/AddResource.vue'
export default {
    name:'TheResource',
    components:{
      BaseCard,
      BaseButton,
      StoredResource,
      AddResource
    },
    data(){
      return {
        selectedTab:'stored-resource',
        storedResourceList:[
            {
                id:"Official Guid",
                title:'Official Guid',
                discription:'The Offical Vue Docutments' ,
                link:'https://vuejs.org/'
            },
            {
                id:"Google",
                title:'Google Guid',
                discription:'Learn to google' ,
                link:'https://google.com/'
            },
        ],

      }
    },
    provide(){
      return {
        resource: this.storedResourceList,
        resourceAdd: this.addResource,
        deteleResource : this.removeResource
      }
    },
    methods:{
      setSelectedTab(com){
        this.selectedTab = com
      },
      addResource(title, discription, link){
        const addNewResource = {
          id: new Date().toISOString(),
          title: title,
          discription: discription,
          link: link
        };
        this.storedResourceList.unshift(addNewResource);
        this.selectedTab = 'stored-resource'; 
        console.log('hello');
      },
      removeResource(resId){
        const resIndex = this.storedResourceList.findIndex(res => res.id === resId);
        this.storedResourceList.splice(resIndex, 1)
      }
    },
    computed:{      
      btnstoredSesource(){
        return this.selectedTab ==='stored-resource' ? null : 'flat'
      },
      btnaddResource(){
        return this.selectedTab ==='add-resource' ? null : 'flat'
      },
    },
}
</script>

<style>

</style>