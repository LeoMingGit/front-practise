<template>
  <div id="container">
    <div id="children">
      <div id="title">
        <h1>电商后台管理系统</h1>
      </div>
      <div class="input">
        <el-input
          v-model="name"
          prefix-icon="el-icon-user"
          placeholder="请输入用户名"
        ></el-input>
      </div>
      <div class="input">
        <el-input
          v-model="password"
          prefix-icon="el-icon-lock"
          placeholder="请输入密码"
          auto-complete="new-password"
          show-password
        ></el-input>
      </div>
      <div class="input">
        <el-button
          @click="login"
          style="width: 500px"
          type="primary"
          :disabled="disabled"
          >登录</el-button
        >
        <!-- <img src="../../assets/logo.png"> -->
      </div>
    </div>
  </div>
</template>

<script>
import Storage from "../../tools/Storage";
import { ElMessage } from "element-plus";

export default {
  name: "Login",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  mounted() {
    this.name = "";
    this.password = "";
  },
  computed: {
    disabled() {
      return this.name.length == 0 || this.password.length == 0;
    },
  },
  methods: {
    login() {
      Storage.commit("registUserInfo", {
        name: this.name,
        password: this.password,
      });
      ElMessage({
        message: "登录成功",
        type: "success",
        duration: 1500,
      });
      setTimeout(() => {
        this.$router.push({ name: "home" });
      }, 1500);
    },
  },
};
</script>

<style scoped>
#container {
    background: #595959;
    display: flex;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/login_bg.jpg"); 
}
#children {
    display: flex;
    width: 100%;
    height: 100%;
    /* border: 1px yellow solid; */
    background: white;
    margin: 2px;
    text-align: center;
    border-radius: 20px;
    flex-direction: column;
    justify-content: flex-start;
}
#title {
  text-align: center;
  color: red;
  margin-top: 200px;
}

.input {
  margin: 20px auto;
  width: 500px;
}
</style>