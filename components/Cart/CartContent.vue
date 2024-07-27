<template>
  <div class="cart-area ptb-100">
    <div class="container">
      <form>
        <div class="cart-table table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Name</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td class="product-thumbnail">
                  <a href="#">
                    <img
                      src="~/assets/images/products/products1.jpg"
                      alt="item"
                    />
                  </a>
                </td>

                <td class="product-name">
                  <a href="#">Note Book Mockup</a>
                </td>

                <td class="product-price">
                  <span class="unit-amount">$250.00</span>
                </td>

                <td class="product-quantity">
                  <div class="input-counter">
                    <form>
                      <input
                        type="number"
                        class="form-control"
                        id="number"
                        aria-describedby="number"
                        placeholder="0"
                      />
                    </form>
                  </div>
                </td>

                <td class="product-subtotal">
                  <span class="subtotal-amount">$250.00</span>

                  <a href="#" class="remove"><i class="bx bx-trash"></i></a>
                </td>
              </tr>

              <tr>
                <td class="product-thumbnail">
                  <a href="#">
                    <img
                      src="~/assets/images/products/products2.jpg"
                      alt="item"
                    />
                  </a>
                </td>

                <td class="product-name">
                  <a href="#">Motivational Book Cover</a>
                </td>

                <td class="product-price">
                  <span class="unit-amount">$200.00</span>
                </td>

                <td class="product-quantity">
                  <div class="input-counter">
                    <form>
                      <input
                        type="number"
                        class="form-control"
                        id="number"
                        aria-describedby="number"
                        placeholder="0"
                      />
                    </form>
                  </div>
                </td>

                <td class="product-subtotal">
                  <span class="subtotal-amount">$200.00</span>

                  <a href="#" class="remove"><i class="bx bx-trash"></i></a>
                </td>
              </tr>

              <tr>
                <td class="product-thumbnail">
                  <a href="#">
                    <img
                      src="~/assets/images/products/products3.jpg"
                      alt="item"
                    />
                  </a>
                </td>

                <td class="product-name">
                  <a href="#">Book Cover Softcover</a>
                </td>

                <td class="product-price">
                  <span class="unit-amount">$200.00</span>
                </td>

                <td class="product-quantity">
                  <div class="input-counter">
                    <form>
                      <input
                        type="number"
                        class="form-control"
                        id="number"
                        aria-describedby="number"
                        placeholder="0"
                      />
                    </form>
                  </div>
                </td>

                <td class="product-subtotal">
                  <span class="subtotal-amount">$200.00</span>

                  <a href="#" class="remove"><i class="bx bx-trash"></i></a>
                </td>
              </tr>

              <tr>
                <td class="product-thumbnail">
                  <a href="#">
                    <img
                      src="~/assets/images/products/products4.jpg"
                      alt="item"
                    />
                  </a>
                </td>

                <td class="product-name">
                  <a href="#">Stop and Take a Second</a>
                </td>

                <td class="product-price">
                  <span class="unit-amount">$150.00</span>
                </td>

                <td class="product-quantity">
                  <div class="input-counter">
                    <form>
                      <input
                        type="number"
                        class="form-control"
                        id="number"
                        aria-describedby="number"
                        placeholder="0"
                      />
                    </form>
                  </div>
                </td>

                <td class="product-subtotal">
                  <span class="subtotal-amount">$150.00</span>
                  <a href="#" class="remove"><i class="bx bx-trash"></i></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="cart-buttons">
          <div class="row align-items-center">
            <div class="col-lg-7 col-sm-7 col-md-7">
              <div class="shopping-coupon-code">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Coupon code"
                  name="coupon-code"
                  id="coupon-code"
                />
                <button type="submit">Apply Coupon</button>
              </div>
            </div>

            <div class="col-lg-5 col-sm-5 col-md-5 text-right">
              <a href="#" class="default-btn"
                ><i class="flaticon-refresh"></i>Update Cart<span></span
              ></a>
            </div>
          </div>
        </div>

        <div class="cart-totals">
          <h3>Cart Totals</h3>

          <ul>
            <li>Subtotal <span>$800.00</span></li>
            <li>Shipping <span>$30.00</span></li>
            <li>Total <span>$830.00</span></li>
          </ul>
          <a href="#" class="default-btn"
            ><i class="flaticon-shopping-cart"></i>Proceed to Checkout<span
            ></span
          ></a>
        </div>
      </form>
    </div>
  </div>
</template>   

<script>
export default {
  name: "CartContent",
};
</script>