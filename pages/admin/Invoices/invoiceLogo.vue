<template lang="">
       <div class="w-full max-w-[1440px] mx-auto flex bg-[#F7F8FD]">
              <Sidebar />
              <!-- Main Menu -->
              <div class="flex w-full ml-[240px] h-24 flex-col">
                     <!-- Application Bar components -->
                     <Appbar />
                     <!-- Profiles Completeness -->
                     <Profiles />
                     <!-- Fundamentals Information -->
                     <div class="w-[1240px] h-auto px-16 bg-blue-50">
                            <!-- Breadcrumb -->
                            <p class="py-8">Tagihan / <span class="font-bold"> Tagihan Logo Desain </span></p>
                            <!-- Button -->
                            <!-- Button Action -->
                            <div class="flex justify-between items-center">
                                   <!-- Filter Button -->
                                   <div class="h-auto w-auto bg-[#FFFFFF] rounded-md">
                                          <p class="text-[#405DC7] font-bold py-2 px-4 text-lg-bold">Pilihan</p>
                                   </div>
                                   <div class="flex items-center">
                                          <!-- Search Components -->
                                          <div class="h-auto w-auto bg-white rounded-md mr-6">
                                                 <p class="text-[#405DC7] font-bold py-2 px-4 text-lg-bold">Simpan Sebagai Draft</p>
                                          </div>
                                          <!-- Search Components -->
                                          <div class="h-auto w-auto bg-[#405DC7] rounded-md">
                                                 <p class="text-white font-bold py-2 px-4 text-lg-bold">Tinjau & Kirim</p>
                                          </div>
                                   </div>
                            </div>
                            <div class="w-full bg-white my-8 h-auto rounded-lg px-10">
                                   <!-- Title Invoice and Button Create New Invoices -->
                                   <div class="flex justify-between items-center">
                                          <h1 class="py-6 text-heading-lg font-bold">Informasi Dasar</h1>
                                          <div class="h-auto w-auto bg-[#F7F8FD] rounded-md">
                                                 <p class="text-[#405DC7] font-bold py-2 px-4 text-lg-bold">Buat Tagihan Baru</p>
                                          </div>
                                   </div>
                                   <!-- Divider -->
                                   <hr class="pb-6" color="blue" width="100%">
                            </div>
                     </div>
              </div>
       </div>
</template>
<script>
export default {
       
}
</script>
<style lang="">
       
</style>