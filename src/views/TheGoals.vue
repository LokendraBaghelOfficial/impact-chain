<template>
  <div class="page-content instant-width">
    <BaseCard class="p-3">
      <div class="row">
        <div class="col-auto">
          <div class="relative absolute-label">
            <select class="form-control" aria-label="Default select example">
              <option value="Facility">Topic</option>
              <option>Climate</option>
              <option>Water</option>
              <option>Single Use Plastic</option>
              <option>Energy</option>
              <option>Diversity &amp; Inclusion</option>
              <option>Pay Equality</option>
              <option>Involuntary Labor</option>
              <option>Employee Health and Safety</option>
              <option>Strategic Milestones</option>
              <option>Stakeholder Engagement</option>
              <option>Ethical Behavior</option>
              <option>Opportunity &amp; Risk Oversight</option>
            </select>
            <label for="" class="m-0 p-0"></label>
            <div class="Inputeffects"></div>
          </div>
        </div>
        <div class="col-auto pl-0">
          <div class="relative absolute-label">
            <select class="form-control" aria-label="Default select example">
              <option selected="">SDG Goal</option>
            </select>
            <label for="" class="m-0 p-0"></label>
            <div class="Inputeffects"></div>
          </div>
        </div>
        <div class="col-auto pl-0">
          <div class="relative absolute-label">
            <select class="form-control" aria-label="Default select example">
              <option selected="">Progress</option>
              <option>On-Track</option>
              <option>Behind (needs action)</option>
              <option>To Be Started</option>
            </select>
            <label for="" class="m-0 p-0"></label>
            <div class="Inputeffects"></div>
          </div>
        </div>
        <div class="col-auto pl-0">
          <div class="relative absolute-label">
            <select class="form-control" aria-label="Default select example">
              <option selected="">Status</option>
              <option>Ongoing</option>
              <option>Pending</option>
              <option>Complete</option>
              <option>Reject</option>
            </select>
            <label for="" class="m-0 p-0"></label>
            <div class="Inputeffects"></div>
          </div>
        </div>
        <div class="col-auto pl-0">
          <div class="relative absolute-label">
            <select class="form-control" aria-label="Default select example">
              <option value="2015">Period</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
            <label for="" class="m-0 p-0"></label>
            <div class="Inputeffects"></div>
          </div>
        </div>
        <div class="col text-end">
          <b-button variant="success" class="btn-primary" squared @click="$bvModal.show('addGoalCard-modal')">Add New Goal</b-button>
        </div>
      </div>
    </BaseCard>
    <BaseCard>
      <div class="row">
        <GoalCard @ViewCard="cardsView" @deleteCard="deleteItem(index)" cardWidth="col-md-4" :goals="goal" v-for="(goal, index) in goalList" :key="index"></GoalCard>
      </div>
    </BaseCard>

    <!--View modal start-->
    <b-modal id="view-modal" content-class="shadow" size="lg" centered ok-only>
      <template #modal-title>
        View Goal Detail
      </template>
      <div class="d-block">
        <form id="partnerslist02"> 
            <div class="row">
              <div class="col-md-12">
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-4 col-form-label">Name</label>
                  <div class="col-sm-8">
                    <div class="mt-1">Climate Change</div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-4 col-form-label">Description</label>
                  <div class="col-sm-8">
                    <div class="mt-1">Reduce GHG Emissions by 10 % over base year by 2025</div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-4 col-form-label">Goal Basis</label>
                  <div class="col-sm-8">
                    <div class="mt-1">Climate Action Resolution - 2022</div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-4 col-form-label">Topic</label>
                  <div class="col-sm-8">
                    <div class="mt-1">Climate</div> 
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-4 col-form-label">Priority</label>
                  <div class="col-sm-8">
                    <div class="mt-1">High</div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-4 col-form-label">Start Date</label>
                  <div class="col-sm-8">
                    <div class="mt-1">2017</div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-4 col-form-label">End Date</label>
                  <div class="col-sm-8">
                    -
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-4 col-form-label">Sponsor</label>
                  <div class="col-sm-8">
                    <div class="mt-1">Clive Owens</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <div class="proof-box">
                      <div class="module-img-box">
                        <i class="icon-x"></i>
                        <img src="images/placeholder-image-300x225.png" alt="">
                      </div>
                    </div>
                    <div class="proof-box">
                      <div class="module-img-box">
                        <i class="icon-x"></i>
                        <img src="images/placeholder-image-300x225.png" alt="">
                      </div>
                    </div>
                    <div class="proof-box">
                      <div class="module-img-box">
                        <i class="icon-x"></i>
                        <img src="images/placeholder-image-300x225.png" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
      </div>
    </b-modal>
    <!-- Vide modal end-->

     <!--add Goal Card modal start-->
     <b-modal id="addGoalCard-modal" hide-footer content-class="shadow" size="lg" centered ok-only>
      <template #modal-title>
        Select Data to be Added
      </template>
      <div class="d-block">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-4 col-form-label">Goal Name<span class="txt-red">*</span></label>
                  <div class="col-sm-8">
                    <div class="relative absolute-label">
                      <b-form-input id="title" v-model="GoalForm.title" type="text" required ></b-form-input>                      
                      <label for="title" class="m-0 p-0"></label>
                      <div class="Inputeffects"></div>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-4 col-form-label">Goal Description<span class="txt-red">*</span></label>
                  <div class="col-sm-8">
                    <div class="relative absolute-label">
                      <b-form-input id="description" v-model="GoalForm.description" type="text" required ></b-form-input>                      
                      <label for="description" class="m-0 p-0"></label>
                      <div class="Inputeffects"></div>
                    </div>
                  </div>
                </div>                
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-4 col-form-label">Priority<span class="txt-red">*</span></label>
                  <div class="col-sm-8">
                    <div class="relative absolute-label">
                      <select class="form-control" aria-label="Default select example" v-model="GoalForm.progress">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>                                              
                      </select>
                      <label for="" class="m-0 p-0"></label>
                      <div class="Inputeffects"></div>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-4 col-form-label">Priority<span class="txt-red">*</span></label>
                  <div class="col-sm-8">
                    <div class="relative absolute-label">
                      <select class="form-control" aria-label="Default select example" v-model="GoalForm.status">
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>                                                                    
                      </select>
                      <label for="" class="m-0 p-0"></label>
                      <div class="Inputeffects"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
      <template>
        <div class="row">
          <div class="modal-footer pb-0 pt-3">
            <b-button variant="outline-secondary" squared @click="$bvModal.hide('addGoalCard-modal')">Cancel</b-button>
            <b-button variant="success" class="btn-primary" @click="addGoalData" squared>Add Goal</b-button>
            <b-button variant="success" class="btn-primary" squared>Next</b-button>            
          </div>
        </div>
      </template>
    </b-modal>
     <!--add Goal Card modal end-->
  </div>
