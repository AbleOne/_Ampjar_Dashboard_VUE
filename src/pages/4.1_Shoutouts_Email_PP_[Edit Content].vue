    <template>
  	<div class="dashboard">
        <div class="modal-backdrop">
            <div class="modal">
                <button class="modal-close">
                    <svg aria-hidden="true" focusable="false" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg>
                </button>
                <div class="modal-content">
                    <h2 class="mb-4">Email Shoutout Preview</h2>
                    <div class="flex flex-row flex-wrap lg:flex-no-wrap items-stretch p-0 mb-5">
                        <div class="w-full lg:w-2/5 max-h-56 lg:max-h-none lg:mb-0 mb-6">
                            <img class="w-full h-full object-cover" src="https://via.placeholder.com/140?text=Pic_3" alt="Pic 3">
                        </div>
                        <div class="w-full lg:w-3/5 flex-grow flex flex-col justify-center lg:pl-5">
                            <form action="">
                                <div class="flex flex-col w-full mb-6">
                                    <label for="shoutout-text">Text</label>
                                    <textarea name="" id="shoutout-text" cols="30" rows="2" placeholder="Enter shoutout text here">We heart this Advent Calendar, full of positivity and kindness! Instant PDF download, ready to print and play.</textarea>
                                </div>
                                <div class="flex flex-wrap -mx-3">
                                    <div class="flex flex-col w-full md:w-1/2 px-3 mb-6">
                                        <label for="shoutout-btn-text">Button text</label>
                                        <input id="shoutout-btn-text" type="text" placeholder="Enter button text" value="SHOP NOW">
                                    </div>
                                    <div class="flex flex-col w-full md:w-1/2 px-3 mb-6">
                                        <label for="shoutout-btn-link">Button lext</label>
                                        <input id="shoutout-btn-link" type="text" placeholder="Enter button link" value="www.littleprintables.com">
                                    </div>
                                    <div class="flex flex-col w-full md:w-1/2 px-3 mb-6">
                                        <label for="shoutout-created">Created</label>
                                        <input type="date" name="shoutout-created" id="shoutout-created" value="2020-02-03">
                                    </div>
                                    <div class="flex flex-col w-full md:w-1/2 px-3 mb-6">
                                        <label for="shoutout-expiry">Created</label>
                                        <input type="date" name="shoutout-expiry" id="shoutout-expiry" value="2020-03-03">
                                    </div>
                                </div>
                                <!-- <div class="border-t lg:border-t-0 text-right w-full lg:w-4/12 mt-4 lg:mt-0 pt-4 lg:pt-0">
                                    <a class="px-4 py-2" href="#">Cancel</a>
                                    <button type="submit" class="btn primary min-w-0">Save</button>
                                </div> -->
                                <div class="flex flex-col md:flex-row justify-end border-t md:border-t-0 pt-6 md:pt-0">
                                    <button class="btn md:mr-3 mb-3 md:mb-0">Cancel</button>
                                    <button type="submit" class="btn primary">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<navigation/>
		<main class="main-content">
            <div class="container mx-auto py-16 px-5">
                <div class="flex justify-between items-center mb-4">
                    <h1 class="mb-0">Ads</h1>
                    <button class="btn primary">Create Ad</button>
                </div>
                <div class="flex flex-col">
                    <h2>Live Ad Content</h2>
                    <div class="card flex-row flex-wrap md:flex-no-wrap items-stretch p-0 mb-5">
                        <div class="w-full lg:w-1/5 max-h-56 md:max-h-none">
                            <img class="w-full h-full object-cover" src="https://via.placeholder.com/140?text=Pic_1" alt="Pic 1">
                        </div>
                        <div class="w-full md:w-3/5 lg:w-4/5 flex-grow flex flex-col p-4">
                            <div class="flex flex-wrap lg:flex-no-wrap text-sm">
                                <div class="flex-grow w-full lg:w-8/12">
                                    <div class="mb-4">
                                        <strong>Text</strong>
                                        <p>We heart this Advent Calendar, full of positivity and kindness! Instant PDF download, ready to print and play.</p>
                                    </div>
                                    <div class="flex flex-wrap lg:flex-no-wrap">
                                        <div class="w-full lg:w-1/2 mb-4 lg:mb-0">
                                            <strong>Website</strong>
                                            <p>www.google.com</p>
                                        </div>
                                        <div class="w-full lg:w-1/2">
                                            <strong>Expiry</strong>
                                            <p>29 January 2020</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-t lg:border-t-0 text-right w-full lg:w-4/12 mt-4 lg:mt-0 pt-4 lg:pt-0">
                                    <button class="btn min-w-0 mr-3">Perview</button>
                                    <button class="btn primary min-w-0">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card flex-row flex-wrap md:flex-no-wrap items-stretch p-0 mb-5">
                        <div class="w-full lg:w-1/5 max-h-56 md:max-h-none">
                            <img class="w-full h-full object-cover" src="https://via.placeholder.com/140?text=Pic_2" alt="Pic 2">
                        </div>
                        <div class="w-full md:w-3/5 lg:w-4/5 flex-grow flex flex-col p-4">
                            <div class="flex flex-wrap lg:flex-no-wrap text-sm">
                                <div class="flex-grow w-full lg:w-8/12">
                                    <div class="mb-4">
                                        <strong>Text</strong>
                                        <p>We heart this Advent Calendar, full of positivity and kindness! Instant PDF download, ready to print and play.</p>
                                    </div>
                                    <div class="flex flex-wrap lg:flex-no-wrap">
                                        <div class="w-full lg:w-1/2 mb-4 lg:mb-0">
                                            <strong>Website</strong>
                                            <p>www.google.com</p>
                                        </div>
                                        <div class="w-full lg:w-1/2">
                                            <strong>Expiry</strong>
                                            <p>29 January 2020</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-t lg:border-t-0 text-right w-full lg:w-4/12 mt-4 lg:mt-0 pt-4 lg:pt-0">
                                    <button class="btn min-w-0 mr-3">Perview</button>
                                    <button class="btn primary min-w-0">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card flex-row flex-wrap md:flex-no-wrap items-stretch p-0 mb-5">
                        <div class="w-full lg:w-1/5 max-h-56 md:max-h-none">
                            <img class="w-full h-full object-cover" src="https://via.placeholder.com/140?text=Pic_3" alt="Pic 3">
                        </div>
                        <div class="w-full md:w-3/5 lg:w-4/5 flex-grow flex flex-col p-4">
                            <div class="flex flex-wrap lg:flex-no-wrap text-sm">
                                <div class="flex-grow w-full lg:w-8/12">
                                    <div class="mb-4">
                                        <strong>Text</strong>
                                        <p>We heart this Advent Calendar, full of positivity and kindness! Instant PDF download, ready to print and play.</p>
                                    </div>
                                    <div class="flex flex-wrap lg:flex-no-wrap">
                                        <div class="w-full lg:w-1/2 mb-4 lg:mb-0">
                                            <strong>Website</strong>
                                            <p>www.google.com</p>
                                        </div>
                                        <div class="w-full lg:w-1/2">
                                            <strong>Expiry</strong>
                                            <p>29 January 2020</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-t lg:border-t-0 text-right w-full lg:w-4/12 mt-4 lg:mt-0 pt-4 lg:pt-0">
                                    <button class="btn min-w-0 mr-3">Perview</button>
                                    <button class="btn primary min-w-0">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col mt-4">
                    <h2>Archived Ad Content</h2>
                    <div class="card flex-row flex-wrap md:flex-no-wrap items-stretch p-0 mb-5">
                        <div class="w-full lg:w-1/5 max-h-56 md:max-h-none">
                            <img class="w-full h-full object-cover" src="https://via.placeholder.com/140?text=Pic_4" alt="Pic 4">
                        </div>
                        <div class="w-full md:w-3/5 lg:w-4/5 flex-grow flex flex-col p-4">
                            <div class="flex flex-wrap lg:flex-no-wrap text-sm">
                                <div class="flex-grow w-full lg:w-8/12">
                                    <div class="mb-4">
                                        <strong>Text</strong>
                                        <p>We heart this Advent Calendar, full of positivity and kindness! Instant PDF download, ready to print and play.</p>
                                    </div>
                                    <div class="flex flex-wrap lg:flex-no-wrap">
                                        <div class="w-full lg:w-1/2 mb-4 lg:mb-0">
                                            <strong>Website</strong>
                                            <p>www.google.com</p>
                                        </div>
                                        <div class="w-full lg:w-1/2">
                                            <strong>Expiry</strong>
                                            <p>29 January 2020</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-t lg:border-t-0 text-right w-full lg:w-4/12 mt-4 lg:mt-0 pt-4 lg:pt-0">
                                    <button class="btn min-w-0 mr-3">Perview</button>
                                    <button class="btn primary min-w-0">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</main>
	</div>
</template>

<script>
import navigation from '../src/components/navigation'
import dropdown from '../src/components/dropdown'
import StarRating from 'vue-star-rating'

export default { 
	name: `App`,
		components: {
            navigation,
            dropdown,
            StarRating
		},
	};
</script>
