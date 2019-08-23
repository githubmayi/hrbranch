<template>
  <el-row :gutter="10">
    <el-col :span="8" >
        <el-card class="el_card">
            <div slot="header">
                您好，欢迎登陆！
            </div>
            <div>
                <p>上次登录地址：广东深圳</p>
                <p>登录时间：{{datetime}}}</p>
            </div>
        </el-card>
    </el-col>

    <el-col :span="16">
      <el-carousel type="card" class="el_carousel">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-col>

    <el-col :span="12">
        echars_bar
    </el-col>
    <el-col :span="12">
        echars_line
    </el-col>
  </el-row>
</template>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el_carousel{
    height: 200px;
}
.el_card{
    height: 198px;
}
</style>

<script>
export default {
    data () {
        return {
            datetime:new Date()
        }
    }
}
</script>>