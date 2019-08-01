<template>
  <div id="app">
   <!-- <img src="./assets/logo.png">
    <router-view/>-->
    <h1 v-html="msg"></h1>
    <input type="text" v-model="content" v-on:keyup.enter="addnew">
    <ul>
        <li v-for="item in items" v-bind:class="{isstudent:item.student}" v-on:click="turned(item)">{{item.name}}</li>             
    </ul>
  </div>
</template>

<script>

import storage from './locale'
import Hello from './components/HelloWorld'
export default {
  name: 'App',
  data(){
     return {
        msg:"今天是星期四",
        content:"",
        items:storage.fetch()
            }

        },
  methods:{
     turned:function(item){
        item.student=!item.student;
     },
     addnew:function(){

       this.items.push({
         name:this.content,
         student:false
       });
      
       this.content=null

     }

  }

 

  }
</script>

<style>
.isstudent{
  color:red;
}
li{
  list-style:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
