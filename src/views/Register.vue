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
          <form action="" @submit.prevent="registerForm">
            <div class="login-content-inner">
            <div class="content-login">
              <h5 class="mb-1">Register</h5>
                <p>Please create your account</p>
                <div class="error"></div>
                <div class="form-group">
                  <div class="relative login-field">
                    <input placeholder="First Name" autofocus="off" name="FirstName" id="FirstName" class="form-control"
                      type="text" v-model="firstName">
                    <label for="FirstName"><i class="zmdi zmdi-account-o login-icon"></i></label>
                    <div class="Inputeffects"></div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="relative login-field">
                    <input placeholder="Last Name" autofocus="off" name="LastName" id="FirstName" class="form-control"
                      type="text" v-model="lastName">
                    <label for="LastName"><i class="zmdi zmdi-account-o login-icon"></i></label>
                    <div class="Inputeffects"></div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="relative login-field">
                    <input placeholder="Phone" autofocus="off" name="phone" id="phone" class="form-control" type="number" v-model="phone">
                    <label for="phone"><i class="zmdi zmdi-phone login-icon"></i></label>
                    <div class="Inputeffects"></div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="relative login-field">
                    <input placeholder="Email" autofocus="off" name="username" id="txtUsername" class="form-control"
                      type="email" v-model="email">
                    <label for="txtUsername"><i class="zmdi zmdi-email login-icon"></i></label>
                    <div class="Inputeffects"></div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="relative login-field">
                    <input placeholder="Password" autofocus="off" name="password" id="txtPassword" class="form-control"
                      type="password" v-model="password">
                    <label for="txtPassword"><i class="zmdi zmdi-lock-open login-icon"></i></label>
                    <div class="Inputeffects"></div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="relative login-field">
                    <input placeholder="Confirm Password" autofocus="off" name="password" id="txtPassword"
                      class="form-control" type="password" v-model="confirmPassword">
                    <label for="txtPassword"><i class="zmdi zmdi-lock-open login-icon"></i></label>
                    <div class="Inputeffects"></div>
                  </div>
                </div>
                <div class="login-btn-group">
                  <router-link class="btn btn-primary w-100" :to="{path:'/'}">Create Account</router-link>                    
                </div>
                <div class="form-group form-check text-center forgot-link mt-4">
                  Already have an account? <router-link :to="{path:'/'}">Log in</router-link>
                </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name:"Register",
    data(){
      return {
        firstName:'',
        lastName:'',
        phone:'',
        email:'',
        password:'',
        confirmPassword:'',
        error:null,
        errorMsg:"",
      }
    },
    methods:{        
     
    }
}
</script>