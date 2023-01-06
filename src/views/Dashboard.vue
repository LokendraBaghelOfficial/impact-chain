<template>
  <div class="page-content instant-width">
    <BaseCard>
      <TheWelcome mode="welcome-box"></TheWelcome>            
    </BaseCard>

    <div class="row">
      <div class="col-md-4">
        <BaseCard class="boxOne">
          <template #header>
            <h6>Change in emissions this year</h6>
          </template>
          <template>
            <div class="row">
            <div class="col">
              <h4>+11% </h4>
              <div class="digit">13% <i class="fa fa-arrow-up"></i><span>than last year</span></div>
            </div>
            <div class="col text-right d-flex align-items-end justify-content-end">
              <img class="img-fluid" src="@/assets/images/Chart-red.jpg" alt="">
            </div>
          </div>
          </template>
        </BaseCard>            
      </div>
      <div class="col-md-4">
        <BaseCard class="boxOne">
          <template #header>
            <h6># Of Compliance alerts this month</h6>
          </template>
          <template>
            <div class="row">
            <div class="col">
              <h4>18</h4>
              <div class="digit">20%<i class="fa fa-arrow-up"></i><span>than last month</span></div>
            </div>
            <div class="col text-right d-flex align-items-end justify-content-end">
              <img class="img-fluid" src="@/assets/images/Chart-yellow.jpg" alt="">
            </div>
          </div>
          </template>
        </BaseCard>
      </div>
      <div class="col-md-4">
        <BaseCard class="boxOne">
          <template #header>
            <h6>Change in energy usage this month</h6>
          </template>
          <template>
            <div class="row">
            <div class="col">
              <h4>-9%</h4>
              <div class="digit green-txt">2.3% <i class="fa fa-arrow-down"></i><span>than last year</span></div>
            </div>
            <div class="col text-right d-flex align-items-end justify-content-end">
              <img class="img-fluid" src="@/assets/images/Chart-blue.jpg" alt="">
            </div>
          </div>
          </template>
        </BaseCard>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <BaseCard class="boxOne">
          <template #header>
            <h6>Notifications</h6>
          </template>
          <template>
            <ul class="notification-list">
                  <li v-for="(note, index) in notification" :key="index">
                    <a class="">
                      <div class="imgBox">
                        <img :src="note.img" alt="">
                      </div>
                      <h4>{{ note.title }}</h4>
                      <small> {{note.time}} </small>
                    </a>
                  </li>                        
                </ul>
          </template>
        </BaseCard>
      </div>
      <div class="col-md-4">
        <div class="boxOne p-20">
          <div class="row">
            <div class="col">
              <div class="">
                <h3 class="mb-4">To do List</h3>
                <button class="btn btn-light col-12">+</button>
                <div class="todo-list">
                  <div class="todo-item">
                    <p>Complete Application for Climate 2021</p>
                    <div class="row">
                      <div class="col pr-0">
                        <span class="badge badge-primary">Jacob hanson</span>
                        <img src="@/assets/images/abc.jpeg" class="img-circle" alt="">
                      </div>
                      <div class="col-auto text-right mt-1">
                        <span class="date mr-10"><i class="fa fa-calendar"></i> 01 Aug</span>
                        <span class="date"><i class="fa fa-comments"></i> 03</span>
                      </div>
                    </div>
                  </div>
                  <div class="todo-item">
                    <p>Review submitted registries</p>
                    <div class="row">
                      <div class="col">
                        <span class="badge badge-primary">Laura</span>
                        <img src="@/assets/images/21184444171634714556.jpg" class="img-circle" alt="">
                      </div>
                      <div class="col-auto text-right mt-1">
                        <span class="date mr-10"><i class="fa fa-calendar"></i> 01 Aug</span>
                        <span class="date"><i class="fa fa-comments"></i> 03</span>
                      </div>
                    </div>
                  </div>
                  <div class="todo-item">
                    <p>Onboard new partners</p>
                    <div class="row">
                      <div class="col">
                        <span class="badge badge-primary">Jacob hanson</span>
                        <img src="@/assets/images/abc.jpeg" class="img-circle" alt="">
                      </div>
                      <div class="col-auto text-right mt-1">
                        <span class="date mr-10"><i class="fa fa-calendar"></i> 01 Aug</span>
                        <span class="date"><i class="fa fa-comments"></i> 03</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <BaseCard class="boxOne esg-news-box">
          <template #header>
            <h6>ESG News</h6>
          </template>
          <template>
            <div class="news-list" v-for="(news, index) in newsList" :key="index">
              <div class="news-item" :class="news.active == true ? 'active' : null">
                <div class="date">
                  <div class="day">{{ news.day }}</div>
                  <div class="number">{{ news.date }}</div>
                </div>
                <div class="img">
                  <img :src="news.img" alt="">
                </div>
                <div class="content-box">
                  <div class="hours">{{ news.time }}</div>
                  <div class="title">{{ news.discription }}</div>
                  <div class="person">by <span>{{ news.postBy }}</span></div>
                </div>
              </div>                        
            </div>
          </template>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script>
// import TheHeader from '../components/Layout/TheHeader.vue'
import BaseCard from '../components/UI/BaseCard.vue'
import TheWelcome from '../components/dashboard/TheWelcome.vue'
export default {
    name:'dashboard',
    components:{
      // TheHeader,
      BaseCard,
      TheWelcome,
    },
    data(){
        return {
          newToggle:true,
          notification:[
            {
              img:'images/21184444171634714556.jpg',
              title:'Tara S. Requested a review on Climate - Scope 1',
              time:'47 mins ago'
            },
            {
              img:'images/spearker_8-300x300.jpg',
              title:'Sunil Approved application GRI Climate',
              time:'1h ago'
            },
            {
              img:'images/abc.jpeg',
              title:'Jason has added data in Climate 2022 Scope 3 Partner',
              time:'2h ago'
            },
            {
              img:'images/woman-3633737__480.jpg',
              title:'Jamie added a note on Application AU-46734',
              time:'3h ago'
            },
            {
              img:'images/21184444171634714556.jpg',
              title:'Chen has Approved Cerficate CU-9476',
              time:'5h ago'
            },
          ],
          newsList:[
            {
              img:'images/Apple-supplier-clean-energy-solar-panels_big.jpg.large.jpg',
              day:'Mon',
              date:'20',
              time:'10 MINS AGO',
              discription:'Apple Announces New Energy Investments',
              postBy:'Steve Neal',
              active:false,
            },
            {
              img:'images/blackrock-2-300x300.jpeg',
              day:'Mon',
              date:'20',
              time:'10 MINS AGO',
              discription:'BlackRock Raises $4.5 Billion for Climate-Focused Infrastructure Fund',
              postBy:'Steve Neal',
              active:true,
            },
            {
              img:'images/Mondelez-300x300.jpeg',
              day:'Mon',
              date:'20',
              time:'10 MINS AGO',
              discription:'Cadbury-Maker Mondelez to Invest $600 Million on Sustainable Cocoa Sourcing',
              postBy:'Steve Neal',
              active:false,
            },
          ],
        }
    },
    methods:{
      navToggle1(){
          this.$emit("newToggle");
      },
    }
}
</script>