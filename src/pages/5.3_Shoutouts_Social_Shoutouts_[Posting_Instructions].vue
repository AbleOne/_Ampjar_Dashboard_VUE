    <template>
  	<div class="dashboard">
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <h1 class="text-center mb-4">Posting Instructions</h1>
                <div class="flex flex-wrap justify-center -mx-6 lg:-mx-8 my-6">
                    <aside class="w-full md:w-2/5 lg:w-1/3 px-6 lg:px-8">
                        <img class="mb-8" src="https://via.placeholder.com/216x384?text=gif" alt="gif">
                        <strong class="uppercase text-xxs text-gray-500 tracking-widest inline-block  mb-3">Remember</strong>
                        <p class="text-sm mb-8">Instagram Stories disappear from your profile, feed and direct inbox after 24 hours, unless you add them to your profile as Highlights.</p>
                    </aside>
                    <div class="w-full md:w-3/5 lg:w-2/3 px-6 lg:px-8">
                        <ul>
                            <li class="flex  mb-2">
                                <span class="whitespace-no-wrap mr-2">Step 1:</span>
                                <p>Open Instagram, tap [icon] in the top left of your screen to open Stories.</p>
                            </li>
                            <li class="flex  mb-2">
                                <span class="whitespace-no-wrap mr-2">Step 2:</span>
                                <p>Choose the photo from your phone’s library or gallery, swipe up anywhere on the screen.</p>
                            </li>
                            <li class="flex  mb-2">
                                <span class="whitespace-no-wrap mr-2">Step 3:</span>
                                <div>
                                    <p>Put the following hashtag in the image</p>
                                    <input type="text" value="#AMP23478H" class="w-auto bg-transparent mb-3">
                                    <p>Do this in one of two ways:</p>
                                    <ol class="list-decimal list-inside">
                                        <li>Tap <img class="inline" src="img/icon-letters.png" alt="Letters"> tap the screen and click Paste, click Done OR</li>
                                        <li>Tap <img class="inline" src="img/icon-sticker.png" alt="Letters"> select the #HASHTAG sticker, tap the screen and click Paste.<br>
                                            *This must be completed in order for you to receive Amp Credits.*
                                        </li>
                                    </ol>
                                </div>
                            </li>
                            <li class="flex mb-2">
                                <span class="whitespace-no-wrap mr-2">Step 4:</span>
                                <p>Tag the brand by adding their @handle as text or as a @MENTION sticker. 
                                Put this tag over the top of the hashtag to make it look awesome!</p>
                            </li>
                            <li class="flex mb-2">
                                <span class="whitespace-no-wrap mr-2">Step 5:</span>
                                <p>If you have the feature, add a swipe up link to their website:
                                <a class="block" href="#">weblink from brand profile</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row justify-center">
                    <button class="btn min-w-0 md:mr-3 mb-3 md:mb-0">Back</button>
                    <button type="submit" class="btn primary min-w-0">Confirm Shoutout is Live</button>
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
