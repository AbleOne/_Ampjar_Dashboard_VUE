<template>
  	<div class="dashboard">
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <h1 class="text-center mb-4">Wordpress all the way!</h1>
                <p class="text-center mb-6" >Simply follow the instructions to set up your ‘Thank You’ page and ‘Thank You’ email below. 
It’ll take you less than 3 minutes.</p>
                <div class="accordion">
                    <div class="accordion-item">
                        <button class="accordion-item-btn ">
                            <img src="../src/assets/img/accordion-minus.svg" alt="minus - accordion - expanded">
                            <img src="../src/assets/img/accordion-plus.svg" alt="plus - accordion - collapsed">
                            <strong>Instructions to Set up Thank You page</strong>
                        </button>
                        <div class="accordion-item-content">
                            <ul>
                                <li class="flex  mb-2">
                                    <span class="whitespace-no-wrap mr-2">Step 1:</span>
                                    <div class="min-w-0">
                                        <p>Select the following code, copy it to your clipboard with cmd + c on a Mac or ctrl + c on a PC.</p>
                                        <div class="bg-white border border-gray-300 rounded p-4">
                                            <pre><code>&lt;p&gt;Put the following hashtag in the image&lt;/p&gt;
    &lt;input type=&quot;text&quot; value=&quot;#AMP23478H&quot; class=&quot;w-auto bg-transparent mb-3&quot;&gt;
&lt;p&gt;Do this in one of two ways:&lt;/p&gt;</code></pre>
                                        </div>
                                    </div>
                                </li>
                                <li class="flex  mb-2">
                                    <span class="whitespace-no-wrap mr-2">Step 2:</span>
                                    <p>Step 2 description</p>
                                </li>
                                <li class="flex  mb-2">
                                    <span class="whitespace-no-wrap mr-2">Step 3:</span>
                                    <p>Step 3 description</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="accordion-item collapsed">
                        <button class="accordion-item-btn">
                            <img src="../src/assets/img/accordion-minus.svg" alt="minus - accordion - expanded">
                            <img src="../src/assets/img/accordion-plus.svg" alt="plus - accordion - collapsed">
                            <strong>Instructions to test Thank You page</strong>
                        </button>
                        <div class="accordion-item-content">
                            <p>Accordion item 2nd contnet goes here</p>
                        </div>
                    </div>
                    <div class="accordion-item collapsed">
                        <button class="accordion-item-btn">
                            <img src="../src/assets/img/accordion-minus.svg" alt="minus - accordion - expanded">
                            <img src="../src/assets/img/accordion-plus.svg" alt="plus - accordion - collapsed">
                            <strong>Instructions to Set up Thank You email</strong>
                        </button>
                        <div class="accordion-item-content">
                            <p>Accordion item 3rd contnet goes here</p>
                        </div>
                    </div>
                    <div class="accordion-item collapsed">
                        <button class="accordion-item-btn">
                            <img src="../src/assets/img/accordion-minus.svg" alt="minus - accordion - expanded">
                            <img src="../src/assets/img/accordion-plus.svg" alt="plus - accordion - collapsed">
                            <strong>Instructions to test Thank You email</strong>
                        </button>
                        <div class="accordion-item-content">
                            <p>Accordion item 2nd contnet goes here</p>
                        </div>
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
