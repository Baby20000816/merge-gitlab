<template>
  <div>
    <van-button
      type="primary"
      @click="signIn"
    >登录</van-button>
    <van-button
      type="primary"
      @click="register"
    >注册</van-button>
    <h1>登录</h1>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    //   模拟登录 获得 token
    signIn() {
      localStorage.setItem('token', '12345678')
      console.log(1)
      this.$router.push('/')
    },
    register() {
      this.$router.push('/register')
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss"></style>
