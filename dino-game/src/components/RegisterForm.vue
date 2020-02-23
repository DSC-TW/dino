<template>
  <div id="app">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="性別" prop="gender">
        <el-radio-group v-model="ruleForm.gender">
          <el-radio-button label="男"></el-radio-button>
          <el-radio-button label="女"></el-radio-button>
          <el-radio-button label="其他"></el-radio-button>
          <el-radio-button label="不願透漏"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="學校" prop="school">
        <el-input v-model="ruleForm.school"></el-input>
      </el-form-item>
      <el-form-item label="系級/年級" prop="grade">
        <el-input v-model="ruleForm.grade"></el-input>
      </el-form-item>
      <el-form-item label="" prop="privacy">
        <!-- <el-input v-model="ruleForm.privacy"></el-input> -->
        <el-checkbox v-model="ruleForm.privacy">我同意<a href="https://google.com">隱私權條款</a></el-checkbox>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" icon="el-icon-check" @click="submitForm('ruleForm',ruleForm)">送出</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          gender: '',
          email: '',
          school: '',
          grade: '',
          privacy: false
        },
        rules: {
          name: [
            { required: true, message: '請輸入姓名', trigger: 'blur' }
          ],
          gender: [
            { required: true, message: '請選擇性別', trigger: 'change' }
          ],
          email: [
            { required: true, message: '請輸入 Email', trigger: 'blur' }
          ],
          school: [
            { required: true, message: '請輸入學校', trigger: 'blur' }
          ],
          grade: [
            { required: true, message: '請輸入系級/年級', trigger: 'blur' }
          ],
          privacy: [
            { required: true, message: '請同意隱私權條款', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName,form){
        this.$refs[formName].validate((valid) => {
          if(valid){
            console.log(form.privacy)
            if(form.privacy === true){
              alert('submit!');

              this.$http.post('https://littlechintw.github.io/sampledata/register')
              .then((response) => {
                console.log(response)
              })
              .catch((response) => {
                console.log(response)
              })
              // .finally(() => {
              //   /* 不論成功失敗，都做些事 */
              // });

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

// RegisterForm