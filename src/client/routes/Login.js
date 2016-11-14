import React from 'react'
import logo from '../_static/images/logo.png';

export default function({}) {
  return (
<div>
  <div id="page_header">
    <div id="container_logo">
      <img src={logo} alt="" />
    </div>
  </div>

  <div class="container">
    <div class="row">

      <div class="four columns" id="login_left_col">

        <form action="/" method="post">
          <label for="login_name">Login</label>
            <input class="u-full-width" type="text" name="login_name" placeholder="Account Name" />
               <label for="login_password">Password</label>
            <input class="u-full-width" type="password" name="login_password" placeholder="Password" />
            <input class="button-primary u-full-width" type="submit" class="login_button" value="ENTER APP" />
        </form>

        <form action="/" method="post">
          <label for="create_account_name">Create Account</label>
          <input class="u-full-width" type="text" name="create_account_name" placeholder="Account Name" />
          <input class="u-full-width" type="password" name="create_account_password" placeholder="Password" />
          <input class="button-primary u-full-width" type="submit" class="login_button" value="CREATE ACCOUNT" />
        </form>

      </div>

      <div class="eight columns" id="login_right_col">
        <div class="welcome_message">
          <h1>Welcome to History at Bat!</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>

    </div>
  </div>
</div>
  )
}
