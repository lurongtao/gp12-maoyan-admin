<template>
  <div>
    <!-- Menu Toggle Button -->
<a href="#" class="dropdown-toggle" data-toggle="dropdown">
  <!-- hidden-xs hides the username on small devices so only the image appears. -->

  <span class="hidden-xs" id="btn-signin">登录</span>
  <span class="hidden-xs" id="btn-signup">注册</span>

  <!-- The user image in the navbar-->
  <img src="/public/images/user2-160x160.jpg" class="user-image" alt="User Image">
  <span>你好，{{username}}</span>

</a>
<ul class="dropdown-menu">
  <!-- The user image in the menu -->

  <li class="user-header">
     <div class="box box-info">
      <!-- form start -->
      <form class="form-horizontal" id="user-form">
        <div class="box-body">
          <div class="form-group">
            <label for="inputEmail3" class="col-sm-4 control-label">用户名：</label>

            <div class="col-sm-8">
              <input type="email" name="username" class="form-control" id="inputEmail3" placeholder="请输入用户名">
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-4 control-label">密码：</label>

            <div class="col-sm-8">
              <input type="password" name="password" class="form-control" id="inputPassword3" placeholder="请输入密码">
            </div>
          </div>
          
        </div>
      </form>
    </div>
  </li>

  <li class="user-header">
    <img src="/public/images/user2-160x160.jpg" class="img-circle" alt="User Image">
    <p>
      欢迎您：{{username}}
      <small>Member since Nov. 2012</small>
    </p>
  </li>


  <!-- Menu Footer-->
  <li class="user-footer">
    <div class="pull-left">
      <a href="#" class="btn btn-default btn-flat">关闭</a>
    </div>

    <div class="pull-right" id="btn-submit">
      <a href="#" class="btn btn-default btn-flat">确定</a>
    </div>

    <div class="pull-right" id="btn-signout">
      <a href="#" class="btn btn-default btn-flat">退出</a>
    </div>

  </li>
</ul>
  </div>
</template>