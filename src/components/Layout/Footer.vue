<template>
  <footer>
    <div class="container">
        <div class="left">
            <div class="col-1">
                <router-link class="header" :to="{name:'Home'}">FireBlogs</router-link>
                <ul>
                    <li><a href="#"><i class="zmdi zmdi-youtube"></i></a></li>                    
                    <li><a href="#"><i class="zmdi zmdi-twitter"></i></a></li>                    
                    <li><a href="#"><i class="zmdi zmdi-instagram"></i></a></li>                    
                    <li><a href="#"><i class="zmdi zmdi-linkedin"></i></a></li>                    
                </ul>
            </div>
            <div class="col-2">
                <ul>
                    <router-link class="link" :to="{name:'Home'}">Home</router-link>
                    <router-link class="link" :to="{name:'Blogs'}">Blogs</router-link>
                    <router-link class="link" to="#">Create Post</router-link>
                    <router-link class="link" :to="{name:'Login'}">Login/Register</router-link>
                </ul>
            </div>
        </div>
        <div class="right">
            <p>@copyright 2022 all right Reserved</p>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: "footer-vue",
    components:{

    }
}
</script>

<style lang="scss" scoped>
    footer{
        margin-top: auto;
        padding: 100px 25px;
        background-color: rgb(47, 47, 47);
        .container{
            display: flex;
            flex-direction: column;
            gap:32px;
            @media(min-width:800px){
                flex-direction: row;
                gap:0;
            }
            > div{
                display: flex;
                flex: 1;
            }
            .left{
                gap:32px;
                color: #fff; 
                display: flex;
                flex-direction: column;
                align-items: center;
                @media(min-width:800px){
                    flex-direction: row;
                    align-items: initial;
                    gap:0;
                }
                .header{
                    text-align: center;
                    font-size: 24px;
                    color: #fff;
                    text-decoration: none;
                    font-weight: 600;
                }
                ul{
                    // gap:16px;
                    list-style: none;
                    display: flex;
                    text-transform: uppercase;
                }
                .col-1,
                .col-2{
                    gap:32px;
                    display: flex;
                    flex: 1;
                    @media(min-width:800px){
                        gap:0;
                    }
                }
                .col-1{
                    min-width: 150px;
                    flex-direction: column;
                    h2{
                        text-align: center;
                        @media(min-width:800px){
                            text-align: initial;
                        }
                    }
                    ul{
                        margin-top: auto;
                        text-transform: uppercase;
                        li{
                            display: flex;
                            align-items: center;
                            .zmdi{
                                width: 24px;
                                height: auto;
                                color: #fff;
                            }
                        }
                    }
                }
                .col-2{
                    ul{
                        height: 100%;
                        justify-content: center;
                        flex-direction: row;
                        flex-wrap: wrap;
                        @media(min-width:800px){
                            flex-direction: column;
                        }
                        .link{
                            font-size: 16px;
                            font-weight: 600;
                            color: #fff;
                            text-decoration: none;
                            white-space: nowrap;
                        }
                    }
                }
            }
            .right{
                gap:32;
                color: #fff;
                align-items:center;
                flex-direction: column;
                @media(min-width:800px){
                    align-items:flex-end;
                    gap:0;
                }
            }
            p{
                margin-top: auto;
            }
        }
    }
</style>