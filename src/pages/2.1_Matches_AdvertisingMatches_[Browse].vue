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
                <h1 class="mb-4">Advertising Matches</h1>
                <p class="mb-4">These are the brands who will shout you out to their customers. When we have created these matches for you we have done so based on customer profiling so you are talking to your dream customers. You can remove matches and add new ones at any time.</p>
                <div class="bg-white border border-gray-300 rounded px-16 pt-8 pb-4">
                    <div class="flex flex-wrap -mx-3">
                        <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div class="card-sm mt-6">
                                <div class="bg-gray-100 w-full p-3">
                                    <div class="flex -mt-10 justify-between items-end pb-3">
                                        <img src="img/littleprintables.jpg" alt="littleprintables" class="rounded-full border max-w-2xl">
                                        <span class="card-label  bg-blue-500 text-white">Matched</span>
                                    </div>
                                    <a class="text-xs" href="#">@littleprintables</a>
                                    <div class="flex justify-between">
                                        <h3>Little Printables</h3>
                                        <div class="dd dd-menu-right-top">
                                            <button><img src="img/dd.svg" alt="dd arrow" /></button>
                                            <div class="dd-menu">
                                                <a class="dd-menu-item" href="#">Unmatch for now</a>
                                                <a class="dd-menu-item" href="#">Unmatch forever</a>
                                                <a class="dd-menu-item" href="#">View Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full p-3">
                                    <strong class="text-xs">Reach</strong>
                                    <p>5000 subscribers</p>
                                    <strong class="text-xs">Engagement</strong>
                                    <star-rating :show-rating="false" :star-size="12"></star-rating>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div class="card-sm mt-6 opacity-50">
                                <div class="bg-gray-100 w-full p-3">
                                    <div class="flex -mt-10 justify-between items-end pb-3">
                                        <img src="img/littleprintables.jpg" alt="littleprintables" class="rounded-full border max-w-2xl">
                                        <span class="card-label  bg-blue-500 text-white">Unmatched</span>
                                    </div>
                                    <a class="text-xs" href="#">@littleprintables</a>
                                    <div class="flex justify-between">
                                        <h3>Little Printables</h3>
                                        <div class="dd dd-menu-right-top">
                                            <button><img src="img/dd.svg" alt="dd arrow" /></button>
                                            <div class="dd-menu hidden">
                                                <a class="dd-menu-item" href="#">Unmatch for now</a>
                                                <a class="dd-menu-item" href="#">Unmatch forever</a>
                                                <a class="dd-menu-item" href="#">View Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full p-3">
                                    <strong class="text-xs">Reach</strong>
                                    <p>5000 subscribers</p>
                                    <strong class="text-xs">Engagement</strong>
                                    <star-rating :show-rating="false" :star-size="12"></star-rating>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div class="card-sm mt-6">
                                <div class="bg-gray-100 w-full p-3">
                                    <div class="flex -mt-10 justify-between items-end pb-3">
                                        <img src="img/littleprintables.jpg" alt="littleprintables" class="rounded-full border max-w-2xl">
                                        <span class="card-label  bg-blue-500 text-white">Matched</span>
                                    </div>
                                    <a class="text-xs" href="#">@littleprintables</a>
                                    <div class="flex justify-between">
                                        <h3>Little Printables</h3>
                                        <div class="dd dd-menu-right-top">
                                            <button><img src="img/dd.svg" alt="dd arrow" /></button>
                                            <div class="dd-menu hidden">
                                                <a class="dd-menu-item" href="#">Unmatch for now</a>
                                                <a class="dd-menu-item" href="#">Unmatch forever</a>
                                                <a class="dd-menu-item" href="#">View Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full p-3">
                                    <strong class="text-xs">Reach</strong>
                                    <p>5000 subscribers</p>
                                    <strong class="text-xs">Engagement</strong>
                                    <star-rating :show-rating="false" :star-size="12"></star-rating>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-center mb-6">
                        <a class="text-gray-800 underline" href="#">Discover more brands to match with</a>
                        <img class="w-3" src="./assets/img/arrow-down-solid.svg" alt="Arrow down">
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="form-inline flex w-full lg:w-3/4 px-3 mb-6 lg:mb-0">
                            <input id="search-adv-matches" type="text" placeholder="Search">
                            <button class="btn btn-outline -ml-px">Search</button>
                        </div>
                        <div class="w-full lg:w-1/4 px-3 mb-6 lg:mb-0">
                            <div class="relative">
                                <select id="grid-state">
                                    <option disabled selected>Country</option>
                                    <option>Australia</option>
                                    <option>UK</option>
                                    <option>USA</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3">
                        <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div class="card-sm mt-6">
                                <div class="bg-gray-100 w-full p-3">
                                    <div class="flex -mt-10 justify-between items-end pb-3">
                                        <img src="img/littleprintables.jpg" alt="littleprintables" class="rounded-full border max-w-2xl">
                                    </div>
                                    <a class="text-xs" href="#">@littleprintables</a>
                                    <div class="flex justify-between">
                                        <h3>Little Printables</h3>
                                        <div class="dd dd-menu-right-top ">
                                            <button><img src="img/dd.svg" alt="dd arrow" /></button>
                                            <div class="dd-menu">
                                                <a class="dd-menu-item" href="#">Request to Advertise with</a>
                                                <a class="dd-menu-item" href="#">Request to Advertise with &amp; Host</a>
                                                <a class="dd-menu-item" href="#">Cancel Request</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full p-3">
                                    <strong class="text-xs">Reach</strong>
                                    <p>5000 subscribers</p>
                                    <strong class="text-xs">Engagement</strong>
                                    <star-rating :show-rating="false" :star-size="12"></star-rating>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div class="card-sm mt-6">
                                <div class="bg-gray-100 w-full p-3">
                                    <div class="flex -mt-10 justify-between items-end pb-3">
                                        <img src="img/littleprintables.jpg" alt="littleprintables" class="rounded-full border max-w-2xl">
                                        <span class="card-label  bg-orange-500 text-white">Pending</span>
                                    </div>
                                    <a class="text-xs" href="#">@littleprintables</a>
                                    <div class="flex justify-between">
                                        <h3>Little Printables</h3>
                                        <div class="dd dd-menu-right-top">
                                            <button><img src="img/dd.svg" alt="dd arrow" /></button>
                                            <div class="dd-menu hidden">
                                                <a class="dd-menu-item" href="#">Unmatch for now</a>
                                                <a class="dd-menu-item" href="#">Unmatch forever</a>
                                                <a class="dd-menu-item" href="#">View Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full p-3">
                                    <strong class="text-xs">Reach</strong>
                                    <p>5000 subscribers</p>
                                    <strong class="text-xs">Engagement</strong>
                                    <star-rating :show-rating="false" :star-size="12"></star-rating>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div class="card-sm mt-6">
                                <div class="bg-gray-100 w-full p-3">
                                    <div class="flex -mt-10 justify-between items-end pb-3">
                                        <img src="img/littleprintables.jpg" alt="littleprintables" class="rounded-full border max-w-2xl">
                                    </div>
                                    <a class="text-xs" href="#">@littleprintables</a>
                                    <div class="flex justify-between">
                                        <h3>Little Printables</h3>
                                        <div class="dd dd-menu-right-top">
                                            <button><img src="img/dd.svg" alt="dd arrow" /></button>
                                            <div class="dd-menu hidden">
                                                <a class="dd-menu-item" href="#">Unmatch for now</a>
                                                <a class="dd-menu-item" href="#">Unmatch forever</a>
                                                <a class="dd-menu-item" href="#">View Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full p-3">
                                    <strong class="text-xs">Reach</strong>
                                    <p>5000 subscribers</p>
                                    <strong class="text-xs">Engagement</strong>
                                    <star-rating :show-rating="false" :star-size="12"></star-rating>
                                </div>
                            </div>
                        </div>
                    </div>
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
