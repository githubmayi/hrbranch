<template>
  <div class="login_main">
    <el-row  class="login_content">
      <el-col :xs="18" :sm="10" :md="8" :xl="8" :lg="6" class="el_col">
        <el-form :label-position="labelposition" label-width="70px">
          <div class="login_title">
            <span class="login_span">人力资源管理系统</span>
            <div class="login_img">
              <img src="../../../src/images/pen.png" alt />
            </div>
          </div>

          <el-form-item label="账号">
            <el-input v-model="username" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <div class="login_bottom">
            <div class="login_rember">
              <el-switch v-model="rember" active-color="#13ce66" active-text="记住密码"></el-switch>
            </div>
            <div class="login_button">
              <el-button type="primary" @click="login">登录</el-button>
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
      username: "admin",
      password: "123456",
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
          type: "warning",
          showClose: true
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
              this.$router.push({path: '/index'});
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

<style src="../../css/login.css">