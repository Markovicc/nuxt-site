<template>
    <div class="banner-wrapper">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-12">
                    <div class="banner-wrapper-content">
                        <h1>Managed Analytics and Data Analysis Platform</h1>
                        <p>We have created a cloud based tool to do your all boring tasks related to data analysis and decesion making based on the nature of data!</p>
                        
                        <div class="btn-box">
                            <NuxtLink to="/contact" class="default-btn"><i class="flaticon-right"></i>About Us<span></span></NuxtLink>
                            <NuxtLink to="/profile-authentication" class="default-btn"><i class="flaticon-tick"></i>Get Started<span></span></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-7 col-md-12">
                    <div class="banner-wrapper-image">
                        <img src="~/assets/images/main-banner/banner-four/banner-four-main-pic.png" alt="image">
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