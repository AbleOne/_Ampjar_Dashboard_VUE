<template>
  	<div class="dashboard">
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <h1 class="text-center mb-4">Wordpress all the way!</h1>
                <p class="text-center mb-6" >Simply follow the instructions to set up your ‘Thank You’ page and ‘Thank You’ email below. 
It’ll take you less than 3 minutes.</p>
                <h2>Set up Thank You Page</h2>
                <div class="flex flex-wrap justify-between pb-3 my-6 border-b border-ampjar_border">
                    <div class="flex flex-col pb-3 pr-3">
                        <span>Two liner goes here</span>
                        <span>Two liner goes here</span>
                    </div>
                    <div class="pb-3">
                        <button class="btn primary min-w-24 mr-3">Set up</button>
                        <button class="btn primary min-w-24">Test</button>
                    </div>
                </div>
                <h2>Set up Thank You Email</h2>
                <div class="flex flex-wrap justify-between pb-3 my-6 border-b border-ampjar_border">
                    <div class="flex flex-col pb-3 pr-3">
                        <span>Two liner goes here</span>
                        <span>Two liner goes here</span>
                    </div>
                    <div class="pb-3">
                        <button class="btn primary min-w-24 mr-3">Set up</button>
                        <button class="btn primary min-w-24">Test</button>
                    </div>
                </div>
                <p class="text-center mb-6">Need some help? Got a question? Get in touch via the blue bubble on the bottom right of this screen.</p>
                <div class="flex justify-center items-center w-full">
                    <button class="btn min-w-0 mr-3">Cancel</button>
                    <button type="submit" class="btn primary min-w-0">Mark as complete</button>
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
