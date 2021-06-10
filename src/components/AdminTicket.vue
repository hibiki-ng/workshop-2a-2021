<template>
    <div class="AdminTicket">
        <div class="pole-grid">
            <div v-bind:id="adminPol.id" v-for="adminPol in adminPole" :key="adminPol.id">
                <h4>{{adminPol.name}}</h4>
                <h5>Responsable : {{adminPol.responsable}}</h5>
                <p>Il y a actuellement {{adminPol.mission}} missions en cours</p>
                <div class="button-area">
                <button class="warning">Gérer les pôles</button>
                <button class="informative">Gérer les membres</button>
                <button class="classic">Voir les missions</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import adminPole from '../data/adminpole.json'
    export default {
        name: 'AdminTicket',
        data() {
            return {
                adminPole: adminPole,
            };
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .pole-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        text-align: center;
    }

    .pole-grid>div {
        margin: 10px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        padding: 50px;

        
    }
    .pole-grid>div>p {
        font-weight: bold;
    }

    .pole1 {
        grid-area: 1 / 1 / 2 / 2;
    }

    .pole2 {
        grid-area: 1 / 2 / 2 / 3;
    }

    .pole3 {
        grid-area: 1 / 3 / 2 / 4;
    }

    .pole4 {
        grid-area: 2 / 1 / 3 / 2;
    }

    .pole5 {
        grid-area: 2 / 2 / 3 / 3;
    }

    .pole6 {
        grid-area: 2 / 3 / 3 / 4;
    }
    .pole-grid button {
        padding: 10px 25px;
        background: #c62828;
        border: none;
        border-radius: 0;
        color: white;
        box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .14), 0 1px 7px 0 rgba(0, 0, 0, .12), 0 3px 1px -1px rgba(0, 0, 0, .2);
        border-radius: 50px;
    }
    .button-area {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .button-area > button {
        margin: 10px;
        width: 40%;
    }
    .warning {
        background-color: #ef900d !important;
    }
    .informative {
        background-color: #3366CC !important;
    }
    .classic {
        background-color: #EEEEEE !important;
        color: black !important;
    }
    h5, p {
        color: #dcdcdc;
    }
</style>