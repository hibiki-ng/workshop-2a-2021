<template>
    <div class="PoleGestion">
        <div class="header">
            <h1>Pole communication</h1>
            <p>Développement de la stratégie de communication dans l'optique de développer la visibilité de
                l'association sur les réseaux sociaux, au quotidien lors de nos événements ou de ceux auxquels nous
                participons.</p>
        </div>

        <div class="members">
            <h2>Membres</h2>
            <div id="member-list">
                <div v-for="member in members" :key="member.id" class="member-box">
                    <img class="member-picture" v-bind:src="member.picture" />
                    {{member.name}}
                </div>
            </div>
        </div>
        <div class="tasks">
            <button v-on:click="counter_task_todo1 += 5, counter_task_todo2 += 5">►</button>
            <button v-on:click="counter_task_todo1 -= 5, counter_task_todo2 -= 5">◄</button>
            <h2>Tâches à faire</h2>
            <div class="task-list">
                <div v-for="ticket in tickets.slice(counter_task_todo1, counter_task_todo2)"
                    v-bind:key="ticket.Issue_ID" class="task-box">
                    <span class="task-id">
                        {{ticket.Issue_ID}}
                    </span>
                    <a style="float:right" class="task-url" v-bind:href="ticket.URL">{{ticket.Title}}</a>
                    <span class="task-due">
                        {{ticket.Due_Date}}
                    </span>
                </div>
            </div>
            <button v-on:click="counter_task_work1 += 5, counter_task_work2 += 5">►</button>
            <button v-on:click="counter_task_work1 -= 5, counter_task_work2 -= 5">◄</button>
            <h2>Tâches en cours</h2>
            <div class="task-list">
                <div v-for="ticket in tickets.slice(counter_task_work1, counter_task_work2)"
                    v-bind:key="ticket.Issue_ID" class="task-box">
                    <span class="task-id">
                        {{ticket.Issue_ID}}
                    </span>
                    <a style="float:right" class="task-url" v-bind:href="ticket.URL">{{ticket.Title}}</a>
                    <span class="task-created">
                        {{ticket.Created_At}}
                    </span>
                    <span class="task-due">
                        {{ticket.Due_Date}}
                    </span>
                </div>
            </div>
            <button v-on:click="counter_task_done1 += 5, counter_task_done2 += 5">►</button>
            <button v-on:click="counter_task_done1 -= 5, counter_task_done2 -= 5">◄</button>
            <h2>Tâches finies</h2>
            <div class="task-list">
                <div v-for="ticket in tickets.slice(counter_task_done1, counter_task_done2)"
                    v-bind:key="ticket.Issue_ID" class="task-box">
                    <span class="task-id">
                        {{ticket.Issue_ID}}
                    </span>
                    <a style="float:right" class="task-url" v-bind:href="ticket.URL">{{ticket.Title}}</a>
                    <span class="task-created">
                        {{ticket.Created_At}}
                    </span>
                    <span class="task-closed">
                        {{ticket.Closed_At}}
                    </span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import membersData from '../data/members.json';
    import tickets from '../data/tickets.json';

    /*var sort_status = tickets.filter(tickets => {
        return tickets.Status == "Closed";
    })*/

    export default {
        name: 'PoleGestionTicket',
        data() {
            return {
                members: membersData,
                tickets: tickets,
                counter_task_todo1: 0,
                counter_task_todo2: 5,
                counter_task_work1: 0,
                counter_task_work2: 5,
                counter_task_done1: 0,
                counter_task_done2: 5,
            };
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .header {
        display: flex;
        justify-content: space-around;
        padding: 50px;
        background-color: gray;
        color: white;
    }

    .header p {
        width: 20%;
    }

    .members {
        padding: 75px;
        margin: auto;
    }

    .members h2 {
        text-align: center;
        font-weight: bold;
    }

    .tasks {
        padding: 50px 100px;
        background-color: gray;
        opacity: 0.6;
        color: white;
        font-size: 1.3rem;
    }
    .tasks h2 {
        margin-left: 10%;
    }
    .tasks button {
        float: right;
        margin: 0 10px;
        padding: 10px 15px;
        background: #ef900d;
        border: none;
        border-radius: 0;
        color: white;
        box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .14), 0 1px 7px 0 rgba(0, 0, 0, .12), 0 3px 1px -1px rgba(0, 0, 0, .2);
        border-radius: 12px;
    }

    #member-list {
        margin-top: 35px;
        display: flex;
        flex-wrap: wrap;

    }

    .member-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;
        width: calc(20% - 40px);
        margin: 20px;
    }
    .task-list .task-box:first-child {
        margin-top: 50px;
    }
    .task-list .task-box:last-child {
        margin-bottom: 50px;
    }

    .task-box {
        display: flex;
        align-items: center;
        border-radius: 5px;
        height: 100px;
        padding: 5px;
        margin: 20px;
        margin-left: 10%;
        margin-right: 10%;
        background-color: #ffffff;
        color: black;
    }

    .task-box a {
        color: black;
        text-decoration: none;
    }

    .task-id {
        width: 15%;
        padding-left: 10px;
    }

    .task-url {
        width: 50%;
    }

    .task-created {
        width: 10%;
    }

    .task-closed {
        width: 25%;
        text-align: right;
        padding-right: 10px;
    }

    .task-due {
        width: 25%;
        text-align: right;
        padding-right: 10px;
    }

    .member-picture {
        width: 200px;
        border-radius: 50%;
    }
</style>