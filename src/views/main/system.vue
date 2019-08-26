<template>
  <el-row :gutter="10">
    <el-col :span="8">
      <el-card class="el_card">
        <div slot="header" class="sys_header">
          <span class="sys_span">
            欢迎
            <span class="sys_user">{{username}}</span>登陆！今天也要元气满满哟~
          </span>
          <img src="../../images/head.jpg" class="sys_img" />
        </div>
        <div>
          <p>登录地址：广东深圳</p>
          <p>登录时间：{{year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second}}</p>
        </div>
      </el-card>
    </el-col>

    <el-col :span="16">
      <el-carousel type="card" class="el_carousel">
        <el-carousel-item v-for="item in imagebox" :key="item.id">
          <img :src="item.imgview" />
        </el-carousel-item>
      </el-carousel>
    </el-col>

    <el-col :span="24">
      <div id="barEcharts" style="height: 500px;padding-top: 15px"></div>
    </el-col>
  </el-row>
</template>

<style>
.el_carousel {
  height: 250px;
}
.el_card {
  height: 248px;
}
</style>

<script>

import Mock from "../../mock.js";
export default {
  
  data() {
    return {
      year: new Date().getFullYear(),
      month:
        new Date().getMonth() + 1 > 9
          ? new Date().getMonth() + 1
          : "0" + (new Date().getMonth() + 1),
      day:
        new Date().getDate() > 9
          ? new Date().getDate()
          : "0" + (new Date().getDate() + 1),
      hour: new Date().getHours(),
      minute:
        new Date().getMinutes() > 9
          ? new Date().getMinutes()
          : "0" + new Date().getMinutes(),
      second:
        new Date().getSeconds() > 9
          ? new Date().getSeconds()
          : "0" + new Date().getSeconds(),

      username: this.getUserName(),
      imagebox: [
        {
          id: "1",
          imgview: require("../../images/sea1.jpg")
        },
        {
          id: "2",
          imgview: require("../../images/sea2.jpg")
        },
        {
          id: "3",
          imgview: require("../../images/sea3.jpg")
        },
        {
          id: "4",
          imgview: require("../../images/sea4.jpg")
        }
      ]
    };
  },
  mounted() {
    this.LoadEchartsBar();
  },
  methods: {
    getUserName() {
      return this.$plugins.GetStorage("local", "currentUserName");
    },

    //加载echarts柱状图
    LoadEchartsBar() {
      let options = {
        dataset: ["name", "2016", "2017", "2018", "2019"],
        source: Mock.barsource
      };
      this.$plugins.LoadEchartBars(
        this,
        document.getElementById("barEcharts"),
        options
      );
    },
  }
};
</script>

<style>
:root {
  --blue: dodgerblue;
  --white: #fff;
  --red: #f56c6c;
  --black: #101010;
  --gray: #f3f3f3;
}
.sys_img {
  width: 45px;
  height: 45px;
  border-radius: 45px;
  border: 1px solid;
  top: 0px;
  right: 5px;
  background: var(--white);
  cursor: pointer;
  box-shadow: 0px 0px 45px (var(--gray));
}
.sys_span {
  float: left;
  line-height: 51px;
}
.sys_user {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    to left,
    var(--blue),
    var(--white),
    var(--red),
    var(--gray)
  );
  animation: hue 2s linear infinite;
  font-weight: 800;
  font-size: 24px;
}
</style>