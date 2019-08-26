Vue.config.keyCodes.f1 = 112;

var main = new Vue({
    el: "#main",
    data: {
        google_url: "https://www.google.com.eg/",
        x: "0",
        y: "0",
        massage: "Mutual Binding",
    },
    methods: {
       
        alert_msg: function(){
         alert("HI ALL");
        },  
        click_once: function(){
            alert("This button will not click again");
        },   
        stop_event_prop: function(){
            alert("This mssg will not appear");
        },   
        
    },
    filters: {
        
    }   
});

var canvas = new Vue({
    el: "#canvas",
    data: {
        x: "0",
        y: "0",
    },
    methods: {
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    },
});
