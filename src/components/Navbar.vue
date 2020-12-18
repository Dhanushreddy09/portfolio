<template>
<div class="bg-gray-800">
 
<div class="text-center py-8">
  <span id="projects" class=" font-black bg-clip-text text-transparent bg-gradient-to-r from-green-500  to-blue-500 text-5xl">PROJECTS</span>
  <br/>
  <div v-for="project in projects" :key="project.id" class="md:m-14 m-16  h-80 w-80 md:float-left rounded-xl shadow-lg py-6 bg-gradient-to-r from-blue-400  to-purple-500">
       <div class="h-16 w-full py-3 m-auto">
         <span class="text-2xl font-black px-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700  to-pink-700">{{project.Name}}</span>
       </div>
       <br/>
       <div class="h-28 w-full py-3 text-center  m-auto break-words">
         <span class="text-md font-medium">
          {{project.Description}}
         </span>
       </div>
       <br/>
       <br/>
       <div class="px-3 space-x-12">
         <a :href="project.livedemolink" target="blank" class="bg-pink-600 cursor-pointer hover:bg-pink-700 focus:outline-none text-white font-bold py-2 px-4 rounded-xl shadow-lg">
 Live Demo  <i class="fa fa-play text-sm text-yellow-400" aria-hidden="true"></i>
</a>
<a :href="project.gitlink" target="blank" class=" bg-pink-600 hover:bg-pink-700 focus:outline-none text-white font-bold py-2 px-4 rounded-xl shadow-lg">
 Github <img class="h-5 w-5 inline" :src="markgithub" />
</a>
       </div>
  </div>
</div>
<div class="text-center w-screen h-7">
  <a href="https://github.com/Dhanushreddy09" target="blank" class="bg-pink-600 hover:bg-pink-700 focus:outline-none text-white font-bold py-2 px-4 rounded-xl shadow-lg">
 More Projects ? <img class="h-5 w-5 inline" :src="markgithub" />
</a>
</div>
<p class="text-gray-500 text-center w-screen ">&copy 2020 Dhanush Pothulapati</p>
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

