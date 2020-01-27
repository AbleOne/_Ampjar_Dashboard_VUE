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
								<img class="user-avatar mr-5" src="img/pete.jpg" alt="Pete Davis" /><span class="text-bright_blue">Peter Davis</span>
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
                <h1 class="text-center mb-4">What platform do you want to use to send your emails?</h1>
                <p class="text-center mb-4">You can choose to send your email campaigns using your  current Email Service Provider or through Ampjar. Either way we’ll help you build and style your campaigns in minutes.</p>
                <div class="flex flex-wrap -mx-3">
                    <div class="w-full md:w-1/3 lg:w-1/5 px-3 mb-6">
                        <div class="card rounded">
                            <img src="img/mailchimp.jpg" alt="littleprintables" class="rounded-full border max-w-2xl mb-4">
                            <strong class="whitespace-no-wrap text-sm">Mailchimp</strong>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 lg:w-1/5 px-3 mb-6">
                        <div class="card rounded">
                            <img src="img/shopify.jpg" alt="littleprintables" class="rounded-full border max-w-2xl mb-4">
                            <strong class="whitespace-no-wrap text-sm">Shopify</strong>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 lg:w-1/5 px-3 mb-6">
                        <div class="card rounded">
                            <img src="img/klaviyo.jpg" alt="littleprintables" class="rounded-full border max-w-2xl mb-4">
                            <strong class="whitespace-no-wrap text-sm">Klaviyo</strong>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 lg:w-1/5 px-3 mb-6">
                        <div class="card rounded">
                            <img src="img/constant-contact.jpg" alt="littleprintables" class="rounded-full border max-w-2xl mb-4">
                            <strong class="whitespace-no-wrap text-sm">Constant Contact</strong>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 lg:w-1/5 px-3 mb-6">
                        <div class="card rounded">
                            <img src="img/convert-kit.jpg" alt="littleprintables" class="rounded-full border max-w-2xl mb-4">
                            <strong class="whitespace-no-wrap text-sm">ConvertKit</strong>
                        </div>
                    </div>
                    <form class="flex flex-col items-center mx-auto" action="">
                        <p class="mb-4">Your Email Service Provider not yet available? Let us know your preferred platform below.</p>
                        <div class="form-inline flex mx-auto mb-6">
                            <input id="search-adv-matches" type="text" placeholder="Enter your ESP">
                            <button class="btn btn-primary -ml-px">Submit</button>
                        </div>
                        <a href="#" class="text-gray-800 underline mb-6">I want to use Ampjar to send my emails</a>
                        <button class="btn btn-primary">Connect ESP</button>
                    </form>
                </div>
            </div>
		</div>
	</div>
</template>

<script>
import dropdown from '../src/components/dropdown'
import StarRating from 'vue-star-rating'

export default { 
	name: `App`,
		components: {
            dropdown,
            StarRating
		},
	};
</script>
