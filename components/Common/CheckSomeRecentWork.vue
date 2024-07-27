<template>
    <div class="projects-area bg-color pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title"><img src="~/assets/images/star-icon.png" alt="image"> Recent Projects</span>
                <h2>Check Some Of Our Recent Work<span class="overlay"></span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-projects-box">
                        <div class="image">
                            <img src="~/assets/images/projects/projects1.jpg" alt="image">

                            <NuxtLink to="case-studies-details-one" class="link-btn"><i class='bx bx-plus'></i></NuxtLink>
                        </div>

                        <div class="content">
                            <h3><NuxtLink to="case-studies-details-one">Movie Recommendation</NuxtLink></h3>
                            <span>System Project</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-projects-box">
                        <div class="image">
                            <img src="~/assets/images/projects/projects2.jpg" alt="image">

                            <NuxtLink to="case-studies-details-one" class="link-btn"><i class='bx bx-plus'></i></NuxtLink>
                        </div>

                        <div class="content">
                            <h3><NuxtLink to="case-studies-details-one">Customer Segmentation</NuxtLink></h3>
                            <span>Machine Learning</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-projects-box">
                        <div class="image">
                            <img src="~/assets/images/projects/projects3.jpg" alt="image">

                            <NuxtLink to="case-studies-details-one" class="link-btn"><i class='bx bx-plus'></i></NuxtLink>
                        </div>

                        <div class="content">
                            <h3><NuxtLink to="case-studies-details-one">Data Analysis</NuxtLink></h3>
                            <span>Web Project</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-projects-box">
                        <div class="image">
                            <img src="~/assets/images/projects/projects4.jpg" alt="image">

                            <NuxtLink to="case-studies-details-one" class="link-btn"><i class='bx bx-plus'></i></NuxtLink>
                        </div>

                        <div class="content">
                            <h3><NuxtLink to="case-studies-details-one">Detection Project</NuxtLink></h3>
                            <span>Programming</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-projects-box">
                        <div class="image">
                            <img src="~/assets/images/projects/projects5.jpg" alt="image">

                            <NuxtLink to="case-studies-details-one" class="link-btn"><i class='bx bx-plus'></i></NuxtLink>
                        </div>

                        <div class="content">
                            <h3><NuxtLink to="case-studies-details-one">Data Scientist</NuxtLink></h3>
                            <span>Data Science</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-projects-box">
                        <div class="image">
                            <img src="~/assets/images/projects/projects6.jpg" alt="image">

                            <NuxtLink to="case-studies-details-one" class="link-btn"><i class='bx bx-plus'></i></NuxtLink>
                        </div>

                        <div class="content">
                            <h3><NuxtLink to="case-studies-details-one">Benefits Research</NuxtLink></h3>
                            <span>Science Projects</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CheckSomeRecentWork'
}
</script>