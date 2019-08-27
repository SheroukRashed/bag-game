Vue.component ('greeting',{
    props:['appname'],
    template: "<h2>HI ALL FROM {{appname}}</h2>",
    data: function () {
        return {

        }
    },
});


var appOne = new Vue({
    el: "#app-one",
    data: {
        name : "",
        age: "",
    },
    methods: {
        showInputs: function () {
            
            this.name = this.$refs.usr_name.value;
            this.age = this.$refs.usr_age.value;
            console.log(this.name);
            console.log(this.age);
        }
    },
});
var appTwo = new Vue({
    el: "#app-two",
    data: {},
});