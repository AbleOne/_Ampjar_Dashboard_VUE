<template>
  	<div class="dashboard">
        <div class="modal-backdrop">
            <div class="modal">
                <button class="modal-close">
                    <svg aria-hidden="true" focusable="false" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg>
                </button>
                <div class="modal-content">
                    <h1 class="mb-41">Boost</h1>
                    <p>You are boosting your content for X days at a one time cost of $27. (USD).</p>
                    <h2 class="mb-4">Payment method</h2>
                    <div class="card p-5 mx-1 w-auto sm:flex-row justify-between sm:justify-between">
                        <div class="flex items-center mb-4 sm:mb-0">
                            <img src="img/visa.png" alt="Visa Credit Card">
                            <span class="text-sm pl-3 pr-8">Ending in 4242</span>
                        </div>
                        <div class="flex flex-col lg:flex-row justify-end">
                            <button class="btn outline min-w-0 lg:mr-3 mb-3 lg:mb-0">Remove Card</button>
                            <button class="btn outline min-w-0">Use different Credit Card</button>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row justify-end mt-6">
                        <button class="btn outline md:mr-3 mb-3 md:mb-0">Cancel</button>
                        <button class="btn primary">Confirm Boost</button>
                    </div>
                </div>
            </div>
        </div>
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <h1>Boosting</h1>
                <p class="mb-6">Want to reach even more of your ideal customers? With each tiered Boost Pack, Ampjar shows your content to more of your ideal customers. This is perfect for gaining reach heading into course launches, holidays etc. <a href="#">Learn more about Boosting</a>.</p>
                <div class="flex flex-wrap -mx-2">
                    <div class="flex w-full md:w-1/2 lg:w-1/3 px-2 mb-6 lg:mb-0">
                        <div class="card">
                            <h1 class="mb-4">$27</h1>
                            <h2>Tell the room</h2>
                            <p class="text-center flex-grow mb-5">A great way to support a small promotion or new product release</p>
                            <button class="btn primary">Boost</button>
                        </div>
                    </div>
                    <div class="flex w-full md:w-1/2 lg:w-1/3 px-2 mb-6 lg:mb-0">
                        <div class="card">
                            <h1 class="mb-4">$47</h1>
                            <h2>Megaphone</h2>
                            <p class="text-center flex-grow mb-5">Put some real volume behind your campaign</p>
                            <button class="btn primary">Boost</button>
                        </div>
                    </div>
                    <div class="flex w-full md:w-1/2 lg:w-1/3 px-2 mb-6 lg:mb-0">
                        <div class="card">
                            <h1 class="mb-4">$89</h1>
                            <h2>Rockstar Mic</h2>
                            <p class="text-center flex-grow mb-5">Turn your campaign upto 11</p>
                            <button class="btn primary">Boost</button>
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
