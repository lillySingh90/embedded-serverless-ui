<template>
  <div>
    <h1>List of all devices</h1>
    <hr>
    <div v-for="device in devices" :key="device._id">
      <div class="form-group">
        <label for="name">ID:</label>
        <input type="text" class="form-control" v-model="device._id">
      </div>
      <div class="form-group">
        <label for="name">IP:</label>
        <input type="text" class="form-control" v-model="device.ip">
      </div>
      <div class="form-group">
        <label for="name">Info:</label>
        <input type="text" class="form-control" v-model="device.mlfb">
      </div>
      <div class="form-group">
        <label for="name">Version:</label>
        <input type="text" class="form-control" v-model="device.__v">
      </div>
    </div>
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
    this.$http.get('your server ip here').then(
      result => {
        console.log(JSON.stringify(result))
        this.devices = result.pics
      },
      error => {
        console.error(error)
      }
    )
  }
}
</script>
