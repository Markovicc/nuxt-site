<template>
    <div class="services-area pt-100 pb-70 bg-f1f8fb">
        <div class="container">
            <div class="section-title">
                <span class="sub-title"><img src="~/assets/images/star-icon.png" alt="image"> Our Services</span>
                <h2>Our Featured Services<span class="overlay"></span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-services-item-box">
                        <div class="icon">
                            <img src="~/assets/images/services/services-icon1.png" alt="image">
                        </div>
                        <h3><NuxtLink to="/services-details-one">Marketing Analysis</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <NuxtLink to="/services-details-one" class="read-more-btn">Read More <i class="flaticon-right"></i></NuxtLink>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-services-item-box">
                        <div class="icon">
                            <img src="~/assets/images/services/services-icon2.png" alt="image">
                        </div>
                        <h3><NuxtLink to="/services-details-one">Email Marketing</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <NuxtLink to="/services-details-one" class="read-more-btn">Read More <i class="flaticon-right"></i></NuxtLink>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div class="single-services-item-box">
                        <div class="icon">
                            <img src="~/assets/images/services/services-icon3.png" alt="image">
                        </div>
                        <h3><NuxtLink to="/services-details-one">Website Optimization</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <NuxtLink to="/services-details-one" class="read-more-btn">Read More <i class="flaticon-right"></i></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'OurFeaturedServices'
}
</script>