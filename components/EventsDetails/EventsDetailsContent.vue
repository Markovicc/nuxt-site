<template>
    <section class="events-details-area pb-100">
            <div class="events-details-image">
                <img src="~/assets/images/events/events-details.jpg" alt="image">

                <div id="timer" class="flex-wrap d-flex justify-content-center">
                    <div id="days">{{days}} <span>Days</span></div>
                    <div id="hours">{{hours}} <span>Hours</span></div>
                    <div id="minutes">{{minutes}} <span>Minutes</span></div>
                    <div id="seconds">{{seconds}} <span>Seconds</span></div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <div class="events-details-header">
                            <ul>
                                <li><i class='bx bx-calendar'></i>Wed, 20 May, 2020</li>
                                <li><i class='bx bx-map'></i>Victoria Road, New York, USA</li>
                                <li><i class='bx bx-time'></i>12.00PM</li>
                            </ul>
                        </div>

                        <div class="events-details-location">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185268459418!3d40.74117737932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f81d549f%3A0xb2a39bb5cacc7da0!2s175%205th%20Ave%2C%20New%20York%2C%20NY%2010010%2C%20USA!5e0!3m2!1sen!2sbd!4v1588746137032!5m2!1sen!2sbd"></iframe>
                        </div>

                        <div class="events-details-desc">
                            <h3>About The Event</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <h3>Where the event?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <h3>Who this event is for?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-12">
                        <div class="events-details-info">
                            <ul class="info">
                                <li class="price">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span>Cost</span>
                                        $149
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span>Total Slot</span>
                                        1500
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span>Booked Slot</span>
                                        350
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span>Pay With</span>
                                        <div class="payment-method">
                                            <img src="~/assets/images/payment/payment1.png" class="shadow" alt="image">
                                            <img src="~/assets/images/payment/payment2.png" class="shadow" alt="image">
                                            <img src="~/assets/images/payment/payment3.png" class="shadow" alt="image">
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div class="btn-box">
                                <a href="#" class="default-btn"><i class="flaticon-user"></i>Book Now<span></span></a>
                                <p>You must <a href="profile-authentication.html">login</a> before register event.</p>
                            </div>

                            <div class="events-share">
                                <div class="share-info">
                                    <span>Share This Course <i class="flaticon-share"></i></span>

                                    <ul class="social-link">
                                        <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>   

<script>

export default {
    name: 'EventsDetailsContent',
    data() {
        return {
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        }
    },

    created() { // Turn data into viewable values
        setInterval(() => {
            this.commingSoonTime();
        }, 1000);
    },

    methods: {
        commingSoonTime() {
            let endTime = new Date("August 23, 2027 17:00:00 PDT");			
            let endTimeParse = (Date.parse(endTime)) / 1000;
            let now = new Date();
            let nowParse = (Date.parse(now) / 1000);
            let timeLeft = endTimeParse - nowParse;
            let days = Math.floor(timeLeft / 86400); 
            let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }
            this.days = days;
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        }
    }
}
</script>