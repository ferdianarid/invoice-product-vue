<template>
       <div>
              <div class="font-sans antialiased" id="app">
                     <!-- Class Navbar -->
                     <nav class="navbar flex items-center justify-between flex-wrap  bg-transparent pb-8">
                            <!-- Brand and Logos -->
                            <div class="flex items-center flex-no-shrink mr-6">
                                   <a href="/">
                                          <img src="../static/timvoice.svg" alt="timvoicelogo" width="195px">
                                   </a>
                            </div>
                     <!-- Hamburger Component -->
                     <div class="block sm:hidden">
                            <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                            </button>
                     </div>
                     <!-- Hamburger Action -->
                     <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
                            <!-- Navigation  Links-->
                            <div class="text-sm sm:flex-grow sm:text-right">
                                   <!-- <a href="#responsive-header" class="no-underline block mt-4 sm:mx-6 sm:inline-block sm:mt-0 text-teal-lighter hover:text-green-800 mr-4">
                                   Bahasa
                                   </a> -->
                            </div>
                            <div>
                            <!-- Download Button -->
                            <!-- Register -->
                            <NuxtLink to="/auth/register" class="no-underline inline-block text-sm px-4 py-2 leading-none bg-white border-blue-800 border rounded text-blue-800  hover:border-transparent hover:bg-blue-800 hover:text-white mt-4 sm:mt-0">Register</NuxtLink>

                            <!-- Login Page -->
                            <NuxtLink to="/auth/login" class="no-underline inline-block text-sm px-4 py-2 leading-none bg-white border-blue-800 border rounded text-blue-800  hover:border-transparent hover:bg-blue-800 hover:text-white mt-4 sm:mt-0">Login</NuxtLink>

                            <!-- Bahasa / Language -->
                            <a href="#" class="no-underline inline-block text-sm px-4 py-2 leading-none bg-white border-blue-800 border rounded text-blue-800  hover:border-transparent hover:bg-blue-800 hover:text-white mt-4 sm:mt-0">English</a>
                            </div>
                     </div>
                     </nav>
              </div>       
       </div>
</template>

<script>
export default {
       name: "NavbarAuth",
       data() {
              return {
                     open: false,
              }
       },
       methods: {
              toggle() {
                     this.open = !this.open
              }
       }
}
</script>

<style></style>