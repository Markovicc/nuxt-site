<template>
    <div class="hero-banner">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-12">
                    <div class="hero-banner-content">
                        <h1>Learn Data Science</h1>
                        <p>Keeping your skills up to date is essential and learning Data Science including oportunites on Big Data can drive you to become extraordinary professionals.</p>
                        <div class="btn-box">
                            <NuxtLink to="/events" class="default-btn"><i class="flaticon-right"></i>Explore Bootcamps<span></span></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-7 col-md-12">
                    <div class="hero-banner-image">
                        <img src="~/assets/images/main-banner/banner-three/banner-three-main-pic.png" alt="image">
                    </div>
                </div>
            </div>
        </div>

        <div class="vector-shape7"><img src="~/assets/images/shape/vector-shape7.png" alt="image"></div>
        <div class="vector-shape8"><img src="~/assets/images/shape/vector-shape8.png" alt="image"></div>
    </div>
</template>

<script>

export default {
    name: 'MainBanner'
}
</script>