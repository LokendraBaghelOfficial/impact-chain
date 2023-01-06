<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
    <div class="blog-card-wrap">
        <div class="container">
            <h3>View More Recenet Blog</h3>
            <div class="blog-cards">
                <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
            </div>
        </div>
    </div>
    <div class="updates">
        <div class="container">
            <h2>Never misss a post. Regular for your free acount today</h2>
            <router-link to="" class="router-button">Register for FireBlogs <i class="zmdi zmdi-arrow-right"></i></router-link>
        </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue'
import BlogCard from '../components/BlogCard.vue'
export default{
    name:"Home",
    components:{BlogPost, BlogCard},
    data(){
        return {
            welcomeScreen:{
                title:"Welcome",
                blogPost:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                welcomeScreen:true,
                photo:"coding"
            },
            sampleBlogPost:[
                {
                    title:'this is a Filler title !',
                    blogHTML:'this is a filler blog post title',
                    blogCoverPhoto:'beautiful-stories'
                },
                {
                    title:'this is a Filler title ! new',
                    blogHTML:'this is a filler blog post title',
                    blogCoverPhoto:'designed-for-everyone'
                }
            ],           
        }
    },
    computed:{
        sampleBlogCards(){
            return this.$store.state.sampleBlogCards
        }
    }
}
</script>

<style lang="scss" scoped>
    .blog-card-wrap{
        h3{
            font-weight: 300;
            font-size: 28px;
            margin-bottom: 32px;            
        }
    }
  .updates{
    .container{
        padding: 100px 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media(min-width:800px){
            padding: 125px 25px;
            flex-direction: row;
        }

        .router-button{
            display: flex;
            font-size: 14px;
            text-decoration: none;
            @media(min-width:800px){
                margin-left: auto;
            }
        }
        h2{
            font-weight: 300;
            font-style: 32px;
            max-width:425px;
            width: 100%;
            text-align: center;
            text-transform: uppercase;
            @media(min-width:800px){
                text-align: initial;
                font-style: 40px;
            }
        }
    }
  }
</style>