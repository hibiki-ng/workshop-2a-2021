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
            <div class="task-header">
                <h2>Tâches à faire</h2>
                <div class="button-area">
                    <button v-on:click="counter_task_todo1 += 5, counter_task_todo2 += 5">►</button>
                    <button v-on:click="counter_task_todo1 -= 5, counter_task_todo2 -= 5">◄</button>
                </div>
            </div>
            <div class="task-list">
                <div v-for="ticket in ticket_todo.slice(counter_task_todo1, counter_task_todo2)"
                    v-bind:key="ticket.id" class="task-box">
                    <span class="task-id">
                        {{ticket.id}}
                    </span>
                    <a style="float:right" class="task-url" v-bind:href="ticket.web_url">{{ticket.title}}</a>
                    <span class="task-due">
                        {{ticket.due_date}}
                    </span>
                </div>
            </div>
            <div class="task-header">
                <h2>Tâches en cours</h2>
                <div class="button-area">
                    <button v-on:click="counter_task_work1 += 5, counter_task_work2 += 5">►</button>
                    <button v-on:click="counter_task_work1 -= 5, counter_task_work2 -= 5">◄</button>
                </div>
            </div>
            <div class="task-list">
                <div v-for="ticket in ticket_work.slice(counter_task_work1, counter_task_work2)"
                    v-bind:key="ticket.id" class="task-box">
                    <span class="task-id">
                        {{ticket.id}}
                    </span>
                    <a style="float:right" class="task-url" v-bind:href="ticket.URL">{{ticket.title}}</a>
                    <span class="task-created">
                        {{ticket.created_at}}
                    </span>
                    <span class="task-due">
                        {{ticket.due_date}}
                    </span>
                </div>
            </div>
            <div class="task-header">
                <h2>Tâches finies</h2>
                <div class="button-area">
                    <button v-on:click="counter_task_done1 += 5, counter_task_done2 += 5">►</button>
                    <button v-on:click="counter_task_done1 -= 5, counter_task_done2 -= 5">◄</button>
                </div>
            </div>
            <div class="task-list">
                <div v-for="ticket in ticket_done.slice(counter_task_done1, counter_task_done2)"
                    v-bind:key="ticket.id" class="task-box">
                    <span class="task-id">
                        {{ticket.id}}
                    </span>
                    <a style="float:right" class="task-url" v-bind:href="ticket.web_url">{{ticket.title}}</a>
                    <span class="task-created">
                        {{ticket.created_at}}
                    </span>
                    <span class="task-closed">
                        {{ticket.closed_at}}
                    </span>
                </div>
            </div>
            {{info}}
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import membersData from '../data/members.json';

    /*var sort_status = tickets.filter(tickets => {
        return tickets.Status == "Closed";
    })*/

    const request_todo = axios.get("https://gitlab.eemi.tech/api/v4/projects/3524/issues?state=opened&access_token=xnrobwy1Mo8SMxubzdoq");
    const request_work = axios.get("https://gitlab.eemi.tech/api/v4/projects/3524/issues?state=opened&access_token=xnrobwy1Mo8SMxubzdoq");
    const request_done = axios.get("https://gitlab.eemi.tech/api/v4/projects/3524/issues?state=closed&access_token=xnrobwy1Mo8SMxubzdoq");

    export default {
        name: 'PoleGestionTicket',
        data() {
            return {
                ticket_todo: null,
                ticket_work: null,
                ticket_done: null,
                members: membersData,
                counter_task_todo1: 0,
                counter_task_todo2: 5,
                counter_task_work1: 0,
                counter_task_work2: 5,
                counter_task_done1: 0,
                counter_task_done2: 5,
            };
        },
        mounted() {
            axios
                .all([request_todo, request_work, request_done])
                .then(axios.spread((...responses) => {
                    this.ticket_todo = responses[0].data;
                    this.ticket_work = responses[1].data;
                    this.ticket_done = responses[2].data;
                }))
            
        },
        
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .header {
        display: flex;
        justify-content: space-around;
        padding: 50px;
        background-color: #001724;
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
        opacity: 0.9;
        color: white;
        font-size: 1.3rem;
    }

    .tasks h2 {
        margin-left: 11%;
    }

    .task-header {
        display: flex;
        justify-content: space-between;
        margin-right: 10%;
        margin-bottom: 20px;
    }

    .button-area {
        display: flex;
        flex-direction: row-reverse;
    }

    .tasks button {
        margin-left: 10px;
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
        margin: 30px 10px;
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
        background-color: hsla(11, 0%, 100%, .8);
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
        width: 150px;
        border-radius: 50%;
    }
</style>