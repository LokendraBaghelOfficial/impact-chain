<template>
  <section class="login-section">
        <div class="login-wrapper row m-0">
           <div class="col login-left-module">
            <img src="@/assets/images/station.svg" class="fluid-img" alt="">
           </div>
           <div class="col-4 login-right-module h-100">
            <div class="login-content col text-center">
              <div class="text-center my-5">
                <img src="@/assets/images/cu_logo.jpg" height="50" alt="Control Union">
              </div>
              <div class="login-content-inner">                  
                <div class="content-login">                  
                  <h5 class="mb-1">Forgot Password</h5>                    
                  <h6>Please forgot four password </h6>                  
                  <div class="form-group mt-5">                                              
                      <div class="relative login-field">
                        <input placeholder="Email the email" autofocus="off" name="username" id="txtUsername" class="form-control" type="email">                                                
                        <label for="txtUsername"><i class="zmdi zmdi-email login-icon"></i></label> 
                        <div class="Inputeffects"></div>                     
                      </div>
                  </div>                 
                  <div class="login-btn-group">
                    <button type="button" id="loginButton" class="btn btn-primary w-100">Send Reset Link</button>                      
                  </div>
                  <div class="form-group form-check text-center forgot-link mt-4">
                    <router-link :to="{path:'/'}">Back to Login</router-link>
                  </div>
              </div>
              </div>
          </div>
           </div>                      
        </div>
    </section>  
</template>

<script>
import Modal from '../components/Modal.vue'
import Loading from '../components/Loading.vue'
export default {
    name:'ForgotPassword',
    components:{
      Modal,
      Loading
    },
    data(){
      return {
        email:null,
        modalActive:false,
        modalMessage:"hello modal",
        loading:null
      }
    },
    methods:{
      closeModal(){
        this.modalActive = !this.modalActive;
        this.email = "";
      }
    }
}
</script>    