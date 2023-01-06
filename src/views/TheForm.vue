<template>
  <BaseCard class="col-12">
    <form @submit.prevent="submitFrom">
      <div class="form-group">
        <label for="yname"><strong>Your Name</strong></label>
        <input
          type="text"
          class="form-control"
          id="userName"
          v-model="userName"
        />
      </div>
      <div class="form-group">
        <label for="yname"><strong>Your Age</strong></label>
        <input
          type="number"
          class="form-control"
          id="userAge"
          ref="userAge"
          v-model="userAge"
        />
      </div>
      <div class="form-group">
        <label for="yname"><strong>How did you hear about us?</strong></label>
        <select class="form-control" name="aboutus" id="aboutus" v-modal="aboutus">
          <option value="Google">Google</option>
          <option value="Friends">Friends</option>
          <option value="NewsPaper">NewsPaper</option>
        </select>
      </div>
      <div class="form-group">
        <label for="yname"><strong>What are you intrested in?</strong></label>
        <div class="form-group form-check mb-0">
          <input type="checkbox" class="form-check-input" name="intrested" id="intrested-news" value="news" v-model="intrested" />
          <label class="form-check-label" for="intrested-news">News</label>
        </div>
        <div class="form-group form-check mb-0">
          <input type="checkbox" class="form-check-input" name="intrested" id="intrested-tutorials" value="tutorials" v-model="intrested" />
          <label class="form-check-label" for="intrested-tutorials">Tutorials</label>
        </div>
        <div class="form-group form-check mb-0">
          <input type="checkbox" class="form-check-input" name="intrested" id="intrested-nothing" value="nothing" v-model="intrested" />
          <label class="form-check-label" for="intrested-nothing">Nothing</label>
        </div>
      </div>
      <!-- {{ intrested }} -->
      <div class="form-group">
        <label for="yname"><strong>How do you learn?</strong></label>
        <div class="form-group form-check mb-0">
          <input type="radio" name="how" class="form-check-input" id="VideoCourse" value="video" v-model="how"/>
          <label class="form-check-label" for="VideoCourse">Video Course</label>
        </div>
        <div class="form-group form-check mb-0">
          <input type="radio" name="how" class="form-check-input" id="Blogs" value="Blogs" v-model="how" />
          <label class="form-check-label" for="Blogs">Blogs</label>
        </div>
        <div class="form-group form-check mb-0">
          <input type="radio" name="how" class="form-check-input" id="Other" value="Other" v-model="how" />
          <label class="form-check-label" for="Other">Other</label>
        </div>
      </div>
      <div class="form-group form-check mb-0">
        <input type="checkbox" class="form-check-input" name="confirm" id="confirm" value="confirm" v-model="confirm" />
        <label class="form-check-label" for="confirm">Agree to terms of use?</label>
      </div>
      <!-- {{ how }} -->
      <BaseButton :mode="btnColor" type="submit">Submit</BaseButton>
    </form>
  </BaseCard>
</template>

<script>
import BaseCard from '@/components/UI/BaseCard.vue'
import BaseButton from '@/components/UI/BaseButton.vue'
export default {
  name: "theform",
  components: {
    BaseCard,
    BaseButton
  },
  data() {
    return {
      btnColor:'rounded-0',
      userName:'',
      userAge:null,
      aboutus:'Google',
      intrested:[],
      how:null,
      confirm:null
    };
  },
  methods: {
    submitFrom(){
      console.log('UserName:' + this.userName);
      console.log('UserAge:' + this.userAge);
      console.log('UserAge:' + this.$refs.userAge.value);
      console.log('intrested' + this.intrested);
      console.log('How:' + this.how);
      console.log('confirm:' + this.confirm);
      this.userName = '';
      this.userAge = '';
      this.aboutus = 'Friends';
      this.intrested = [];
      this.how = null;
      this.confirm = false

    }
  },
};
</script>

<style>
</style>