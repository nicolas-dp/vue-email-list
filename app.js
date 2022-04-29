const app = new Vue({

    el: "#app",

    data: {
        mail_random: [],

    },

    methods: {

        clickToGenerate(){
            console.log(this.mail_random);
        }
    },

    mounted() {

        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {

                    
                        this.mail_random.push(response.data.response)
                        //console.log(this.mail_random);

                })
        }

    }


})

