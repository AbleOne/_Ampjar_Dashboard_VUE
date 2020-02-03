<template>
  	<div class="dashboard">
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <div class="text-center mb-6">
                    <h1 class="mb-4">What website platform do you use?</h1>
                    <p >You can choose to show some of your matched brands to your customers after they purchase from you on your ‘Thank You’ page and ‘Thank You’ emails.</p>
                    <p>Choose your platform, follow the instructions and we’ll take care of the rest.</p>
                </div>
                <form action="" class="flex flex-wrap  btn-group -mx-3">
                    <label for="platform-shopify" class="w-full md:w-1/3 lg:w-1/5 mb-6">
                        <input type="radio" name="platform-options" id="platform-shopify" autocomplete="off">
                        <div class="card-highlight p-3">
                            <div class="card rounded">
                                <img src="img/platform-shopify.png" alt="Platform Shopify" class=" max-w-2xl mb-4">
                                <strong class="whitespace-no-wrap text-sm">Shopify</strong>
                            </div>
                        </div>
                    </label>
                    <label for="platform-big-commerce" class="w-full md:w-1/3 lg:w-1/5 mb-6">
                        <input type="radio" name="platform-options" id="platform-big-commerce" autocomplete="off" checked>
                        <div class="card-highlight p-3">
                            <div class="card rounded">
                                <img src="img/platform-big-commerce.png" alt="Platform Big Commerce" class=" max-w-2xl mb-4">
                                <strong class="whitespace-no-wrap text-sm">Big Commerce</strong>
                            </div>
                        </div>
                    </label>
                    <label for="platform-wix" class="w-full md:w-1/3 lg:w-1/5 mb-6">
                        <input type="radio" name="platform-options" id="platform-wix" autocomplete="off">
                        <div class="card-highlight p-3">
                            <div class="card rounded">
                                <img src="img/platform-wix.png" alt="Platform WIX" class=" max-w-2xl mb-4">
                                <strong class="whitespace-no-wrap text-sm">WIX</strong>
                            </div>
                        </div>
                    </label>
                    <label for="platform-wordpress" class="w-full md:w-1/3 lg:w-1/5 mb-6">
                        <input type="radio" name="platform-options" id="platform-wordpress" autocomplete="off">
                        <div class="card-highlight p-3">
                            <div class="card rounded">
                                <img src="img/platform-wordpress.png" alt="Platform Wordpress" class=" max-w-2xl mb-4">
                                <strong class="whitespace-no-wrap text-sm">Wordpress</strong>
                            </div>
                        </div>
                    </label>
                    <label for="platform-other" class="w-full md:w-1/3 lg:w-1/5 mb-6">
                        <input type="radio" name="platform-options" id="platform-other" autocomplete="off">
                        <div class="card-highlight p-3">
                            <div class="card rounded">
                                <img src="img/platform-other.png" alt="Other Platform" class=" max-w-2xl mb-4">
                                <strong class="whitespace-no-wrap text-sm">Other</strong>
                            </div>
                        </div>
                    </label>
                    <div class="flex justify-center items-center w-full">
                        <button class="btn min-w-0 mr-3">Back</button>
                        <button type="submit" class="btn primary min-w-0">Set up</button>
                    </div>
                </form>
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
