<template>
  	<div class="dashboard">
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <h1 class="text-center mb-4">What platform do you want to use to send your emails?</h1>
                <p class="text-center mb-4">You can choose to send your email campaigns using your  current Email Service Provider or through Ampjar. Either way we’ll help you build and style your campaigns in minutes.</p>
                <form action="" class="flex flex-wrap  btn-group -mx-3">
                    <label for="esp-mailchimp" class="w-full md:w-1/3 lg:w-1/5 mb-6">
                        <input type="radio" name="esp-options" id="esp-mailchimp" autocomplete="off" checked>
                        <div class="card-highlight p-3">
                            <div class="card rounded">
                                <img src="img/mailchimp.jpg" alt="littleprintables" class="rounded-full border max-w-2xl mb-4">
                                <strong class="whitespace-no-wrap text-sm">Mailchimp</strong>
                            </div>
                        </div>
                    </label>
                    <label for="esp-shopify" class="w-full md:w-1/3 lg:w-1/5 mb-6">
                        <input type="radio" name="esp-options" id="esp-shopify" autocomplete="off">
                        <div class="card-highlight p-3">
                            <div class="card rounded">
                                <img src="img/shopify.jpg" alt="littleprintables" class="rounded-full border max-w-2xl mb-4">
                                <strong class="whitespace-no-wrap text-sm">Shopify</strong>
                            </div>
                        </div>
                    </label>
                    <label for="esp-klaviyo" class="w-full md:w-1/3 lg:w-1/5 mb-6">
                        <input type="radio" name="esp-options" id="esp-klaviyo" autocomplete="off">
                        <div class="card-highlight p-3">
                            <div class="card rounded">
                                <img src="img/klaviyo.jpg" alt="littleprintables" class="rounded-full border max-w-2xl mb-4">
                                <strong class="whitespace-no-wrap text-sm">Klaviyo</strong>
                            </div>
                        </div>
                    </label>
                    <label for="esp-constant-contact" class="w-full md:w-1/3 lg:w-1/5 mb-6">
                        <input type="radio" name="esp-options" id="esp-constant-contact" autocomplete="off">
                        <div class="card-highlight p-3">
                            <div class="card rounded">
                                <img src="img/constant-contact.jpg" alt="littleprintables" class="rounded-full border max-w-2xl mb-4">
                                <strong class="whitespace-no-wrap text-sm">Constant Contact</strong>
                            </div>
                        </div>
                    </label>
                    <label for="esp-convert-kit" class="w-full md:w-1/3 lg:w-1/5 mb-6">
                        <input type="radio" name="esp-options" id="esp-convert-kit" autocomplete="off">
                        <div class="card-highlight p-3">
                            <div class="card rounded">
                                <img src="img/convert-kit.jpg" alt="littleprintables" class="rounded-full border max-w-2xl mb-4">
                                <strong class="whitespace-no-wrap text-sm">ConvertKit</strong>
                            </div>
                        </div>
                    </label>
                    <div class="flex flex-col items-center mx-auto">
                        <p class="mb-4">Your Email Service Provider not yet available? Let us know your preferred platform below.</p>
                        <div class="form-inline flex mx-auto mb-6">
                            <input id="search-adv-matches" type="text" placeholder="Enter your ESP">
                            <button class="btn primary -ml-px">Submit</button>
                        </div>
                        <a href="#" class="text-gray-800 underline mb-6">I want to use Ampjar to send my emails</a>
                        <button class="btn primary">Connect ESP</button>
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
