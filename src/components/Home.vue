<template>
  <el-container>
    <el-header>
      <el-dropdown style="float:right" @command="handleCommand">
        <!-- <i class="el-icon-setting" style="margin-right: 15px"></i> -->
        <el-button icon="el-icon-user-solid" size="small">潘高敬</el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="退出">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">地图首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <!-- <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>-->
        </el-submenu>
        <el-menu-item index="3">系统设置</el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect() {
      //选择
    },
    handleCommand(command) {
      //退出
      console.log(command);
      if (command == "退出") {
        this.$router.push("/login");
      }
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.el-container {
  height: 100%;
  .el-header,
  .el-footer {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    height: 100%;
    .el-menu {
      height: 100%;
    }
  }
}
.el-menu-demo {
  width: 80%;
}
</style>


