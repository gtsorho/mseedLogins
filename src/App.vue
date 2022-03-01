<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");


p, h1, h2, h3,h4,h5, li, button, .btn, label,span,input, a{
    font-family: 'Raleway', sans-serif;
} 
body,html{
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
}
body{
background-image: linear-gradient(30deg, rgb(17 44 95 / 31%)30%, rgb(20 46 100) );    
object-fit: fill;

}
</style>