</template>

<script>
import TheHeader from "../components/Layout/TheHeader.vue";
import BaseCard from "../components/UI/BaseCard.vue";
import TheWelcome from "../components/dashboard/TheWelcome.vue";
import GoalCard from "../components/GoalCard.vue";
export default {
  name: "dashboard",
  components: {
    TheHeader,
    BaseCard,
    TheWelcome,
    GoalCard
  },
  data() {
    return {
      GoalForm:{              
        title:null,       
        description:null,
        progress:null,
        status:null,
      },
      
    };
  },
  provide() {
    return {
      newToggle2: this.navToggle1,
    };
  },
  methods: {
    cardsView(){
      this.$bvModal.show('view-modal')
    },    
    addGoalData(){
      if(this.GoalForm.title || this.GoalForm.description || this.GoalForm.progress || this.GoalForm.status) {
        this.goalList.push({
          title: this.GoalForm.title,
          description: this.GoalForm.description,
          progress: this.GoalForm.progress,
          status: this.GoalForm.status,
        });
        this.GoalForm.title = '';
        this.GoalForm.description = '';
        this.GoalForm.progress = '';
        this.GoalForm.status = '';     
      }
      this.$bvModal.hide('addGoalCard-modal')
    },
    navToggle1() {
      this.$emit("newToggle");
    },
    deleteItem(index){
      this.goalList.splice(index, 1)
    }
  },
  computed:{
    goalList(){
      return this.$store.state.CardList
    },
  }
};
</script>