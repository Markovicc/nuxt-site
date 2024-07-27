<template>
    <div class="it-services-banner">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="main-banner-content">
                        <h1>Secure IT Solutions Services</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="btn-box">
                            <NuxtLink to="/about-us-one" class="default-btn"><i class="flaticon-right"></i>Get Started<span></span></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="main-banner-image">
                        <img src="~/assets/images/banner-img1.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MainBanner'
}
</script>