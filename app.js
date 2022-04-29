const app = new Vue({

    el: "#app",

    data: {
        mail_random: null

    },

    methods: {},

    mounted() {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(this);

                this.mail_random = response.data.response




            })


    }


})

