<template>
    <div class="dashboard">
        <div class="modal-backdrop">
            <div class="modal">
                <button class="modal-close">
                    <svg aria-hidden="true" focusable="false" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg>
                </button>
                <div class="modal-content">
                    <h2 class="mb-4">Edit content</h2>
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
