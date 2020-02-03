<template>
  	<div class="dashboard">
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <div class="text-center mb-6">
                    <h1 class="mb-4">Great choice!</h1>
                    <p >Simply install our free Shopify app, AmpSync, available in the app store and follow the instructions to set up. It'll take you less than 3 minutes.</p>
                </div>
                <div class="flex justify-center items-center w-full">
                    <button class="btn min-w-0 mr-3">Cancel</button>
                    <button type="submit" class="btn primary min-w-0">Install AmpSync</button>
                </div>
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
