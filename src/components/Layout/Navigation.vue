<template>
  <header>
    <nav class="container">
        <div class="branding">
            <router-link class="header" :to="{ name:'Home' }">FireBlogs</router-link>
            <div class="nav-links">
                <ul v-if="!mobile">
                    <router-link class="link" :to="{name:'Home'}">Home</router-link>
                    <router-link class="link" :to="{name:'Blogs'}">Blogs</router-link>
                    <router-link class="link" to="#">Create Post</router-link>
                    <router-link class="link" :to="{name:'Login'}">Login/Register</router-link>
                </ul>
            </div>
        </div>
    </nav>
    <div class="menu-icon" @click="toggleMobileNav" v-if="mobile">
        <i class="zmdi zmdi-menu"></i>
    </div>
    <div class="mobile-nav" v-if="mobileNav">        
        <ul>
            <router-link class="link" :to="{name:'Home'}">Home</router-link>
            <router-link class="link" :to="{name:'Blogs'}">Blogs</router-link>
            <router-link class="link" to="#">Create Post</router-link>
            <router-link class="link" :to="{name:'Login'}">Login/Register</router-link>
        </ul>
    </div>
  </header>
</template>

<script>

export default {
    name:'navigation',
    components:{
        
    },
    data(){
        return {
            mobile:null,
            mobileNav:null,
            windowWidth:null,
            user:null
        }
    },
    created(){
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    methods:{
        checkScreen(){
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 750){
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav
        }
    }
}
</script>

<style lang="scss" scoped>
header{
    background-color: #fff;
    padding:0 25px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    z-index:99;
    .link{
        font-weight: 500;
        padding: 0 8px;
        transition: .3s color ease;
        &:hover{
            color:#1eb8b8;
        }
    }
    nav{
        display: flex;
        padding: 25px 0;
        .branding{
            display: flex;
            align-items: center;
            width: 100%;
            .header{
                font-weight: 600;
                font-size: 24px;
                color: #000;
                text-decoration: none;
            }
        }
        .nav-links{
            position: relative;
            display: flex;
            flex: 1;
            align-items: center;
            justify-content:flex-end;
            ul{
                margin-right: 32px;
                .link{
                    margin-right: 32px;
                    &:last-child{
                        margin-right: 0;
                    }
                }
            }
        }
    }
    .menu-icon{
        cursor: pointer;
        position: absolute;
        top: 32px;
        right: 25px;
        height: 25px;
        width: auto;
        color: #000;
        padding: 3px;
        border-radius: 4px;
        line-height: 18px;
        font-size: 24px;
    }

    .mobile-nav{
        padding: 20px;
        width: 70%;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        position: fixed;
        height: 100%;
        background-color: #303030;
        top: 0;
        left: 0;
        bottom: 0;
        .link{
            padding: 15px 0;
            color: #fff;
            width: 100%;
            display:inline-block;
        }
    }
}
</style>