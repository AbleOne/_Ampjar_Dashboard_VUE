<template>
    <div class="dashboard">
        <!-- <navigation/> -->
        <main class="main-content justify-center bg-white py-20">
            <div class="absolute w-full top-0 right-0">
                <div class="container text-right mx-auto p-5">
                    Already have an account? <a href="#">Log in</a>.
                </div>
            </div>
            <div class="container self-center">
                <div class="w-full sm:w-3/5 mx-auto p-5">
                    <h1 class="mb-4">Create Your Account</h1>
                    <form action>
                        <div class="flex flex-col w-full mb-6">
                            <label for="login-email">Email Address</label>
                            <input type="email" id="login-email" />
                        </div>
                        <div class="flex flex-wrap -mx-3">
                            <div class="flex flex-col w-full md:w-1/2 px-3 mb-6">
                                <label for="login-password">Password</label>
                                <input id="login-password" type="password" />
                            </div>
                            <div class="flex flex-col w-full md:w-1/2 px-3 mb-6">
                                <label for="login-confirm-password">Confirm Password</label>
                                <input id="login-confirm-password" type="password" />
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <div class="shadow border border-gray-400 bg-gray-300 rounded text-center py-6 px-8 mb-6">Google reCaptcha</div>
                            <div class="checkbox-custom mb-6">
                                <input id="copypaste-permission" type="checkbox" checked="checked" />
                                <label for="copypaste-permission" class="checkbox-label">
                                I agree to Ampjar’s <a href="#">Terms of Use</a>.
                                </label>
                            </div>
                            <button type="submit" class="btn primary">Create Account</button>
                        </div>
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
