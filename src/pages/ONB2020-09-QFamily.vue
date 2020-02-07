<template>
    <div class="dashboard">
        <!-- <navigation/> -->
        <main class="main-content justify-center bg-white py-0">
            <div class="container self-center">
                <div class="mx-auto p-5">
                    <form class="flex flex-col" action="">
                        <div class="text-center">
                            <h1 class="mb-4">Most of my current customers are typically:</h1>
                            <p>Please select which option best reflects your customers.</p>
                        </div>
                        <div class="flex flex-wrap -mx-1 text-xs uppercase  my-6">
                            <div class="flex sm:w-1/3 md:w-1/5 px-1">
                                <label for="checkbox-button-1" class="checkbox-button min-w-full">
                                <input id="checkbox-button-1" type="checkbox" >
                                <span class="btn outline wrapped"><span>Living alone</span></span>
                                </label>
                            </div>
                            <div class="flex sm:w-1/3 md:w-1/5 px-1">
                                <label for="checkbox-button-2" class="checkbox-button min-w-full">
                                <input id="checkbox-button-2" type="checkbox" >
                                <span class="btn outline wrapped"><span>Living with friends or housemates</span></span>
                                </label>
                            </div>
                            <div class="flex sm:w-1/3 md:w-1/5 px-1">
                                <label for="checkbox-button-3" class="checkbox-button min-w-full">
                                <input id="checkbox-button-3" type="checkbox" >
                                <span class="btn outline wrapped"><span>Living with partner without children</span></span>
                                </label>
                            </div>
                            <div class="flex sm:w-1/3 md:w-1/5 px-1">
                                <label for="checkbox-button-4" class="checkbox-button min-w-full">
                                <input id="checkbox-button-4" type="checkbox" >
                                <span class="btn outline wrapped"><span>Parents with young children</span></span>
                                </label>
                            </div>
                            <div class="flex sm:w-1/3 md:w-1/5 px-1">
                                <label for="checkbox-button-5" class="checkbox-button min-w-full">
                                <input id="checkbox-button-5" type="checkbox" >
                                <span class="btn outline wrapped"><span>Parents with older children</span></span>
                                </label>
                            </div>
                        </div>
                        <div class="text-center">
                            <h1 class="mb-4">I would like to reach more customers who are:</h1>
                            <p>Please select which option best reflects your ideal customers.</p>
                        </div>
                        <div class="flex flex-wrap -mx-1 text-xs uppercase  my-6">
                            <div class="flex sm:w-1/3 md:w-1/5 px-1">
                                <label for="checkbox-button-6" class="checkbox-button min-w-full">
                                <input id="checkbox-button-6" type="checkbox" >
                                <span class="btn outline wrapped"><span>Living alone</span></span>
                                </label>
                            </div>
                            <div class="flex sm:w-1/3 md:w-1/5 px-1">
                                <label for="checkbox-button-7" class="checkbox-button min-w-full">
                                <input id="checkbox-button-7" type="checkbox" >
                                <span class="btn outline wrapped"><span>Living with friends or housemates</span></span>
                                </label>
                            </div>
                            <div class="flex sm:w-1/3 md:w-1/5 px-1">
                                <label for="checkbox-button-8" class="checkbox-button min-w-full">
                                <input id="checkbox-button-8" type="checkbox" >
                                <span class="btn outline wrapped"><span>Living with partner without children</span></span>
                                </label>
                            </div>
                            <div class="flex sm:w-1/3 md:w-1/5 px-1">
                                <label for="checkbox-button-9" class="checkbox-button min-w-full">
                                <input id="checkbox-button-9" type="checkbox" >
                                <span class="btn outline wrapped"><span>Parents with young children</span></span>
                                </label>
                            </div>
                            <div class="flex sm:w-1/3 md:w-1/5 px-1">
                                <label for="checkbox-button-10" class="checkbox-button min-w-full">
                                <input id="checkbox-button-10" type="checkbox" >
                                <span class="btn outline wrapped"><span>Parents with older children</span></span>
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
