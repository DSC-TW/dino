<template>
  <div id="app">
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          姓名：
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple-light">
          <el-input v-model="form.name" placeholder="姓名" value="form.name" name="name"></el-input>
        </div>
      </el-col>
    </el-row>
    <br><br>

    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          性別：
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple-light">
          <el-radio-group v-model="form.gender">
            <el-radio-button label="男" id="male" value="male"></el-radio-button>
            <el-radio-button label="女" id="female" value="female"></el-radio-button>
            <el-radio-button label="不願透漏" id="DeclineToAnswer" value="DeclineToAnswer"></el-radio-button>
          </el-radio-group>
        </div>
      </el-col>
    </el-row>
    <br><br>

    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          Email：
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple-light">
          <el-input v-model="form.email" placeholder="Email" value="form.email" name="email"></el-input>
        </div>
      </el-col>
    </el-row>
    <br><br>

    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          學校：
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple-light">
          <el-input v-model="form.school" placeholder="學校" value="form.school" name="school"></el-input>
        </div>
      </el-col>
    </el-row>
    <br><br>

    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          系級/年級：
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple-light">
          <el-input v-model="form.grade" placeholder="系級/年級" value="form.grade" name="grade"></el-input>
        </div>
      </el-col>
    </el-row>
    <br><br>

    <el-checkbox v-model="form.privacy">我同意<a href="https://google.com">隱私權條款</a></el-checkbox>
    <br><br>

    <el-button type="primary" icon="el-icon-check" v-on:click="check(form)">送出</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form:{
          name: '',
          gender: '',
          email: '',
          school: '',
          grade: '',
          privacy: false
        }
      }
    },
    methods: {
      check(form) {
        let mess = "提示：\n"
        let error = 0
        if(form.name===''){
          mess += "姓名尚未輸入\n"
          error++
        }
        if(form.gender===''){
          mess += "性別尚未選擇\n"
          error++
        }
        if(form.email===''){
          mess += "Email 尚未輸入\n"
          error++
        }
        if(form.school===''){
          mess += "學校尚未輸入\n"
          error++
        }
        if(form.grade===''){
          mess += "系級/年級尚未輸入\n"
          error++
        }
        if(form.privacy===false){
          mess += "未同意隱私權條款\n"
          error++
        }
        if(error===0){
          console.log(form)

          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          setTimeout(() => {
            loading.close();
          }, 2000);

        }
        else alert(mess)
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

// RegisterForm