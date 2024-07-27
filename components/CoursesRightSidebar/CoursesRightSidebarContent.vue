<template>
    <div class="courses-area ptb-100 bg-fafafb">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
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
                        <div class="col-lg-6 col-md-6">
                            <div class="single-courses-box">
                                <div class="courses-image">
                                    <NuxtLink to="courses-details" class="d-block image">
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
                                    <h3><NuxtLink to="courses-details">Introduction to Quantitative Methods</NuxtLink></h3>
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
    
                        <div class="col-lg-6 col-md-6">
                            <div class="single-courses-box">
                                <div class="courses-image">
                                    <NuxtLink to="courses-details" class="d-block image">
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
                                    <h3><NuxtLink to="courses-details">Introduction to Linear Models and Matrix Algebra</NuxtLink></h3>
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
    
                        <div class="col-lg-6 col-md-6">
                            <div class="single-courses-box">
                                <div class="courses-image">
                                    <NuxtLink to="courses-details" class="d-block image">
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
                                    <h3><NuxtLink to="courses-details">Data Science: Inference and Modeling</NuxtLink></h3>
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
    
                        <div class="col-lg-6 col-md-6">
                            <div class="single-courses-box">
                                <div class="courses-image">
                                    <NuxtLink to="courses-details" class="d-block image">
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
                                    <h3><NuxtLink to="courses-details">The Data Science Course: Complete Data Science</NuxtLink></h3>
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
    
                        <div class="col-lg-6 col-md-6">
                            <div class="single-courses-box">
                                <div class="courses-image">
                                    <NuxtLink to="courses-details" class="d-block image">
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
                                    <h3><NuxtLink to="courses-details">Java Programming Masterclass for Developers</NuxtLink></h3>
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
    
                        <div class="col-lg-6 col-md-6">
                            <div class="single-courses-box">
                                <div class="courses-image">
                                    <NuxtLink to="courses-details" class="d-block image">
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
                                    <h3><NuxtLink to="courses-details">Machine Learning A-Z™: Hands-On Python</NuxtLink></h3>
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

                <div class="col-lg-4 col-md-12">
                    <div class="widget-area">
                        <div class="widget widget_search">
                            <h3 class="widget-title">Search</h3>

                            <form class="search-form">
                                <label>
                                    <span class="screen-reader-text">Search for:</span>
                                    <input type="search" class="search-field" placeholder="Search...">
                                </label>
                                <button type="submit"><i class="bx bx-search-alt"></i></button>
                            </form>
                        </div>

                        <div class="widget widget_recent_courses">
                            <h3 class="widget-title">Recent Courses</h3>

                            <div class="item">
                                <a href="#" class="thumb">
                                    <span class="fullimage cover bg1" role="img"></span>
                                </a>
                                <div class="info">
                                    <span>$49.00</span>
                                    <h4 class="title usmall"><a href="#">The Data Science Course 2020: Complete Data Science Bootcamp</a></h4>
                                </div>
                                <div class="clear"></div>
                            </div>

                            <div class="item">
                                <a href="#" class="thumb">
                                    <span class="fullimage cover bg2" role="img"></span>
                                </a>
                                <div class="info">
                                    <span>$59.00</span>
                                    <h4 class="title usmall"><a href="#">Java Programming Masterclass for Software Developers</a></h4>
                                </div>
                                <div class="clear"></div>
                            </div>

                            <div class="item">
                                <a href="#" class="thumb">
                                    <span class="fullimage cover bg3" role="img"></span>
                                </a>
                                <div class="info">
                                    <span>$69.00</span>
                                    <h4 class="title usmall"><a href="#">Deep Learning A-Z™: Hands-On Artificial Neural Networks</a></h4>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>

                        <div class="widget widget_tag_cloud">
                            <h3 class="widget-title">Popular Tags</h3>

                            <div class="tagcloud">
                                <a href="#">Business <span class="tag-link-count"> (3)</span></a>
                                <a href="#">Design <span class="tag-link-count"> (3)</span></a>
                                <a href="#">Digital <span class="tag-link-count"> (2)</span></a>
                                <a href="#">SEO <span class="tag-link-count"> (2)</span></a>
                                <a href="#">Braike <span class="tag-link-count"> (2)</span></a>
                                <a href="#">Fashion <span class="tag-link-count"> (2)</span></a>
                                <a href="#">Software <span class="tag-link-count"> (2)</span></a>
                                <a href="#">Travel <span class="tag-link-count"> (1)</span></a>
                                <a href="#">Smart <span class="tag-link-count"> (1)</span></a>
                                <a href="#">Marketing <span class="tag-link-count"> (1)</span></a>
                                <a href="#">Tips <span class="tag-link-count"> (2)</span></a>
                                <a href="#">Website <span class="tag-link-count"> (2)</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>   

<script>

export default {
    name: 'CoursesRightSidebarContent'
}
</script>