var app = new Vue({
    el: "#app",
    data: {
        bagLife: 100,
        ended: false,
    },
    methods: {
        bunch: function(){
            this.bagLife -= 10;
            if (this.bagLife <= 0) {
                this.ended = true;
            }
        },
        reset: function(){
            this.bagLife = 100;
            this.ended = false;
        },
    },
    computed: {

    },
});

