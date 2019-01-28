<template>
  <div>
    <div class=topnav>
      <a href="home">Home</a>
      <a href="/list-devices">List of all devices</a>
      <a href="/register">Registration of new device</a>
      <a href="/triggers-list">Triggers list</a>
      <a href="/scripts-list">Scripts list</a>
      <a class="active" href="/script-editor">Script editor</a>
    </div>
    <h1>Write your script</h1>

  <!--  <p style="white-space: pre-line">{{ message }}</p>  -->
    <textarea v-model="message" rows="30" cols="150"></textarea><br><br>
    <button type="submit" v-on:click="onSave">Save</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      devices: [],
      message:'please write your script here'
    }
  },
  methods:{
onSave(){
  this.$http.post('http://139.23.163.211:8421/scripts',this.deviceData, {
          headers: { 'content-type': 'application/json' }
  })
  .then(
    res=>{
      console.log(res)
    }
  )}
  }


  
 /* mounted() {
    console.log('mounted called')
    this.$http.get('http://139.23.163.211:8421/scripts').then(
      result => {
        console.log('Result getting body',result)
        if (result.body.scripts) {
          console.log('Scripts available')
          this.devices = result.body.scripts
        } else {
          alert('No scripts available... Now it is time to be sad!!!')
        }
      },
      error => {
        console.error('Error : ' + JSON.stringify(error))
      }
    )
  }*/
}
</script>
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: rgb(97, 97, 117);
}
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #82a5c5;
  color: white;
}

.topnav-right {
  float: right;
}

</style>