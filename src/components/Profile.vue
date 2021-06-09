<template>
  <div class="Profile d-flex justify-content-center">
    <div id="profil" class="d-flex justify-content-center">
      <div id="infos" class="d-flex flex-column align-items-center">
        <img id="logo" class="" src="../assets/zinogra.png" alt="">
        <div class="d-flex flex-column">
          <h4 id="name" class="ps-3">ZINOGRA</h4>
          <h5 class="ps-3">Louis DI BATTISTA</h5>
        </div>
      </div>
      <div id="progress" class="d-flex flex-column align-items-center">
        <div id="pole" class="d-flex flex-row">
          <img id="graphismelogo" src="../assets/graphisme.png" alt="">
          <h2 class="ms-5" style="font-weight: 700;">Pôle Graphisme</h2>
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
      <div id="skills" class="d-flex flex-column align-items-center">
        <div id="skillsrow1" class="d-flex flex-row align-items-center justify-content-center skillsrow">
          <h5>test</h5>
        </div>
        <div id="skillsrow2" class="d-flex flex-row align-items-center justify-content-center skillsrow">
          <h5>test</h5>
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
    width: 20%;
  }
  #logo {
    width: 40%;
  }
  #profil {
    width: 95%;
  }
  #name {
    font-weight: 700;
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
    border-radius: 10px;
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
    width: 25%;
  }
  .skillsrow {
    width: 100%;
    height: 50%;
  }
  .skillsrow h5 {
    width: 20%;
    height: 60%;
    box-shadow: 0 3px 3px;
    border-radius: 50%;
  }
</style>
