<script></script>
<template>
  <div>
    <div class="navbar bg-base-100 shadow-sm fixed">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabIndex="{0}" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li><router-link to="/">HelloWorld</router-link></li>
            <li><router-link to="/page2">TheWelcome</router-link></li>
          </ul>
        </div>
        <a class="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><router-link to="/">HelloWorld</router-link></li>

          <li><router-link to="/page2">TheWelcome</router-link></li>
        </ul>
      </div>
      <div class="navbar-end">
        <a class="btn text-red-300 hover:text-red-500">Login</a>
      </div>
    </div>

   
    <router-view />
  
  </div>
</template>

<style lang="scss" scoped></style>
