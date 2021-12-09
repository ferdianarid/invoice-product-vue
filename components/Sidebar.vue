<template lang="">
       <!-- Sidebar -->
              <div class="sidebar fixed z-10 w-[240px] bg-[#202E63] pb-[67rem] px-8">
                     <!-- Invoice Logo -->
                     <div class="py-8 border-b border-opacity-80 border-white">
                            <NuxtLink to="/">
                                   <img src="../static/timvoice-white.svg" alt="invoiceLogo">
                            </NuxtLink>
                     </div>
                     <!-- Dashboard -->
                     <NuxtLink to="/admin/dashboard" class="mt-7 bg-[#32489A] py-[10px] px-3 rounded-md flex items-center transition-all hover:cursor-pointer">
                            <img src="../static/iconDashboard/pieChart.svg" width="20px" alt="pie-chart">
                            <h1 class="font-bold pl-[10px] text-white text-[15px]">Dashboard</h1>
                     </NuxtLink>
                     <!-- Clients -->
                     <NuxtLink to="/admin/clients" class="mt-1 bg-none hover:bg-[#32489A] hover:font-bold transition-all hover:cursor-pointer py-[10px] px-3 rounded-md flex items-center">
                            <img src="../static/iconDashboard/users.svg" width="20px" alt="users">
                            <h1 class="pl-[10px] text-white  text-[15px]">Klien</h1>
                     </NuxtLink>
                     <!-- Projects -->
                     <NuxtLink to="/admin/projects" class="mt-1 bg-none hover:bg-[#32489A] hover:font-bold transition-all hover:cursor-pointer py-[10px] px-3 rounded-md flex items-center">
                            <img src="../static/iconDashboard/folder.svg" width="20px" alt="folders">
                            <h1 class="pl-[10px] text-white  text-[15px]">Projek</h1>
                     </NuxtLink>
                     <!-- Proposals -->
                     <NuxtLink to="/admin/proposals" class="mt-1 bg-none hover:bg-[#32489A] hover:font-bold transition-all hover:cursor-pointer py-[10px] px-3 rounded-md flex items-center">
                            <img src="../static/iconDashboard/news.svg" width="20px" alt="news">
                            <h1 class="pl-[10px] text-white text-[15px]">Proposal</h1>
                     </NuxtLink>
                     <!-- Contracts -->
                     <NuxtLink to="/admin/contracts" class="mt-1 bg-none hover:bg-[#32489A] hover:font-bold transition-all hover:cursor-pointer py-[10px] px-3 rounded-md flex items-center">
                            <img src="../static/iconDashboard/documents.svg" width="20px" alt="documents">
                            <h1 class="pl-[10px] text-white text-[15px]">Kontrak</h1>
                     </NuxtLink>
                     <!-- Invoices -->
                     <NuxtLink to="/admin/invoices" class="mt-1 bg-none hover:bg-[#32489A] hover:font-bold transition-all hover:cursor-pointer py-[10px] px-3 rounded-md flex items-center">
                            <img src="../static/iconDashboard/reports.svg" width="20px" alt="reports">
                            <h1 class="pl-[10px] text-white text-[15px]">Tagihan</h1>
                     </NuxtLink>
                     <!-- History -->
                     <NuxtLink to="/admin/history" class="mt-1 bg-none hover:bg-[#32489A] hover:font-bold transition-all hover:cursor-pointer py-[10px] px-3 rounded-md flex items-center">
                            <img src="../static/iconDashboard/clock.svg" width="20px" alt="history">
                            <h1 class="pl-[10px] text-white text-[15px]">Riwayat</h1>
                     </NuxtLink>
                     <!-- Supports -->
                     <NuxtLink to="/admin/supports" class="mt-1 bg-none hover:bg-[#32489A] hover:font-bold transition-all hover:cursor-pointer py-[10px] px-3 rounded-md flex items-center">
                            <img src="../static/iconDashboard/questions.svg" width="20px" alt="questions">
                            <h1 class="pl-[10px] text-white text-[15px]">Dukungan</h1>
                     </NuxtLink>
                     <!-- Settings -->
                     <NuxtLink to="/admin/settings" class="mt-1 bg-none hover:bg-[#32489A] hover:font-bold transition-all hover:cursor-pointer py-[10px] px-3 rounded-md flex items-center">
                            <img src="../static/iconDashboard/settings.svg" width="20px" alt="settings">
                            <h1 class="pl-[10px] text-white text-[15px]">Pengaturan</h1>
                     </NuxtLink>
              </div>
</template>
<script>
export default {
       name: "Sidebar"
}
</script>
<style lang="">
       
</style>