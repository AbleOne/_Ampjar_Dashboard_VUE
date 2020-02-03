    <template>
  	<div class="dashboard">
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <div class="text-center">
                    <h1 class="mb-4">Select your Social Shoutout image</h1>
                    <p>You can shout out your matched brands in your Instagram stories. Anytime you do, you’ll earn Amp Credits and our smart engine will prompt one of your matched brands to shout you out in return. Try it out now.</p>
                    <p>You are browsing available images from the same brand.</p>
                    <div class="flex flex-wrap -mx-1 my-6">
                        <div class="w-full sm:w-1/2 md:w-1/3 px-1">
                            <div class="p-2 bg-gray-100">
                                <img class  ="w-full h-full object-cover" src="https://via.placeholder.com/220x250?text=Pic_1" alt="Pic 1">
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 md:w-1/3 px-1">
                            <div class="p-2">
                                <img class="w-full h-full object-cover" src="https://via.placeholder.com/220x250?text=Pic_2" alt="Pic 2">
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 md:w-1/3 px-1">
                            <div class="p-2">
                                <img class="w-full h-full object-cover" src="https://via.placeholder.com/220x250?text=Pic_3" alt="Pic 3">
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row justify-center">
                        <button class="btn min-w-0 md:mr-3 mb-3 md:mb-0">Choose from another brand</button>
                        <button type="submit" class="btn primary min-w-0">Next</button>
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
