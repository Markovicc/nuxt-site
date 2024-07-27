<template>
  <div :class="['navbar-area', { 'is-sticky': isSticky }]">
    <div class="parix-nav">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light">
          <NuxtLink class="navbar-brand" to="/">
            <img src="~/assets/images/logo.png" alt="logo" />
          </NuxtLink>

          <b-navbar-toggle target="navbarSupportedContent">
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
          </b-navbar-toggle>

          <b-collapse
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            is-nav
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Home
                  <i class="bx bx-chevron-down"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <NuxtLink to="/" class="nav-link" exact>
                      Data Science & ML Company
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/data-analytics-ai-startup" class="nav-link">
                      Data Analytics & AI Startup
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink
                      to="/data-science-online-courses"
                      class="nav-link"
                    >
                      Data Science Online Courses
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/big-data-analysis-startup" class="nav-link">
                      Big Data Analysis Startup
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink
                      to="/data-analytics-ml-consulting"
                      class="nav-link"
                    >
                      Data Analytics & ML Consulting
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink
                      to="/machine-learning-ai-solutions"
                      class="nav-link"
                    >
                      Machine Learning & AI Solutions
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/it-services" class="nav-link">
                      IT Services
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/seo-agency" class="nav-link">
                      SEO Agency
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/digital-marketing-agency" class="nav-link">
                      Digital Marketing Agency
                    </NuxtLink>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  About Us
                  <i class="bx bx-chevron-down"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <NuxtLink to="/about-us-one" class="nav-link">
                      About Us 1
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/about-us-two" class="nav-link">
                      About Us 2
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/about-us-three" class="nav-link">
                      About Us 3
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/about-us-four" class="nav-link">
                      About Us 4
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/history" class="nav-link">History</NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/testimonials" class="nav-link">
                      Testimonials
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link"
                      >Team <i class="bx bx-chevron-right"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <NuxtLink to="/team-one" class="nav-link">
                          Team One
                        </NuxtLink>
                      </li>

                      <li class="nav-item">
                        <NuxtLink to="/team-two" class="nav-link">
                          Team Two
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  Services
                  <i class="bx bx-chevron-down"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <NuxtLink to="/services-one" class="nav-link">
                      Services One
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/services-two" class="nav-link">
                      Services Two
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/services-three" class="nav-link">
                      Services Three
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/services-four" class="nav-link">
                      Services Four
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/services-five" class="nav-link">
                      Services Five
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/services-six" class="nav-link">
                      Services Six
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/services-seven" class="nav-link">
                      Services Seven
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/services-eight" class="nav-link">
                      Services Eight
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Services Details
                      <i class="bx bx-chevron-right"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <NuxtLink to="/services-details-one" class="nav-link">
                          Default
                        </NuxtLink>
                      </li>

                      <li class="nav-item">
                        <NuxtLink to="/services-details-two" class="nav-link">
                          With Image Slider
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  Case Studies
                  <i class="bx bx-chevron-down"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Portfolio
                      <i class="bx bx-chevron-right"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <NuxtLink to="/case-studies-one" class="nav-link">
                          Case Studies 2 Columns
                        </NuxtLink>
                      </li>

                      <li class="nav-item">
                        <NuxtLink to="/case-studies-two" class="nav-link">
                          Case Studies 3 Columns
                        </NuxtLink>
                      </li>

                      <li class="nav-item">
                        <NuxtLink to="/case-studies-three" class="nav-link">
                          Case Studies 4 Columns
                        </NuxtLink>
                      </li>

                      <li class="nav-item">
                        <NuxtLink to="/case-studies-four" class="nav-link">
                          Case Studies No Space
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Portfolio Details
                      <i class="bx bx-chevron-right"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <NuxtLink
                          to="/case-studies-details-one"
                          class="nav-link"
                        >
                          Default
                        </NuxtLink>
                      </li>

                      <li class="nav-item">
                        <NuxtLink
                          to="/case-studies-details-two"
                          class="nav-link"
                        >
                          With Video
                        </NuxtLink>
                      </li>

                      <li class="nav-item">
                        <NuxtLink
                          to="/case-studies-details-three"
                          class="nav-link"
                        >
                          With Image Slider
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  Pages
                  <i class="bx bx-chevron-down"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <NuxtLink to="/faq" class="nav-link">FAQ</NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Courses
                      <i class="bx bx-chevron-right"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <NuxtLink to="/courses-grid" class="nav-link">
                          Courses Grid
                        </NuxtLink>
                      </li>

                      <li class="nav-item">
                        <NuxtLink to="/courses-right-sidebar" class="nav-link">
                          Courses Right Sidebar
                        </NuxtLink>
                      </li>

                      <li class="nav-item">
                        <NuxtLink to="/courses-details" class="nav-link">
                          Courses Details
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Events
                      <i class="bx bx-chevron-right"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <NuxtLink to="/events" class="nav-link">
                          Events
                        </NuxtLink>
                      </li>

                      <li class="nav-item">
                        <NuxtLink to="/events-details" class="nav-link">
                          Events Details
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Shop
                      <i class="bx bx-chevron-right"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <NuxtLink to="/products-one" class="nav-link">
                          Products List 01
                        </NuxtLink>
                      </li>

                      <li class="nav-item">
                        <NuxtLink to="/products-two" class="nav-link">
                          Products List 02
                        </NuxtLink>
                      </li>

                      <li class="nav-item">
                        <NuxtLink to="/cart" class="nav-link">Cart</NuxtLink>
                      </li>

                      <li class="nav-item">
                        <NuxtLink to="/checkout" class="nav-link">
                          Checkout
                        </NuxtLink>
                      </li>

                      <li class="nav-item">
                        <NuxtLink to="/products-details" class="nav-link">
                          Products Details
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/partner" class="nav-link">Partner</NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/coming-soon" class="nav-link">
                      Coming Soon
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/membership-levels" class="nav-link">
                      Membership Levels
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Authentication
                      <i class="bx bx-chevron-right"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <NuxtLink to="/profile-authentication" class="nav-link">
                          Login/Register
                        </NuxtLink>
                      </li>
                      <li class="nav-item">
                        <NuxtLink to="/lost-your-password" class="nav-link">
                          Forget Password
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/purchase-guide" class="nav-link">
                      Purchase Guide
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/privacy-policy" class="nav-link">
                      Privacy Policy
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/terms-of-service" class="nav-link">
                      Terms of Service
                    </NuxtLink>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  Blog
                  <i class="bx bx-chevron-down"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <NuxtLink to="/blog-one" class="nav-link">
                      Grid (2 in Row)
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/blog-two" class="nav-link">
                      Grid (3 in Row)
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/blog-three" class="nav-link">
                      Grid (Full Width)
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/blog-four" class="nav-link">
                      Right Sidebar
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/blog-five" class="nav-link">
                      Left Sidebar
                    </NuxtLink>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Single Post
                      <i class="bx bx-chevron-right"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <NuxtLink to="/blog-details-one" class="nav-link">
                          Default
                        </NuxtLink>
                      </li>

                      <li class="nav-item">
                        <NuxtLink to="/blog-details-two" class="nav-link">
                          With Video
                        </NuxtLink>
                      </li>

                      <li class="nav-item">
                        <NuxtLink to="/blog-details-three" class="nav-link">
                          With Image Slider
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </b-collapse>

          <div class="others-option d-flex align-items-center">
            <div class="option-item">
              <NuxtLink to="/contact" class="default-btn"
                ><i class="flaticon-right"></i>Get Started<span></span
              ></NuxtLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarStyleFour",
  data() {
    return {
      isSticky: false,
    };
  },

  mounted() {
    const that = this;
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        that.isSticky = true;
      } else {
        that.isSticky = false;
      }
    });
  },
};
</script>