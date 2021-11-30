<template>
	<div class="main max-w-[1440px] m-auto px-4 pt-4 md:px-24 md:pt-8">
		<Navbar />
		<h1>Homepage</h1>
	</div>
</template>

<script>
// import Register Component
import Register from "./auth/Register.vue"

// import Navbar Components
import Navbar from "~/components/Navbar.vue"

export default {
	name: "Homepage",
	components: {
		Register,
		Navbar
	},
	head: {
		title: "Timvoice - Homepage",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1"},
			{
				hid: "invoice product",
				name: "invoice product - homepage",
				content: "invoice product - homepage"
			}
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
			{ rel: "stylesheets", href: "https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800&display=swap"}
		]
	}
}
</script>

<style>
	* {
		font-family: "Mulish", sans-serif;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
</style>