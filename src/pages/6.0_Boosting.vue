<template>
  	<div class="dashboard">
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
