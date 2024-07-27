<template>
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <!-- <h2>{{pageTitle}}</h2> -->
                <ul>
                    <li><NuxtLink to="/">Naslovna</NuxtLink></li>
                    <li>{{pageTitle}}</li>
                </ul>
            </div>
        </div>

        <div class="shape-img1"><img src="~/assets/images/shape/shape1.svg" alt="image"></div>
        <div class="shape-img2"><img src="~/assets/images/shape/shape2.png" alt="image"></div>
        <div class="shape-img3"><img src="~/assets/images/shape/shape3.png" alt="image"></div>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: ['pageTitle'],
}
</script>