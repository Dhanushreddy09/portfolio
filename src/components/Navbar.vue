<template>
<div class="bg-gray-800 h-full">
    <div class="text-white h-28 grid justify-items-center text-opacity-70 py-10">
      <ul class="md:space-x-10 space-x-8">
        <li class="float-left cursor-pointer px-3 hover:bg-green-50 hover:text-black rounded-md hover:shadow-lg">ABOUT</li>
    <li class="float-left cursor-pointer px-3 hover:bg-green-50 hover:text-black rounded-md hover:shadow-lg"><a href="#projects">PROJECTS</a></li>
    <li class="float-left cursor-pointer px-3 hover:bg-green-50 hover:text-black rounded-md hover:shadow-lg">BLOGS</li>
      </ul>
  </div>
 <div class="h-96 w-2/5 px-3  text-white text-opacity-60  md:px-16 ">
     <div class="h-96 w-96 bg-green-50 rounded-xl shadow-lg">
  <div class="h-96 w-96 m-auto max-w-full bg-pink-600 rounded-xl shadow-lg transform -rotate-6">
     <p class="text-4xl font-black px-24 py-4">Hello, I'm</p>
     <p class="text-5xl font-black px-4 py-4">Dhanush</p>
     <p class="text-5xl font-black px-20 py-0">Pothulapati</p>
     <p class="text-xl px-14 py-10">A promising web developer</p>
     <div class="px-32">
     <button class="bg-blue-500 hover:bg-blue-600 focus:outline-none text-white font-bold py-2 px-4 rounded-xl shadow-lg">
  Resume
</button>
</div>
  </div>
  </div>
</div>
 
</div>

</template>
<script>
/*import linkedinimage from '../../assets/NicePng_linkedin-logo-png_233614.png'
import githubimage from '../../assets/GitHub-Mark-Light-32px.png'
import twitterimage from '../../assets/Twitter_Social_Icon_Circle_White.png'*/
import githubmark from '../../assets/GitHub-Mark-32px.png'
export default {
  data() {
    return {
      /*linkedin:linkedinimage,
      github:githubimage,
      twitter:twitterimage,*/
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

