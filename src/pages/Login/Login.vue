<template>
  <el-row class="loginConteiner">
    <el-col class="backgroundstart">
      <div class="fromtable">
        <el-form
          :model="LoginForm"
          :rules="rules"
          ref="loginForm"
          style="display:inline-block;vertical-align:middle"
        >
          <el-form-item>
            <span class="companyName">智慧新能源管理平台</span>
          </el-form-item>
          <el-form-item prop="name">
            <el-input
              v-model="LoginForm.name"
              placeholder="登录名/邮箱/手机号"
              class="inputwidth inputusericon"
            >
              <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="pass" :error="showError">
            <el-input
              v-model="LoginForm.pass"
              placeholder="请输入密码"
              @keyup.native.enter="submitForm()"
              type="password"
              class="inputwidth inputpassword"
            >
              <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="button" @click.native="submitForm" value="登录" class="Enter"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="statement">©©2018 深圳市综合能源有限公司备案号: 粤ICP备17146301号-2</div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      LoginForm: {
        name: "",
        pass: ""
      },
      showError: null
    };
  },
  computed: {
    rules() {
      return {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pass: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      };
    }
  },
  methods: {
    submitForm() {
      this.showError = null;
      let user = { name: this.LoginForm.name };
      sessionStorage.setItem("user", JSON.stringify(user));
      var parms = {
        userAccount: this.LoginForm.name,
        userPassword: this.LoginForm.pass
      };
      this.$router.push("/");
      //   this.$refs['loginForm'].validate((valid) => {
      //       if(valid) {
      //           let user = { name: this.LoginForm.name }
      //                userlogin(qs.stringify(parms)).then(res=>{
      //                       console.log(res)
      //                     if(res.data.code ==0){
      //                               sessionStorage.setItem('user', JSON.stringify(user))//判断是不是在登录

      //                            if(res.data.data.user.userType ===0){
      //                                 this.$router.push('/Firstpage')
      //                            }else if(res.data.data.user.userType===1){
      //                                 this.$router.push('/Managefristpage')
      //                            }

      //                     }else{

      //                         this.showError="用户名或密码错误"

      //                     }
      //            })
      //       } else {
      //           return false;
      //        }
      //   })
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.loginConteiner {
  position: relative;
  height: 100%;
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  background: #63bad8;
  //  background: url(../../assets/img/loginnackurl.jpg) no-repeat;
  overflow: hidden;
  background-size: cover;
  .fromtable {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 300px;
    margin-top: -150px;
    margin-left: -200px;
    background-color: rgba(22, 24, 67, 0.3);
    border: 1px solid #f2f2f2;
    border-radius: 10px;
    text-align: center;
    line-height: 300px;
    .inputwidth {
      width: 240px;
      background: #fff;
      border-radius: 5px;
    }
    .companyName {
      color: #fff;
      font-size: 20px;
    }
  }
  .statement {
    color: #fff;
    text-align: center;
    position: fixed;
    bottom: 20px;
    width: 100%;
    font-size: 20px;
  }
}
</style>
<style >
.Enter .el-input__inner {
  cursor: pointer;
  background: #1cc6e9;
  color: #fff;
}
</style>


