<template>
    <div class="dashboard">
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
