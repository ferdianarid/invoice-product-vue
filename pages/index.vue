<template>
	<div class="background-gradient">
		<div class="w-full main max-w-[1440px] m-auto px-4 pt-4 md:px-24 md:pt-8">
			<Navbar />
			<!-- Header Section -->
			<div class="w-full flex flex-col md:flex-row px-0 md:px-[105px] pb-8">
				<!-- Heading Content -->
				<div class="w-full md:w-1/2">
					<h1 class="text-[2.75rem] leading-[1.2] md:text-heading-xl mt-14 heading">Your Freelance Business In One Place</h1>
					<p class="text-sm text-gray-500 pt-2 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ut esse doloribus repellat soluta, eligendi necessitatibus.</p>
					<div class="flex flex-col md:flex-row max-w-md items-center">
						<div class="w-full md:w-2/3">
							<input type="text" id="fullname" name="fullname" placeholder="Enter your email" class="appereance-none rounded border border-gray-200 w-full py-2.5 px-4 text-gray-700 leading-tight">
						</div>
						<div class="w-full md:w-1/3">
							<NuxtLink to="/auth/login" class="w-full text-center font-bold ml-0 md:ml-1 no-underline inline-block px-4 py-3 leading-none bg-blue-800 border-blue-800 border rounded text-white hover:border-transparent hover:bg-white hover:text-blue-800 mt-4 sm:mt-0">
								<p class="text-lg font-bold">Get Started</p>
							</NuxtLink>
						</div>
					</div>
				</div>
				<!-- Heading Images -->
				<div class="w-full md:w-1/2 flex justify-center items-center mt-[1.25rem] md:mt-[-.5rem]">
					<img class="scale-[1] ml-[-20px] md:ml-4 md:scale-[1.3]" src="../static/Hero.png" alt="headingImages" width="100%">
				</div>
			</div>
			<!-- Partner Section -->
			<div class="w-full flex flex-col md:flex-row items-center my-[60px]">
				<div class="w-1/4 flex  justify-start mt-10 md:mt-0">
					<img src="../static/Partner/Client-Logo2.svg" alt="partner1" />
				</div>
				<div class="w-1/4 flex justify-start mt-10 md:mt-0">
					<img src="../static/Partner/Client-Logo4.svg" alt="partner1" />
				</div>
				<div class="w-1/4 flex justify-center mt-10 md:mt-0">
					<img src="../static/Partner/Client-Logo3.svg" alt="partner1" />
				</div>
				<div class="w-1/4 mt-10 md:mt-0">
					<img src="../static/Partner/Client-Logo1.svg" alt="partner1" />
				</div>
			</div>
			<!-- Feature Section -->
			<div class="w-full flex flex-col md:flex-row my-16 md:my-24">
				<div class="w-full md:w-1/2 mr-[100px] flex items-center">
					<div>
						<h1 class="text-[2.75rem] leading-[1.2] md:text-heading-xl mt-14 heading">Simplify Your Business.</h1>
						<p class="text-sm text-gray-500 pt-2 pb-6">We integrates and automates every step of your business from proposal to invoice. Our invoicing software has made it easy to run your business billings, so you can focus on what matters.</p>
					</div>
				</div>
				<div class="w-full md:w-1/2">
					<div class="flex flex-col">
						<BenefitCard />
						<div class="w-full flex py-8 px-10 bg-[#F7F8FD] rounded-3xl my-2">
							<div class="w-1/4">
								<img class="scale-75" src="../static/briefcase.svg" alt="currency" width="100%" />
							</div>
							<div class="w-3/4">
								<h1 class="text-heading-md fontBold">Win More Work</h1>
								<p class="text-lg-regular text-gray-500">Create and customize invoices, receive updates about payment.</p>
							</div>
						</div>
						<div class="w-full flex py-8 px-10 bg-[#F7F8FD] rounded-3xl my-2">
							<div class="w-1/4">
								<img class="scale-75" src="../static/shield.svg" alt="currency" width="100%" />
							</div>
							<div class="w-3/4">
								<h1 class="text-heading-md fontBold">Protect Business</h1>
								<p class="text-lg-regular text-gray-500">Create and customize invoices, receive updates about payment.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--  Main Features Section -->
			<div class="w-full my-16 md:my-24">
				<h1 class="text-[2.75rem] leading-[1.2] md:text-heading-xl mt-14 heading mb-12 text-center">Our Main Features</h1>
				<div class="flex flex-col md:flex-row">
					<div class="flex flex-row md:w-[50%]">
						<!-- Feature 1 -->
						<div class="w-[50%] md:w-[50%] rounded-[24px] bg-white shadow-shadow-2 p-6">
							<img class="rounded-lg" src="../static/Img-Features1.png" alt="feature1">
							<h1 class="text-heading-md pt-8 fontBold">Invoice</h1>
							<p class="pt-2 text-lg-regular  text-gray-500">Create and custom invoice.</p>
						</div>
						<!-- Feature 2 -->
						<div class="w-[50%] md:w-[50%] rounded-[24px] bg-white shadow-shadow-2 p-6">
							<img class="rounded-lg" src="../static/Img-Features2.png" alt="feature1">
							<h1 class="text-heading-md pt-8 fontBold">Proposal</h1>
							<p class="pt-2 text-lg-regular  text-gray-500">Craft structured proposal.</p>
						</div>
					</div>
					<div class="flex flex-row md:w-[50%]">
						<!-- Feature 3 -->
						<div class="w-[50%] md:w-[50%] rounded-[24px] bg-white shadow-shadow-2 p-6">
							<img class="rounded-lg" src="../static/Img-Features3.png" alt="feature1" />
							<h1 class="text-heading-md pt-8 fontBold">Contract</h1>
							<p class="pt-2 text-lg-regular  text-gray-500">Generate a contract.</p>
						</div>
						<!-- Feature 4-->
						<div class="w-[50%] md:w-[50%] rounded-[24px] bg-white shadow-shadow-2 p-6">
							<img class="rounded-lg" src="../static/Img-Features4.png" alt="feature1" />
							<h1 class="text-heading-md pt-8 fontBold">Client CRM</h1>
							<p class="pt-2 text-lg-regular text-gray-500">Manage your customers.</p>
						</div>
					</div>
				</div>
			</div>
			<!-- Number Proof Section -->
			<div class="w-full my-16 md:my-24">
				<h1 class="text-[2.75rem] leading-[1.2] md:text-heading-xl mt-14 heading mb-12 text-center">Trusted by 3K+ People & Businesses</h1>
				<div class="flex flex-col md:flex-row">
					<div class="w-full flex flex-row md:w-[50%]">
						<!--Counter 1 -->
						<div class="w-[50%] md:w-[50%] rounded-lg bg-[#F7F8FD] shadow-shadow-2 mx-1 md:mx-0 mr-0 md:mr-4 py-6 text-left px-4 md:px-6">
							<h1 class="text-[4rem] fontExtraBold text-blue-800">12k+</h1>
							<p class="py-2 text-lg-regular fontBold  text-gray-500">Monthly invoices sent</p>
						</div>
						<!-- Counter 2 -->
						<div class="w-[50%] md:w-[50%] rounded-lg bg-[#F7F8FD] shadow-shadow-2 mx-1 md:mx-0 mr-0 md:mr-4 py-6 px-4 md:px-6">
							<h1 class="text-[4rem] fontExtraBold text-blue-800">5k+</h1>
							<p class="py-2 text-lg-regular fontBold  text-gray-500">Proposals created</p>
						</div>
					</div>
					<div class="flex flex-row mt-[.5rem] md:mt-0 md:w-[50%]">
						<!-- Counter 3 -->
						<div class="w-[50%] md:w-[50%] rounded-lg bg-[#F7F8FD] shadow-shadow-2 mx-1 md:mx-0 mr-0 md:mr-4 py-6 text-left px-4 md:px-6">
							<h1 class="text-[4rem] fontExtraBold text-blue-800">10k+</h1>
							<p class="py-2 text-lg-regular fontBold  text-gray-500">Contract signed</p>
						</div>
						<!-- Counter 4-->
						<div class="w-[50%] md:w-[50%] rounded-lg bg-[#F7F8FD] shadow-shadow-2 mx-1 md:mx-0 mr-0 md:mr-4 py-6 px-4 md:px-6">
							<h1 class="text-[4rem] fontExtraBold text-blue-800">10k+</h1>
							<p class="py-2 text-lg-regular fontBold text-gray-500">Countries services</p>
						</div>	
					</div>
				</div>
			</div>
			<!-- Testimonials Section -->
			<div class="w-full my-16 md:my-24">
				<h1 class="text-[2.75rem] leading-[1.2] md:text-heading-xl mt-14 heading mb-12 text-center">What Did They Say</h1>
				<div class="flex flex-col md:flex-row">
					<!-- Testimonial 1 -->
					<div class="w-full md:w-[388px] mt-0 md:mt-0 bg-[#F7F8FD] rounded-[24px] p-8">
						<p class="text-lg-regular text-gray-500">“Completely wonderful. If you freelance you have to check it out. Really lovely experience.”</p>
						<div class="w-full flex justify-between">
							<div class="w-1/4 pt-4">
								<img src="../static/Avatar-Testimonial1.png" alt="avatar1">
							</div>
							<div class="w-3/4 pl-2 pt-4">
								<p class="text-xl-regular fontBold pb-1">Elisa Nurjaman</p>
								<p class="text-lg-regular fontBold text-gray-500">CEO  Ungu Studio</p>
							</div>
						</div>
					</div>
					<!-- Testimonial 2 -->
					<div class="w-full md:w-[388px] mt-4 md:mt-0 bg-[#F7F8FD] rounded-[24px] p-8 mx-0 md:mx-8">
						<p class="text-lg-regular text-gray-500">“For all my Freelancer/Small Agency followers, I wish I’d discovered this long ago.”</p>
						<div class="w-full flex justify-between">
							<div class="w-1/4 pt-4">
								<img src="../static/Avatar-Testimonial2.png" alt="avatar2">
							</div>
							<div class="w-3/4 pl-2 pt-4">
								<p class="text-xl-regular fontBold pb-1">Ujang Fahreza</p>
								<p class="text-lg-regular fontBold text-gray-500">UI/UX Freelancer</p>
							</div>
						</div>
					</div>
					<!-- Testimonial 3 -->
					<div class="w-full md:w-[388px] mt-4 md:mt-0 bg-[#F7F8FD] rounded-[24px] p-8">
						<p class="text-lg-regular text-gray-500">"Anyone who have small businesses should use this tool for contracts/payment."</p>
						<div class="w-full flex justify-between">
							<div class="w-1/4 pt-4">
								<img src="../static/Avatar-Testimonial3.png" alt="avatar3">
							</div>
							<div class="w-3/4 pl-2 pt-4">
								<p class="text-xl-regular fontBold pb-1">Bambang W</p>
								<p class="text-lg-regular fontBold text-gray-500">Frontend Developer</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Call to Action -->
			<div class="w-full mt-12 mb-24 rounded-lg py-16 md:py-20 px-4 md:px-[105px] flex flex-col md:flex-row justify-between">
				<div class="w-full md:w-1/2 cta-heading">
					<h1 class="text-[28px] md:text-[36px] fontBold">Start Your Invoicing Today!</h1>
					<p class="pt-4 text-gray-500 text-lg-regular">Get your business invoicing and collecting payments in seconds.</p>
				</div>
				<div class="w-full md:w-1/2 cta-button flex flex-col md:flex-row justify-start md:justify-end items-center mt-2 md:mt-0">
					<!-- View Pricing -->
					<NuxtLink to="/auth/register" class="w-full md:w-[40%] no-underline inline-block border-none text-sm py-3 px-4 bg-[#F7F8FD] py-2 mr-3 leading-none border rounded text-blue-800  hover:border-transparent mt-4 sm:mt-0">
						<p class="text-center">View Pricing</p>
					</NuxtLink>
					<!-- Create Free Account -->
					<NuxtLink to="/auth/login" class="w-full md:w-[60%] ml-0 md:ml-1 no-underline inline-block text-sm px-4 py-3 leading-none bg-blue-800 border-blue-800 border rounded text-white  hover:border-transparent hover:bg-white hover:text-blue-800 mt-4 sm:mt-0">
						<p class="text-center">Create Free Account</p>
					</NuxtLink>
				</div>
			</div>
		</div>
		<div class="w-full max-w-[1440px] m-auto">
		<!-- Footer Section -->
			<div class="w-full h-auto md:h-[403px] bg-[#202E63] pt-16 md:pt-24 pb-12 flex flex-col md:flex-row justify-between px-4 md:px-24">
				<div class="w-full md:w-[40%]">
					<p class="text-lg-regular text-[#F7F8FD]">Timvoice is an Invoice generator for small business, freelancers and startups.</p>
					<!-- Social Media -->
					<div class="mt-6 flex">
						<img class="mr-2 opacity-60 hover:opacity-100 transition-all" src="../static/SocialMedia/Facebook.svg" alt="facebook" height="36px">
						<img class="mr-2 opacity-60 hover:opacity-100 transition-all" src="../static/SocialMedia/Instagram.svg" alt="instagram" height="36px">
						<img class="mr-2 opacity-60 hover:opacity-100 transition-all" src="../static/SocialMedia/Linkedin.svg" alt="linkedin" height="36px">
					</div>
				</div>
				<div class="w-full md:w-[60%] flex justify-between mt-12 md:mt-0">
					<!-- Tab Menu -->
					<div class="products">
						<p class="text-lg-regular text-white fontBold pb-4">Products</p>
						<p class="text-lg-regular text-white py-1 md:py-2">Home</p>
						<p class="text-lg-regular text-white py-1 md:py-2">Features</p>
						<p class="text-lg-regular text-white py-1 md:py-2">Pricing</p>
						<p class="text-lg-regular text-white py-1 md:py-2">What's New</p>
					</div>
					<!-- Tab Menu -->
					<div class="company">
						<p class="text-lg-regular text-white fontBold pb-4">Company</p>
						<p class="text-lg-regular text-white py-1 md:py-2">About</p>
						<p class="text-lg-regular text-white py-1 md:py-2">Blog</p>
						<p class="text-lg-regular text-white py-1 md:py-2">Contact Us</p>
						<p class="text-lg-regular text-white py-1 md:py-2">Careers</p>
					</div>
					<!-- Tab Menu -->
					<div class="support">
						<p class="text-lg-regular text-white fontBold pb-4">Support</p>
						<p class="text-lg-regular text-white py-1 md:py-2">Customer Service</p>
						<p class="text-lg-regular text-white py-1 md:py-2">Help Center</p>
						<p class="text-lg-regular text-white py-1 md:py-2">FAQ</p>
						<p class="text-lg-regular text-white py-1 md:py-2">Tutorial</p>
					</div>
				</div>
			</div>
		<div class="w-full bg-[#202E63] px-4 md:px-24 pb-12">
			<div class="w-full border-t border-white pt-12 flex justify-between">
				<div class="flex w-full justify-center md:justify-between flex-col-reverse items-center md:flex-row">
					<div class="w-full md:w-[30%] mt-8 md:mt-0 flex justify-center md:justify-start">
						<img src="../static/timvoice-white.svg" alt="invoiceLogo">
					</div>
					<div class="w-full md:w-[70%] termsprivacy flex flex-col md:flex-row text-center md:text-left justify-center md:justify-end">
						<p class="text-lg-regular text-white fontBold pb-2 md:pb-0 pl-0 md:pl-8">Terms of Service</p>
						<p class="text-lg-regular text-white fontBold pb-2 md:pb-0 pl-0 md:pl-8">Privacy Policy</p>
						<p class="text-lg-regular text-white pl-0 md:pl-8">&copy; 2021 Timvoice. All Right Reserved.</p>
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>
</template>

<script>
// import Register Component
import Register from "./auth/Register.vue"

// import Navbar Components
import Navbar from "~/components/Navbar.vue"

// import Benefits Card Components
import BenefitCard from "../components/BenefitCard.vue"

export default {
	name: "Homepage",
	components: {
		Register,
		Navbar,
		BenefitCard
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
	.background-gradient {
		height: 620px;
		background: linear-gradient(180deg, rgba(215, 221, 244, 0.5) 0%, rgba(215, 221, 244, 0) 100%);
	}
	.heading {
		font-weight: 700;
	}
	.fontBold {
		font-weight: 700;
	}
	.fontExtraBold {
		font-weight: 800;
	}
</style>