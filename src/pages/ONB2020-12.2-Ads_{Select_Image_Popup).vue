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
                            <label class="file-custom-label" for="customFile">Choose image</label>
                        </div>
                    </form>
                    <p>Upload an image from Instagram</p>
                    <div class="flex flex-wrap -mx-1">
                        <div class="w-1/2 sm:w-1/3 lg:w-1/4 px-1">
                            <div class="p-2 bg-gray-100">
                                <img class="w-full h-full object-cover" src="https://via.placeholder.com/140?text=Pic_1" alt="Pic 1">
                            </div>
                        </div>
                        <div class="w-1/2 sm:w-1/3 lg:w-1/4 px-1">
                            <div class="p-2">
                                <img class="w-full h-full object-cover" src="https://via.placeholder.com/140?text=Pic_2" alt="Pic 2">
                            </div>
                        </div>
                        <div class="w-1/2 sm:w-1/3 lg:w-1/4 px-1">
                            <div class="p-2">
                                <img class="w-full h-full object-cover" src="https://via.placeholder.com/140?text=Pic_3" alt="Pic 3">
                            </div>
                        </div>
                        <div class="w-1/2 sm:w-1/3 lg:w-1/4 px-1">
                            <div class="p-2">
                                <img class="w-full h-full object-cover" src="https://via.placeholder.com/140?text=Pic_4" alt="Pic 4">
                            </div>
                        </div>
                        <div class="w-1/2 sm:w-1/3 lg:w-1/4 px-1">
                            <div class="p-2">
                                <img class="w-full h-full object-cover" src="https://via.placeholder.com/140?text=Pic_5" alt="Pic 5">
                            </div>
                        </div>
                        <div class="w-1/2 sm:w-1/3 lg:w-1/4 px-1">
                            <div class="p-2">
                                <img class="w-full h-full object-cover" src="https://via.placeholder.com/140?text=Pic_6" alt="Pic 6">
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center sm:justify-end items-center mt-6 mx-2">
                        <button class="btn primary min-w-0 mr-3" disabled>Previous</button>
                        <button class="btn primary min-w-0">Next</button>
                    </div>
                </div>
            </div>
        </div>
        <main class="main-content justify-center bg-white py-0">
            <div class="container self-center">
                <div class="mx-auto p-5">
                    <form class="flex flex-col" action="">
                        <div class="text-center">
                            <h1 class="mb-4">Next, we’ve created some ads for you which other brands will share</h1>
                            <p>You can create new ads or edit any of these ads now or once you’re in the app.</p>
                        </div>
                        <div class="flex flex-wrap -mx-8 mt-10 mb-10">
                            <div class="flex flex-col w-full md:w-1/2 lg:w-1/3 px-8 mb-10">
                                <img class="mb-4" src="https://via.placeholder.com/220?text=Pic_1" alt="Pic 1">
                                <p class="text-center text-xs text-gray-600  flex-grow  mb-4">We heart this Advent Calendar, full of positivity and kindness! Instant PDF download, ready to print and play.</p>
                                <button class="btn primary outline text-xs uppercase min-w-0 self-center mb-6">Shop now</button>
                                <button class="btn">Edit</button>
                            </div>
                            <div class="flex flex-col w-full md:w-1/2 lg:w-1/3 px-8 mb-10">
                                <img class="mb-4" src="https://via.placeholder.com/220?text=Pic_2" alt="Pic 2">
                                <p class="text-center text-xs text-gray-600  flex-grow  mb-4">We heart this Advent Calendar, full of positivity and kindness! Instant PDF download, ready to print and play.</p>
                                <button class="btn primary outline text-xs uppercase min-w-0 self-center mb-6">Shop now</button>
                                <button class="btn">Edit</button>
                            </div>
                            <div class="flex flex-col w-full md:w-1/2 lg:w-1/3 px-8 mb-10">
                                <img class="mb-4" src="https://via.placeholder.com/220?text=Pic_3" alt="Pic 3">
                                <p class="text-center text-xs text-gray-600  flex-grow  mb-4">We heart this Advent Calendar, full of positivity and kindness! Instant PDF download, ready to print and play.</p>
                                <button class="btn primary outline text-xs uppercase min-w-0 self-center mb-6">Shop now</button>
                                <button class="btn">Edit</button>
                            </div>
                        </div>
                        <button type="submit" class="btn primary w-full sm:w-2/5 mx-auto">Continue</button>
                    </form>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import navigation from "../src/components/navigation";
import dropdown from "../src/components/dropdown";
import StarRating from "vue-star-rating";

export default {
  name: `App`,
  components: {
    navigation,
    dropdown,
    StarRating
  }
};
</script>
