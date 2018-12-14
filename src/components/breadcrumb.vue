<template>
    <v-breadcrumbs justify-center large >
        <v-breadcrumbs-item class="sticky">Dashboard</v-breadcrumbs-item>
    </v-breadcrumbs>
</template>

<script>
    export default {
        name: "breadcrumb"
    }
</script>

<style scoped>
    .sticky{
        position: fixed;
        bottom: 1em;
        margin: 0px 0px 0px 0px;
    }
</style>