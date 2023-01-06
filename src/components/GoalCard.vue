<template>
  <div :class="cardWidth">
    <div class="todoBox">
      <header>
        <div class="title"> <b-link :href="goals.pageLink">{{ goals.title }}</b-link></div>
        <div class="d-flex">
          <div class="dropdown-floating float-right">
              <b-dropdown size="md" right toggle-class="text-decoration-none" no-caret>
                <template #button-content>
                  <i class="fa fa-ellipsis-v"></i>
                </template>
                <b-dropdown-item href="#">Edit</b-dropdown-item>
                <b-dropdown-item @click="ViewGoalCard">View</b-dropdown-item>
                <b-dropdown-item @click="DeleteGoalCard">Delete</b-dropdown-item>
              </b-dropdown>      
          </div>
          <div class="img-box float-right me-4">
            <img :src="goals.img" alt="" />
          </div>
        </div>
      </header>
      <section>
        <p><strong>Description:</strong> {{ goals.description }}</p>
        <div class="progressbar">
          <span class="progressValue" :style="`width:${goals.value}`" :class="goals.mode"></span>
        </div>
      </section>
      <footer>
        <div class="progress-new1" :class="goals.colors">
          Progress: <span class="value">{{ goals.progress }}</span>
        </div>
        <div class="status">Status: <span class="value">{{ goals.status }}</span></div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
    props:['goals', 'cardWidth'],
    methods:{
      ViewGoalCard(){
        this.$emit("ViewCard");
      },

      DeleteGoalCard(){
          this.$emit("deleteCard");
      },
    },
};
</script>

<style>
</style>