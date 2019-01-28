<template>
  <div>
    <div class=topnav>
      <a href="home">Home</a>
      <a href="/list-devices">List of all devices</a>
      <a href="/register">Registration of new device</a>
      <a class="active" href="/triggers-list">Triggers list</a>
      <a href="/scripts-list">Scripts list</a>
      <a href="/script-editor">Scripts editor</a>
    </div>
    <h1>List of all Triggers</h1>
 <table style="width:100%" border="true">
      <tr>
        <th>Nr.</th>
        <th>ID</th>
        <th>Plc ID</th>
        <th>variable</th>
        <th>Version</th>
      </tr>

      <tr v-for="(trigger, index) in triggers" :key="trigger._id">
        <td>{{index}}</td>
        <td>{{trigger._id}}</td>
        <td>{{trigger.plcId}}</td>
        <td>{{trigger.variable}}</td>
        <td>{{trigger.__v}}</td>

         <td align="left">
           <form>
         <!--   <form action="http://139.23.163.211:8421/config" method="get"> -->
            <!--select data-placeholder="Begin typing a name to filter..." multiple="true">
              <option v-for="(script, index2) in scripts" :key="script._id">Script {{index2}}: {{script.name}}</option>
              </select-->
              <table v-for="(script, index2) in scripts" :key="script._id">
              <input type="checkbox" name="scriptId" v-bind:value="script._id">Script {{index2}}: {{script.name}}
              </table><br>
            <!--  Script {{index2}}: {{script.name}} -->
            <input type="submit" name="triggerId" v-bind:value="trigger._id"><br>
            <input style="display:none" type="file" @change="onFileSelected" ref="fileInput">
            <button @click= "this.refs.fileInput.click()">Pick File</button>
            <button @click="onUpload">Upload</button>
          </form>
         </td>
      <tr/>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      triggers: [],
      scripts:[],
      selectedFile: null
    }
  },
  mounted() {
     this.$http.get('http://139.23.163.211:8421/triggers').then(
      result => {
        console.log('Result getting Triggers')
        if (result && result.body.trigger) {
          console.log('Result successful')
          console.log('this.result.trigger')
          console.log(result.body.trigger)
          this.triggers = result.body.trigger
        } else {
          console.log('in else')
          alert('Triggers list from plcs : '+ result.message)

        }
      },
      error => {
        console.error('Error : ' + JSON.stringify(error))
      }
    )

     this.$http.get('http://139.23.163.211:8421/scripts').then(
      result => {
        console.log('Result getting body',result)
        if (result.body.scripts) {
          console.log('Scripts available')
          this.scripts = result.body.scripts
        } else {
          alert('No scripts available... Now it is time to be sad!!!')
        }
      },
      error => {
        console.error('Error : ' + JSON.stringify(error))
      }
    )
  },
  methods: {
 //   check: function() {
//    console.log(this.checkedCategories)
   /* this.$http
        .post('http://139.23.163.211:8421/config', this.configData, {
          headers: { 'content-type': 'application/json' }
        })
        .then(
          console.log('entry'),
          result => {
            this.response = JSON.stringify(result.data)
            console.log('message:' + result.data)
          },
          error => {
            console.error(error)
          }
        )},   */

    onFileSelected(event){
      console.log(event)
      this.selectedFile=event.target.files[0]
    },
 onUpload(){
   const fd= new FormData();
   fd.append('file', this.selectedFile, this.selectedFile.name)
   this.$http.post('http://139.23.163.211:8421/scripts', this.configData, {headers: { 'content-type': 'application/json' } },fd,{
     onUploadProgress: uploadEvent =>{
       console.log('Upload Progress:'+ Math.random(uploadEvent.loaded/ uploadEvent.total * 100) + '%')
     }
   })
   .then(res=>{
     console.log(res)
      })
    }
  }
}
</script>
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: rgb(133, 132, 219);
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
