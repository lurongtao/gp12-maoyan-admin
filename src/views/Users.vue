<template>
  <div>
    <!-- Menu Toggle Button -->
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
      <!-- hidden-xs hides the username on small devices so only the image appears. -->
      <template v-if="!isSignin">
        <span class="hidden-xs" id="btn-signin" @click="handleEnterClick('signin')">登录</span>
        <span class="hidden-xs" id="btn-signup" @click="handleEnterClick('signup')">注册</span>
      </template>
      <template v-else>
        <img src="/images/user2-160x160.jpg" class="user-image" alt="User Image">
        <span>你好，{{username}}</span>
      </template>
    </a>
    <ul class="dropdown-menu">
      <!-- The user image in the menu -->

      <template v-if="!isSignin">
        <li class="user-header">
          <div class="box box-info">
            <!-- form start -->
            <form class="form-horizontal" id="user-form">
              <div class="box-body">
                <div class="form-group">
                  <label for="inputEmail3" class="col-sm-4 control-label">用户名：</label>

                  <div class="col-sm-8">
                    <input type="email" v-model="username" class="form-control" id="inputEmail3" placeholder="请输入用户名">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputPassword3" class="col-sm-4 control-label">密码：</label>

                  <div class="col-sm-8">
                    <input type="password" v-model="password" class="form-control" id="inputPassword3" placeholder="请输入密码">
                  </div>
                </div>
                
              </div>
            </form>
          </div>
        </li>
      </template>
      
      <template v-else>
        <li class="user-header">
          <img src="/public/images/user2-160x160.jpg" class="img-circle" alt="User Image">
          <p>
            欢迎您：{{username}}
            <small>Member since Nov. 2012</small>
          </p>
        </li>
      </template>
      
      <!-- Menu Footer-->
      <li class="user-footer">
        <div class="pull-left">
          <a href="#" class="btn btn-default btn-flat">关闭</a>
        </div>

        <div class="pull-right" @click="handleSubmit" v-if="!isSignin">
          <a href="#" class="btn btn-default btn-flat">确定</a>
        </div>
        
        <div class="pull-right" @click="handleSignout" id="btn-signout" v-else>
          <a href="#" class="btn btn-default btn-flat">退出</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import http from '../utils/http'
export default {
  data() {
    return {
      isSignin: false,

      username: '',
      password: '',

      type: ''
    }
  },

  async mounted() {
    let result = await http.get({
      url: '/api/users/isSignin',
      headers: {
        'X-Access-token': localStorage.getItem('X-Access-Token')
      }
    })
    if (result.ret) {
      this.isSignin = true
      this.username = result.data.username
    }
  },
  
  methods: {
    handleEnterClick(type) {
      this.type = type
      this.username = ''
      this.password = ''
    },

    async handleSubmit() {
      let result = await http.post({
        url: '/api/users/' + this.type,
        data: {
          username: this.username,
          password: this.password
        }
      })

      if (result.data.ret) {
        this.isSignin = true
        this.username = result.data.data.username

        localStorage.setItem('X-Access-Token', result.headers['x-access-token'])
      } else {
        alert(result.data.data.msg)
      }
    },

    handleSignout() {
      localStorage.removeItem('X-Access-Token')
      this.isSignin = false
      this.$router.replace('/')
    }
  },
}
</script>

<style lang="stylus">
#user-menu {
  height: 50px;
  > div {
    > a {
      padding: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      span {
        padding: 0 5px;
      }
      color: #fff !important;
    }
  }
}

.hidden-xs {
  display: inline-block;
  height: 100%;
  line-height: 50px;
}
</style>