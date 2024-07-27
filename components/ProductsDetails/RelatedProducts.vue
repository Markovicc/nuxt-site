<template>
  <div class="products-area pb-70">
    <div class="container">
      <div class="section-title">
        <h2>Related Products</h2>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-products-box">
            <div class="products-image">
              <router-link to="/products-details">
                <img
                  src="~/assets/images/products/products2.jpg"
                  class="main-image"
                  alt="image"
                />
              </router-link>

              <div class="products-button">
                <ul>
                  <li>
                    <div class="wishlist-btn">
                      <a href="#">
                        <i class="bx bx-heart"></i>
                        <span class="tooltip-label">Add to Wishlist</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="sale-tag">Sale!</div>
            </div>

            <div class="products-content">
              <h3>
                <router-link to="/products-details"
                  >Motivational Book Cover</router-link
                >
              </h3>
              <div class="price">
                <span class="old-price">$210</span>
                <span class="new-price">$200</span>
              </div>
              <div class="star-rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </div>
              <a href="#" class="add-to-cart">Add to Cart</a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-products-box">
            <div class="products-image">
              <router-link to="/products-details">
                <img
                  src="~/assets/images/products/products3.jpg"
                  class="main-image"
                  alt="image"
                />
              </router-link>

              <div class="products-button">
                <ul>
                  <li>
                    <div class="wishlist-btn">
                      <a href="#">
                        <i class="bx bx-heart"></i>
                        <span class="tooltip-label">Add to Wishlist</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="products-content">
              <h3>
                <router-link to="/products-details"
                  >Book Cover Softcover</router-link
                >
              </h3>
              <div class="price">
                <span class="old-price">$210</span>
                <span class="new-price">$200</span>
              </div>
              <div class="star-rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </div>
              <a href="#" class="add-to-cart">Add to Cart</a>
            </div>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3"
        >
          <div class="single-products-box">
            <div class="products-image">
              <router-link to="/products-details">
                <img
                  src="~/assets/images/products/products4.jpg"
                  class="main-image"
                  alt="image"
                />
              </router-link>

              <div class="products-button">
                <ul>
                  <li>
                    <div class="wishlist-btn">
                      <a href="#">
                        <i class="bx bx-heart"></i>
                        <span class="tooltip-label">Add to Wishlist</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="products-content">
              <h3>
                <router-link to="/products-details"
                  >Stop and Take a Second</router-link
                >
              </h3>
              <div class="price">
                <span class="new-price">$150</span>
              </div>
              <div class="star-rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </div>
              <a href="#" class="add-to-cart">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>   

<script>
export default {
  name: "RelatedProducts",
};
</script>