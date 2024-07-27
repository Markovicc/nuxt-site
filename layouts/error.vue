<template>
    <div class="error-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="error-content">
                        <img src="~/assets/images/error.png" alt="image">
                        <h3>Error 404 : Page Not Found</h3>
                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                        <div class="btn-box">
                            <NuxtLink to="/" class="default-btn">
                                <i class="flaticon-history"></i>
                                Go Back
                                <span></span>
                            </NuxtLink>
                            <NuxtLink to="/" class="default-btn">
                                <i class="flaticon-earth-day"></i>
                                Homepage
                                <span></span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>  

<script>
export default {
    props: ['error'],
    layout: 'error-layout'
}
</script>