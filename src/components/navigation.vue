<template>
    <header class="nav-container">
        <div class="top-bar fixed w-full bg-white flex justify-between items-center h-20 shadow-md sm:hidden">
            <div class="p-4 flex">
                <button class="nav-toggler-mobile mr-5">
                    <img src="./../assets/img/hamburger.svg" alt="Extended Collapsed View" />
                </button>
                <a class="inline-flex" href="#">
                    <img src="./../assets/img/ampjar-landscape-mono.svg" alt="Ampjar" /> 
                    
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
                <img src="./../assets/img/cross.svg" alt="Close Nav" />
            </button>
            <div class="relative border-b p-4 mb-4 hidden sm:flex items-center h-20">
                <a class="nav-brand" href="#">
                    <img src="./../assets/img/ampjar-landscape-mono.svg" alt="Ampjar" />
                    <img class="hidden" src="./../assets/img/ampjar-stacked-mono.svg" alt="Ampjar" />
                </a>
                <button class="nav-toggler-desktop">
                    <img src="./../assets/img/drawer_arrow.svg" alt="Extended Collapsed View" />
                </button>
            </div>
            <div class="flex flex-col flex-grow justify-between p-4 overflow-y-auto h-nav-side">
                <ul class="nav-side">
                    <li><a href="#"><img src="./../assets/img/home.svg" alt="Dashboard" /><span>Dashboard</span></a></li>
                    <li>
                        <a href="#"><img src="./../assets/img/matches.svg" alt="Matches" /><span>Matches</span></a>
                        <div class="dd-menu--nav">
                            <a class="dd-menu--nav-item" href="#">Advertising matches</a>
                            <a class="dd-menu--nav-item" href="#">Hosting matches</a>
                        </div>
                    </li>
                    <li><a href="emails.html"><img src="./../assets/img/emails.svg" alt="Emails" /><span>Emails</span></a></li>
                    <li><a href="#"><img src="./../assets/img/ads.svg" alt="Ads" /><span>Ads</span></a></li>
                    <li><a href="#"><img src="./../assets/img/shoutouts.svg" alt="Shoutouts" /><span>Shoutouts</span></a></li>
                    <li><a href="#"><img src="./../assets/img/boosting.svg" alt="Boosting" /><span>Boosting</span></a></li>
                    <li><a href="#"><img src="./../assets/img/community.svg" alt="Private communities" /><span>Private communities</span></a></li>
                    <li><a href="#"><img src="./../assets/img/chart.svg" alt="Reporting" /><span>Reporting</span></a></li>
                </ul>
                <ul class="nav-side">
                    <li><a href="#"><img src="./../assets/img/cog.svg" alt="Settings" /><span>Settings</span></a></li>
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
    </header>
</template>

<script>
import dropdown from './dropdown'

export default { 
	name: `App`,
		components: {
			dropdown
		},
	};
</script>
