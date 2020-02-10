<template>
    <div class="dashboard">
        <main class="main-content justify-center bg-white py-0">
            <div class="container self-center">
                <div class="mx-auto p-5">
                    <form class="flex flex-col" action="">
                        <div class="text-center">
                            <h1 class="mb-4">You’re all done!</h1>
                            <p class="mb-6">It’s time to dive in and get the most out of Ampjar. If you have any questions, you can book a call with our team or ask us a question using the blue chat bubble in the bottom right of your screen in the app.</p>
                        </div>
                        <button type="submit" class="btn primary w-full sm:w-2/5 mx-auto">Start exploring Ampjar</button>
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
