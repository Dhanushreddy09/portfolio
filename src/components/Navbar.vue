<template>
<div class="flex flex-col md:flex-row flex-wrap h-full w-screen bg-gray-800 space-y-10 space-x-10">
  <div class="h-28 w-screen">
    <div class="text-white text-opacity-70 px-5 md:px-32 py-8">
      <ul class="space-x-8">
        <li class="float-left px-3  cursor-pointer hover:bg-green-50 hover:text-black rounded-md hover:shadow-lg">ABOUT</li>
    <li class="float-left px-3  cursor-pointer hover:bg-green-50 hover:text-black rounded-md hover:shadow-lg"><a href="#projects">PROJECTS</a></li>
     <li class="float-right px-3  cursor-pointer hover:shadow-lg">
      <a href="https://www.linkedin.com/in/dhanush-pothulapati-5236b2165/" target="blank">
        <img class="h-7 w-17" src="assets\NicePng_linkedin-logo-png_233614.png" />
      </a>
    </li>
    <li class="float-right px-3  cursor-pointer hover:shadow-lg">
      <a href="https://twitter.com/Dhanushreddy09" target="blank">
        <img class="h-7 w-17" src="assets\Twitter_Social_Icon_Circle_White.png" />
      </a>
    </li>
    <li class="float-right px-3  cursor-pointer hover:shadow-lg">
      <a href="https://github.com/Dhanushreddy09" target="blank">
        <img class="h-7 w-17" src="assets\GitHub-Mark-Light-32px.png" />
      </a>
    </li>
      </ul>
      </div>
  </div>
  <div class="h-96 w-2/5 px-6  text-white text-opacity-60  md:px-16 ">
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
<div class="h-80 w-4/5 border-2 md:w-1/2 md:h-96">
     
</div>
<div class="h-full w-screen text-center py-8">
  <span id="projects" class=" font-black bg-clip-text text-transparent bg-gradient-to-r from-green-500  to-blue-500 text-5xl">PROJECTS</span>
  <br/>
  <div v-for="project in projects" :key="project.id" class="md:m-14 m-20  h-80 w-80 md:float-left rounded-xl shadow-lg py-6 bg-gradient-to-r from-blue-400  to-purple-500">
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
 Github <img class="h-5 w-5 inline" src="assets\GitHub-Mark-32px.png" />
</a>
       </div>
  </div>
</div>

<div class="text-center w-screen h-7">
  <a href="https://github.com/Dhanushreddy09" target="blank" class="bg-pink-600 hover:bg-pink-700 focus:outline-none text-white font-bold py-2 px-4 rounded-xl shadow-lg">
 More Projects ? <img class="h-5 w-5 inline" src="assets\GitHub-Mark-32px.png" />
</a>
</div>
<p class="text-gray-500 text-center w-screen ">&copy 2020 Dhanush Pothulapati</p>

</div>
</template>
<script>
export default {
  data() {
    return {
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

