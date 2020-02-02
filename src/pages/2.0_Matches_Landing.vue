<template>
  	<div class="dashboard">
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <h1 class="mb-16">Matches</h1>
                <div class="flex flex-wrap -mx-3">
                    <div class="flex w-full md:w-1/2 px-3 mb-6">
                        <div class="card">
                            <h2>Advertising Matches</h2>
                            <p class="text-center flex-grow mb-8">Brands we’ve matched you with because their customers are perfect for you. These brands will shout you out to their customers.</p>
                            <button class="btn primary">Set up</button>
                        </div>
                    </div>
                    <div class="flex w-full md:w-1/2 px-3 mb-6">
                        <div class="card">
                            <h2>Hosting Matches</h2>
                            <p class="text-center flex-grow mb-8">Brands that we think your customers would love hearing about. Shout them out in your emails, stories and on your website.</p>
                            <button class="btn primary">Set up</button>
                        </div>
                    </div>
                </div>
            </div>
		</main>
	</div>
</template>

<script>
import dropdown from '../src/components/dropdown'
import navigation from '../src/components/navigation'

export default { 
	name: `App`,
		components: {
			navigation,
			dropdown
		},
	};
</script>