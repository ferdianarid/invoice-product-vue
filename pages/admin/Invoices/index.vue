<template lang="">
      <div class="w-full max-w-[1440px] mx-auto flex bg-[#F7F8FD]">
              <Sidebar />
              <!-- Main Menu -->
              <div class="flex w-full ml-[240px] h-24 flex-col">
                     <!-- Application Bar components -->
                     <Appbar />
                     <!-- Profiles Completeness -->
                     <Profiles />
                     <!-- Invoices Tables -->
                     <div class="w-[1240px] h-auto pb-8 px-16 bg-blue-50">
                            <div class="w-full bg-white h-auto rounded-lg px-10">
                                   <!-- Title Invoice and Button Create New Invoices -->
                                   <div class="flex justify-between items-center">
                                          <h1 class="py-6 text-heading-lg font-bold">Tagihan</h1>
                                          <div class="h-auto w-auto bg-[#F7F8FD] rounded-md">
                                                 <p class="text-[#405DC7] font-bold py-2 px-4 text-lg-bold">Buat Tagihan Baru</p>
                                          </div>
                                   </div>
                                   <!-- Divider -->
                                   <hr class="pb-6" color="blue" width="100%">
                                   <!-- Button Action -->
                                   <div class="flex justify-between items-center">
                                          <!-- Filter Button -->
                                          <div class="h-auto w-auto bg-[#F7F8FD] rounded-md">
                                                 <p class="text-[#405DC7] font-bold py-2 px-4 text-lg-bold">Filter</p>
                                          </div>
                                          <!-- Search Components -->
                                          <div class="h-auto w-auto bg-[#F7F8FD] rounded-md">
                                                 <p class="text-[#405DC7] font-bold py-2 px-4 text-lg-bold">Cari</p>
                                          </div>
                                   </div>
                                   <!-- Tables Invoices -->
                                   <Tables />
                            </div>
                     </div>
              </div>
       </div>
</template>
<script>
// import Tables Components
import Tables from "../../../components/Tables.vue"

// import Sidebar Components
import Sidebar from "../../../components/Sidebar.vue"

//import App Bar Components
import Appbar from "../../../components/Appbar.vue"

// import Profile Completeness
import Profiles from "../../../components/Sections/Profiles.vue"

export default {
       name: "Invoices",
       head: {
		title: "Timvoice - Tagihan",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1"},
			{
				hid: "invoice tagihan",
				name: "invoice product - tagihan",
				content: "invoice product - tagihan"
			}
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
			{ rel: "stylesheets", href: "https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800&display=swap"}
		]
	},
       components: {
              Sidebar,
              Appbar,
              Profiles,
              Tables
       }
}
</script>
<style lang="">
       
</style>