<template>
	<div class="main px-4 pt-4 md:px-24 md:pt-8">
		<Navbar />
		<h1>Homepage</h1>
	</div>
</template>

<script>
// import Register Component
import Register from "./auth/Register.vue"
import Navbar from "~/components/Navbar.vue"
export default {
	name: "Homepage",
	components: {
    Register,
    Navbar
}
}
</script>

<style>
	* {
		font-family: "SF Pro Display", sans-serif;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
</style>