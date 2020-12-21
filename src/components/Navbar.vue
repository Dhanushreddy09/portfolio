<template>
<div class="bg-gray-800 h-full">
    <div class="text-white h-28 grid justify-items-center text-opacity-70 py-10">
      <ul class="md:space-x-10 space-x-8">
        <li class="float-left cursor-pointer px-3 hover:bg-green-50 hover:text-black rounded-md hover:shadow-lg"><a href="#about">ABOUT</a></li>
    <li class="float-left cursor-pointer px-3 hover:bg-green-50 hover:text-black rounded-md hover:shadow-lg"><a href="#projects">PROJECTS</a></li>
    <li class="float-left cursor-pointer px-3 hover:bg-green-50 hover:text-black rounded-md hover:shadow-lg">BLOGS</li>
      </ul>
  </div>
 <div class="h-full text-center text-white content-around py-20">
   <div>
     <br/>
     <p class="font-black text-4xl md:text-5xl text-opacity-60 bg-clip-text text-transparent bg-gradient-to-r to-pink-500  from-purple-500">Hello, I'm</p>
     <br/>
     <p class="font-black text-4xl md:text-5xl text-opacity-60 bg-clip-text text-transparent bg-gradient-to-r to-indigo-600  from-blue-400">Dhanush Potulapati</p>
     <br/>
     <br/>
     <p class="text-xl text-opacity-80">A promising web developer</p>
     <br/>
     <br/>
     <button class="bg-blue-500 hover:bg-blue-600 focus:outline-none text-white font-bold py-2 px-4 rounded-xl shadow-lg">
  Resume
</button>
 </div>
 <br/>
 <br/>
 <div class="grid justify-items-center">
 <ul class="md:space-x-10 space-x-8">
   <li class="float-left px-3  cursor-pointer hover:shadow-lg">
      <a href="https://www.linkedin.com/in/dhanush-pothulapati-5236b2165/" target="blank">
        <img class="h-7 w-17" :src="linkedin" />
      </a>
    </li>
    <li class="float-left px-3  cursor-pointer hover:shadow-lg">
      <a href="https://twitter.com/Dhanushreddy09" target="blank">
        <img class="h-7 w-17" :src="twitter" />
      </a>
    </li>
    <li class="float-left px-3  cursor-pointer hover:shadow-lg">
      <a href="https://github.com/Dhanushreddy09" target="blank">
        <img class="h-7 w-17" :src="github" />
      </a>
    </li>
 </ul>
 </div>
</div>
<br/>
<br/>
  <div class="w-3/4 m-auto">
  <span id="about" class=" font-black bg-clip-text text-transparent bg-gradient-to-r from-green-500  to-blue-500 text-5xl">ABOUT</span>
  <br/>
  <br/>
  <i class="fa fa-clock text-white text-lg text-opacity-60" aria-hidden="true"> one minute read</i>
  <br/>
  <br/>
  <p class="text-white text-xl text-opacity-70 text-left">Hey! My name is Dhanush Pothualapati, currently I am pursuing undergraduation in computer science from Lovely
    Professional University, Punjab, India.
  </p>
</div>
</div>
</template>
<script>
import linkedinimage from '../../assets/NicePng_linkedin-logo-png_233614.png'
import githubimage from '../../assets/GitHub-Mark-Light-32px.png'
import twitterimage from '../../assets/Twitter_Social_Icon_Circle_White.png'
import githubmark from '../../assets/GitHub-Mark-32px.png'
export default {
  data() {
    return {
      linkedin:linkedinimage,
      github:githubimage,
      twitter:twitterimage,
      markgithub:githubmark,
     projects:[
       {
         id:1,
         Name:'Contact Manager',
         Description:'A simple javascript based Contact Management system.',
         gitlink:'https://github.com/Dhanushreddy09/Contact-Manager',
         livedemolink:'https://drive.google.com/file/d/1Kul-ocq_T0-Gj6obitwgJhVGk9zJFORG/view?usp=sharing'
       },
       {
         id:2,
         Name:'Shopping List',
         Description:'A vue Js based To-do list app specificically designed for Shopping purpose.',
         gitlink:'https://github.com/Dhanushreddy09/Shopping-List',
         livedemolink:'/'
       },
       {
         id:3,
         Name:'Find My Movies',
         Description:'A React js based Event management application designed to keep track of upcoming movie screenings.',
         gitlink:'https://github.com/Dhanushreddy09/Event-Manager',
         livedemolink:'/'
       },
     ]
    }
  },
  methods:{
    
  }
}
</script>

