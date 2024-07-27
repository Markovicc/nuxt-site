<template>
    <div class="coming-soon-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="coming-soon-content">
                    <NuxtLink to="/" class="logo">
                        <img src="~/assets/images/logo.png" alt="image">
                    </NuxtLink>
                    <h1>We Are Launching Soon</h1>
                    <div id="timer" class="flex-wrap d-flex justify-content-center">
                        <div id="days">{{days}} <span>Days</span></div>
                        <div id="hours">{{hours}} <span>Hours</span></div>
                        <div id="minutes">{{minutes}} <span>Minutes</span></div>
                        <div id="seconds">{{seconds}} <span>Seconds</span></div>
                    </div> 
                    <form class="newsletter-form" data-toggle="validator">
                        <div class="form-group">
                            <input type="email" class="input-newsletter" placeholder="Enter your email" name="EMAIL" required autocomplete="off">
                            <span class="label-title"><i class='bx bx-envelope'></i></span>
                        </div>
                        <button type="submit" class="default-btn"><i class="flaticon-user"></i>Subscribe<span></span></button>
                        <div id="validator-newsletter" class="form-result"></div>
                        <p>If you would like to be notified when your app is live, Please subscribe to our mailing list.</p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>   

<script>

export default {
    name: 'ComingSoonContent',
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