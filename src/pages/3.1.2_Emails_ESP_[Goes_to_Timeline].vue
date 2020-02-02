<template>
  	<div class="dashboard">
		<navigation/>
		<main class="main-content">
            <div class="container text-center mx-auto py-16 px-5">
                <h1 class="mb-4">Success! You’re now synced with Mailchimp</h1>
                <p class="mb-4">One liner can go here if required.</p>
                <button class="btn primary mx-auto">Create my first email</button>
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
