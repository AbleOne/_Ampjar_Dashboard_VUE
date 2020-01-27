<template>
  	<div class="flex flex-grow min-h-screen bg-white overflow-hidden">
		<div class="top-bar fixed w-full bg-white flex justify-between items-center h-20 shadow-md sm:hidden">
			<div class="p-4 flex">
				<button class="nav-toggler-mobile mr-5">
					<img src="./assets/img/hamburger.svg" alt="Extended Collapsed View" />
				</button>
				<a class="inline-flex" href="#">
					<img src="./assets/img/ampjar-landscape-mono.svg" alt="Ampjar" /> 
					
				</a>
			</div>
			<!-- <div class="dd mx-6">
				<button><img class="user-avatar" src="./assets/img/Pete.jpg" alt="Pete Davis" /></button>
				<div class="dd-menu dd-menu-right-top hidden">
					<a class="dd-menu-item" href="#">My profile</a>
					<a class="dd-menu-item" href="#">Notifications</a>
					<a class="dd-menu-item" href="#">Subscription</a>
					<a class="dd-menu-item" href="#">Affilate</a>
					<a class="dd-menu-item" href="#">Logout</a>
				</div>
			</div> -->
			<dropdown :class="'mx-6'" :imgSrc="'img/pete.jpg'" :imgAlt="'Pete Davis'" />
		</div>
		<nav class="nav-side-container collapsed1 hidden sm:flex fixed inset-y-0 sm:static sm:h-screen">
			<button class="nav-close-mobile m-4 my-6 block sm:hidden">
				<img src="./assets/img/cross.svg" alt="Close Nav" />
			</button>
			<div class="relative border-b p-4 mb-4 hidden sm:flex items-center h-20">
				<a class="nav-brand" href="#">
					<img src="./assets/img/ampjar-landscape-mono.svg" alt="Ampjar" />
					<img class="hidden" src="./assets/img/ampjar-stacked-mono.svg" alt="Ampjar" />
				</a>
				<button class="nav-toggler-desktop">
					<img src="./assets/img/drawer_arrow.svg" alt="Extended Collapsed View" />
				</button>
			</div>
			<div class="flex flex-col flex-grow justify-between p-4 overflow-y-auto h-nav-side">
				<ul class="nav-side">
					<li><a href="#"><img src="./assets/img/home.svg" alt="Dashboard" /><span>Dashboard</span></a></li>
					<li>
						<a href="#"><img src="./assets/img/matches.svg" alt="Matches" /><span>Matches</span></a>
						<div class="dd-menu--nav">
							<a class="dd-menu--nav-item" href="#">Advertising matches</a>
							<a class="dd-menu--nav-item" href="#">Hosting matches</a>
						</div>
					</li>
					<li><a href="emails.html"><img src="./assets/img/emails.svg" alt="Emails" /><span>Emails</span></a></li>
					<li><a href="#"><img src="./assets/img/ads.svg" alt="Ads" /><span>Ads</span></a></li>
					<li><a href="#"><img src="./assets/img/shoutouts.svg" alt="Shoutouts" /><span>Shoutouts</span></a></li>
					<li><a href="#"><img src="./assets/img/boosting.svg" alt="Boosting" /><span>Boosting</span></a></li>
					<li><a href="#"><img src="./assets/img/community.svg" alt="Private communities" /><span>Private communities</span></a></li>
					<li><a href="#"><img src="./assets/img/chart.svg" alt="Reporting" /><span>Reporting</span></a></li>
				</ul>
				<ul class="nav-side">
					<li><a href="#"><img src="./assets/img/cog.svg" alt="Settings" /><span>Settings</span></a></li>
					<li>
						<div class="dd">
							<button class="flex w-full items-center">
								<img class="user-avatar mr-5" src="./assets/img/pete.jpg" alt="Pete Davis" /><span class="text-bright_blue">Peter Davis</span>
							</button>
							<div class="dd-menu dd-menu-right-bottom hidden">
								<a class="dd-menu-item" href="#">My profile</a>
								<a class="dd-menu-item" href="#">Notifications</a>
								<a class="dd-menu-item" href="#">Subscription</a>
								<a class="dd-menu-item" href="#">Affilate</a>
								<a class="dd-menu-item" href="#">Logout</a>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</nav>
		<div class="flex flex-col flex-grow xl:w-auto bg-gray-200 pt-20 sm:pt-0 sm:h-screen overflow-y-auto">
			<div class="container mx-auto py-16 px-5">
				<h1>Add Subscribers</h1>
				<h2>Import Subscribers</h2>
				<div class="flex flex-wrap items-center justify-between">
					<p class="sm:w-9/12 pr-3">If you have connected your preferred email service provider and sync your mailing list into Ampjar.</p>
					<button class="btn">Sync list</button>
				</div>
				<hr>
				<h2>Import from file</h2>
				<div class="flex flex-wrap items-center justify-between">
					<p class="sm:w-9/12 pr-3">You can upload an Excel or CSV file to add your subscribers.</p>
					<button class="btn">Import list</button class="btn">
				</div>
				<hr>
				<h2>Copy and paste</h2>
				<p>Copy and paste your subscribers' information below. Provide their first name, last name, and email address, in that order. Make sure to separate the details of each subscriber with a comma, and place each subscriber on a new line!</p>
				<textarea name="" id="" cols="30" rows="10" class="mb-6">First Name, Last Name, Email Address, First Name, Last Name, Email Address, First Name, Last Name, Email Address, First Name, Last Name, Email Address</textarea>
				<div class="flex flex-wrap items-center justify-between">
					<label class="checkbox-label sm:w-9/12 flex pr-3">
						<input class="my-1 mr-3" type="checkbox">
						<span class="text-sm">By uploading this database I confirm that I have been given full and proper permission to contact this database for marketing purposes.</span>
					</label>
					<button class="btn">Add subscribers</button class="btn">
				</div>
				<hr>
				<h2>Add a single subscriber</h2>
				<form>
					<div class="flex flex-wrap -mx-3 md:mb-8">
						<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label class="form-label" for="email-address">Email Address</label>
							<input id="email-address" type="text">
						</div>
						<div class="w-full md:w-3/12 px-3 mb-6 md:mb-0">
							<label class="form-label" for="first-name">First name</label>
							<input id="first-name" type="text">
						</div>
						<div class="w-full md:w-3/12 px-3 mb-6 md:mb-0">
							<label class="form-label" for="last-name">Last name</label>
							<input id="last-name" type="text">
						</div>
					</div>
				</form>
				<div class="flex flex-wrap items-center justify-between">
					<label class="checkbox-label sm:w-9/12 flex pr-3">
						<input class="my-1 mr-3" type="checkbox"><span class="text-sm">I confirm that I have been given full and proper permission to contact this person for marketing purposes.</span>
						</label>
						<button class="btn">Add subscriber</button class="btn">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import dropdown from '../src/components/dd'

export default { 
	name: `App`,
		components: {
			dropdown
		},
	};
</script>
