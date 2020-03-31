<template>
    <v-container grid-list-xs>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        {{ info }}
        <router-view />
    </v-container>
</template>

<script>
  export default {
    name: 'Manager',

    data: () => ({
        info: null
    }),

    mounted () {
        this.$axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => this.info = response)
    }
  }
</script>