<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    
    <RegisterForm></RegisterForm>
    <Card :cardData="cardData" />
  </div>
</template>

<script>
import RegisterForm from './components/RegisterForm.vue'
import Card from './components/Card.vue'

export default {
  name: 'app',
  components: {
    Card,
    RegisterForm
  },
    data() {
      return {
        cardData:[
          {
            name:'Adam',
            birthday:'1985.08.12',
            mail:'adam@xxx.com'
          },
          {
            name:'Jack',
            birthday:'1980.02.23',
            mail:'jack@xxx.com'
          },
          {
            name:'Candy',
            birthday:'1982.05.06',
            mail:'candy@xxx.com'
          },
          {
            name:'Louis',
            birthday:'1984.11.21',
            mail:'loui@xxx.com'
          },
          {
            name:'Lurry',
            birthday:'1982.01.17',
            mail:'lurry@xxx.com'
          }
        ]
      }
    } 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
