<template>
    <div class="seo-agency-banner">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-12">
                    <div class="banner-wrapper-content">
                        <span class="sub-title">SEO Agency</span>
                        <h1>Creative & Strategic Digital SEO Agency</h1>
                        <p>We have created a cloud based tool to do your all boring tasks related to data analysis and decesion making based on the nature of data!</p>
                        <div class="btn-box">
                            <NuxtLink to="/about-us-three" class="default-btn"><i class="flaticon-right"></i>About Us<span></span></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-7 col-md-12">
                    <div class="banner-wrapper-image">
                        <img src="~/assets/images/banner-img2.png" alt="image">
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