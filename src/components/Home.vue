import Router from 'vue-router'

<template>
  <div > 
    <div class="topnav">
        <a class="active" href="home">Home</a>
        <a href="/list-devices">List of all devices</a>
        <a href="/register">Registration of new device</a>
        <a href="/triggers-list">Triggers list</a>
        <a href="/scripts-list">Scripts list</a>
        <a href="/script-editor">Scripts editor</a>
 </div>
 <br>
 <br>
 <br>
 <br>
      <h2>  Welcome to Embedded Serverless Application Home</h2>
  </div>
</template>

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
  background-color: #82a5c5;
  color: white;
}

.topnav-right {
  float: right;
}
</style>
