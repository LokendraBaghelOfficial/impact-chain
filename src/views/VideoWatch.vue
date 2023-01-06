<template>
  <div class="col-12">
    <div class="row">
      <div class="col-md-4">
        <img :src="video.thumbnail" class="img-fluid" alt=""/>
      </div>
      <div class="col text-left">      
        <h3>{{video.name}}</h3>
        <p v-html="video.description"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  comments:{    
  },
  computed: {    
    video(){
      return this.$store.state.videos.find(vid => vid.id == this.$route.params.id)
    },
    
  }
}
</script>