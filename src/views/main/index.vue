<template>
  <el-container class="el_box">
    <el-header class="el_header">
      <el-col :xs="4" :sm="2" :md="2" :lg="2" :xl="2">
        <span class="main_title">HR</span>
      </el-col>
      <el-col :xs="4" :sm="4" :md="2" :lg="2" :xl="2">
        <el-tooltip :content="isCollapse ? '展开菜单' : '收缩菜单'">
          <i
            :class="[isCollapse? 'el-icon-s-unfold': 'el-icon-s-fold','trgger_bottom']"
            @click="TrggerMenu"
          ></i>
        </el-tooltip>
      </el-col>
      <el-col :xs="1" :sm="12" :md="17" :lg="17" :xl="17" class="header_content"></el-col>
      <el-col :xs="15" :sm="6" :md="3" :lg="3" :xl="3" class="header_content">
        <el-dropdown trigger="click" class="header_box">
                            <span class="el-dropdown-link">
                                <img src="../../images/head.jpg" class="header_img">
                            </span>
                            <el-dropdown-menu slot="dropdown">
                              <el-dropdown-item icon="el-icon-tickets">个人中心</el-dropdown-item>
                              <el-dropdown-item icon="el-icon-news">修改密码</el-dropdown-item>
                              <el-dropdown-item icon="el-icon-back">退出</el-dropdown-item>
                            </el-dropdown-menu>
                          </el-dropdown>
      </el-col>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '':'210px'" class="el_menu">
        <el-menu
          router
          default-active="/index/system"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
        >
          <el-menu-item index="/index/system">
            <img src="../../images/sys.png" />
            <span slot="title" class="index_span">系统界面</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <img src="../../images/orginization.png" />
              <span slot="title" class="index_span">组织架构</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/department">组织管理</el-menu-item>
              <el-menu-item index="/index/position">职位管理</el-menu-item>
              <el-menu-item index="/index/postlevel">职级管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <img src="../../images/hrmanager.png" />
              <span slot="title" class="index_span">人事管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">员工档案</el-menu-item>
              <el-menu-item index="2-2">入职申请</el-menu-item>
              <el-menu-item index="2-3">离职申请</el-menu-item>
              <el-menu-item index="2-4">调动申请</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <img src="../../images/attendance.png" />
              <span slot="title" class="index_span">考勤管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">考勤日报</el-menu-item>
              <el-menu-item index="3-2">考勤月报</el-menu-item>
              <el-menu-item index="3-3">人员排班</el-menu-item>
              <el-menu-item index="3-4">可用调休假</el-menu-item>
              <el-menu-item index="3-5">可用带薪年假</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="el_main">
        <div class="el_main_contant">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
html,
body {
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.el_box {
  width: 100%;
  height: 100%;
}
.el_header {
  background: #409eff;
}
.el_menu_togger {
  line-height: 60px;
}
.header_content {
  height: 60px;
  line-height: 60px;
  color:#fff;

}
.el_menu ul {
  border: none;
}
.index_span {
  padding-left: 10px;
}
.trgger_bottom {
  font-size: 36px;
  color: #fff;
  line-height: 60px;
  cursor: pointer;
}
.el_main {
  background: #eef5f9;
  padding: 6px;
}
.el_main_contant {
  background: #fff;
  height: 100%;
  min-width: 1139px;
}
.main_title {
  font-size: 36px;
  color: #fff;
  font-weight: bold;
  line-height: 60px;
}
.header_img{
    width: 45px;
    height: 45px;
    border-radius: 45px;
    border: 1px solid;
    position: absolute;
    top: 0px;
    right: 5px;
    background: #fff;
    cursor: pointer;
    box-shadow: 0px 0px 45px #f3f3f3;
}
.header_box{
  width: 60px;
  height: 60px;
  float: right;
}
</style>
<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    TrggerMenu() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>
