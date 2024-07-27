<template>
    <div class="blog-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <h2>Latest Valuable Insights<span class="overlay"></span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post bg-fffbf5">
                        <div class="post-image">
                            <NuxtLink to="/blog-details-three">
                                <img src="~/assets/images/blog/blog4.jpg" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="post-content">
                            <ul class="post-meta d-flex justify-content-between align-items-center">
                                <li>
                                    <div class="post-author d-flex align-items-center">
                                        <img src="~/assets/images/user1.jpg" class="rounded-circle" alt="image">
                                        <span>Alex Morgan</span>
                                    </div>
                                </li>
                                <li>
                                    <i class='flaticon-calendar'></i> April 30, 2020
                                </li>
                            </ul>
                            <h3><NuxtLink to="/blog-details-three">Six Ways to Make Smarter Decisions</NuxtLink></h3>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post bg-fffbf5 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div class="post-image">
                            <NuxtLink to="/blog-details-three">
                                <img src="~/assets/images/blog/blog5.jpg" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="post-content">
                            <ul class="post-meta d-flex justify-content-between align-items-center">
                                <li>
                                    <div class="post-author d-flex align-items-center">
                                        <img src="~/assets/images/user2.jpg" class="rounded-circle" alt="image">
                                        <span>Sarah Taylor</span>
                                    </div>
                                </li>
                                <li>
                                    <i class='flaticon-calendar'></i> April 28, 2020
                                </li>
                            </ul>
                            <h3><NuxtLink to="/blog-details-three">The Challenges to Tackle Before You Start With AI</NuxtLink></h3>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                    <div class="single-blog-post bg-fffbf5 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div class="post-image">
                            <NuxtLink to="/blog-details-three">
                                <img src="~/assets/images/blog/blog6.jpg" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="post-content">
                            <ul class="post-meta d-flex justify-content-between align-items-center">
                                <li>
                                    <div class="post-author d-flex align-items-center">
                                        <img src="~/assets/images/user3.jpg" class="rounded-circle" alt="image">
                                        <span>David Warner</span>
                                    </div>
                                </li>
                                <li>
                                    <i class='flaticon-calendar'></i> April 29, 2020
                                </li>
                            </ul>
                            <h3><NuxtLink to="/blog-details-three">Why Organisations Want an Analytics Platform</NuxtLink></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="vector-shape1"><img src="~/assets/images/shape/vector-shape1.png" alt="image"></div>
        <div class="vector-shape2"><img src="~/assets/images/shape/vector-shape2.png" alt="image"></div>
    </div>
</template>

<script>

export default {
    name: 'LatestValuableInsights'
}
</script>