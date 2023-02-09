<template>
  <v-app>
    <div>
      <Dashboard />
      <v-main>
        <b-container fluid>
          <div class="main-bg agent-bg">
            <!--First Row  | Heading and Search Bar Row -->
            <b-row class="main-row">
              <b-row>
                <b-col cols="12">
                  <span class="main-heading">Agents</span>
                </b-col>
              </b-row>
              <!--Second Row  | Buttons Row -->
              <b-row>
                <b-col cols="6" class="btn-row">
                  <v-btn depressed>
                    <v-icon small v-text="filterIcon"></v-icon> Filters
                  </v-btn>
                  <input v-model="text" placeholder="Search in agents"  /> 
                </b-col>
                <b-col cols="6" class="btn-row-2">
                  <v-btn depressed> Add Agents </v-btn>
                </b-col>
              </b-row>
              <!--Third Row  | Table Row -->

              <b-row>
                <b-col cols="12" class="table-col">
                  <v-simple-table :search="search">
                    <!-- <v-data-table
                    :headers="headers"
                    :items="EmployeData"
                    :search="search"
                  ></v-data-table> -->
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Contract</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="data in EmployeData" :key="data">
                        <td>
                          <v-avatar size="25">
                            <img :src="data.img" alt="Avatar" />
                          </v-avatar>
                          {{ data.first }}
                        </td>
                        <td>{{ data.last }}</td>
                        <td>
                          <a href="#"> {{ data.user }}</a>
                        </td>
                        <td>{{ data.phone }}</td>
                        <td>{{ data.email }}</td>
                        <td>{{ data.contract }}</td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </b-col>
              </b-row>

              <!--Fourth Row  | Table Row -->
            </b-row>
          </div>
        </b-container>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import Dashboard from "@/components/Dashboard.vue";
//   import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccountMultiple } from "@mdi/js";
import Albert from "../assets/albert.png";
import Avatar from "../assets/avatar.jpg";

export default {
  data: () => ({
    AvatarPic: Avatar,
    AlbertPic: Albert,
    Hello: "Hello World",
    text: "",
    accountIcon: mdiAccountMultiple,
    filterIcon: "mdi-filter-outline",
    search: "",
    headers: [
      {
        text: "First Name",
        align: "start",
        sortable: false,
        value: "first",
      },
      { text: "Last Name", value: "last" },
      { text: "Username", value: "user" },
      { text: "Phone", value: "phone" },
      { text: "Email", value: "email" },
      { text: "Contract", value: "contract" },
    ],
    EmployeData: [
      {
        first: "Len ",
        img: Albert,
        last: "Andrew",
        user: "LenAnd123",
        phone: "1-702-623-4344",
        email: "LenAnd123@gmail.com",
        contract: "ABC",
      },
      {
        first: "Len",
        img: Avatar,
        last: "Jack",
        user: "LenJ",
        phone: "-1-702-522-6899",
        email: "JLEN44@gmail.com",
        contract: "RJK",
      },
      {
        first: "Len",
        img: "https://cdn.vuetifyjs.com/images/john.jpg",
        last: "Perrots",
        user: "Plen01",
        phone: "-1-789-895-3635",
        email: "JP878@hotmail.com",
        contract: "KKL",
      },
      {
        first: "Len",
        img: Avatar,
        last: "Mike",
        user: "MikkyLen",
        phone: "1-898-858-1235",
        email: "MLen@gmail.com",
        contract: "LLOKIK",
      },
    ],
  }),
  name: "AnalyticsVue",
  components: {
    Dashboard,
    // CardsVue,
    // ApexCharts,
    //   SvgIcon,
  },
};
</script>

<style>
@import "../styles/cards.css";
</style>
