<template>
    <div class="courses-area ptb-100 bg-fafafb">
        <div class="container">
            <div class="parix-grid-sorting row align-items-center">
                <div class="col-lg-6 col-md-6 result-count">
                    <p>We found <span class="count">14</span> courses available for you</p>
                </div>

                <div class="col-lg-6 col-md-6 ordering">
                    <div class="select-box">
                        <label>Sort By:</label>
                        <select>
                            <option>Default</option>
                            <option>Popularity</option>
                            <option>Latest</option>
                            <option>Price: low to high</option>
                            <option>Price: high to low</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-courses-box">
                        <div class="courses-image">
                            <NuxtLink to="/courses-details" class="d-block image">
                                <img src="~/assets/images/courses/courses1.jpg" alt="image">
                            </NuxtLink >
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

                <div class="col-lg-4 col-md-6">
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

                <div class="col-lg-4 col-md-6">
                    <div class="single-courses-box">
                        <div class="courses-image">
                            <NuxtLink to="/courses-details" class="d-block image">
                                <img src="~/assets/images/courses/courses4.jpg" alt="image">
                            </NuxtLink>
                            <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                            <div class="price shadow free">Free</div>
                        </div>
                        <div class="courses-content">
                            <div class="course-author d-flex align-items-center">
                                <img src="~/assets/images/user1.jpg" class="rounded-circle" alt="image">
                                <span>Alex Morgan</span>
                            </div>
                            <h3><NuxtLink to="/courses-details">The Data Science Course: Complete Data Science</NuxtLink></h3>
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
                                <img src="~/assets/images/courses/courses5.jpg" alt="image">
                            </NuxtLink>
                            <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                            <div class="price shadow">$49</div>
                        </div>
                        <div class="courses-content">
                            <div class="course-author d-flex align-items-center">
                                <img src="~/assets/images/user2.jpg" class="rounded-circle" alt="image">
                                <span>Sarah Taylor</span>
                            </div>
                            <h3><NuxtLink to="/courses-details">Java Programming Masterclass for Developers</NuxtLink></h3>
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

                <div class="col-lg-4 col-md-6">
                    <div class="single-courses-box">
                        <div class="courses-image">
                            <NuxtLink to="/courses-details" class="d-block image">
                                <img src="~/assets/images/courses/courses6.jpg" alt="image">
                            </NuxtLink>
                            <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                            <div class="price shadow">$69</div>
                        </div>
                        <div class="courses-content">
                            <div class="course-author d-flex align-items-center">
                                <img src="~/assets/images/user3.jpg" class="rounded-circle" alt="image">
                                <span>David Warner</span>
                            </div>
                            <h3><NuxtLink to="/courses-details">Machine Learning A-Z™: Hands-On Python</NuxtLink></h3>
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
                    <div class="pagination-area text-center">
                        <a href="#" class="prev page-numbers"><i class='bx bx-chevrons-left'></i></a>
                        <span class="page-numbers current" aria-current="page">1</span>
                        <a href="#" class="page-numbers">2</a>
                        <a href="#" class="page-numbers">3</a>
                        <a href="#" class="page-numbers">4</a>
                        <a href="#" class="next page-numbers"><i class='bx bx-chevrons-right'></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>   

<script>

export default {
    name: 'CoursesContent'
}
</script>