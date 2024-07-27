<template>
    <div class="contact-area pb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title"><img src="~/assets/images/star-icon.png" alt="image"> Get in Touch</span>
                <h2>Ready to Get Started?<span class="overlay"></span></h2>
                <p>Your email address will not be published. Required fields are marked *</p>
            </div>

            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="contact-image" data-tilt>
                        <img src="~/assets/images/contact.png" alt="image">
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="contact-form">
                        <form id="contactForm">
                            <div class="row">
                                <div class="col-lg-12 col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="name" class="form-control" id="name" required placeholder="Your name">
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-6">
                                    <div class="form-group">
                                        <input type="email" name="email" class="form-control" id="email" required placeholder="Your email address">
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <input type="text" name="phone_number" class="form-control" id="phone_number" required placeholder="Your phone number">
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <textarea name="message" id="message" class="form-control" cols="30" rows="6" required placeholder="Write your message..."></textarea>
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <button type="submit" class="default-btn"><i class="flaticon-tick"></i>Send Message<span></span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>   

<script>

export default {
    name: 'ContactContent'
}
</script>