<template>
  <div class="products-area ptb-100">
    <div class="container">
      <div class="parix-grid-sorting row align-items-center">
        <div class="col-lg-6 col-md-6 result-count">
          <p>
            We found <span class="count">9</span> products available for you
          </p>
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
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-products-box">
            <div class="products-image">
              <router-link to="/products-details">
                <img
                  src="~/assets/images/products/products1.jpg"
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
                  >Note Book Mockup</router-link
                >
              </h3>
              <div class="price">
                <span class="old-price">$321</span>
                <span class="new-price">$250</span>
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

        <div class="col-lg-4 col-md-6 col-sm-6">
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

        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-products-box">
            <div class="products-image">
              <router-link to="/products-details">
                <img
                  src="~/assets/images/products/products5.jpg"
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
                  >Real Life Fairytale</router-link
                >
              </h3>
              <div class="price">
                <span class="new-price">$240</span>
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
                  src="~/assets/images/products/products6.jpg"
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

              <div class="new-tag">New!</div>
            </div>

            <div class="products-content">
              <h3>
                <router-link to="/products-details"
                  >Running From Me</router-link
                >
              </h3>
              <div class="price">
                <span class="old-price">$150</span>
                <span class="new-price">$100</span>
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

        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="pagination-area text-center">
            <a href="#" class="prev page-numbers"
              ><i class="bx bx-chevrons-left"></i
            ></a>
            <span class="page-numbers current" aria-current="page">1</span>
            <a href="#" class="page-numbers">2</a>
            <a href="#" class="page-numbers">3</a>
            <a href="#" class="page-numbers">4</a>
            <a href="#" class="next page-numbers"
              ><i class="bx bx-chevrons-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>   

<script>
export default {
  name: "ProductsContent",
};
</script>