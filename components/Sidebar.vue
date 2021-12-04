<template lang="">
       <!-- Sidebar -->
              <div class="sidebar w-[240px] bg-[#202E63] pb-[67rem] px-8">
                     <!-- Invoice Logo -->
                     <div class="py-8 border-b border-opacity-80 border-white">
                            <NuxtLink to="/">
                                   <img src="../static/timvoice-white.svg" alt="invoiceLogo">
                            </NuxtLink>
                     </div>
                     <!-- Dashboard -->
                     <div class="mt-7 bg-[#32489A] py-[10px] px-3 rounded-md flex items-center transition-all hover:cursor-pointer">
                            <img src="../static/iconDashboard/pieChart.svg" width="20px" alt="pie-chart">
                            <h1 class="font-bold pl-[10px] text-white text-[15px]">Dashboard</h1>
                     </div>
                     <!-- Clients -->
                     <div class="mt-1 bg-none hover:bg-[#32489A] hover:font-bold transition-all hover:cursor-pointer py-[10px] px-3 rounded-md flex items-center">
                            <img src="../static/iconDashboard/users.svg" width="20px" alt="users">
                            <h1 class="pl-[10px] text-white  text-[15px]">Clients</h1>
                     </div>
                     <!-- Projects -->
                     <div class="mt-1 bg-none hover:bg-[#32489A] hover:font-bold transition-all hover:cursor-pointer py-[10px] px-3 rounded-md flex items-center">
                            <img src="../static/iconDashboard/folder.svg" width="20px" alt="folders">
                            <h1 class="pl-[10px] text-white  text-[15px]">Projects</h1>
                     </div>
                     <!-- Proposals -->
                     <div class="mt-1 bg-none hover:bg-[#32489A] hover:font-bold transition-all hover:cursor-pointer py-[10px] px-3 rounded-md flex items-center">
                            <img src="../static/iconDashboard/news.svg" width="20px" alt="news">
                            <h1 class="pl-[10px] text-white text-[15px]">Proposals</h1>
                     </div>
                     <!-- Contracts -->
                     <div class="mt-1 bg-none hover:bg-[#32489A] hover:font-bold transition-all hover:cursor-pointer py-[10px] px-3 rounded-md flex items-center">
                            <img src="../static/iconDashboard/documents.svg" width="20px" alt="documents">
                            <h1 class="pl-[10px] text-white text-[15px]">Contracts</h1>
                     </div>
                     <!-- Invoices -->
                     <div class="mt-1 bg-none hover:bg-[#32489A] hover:font-bold transition-all hover:cursor-pointer py-[10px] px-3 rounded-md flex items-center">
                            <img src="../static/iconDashboard/reports.svg" width="20px" alt="reports">
                            <h1 class="pl-[10px] text-white text-[15px]">Invoices</h1>
                     </div>
                     <!-- History -->
                     <div class="mt-1 bg-none hover:bg-[#32489A] hover:font-bold transition-all hover:cursor-pointer py-[10px] px-3 rounded-md flex items-center">
                            <img src="../static/iconDashboard/clock.svg" width="20px" alt="history">
                            <h1 class="pl-[10px] text-white text-[15px]">History</h1>
                     </div>
                     <!-- Supports -->
                     <div class="mt-1 bg-none hover:bg-[#32489A] hover:font-bold transition-all hover:cursor-pointer py-[10px] px-3 rounded-md flex items-center">
                            <img src="../static/iconDashboard/questions.svg" width="20px" alt="questions">
                            <h1 class="pl-[10px] text-white text-[15px]">Support</h1>
                     </div>
                     <!-- Settings -->
                     <div class="mt-1 bg-none hover:bg-[#32489A] hover:font-bold transition-all hover:cursor-pointer py-[10px] px-3 rounded-md flex items-center">
                            <img src="../static/iconDashboard/settings.svg" width="20px" alt="settings">
                            <h1 class="pl-[10px] text-white text-[15px]">Settings</h1>
                     </div>
              </div>
</template>
<script>
export default {
       name: "Sidebar"
}
</script>
<style lang="">
       
</style>