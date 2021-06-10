<template>
  <section>
      <nav class="navbar navbar-expand-lg navbar-light mb-5" style="width: 100%;">
        <div class="container-fluid" style="display: flex; justify-content: center; width: 68%;">
          <div>
            <router-link to="/poles" class="link">Pôles</router-link>
          </div>
          <router-link to="/" class="navbar-brand" href="#" style="display: flex; justify-content: center;">
            <img src="./assets/logo.png" alt="Logo Game'Her" style="width: 23%; height: auto;">
          </router-link>
          <div>
            <router-link to="/missions" class="me-3 link">Missions</router-link>
          </div>
          <div>
            <router-link to="/membres" class="ms-3 link">Membres</router-link>
          </div>
        </div>
      </nav>
    <router-view name="profile" class="mb-5"/>
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
  background-attachment: scroll;
  background-size: cover;
}
.link {
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 14pt;
}
.navbar {
  background-color: #001724;
}
</style>
