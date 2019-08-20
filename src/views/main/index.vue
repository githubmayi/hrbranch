<template>
  <el-container class="el_box">
    <el-header class="el_header"> 
      <el-radio-group v-model="isCollapse" class="el_menu_togger">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
    </el-header>
    <el-container>
      <el-aside width="200px" class="el_menu">
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <img src="../../images/orginization.png">
              <span slot="title" class="index_span">组织架构</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">组织管理</el-menu-item>
              <el-menu-item index="1-2">职位管理</el-menu-item>
              <el-menu-item index="1-3">职级管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <img src="../../images/hrmanager.png">
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
              <img src="../../images/attendance.png">
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
      <el-main class="el_main">Main</el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
html,
body {
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.el_menu{
  border: none;
}
.el_header {
  background:#409eff;
}
.el_box {
  width: 100%;
  height: 100%;
}
.el_menu_togger{
  line-height: 60px;
}
.index_span{
  padding-left: 10px;
}
</style>
<script>
export default {
  data () {
    return {
      isCollapse: true
    }
  },
}
  
</script>