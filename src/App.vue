<template>
  <section>
      <nav class="navbar navbar-expand-lg navbar-light mb-5" style="width: 100%;">
        <div class="container-fluid" style="display: flex; justify-content: center; width: 100%;">
          <router-link to="/" class="navbar-brand" href="#" style="display: flex; justify-content: center;">
            <img src="./assets/logo.png" alt="Logo Game'Her" style="width: 20%; height: auto;">
          </router-link>
        </div>
        <div>
          <router-link to="/missions">Profil</router-link>
        </div>
      </nav>
    <router-view/>
  </section>
</template>

<script>
/*import AdminTicket from './components/AdminTicket.vue'/
import PoleGestionTicket from './components/PoleGestionTicket.vue'
import Profile from './components/Profile.vue'*/

export default {
  data () {
    return {

    }
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
