<template lang="">
       <!-- Profile Completeness -->
              <div class="w-[1240px] h-auto py-8 px-16 bg-blue-50">
                     <div class="popUp bg-[#ffffff] shadow-shadow-3 w-full rounded-lg p-6">
                            <div class="flex justify-between">
                                   <h1 class="text-[20px] mb-6 font-bold">Lengkapi Profil Anda</h1>
                                   <!-- close button -->
                                   <NuxtLink to="/" @click="close()">
                                          <img src="../../static/x.svg" alt="closeButton">
                                   </NuxtLink>
                             </div>
                             <div class="flex">
                                   <div class="profile-details hover:cursor-pointer flex items-center py-3 px-4 bg-[#92aaff] bg-opacity-10 hover:bg-opacity-20 w-[325px] rounded-lg">
                                          <img src="../../static/profile.svg" alt="profile">
                                          <div class="ml-[16px]">
                                                 <!-- profile details -->
                                                 <NuxtLink to="/admin/dashboard/profile-details">
                                                        <p class="text-lg-regular font-bold">Detil Profil</p>
                                                        <p class="text-md-regular text-gray-400">Tambah No. Telepon</p>
                                                 </NuxtLink>
                                          </div>
                                   </div>
                                   <div class="profile-details hover:cursor-pointer flex items-center shadow-shadow-3 ml-4 py-3 px-4 bg-[#92aaff] bg-opacity-10 hover:bg-opacity-20 w-[325px] rounded-lg">
                                          <img src="../../static/bussiness.svg" alt="business">
                                          <div class="ml-[16px]">
                                                 <!-- business details -->
                                                 <NuxtLink to="/admin/dashboard/business-details">
                                                        <p class="text-lg-regular font-bold">Detil Bisnis</p>
                                                        <p class="text-md-regular text-gray-400">Tambah Alamat Bisnis</p>
                                                 </NuxtLink>
                                          </div>
                                   </div>
                                   <div class="profile-details hover:cursor-pointer flex items-center shadow-shadow-3 ml-4 py-3 px-4 bg-[#92aaff] bg-opacity-10 hover:bg-opacity-20 w-[325px] rounded-lg">
                                          <img src="../../static/bussiness.svg" alt="business">
                                          <div class="ml-[16px]">
                                                 <!-- invoices customize -->
                                                 <NuxtLink to="/admin/dashboard/invoice-customize">
                                                        <p class="text-lg-regular font-bold">Kustomisasi Tagihan</p>
                                                        <p class="text-md-regular text-gray-400">Unggah logo anda</p>
                                                 </NuxtLink>
                                          </div>
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