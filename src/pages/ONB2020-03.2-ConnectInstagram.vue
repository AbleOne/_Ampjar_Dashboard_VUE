<template>
    <div class="dashboard">
        <!-- <navigation/> -->
        <main class="main-content justify-center bg-white py-0">
            <div class="container self-center">
                <div class="mx-auto p-5">
                    <div class="flex flex-col text-center">
                        <h1 class="mb-4">Connect Instagram</h1>
                        <p class="text-lg mb-6">You’re connected to Instagram account:
                            <span class="inline-block">@littleprintables</span>
                        </p>
                        <img src="img/littleprintables.jpg" alt="littleprintables user picture" class="rounded-full border w-24 self-center mb-8">
                        <button type="submit" class="btn primary w-full sm:w-2/5 self-center">Continue to Profiling Questions</button>
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
