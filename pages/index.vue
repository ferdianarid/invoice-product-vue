<template>
	<div class="main px-4 pt-4 md:px-24 md:pt-8">
		<Login />
	</div>
</template>

<script>
// import Login Component
import Login from "../pages/auth/Login.vue"
export default {
	name: "Homepage",
	components: {
		Login
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