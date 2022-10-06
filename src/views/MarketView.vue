<template>

    <div class="containerTrade">

        <div class="content-form">
            <div class="registration-form">
                <form>
                    <div class="form-icon">
                        <span><i class="icon icon-user"></i></span>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control item" id="username" placeholder="Ressource id">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control item" id="password" placeholder="Quantité">
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-block create-account">Create Account</button>
                    </div>
                </form>
            </div>

        </div>
        <div class="ligne"></div>
        <div class = "allItemwithBtn">
            <div class="allItem">
                <div class="item" v-for="(ress,index) in ressources.slice(p,n)" :key = index>
                        <span> {{ress}} </span>
                        <input type="button" value="Acheter">
                </div>
            </div>
            <div class="btn_class">
                <button @click = "Prev">Prev</button>
                <button @click = "Next">Next</button>
            </div>
        </div>
       
    </div>
</template>


<script>




export default {
    
    name: 'MarketView',
    data() {
        return {
            ressources: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22"],
            p : 0,
            n : 4
        }
    },
    props: {

    },
    methods: {
        Prev(){
            if(this.p > 0 ){
                this.p -= 5;
                this.n -= 5;
                console.log(this.p,this.n)
            }
        },
        Next(){
            if(this.ressources.length > this.n){
                this.p += 5;
                this.n += 5;
                console.log(this.p,this.n)
            }
        }

    },
    computed: {

    },
    mounted() {
    }
}
</script>


<style>
.buttons {
    display: flex;
}

.fetchedElements {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.allItemwithBtn {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
}

.allItem{
    display: flex;
    flex-wrap: wrap;

}

.item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 80px;
    margin: 20px;
    border: solid cornflowerblue;
}

body {
    background-color: #dee9ff;
}

.registration-form {
    padding: 50px 0;
}

.registration-form form {
    background-color: #fff;
    max-width: 600px;
    margin: auto;
    padding: 50px 70px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.registration-form .form-icon {
    text-align: center;
    background-color: #5891ff;
    border-radius: 50%;
    font-size: 40px;
    color: white;
    width: 100px;
    height: 100px;
    margin: auto;
    margin-bottom: 50px;
    line-height: 100px;
}

.registration-form .item {
    border-radius: 20px;
    margin-bottom: 25px;
    padding: 10px 20px;
}

.registration-form .create-account {
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    background-color: #5791ff;
    border: none;
    color: white;
    margin-top: 20px;
}

.registration-form .social-media {
    max-width: 600px;
    background-color: #fff;
    margin: auto;
    padding: 35px 0;
    text-align: center;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    color: #9fadca;
    border-top: 1px solid #dee9ff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.registration-form .social-icons {
    margin-top: 30px;
    margin-bottom: 16px;
}

.registration-form .social-icons a {
    font-size: 23px;
    margin: 0 3px;
    color: #5691ff;
    border: 1px solid;
    border-radius: 50%;
    width: 45px;
    display: inline-block;
    height: 4px;
    text-align: center;
    background-color: #fff;
    line-height: 45px;
}

.registration-form .social-icons a:hover {
    text-decoration: none;
    opacity: 0.6;
}

@media (max-width: 576px) {
    .registration-form form {
        padding: 50px 20px;
    }

    .registration-form .form-icon {
        width: 70px;
        height: 70px;
        font-size: 30px;
        line-height: 70px;
    }
}

.content-form {
    width: 32%;
    margin-left: 20px;
}

.ligne {

    left: 20%;
    margin-left: 20px;
    width: 2px;
    height: 100vh;
    background-color: #fff;
}

.containerTrade {
    display: flex;
}
</style>
