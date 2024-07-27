<template>
    <div class="featured-services-area pt-100 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-featured-services-item">
                        <div class="icon">
                            <img src="~/assets/images/icon/icon1.png" alt="image">
                        </div>
                        <h3><NuxtLink to="/services-details-one">Online</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <NuxtLink to="/services-details-one" class="default-btn"><i class="flaticon-right"></i>Read More<span></span></NuxtLink>
                        <div class="shape"><img src="~/assets/images/services/services-shape3.png" alt="image"></div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-featured-services-item">
                        <div class="icon">
                            <img src="~/assets/images/icon/icon2.png" alt="image">
                        </div>
                        <h3><NuxtLink to="/services-details-one">In-person</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <NuxtLink to="/services-details-one" class="default-btn"><i class="flaticon-right"></i>Read More<span></span></NuxtLink>
                        <div class="shape"><img src="~/assets/images/services/services-shape3.png" alt="image"></div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div class="single-featured-services-item">
                        <div class="icon">
                            <img src="~/assets/images/icon/icon3.png" alt="image">
                        </div>
                        <h3><NuxtLink to="/services-details-one">Business</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <NuxtLink to="/services-details-one" class="default-btn"><i class="flaticon-right"></i>Read More<span></span></NuxtLink>
                        <div class="shape"><img src="~/assets/images/services/services-shape3.png" alt="image"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'FeaturedServices'
}
</script>