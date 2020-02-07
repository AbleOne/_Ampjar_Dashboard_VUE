<template>
    <div class="dashboard">
        <!-- <navigation/> -->
        <main class="main-content justify-center bg-white py-0">
            <div class="container self-center">
                <div class="mx-auto p-5">
                    <div class="flex flex-col text-center">
                        <h1 class="mb-4">Connect Instagram</h1>
                        <p class="text-lg mb-6">Once we’re connected, we’ll use your most popular content create ads and email campaigns for you.</p>
                        <img class="self-center mb-6" src="img/ig_glyph_fill.png" alt="Instagram Glyph">
                        <button type="submit" class="btn primary w-full sm:w-2/5 self-center mb-6">Connect Instagram</button>
                        <p>Ampjar is an approved API partner of Instagram.<br> Your privacy is our priority.</p>
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