// ** SET COMPONENTS AND TEMPLATES ** //

Vue.component('simpletemplate', {
    template: '<h5><br>This is a simple Template HTML<br><br></h5>'
});

Vue.component('testcomponent', {
    template: '<div v-on:mouseover = "changename()" v-on:mouseout = "originalname();"><p>Toogle Name : <span id = "name">{{name}}</span></p></div>',
    data: function() {
        return {
            name: "Change by Function : Some I Name A"
        }
    },
    methods: {
        changename: function() {
            this.name = "Change by Function : Another Name B";
        },
        originalname: function() {
            this.name = "Change by Function : Some I Name A";
        }
    }
});

// ** VUE ASIGNATIONS - DIRECT INSTANCE CREATION ** //

var app0 = new Vue({
    el: '#app-0',
    data: {
        message: 'Text from Template Changes.'
    }
});

var app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'Start Barebones HTML document.'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        todos: [
            { text: 'Obj String : My Dinamic Item' },
            { text: 'Obj String : Learn JavaScript' },
            { text: 'Obj String : Learn Vue' },
            { text: 'Obj String : Build Something Awesome' }
        ]
    }
});

var app3 = new Vue({
    el: '#app-3'
});

var app4a = new Vue({
    el: '#app-4-a'
});

var app4b = new Vue({
    el: '#app-4-b'
});

// ** DINAMIC COMPONENT ** //

var app5 = new Vue({
    el: '#app-5',
    data: {
        view: 'component1'
    },
    components: {
        'component1': {
            template: '<div><span style = "font-size:25;color:red;"><strong>Dynamic Component</strong></span></div>'
        }
    }
});

// ** METHODS ** //

var app6 = new Vue({
    el: '#app-6',
    data: {
        firstname: "First Item",
        lastname: "Last Item",
    },
    methods: {
        mydetails: function() {
            return "Function Return String -> " + this.firstname + " -> " + this.lastname;
        }
    }
});