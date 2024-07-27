<template>
    <div class="boxes-area pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-boxes-item">
                        <div class="icon">
                            <img src="~/assets/images/icon/icon1.png" alt="image">
                        </div>
                        <h3><NuxtLink to="/services-details-two">Marketing Analytics</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <NuxtLink to="/services-details-two" class="default-btn"><i class="flaticon-right"></i>Read More<span></span></NuxtLink>
                        <div class="shape1"><img src="~/assets/images/services/services-shape2.png" alt="image"></div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-boxes-item">
                        <div class="icon">
                            <img src="~/assets/images/icon/icon2.png" alt="image">
                        </div>
                        <h3><NuxtLink to="/services-details-two">Consumer Analytics</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <NuxtLink to="/services-details-two" class="default-btn"><i class="flaticon-right"></i>Read More<span></span></NuxtLink>
                        <div class="shape1"><img src="~/assets/images/services/services-shape2.png" alt="image"></div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
                    <div class="single-boxes-item">
                        <div class="icon">
                            <img src="~/assets/images/icon/icon3.png" alt="image">
                        </div>
                        <h3><NuxtLink to="/services-details-two">Sales Analytics</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <NuxtLink to="/services-details-two" class="default-btn"><i class="flaticon-right"></i>Read More<span></span></NuxtLink>
                        <div class="shape1"><img src="~/assets/images/services/services-shape2.png" alt="image"></div>
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