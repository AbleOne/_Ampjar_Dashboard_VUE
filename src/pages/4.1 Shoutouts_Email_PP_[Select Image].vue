    <template>
  	<div class="dashboard">
        <div class="modal-backdrop">
            <div class="modal">
                <button class="modal-close">
                    <svg aria-hidden="true" focusable="false" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg>
                </button>
                <div class="modal-content">
                    <h2 class="mb-4">Select image</h2>
                    <form action="">
                        <p>Upload an image from your computer.</p>
                        <div class="file-custom mb-5">
                            <input type="file" class="file-custom-input" id="importFile">
                            <label class="file-custom-label" for="customFile">Choose file</label>
                        </div>
                    </form>
                    <p>Upload an image from Instagram</p>
                    <div class="flex flex-wrap -mx-1">
                        <div class="w-1/2 sm:w-1/3 px-1">
                            <div class="p-2 bg-gray-100">
                                <img class="w-full h-full object-cover" src="https://via.placeholder.com/140?text=Pic_1" alt="Pic 1">
                            </div>
                        </div>
                        <div class="w-1/2 sm:w-1/3 px-1">
                            <div class="p-2">
                                <img class="w-full h-full object-cover" src="https://via.placeholder.com/140?text=Pic_2" alt="Pic 2">
                            </div>
                        </div>
                        <div class="w-1/2 sm:w-1/3 px-1">
                            <div class="p-2">
                                <img class="w-full h-full object-cover" src="https://via.placeholder.com/140?text=Pic_3" alt="Pic 3">
                            </div>
                        </div>
                        <div class="w-1/2 sm:w-1/3 px-1">
                            <div class="p-2">
                                <img class="w-full h-full object-cover" src="https://via.placeholder.com/140?text=Pic_4" alt="Pic 4">
                            </div>
                        </div>
                        <div class="w-1/2 sm:w-1/3 px-1">
                            <div class="p-2">
                                <img class="w-full h-full object-cover" src="https://via.placeholder.com/140?text=Pic_5" alt="Pic 5">
                            </div>
                        </div>
                        <div class="w-1/2 sm:w-1/3 px-1">
                            <div class="p-2">
                                <img class="w-full h-full object-cover" src="https://via.placeholder.com/140?text=Pic_6" alt="Pic 6">
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end items-center mt-6">
                        <button class="btn outline min-w-0 mx-2" disabled>Previous</button>
                        <button class="btn outline min-w-0 mx-2" disabled>Next</button>
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
                        <div class="w-full md:w-2/5 lg:w-1/5 max-h-56 md:max-h-none">
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
                                    <a class="px-4 py-2" href="#">Perview</a>
                                    <button class="btn primary min-w-0">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card flex-row flex-wrap md:flex-no-wrap items-stretch p-0 mb-5">
                        <div class="w-full md:w-2/5 lg:w-1/5 max-h-56 md:max-h-none">
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
                                    <a class="px-4 py-2" href="#">Perview</a>
                                    <button class="btn primary min-w-0">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card flex-row flex-wrap md:flex-no-wrap items-stretch p-0 mb-5">
                        <div class="w-full md:w-2/5 lg:w-1/5 max-h-56 md:max-h-none">
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
                                    <a class="px-4 py-2" href="#">Perview</a>
                                    <button class="btn primary min-w-0">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col mt-4">
                    <h2>Archived Ad Content</h2>
                    <div class="card flex-row flex-wrap md:flex-no-wrap items-stretch p-0 mb-5">
                        <div class="w-full md:w-2/5 lg:w-1/5 max-h-56 md:max-h-none">
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
                                    <a class="px-4 py-2" href="#">Perview</a>
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
