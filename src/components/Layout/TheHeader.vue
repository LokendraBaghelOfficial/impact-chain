<template>
  <header class="top-header" id="myHeader">
        <div class="container instant-width">
          <div class="row">
            <div class="col">
              <div class="page-title-box d-flex py-4">          
                <a :class="propsActive" @click="navToggle" class="toggle-btn">
                  <span class="line"></span>
                  <span class="line"></span>
                  <span class="line"></span>
                </a> 
                <h2>{{ heading }}</h2>              
              </div>
            </div>
            <div class="col-auto py-3">
              <div class="profileBox">
                <div class="relative top-search">
                  <label for="txtUsername"><i class="fa fa-microphone"></i></label> 
                  <input placeholder="Search" autofocus="off" name="Search" id="Search" class="form-control" type="text">                                                
                  <label for="txtUsername"><i class="icon-search"></i></label>              
                  <div class="Inputeffects"></div>                     
                </div>
                <div class="top-iconBox">
                  <a href="#" id="color-theme"><i class="zmdi zmdi-sun" data-toggle="tooltip" title="Theme Mode"></i>  </a>            
                  <a id="notificationPopover" data-toggle="popover"><i class="icon-bell" title="Notifications"></i></a>                           
                </div>
                <div class="profile-item">
                  <!-- Default dropleft button -->
                  <div class="btn-group">
                    <button type="button" class="btn btn-primary btn-floating dropdown-toggle" data-toggle="dropdown"
                      aria-expanded="false">
                      <img src="images/21184444171634714556.jpg" alt="">
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <caption>
                        <div class="p-3 pb-0">
                          <h6>Welcome, Erika K</h6>
                        </div>
                        <div class="divider"></div>
                      </caption>
                      <li><a class="dropdown-item" href="#"><i class="fas fa-cog mr-3"></i> Settings</a></li>
                      <li><a class="dropdown-item" href="#"><i class="far fa-user mr-3"></i> Manage Account</a></li>
                      <li><a class="dropdown-item" href="#"><i class="far fa-flag mr-3"></i> App Tour</a></li>
                      <li><a class="dropdown-item" href="#"><i class="far fa-question-circle mr-3"></i> Support center</a>
                      </li>
                      <li><a class="dropdown-item" href="login.html"><i class="fas fa-power-off mr-3"></i> Sign Out</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>            
        </div>
      </header>
</template>

<script>
export default {
    name:'Header',
    props:['heading', 'propsActive'],
    components:{},
    data(){
        
    },
    methods:{
      navToggle(){
          this.$emit("headerToggle");
      },
    }
}
</script>