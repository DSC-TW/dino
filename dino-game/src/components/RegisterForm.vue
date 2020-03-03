<template>
  <div id="app">
    <div v-show="qrcode_show">
      <h3>{{ test }}</h3>
      <qr-code :text="qrcode"></qr-code>
      <h4>可以利用截圖功能將此 QrCode 儲存噢！</h4>
    </div>
    <div v-show="form_show">
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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        test: "N/A",
        qrcode: '000',
        qrcode_show: false,
        form_show: true,
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
              console.log(form)
              
              this.$http.post('https://jamfly.dev/api/user',{name:form.name, gender:form.gender, mail:form.email, school:form.school, department:form.grade, is_argee_privacy:form.privacy})
              .then((response) => {
                // console.log(response)
                // console.log(response.body)
                console.log(response.body.ID)
                this.$cookie.set('userID', response.body.ID, 1);
                this.test = response.body.ID
                this.qrcode = response.body.ID
                this.qrcode_show = true
                this.form_show = false
                let alert_text = 'Your Token is ' + this.test
                alert(alert_text);
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