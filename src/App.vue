<template>
    <div>
      <div class="main-content-wrapper" v-if="!sidebar">         
        <Sidebar :mode="toggleNew == false ? 'sm-sidebar' : null"/>
        <div class="_content-wrapper" :class="toggleNew == false ? '_content-wrapper-sm' : null">                  
          <TheHeader :propsActive="toggleNew == false ? 'active' : null" @headerToggle="toggleNew = !toggleNew" :heading="$route.meta.title"></TheHeader> 
          <div class="middle-content">                               
              <router-view />                                  
          </div>          
        </div>        
      </div> 
      <router-view v-if="sidebar" />   
    </div>
</template>

<script>
// import Navigation from './components/Layout/Navigation.vue'
import Footer from './components/Layout/Footer.vue'
import Sidebar from './components/Layout/Sidebar.vue'
import TheHeader from './components/Layout/TheHeader.vue'
export default {
  components: {
    Footer,
    Sidebar,
    TheHeader
  },
  data(){
    return {
      sidebar:null,
      toggleNew:true,
    }
  },
  created() {
    this.checkRoute();
  },
  methods: {
    checkRoute(){
      if(this.$route.name === 'Login' || this.$route.name === 'Register' || this.$route.name === 'ForgotPassword'){
        this.sidebar = true;
        return
      }
      this.sidebar = false;
    },

  },
  watch: {
    $route(){
      $this.checkRoute()
    }
  },
};
</script>

<style lang="scss">
@import url('@/assets/css/style.css');
@import url('@/assets/css/custom-icon.css');
@import url("https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css");
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
</style>
