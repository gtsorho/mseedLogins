<template>
  <div>
    <div class="card  mx-auto text-light">
      <div class="card-body">
        <h5 class="card-title text-center fw-bold">Customer Login</h5>
        <hr class="my-1">
        <div class="">
            <label for="Email" class="form-label fs-6">Email</label>
            <input type="email" class="form-control form-control-sm" v-model="logindata.email" id="loginemail"/>
          </div>
          <div class="">
              <label for="password" class="form-label fs-6" >Password</label>
              <input type="password" class="form-control form-control-sm" v-model="logindata.password" id="loginpassword" />
          </div>
          <div class="alert float-start mt-3 alert-secondary py-0" style="opacity: .8"  role="alert">
            <p class="text-danger mt-1 mb-0 "><i class="bi bi-chat-square-text me-1"></i>message</p>
          </div>
        <button class="btn btn-success btn-sm float-end mt-3 px-5" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"
export default {
  name: "Home",
  components: {},
  data() {
    return {
      logindata:{
        email:null,
        password:null
      }
    }
  },
  created(){
    axios.get('http://72.167.40.118/api/User/GetUser/mildred.baffoe@mseed.com/qwerty'
    ).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    })   
  },
  methods: {
    login(){
      axios.get('http://72.167.40.118/api/', this.logindata,
      ).then(response => {
          console.log(response);
      }).catch(error => {
          console.log(error);
      })
    }            
  },
};
</script>

<style scoped>

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
}
</style>
