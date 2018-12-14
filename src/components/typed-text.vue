<template>
    <v-layout d-inline-block>
        <v-flex d-inline-block>
            Student /&nbsp;
        </v-flex>
        <v-flex d-inline-block class="typed">
            <vue-typer erase-style='backspace' :text="filler" caret-animation='smooth' :shuffle='true'/>
        </v-flex>
        <v-flex d-inline-block>
            &nbsp;Developer
        </v-flex>
    </v-layout>
</template>

<script>
    import { VueTyper } from 'vue-typer';

    export default {
        name: "typed-text",
        components: {
            VueTyper,
        },
        data(){
            return {
                filler: ["Java", "Python", "HTML5", "CSS3", "Flutter", "Dart", "Android", "NodeJS", "PHP", "Django", "Docker"]
            }
        }
    }
</script>

<style scoped>

</style>