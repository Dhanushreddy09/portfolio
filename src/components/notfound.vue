<template>
    <div class="justify-items-center grid">
      <img class="h-96 w-96" :src="image">
          <p class="md:text-2xl text-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 font-black">AWW.. snap, Don't cry.</p>
          <p class="md:text-2xl text-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-800 font-black">The page you are looking for ain't found. </p>
          <br/>
          <router-link to="/">
            <button class="bg-gradient-to-r from-green-500 to-blue-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-purple-400 focus:outline-none text-white font-bold py-2 px-4 rounded-xl shadow-lg">
  Get Back
</button>
          </router-link>
    </div>
</template>
<script>
import notfound from '../../assets/notfound.png'
export default {
    data(){
        return{
            image:notfound
        }
    }
}
</script>