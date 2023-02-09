<template>
  <v-app id="inspire">
    <!-- Top Bar / Header-->
    <v-app-bar app absolute color="white" class="top_nav">
      <v-app-bar-nav-icon @click="drawerTog() ; setScreen()"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <a-switch :v-model="checked1" @click="change1" />
      <v-btn icon>
        <svg-icon type="mdi" color="#0A599B" :path="email"></svg-icon>
      </v-btn>
      <v-btn icon>
        <svg-icon type="mdi" color="#0A599B" :path="bellIcon"></svg-icon>
      </v-btn>
 
      <v-menu
          bottom
          min-width="100px"
          rounded
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" icon>
        <svg-icon type="mdi" color="#0A599B" :path="setting"></svg-icon>
      </v-btn>
          </template>

                <!--List Menu after open -->
                <v-card>
          <v-list-item-content class="justify-center">
            <div class="text-center">
              <v-btn
                text
                max-width="100%"
                class="menu-btn"
              >
                Page Manager
              </v-btn>
              <v-divider ></v-divider>
              <v-btn
              max-width="100%"
              class="menu-btn"
                text
              >
                Custom Text
              </v-btn>
              <v-divider ></v-divider>

              <v-btn
                text
                class="menu-btn"
              >
                Site Settings
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
        </v-menu>
    </v-app-bar>
    <!-- Top Bar / Header End-->

    <v-navigation-drawer v-model="drawer" app>
      <!-- Top box in drawer with logo-->
      <v-sheet color="white" class="pa-4">
        <img class="logo" :src="company" alt="" />
      </v-sheet>
      <v-divider></v-divider
      ><!-- Top box in drawer with logo End-->

      <!-- Navigation list in side drawer-->
      <!-- Navigation list Option-->
      <div class="nav-btn-list">
        <router-link class="link" to="/dashboard">
          <v-btn medium :class="[btnClass, 'my-btn']" @click="toggle">
            <div class="border-line"></div>
            <v-icon class="icon" small v-text="dashboard"></v-icon>
            <span>Dashboard</span>
          </v-btn>
        </router-link>

        <router-link class="link" to="/cards">
          <v-btn medium :class="[btnClass2, 'my-btn2']" @click="btnToggle">
            <div class="border-line"></div>
            <v-icon class="icon" small v-text="agent"></v-icon>
            <span>Agent</span>
          </v-btn>
        </router-link>
        <!-- </v-list-item> -->
        <!-- Navigation list Option-->
        <!-- </v-list-item-group> -->
        <!-- Navigation list in side drawer End-->

        <!-- <v-row justify="center"> -->
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <!-- <v-btn>  -->
            <v-expansion-panel-header>
              <v-icon class="icon" small v-text="bookmark"></v-icon>
              <span> Marketing </span>
            </v-expansion-panel-header>
            <!-- </v-btn> -->
            <v-expansion-panel-content>
              <ul>
                <li><a href="#"> Marketing 1</a></li>
                <li><a href="#"> Marketing 2</a></li>
                <li><a href="#"> Marketing 3</a></li>
                <li><a href="#"> Marketing 4</a></li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- </v-row> -->

        

        <router-link class="link " to="/dashboard">
          <v-btn medium :class="[btnClass, 'my-btn logoutSpace']" >
            <div class="border-line"></div>
            <v-icon class="icon" small v-text="logoutIcon"></v-icon>
            <span style class="logspan">Logout</span>
          </v-btn>
        </router-link>
      </div>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

import logo from "../assets/comp_logo.png";
import imagineLogo from "../assets/logo.png";
import adminPic from "../assets/avatar.jpg";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCog } from "@mdi/js";
import { mdiEmail } from "@mdi/js";
import { mdiBell } from "@mdi/js";

// import InboxVue from "./Inbox.vue";

export default defineComponent({
  name: "DashboardVue",
  //  Data
  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "Inbox"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"],
    ],
    clock: "mdi-clock",
    account: "mdi-account",
    flag: "mdi-flag",
    dashboard: "mdi-view-dashboard-edit",
    form: "mdi-form-select",
    tableIcon: "mdi-table-large",
    chart: "mdi-chart-bar",
    inbox: "mdi-message",
    calender: "mdi-calendar-clock",
    companyLogo: logo,
    admin: adminPic,
    bell: "mdi-bell-alert-outline",
    inboxOutline: "mdi-message-outline",
    task: "mdi-file-document-edit-outline",
    accountOutline: "mdi-shield-account-outline",
    logout: "mdi-logout",
    kanban: "mdi-bulletin-board",
    company: imagineLogo,
    setting: mdiCog,
    email: mdiEmail,
    bellIcon: mdiBell,
    checked1: false,
    btnClass: "red-color",
    btnClass2: "trans-color",
    agent: "mdi-account-group",
    bookmark: "mdi-bookmark-outline",
    logoutIcon: "mdi-logout",
  }),
  // Functions and Methods
  methods: {
    change1() {
      this.checked1 = this.checked1 ? false : true;
    },
    show() {
      this.$swal.fire(
        "The Internet?",
        "That thing is still around?",
        "warning"
      );
    },
   

    toggle(event) {
      if (this.btnClass === "red-color") {
        this.btnClass = "yellow-color";
      } else {
        this.btnClass = "red-color";
      }
      console.log(event);
    },

    btnToggle(event) {
      if (this.btnClass2 === "trans-color") {
        this.btnClass2 = "trans2-color";
      } else {
        this.btnClass2 = "trans-color";
      }
      console.log(event);
    },
    setScreen() {
      console.log('Clicked')
      let container = document.getElementsByClassName('v-main')
      container[0].classList.toggle('setMain')
    },
    drawerTog(){
      this.drawer = !this.drawer
    }
    
  },

  components: {
    // InboxVue
    SvgIcon,
  },
  props: ["Hello"],
});
</script>

<style lang="scss" scoped>
@import "../styles/dashboard.css";
</style>
