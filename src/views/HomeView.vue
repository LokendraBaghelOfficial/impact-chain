<template>
  <div class="home">
    <h1 class="mb-4">Video</h1>
    <div class="video-container container">
      <div class="card mb-3" v-for="video in videos" :key="video.name">
        <div class="row g-0 align-items-center">
          
            <div class="col-md-2">
            <img :src="video.thumbnail" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-10">
            <div class="card-body text-left">
              <h3 class="card-title"><router-link :to="{name:'video-watch', params: { id : video.id}}">{{video.name}}</router-link></h3>
              <p class="card-text pb-0 mb-0" v-html="video.description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeView',
  components: {},
  data(){
    return{
      videos:this.$store.state.videos
    }
  }
}
</script>
