<template>
  <div class="blog-card">
    <div class="icons" v-if="editPost">
        <div class="icon"><i class="zmdi zmdi-edit"></i></div>
        <div class="icon"><i class="zmdi zmdi-delete"></i></div>
    </div>    
    <img :src="require(`../assets/blogCards/${post.blogCoverPhoto}.jpg`)" alt=""/>
    <div class="info">
        <h4>{{post.blogTitle}}</h4>
        <h6>Posted on: {{post.blogDate}}</h6>
        <router-link class="link" to="">View The Post <i class="zmdi zmdi-arrow-right"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {
    name:"BlogCard",
    props: ["post"],
    components:{},
    computed:{
        editPost(){
            return this.$store.state.editPost
        }
    }
}
</script>
<style lang="scss" scoped>
    .blog-card{
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        background-color: #ffffff;
        min-height:420px;
        transition: 0.5s ease all;
        &:hover{
            transform: rotateZ(-1deg) scale(1.01); 
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);       
        }

        .icons{
            display: flex;
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 99;
            .icon{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 35px;
                height: 35px;
                line-height:25px;
                border-radius: 50%;
                background-color: #fff;
                transition: 0.5s ease all;
                &:hover{
                    background-color: #303030;
                    .zmdi{
                        color:white;
                    }
                }
                &:nth-child(1){
                    margin-right: 8px;
                }
                .zmdi{
                    pointer-events: none;
                    font-size: 22px;                    
                }
            }
        }
        img{
            display: block;
            border-radius: 8px 8px 0 0;
            width: 100%;
            z-index: 1;
            min-height: 200px;
            object-fit: cover;
        }
        .info{
            display: flex;
            flex-direction: column;
            height: 100%;
            z-index: 3;
            padding: 32px 16px;
            color: #000;
            h4{
                padding-bottom: 8px;
                font-size: 20px;
                font-weight: 300;
            }
            h6{
                padding-bottom: 16px;
                font-size: 12px;
                font-weight: 400;
            }
            .link{
                display: inline-flex;
                align-items: center;
                margin-top: auto;
                font-weight: 500;
                padding-top: 20px;
                font-size: 12px;
                padding-bottom: 4px;
                transition: 0.5s ease all;
                &:hover{
                    color:rgba(48,48,48,0.8);
                }
            }
        }
    }
</style>