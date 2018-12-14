<template>
    <div>
        <v-layout>
            <v-flex>
                <vue-typer text="I liked to be typed" v-bind:repeat="Infinity" />
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import { VueTyper } from 'vue-typer';

    const myName = 'Aaron';

    export default {
        name: "name-block",
        data() {
            return {
                name: `${myName} Vigal`,
                numberOfTimes: 3,
            }
        },
        components: {
            VueTyper,
        },
        methods: {
            changeName() {
                this.name = "Andrew";
            }
        }
    }
</script>

<style scoped>
</style>