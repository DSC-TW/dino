<template>
  <div id="app">
    <Card :cardData="cardData" />
  </div>
</template>

<script>
  import Card from './components/Card'
  export default {
    name: 'app',
    components: {
      Card
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

<style></style>