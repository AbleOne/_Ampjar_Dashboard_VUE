<template>
  	<div class="dashboard">
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <h1 class="mb-4">Pending Matches</h1>
                <p class="mb-10">These pending matches will be approved in &lt;x&gt; days. You will then be able to advertise, host and shoutout these brands.</p>
                <h2 class="mb-4">Advertising</h2>
                <div class="bg-white border border-gray-300 rounded px-8 sm:px-16 pt-8 pb-4 mb-10">
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
                                <div class="w-full p-3">
                                    <strong class="text-xs">Reach</strong>
                                    <p>5000 subscribers</p>
                                    <strong class="text-xs">Engagement</strong>
                                    <star-rating :show-rating="false" :star-size="12"></star-rating>
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
                <h2 class="mb-4">Hosting</h2>
                <div class="bg-white border border-gray-300 rounded px-16 pt-8 pb-4">
                    <div class="flex flex-wrap -mx-3">
                        <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div class="card-sm mt-6">
                                <div class="bg-gray-100 w-full p-3">
                                    <div class="flex -mt-10 justify-between items-end pb-3">
                                        <img src="img/littleprintables.jpg" alt="littleprintables" class="rounded-full border max-w-2xl">
                                        <span class="card-label  bg-ampjar_primary text-white">Matched</span>
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
                                        <span class="card-label  bg-ampjar_primary text-white">Unmatched</span>
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
                                        <span class="card-label  bg-ampjar_primary text-white">Matched</span>
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
                            <div class="card-sm mt-6 opacity-50">
                                <div class="bg-gray-100 w-full p-3">
                                    <div class="flex -mt-10 justify-between items-end pb-3">
                                        <img src="img/littleprintables.jpg" alt="littleprintables" class="rounded-full border max-w-2xl">
                                        <span class="card-label  bg-ampjar_primary text-white">Unmatched</span>
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
