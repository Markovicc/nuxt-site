<template>
  <div class="products-area ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
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
            <div class="col-lg-6 col-md-6 col-sm-6">
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

            <div class="col-lg-6 col-md-6 col-sm-6">
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

            <div class="col-lg-6 col-md-6 col-sm-6">
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

            <div class="col-lg-6 col-md-6 col-sm-6">
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

            <div class="col-lg-6 col-md-6 col-sm-6">
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

            <div class="col-lg-6 col-md-6 col-sm-6">
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

        <div class="col-lg-4 col-md-12">
          <div class="widget-area">
            <div class="widget widget_search">
              <h3 class="widget-title">Search</h3>

              <form class="search-form">
                <label>
                  <span class="screen-reader-text">Search for:</span>
                  <input
                    type="search"
                    class="search-field"
                    placeholder="Search..."
                  />
                </label>
                <button type="submit"><i class="bx bx-search-alt"></i></button>
              </form>
            </div>

            <div class="widget widget_popular_products">
              <h3 class="widget-title">Popular Products</h3>

              <div class="item">
                <a href="#" class="thumb">
                  <span class="fullimage cover bg1" role="img"></span>
                </a>
                <div class="info">
                  <span>$49.00</span>
                  <h4 class="title usmall">
                    <a href="#">Random Romance Novel Title Generator</a>
                  </h4>
                  <div class="rating">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </div>
                </div>
                <div class="clear"></div>
              </div>

              <div class="item">
                <a href="#" class="thumb">
                  <span class="fullimage cover bg2" role="img"></span>
                </a>
                <div class="info">
                  <span>$59.00</span>
                  <h4 class="title usmall">
                    <a href="#">Writing Exercises Story Title Ideas</a>
                  </h4>
                  <div class="rating">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </div>
                </div>
                <div class="clear"></div>
              </div>

              <div class="item">
                <a href="#" class="thumb">
                  <span class="fullimage cover bg3" role="img"></span>
                </a>
                <div class="info">
                  <span>$69.00</span>
                  <h4 class="title usmall">
                    <a href="#">Amaze Story Kitt Net's Book Ideas</a>
                  </h4>
                  <div class="rating">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </div>
                </div>
                <div class="clear"></div>
              </div>
            </div>

            <div class="widget widget_tag_cloud">
              <h3 class="widget-title">Popular Tags</h3>

              <div class="tagcloud">
                <a href="#"
                  >Business <span class="tag-link-count"> (3)</span></a
                >
                <a href="#">Design <span class="tag-link-count"> (3)</span></a>
                <a href="#">Digital <span class="tag-link-count"> (2)</span></a>
                <a href="#">SEO <span class="tag-link-count"> (2)</span></a>
                <a href="#">Braike <span class="tag-link-count"> (2)</span></a>
                <a href="#">Fashion <span class="tag-link-count"> (2)</span></a>
                <a href="#"
                  >Software <span class="tag-link-count"> (2)</span></a
                >
                <a href="#">Travel <span class="tag-link-count"> (1)</span></a>
                <a href="#">Smart <span class="tag-link-count"> (1)</span></a>
                <a href="#"
                  >Marketing <span class="tag-link-count"> (1)</span></a
                >
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
  name: "ProductsContent",
};
</script>