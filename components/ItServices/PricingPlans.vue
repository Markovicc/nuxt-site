<template>
    <div class="membership-levels-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title"><img src="~/assets/images/star-icon.png" alt="image"> Pricing</span>
                <h2>Pricing Plans</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div class="membership-levels-table table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>
                                <h2>$15.00</h2>
                                <h3>Basic Plan</h3>
                                <span class="desc">/Monthly</span>
                            </th>
                            <th>
                                <h2>$35.00</h2>
                                <h3>Advanced Plan</h3>
                                <span class="desc">/Monthly</span>
                            </th>
                            <th>
                                <h2>$65.00</h2>
                                <h3>Expert Plan</h3>
                                <span class="desc">/Monthly</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Number of features</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td><a href="#">5 GB Bandwidth</a></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                        </tr>
                        <tr>
                            <td><a href="#">Highest Speed</a></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                        </tr>
                        <tr>
                            <td><a href="#">1 GB Storage</a></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                        </tr>
                        <tr>
                            <td><a href="#">Unlimited Website</a></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                        </tr>
                        <tr>
                            <td><a href="#">Unlimited Users</a></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                        </tr>
                        <tr>
                            <td><a href="#">24x7 Great Support</a></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                        </tr>
                        <tr>
                            <td><a href="#">Data Security and Backups</a></td>
                            <td class="item-none"><i class='bx bx-x'></i></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                        </tr>
                        <tr>
                            <td><a href="#">Monthly Reports and Analytics</a></td>
                            <td class="item-none"><i class='bx bx-x'></i></td>
                            <td class="item-none"><i class='bx bx-x'></i></td>
                            <td class="item-check"><i class='bx bx-check'></i></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <NuxtLink to="/profile-authentication" class="select-btn">Get it now</NuxtLink>
                            </td>
                            <td>
                                <NuxtLink to="/profile-authentication" class="select-btn">Get it now</NuxtLink>
                            </td>
                            <td>
                                <NuxtLink to="/profile-authentication" class="select-btn">Get it now</NuxtLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PricingPlans'
}
</script>