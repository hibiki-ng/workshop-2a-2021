<template>
  <div class="UserTicket">
    <div id="mission-search">
      <input type="search" placeholder="Rechercher une mission par mot clé">
      <input type="submit" value="Rechercher">
    </div>
    <h2>Mes tâches en cours</h2>
    <div id="task-list">
      <div class="task-box">
        <div class="task-detail">
          <div class="block-left">
            <div class="block-1-left">
              <div class="current-mission">
                Mission à faire
              </div>
            </div>
            <div class="block-2-left">
              <div class="task-title">
                <h3>Création d'un kakémono</h3>
              </div>
              <div class="task-date">
                00/00/2021 au 00/00/2021
              </div>
            </div>
            <div class="block-3-left">
              <div class="task-image">
                <img src="https://i.pravatar.cc/300?img=1">
                <img src="https://i.pravatar.cc/300?img=3">
              </div>
              <div class="task-member">
                Florine Dezf et Calliganasty participent à la mission.
              </div>
            </div>
          </div>
          <div class="block-right">
            <div class="block-1-right">
              <div class="task-pole">
                <h4>Pôle Graphisme</h4>
              </div>
              <div class="task-xp">
                25 XP
              </div>
            </div>
            <div class="block-2-right">
              <div class="task-share">
                <a href="#">
                  Voir les détails de la mission
                </a>
                <a href="#">
                  Participer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="task-box">
        <div class="task-detail">
          <div class="block-left">
            <div class="block-1-left">
              <div class="current-mission">
                Mission à faire
              </div>
            </div>
            <div class="block-2-left">
              <div class="task-title">
                <h3>Création d'un kakémono</h3>
              </div>
              <div class="task-date">
                00/00/2021 au 00/00/2021
              </div>
            </div>
            <div class="block-3-left">
              <div class="task-image">
                <img src="https://i.pravatar.cc/300?img=1">
                <img src="https://i.pravatar.cc/300?img=3">
              </div>
              <div class="task-member">
                Florine Dezf et Calliganasty participent à la mission.
              </div>
            </div>
          </div>
          <div class="block-right">
            <div class="block-1-right">
              <div class="task-pole">
                <h4>Pôle Graphisme</h4>
              </div>
              <div class="task-xp">
                25 XP
              </div>
            </div>
            <div class="block-2-right">
              <div class="task-share">
                <a href="#" class="details">
                  Voir les détails de la mission
                </a>
                <a href="#" class="participer">
                  Participer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="task-box">
        <div class="task-detail">
          <div class="block-left">
            <div class="block-1-left">
              <div class="current-mission">
                Mission à faire
              </div>
            </div>
            <div class="block-2-left">
              <div class="task-title">
                <h3>Création d'un kakémono</h3>
              </div>
              <div class="task-date">
                00/00/2021 au 00/00/2021
              </div>
            </div>
            <div class="block-3-left">
              <div class="task-image">
                <img src="https://i.pravatar.cc/300?img=1">
                <img src="https://i.pravatar.cc/300?img=3">
              </div>
              <div class="task-member">
                Florine Dezf et Calliganasty participent à la mission.
              </div>
            </div>
          </div>
          <div class="block-right">
            <div class="block-1-right">
              <div class="task-pole">
                <h4>Pôle Graphisme</h4>
              </div>
              <div class="task-xp">
                25 XP
              </div>
            </div>
            <div class="block-2-right">
              <div class="task-share">
                <a href="#">
                  Voir les détails de la mission
                </a>
                <a href="#">
                  Participer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="task-box">
        <div class="task-detail">
          <div class="block-left">
            <div class="block-1-left">
              <div class="current-mission">
                Mission à faire
              </div>
            </div>
            <div class="block-2-left">
              <div class="task-title">
                <h3>Création d'un kakémono</h3>
              </div>
              <div class="task-date">
                00/00/2021 au 00/00/2021
              </div>
            </div>
            <div class="block-3-left">
              <div class="task-image">
                <img src="https://i.pravatar.cc/300?img=1">
                <img src="https://i.pravatar.cc/300?img=3">
              </div>
              <div class="task-member">
                Florine Dezf et Calliganasty participent à la mission.
              </div>
            </div>
          </div>
          <div class="block-right">
            <div class="block-1-right">
              <div class="task-pole">
                <h4>Pôle Graphisme</h4>
              </div>
              <div class="task-xp">
                25 XP
              </div>
            </div>
            <div class="block-2-right">
              <div class="task-share">
                <a href="#">
                  Voir les détails de la mission
                </a>
                <a href="#">
                  Participer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserTicket',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .UserTicket {
    margin: 8px 10%;
  }
  h2 {
    margin: 20px 0;
  }

  #mission-search input[type=search] {
    border: 5px solid #ef900d;
    width: 50%;
    padding: 10px 10px;
    border-radius: 15px;
    outline: none;
  }

  #mission-search input[type=submit] {
    padding: 10px 25px;
    border-radius: 25px;
    border: none;
    border: 5px solid #ef900d;
    background: transparent;
    transition: 0.2s;
    font-weight: 700;
    color: white;
    margin-left: 15px;
  }

  #mission-search input[type=submit]:hover {
    background-color: #ef900d;
    transition: 0.2s;
  }

  #task-list {
    display: flex;
    flex-direction: column;
  }
  .task-box {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .14), 0 1px 7px 0 rgba(0, 0, 0, .12), 0 3px 1px -1px rgba(0, 0, 0, .2);
    margin: 20px 0;
  }
  .task-detail {
    font-size:1.5rem;
    padding: 40px 20px;
    display: flex;
    justify-content: space-around;
    background-color: hsla(11, 0%, 100%, .2);
  }
  .task-detail div {
    margin: 5px 0;
  }
  .task-image > img {
    width: 50px;
    margin: 2px;
    border-radius: 50%;
  }
  .task-xp {
    color: #60DE30;
    font-weight: bold;
  }
  .block-left, .block-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .block-right {
    text-align: right;
  }
  .current-mission {
    background-color: #4EC814;
    opacity: 0.8;
    width: 200px;
    padding: 2px;
    color: white;
    text-align: center; 
  }
  .task-share a {
    padding: 7px 12px;
    border: 4px solid #bcbcbc;
    margin-left: 20px;
    border-radius: 50px;
    text-decoration:none;
    color: #ffffff;
    transition: 0.2s;
  }
  .task-share a:hover {
    background-color: #bcbcbc;
    transition: 0.2s;
  }
  .task-share a:last-child {
    border: 4px solid #ef900d;
  }
  .task-share a:last-child:hover {
    background-color: #ef900d;
    transition : 0.2s;
  }
</style>