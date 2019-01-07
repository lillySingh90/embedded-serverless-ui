<template>
  <div>
    <div class=topnav>
      <a href="home">Home</a>
      <a href="/list-devices">List of all devices</a>
      <a href="/register">Registration of new device</a>
      <a class="active" href="/triggers-list">Triggers list</a>
      <a  href="/scripts-list">Scripts list</a>
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
      <tr v-for="(device, index) in devices" :key="device._id">
        <td>{{index}}</td>
        <td>{{device._id}}</td>
        <td>{{device.plcId}}</td>
        <td>{{device.variable}}</td>
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
     this.$http.get('http://139.23.163.211:8421/triggers').then(
      result => {
        console.log('Result getting Triggers')
        if (result && result.body.trigger) {
          console.log('Result successful')
          console.log('this.result.trigger')
          console.log(result.body.trigger)
          this.devices = result.body.trigger
        } else {
          console.log('in else')
          alert('Triggers list from plcs : '+ result.message)

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
  background-color: #4CAF50;
  color: white;
}

.topnav-right {
  float: right;
}
</style>
