<template>
    <div class="dashboard">
        <!-- <navigation/> -->
        <main class="main-content justify-center bg-white py-0">
            <div class="container self-center">
                <div class="mx-auto p-5">
                    <form class="flex flex-col" action="">
                        <div class="text-center">
                            <h1 class="mb-4">My products and/or services are mostly:</h1>
                        </div>
                        <div class="flex flex-wrap -mx-1 justify-center text-xs uppercase  my-6">
                            <div class="flex w-full sm:w-1/3 md:w-1/5 px-1">
                                <label for="checkbox-button-1" class="checkbox-button min-w-full">
                                    <input id="checkbox-button-1" type="checkbox" >
                                    <span class="btn outline wrapped py-6"><span>Value<br>and/or<br>low cost</span></span>
                                </label>
                            </div>
                            <div class="flex w-full sm:w-1/3 md:w-1/5 px-1">
                                <label for="checkbox-button-2" class="checkbox-button min-w-full">
                                    <input id="checkbox-button-2" type="checkbox" >
                                    <span class="btn outline wrapped py-6"><span>Competitive<br>and/or<br>mid-cost</span></span>
                                </label>
                            </div>
                            <div class="flex w-full sm:w-1/3 md:w-1/5 px-1">
                                <label for="checkbox-button-3" class="checkbox-button min-w-full">
                                    <input id="checkbox-button-3" type="checkbox" >
                                    <span class="btn outline wrapped py-6"><span>Luxury<br>and/or<br>high end</span></span>
                                </label>
                            </div>
                        </div>
                        <div class="text-center">
                            <h1 class="mb-4">I would like to reach more customers who want to purchase products
and/or services which are:</h1>
                        </div>
                        <div class="flex flex-wrap -mx-1 justify-center text-xs uppercase  my-6">
                            <div class="flex w-full sm:w-1/3 md:w-1/5 px-1">
                                <label for="checkbox-button-4" class="checkbox-button min-w-full">
                                    <input id="checkbox-button-4" type="checkbox" >
                                    <span class="btn outline wrapped py-6"><span>Value<br>and/or<br>low cost</span></span>
                                </label>
                            </div>
                            <div class="flex w-full sm:w-1/3 md:w-1/5 px-1">
                                <label for="checkbox-button-5" class="checkbox-button min-w-full">
                                    <input id="checkbox-button-5" type="checkbox" >
                                    <span class="btn outline wrapped py-6"><span>Competitive<br>and/or<br>mid-cost</span></span>
                                </label>
                            </div>
                            <div class="flex w-full sm:w-1/3 md:w-1/5 px-1">
                                <label for="checkbox-button-6" class="checkbox-button min-w-full">
                                    <input id="checkbox-button-6" type="checkbox" >
                                    <span class="btn outline wrapped py-6"><span>Luxury<br>and/or<br>high end</span></span>
                                </label>
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
