<template>
    <v-app id="inspire">
      <!-- Top Bar / Header-->
      <v-app-bar app absolute color="white" class="top_nav">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        
        <a-switch :v-model="checked1" @click="change1" />
      
      
      <v-btn icon>
        <svg-icon type="mdi" color="#0A599B" :path="email"></svg-icon>
      </v-btn>
      <v-btn icon>
        <svg-icon type="mdi" color="#0A599B" :path="bellIcon"></svg-icon>
      </v-btn>
      <v-btn icon>
        <svg-icon type="mdi" color="#0A599B" :path="setting"></svg-icon>
      </v-btn>
     
      </v-app-bar>
      <!-- Top Bar / Header End-->
  
  
  
  
     
      <v-navigation-drawer v-model="drawer" app>  <!-- Top box in drawer with logo-->
        <v-sheet color="white" class="pa-4">
          <img class="logo" :src="company" alt="" />
        </v-sheet>
        <v-divider></v-divider><!-- Top box in drawer with logo End-->

        
        
  
  
        <v-list>      <!-- Navigation list in side drawer-->
          <v-list-item-group >
            <v-list-item class="nav-btn" >
          <!-- Navigation list Option-->
          <router-link to="/dashboard">
          <v-btn  :class="[btnClass, 'my-btn']" @click="toggle" >
            <v-list-item-icon>
              <v-icon class="icon" v-text="dashboard"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title> Dashboard</v-list-item-title>
              </v-list-item-content>
            </v-btn>
          </router-link>
        </v-list-item>

            <!-- Navigation list Option-->
          
          </v-list-item-group>
        </v-list>
        <!-- Navigation list in side drawer End-->

      </v-navigation-drawer>
    
    </v-app>
  </template>
  
  <script>
  import { defineComponent } from 'vue';

  import logo from "../assets/comp_logo.png";
  import imagineLogo from '../assets/logo.png'
  import adminPic from '../assets/avatar.jpg'
  import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCog } from "@mdi/js";
import { mdiEmail } from '@mdi/js';
import {mdiBell} from '@mdi/js'

  
  // import InboxVue from "./Inbox.vue";
  
  export default defineComponent( {
    name : 'DashboardVue',
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
      admin : adminPic ,
      bell : "mdi-bell-alert-outline",
      inboxOutline : 'mdi-message-outline' ,
      task : 'mdi-file-document-edit-outline',
      accountOutline : 'mdi-shield-account-outline',
      logout : 'mdi-logout',
      kanban :  'mdi-bulletin-board',
      company : imagineLogo,
      setting : mdiCog,
      email : mdiEmail,
      bellIcon : mdiBell,
      checked1:false,
      btnClass : 'red-color'
    }),
    // Functions and Methods
    methods: {
      change1(){
        this.checked1 = (this.checked1) ? false : true;
      },
      show() {
        this.$swal.fire(
          "The Internet?",
          "That thing is still around?",
          "warning"
        );
      },
      // setup() {
      //   const checked = ref(true)
      //   return {
      //     checked
      //   }
      // },




      
      toggle() {
    if(this.btnClass === "red-color") {
      this.btnClass = "yellow-color";
    } else {
     this.btnClass = "red-color";
    }
  }
    },

    components : {
      // InboxVue
      SvgIcon
    },
    props : ['Hello']
  });
  </script>
  
  <style scoped>
  .my-btn {
    padding:10px 150px;
  color: #fff;
  border: none;
  }
.red-color {
  background: transparent !important;
  box-shadow: none !important;
}

.yellow-color {
  background-image: linear-gradient(to right,#3576AB , #57A2E0);
  color: white !important
}
@import "../styles/dashboard.css";
  </style>
  