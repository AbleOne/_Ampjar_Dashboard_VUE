    <template>
  	<div class="dashboard">
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <h1 class="mb-4">Email Statistics</h1>
                <div class="flex flex-wrap justify-center -mx-6 md:-mx-2 my-6">
                    <aside class="w-full md:w-1/2 px-6 md:px-2">
                        <img class="md:w-full mb-8" src="https://via.placeholder.com/210x370?text=number+of+clicks" alt="Number of clicks">
                    </aside>
                    <div class="w-full md:w-1/2 px-6 md:px-2">
                        <div class="bg-white border border-gray-300 rounded px-6 pt-8 pb-4">
                            <!-- Table Flex Row w Header -->
                                <div class="flex flex-wrap -mx-1 md:-mx-2">
                                    <div class="w-full px-1 md:px-2 pb-4">
                                        <strong class="uppercase text-xxs text-gray-500 tracking-wide">Email sent by</strong>
                                        <h2 class="mb-0">Jodi English Design</h2>
                                    </div>
                                </div>
                            <!-- /Table Flex Row w Header -->
                            
                            <!-- Table Flex Row w Header -->
                                <div class="flex flex-wrap -mx-1 md:-mx-2">
                                    <div class="w-full px-1 md:px-2 pb-4">
                                        <strong class="uppercase text-xxs text-gray-500 tracking-wide">Subject</strong>
                                        <p class="text-lg block">Kicking off the week with a Bang! ✨</p>
                                    </div>
                                </div>
                            <!-- /Table Flex Row w Header -->
                            
                            <!-- Table Flex Row w Header -->
                                <div class="flex flex-wrap -mx-1 md:-mx-2">
                                    <div class="w-full px-1 md:px-2 pt-3 pb-4">
                                        <strong class="uppercase text-xxs text-gray-500 tracking-wide">Date sent</strong>
                                        <time datetime="" class="text-lg block">14/02/2020 7.00pm</time>
                                    </div>
                                </div>
                            <!-- /Table Flex Row w Header -->
                            
                            <!-- Table Flex Row w Header -->
                                <div class="flex flex-wrap -mx-1 md:-mx-2">
                                    <div class="w-full md:w-1/2 px-1 md:px-2 pt-3 pb-4 border-b">
                                        <strong class="uppercase text-xxs text-gray-500 tracking-wide block relative">
                                            Total opens
                                        </strong>
                                        <span class="text-lg block">100</span>
                                    </div>
                                    <div class="w-full md:w-1/2 px-1 md:px-2 pt-3 pb-4 border-b">
                                        <strong class="uppercase text-xxs text-gray-500 tracking-wide block relative">
                                            Total open rate
                                        </strong>
                                        <span class="text-lg block">196%</span>
                                    </div>
                                </div>
                            <!-- /Table Flex Row w Header -->
                            
                            <!-- Table Flex Row w Header -->
                                <div class="flex flex-wrap -mx-1 md:-mx-2">
                                    <div class="w-full md:w-1/2 px-1 md:px-2 pt-3 pb-4 border-b">
                                        <strong class="uppercase text-xxs text-gray-500 tracking-wide block relative">
                                            Total clicks
                                        </strong>
                                        <span class="text-lg block">11</span>
                                    </div>
                                    <div class="w-full md:w-1/2 px-1 md:px-2 pt-3 pb-4 border-b">
                                        <strong class="uppercase text-xxs text-gray-500 tracking-wide block relative">
                                            Total click rate
                                        </strong>
                                        <span class="text-lg block">21%</span>
                                    </div>
                                </div>
                            <!-- /Table Flex Row w Header -->
                            
                            <!-- Table Flex Row w Header -->
                                <div class="flex flex-wrap -mx-1 md:-mx-2">
                                    <div class="w-full md:w-1/2 px-1 md:px-2 pt-3 pb-4 border-b md:border-b-0">
                                        <strong class="uppercase text-xxs text-gray-500 tracking-wide block relative">
                                            Total ad clicks
                                        </strong>
                                        <span class="text-lg block">9</span>
                                    </div>
                                    <div class="w-full md:w-1/2 px-1 md:px-2 pt-3 pb-4">
                                        <strong class="uppercase text-xxs text-gray-500 tracking-wide block relative">
                                            Total ad click rate
                                        </strong>
                                        <span class="text-lg block">18%</span>
                                    </div>
                                </div>
                            <!-- /Table Flex Row w Header -->
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
