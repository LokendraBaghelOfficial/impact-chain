<template>
  <div :class="mode">
    <div class="profile-img">
        <img src="@/assets/images/21184444171634714556.jpg" alt="">
    </div>
    <div>
        <div class="profile-name w-100">Welcome back, Erika K.</div>
        <p>It's really nice to see you again</p>
    </div>
  </div>
</template>

<script>
export default {
    props:['mode']
}
</script>

<style>

</style>