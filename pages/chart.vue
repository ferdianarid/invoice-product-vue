<template lang="vue">
       <div class="w-full main max-w-[1440px] m-auto px-4 pt-4 md:px-24 md:pt-8">
              <Navbar />
              <ListChart />
       </div>
</template>

<script lang="js">
// import Navbar Components
import Navbar from "../components/Navbar.vue"

// import List Chart
import ListChart from "../components/Chart/ListChart.vue"

export default {
       name: "chart",
       components: {
              ListChart,
              Navbar
       },
       head: {
		title: "Timvoice - List Chart",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1"},
			{
				hid: "invoice product",
				name: "invoice product - chart page",
				content: "invoice product - chart"
			}
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
			{ rel: "stylesheets", href: "https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800&display=swap"}
		]
	}
}
</script>
<style lang="css"></style>