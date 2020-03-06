    <template>
  	<div class="dashboard">
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <h1 class="mb-10">Balance and Reporting</h1>
                <div class="card flex-row flex-wrap justify-between p-5 mb-4">
                    <div class="flex whitespace-no-wrap text-sm my-1">
                        <span>Total Amp Credits: 500</span>
                        <img class="mx-2" src="img/ampcredit.svg" alt="Ampcredit">
                        <span class="text-gray-600 pr-8">$50 (USD)</span>
                    </div>
                    <div class="flex whitespace-no-wrap bg-red-300 rounded-full px-4 py-1 my-1">
                        <div class="relative flex items-center">
                            <strong class="text-xs text-white">110 credits expiring in 5 days</strong>
                            <span class="tooltip-container inline-flex items-center h-full ml-2"><img src="img/info.svg" alt="Info icon"></span>
                            <p class="tooltip bg-ampjar_primary text-white">Amp Credits are valid for 90 days</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap justify-between text-sm text-gray-600  mb-10">
                    <span>100 Amp Credits = $10 (USD)</span>
                    <a class="text-gray-600" href="#">Set up Payout Account</a> (Optional)</span>
                </div>
                <h2 class="mb-4">Your Payout Account</h2>
                <div class="card flex-row flex-wrap justify-between p-5 mb-10">
                    <div class="flex whitespace-no-wrap text-sm my-1">
                        <span>Bank account ending in 4242</span>
                    </div>
                    <div class="my-1">
                        <button class="btn min-w-0">Update Account</button>
                    </div>
                </div>
                <h2 class="mb-4">Your Account Activity</h2>
                <div class="bg-white border border-gray-300 rounded px-5 pt-8 pb-4">
                    <div class="flex justify-end -mx-1 mb-8">
						<div class="w-full md:w-1/3 lg:w-1/4 px-1">
							<div class="relative">
                                <select id="activity-period">
                                    <option selected>Last 30 days</option>
                                    <option>Last 60 days</option>
                                    <option>Last 90 days</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
						</div>
					</div>
                    <!-- Table Flex -->
                        <!-- Table Flex Header -->
                        <div class="flex flex-wrap hidden lg:flex -mx-2 pb-3 border-b">
                            <div class="md:w-1/6 px-2">
                                <strong class="uppercase text-xxs text-gray-500 tracking-wide">Date</strong>
                            </div>
                            <div class="md:w-1/6 px-2">
                                <strong class="uppercase text-xxs text-gray-500 tracking-wide">Action</strong>
                            </div>
                            <div class="md:w-1/6 px-2">
                                <strong class="uppercase text-xxs text-gray-500 tracking-wide">Shoutout</strong>
                            </div>
                            <div class="md:w-2/6 px-2">
                                <strong class="uppercase text-xxs text-gray-500 tracking-wide">Brand</strong>
                            </div>
                            <div class="md:w-1/6 text-right px-2">
                                <strong class="uppercase text-xxs text-gray-500 tracking-wide">Balance</strong>
                            </div>
                        </div>
                        <!-- /Table Flex Header -->

                        <!-- Table Flex Row -->
                        <div class="flex flex-wrap -mx-1 md:-mx-2 py-2 lg:py-0 border-b text-sm">
                            <div class="flex flex-col w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <time datetime="">14/02/2020</time>
                            </div>
                            <div class="flex flex-col w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <span>Hosted</span>
                            </div>
                            <div class="flex flex-col w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <span>Social</span>
                            </div>
                            <div class="flex flex-col w-full md:w-1/5 lg:w-2/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <p>
                                    <span class="inline-block mr-2">Little Printables</span>
                                    <a href="#">View</a>
                                </p>
                            </div>
                            <div class="flex flex-col items-start md:items-end w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <div class="flex items-center whitespace-no-wrap">
                                    <img src="img/ballance-arrow-down.svg" alt="Ballance arrow down">
                                    <span class="mx-2">200</span>
                                    <img src="img/ampcredit.svg" alt="Ampcredit">
                                </div>
                            </div>
                        </div>
                        <!-- /Table Flex Row -->
                        
                        <!-- Table Flex Row -->
                        <div class="flex flex-wrap -mx-1 md:-mx-2 py-2 lg:py-0 border-b text-sm">
                            <div class="flex flex-col w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <time datetime="">13/02/2020</time>
                            </div>
                            <div class="flex flex-col w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <span>Advertised</span>
                            </div>
                            <div class="flex flex-col w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <span>Email</span>
                            </div>
                            <div class="flex flex-col w-full md:w-1/5 lg:w-2/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <p>
                                    <span class="inline-block mr-2">Society State</span>
                                    <a href="#">View</a>
                                </p>
                            </div>
                            <div class="flex flex-col items-start md:items-end w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <div class="flex items-center whitespace-no-wrap">
                                    <img src="img/ballance-arrow-up.svg" alt="Ballance arrow down">
                                    <span class="mx-2">220</span>
                                    <img src="img/ampcredit.svg" alt="Ampcredit">
                                </div>
                            </div>
                        </div>
                        <!-- /Table Flex Row -->
                        
                        <!-- Table Flex Row -->
                        <div class="flex flex-wrap -mx-1 md:-mx-2 py-2 lg:py-0 border-b text-sm">
                            <div class="flex flex-col w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <time datetime="">12/02/2020</time>
                            </div>
                            <div class="flex flex-col w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <span>Advertised</span>
                            </div>
                            <div class="flex flex-col w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <span>Post-Checkout</span>
                            </div>
                            <div class="flex flex-col w-full md:w-1/5 lg:w-2/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <p>
                                    <span class="inline-block mr-2">Little Printables</span>
                                </p>
                            </div>
                            <div class="flex flex-col items-start md:items-end w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <div class="flex items-center whitespace-no-wrap">
                                    <img src="img/ballance-arrow-down.svg" alt="Ballance arrow down">
                                    <span class="mx-2">200</span>
                                    <img src="img/ampcredit.svg" alt="Ampcredit">
                                </div>
                            </div>
                        </div>
                        <!-- /Table Flex Row -->

                        <!-- Table Flex Row -->
                        <div class="flex flex-wrap -mx-1 md:-mx-2 py-2 lg:py-0 border-b text-sm">
                            <div class="flex flex-col w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <time datetime="">23/01/2020</time>
                            </div>
                            <div class="flex flex-col w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <span>Boosted - Tier 1</span>
                            </div>
                            <div class="flex flex-col w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <span>N/A</span>
                            </div>
                            <div class="flex flex-col w-full md:w-1/5 lg:w-2/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <p>
                                    <span class="inline-block mr-2">N/A</span>
                                </p>
                            </div>
                            <div class="flex flex-col items-start md:items-end w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <div class="flex items-center whitespace-no-wrap">
                                    <img src="img/ballance-arrow-up.svg" alt="Ballance arrow down">
                                    <span class="mx-2">500</span>
                                    <img src="img/ampcredit.svg" alt="Ampcredit">
                                </div>
                            </div>
                        </div>
                        <!-- /Table Flex Row -->
                        
                        <!-- Table Flex Row -->
                        <div class="flex flex-wrap -mx-1 md:-mx-2 py-2 lg:py-0 border-b text-sm">
                            <div class="flex flex-col w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <time datetime="">14/01/2020</time>
                            </div>
                            <div class="flex flex-col w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <span>Hosted</span>
                            </div>
                            <div class="flex flex-col w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <span>Social</span>
                            </div>
                            <div class="flex flex-col w-full md:w-1/5 lg:w-2/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <p>
                                    <span class="inline-block mr-2">Leah Ladson</span>
                                    <a href="#">View</a>
                                </p>
                            </div>
                            <div class="flex flex-col items-start md:items-end w-full md:w-1/5 lg:w-1/6 px-1 md:px-2 py-0 lg:py-3 mb-2 lg:mb-0">
                                <div class="flex items-center whitespace-no-wrap">
                                    <img src="img/ballance-arrow-up.svg" alt="Ballance arrow down">
                                    <span class="mx-2">720</span>
                                    <img src="img/ampcredit.svg" alt="Ampcredit">
                                </div>
                            </div>
                        </div>
                        <!-- /Table Flex Row -->
                        
                    <!-- /Table Flex -->
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
import StarRating from 'vue-star-rating'

export default { 
	name: `App`,
		components: {
            navigation,
            dropdown,
            StarRating
		},
	};
</script>
