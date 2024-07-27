<template>
    <div class="featured-services-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <h2>Create Awesome Service With Our Tools</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-featured-services-box">
                        <div class="icon">
                            <i class="flaticon-analysis"></i>
                        </div>
                        <h3><NuxtLink to="/services-details-one">SEO Consultancy</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-featured-services-box">
                        <div class="icon">
                            <i class="flaticon-structure"></i>
                        </div>
                        <h3><NuxtLink to="/services-details-one">Website Optimization</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div class="single-featured-services-box">
                        <div class="icon">
                            <i class="flaticon-idea"></i>
                        </div>
                        <h3><NuxtLink to="/services-details-one">Marketing Analysis</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CreateAwesomeService'
}
</script>