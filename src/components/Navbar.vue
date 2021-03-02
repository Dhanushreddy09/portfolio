<template>
<div class="bg-gray-800 h-full">
    <div id="nav" class="text-white h-24 grid  justify-items-center text-opacity-70 py-10">
      <ul class="md:space-x-10 space-x-8">
        <li class="float-left cursor-pointer px-3 hover:bg-green-50 hover:text-black rounded-md hover:shadow-lg"><a href="#about">ABOUT</a></li>
    <li class="float-left cursor-pointer px-3 hover:bg-green-50 hover:text-black rounded-md hover:shadow-lg"><a href="#projects">PROJECTS</a></li>
    <li class="float-left cursor-pointer px-3 hover:bg-green-50 hover:text-black rounded-md hover:shadow-lg"><a href="#blogs">BLOGS</a></li>
      </ul>
  </div>
 <div id="intro" class="min-h-screen text-center text-white content-around py-20">
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
     <a href="https://drive.google.com/file/d/184qZuexZCV45YR_19KBKxJVAto0pexCi/view?usp=sharing" target="blank" class="bg-blue-500 hover:bg-blue-600 focus:outline-none text-white font-bold py-2 px-4 rounded-xl shadow-lg">
  Resume
</a>
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
  <div class="w-3/4 m-auto md:min-h-screen">
  <span id="about" class=" font-black bg-clip-text text-transparent bg-gradient-to-r from-green-500  to-blue-500 text-5xl">ABOUT</span>
  <br/>
  <br/>
  <i class="fa fa-clock text-white text-lg text-opacity-60 mx-3" aria-hidden="true"> one minute read</i>
  <br/>
  <br/>
  <br/>
  <br/>
  <p class="text-white md:text-xl text-md  text-opacity-70 text-justify tracking-widest">
    Hey! My name is Dhanush Pothualapati, currently I am pursuing undergrads in computer science from Lovely
    Professional University, Punjab, India.
  </p>
  <br/>
  <p class="text-white md:text-xl text-md text-opacity-70 text-justify tracking-widest">
      I love to work on emerging technologies like Javascript frameworks, databases, etc. I love to design and 
      develop high level web applications. I am a part-time freelancer and I mostly blog about tech in dev community.
      I usually listen to music while programming and I play video games on weekends (How cool is that, right ?).
  </p>
  <br/>
  <p class=" text-white md:text-xl text-md text-opacity-70 text-justify tracking-widest">
    Feel free to reach me out on opportunities and feedback.
  </p>
</div>
<br/>
<br/>
<div class="text-center py-6">
  <span id="projects" class=" font-black bg-clip-text text-transparent bg-gradient-to-r from-green-500  to-blue-500 text-5xl">PROJECTS</span>
  <div class="space-y-10 md:py-2 py-16">
  <div v-for="project in projects" :key="project.id" class="md:m-14 m-auto  md:inline-block h-80 w-80 rounded-xl shadow-lg py-6 bg-gradient-to-r from-blue-400  to-purple-500">
       <div class="h-16  py-3 m-auto">
         <span class="text-2xl font-black px-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700  to-pink-700">{{project.Name}}</span>
       </div>
       <br/>
       <div class="h-28 py-3 text-center  m-auto break-words">
         <span class="text-md font-medium">
          {{project.Description}}
         </span>
       </div>
       <br/>
       <br/>
       <div class="">
<a :href="project.gitlink" target="blank" class=" bg-pink-600 hover:bg-pink-700 focus:outline-none text-white font-bold py-2 px-4 rounded-xl shadow-lg">
 Github <img class="h-5 w-5 inline" :src="markgithub" />
</a>
       </div>
  </div>
  <div class="text-center h-14">
  <a href="https://github.com/Dhanushreddy09" target="blank" class="bg-pink-600 hover:bg-pink-700 focus:outline-none text-white font-bold py-2 px-4 rounded-xl shadow-lg">
 More Projects ? <img class="h-5 w-5 inline" :src="markgithub" />
</a>
</div>
  </div>
</div>
<br/>
<br/>
<br/>
<br/>
<div class="w-3/4 m-auto">
  <span id="blogs" class=" font-black bg-clip-text text-transparent bg-gradient-to-r from-green-500  to-blue-500 text-5xl">BLOGS</span>
  <br/>
  <br/>
  <br/>
  <div v-for="blog in blogs" :key="blog.id" class="py-6 text-justify">
  <a :href="blog.link" target="blank" class=" italic text-2xl text-white font-bold text-opacity-70">{{blog.id}}. {{blog.title}}</a>
  </div>
  </div>
  <div class="text-center py-8 text-opacity-60 h-24 text-white">&copy 2021, Dhanush Pothulapati</div>
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
       },
       {
         id:2,
         Name:'Shopping List',
         Description:'A vue Js based To-do list app specificically designed for Shopping purpose.',
         gitlink:'https://github.com/Dhanushreddy09/Shopping-List',
       },
       {
         id:3,
         Name:'Find My Movies',
         Description:'A React js based Event management application designed to keep track of upcoming movie screenings.',
         gitlink:'https://github.com/Dhanushreddy09/Event-Manager',
       },
        {
         id:4,
         Name:'Netflix Wiki',
         Description:'A JS based application which provides various info to clients regarding a given movie or a show hosted on netflix.',
         gitlink:'https://github.com/Dhanushreddy09/netflix-wiki',
       }
     ],
     blogs:[
       {
         id:1,
         link:'https://dev.to/dhanushreddy09/digital-images-388f',
         title:'Digital Images'
       },
       {
         id:2,
         link:'https://dev.to/dhanushreddy09/image-bluescreen-4nk8',
         title:'Image BlueScreen'
       }
     ]
    }
  }
}
</script>

