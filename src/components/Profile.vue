<template>
  <div class="Profile d-flex justify-content-center">
    <div id="profil" class="d-flex justify-content-center">
      <div id="infos" class="d-flex flex-column align-items-start">
        <img id="logo" class="me-4" src="../assets/zinogra.png" alt="">
        <div class="d-flex flex-column">
          <h4 id="nickname" class="">ZINOGRA</h4>
          <h5 id="fullname" class="">Louis DI BATTISTA</h5>
        </div>
      </div>
      <div id="progress" class="d-flex flex-column align-items-center">
        <div id="pole" class="d-flex flex-row">
          <img id="graphismelogo" src="../assets/graphisme.png" alt="">
          <h2 class="ms-3" style="font-weight: 700;">Pôle Graphisme</h2>
        </div>
        <div id="progressbar" class="d-flex flex-column justify-content-end align-items-center">
          <div class="progress bg-light">
            <div class="progress-bar" role="progressbar" style="width: 32%" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div id="xpcount" class="d-flex flex-row justify-content-end mt-1">
            <p>80 XP / 250 XP</p>
          </div>
          <div id="missionsxp" class="">
            <a id="missionslist" style="width: 10%;" href="#">Voir les missions pour augmenter en XP</a>
          </div>
        </div>
      </div>
      <div id="skills" class="d-flex flex-column align-items-start">
        <div id="skillsrow1" class="d-flex flex-row align-items-center justify-content-between skillsrow">
          <img src="../assets/gem3.png" alt="">
          <img src="../assets/gem3.png" alt="">
        </div>
        <div id="skillsrow2" class="d-flex flex-row align-items-center justify-content-start skillsrow">
          <img src="../assets/gem3.png" alt="">
          <img src="../assets/gem3.png" alt="">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  #infos {
    width: 14%;
  }
  #logo {
    width: 60%;
  }
  #profil {
    width: 81%;
    height: 20vh;
  }
  #nickname {
    font-weight: 700;
  }
  #fullname {
    color: #bcbcbc;
  }
  #graphismelogo {
    width: 40px;
    height: 40px;
  }
  #progress {
    width: 55%;
  }
  #pole {
    width: 80%;
  }
  #progressbar {
    height: 100%;
    width: 100%;
  }
  .progress {
    height: 26px;
    width: 80%;
    border-radius: 15px;
    border: 3px solid #3FDF3F;
  }
  .progress-bar {
    background-color: #3FDF3F;
  }
  #xpcount {
    width: 80%;
  }
  #xpcount p {
    font-weight: 700;
  }
  #missionsxp {
    width: 80%;
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
    transition: 0.3s;
  }
  #missionslist:hover {
    background-color: #ef900d;
    color: white;
    transition: 0.3s;
  }
  #skills {
    width: 14%;
  }
  .skillsrow {
    width: 100%;
    height: 50%;
    background-color: red;
  }
  .skillsrow img {
    width: 80px;
    height: 80px;
    padding: 10px 10px;
    box-shadow: 0 3px 3px;
    border-radius: 50px;
    justify-content: space-between;
  }
  
</style>
