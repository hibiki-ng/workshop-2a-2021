<template>
    <div class="PoleGestion">
        <div class="description">
            Nos rédacteurs et éditeurs réalisent des articles de presse suivant une ligne éditoriale sur les thèmes de
            l'esport, du jeu vidéo et de la mixité dans ces secteurs.
        </div>
        <div class="members">
            <li v-for="member in members" :key="member.id">
            {{member.name}}
            </li>
        </div>

        <div class="tasks">
            ee
        </div>

    </div>
</template>

<script>
import membersData from '../data/members.json'
    export default {
        name: 'PoleGestionTicket',
        data() {
            return {
                members: membersData,
            };
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .PoleGestion {
        display: flex;
    }

    .PoleGestion>div {
        width: 33%;
        margin: 10px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        padding: 50px;
    }
</style>