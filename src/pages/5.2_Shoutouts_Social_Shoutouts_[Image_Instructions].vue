    <template>
  	<div class="dashboard">
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <div class="text-center">
                    <h1 class="mb-4">The Shoutout image is on it’s way!</h1>
                    <p>We just emailed the image to you. When you have it, tap and hold the shoutout image. Click Download image (Android) or Save image (iPhone), save it to your gallery and click Next.</p>
                    <div class="flex flex-wrap justify-center -mx-1 my-6">
                        <div class="w-full sm:w-1/2 md:w-1/3 px-1">
                            <div class="p-2 bg-gray-100">
                                <img class="w-full h-full object-cover" src="https://via.placeholder.com/210x370?text=Pic_1" alt="Pic 1">
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button class="btn min-w-0 mr-3">Back</button>
                        <button class="btn primary min-w-0">Next</button>
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
