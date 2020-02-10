<template>
    <div class="dashboard">
        <!-- <navigation/> -->
        <main class="main-content justify-center bg-white py-0">
            <div class="container self-center">
                <div class="mx-auto p-5">
                    <form class="flex flex-col" action="">
                        <div class="text-center">
                            <h1 class="mb-4">Most of my current customers are aged between:</h1>
                            <p>Drag the slider to select their age range.</p>
                        </div>
                        <!-- input range : multi range -->
                        <label class="hidden" for="customer-ages-now">Customers gender now</label>
                        <div id="customer-ages-now" data-start='[25, 35]' data-ranges='{"min": [12,6], "16.6%": [18,7], "33.2%": [25,10], "49.8%": [35,10], "66.4%": [45,10], "83%": [55,10], "max": 65}' class="input-range-multi"></div>
                        <div class="flex justify-between text-xs text-center mb-20">
                            <span>12</span>
                            <span class="ml-1">18</span>
                            <span class="ml-3">25</span>
                            <span class="ml-3">35</span>
                            <span class="ml-3">45</span>
                            <span class="ml-3">55</span>
                            <span class="opacity-50">65+</span>
                        </div>
                        <!-- / input range : multi range -->
                        <div class="text-center">
                            <h1 class="mb-4">I’d like more customers who are aged between:</h1>
                            <p>Drag the slider to select your ideal customers age range, and please don’t just say everyone!</p>
                        </div>
                        <!-- input range : multi range -->
                        <label class="hidden" for="customer-ages-future">Customers gender now</label>
                        <div id="customer-ages-future" data-start='[35, 45]' data-ranges='{"min": [12,6], "16.6%": [18,7], "33.2%": [25,10], "49.8%": [35,10], "66.4%": [45,10], "83%": [55,10], "max": 65}' class="input-range-multi"></div>
                        <div class="flex justify-between text-xs text-center mb-20">
                            <span>12</span>
                            <span class="ml-1">18</span>
                            <span class="ml-3">25</span>
                            <span class="ml-3">35</span>
                            <span class="ml-3">45</span>
                            <span class="ml-3">55</span>
                            <span class="opacity-50">65+</span>
                        </div>
                        <!-- / input range : multi range -->
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
