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
          <!--Third Row  | Video Row -->
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
              <h5>Clients</h5>
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
          <!--Fourth Row  | Table Row -->

          <b-row class="fourth_row">
            <b-col class="fourth_row_child1">
              <b-col style="{border: 2px solid red;}"><h5>Opportunities</h5></b-col>
              <v-data-table
                v-model="selected"
                :headers="headers"
                :items="desserts"
                :single-select="singleSelect"
                item-key="name"
                show-select
                class="elevation-1" >
              </v-data-table>
                <!-- <v-chip
          :color="getColor(item.priority)"
          dark
          v-bind:style="{ 'background-color': 'red', 'color ': 'pink' , 'text-align' : 'center' }"
        >
          {{ item.priority }}
        </v-chip> -->
            </b-col>
            <b-col class="fourth_row_child2">
              <h5>Recent Activity</h5>
              <!-- <apexchart
                title="Clients"
                type="bar"
                height="100%"
                width="100%"
                :options="chartOptions"
                :series="series"
              >
              </apexchart> -->
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
        colors: ["#0A599B", "#097bd8"],
      },
      stroke: {
        curve: "straight",
      },

      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      },
    },
    singleSelect: false,
        selected: [],
        headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Line of business', value: 'business' ,sortable: false,},
          { text: 'Estimated Close date', value: 'estimate' ,sortable: false},
          { text: 'Probability', value: 'prob',sortable: false, align:'center'  },
     
        ],
        desserts: [
          {
            name: 'Melissa John',
            business: 'Home rental Insurance',
            estimate: '20/January/2023',
            prob: '33'
          },
          {
            name: 'Melissa John',
            business: 'Home rental Insurance',
            estimate: '20/January/2023',
            prob: '33'
          },
          {
            name: 'Melissa John',
            business: 'Home rental Insurance',
            estimate: '20/January/2023',
            prob: '33'
          },
          {
            name: 'Melissa John',
            business: 'Home rental Insurance',
            estimate: '20/January/2023',
            prob: '33'
          },
         
        ],
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
