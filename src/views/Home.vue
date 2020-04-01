<template>
  <div class="home">
    <v-container grid-list-xs>

      <v-list two-line subheader>

        <v-subheader class="d-flex justify-space-between">
          <h3>一覧</h3>
          <v-btn color="red" fab x-small dark @click="register">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-subheader>
        <template v-for="search in searches">
            <v-divider :key="search.search_id"></v-divider>
            <v-list-item
              :key="search.search_id"
            >
              <v-list-item-content @click="update(search.search_id)">
                <v-list-item-title v-text="search.search_word"></v-list-item-title>
                <v-list-item-subtitle v-text="search.search_id"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                通知
                <v-switch :input-value="search.notice==2? false : true" @change="changeNotice($event, search.search_id)"></v-switch>
              </v-list-item-action>

            </v-list-item>

        </template>
        <v-divider></v-divider>
      </v-list>

    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Homes',

    data: () => ({
        info: null,
        searches: null,
    }),

    props: {
      userId: String
    },

    methods: {
      update: function(searchId){
        this.$router.push({name: "About", params: {"searchId": searchId, "isUpdate": true}})
      },
      register (){
        this.$router.push({name: "About", params: {"isUpdate": false}})
      },
      changeNotice(event, searchId) {
        var data = {
          "user_id": this.userId,
          "search_id": searchId,
          "notice": event? 0 : 2
        }
        this.$axios.post("/search/update", data)
      }
    },

    watch: {
      userId: {
        immediate: true,
        handler() {
          this.$axios
          .get("/searches/"+this.userId)
          .then(response => {
            console.log(response)
            this.searches = response.data.searches
          })
        }
      }
    }
  }
</script>
