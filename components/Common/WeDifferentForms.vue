<template>
    <div class="solutions-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title"><img src="~/assets/images/star-icon.png" alt="image"> Our Solutions</span>
                <h2>We Different From Others Should Choose Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-solutions-box">
                        <div class="icon">
                            <i class="flaticon-rocket"></i>
                        </div>
                        <h3><NuxtLink to="/services-details-one">Startup Applications</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.</p>
                        <NuxtLink to="/services-details-one" class="view-details-btn">View Details</NuxtLink>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-solutions-box">
                        <div class="icon">
                            <i class="flaticon-laptop"></i>
                        </div>
                        <h3><NuxtLink to="/services-details-one">SaaS Solutions</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.</p>
                        <NuxtLink to="/services-details-one" class="view-details-btn">View Details</NuxtLink>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
                    <div class="single-solutions-box">
                        <div class="icon">
                            <i class="flaticon-money"></i>
                        </div>
                        <h3><NuxtLink to="/services-details-one">E-Commerce Platforms</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.</p>
                        <NuxtLink to="/services-details-one" class="view-details-btn">View Details</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'WeDifferentForms'
}
</script>