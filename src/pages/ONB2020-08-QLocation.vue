<template>
    <div class="dashboard">
        <!-- <navigation/> -->
        <main class="main-content justify-center bg-white py-0">
            <div class="container self-center">
                <div class="mx-auto p-5">
                    <form class="flex flex-col" action="">
                        <div class="text-center">
                            <h1 class="mb-4">Most of my current customers live in:</h1>
                            <p>Please select at least one.</p>
                        </div>
                        <div class="flex flex-wrap justify-center text-xs uppercase  mt-6 mb-20">
                            <label for="checkbox-button-1" class="checkbox-button mx-1">
                                <input id="checkbox-button-1" type="checkbox" >
                                <span class="btn outline">All countries</span>
                            </label>
                            <label for="checkbox-button-2" class="checkbox-button mx-1">
                                <input id="checkbox-button-2" type="checkbox" >
                                <span class="btn outline">Usa</span>
                            </label>
                            <label for="checkbox-button-3" class="checkbox-button mx-1">
                                <input id="checkbox-button-3" type="checkbox" >
                                <span class="btn outline">Canada</span>
                            </label>
                            <label for="checkbox-button-4" class="checkbox-button mx-1">
                                <input id="checkbox-button-4" type="checkbox" >
                                <span class="btn outline">Australia</span>
                            </label>
                            <label for="checkbox-button-5" class="checkbox-button mx-1">
                                <input id="checkbox-button-5" type="checkbox" >
                                <span class="btn outline">New zealand</span>
                            </label>
                        </div>
                        <div class="text-center">
                            <h1 class="mb-4">I would like to reach more customers who live in:</h1>
                            <p>Please select at least one.</p>
                        </div>
                        <div class="flex flex-wrap justify-center text-xs uppercase  mt-6 mb-12">
                            <label for="checkbox-button-1" class="checkbox-button mx-1">
                                <input id="checkbox-button-1" type="checkbox" >
                                <span class="btn outline">All countries</span>
                            </label>
                            <label for="checkbox-button-2" class="checkbox-button mx-1">
                                <input id="checkbox-button-2" type="checkbox" >
                                <span class="btn outline">Usa</span>
                            </label>
                            <label for="checkbox-button-3" class="checkbox-button mx-1">
                                <input id="checkbox-button-3" type="checkbox" >
                                <span class="btn outline">Canada</span>
                            </label>
                            <label for="checkbox-button-4" class="checkbox-button mx-1">
                                <input id="checkbox-button-4" type="checkbox" >
                                <span class="btn outline">Australia</span>
                            </label>
                            <label for="checkbox-button-5" class="checkbox-button mx-1">
                                <input id="checkbox-button-5" type="checkbox" >
                                <span class="btn outline">New zealand</span>
                            </label>
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
