<template>
<div>
    <div class="card  mx-auto text-light">
        <div class="card-body">
            <h5 class="card-title text-center fw-bold">Customer Loan Application</h5>
            <hr  class="my-1">
            <div class="">
                <label for="Loan Amount" class="form-label fs-6 ">Loan Amount</label>
                <input type="text" class="form-control form-control-sm" v-model="loandata.amount" />
            </div>
            <div class="">
                <label for="Purporse of Loan" class="form-label fs-6" >Purporse of Loan</label>
                <input type="tect" class="form-control form-control-sm" v-model="loandata.purposeOfloan" id="loginpassword" />
            </div>
            <div class="alert float-start mt-3 alert-secondary py-0" style="opacity: .8"  role="alert">
                <p class="text-danger mt-1 mb-0 "><i class="bi bi-chat-square-text me-1"></i>message</p>
            </div>
            <button class="btn btn-success btn-sm float-end mt-3 px-5" @click="apply()">Apply</button>
        </div>
    </div>
</div>
</template>

<script>
    import axios from "axios"
    export default {
        name: "Home",
        components: {},
        data() {
            return {
                loandata:{
                    amount:null,
                    purposeOfloan:null
                }
            }
        },
        
        methods: {
            apply(){
                var token = localStorage.getItem('token');
                axios.get('http://72.167.40.118/api/', this.loandata,
                {
                headers:{'Authorization': `Bearer ${token}`}
                }
                ).then(response => {
                    console.log(response);
                }).catch(error => {
                    console.log(error);
                })
            }            
        },
        created(){
            axios.get('http://72.167.40.118/api/User/GetUser/mildred.baffoe@mseed.com/qwerty'
            ).then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
            
        }
    };
</script>

<style scoped>
    div{
        zoom: 95%;
    }
    .card{
    width: 25%;
    margin-top: 15% !important;
    margin-bottom: 10px; /* Added */
    background-color: #001e55db !important;
    }
    .form-control {
        color: #212529;
        background-color: #ffffff21;
        border: 1px solid #a2a2a28f;
    }
    .form-control:focus {
        color: #ffffff;
        background-color: #ffffff57;
    }
    @media only screen and (max-width: 900px) {
    .card{
        width: 75%;
    }
    h5 {
    font-size: 1rem;
    }
    label {
    font-size: 0.7rem !important;
    }
    }
</style>
