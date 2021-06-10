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
            <router-link to="/missions" id="missionslist" style="width: 10%;" href="#">Voir les missions pour augmenter en XP</router-link>
          </div>
        </div>
      </div>
      <div id="skills" class="d-flex flex-column align-items-start ps-3">
        <div id="skillsrow1" class="d-flex flex-row align-items-center justify-content-between skillsrow">
          <img src="../assets/gem1.png" alt="">
          <div id="theTog" class="TogWrap">
            <a href="#" id="togTrigger">Créativité</a>
            <p class="togContent">
                
            </p>
        </div>
          <img src="../assets/gem2.png" alt="">
        </div>
        <div id="skillsrow2" class="d-flex flex-row align-items-center justify-content-between skillsrow">
          <img src="../assets/gem3.png" alt="">
          <img src="../assets/gem4.png" alt="">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Profile'
  }

  var oVTog = 
  {
      toggle: function (el) 
      {
          oVTog.container = el.parentNode;
          oVTog.para = oVTog.container.getElementsByTagName('p')[0];  
          oVTog.para.style.display = "none";

          el.onmouseover = function () 
          {
              oVTog.para.style.display = '';
              return false;
          };

          el.onmouseout = function () 
          {
              oVTog.para.style.display = 'none';
              return false;
          };

          el.onclick = function () 
          {
              oVTog.para.style.display = oVTog.para.style.display == 'none' ? '' : 'none';
              return false;
          };
      }
  };

window.onload = function () 
{
    var l = document.getElementById('togTrigger');
    oVTog.toggle(l);
    var l = document.getElementById('togTrigger2');
    oVTog.toggle(l);
};
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
  .skillsrow {
    width: 100%;
    height: 50%;
  }
  .skillsrow img {
    width: 80px;
    height: 80px;
    padding: 10px 10px;
    box-shadow: 0 3px 3px;
    border-radius: 50px;
    justify-content: space-between;
  }

  a 
  {
      text-decoration: none;
  outline: none;
  }

  div#page 
  {
      margin: 60px auto;
      border: 1px solid #dedede;
      width: 910px;
  }

  .TogWrap 
  {
      width: 400px;
      padding: 22px;
  }

  #togTrigger 
  {
      border: 1px solid #bebebe;
      padding: 7px 8px;
      background: #df7623;
      color: #fff;
  }

  .togContent  
  {
      margin-top: 9px;
      border: 1px solid #bebebe;
      padding: 16px 10px 10px 10px;
      background: #ededed;
  }
  
</style>
