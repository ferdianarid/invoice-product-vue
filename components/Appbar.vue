<template lang="">
       <!-- Application Bar -->
       <div class="app-bar py-7 px-16 shadow-shadow-3 bg-white flex justify-between items-center">
              <div class="w-[45%] flex items-center">
                     <!-- Form Search -->
                     <form class="w-[80%]" method="GET">
                            <div class="relative text-gray-600 focus-within:text-gray-400">
                                   <span class="absolute inset-y-0 left-0 flex items-center pl-2 pr-[19px]">
                                          <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                                                 <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                          </button>
                                   </span>
                                   <input type="search" name="query" class="w-full border border-gray-200 py-2 px-4 text-sm text-white bg-white rounded-[4px] pl-10 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Cari" autocomplete="on">
                            </div>
                     </form>
              </div>
              <div class="w-[55%] h-12 flex items-center justify-between">
                     <!-- Create button -->
                     <div class="w-[123px]">
                            <NuxtLink to="/admin/dashboard/create" class="text-center font-bold ml-0 md:ml-1 no-underline flex items-center px-4 py-[10px] leading-none bg-blue-800 border-blue-800 border rounded text-white hover:border-transparent hover:bg-white hover:text-blue-800 mt-4 sm:mt-0">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                 <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                                          </svg>
                                          <NuxtLink to="" class="text-lg font-bold pl-1">Buat</NuxtLink>
                            </NuxtLink>
                     </div>
                     <!-- localization language -->
                     <div class="w-[93px] ml-4">
                            <NuxtLink to="/auth/login" class="text-center border border-gray-200 font-bold ml-0 md:ml-1 no-underline flex items-center px-4 py-[10px] leading-none  rounded bg-white  mt-4 sm:mt-0">
                                          <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6 0.6C5.04183 0.6 5.4 0.958172 5.4 1.4V2.2H5.98577C5.99519 2.19983 6.00464 2.19983 6.01411 2.2H7.8C8.24183 2.2 8.6 2.55817 8.6 3C8.6 3.44183 8.24183 3.8 7.8 3.8H6.6624C6.37307 5.14998 5.9046 6.43323 5.28323 7.6237C5.51585 7.90703 5.7597 8.18082 6.01413 8.44438C6.32099 8.76226 6.31205 9.26872 5.99417 9.57558C5.67629 9.88244 5.16983 9.8735 4.86297 9.55562C4.71169 9.3989 4.56374 9.23893 4.41923 9.07582C3.71115 10.1281 2.87509 11.0867 1.93353 11.9294C1.60431 12.2241 1.09855 12.1961 0.80389 11.8668C0.509229 11.5376 0.537246 11.0319 0.866468 10.7372C1.83694 9.8686 2.6817 8.86306 3.37047 7.75112C2.9253 7.11993 2.52693 6.45322 2.18046 5.75603C1.98383 5.36036 2.14518 4.88022 2.54084 4.68359C2.9365 4.48696 3.41665 4.64831 3.61328 5.04397C3.80016 5.42002 4.00395 5.78622 4.22368 6.14159C4.55759 5.39418 4.82597 4.61121 5.02157 3.8H1.4C0.958171 3.8 0.599998 3.44183 0.599998 3C0.599998 2.55817 0.958171 2.2 1.4 2.2H3.8V1.4C3.8 0.958172 4.15817 0.6 4.6 0.6ZM9.4 5.4C9.70302 5.4 9.98003 5.5712 10.1155 5.84223L12.5083 10.6278C12.5135 10.6377 12.5185 10.6476 12.5233 10.6577L13.3155 12.2422C13.5131 12.6374 13.353 13.1179 12.9578 13.3155C12.5626 13.5131 12.082 13.353 11.8845 12.9578L11.3056 11.8H7.49443L6.91554 12.9578C6.71795 13.353 6.23741 13.5131 5.84223 13.3155C5.44704 13.1179 5.28686 12.6374 5.48446 12.2422L6.2767 10.6577C6.28148 10.6476 6.28647 10.6377 6.29166 10.6278L8.68446 5.84223C8.81997 5.5712 9.09698 5.4 9.4 5.4ZM8.29443 10.2H10.5056L9.4 7.98885L8.29443 10.2Z" fill="#0A0A0A"/>
                                          </svg>
                                          <p class="text-lg font-bold pl-2 text-gray-900">EN</p>
                            </NuxtLink>
                     </div>
                     <!-- brief options -->
                     <div class="w-auto ml-4">
                            <img src="../static/fire.svg" alt="briefcase" width="28px">
                     </div>
                     <!-- brief options -->
                     <div class="w-auto ml-4">
                            <img src="../static/briefcase.svg" alt="briefcase" width="48px">
                     </div>
                     <!-- brief options -->
                     <div class="w-auto ml-4">
                            <img src="../static/bussiness.svg" alt="briefcase" width="48px">
                     </div>
                     <!-- profile option -->
                     <div class="w-auto ml-4">
                            <img src="../static/Avatar-Testimonial1.png" width="48px" alt="profile">
                     </div>
              </div>
       </div>
</template>
<script>
export default {
       name: "Appbar",
       components: {
       }
}
</script>
<style lang="">
       
</style>