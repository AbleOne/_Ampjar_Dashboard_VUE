<template>
  	<div class="dashboard">
		<navigation/>
		<main class="main-content">
            <div class="container flex flex-col  mx-auto py-16 px-5">
                <div class="flex flex-col items-center">
                    <h1 class="text-center mb-4">Which subscriber list/s would you like to send your Ampjar emails to?</h1>
                    <p class="text-center">Your emails will be sent to all subscribers in each list.</p>
                    <form action="">
                        <div class="flex flex-col my-6">
                            <div class="checkbox-custom">
                                <input id="chck-list-1" type="checkbox">
                                <label for="chck-list-1" class="checkbox-label">
                                    List 1 Name here
                                </label>
                            </div>
                            <div class="checkbox-custom">
                                <input id="chck-list-2" type="checkbox">
                                <label for="chck-list-2" class="checkbox-label">
                                    List 2 Name here
                                </label>
                            </div>
                            <div class="checkbox-custom">
                                <input id="chck-list-3" type="checkbox">
                                <label for="chck-list-3" class="checkbox-label">
                                    List 3 Name here
                                </label>
                            </div>
                            <div class="checkbox-custom">
                                <input id="chck-list-4" type="checkbox">
                                <label for="chck-list-4" class="checkbox-label">
                                    List 4 Name here
                                </label>
                            </div>
                        </div>
                        <button class="btn primary mx-auto">Select Lists</button>
                    </form>
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
