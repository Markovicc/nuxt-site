<template>
    <div class="courses-area ptb-100 bg-fafafb">
        <div class="container">
            <div class="section-title">
                <h2>Online Data Science Courses</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-courses-box">
                        <div class="courses-image">
                            <NuxtLink to="/courses-details" class="d-block image">
                                <img src="~/assets/images/courses/courses1.jpg" alt="image">
                            </NuxtLink>
                            <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                            <div class="price shadow free">Free</div>
                        </div>
                        <div class="courses-content">
                            <div class="course-author d-flex align-items-center">
                                <img src="~/assets/images/user1.jpg" class="rounded-circle" alt="image">
                                <span>Alex Morgan</span>
                            </div>
                            <h3><NuxtLink to="/courses-details">Introduction to Quantitative Methods</NuxtLink></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                <li>
                                    <i class='flaticon-agendas'></i> 8 Weeks Long
                                </li>
                                <li>
                                    <i class='flaticon-team'></i> Available Now
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-courses-box">
                        <div class="courses-image">
                            <NuxtLink to="/courses-details" class="d-block image">
                                <img src="~/assets/images/courses/courses2.jpg" alt="image">
                            </NuxtLink>
                            <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                            <div class="price shadow">$49</div>
                        </div>
                        <div class="courses-content">
                            <div class="course-author d-flex align-items-center">
                                <img src="~/assets/images/user2.jpg" class="rounded-circle" alt="image">
                                <span>Sarah Taylor</span>
                            </div>
                            <h3><NuxtLink to="/courses-details">Introduction to Linear Models and Matrix Algebra</NuxtLink></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                <li>
                                    <i class='flaticon-agendas'></i> 7 Weeks Long
                                </li>
                                <li>
                                    <i class='flaticon-team'></i> Available Now
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                    <div class="single-courses-box">
                        <div class="courses-image">
                            <NuxtLink to="/courses-details" class="d-block image">
                                <img src="~/assets/images/courses/courses3.jpg" alt="image">
                            </NuxtLink>
                            <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                            <div class="price shadow">$69</div>
                        </div>
                        <div class="courses-content">
                            <div class="course-author d-flex align-items-center">
                                <img src="~/assets/images/user3.jpg" class="rounded-circle" alt="image">
                                <span>David Warner</span>
                            </div>
                            <h3><NuxtLink to="/courses-details">Data Science: Inference and Modeling</NuxtLink></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                <li>
                                    <i class='flaticon-agendas'></i> 2 Weeks Long
                                </li>
                                <li>
                                    <i class='flaticon-team'></i> Available Now
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="courses-info">
                        <p>Get the most dedicated consultation for your life-changing course. Earn a certification for your effort and passion <NuxtLink to="/profile-authentication">Join Free Now</NuxtLink>.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="vector-shape6"><img src="~/assets/images/shape/vector-shape6.png" alt="image"></div>
    </div>
</template>

<script>

export default {
    name: 'OnlineDataScience'
}
</script>