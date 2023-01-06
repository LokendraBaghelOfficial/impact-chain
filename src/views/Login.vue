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
                <form @submit.prevent="loginForm">
                  <div class="content-login">                  
                  <h5 class="mb-0">Welcome Back.</h5>                    
                  <h6>Please sign in to your account</h6>                  
                  <router-link class="register-link mb-5 d-block" :to="{path:'register'}">I do not have an account yet</router-link>
                  <div class="error"></div>
                  <div class="form-group">                                                
                      <div class="relative login-field">
                        <input placeholder="username" autofocus="off" name="username" id="username" class="form-control" type="text" v-model="username">                                                
                        <label for="txtUsername"><i class="zmdi zmdi-account-o login-icon"></i></label> 
                        <div class="Inputeffects"></div>                     
                      </div>
                  </div>
                  <div class="form-group">
                    <div class="relative login-field">
                      <input placeholder="Password" autofocus="off" name="password" id="txtPassword" class="form-control" type="password" v-model="password">                      
                      <label for="txtPassword"><i class="zmdi zmdi-lock-open login-icon"></i></label>  
                      <div class="Inputeffects"></div>                                         
                    </div>
                  </div>
                  <div class="form-group form-check keepme">                    
                    <label class="checkbox" for="keepme">
                      <input type="checkbox" class="form-check-input" id="keepme" v-model="keepmeLogged">
                      <span>Keep me logged in!</span>
                    </label>                    
                  </div>
                  
                  <div class="login-btn-group">
                    <button type="submit" @click="submitURL" id="loginButton" class="btn btn-primary w-100">Login</button>                      
                  </div>
                  <div class="form-group form-check text-center forgot-link mt-4">
                    <router-link :to="{path:'forgot-password'}">Forgot Password?</router-link>
                  </div>
              </div>
                </form>
              </div>
          </div>
           </div>                      
        </div>
    </section>
</template>

<script>
export default {
    name:'Login',    
    data(){
        return{
            username:null,
            password:null,
            keepmeLogged:null
        }
    },
    methods:{
      submitURL(){
        // this.$router.push({ path: '/dashboard' });
        this.$router
          .push({ path: '/dashboard' })
          .then(() => { this.$router.go() })
      }
    }
}
</script>