<template>
  <section>
      <nav class="navbar navbar-expand-lg navbar-light" style="width: 100%;">
        <div class="container-fluid" style="display: flex; justify-content: center; width: 100%;">
          <a class="navbar-brand" href="#" style="display: flex; justify-content: center;">
            <img src="./assets/logo.png" alt="Logo Game'Her" style="width: 20%; height: auto;">
          </a>
        </div>
      </nav>
      <Profile/>
      <h2 class="mt-5 mb-5">------</h2>
      <AdminTicket/>
      <h2 class="mt-5 mb-5">------</h2>
    <PoleGestionTicket/>
    <h2 class="mt-5 mb-5">------</h2>
    
  </section>
</template>

<script>
import AdminTicket from './components/AdminTicket.vue'
import PoleGestionTicket from './components/PoleGestionTicket.vue'
import Profile from './components/Profile.vue'

export default {
  name: 'App',
  components: {
    PoleGestionTicket,
    AdminTicket,
    Profile
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  color: white;
  background-image: url("assets/background.jpg");
}
</style>
