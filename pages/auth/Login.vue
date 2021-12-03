<template lang="">
	<div class="px-4 pt-4 max-w-[1440px] mx-auto md:px-24 md:pt-8">
		<NavbarAuth />
		<!-- Heading Login Form -->
		<div class="headingLogin max-w-2xl m-auto mt-8 text-center">
			<h1 class="text-[2rem] font-bold md:text-heading-lg">Login to access dashboard</h1>
			<p class="text-small text-gray-500 font-normal pt-2">Manage your business in a simplest way !</p>	
		</div>
		<!-- Login Form -->
		<form class="max-w-sm m-auto mt-8 mb-8 rounded-lg border border-gray-300 py-8 px-10" action="/login" method="post">
			<!-- Form Email Address -->
			<div class="mb-4">
				<label for="email" class="block text-gray-700 text-sm font-medium mb-2">Email</label>
				<input type="text" id="email" name="email" placeholder="example@email.com" class="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight">
			</div>
			<!-- Form Password -->
			<div class="mb-4">
				<label for="password" class="block text-gray-700 text-sm font-medium mb-2">Password</label>
				<input type="password" id="password" name="password" placeholder="********" class="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight">
			</div>
			<!-- Input Checkbox -->
			<div class="mb-4">
				<label for="checkbox" class="inline-flex items-center">
					<input type="checkbox" class="form-checkbox h-5 w-5 text-dark" name="" id="" checked>
					<span class="text-blue-800 pl-2">Remember me</span>
				</label>
			</div>
			<!-- Login Button -->
			<NuxtLink to="/admin/dashboard" @click="message()" class="mb-4 w-full text-center font-bold ml-0 no-underline inline-block px-4 py-3 leading-none bg-blue-800 border-blue-800 border rounded text-white hover:border-transparent hover:bg-white hover:text-blue-800 mt-4 sm:mt-0">
				<p class="text-lg font-bold">Login</p>
			</NuxtLink>
			<!-- Google OAuth Button -->
			<div class="mb-4">
				<NuxtLink to="/auth/login" class="w-full flex justify-center items-center text-center font-bold ml-0 no-underline px-4 py-3 leading-none bg-white border-gray-200 border rounded text-blue-800 hover:bg-white mt-4 sm:mt-0">
					<img src="../../static/google.svg" width="24" alt="" class="pr-2">
					<p class="text-lg">Google</p>
				</NuxtLink>
			</div>
			<!-- Forgot Password -->
			<a href="/forgot-password" class="text-blue-800 text-sm">Forgot Password?</a>
		</form>
	</div>
</template>
<script>
// import Navbar Auth Component
import NavbarAuth from "../../components/NavbarAuth.vue"
export default {
	name: "Login",
	components: {
		NavbarAuth
	},
	head: {
		title: "Timvoice - Login Page",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1"},
			{
				hid: "invoice product",
				name: "invoice product - login page",
				content: "invoice product - login page"
			}
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico"}]
	},
	methods: {
		message() {
			alert("Login Sucessfully !")
		}
	}
}
</script>
<style lang="">
</style>