<template>
  <div id="app">
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%">
      <el-table-column
        prop="ranking"
        label="排名"
        width="40">
      </el-table-column>
      <el-table-column
        prop="score"
        label="分數"
        width="60">
      </el-table-column>
      <el-table-column
        prop="email"
        label="email">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名稱">
      </el-table-column>
    </el-table> 
  </div>
</template>

// [{
//   ranking: '1',
//   score: '100',
//   name: '小明',
//   email: 'xxx'
// }, {
//   ranking: '2',
//   score: '90',
//   name: '小名',
//   email: 'xxx'
// }, {
//   ranking: '3',
//   score: '80',
//   name: '小銘',
//   email: 'xxx'
// }, {
//   ranking: '4',
//   score: '70',
//   name: '小鳴',
//   email: 'xxx'
// }, {
//   ranking: '5',
//   score: '60',
//   name: '小茗',
//   email: 'xxx'
// }]

<script>
  export default {
    data() {
      return {
        tableData: []
      };
    },
    methods: {
      
    },
    created: function () {
      // alert('hi');
      this.$http.get('https://jamfly.dev/api/rank')
      .then((response) => {
        console.log(response)
        for (var i = 0; i < response.body.length; i++) {
          let jsondata = {"ranking":i+1, "score":response.body[i]['score'], "name":response.body[i]['name'], "email":response.body[i]['email']}
          this.tableData.push(jsondata)
          // console.log(response.body[i]['name'])
          // let ranking = i + 1
          // let name = response.body[i]['name']
          // let mail = response.body[i]['mail']
          // let score = response.body[i]['score']
        }

      })
      .catch((response) => {
        console.log(response)
      })
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
  margin-right:5%;
  margin-left:5%;
}
</style>

// RankingBoard