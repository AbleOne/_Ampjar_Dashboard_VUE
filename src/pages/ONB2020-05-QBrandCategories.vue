<template>
    <div class="dashboard">
        <!-- <navigation/> -->
        <main class="main-content justify-center bg-white py-0">
            <div class="container self-center">
                <div class="mx-auto p-5">
                    <div class="text-center">
                        <h1 class="mb-4">What categories best reflect your brand or business?</h1>
                        <p>Please select up to three.</p>
                    </div>
                    <form class="flex flex-col" action="">
                        <div class="flex flex-wrap text-xs uppercase  mt-6 mb-4">
                            <label for="checkbox-button-1" class="checkbox-button mx-1">
                                <input id="checkbox-button-1" type="checkbox" >
                                <span class="btn outline">Art and collectables</span>
                            </label>
                            <label for="checkbox-button-2" class="checkbox-button mx-1">
                                <input id="checkbox-button-2" type="checkbox" >
                                <span class="btn outline">Cbd</span>
                            </label>
                            <label for="checkbox-button-3" class="checkbox-button mx-1">
                                <input id="checkbox-button-3" type="checkbox" >
                                <span class="btn outline">Craft tools &amp; supplies</span>
                            </label>
                            <label for="checkbox-button-4" class="checkbox-button mx-1">
                                <input id="checkbox-button-4" type="checkbox" >
                                <span class="btn outline">Baking and cake decorating</span>
                            </label>
                            <label for="checkbox-button-5" class="checkbox-button mx-1">
                                <input id="checkbox-button-5" type="checkbox" >
                                <span class="btn outline">Digital/social media agency</span>
                            </label>
                            <label for="checkbox-button-6" class="checkbox-button mx-1">
                                <input id="checkbox-button-6" type="checkbox" >
                                <span class="btn outline">Fashion & footwear</span>
                            </label>
                            <label for="checkbox-button-7" class="checkbox-button mx-1">
                                <input id="checkbox-button-7" type="checkbox" >
                                <span class="btn outline">Floristry</span>
                            </label>
                            <label for="checkbox-button-8" class="checkbox-button mx-1">
                                <input id="checkbox-button-8" type="checkbox" >
                                <span class="btn outline">Food and lifestyle</span>
                            </label>
                            <label for="checkbox-button-9" class="checkbox-button mx-1">
                                <input id="checkbox-button-9" type="checkbox" >
                                <span class="btn outline">Hair, skin and beauty</span>
                            </label>
                            <label for="checkbox-button-10" class="checkbox-button mx-1">
                                <input id="checkbox-button-10" type="checkbox" >
                                <span class="btn outline">Home and living</span>
                            </label>
                            <label for="checkbox-button-11" class="checkbox-button mx-1">
                                <input id="checkbox-button-11" type="checkbox" >
                                <span class="btn outline">Kids and baby</span>
                            </label>
                            <label for="checkbox-button-12" class="checkbox-button mx-1">
                                <input id="checkbox-button-12" type="checkbox" >
                                <span class="btn outline">Health and wellness</span>
                            </label>
                            <label for="checkbox-button-13" class="checkbox-button mx-1">
                                <input id="checkbox-button-13" type="checkbox" >
                                <span class="btn outline">Jewellry and accessories</span>
                            </label>
                            <label for="checkbox-button-14" class="checkbox-button mx-1">
                                <input id="checkbox-button-14" type="checkbox" >
                                <span class="btn outline">Model or influencer</span>
                            </label>
                            <label for="checkbox-button-15" class="checkbox-button mx-1">
                                <input id="checkbox-button-15" type="checkbox" >
                                <span class="btn outline">Pets</span>
                            </label>
                            <label for="checkbox-button-16" class="checkbox-button mx-1">
                                <input id="checkbox-button-16" type="checkbox" >
                                <span class="btn outline">Designer or photographer</span>
                            </label>
                            <label for="checkbox-button-17" class="checkbox-button mx-1">
                                <input id="checkbox-button-17" type="checkbox" >
                                <span class="btn outline">Podcast</span>
                            </label>
                            <label for="checkbox-button-18" class="checkbox-button mx-1">
                                <input id="checkbox-button-18" type="checkbox" >
                                <span class="btn outline">Venues</span>
                            </label>
                            <label for="checkbox-button-19" class="checkbox-button mx-1">
                                <input id="checkbox-button-19" type="checkbox" >
                                <span class="btn outline">Personal or home styling</span>
                            </label>
                            <label for="checkbox-button-20" class="checkbox-button mx-1">
                                <input id="checkbox-button-20" type="checkbox" >
                                <span class="btn outline">Weddings, parties and events</span>
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
