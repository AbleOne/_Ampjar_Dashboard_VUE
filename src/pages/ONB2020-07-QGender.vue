<template>
    <div class="dashboard">
        <!-- <navigation/> -->
        <main class="main-content justify-center bg-white py-0">
            <div class="container self-center">
                <div class="mx-auto p-5">
                    <form class="flex flex-col" action="">
                        <div class="text-center">
                            <h1 class="mb-4">Most of my current customers identify as:</h1>
                            <p>Drag the slider to select their gender.</p>
                        </div>
                        <label class="hidden" for="customer-gender-now">Customers gender now</label>
                        <input type="range" min="1" max="5" step="1" value="3" id="customer-gender-now" class="mt-6">
                        <div class="flex justify-between text-xs text-center mb-20">
                            <span>Male</span>
                            <span class="ml-3">Primarily<br>Male</span>
                            <span class="ml-3">Male and<br>Female</span>
                            <span class="ml-3">Primarily<br>Female</span>
                            <span>Female</span>
                        </div>
                        <div class="text-center">
                            <h1 class="mb-4">I’d like to reach more customers who identify as:</h1>
                            <p>Drag the slider to select the gender of your ideal customers.</p>
                        </div>
                        <label class="hidden" for="customer-gender-future">Customers gender future</label>
                        <input type="range" min="1" max="5" step="1" value="3" id="customer-gender-future" class="mt-6">
                        <div class="flex justify-between text-xs text-center mb-12">
                            <span>Male</span>
                            <span class="ml-3">Primarily<br>Male</span>
                            <span class="ml-3">Male and<br>Female</span>
                            <span class="ml-3">Primarily<br>Female</span>
                            <span>Female</span>
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
