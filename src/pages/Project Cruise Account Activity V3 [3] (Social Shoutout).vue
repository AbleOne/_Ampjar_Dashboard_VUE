    <template>
  	<div class="dashboard">
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <h1 class="mb-4">Social Shoutout Statistics</h1>
                <div class="flex flex-wrap justify-center -mx-6 lg:-mx-2 my-6">
                    <aside class="w-full md:w-2/5 lg:w-1/3 px-6 lg:px-2">
                        <img class="md:w-full mb-8" src="https://via.placeholder.com/210x370?text=Pic_1" alt="Pic 1">
                    </aside>
                    <div class="w-full md:w-3/5 lg:w-2/3 px-6 lg:px-2">
                        <div class="bg-white border border-gray-300 rounded px-6 pt-8 pb-4">
                            <!-- Table Flex Row w Header -->
                                <div class="flex flex-wrap -mx-1 md:-mx-2">
                                    <div class="w-full px-1 md:px-2 pb-4">
                                        <strong class="uppercase text-xxs text-gray-500 tracking-wide">Instagram stories shoutout shared by</strong>
                                        <h2 class="mb-0">Jodi English Design</h2>
                                    </div>
                                </div>
                            <!-- /Table Flex Row w Header -->
                            
                            <!-- Table Flex Row w Header -->
                                <div class="flex flex-wrap -mx-1 md:-mx-2">
                                    <div class="w-full px-1 md:px-2 pt-3 pb-4">
                                        <strong class="uppercase text-xxs text-gray-500 tracking-wide">Date shared</strong>
                                        <time datetime="" class="text-lg block">14/02/2020</time>
                                    </div>
                                </div>
                            <!-- /Table Flex Row w Header -->
                            
                            <!-- Table Flex Row w Header -->
                                <div class="flex flex-wrap -mx-1 md:-mx-2">
                                    <div class="w-full md:w-1/2 px-1 md:px-2 pt-3 pb-4 border-b">
                                        <strong class="uppercase text-xxs text-gray-500 tracking-wide block relative">
                                            Reach
                                            <span class="tooltip-container inline ml-1"><img src="./assets/img/info-black.svg" alt="Info icon"></span>
                                            <p class="tooltip bg-ampjar_primary text-white">Total unique accounts who saw the story</p>
                                        </strong>
                                        <time datetime="" class="text-lg block">289</time>
                                    </div>
                                    <div class="w-full md:w-1/2 px-1 md:px-2 pt-3 pb-4 border-b">
                                        <strong class="uppercase text-xxs text-gray-500 tracking-wide block relative">
                                            Replies
                                            <span class="tooltip-container ml-1"><img src="./assets/img/info-black.svg" alt="Info icon"></span>
                                            <p class="tooltip bg-ampjar_primary text-white">Total replies the host received</p>
                                        </strong>
                                        <time datetime="" class="text-lg block">5</time>
                                    </div>
                                </div>
                            <!-- /Table Flex Row w Header -->
                            
                            <!-- Table Flex Row w Header -->
                                <div class="flex flex-wrap -mx-1 md:-mx-2">
                                    <div class="w-full md:w-1/2 px-1 md:px-2 pt-3 pb-4 border-b">
                                        <strong class="uppercase text-xxs text-gray-500 tracking-wide block relative">
                                            Shares
                                            <span class="tooltip-container ml-1"><img src="./assets/img/info-black.svg" alt="Info icon"></span>
                                            <p class="tooltip bg-ampjar_primary text-white">Total shares the post received</p>
                                        </strong>
                                        <time datetime="" class="text-lg block">11</time>
                                    </div>
                                    <div class="w-full md:w-1/2 px-1 md:px-2 pt-3 pb-4 border-b">
                                        <strong class="uppercase text-xxs text-gray-500 tracking-wide block relative">
                                            Profile visits
                                            <span class="tooltip-container ml-1"><img src="./assets/img/info-black.svg" alt="Info icon"></span>
                                            <p class="tooltip bg-ampjar_primary text-white">Total profile visits the host received</p>
                                        </strong>
                                        <time datetime="" class="text-lg block">1</time>
                                    </div>
                                </div>
                            <!-- /Table Flex Row w Header -->
                            
                            <!-- Table Flex Row w Header -->
                                <div class="flex flex-wrap -mx-1 md:-mx-2">
                                    <div class="w-full md:w-1/2 px-1 md:px-2 pt-3 pb-4 border-b">
                                        <strong class="uppercase text-xxs text-gray-500 tracking-wide block relative">
                                            Link clicks
                                            <span class="tooltip-container ml-1"><img src="./assets/img/info-black.svg" alt="Info icon"></span>
                                            <p class="tooltip bg-ampjar_primary text-white">Total link clicks the post received. Min. 10k followers and Swipe Up feature required.</p>
                                        </strong>
                                        <time datetime="" class="text-lg block">5</time>
                                    </div>
                                    <div class="w-full md:w-1/2 px-1 md:px-2 pt-3 pb-4 border-b">
                                        <strong class="uppercase text-xxs text-gray-500 tracking-wide block relative">
                                            Website clicks
                                            <span class="tooltip-container ml-1"><img src="./assets/img/info-black.svg" alt="Info icon"></span>
                                            <p class="tooltip bg-ampjar_primary text-white">Total website clicks the host received (via profile).</p>
                                        </strong>
                                        <time datetime="" class="text-lg block">4</time>
                                    </div>
                                </div>
                            <!-- /Table Flex Row w Header -->
                            
                            <!-- Table Flex Row w Header -->
                                <div class="flex flex-wrap -mx-1 md:-mx-2">
                                    <div class="w-full md:w-1/2 px-1 md:px-2 pt-3 pb-4">
                                        <strong class="uppercase text-xxs text-gray-500 tracking-wide block relative">
                                            Sticker taps
                                            <span class="tooltip-container ml-1"><img src="./assets/img/info-black.svg" alt="Info icon"></span>
                                            <p class="tooltip bg-ampjar_primary text-white">Total taps on a geotag, hashtag, mention, or product sticker</p>
                                        </strong>
                                        <time datetime="" class="text-lg block">12</time>
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
