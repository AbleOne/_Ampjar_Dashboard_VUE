<template>
  	<div class="dashboard">
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <div class="flex flex-wrap -mx-3">
                    <div class="flex w-full md:w-1/2 lg:w-1/3 px-3 mb-6 lg:mb-0">
                        <div class="card">
                            <h2>Set up Email</h2>
                            <p class="text-center flex-grow mb-8">Explainer sentence goes here Explainer sentence goes here</p>
                            <button class="btn primary">Set up</button>
                        </div>
                    </div>
                    <div class="flex w-full md:w-1/2 lg:w-1/3 px-3 mb-6 lg:mb-0">
                        <div class="card">
                            <h2>Set up Snippets</h2>
                            <p class="text-center flex-grow mb-8">Explainer sentence goes here Explainer sentence goes here</p>
                            <button class="btn primary">Set up</button>
                        </div>
                    </div>
                    <div class="flex w-full md:w-1/2 lg:w-1/3 px-3 mb-6 lg:mb-0">
                        <div class="card">
                            <h2>Set up Billing</h2>
                            <p class="text-center flex-grow mb-8">Explainer sentence goes here Explainer sentence goes here</p>
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
