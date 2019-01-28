<template>
<div>
<div class="topnav">
  <a  href="home">Home</a>
  <a class="active" href="/list-devices">List of all devices</a>
  <a href="/register">Registration of new device</a>
  <a href="/triggers-list">Triggers list</a>
  <a href="/scripts-list">Scripts list</a>
</div>



    <h1>List of all devices</h1>
    <table style="width:100%" border="true">
      <tr>
        <th>Nr.</th>
        <th>ID</th>
        <th>IP</th>
        <th>MLFB</th>
        <th>Version</th>
      </tr>
      <tr v-for="(device, index) in devices" :key="device._id">
        <td>{{index}}</td>
        <td>{{device._id}}</td>
        <td>{{device.ip}}</td>
        <td>{{device.mlfb}}</td>
        <td>{{device.__v}}</td>
      <tr/>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      devices: []
    }
  },
  mounted() {
    console.log('mounted called')
    
    this.$http.get('http://139.23.163.211:8421/plcs').then(
      result => {
        console.log('Result getting body')
        if (result.body.plcs) {
          console.log('PLCs available')
          this.devices = result.body.plcs
        } else {
          alert('Message plcs not abailabe. Do not be too sad!!!: ' + result.message)
        }
      },
      error => {
        console.error('Error : ' + JSON.stringify(error))
      }
    )
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