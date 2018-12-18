<template>
  <div>
    <h1>List of all devices</h1>
    <hr>
    <div v-for="device in devices" :key="device._id">
      <div class="form-group">
        <label for="name">ID:</label>
        <span>{{device._id}}</span>
      </div>
      <div class="form-group">
        <label for="name">IP:</label>
        <span>{{device.ip}}</span>
      </div>
      <div class="form-group">
        <label for="name">Info:</label>
        <span>{{device.mlfb}}</span>
      </div>
      <div class="form-group">
        <label for="name">Version:</label>
        <span>{{device.__v}}</span>
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
    this.$http.get('http://139.23.163.211:8421/plcs').then(
      result => {
        result = result.body
        if (result.sucess) {
          this.devices = result.plcs
        } else {
          alert('Failed getting plcs : ' + result.massage)
        }
      },
      error => {
        console.error('Error : ' + JSON.stringify(error))
      }
    )
  }
}
</script>
