<template>
  <div>
    <Dashboard />
    <v-main>
      <b-container fluid>
        <div class="main-bg">
          <!--First Row  | Heading and Search Bar Row -->

          <b-row>
            <b-col>
              <span class="main-heading">Dashboard</span>
            </b-col>
            <b-col>
              <span class="search-space">
                <b-button class="search-btn" variant="primary">
                  <v-icon>mdi-vector-union</v-icon>
                </b-button>
                <input v-model="text" placeholder="Quick Search" />
              </span>
            </b-col>
          </b-row>
          <!--Second Row  | Cards Row -->
          <b-row class="second_row">
            <b-col>
              <b-card no-body>
                <b-row no-gutters>
                  <b-col>
                    <b-card-body>
                      <svg-icon type="mdi" :path="accountIcon"></svg-icon>
                      <b-card-text> Prospects </b-card-text>
                    </b-card-body>
                  </b-col>
                  <b-col>
                    <b-card-body>
                      <span>22</span>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col>
              <b-card no-body>
                <b-row no-gutters>
                  <b-col>
                    <b-card-body>
                      <svg-icon type="mdi" :path="accountIcon"></svg-icon>
                      <b-card-text> Active </b-card-text>
                    </b-card-body>
                  </b-col>
                  <b-col>
                    <b-card-body>
                      <span>335</span>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col>
              <b-card no-body>
                <b-row no-gutters>
                  <b-col>
                    <b-card-body>
                      <svg-icon type="mdi" :path="accountIcon"></svg-icon>
                      <b-card-text> Dead </b-card-text>
                    </b-card-body>
                  </b-col>
                  <b-col>
                    <b-card-body>
                      <span>225</span>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col>
              <b-card no-body>
                <b-row no-gutters>
                  <b-col>
                    <b-card-body>
                      <svg-icon type="mdi" :path="accountIcon"></svg-icon>
                      <b-card-text> Agent </b-card-text>
                    </b-card-body>
                  </b-col>
                  <b-col>
                    <b-card-body>
                      <span>25</span>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
          <!--Third Row  |Video Row -->

          <b-row class="third_row">
            <b-col class="third_row_child1">
              <!-- <iframe src="https://www.youtube.com/watch?v=mYqyTvkuVXY"></iframe> -->
              <iframe
                width="100%"
                height="300px"
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/mYqyTvkuVXY"
                title="Get your Life insurance with Imagine"
                frameborder="0"
              ></iframe>
            </b-col>
            <b-col class="third_row_child2">
              <h4>Clients</h4>
              <apexchart
                title="Clients"
                type="bar"
                height="100%"
                width="100%"
                :options="chartOptions"
                :series="series"
              >
              </apexchart>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </v-main>
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccountMultiple } from "@mdi/js";
// import ApexCharts from "apexcharts";

export default {
  data: () => ({
    Hello: "Hello World",
    text: "",
    accountIcon: mdiAccountMultiple,
    series: [
      {
        name: "Clients",
        data: [10, 60, 15, 50, 25, 10, 55, 20],
      },
    ],
    chartOptions: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        colors: [ "#0A599B", "#097bd8"],
      },
      stroke: {
        curve: "straight",
      },

      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      },
    },
  }),
  name: "AnalyticsVue",
  components: {
    Dashboard,
    // CardsVue,
    // ApexCharts,
    SvgIcon,
  },
};
</script>
