    <template>
  	<div class="dashboard">
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <h1 class="mb-4">Sent Emails</h1>
                <div class="bg-white border border-gray-300 rounded px-5 pt-8 pb-4">
                    <!-- Table Flex -->
                        <!-- Table Flex Header -->
                        <div class="flex flex-wrap hidden lg:flex -mx-2 pb-3 border-b">
                            <div class="md:w-2/4 px-2">
                                <strong class="uppercase text-xxs text-gray-500 tracking-wide">Sent details</strong>
                            </div>
                            <div class="md:w-1/4 px-2">
                                <strong class="uppercase text-xxs text-gray-500 tracking-wide">Stats</strong>
                            </div>
                            <div class="md:w-1/4 px-2">
                                <strong class="uppercase text-xxs text-gray-500 tracking-wide">Preview</strong>
                            </div>
                        </div>
                        <!-- /Table Flex Header -->

                        <!-- Table Flex Row -->
                        <div class="flex flex-wrap -mx-1 md:-mx-2 py-2 lg:py-0 border-b">
                            <div class="flex flex-col w-full md:w-1/3 lg:w-2/4 px-1 md:px-2 py-0 lg:py-3 mb-4 lg:mb-0">
                                <time datetime="">Mon 9th Sep 2019 7.15pm</time>
                                <span class="text-xs">Sent 3 months ago</span>
                                <p class="text-xs">Share: <a href="#">Facebook</a> <a href="#">Twitter</a></p>
                            </div>
                            <div class="flex flex-col w-full md:w-1/3 lg:w-1/4 px-1 md:px-2 py-0 lg:py-3 mb-4 lg:mb-0">
                                <span>50 opens, 2 clicks</span>
                                <a href="#">View full stats</a>
                            </div>
                            <div class="flex flex-col w-full md:w-1/3 lg:w-1/4 px-1 md:px-2 py-0 lg:py-3">
                                <a href="#">View in browser</a>
                            </div>
                        </div>
                        <!-- /Table Flex Row -->
                        
                        <!-- Table Flex Row -->
                        <div class="flex flex-wrap -mx-1 md:-mx-2 py-2 lg:py-0 border-b">
                            <div class="flex flex-col w-full md:w-1/3 lg:w-2/4 px-1 md:px-2 py-0 lg:py-3 mb-4 lg:mb-0">
                                <time datetime="">Mon 8th Sep 2019 7.15pm</time>
                                <span class="text-xs">Sent 3 months ago</span>
                                <p class="text-xs">Share: <a href="#">Facebook</a> <a href="#">Twitter</a></p>
                            </div>
                            <div class="flex flex-col w-full md:w-1/3 lg:w-1/4 px-1 md:px-2 py-0 lg:py-3 mb-4 lg:mb-0">
                                <span>30 opens, 8 clicks</span>
                                <a href="#">View full stats</a>
                            </div>
                            <div class="flex flex-col w-full md:w-1/3 lg:w-1/4 px-1 md:px-2 py-0 lg:py-3">
                                <a href="#">View in browser</a>
                            </div>
                        </div>
                        <!-- /Table Flex Row -->
                        
                        <!-- Table Flex Row -->
                        <div class="flex flex-wrap -mx-1 md:-mx-2 py-2 lg:py-0 border-b">
                            <div class="flex flex-col w-full md:w-1/3 lg:w-2/4 px-1 md:px-2 py-0 lg:py-3 mb-4 lg:mb-0">
                                <time datetime="">Mon 7th Sep 2019 7.15pm</time>
                                <span class="text-xs">Sent 3 months ago</span>
                                <p class="text-xs">Share: <a href="#">Facebook</a> <a href="#">Twitter</a></p>
                            </div>
                            <div class="flex flex-col w-full md:w-1/3 lg:w-1/4 px-1 md:px-2 py-0 lg:py-3 mb-4 lg:mb-0">
                                <span>20 opens, 10 clicks</span>
                                <a href="#">View full stats</a>
                            </div>
                            <div class="flex flex-col w-full md:w-1/3 lg:w-1/4 px-1 md:px-2 py-0 lg:py-3">
                                <a href="#">View in browser</a>
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
