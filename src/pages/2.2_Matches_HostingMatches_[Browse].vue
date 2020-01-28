<template>
  	<div class="dashboard">
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <h1 class="mb-4">Hosting Matches</h1>
                <p class="mb-4">These are the brands whose content we’ll place in your emails, thank you pages and thank you emails to shout out to your customers. When we have created these matches for you we have done so based on customer profiling so you’re sharing content that you customers will be interested in. You can remove matches and add new ones at any time.</p>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</main>
	</div>
</template>

<script>
import navigation from '../src/components/navigation'
import dropdown from '../src/components/dropdown'

export default { 
	name: `App`,
		components: {
            navigation,
            dropdown
		},
	};
</script>
