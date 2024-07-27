<template>
    <div class="what-we-do-area bg-fafafb pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <h2>What We Do</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-what-we-do-box">
                        <div class="icon">
                            <i class="flaticon-segmentation"></i>
                        </div>
                        <h3><NuxtLink to="/services-details-one">Research</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <NuxtLink to="/services-details-one" class="link">Market Research <i class="flaticon-right"></i></NuxtLink>
                        <NuxtLink to="/services-details-one" class="link">Investment Research <i class="flaticon-right"></i></NuxtLink>
                        <NuxtLink to="/services-details-one" class="read-more-btn"><i class="flaticon-right"></i>Read More</NuxtLink>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-what-we-do-box">
                        <div class="icon">
                            <i class="flaticon-analytics"></i>
                        </div>
                        <h3><NuxtLink to="/services-details-one">Analytics</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <NuxtLink to="/services-details-one" class="link">Data Analytics <i class="flaticon-right"></i></NuxtLink>
                        <NuxtLink to="/services-details-one" class="link">Business Intelligence <i class="flaticon-right"></i></NuxtLink>
                        <NuxtLink to="/services-details-one" class="read-more-btn"><i class="flaticon-right"></i>Read More</NuxtLink>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div class="single-what-we-do-box">
                        <div class="icon">
                            <i class="flaticon-settings"></i>
                        </div>
                        <h3><NuxtLink to="/services-details-one">Technology</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <NuxtLink to="/services-details-one" class="link">Intelligence Automation <i class="flaticon-right"></i></NuxtLink>
                        <NuxtLink to="/services-details-one" class="link">Quality Engineering <i class="flaticon-right"></i></NuxtLink>
                        <NuxtLink to="/services-details-one" class="read-more-btn"><i class="flaticon-right"></i>Read More</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'WhatWeDo'
}
</script>