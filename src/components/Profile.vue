<template>
  <section>
    <div class="Profile d-flex justify-content-center mb-5 pb-5">
      <div id="profil" class="d-flex justify-content-center">
        <div id="infos" class="d-flex flex-column align-items-start">
          <img id="logo" class="me-4" src="../assets/zinogra.png" alt="">
          <div class="d-flex flex-column">
            <h4 id="nickname" class="">ZINOGRA</h4>
            <h5 id="fullname" class="">Louis DI BATTISTA</h5>
          </div>
        </div>
        <div id="progress" class="d-flex flex-column align-items-center">
          <div id="pole" class="d-flex flex-row justify-content-between">
            <div class="d-flex flew-row">
              <img id="graphismelogo" src="../assets/graphisme.png" alt="">
              <h2 class="ms-2" style="font-weight: 700;">Pôle Graphisme</h2>
            </div>
          </div>
          <div id="progressbar" class="d-flex flex-column align-items-center mt-1">
            <div class="progress bg-light">
              <div class="progress-bar" role="progressbar" style="width: 32%" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div id="xpcount" class="d-flex flex-row justify-content-end">
              <p>80 XP / 250 XP</p>
            </div>
            <div id="gems" class="d-flex flew-row justify-content-start">
              <div id="skillsrow1" class="d-flex flex-row justify-content-start skillsrow">
                <img class="me-2" src="../assets/gem1.png" alt="">
                <img class="ms-2 me-2" src="../assets/gem2.png" alt="">
                <img class="ms-2 me-2" src="../assets/gem3.png" alt="">
                <img class="ms-2 me-2" src="../assets/gem4.png" alt="">
              </div>
            </div>
            <div id="missionsxp">
              <router-link to="/missions" id="missionslist" style="width: 10%;" href="#">Voir les missions pour augmenter en XP</router-link>
            </div>
          </div>
        </div>
        <div id="skills" class="d-flex flex-column align-items-start ps-3">
          <div class="">
              <img id="badge" src="../assets/diamant.png" alt="">
            </div>
        </div>
      </div>
    </div>
    <Mission/>
  </section>
</template>

<script>
import Mission from './Mission.vue'

  export default {
    name: 'Profile',
    components: {
      Mission
    }
  }

  
</script>

<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  #infos {
    width: 14%;
  }
  #logo {
    width: 70%;
  }
  #profil {
    width: 81%;
    height: 25vh;
  }
  #nickname {
    font-weight: 700;
  }
  #fullname {
    color: #bcbcbc;
  }
  #graphismelogo {
    width: 45px;
    height: 45px;
  }
  #progress {
    width: 55%;
  }
  #pole {
    width: 85%;
  }
  #badge {
    width: 230px;
  }
  #progressbar {
    height: 100%;
    width: 100%;
  }
  .progress {
    height: 28px;
    width: 85%;
    border-radius: 15px;
    border: 3px solid #3FDF3F;
  }
  .progress-bar {
    background-color: #3FDF3F;
  }
  #xpcount {
    width: 85%;
    height: 14%;
  }
  #xpcount p {
    font-weight: 700;
  }
  #missionsxp {
    width: 85%;
    margin-top: 3vh;
  }
  #missionslist {
    width: 10%;
    padding: 7px 10px;
    font-size: 10pt;
    font-weight: 700;
    border: none;
    color: white;
    border: 3px solid #ef900d;
    border-radius: 50px;
    text-decoration: none;
    transition: 0.2s;
  }
  #missionslist:hover {
    background-color: #ef900d;
    color: white;
    transition: 0.2s;
  }
  #skills {
    width: 14%;
  }
  #gems {
    width: 85%;
  }
  .skillsrow {
    width: 100%;
    height: 50%;
  }
  .skillsrow img {
    width: 75px;
    height: 75px;
    padding: 10px 10px;
    box-shadow: 0 3px 3px;
    border-radius: 50px;
  }
  
</style>
