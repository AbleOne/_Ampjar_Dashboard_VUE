<template>
  	<div class="dashboard">
        <div class="modal-backdrop">
            <div class="modal">
                <button class="modal-close">
                    <svg aria-hidden="true" focusable="false" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg>
                </button>
                <div class="modal-content">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full lg:w-1/2 px-4">
                            <div class="card-sm mt-6">
                                <div class="bg-gray-100 w-full p-3">
                                    <div class="flex -mt-10 justify-between items-end pb-3">
                                        <img src="img/littleprintables.jpg" alt="littleprintables" class="rounded-full border max-w-2xl">
                                    </div>
                                    <a class="text-xs" href="#">@littleprintables</a>
                                    <div class="flex justify-between">
                                        <strong>Little Printables</strong>
                                    </div>
                                </div>
                                <div class="w-full p-3">
                                    <strong class="text-xs">Website</strong>
                                    <p class="break-words">www.website.com</p>
                                    <strong class="text-xs">Instagram</strong>
                                    <p class="break-words">https://www.instagram.com/littleprintables</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full lg:w-1/2 px-4 mt-3">
                            <div class="flex flex-wrap sm:flex-no-wrap items-center mb-5 ">
                                <img class="self-center max-w-32 mr-8 my-3" src="https://via.placeholder.com/125?text=Pic_1" alt="Pic 1">
                                <div class="flex flex-col w-full text-xs">
                                    <p>We heart this Advent Calendar, full of positivity and kindness! Instant PDF download, ready to print and play.</p>
                                    <button class="btn outline primary w-auto sm:w-full">Shop now</button>
                                </div>
                            </div>
                            <div class="flex flex-wrap sm:flex-no-wrap items-center mb-5 ">
                                <img class="self-center max-w-32 mr-8 my-3" src="https://via.placeholder.com/125?text=Pic_2" alt="Pic 2">
                                <div class="flex flex-col w-full text-xs">
                                    <p>We heart this Advent Calendar, full of positivity and kindness! Instant PDF download, ready to print and play.</p>
                                    <button class="btn outline primary w-auto sm:w-full">Shop now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <h1 class="mb-4">Hosting Matches</h1>
                <p class="mb-4">These are the brands whose content we’ll place in your emails, thank you pages and thank you emails to shout out to your customers. When we have created these matches for you we have done so based on customer profiling so you’re sharing content that you customers will be interested in. You can remove matches and adropdown new ones at any time.</p>
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
                                        <div class="dropdown dropdown-menu-right-top">
                                            <button><img src="img/dropdown.svg" alt="dropdown arrow" /></button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-menu-item" href="#">Unmatch for now</a>
                                                <a class="dropdown-menu-item" href="#">Unmatch forever</a>
                                                <a class="dropdown-menu-item" href="#">View Profile</a>
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
                                        <div class="dropdown dropdown-menu-right-top">
                                            <button><img src="img/dropdown.svg" alt="dropdown arrow" /></button>
                                            <div class="dropdown-menu hidden">
                                                <a class="dropdown-menu-item" href="#">Unmatch for now</a>
                                                <a class="dropdown-menu-item" href="#">Unmatch forever</a>
                                                <a class="dropdown-menu-item" href="#">View Profile</a>
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
                                        <div class="dropdown dropdown-menu-right-top">
                                            <button><img src="img/dropdown.svg" alt="dropdown arrow" /></button>
                                            <div class="dropdown-menu hidden">
                                                <a class="dropdown-menu-item" href="#">Unmatch for now</a>
                                                <a class="dropdown-menu-item" href="#">Unmatch forever</a>
                                                <a class="dropdown-menu-item" href="#">View Profile</a>
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
                            <button class="btn outline -ml-px">Search</button>
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
                                        <div class="dropdown dropdown-menu-right-top ">
                                            <button><img src="img/dropdown.svg" alt="dropdown arrow" /></button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-menu-item" href="#">Request to Advertise with</a>
                                                <a class="dropdown-menu-item" href="#">Request to Advertise with &amp; Host</a>
                                                <a class="dropdown-menu-item" href="#">Cancel Request</a>
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
                                        <div class="dropdown dropdown-menu-right-top">
                                            <button><img src="img/dropdown.svg" alt="dropdown arrow" /></button>
                                            <div class="dropdown-menu hidden">
                                                <a class="dropdown-menu-item" href="#">Unmatch for now</a>
                                                <a class="dropdown-menu-item" href="#">Unmatch forever</a>
                                                <a class="dropdown-menu-item" href="#">View Profile</a>
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
                                        <div class="dropdown dropdown-menu-right-top">
                                            <button><img src="img/dropdown.svg" alt="dropdown arrow" /></button>
                                            <div class="dropdown-menu hidden">
                                                <a class="dropdown-menu-item" href="#">Unmatch for now</a>
                                                <a class="dropdown-menu-item" href="#">Unmatch forever</a>
                                                <a class="dropdown-menu-item" href="#">View Profile</a>
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
                                        <div class="dropdown dropdown-menu-right-top">
                                            <button><img src="img/dropdown.svg" alt="dropdown arrow" /></button>
                                            <div class="dropdown-menu hidden">
                                                <a class="dropdown-menu-item" href="#">Unmatch for now</a>
                                                <a class="dropdown-menu-item" href="#">Unmatch forever</a>
                                                <a class="dropdown-menu-item" href="#">View Profile</a>
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
                                        <div class="dropdown dropdown-menu-right-top">
                                            <button><img src="img/dropdown.svg" alt="dropdown arrow" /></button>
                                            <div class="dropdown-menu hidden">
                                                <a class="dropdown-menu-item" href="#">Unmatch for now</a>
                                                <a class="dropdown-menu-item" href="#">Unmatch forever</a>
                                                <a class="dropdown-menu-item" href="#">View Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pagination">
                        <span>Page</span>
                        <button class="btn primary">1</button>
                        <span>...</span>
                        <button class="btn outline">5</button>
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
