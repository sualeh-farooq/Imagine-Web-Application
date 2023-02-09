<template>
  <div>
 <Dashboard />

</div>
</template>
  

<style>

</style>

<script>
import Dashboard from '@/components/Dashboard.vue';
import store from '@/store';
  export default {
    data : ()=>({
        Hello : 'Hello World',
        cards: ['Today', 'Yesterday'],
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down', 'Inbox'],
        ['mdi-send', 'Send'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam'],
      ],
    }),
    name: 'HomeView',
    components : {
      Dashboard,
    },
    methods : {
      updateName() {
        let first = document.getElementById('first')
        let last = document.getElementById('last')

        console.log(first.value)
        console.log(last.value)
        
        store.commit('updateName' , first.value)
        store.commit('updateLast' , last.value)



      }
    }
  } 
</script>
