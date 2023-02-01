<template>
  <div>
    <Dashboard />
    <v-main>
      <v-container>
        <div>
          <v-row >
            <v-col > 
            <!-- <h1>Card</h1> -->
          </v-col>
          </v-row>
        </div>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard.vue";

export default {
  data: () => ({
    Hello: "Hello World",
  }),
  name: "AnalyticsVue",
  components: {
    Dashboard,
    // CardsVue,
  },
};
</script>
