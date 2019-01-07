<template>
  <div>
    <div class=topnav>
      <a href="home">Home</a>
      <a href="/list-devices">List of all devices</a>
      <a class="active" href="/register">Registration of new device</a>
      <a href="/triggers-list">Triggers list</a>
      <a href="/scripts-list">Scripts list</a>
    </div>
    <h1>Registration page</h1>
    <div class="form-group">
      <label for="name">Device Name:</label><br>
      <input type="text" class="form-control" v-model="deviceData.name">
    </div>
    <div class="form-group">
      <label for="name">Device IP:</label><br>
      <input type="text" class="form-control" v-model="deviceData.ip">
    </div>
    <div class="form-group">
      <button class="btn btn-primary" v-on:click="submitted()">Submit!</button>
    </div>
    <br>
    <br>
    <textarea rows="10" cols="100" v-model="response"></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deviceData: {
        name: '',
        ip: ''
      },
      response: ''
    }
  },
  methods: {
    submitted() {
      this.$http
        .post('http://139.23.163.211:8421/plcs', this.deviceData, {
          headers: { 'content-type': 'application/json' }
        })
        .then(
          console.log('entry'),
          result => {
            this.response = JSON.stringify(result.data)
          },
          error => {
            console.error(error)
          }
        )
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
  background-color: #333;
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
