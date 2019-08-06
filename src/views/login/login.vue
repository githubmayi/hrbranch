<template>
  <div id="login_main">
    <el-row  id="login_content">
      <el-col :xs="20" :sm="10" :md="8" :xl="8" :lg="8" id="el_col">
        <el-form :label-position="labelposition" label-width="70px">
          <div id="login_title">
            <span id="login_span">人力资源管理系统</span>
            <div id="login_img">
              <img src="../../../src/images/pen.png" alt />
            </div>
          </div>

          <el-form-item label="账号">
            <el-input v-model="username" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <div id="login_bottom">
            <div id="login_rember">
              <el-switch v-model="rember" active-color="#13ce66" active-text="记住密码"></el-switch>
            </div>
            <div id="login_button">
              <el-button type="success" @click="login">登录</el-button>
            </div>
          </div>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import Mock from "../../mock.js";
export default {
  data() {
    const _self = this;
    return {
      labelposition: "left",
      username: "",
      password: "",
      rember: true
    };
  },
  // mockjs创建登录数据存放在localstorage
  beforeCreate() {
    if (!this.$plugins.GetStorage("localStorage", "loginlist")) {
      this.$plugins.SetLocalStorage(
        "loginlist",
        JSON.stringify(Mock.loginlist)
      );
    }
  },
  created() {
    document.onkeydown = e => {
      var key = window.event.keyCode;
      if (key == 13) {
        this.login();
      }
    };
  },
  methods: {
    login() {
      if (!this.username || !this.password) {
        this.$message({
          message: "请输入用户名和密码！",
          type: "warning"
        });
      } else {
        debugger;
        this.$axios
          .post(this.$const.login, {
            username: this.username,
            password: this.password
          })
          .then(res => {
            if (
              res.data.length === 0
                ? false
                : this.username == res.data[0].username &&
                  this.password == res.data[0].password
            ) {
              this.$message({
                message: "登录成功！",
                type: "success"
              });
            } else {
              this.$message({
                message: "账号或密码错误！",
                type: "error"
              });
            }
          });
      }
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
html{
  height: 100%;
}
body {
  height: 100%;
}
#login_main {
  width: 100%;
  height: 100%;
  background: url("../../../src/images/login.jpg") no-repeat;
  background-size: cover;
}
#login_content {
  height: 100%;
}

#el_col {
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 6px;
  padding: 28px 10px 10px 10px;
  top: 50%;
  position: relative;
  left: 50%;
  transform: translate(-50%,-50%);
}

#login_title {
  margin-bottom: 28px;
}
#login_span {
  float: left;
  font-size: 28px;
}
#login_img {
  text-align: right;
}
#login_bottom {
  margin-bottom: 12px;
}
#login_rember {
  margin-top: 6px;
  float: left;
}
#login_button {
  text-align: end;
}
</style>
