<template>
    <div class="why-choose-us-area bg-color">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="why-choose-us-content">
                        <h2>Why Choose Us?</h2>
                        <p>During 30 years in data analytics, we have built up comprehensive competencies that cover traditional and big data, data management, business intelligence (including self-service BI and data visualization), advanced data analytics, and data science.</p>
                        <p>In 2015, we were rated A+ by BBB, recognized as the top IT company by Clutch, as well as featured on The Silicon Review listing among 10 Fastest Growing Data Analytics Companies.</p>
                        <NuxtLink to="/about-us-one" class="default-btn"><i class="flaticon-right"></i>More About Us<span></span></NuxtLink>
                        <div class="map-shape2"><img src="~/assets/images/shape/map-shape2.png" alt="image"></div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="our-brand-partners-list">
                        <h2>Our Brand Partners</h2>
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-sm-6 col-md-4">
                                <img src="~/assets/images/partner/partner1.png" alt="image">
                            </div>

                            <div class="col-lg-6 col-sm-6 col-md-4">
                                <img src="~/assets/images/partner/partner2.png" alt="image">
                            </div>
                            <div class="col-lg-6 col-sm-6 col-md-4">
                                <img src="~/assets/images/partner/partner3.png" alt="image">
                            </div>
                            
                            <div class="col-lg-6 col-sm-6 col-md-4">
                                <img src="~/assets/images/partner/partner4.png" alt="image">
                            </div>
                            <div class="col-lg-6 col-sm-6 col-md-4">
                                <img src="~/assets/images/partner/partner5.png" alt="image">
                            </div>
                            
                            <div class="col-lg-6 col-sm-6 col-md-4">
                                <img src="~/assets/images/partner/partner6.png" alt="image">
                            </div>
                        </div>
                        <NuxtLink to="/partner" class="view-all">View All</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'WhyChooseUs'
}
</script>