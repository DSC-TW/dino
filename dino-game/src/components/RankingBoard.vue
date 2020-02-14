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
        width="180">
      </el-table-column>
      <el-table-column
        prop="score"
        label="分數"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名稱">
      </el-table-column>
    </el-table> 
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          ranking: '1',
          score: '100',
          name: '小明'
        }, {
          ranking: '2',
          score: '90',
          name: '小名'
        }, {
          ranking: '3',
          score: '80',
          name: '小銘'
        }, {
          ranking: '4',
          score: '70',
          name: '小鳴'
        }, {
          ranking: '5',
          score: '60',
          name: '小茗'
        }]
      };
    },
    methods: {
      submitForm(formName,form){
        this.$refs[formName].validate((valid) => {
          if(valid){
            console.log(form.privacy)
            if(form.privacy === true){
              alert('submit!');
            }
            else{
              alert('請同意隱私權條款');
            }
          }
          else{
            console.log('error submit!!');
            return false;
          }
        });
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
  margin-right:5%;
  margin-left:5%;
}
</style>

// RankingBoard