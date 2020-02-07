<template>
    <div class="dashboard">
        <!-- <navigation/> -->
        <main class="main-content justify-center bg-white py-0">
            <div class="container self-center">
                <div class="mx-auto p-5">
                    <div class="flex flex-col text-center">
                        <h1 class="mb-4">Hello &lcub;First Name&rcub;</h1>
                        <p class="text-lg mb-6">We’ve created these questions so we can better personalize your experience and ensure we match you with brands that are the perfect fit.</p>
                        <img src="img/littleprintables.jpg" alt="littleprintables user picture" class="rounded-full border w-24 self-center mb-8">
                        <button type="submit" class="btn primary w-full sm:w-2/5 self-center">Let’s dive in!</button>
                    </div>
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
