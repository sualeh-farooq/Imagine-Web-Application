<template>
  <div>
    <Dashboard />
    <v-main>
      <b-container fluid>
        <div class="main-bg"> 
          <b-row >
            <b-col> 
            <span class="main-heading" >Dashboard</span >
          </b-col>
          <b-col>
            <span class="search-space">
              <b-button   class="search-btn" variant="primary"  > <v-icon>mdi-vector-union</v-icon> </b-button>
              <input v-model="text" placeholder="Quick Search" />
            </span>
          </b-col>
          </b-row>
        </div>
      </b-container>
    </v-main>
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard.vue";

export default {
  data: () => ({
    Hello: "Hello World",
    text : ''
  }),
  name: "AnalyticsVue",
  components: {
    Dashboard,
    // CardsVue,
  },
};
</script>
