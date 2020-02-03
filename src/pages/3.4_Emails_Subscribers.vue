    <template>
  	<div class="dashboard">
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <h1 class="mb-4">Subscribers</h1>
                <div class="bg-white border border-gray-300 rounded px-5 pt-8 pb-4">
                    <div class="flex flex-wrap -mx-1 md:mb-8">
                        <div class="w-full lg:w-1/5 px-1 leading-tight mb-4 lg:mb-0">
							<strong class="uppercase text-xxs text-gray-500 tracking-wide">You currently have</strong>
							<h2 class="mb-0"><span>702</span>     subscribers</h2>
						</div>
						<div class="w-full md:w-1/4 lg:w-1/5 px-1 mb-6 lg:mb-0">
							<div class="relative">
                                <select id="grid-state">
                                    <option selected>Subscribers</option>
                                    <option>Unsubscribers</option>
                                    <option>To Review</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
						</div>
						<div class="w-full md:w-2/4 lg:w-2/5 px-1 mb-6 lg:mb-0">
							<div class="form-inline flex w-full">
                                <input id="search-adv-matches" type="text" placeholder="Search">
                                <button class="btn outline min-w-0   -ml-px">Search</button>
                            </div>
						</div>
						<div class="w-full md:w-1/4 lg:w-1/5 px-1 mb-6 lg:mb-0">
							<div class="relative">
                                <select id="grid-state">
                                    <option selected>Export</option>
                                    <option>Other option</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
						</div>
					</div>
                    <!-- Table Flex -->
                        <!-- Table Flex Header -->
                        <div class="flex flex-wrap hidden md:flex -mx-2 pb-3 border-b">
                            <div class="md:w-2/4 px-2">
                                <strong class="uppercase text-xxs text-gray-500 tracking-wide">Email</strong>
                            </div>
                            <div class="md:w-1/4 px-2">
                                <strong class="uppercase text-xxs text-gray-500 tracking-wide">Name</strong>
                            </div>
                            <div class="md:w-1/4 px-2">
                                <strong class="uppercase text-xxs text-gray-500 tracking-wide">Subscribed</strong>
                            </div>
                        </div>
                        <!-- /Table Flex Header -->

                        <!-- Table Flex Row -->
                        <div class="flex flex-wrap -mx-1 md:-mx-2 py-2 md:py-0 border-b">
                            <div class="w-full md:w-2/4 px-1 md:px-2 py-0 md:py-3">
                                <a href="#">example@gmail.com</a>
                            </div>
                            <div class="w-full md:w-1/4 px-1 md:px-2 py-0 md:py-3">
                                <a href="#">Name</a>
                            </div>
                            <div class="w-full md:w-1/4 px-1 md:px-2 py-0 md:py-3">
                                <span>3 months ago</span>
                            </div>
                        </div>
                        <!-- /Table Flex Row -->
                        
                        <!-- Table Flex Row -->
                        <div class="flex flex-wrap -mx-1 md:-mx-2 py-2 md:py-0 border-b">
                            <div class="w-full md:w-2/4 px-1 md:px-2 py-0 md:py-3">
                                <a href="#">example@gmail.com</a>
                            </div>
                            <div class="w-full md:w-1/4 px-1 md:px-2 py-0 md:py-3">
                                <a href="#">Name</a>
                            </div>
                            <div class="w-full md:w-1/4 px-1 md:px-2 py-0 md:py-3">
                                <span>3 months ago</span>
                            </div>
                        </div>
                        <!-- /Table Flex Row -->
                        
                        <!-- Table Flex Row -->
                        <div class="flex flex-wrap -mx-1 md:-mx-2 py-2 md:py-0 border-b">
                            <div class="w-full md:w-2/4 px-1 md:px-2 py-0 md:py-3">
                                <a href="#">example@gmail.com</a>
                            </div>
                            <div class="w-full md:w-1/4 px-1 md:px-2 py-0 md:py-3">
                                <a href="#">Name</a>
                            </div>
                            <div class="w-full md:w-1/4 px-1 md:px-2 py-0 md:py-3">
                                <span>3 months ago</span>
                            </div>
                        </div>
                        <!-- /Table Flex Row -->
                        
                        <!-- Table Flex Row -->
                        <div class="flex flex-wrap -mx-1 md:-mx-2 py-2 md:py-0 border-b">
                            <div class="w-full md:w-2/4 px-1 md:px-2 py-0 md:py-3">
                                <a href="#">example@gmail.com</a>
                            </div>
                            <div class="w-full md:w-1/4 px-1 md:px-2 py-0 md:py-3">
                                <a href="#">Name</a>
                            </div>
                            <div class="w-full md:w-1/4 px-1 md:px-2 py-0 md:py-3">
                                <span>3 months ago</span>
                            </div>
                        </div>
                        <!-- /Table Flex Row -->
                        
                        <!-- Table Flex Row -->
                        <div class="flex flex-wrap -mx-1 md:-mx-2 py-2 md:py-0 border-b">
                            <div class="w-full md:w-2/4 px-1 md:px-2 py-0 md:py-3">
                                <a href="#">example@gmail.com</a>
                            </div>
                            <div class="w-full md:w-1/4 px-1 md:px-2 py-0 md:py-3">
                                <a href="#">Name</a>
                            </div>
                            <div class="w-full md:w-1/4 px-1 md:px-2 py-0 md:py-3">
                                <span>3 months ago</span>
                            </div>
                        </div>
                        <!-- /Table Flex Row -->
                        
                        <!-- Table Flex Row -->
                        <div class="flex flex-wrap -mx-1 md:-mx-2 py-2 md:py-0 border-b">
                            <div class="w-full md:w-2/4 px-1 md:px-2 py-0 md:py-3">
                                <a href="#">example@gmail.com</a>
                            </div>
                            <div class="w-full md:w-1/4 px-1 md:px-2 py-0 md:py-3">
                                <a href="#">Name</a>
                            </div>
                            <div class="w-full md:w-1/4 px-1 md:px-2 py-0 md:py-3">
                                <span>3 months ago</span>
                            </div>
                        </div>
                        <!-- /Table Flex Row -->
                        
                        <!-- Table Flex Row -->
                        <div class="flex flex-wrap -mx-1 md:-mx-2 py-2 md:py-0 border-b">
                            <div class="w-full md:w-2/4 px-1 md:px-2 py-0 md:py-3">
                                <a href="#">example@gmail.com</a>
                            </div>
                            <div class="w-full md:w-1/4 px-1 md:px-2 py-0 md:py-3">
                                <a href="#">Name</a>
                            </div>
                            <div class="w-full md:w-1/4 px-1 md:px-2 py-0 md:py-3">
                                <span>3 months ago</span>
                            </div>
                        </div>
                        <!-- /Table Flex Row -->
                        
                        <!-- Table Flex Row -->
                        <div class="flex flex-wrap -mx-1 md:-mx-2 py-2 md:py-0 border-b">
                            <div class="w-full md:w-2/4 px-1 md:px-2 py-0 md:py-3">
                                <a href="#">example@gmail.com</a>
                            </div>
                            <div class="w-full md:w-1/4 px-1 md:px-2 py-0 md:py-3">
                                <a href="#">Name</a>
                            </div>
                            <div class="w-full md:w-1/4 px-1 md:px-2 py-0 md:py-3">
                                <span>3 months ago</span>
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
