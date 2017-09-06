<nav class="navbar navbar-default" role="navigation" style="margin-bottom: 0">
    <div class="navbar-header">

        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="<?php echo base_url(); ?>#/">Apsilon App v2.0</a>

    </div>
   
<?php if(empty($_SESSION['username'])) {?>

<ul class="nav navbar-top-links navbar-right">    <!-- /.dropdown -->
    <li>
            <a data-toggle="modal" data-target="#login-modal"> <i class="fa fa-sign-in"></i> Login</a>

   
   <!-- popup for login and signup -->
 
<div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
          <div class="modal-dialog">
                <div class="log-section">
                    <h1>Login to Your Account</h1><br>
                    <p class="text-success" ng-bind="loginmsg"></p>
                    <p class="text-danger" ng-bind="loginerror"></p>
                  <form name="loginForm" action="<?php echo base_url(); ?>login/test" method="post"  novalidate>
                        <!-- username -->
                        <div class="form-group" ng-class="{ 'has-error' : loginForm.username.$error || loginForm.username.$error.minlength || loginForm.username.$error.maxlength || loginForm.username.$error.pattern }">
                            <input type="text" name="username" class="form-control" placeholder="Mobile Number" ng-model="user.username" ng-minlength="10" ng-maxlength="10" ng-pattern="/^[7-9][0-9]{9}$/" required>
                            <p ng-show=" loginForm.username.$error.minlength || loginForm.username.$error.maxlength || loginForm.username.$error.pattern" class="help-block">Enter Registered Mobile Number.</p>
                        </div>
                                      <!-- password -->
                    <div class="form-group" ng-class="{ 'has-error' : userForm.u_password.$invalid && !userForm.u_password.$pristine }">
                        <input type="password" name="u_password" class="form-control" placeholder="Password" ng-model="user.u_password" ng-minlength="6" ng-maxlength="8" required>
                        <p ng-show="userForm.u_password.$invalid && !userForm.u_password.$pristine || userForm.u_password.$error.minlength || userForm.u_password.$error.maxlength " class="help-block">Password must be 6 to 8 Characters.</p>
                    </div>
                    <input type="submit" value="Submit" class="btn btn-success btn-block" ng-disabled="loginForm.$invalid"   style="color:#fff">
                  </form>
                    <!--  <div class="login-help text-center" >
            
                    <a href="#/forgotpassword" ><span class="text-success text-center">Forgot Password</span></a> 
                  </div> -->
                  <div class="login-help text-center">
                  New User ?
                    <a data-toggle="modal" data-target="#signup-modal" id="signup" ><span class="text-success text-center">Register here</span></a> 
                  </div>
                  
                </div>
            </div>
          </div>
          
                    
<div class="modal fade" id="signup-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;" ng-show="verify">
          <div class="modal-dialog">
                <div class="log-section">
                
                    <h1>Create New Account</h1><br>
        <form name="userForm" ng-submit="" novalidate>
    <div ng-hide ="IsHide">
    <p class="text-danger">{{mExist}}</p>
        <!-- NAME -->
        <div class="form-group" ng-class="{ 'has-error' : userForm.name.$invalid && !userForm.name.$pristine }">
            <input type="text" name="name" class="form-control" placeholder="Name" ng-model="user.name" required>
            <p ng-show="userForm.name.$invalid && !userForm.name.$pristine" class="help-block">You name is required.</p>
        </div>
      
        <!-- Mobile Number -->
        <div class="form-group" ng-class="{ 'has-error' : userForm.mobile.$error.minlength || userForm.mobile.$error.maxlength || userForm.mobile.$error.pattern }">
            <input type="text" name="mobile" class="form-control" placeholder="Mobile Number" ng-model="user.mobile" ng-minlength="10" ng-maxlength="10" ng-pattern="/^[7-9][0-9]{9}$/" required>
            <p ng-show="userForm.mobile.$error.minlength || userForm.mobile.$error.maxlength || userForm.mobile.$error.pattern" class="help-block">Enter 10 Digit Valid Mobile Number.</p>
        </div>
        
        <!-- EMAIL -->
        <div class="form-group" ng-class="{ 'has-error' : userForm.email.$invalid && !userForm.email.$pristine }">
            <input type="email" name="email" class="form-control" placeholder="Email" ng-model="user.email" required>
            <p ng-show="userForm.email.$invalid && !userForm.email.$pristine" class="help-block">Enter a valid email.</p>
        </div>
          <!-- password -->
        <div class="form-group" ng-class="{ 'has-error' : userForm.u_password.$invalid && !userForm.u_password.$pristine }">
            <input type="password" name="u_password" class="form-control" placeholder="Password" ng-model="user.u_password" ng-minlength="6" ng-maxlength="8" required>
            <p ng-show="userForm.u_password.$invalid && !userForm.u_password.$pristine || userForm.u_password.$error.minlength || userForm.u_password.$error.maxlength " class="help-block">Password must be 6 to 8 Characters.</p>
        </div>
        
        
        <button type="submit" class="btn btn-success btn-block" ng-disabled="userForm.$invalid"  ng-click="signup(user); ShowHide()">Request OTP</button>
                 <div class="login-help text-center">
                  Already a member ?
                    <a data-dismiss="modal"><span class="text-success text-center">Login</span></a> 
                  </div>
                  
        </div>
        <!-- OTP Validation -->
        <div ng-show = "IsVisible">
        <p class="text-success">{{otpmsg}}</p>
        <div class="form-group" ng-class="{ 'has-error' : userForm.otp.$invalid && !userForm.otp.$pristine }">
            <input type="text" name="otp" class="form-control" placeholder="OTP" ng-model="user.otp" >
            <p ng-show="userForm.otp.$error.minlength || userForm.otp.$error.maxlength " class="help-block">Enter OTP</p>
        </div>
        <button type="submit" class="btn btn-success btn-block" ng-disabled="userForm.$invalid"  ng-click="verify(user)">Submit</button>
        <p>We have sent OTP to your mobile number</p>
        </div>
    </form>
                    
                </div>
            </div>
          </div>
   <!-- Login and Signup popup end -->
  
</div>
      
        <!-- /.dropdown-user -->
    </li>
    <!-- /.dropdown -->
</ul>

<?php }else{?>
<ul class="nav navbar-top-links navbar-right">    <!-- /.dropdown -->
    <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown">
            <i class="fa fa-user fa-fw"></i> <?php echo $_SESSION['username'];?> <i class="fa fa-caret-down"></i>
        </a>
        <ul class="dropdown-menu dropdown-user">
            <li><a href="<?php echo base_url(); ?>login/logout"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
            </li>
        
        </ul>
        <!-- /.dropdown-user -->
    </li>
    <!-- /.dropdown -->
</ul>
<?php }?>






</nav>
