<template>
  <div>
    <h1>Registration page</h1>
    <div class="form-group">
      <label for="name">Device Name:</label>
      <input type="text" class="form-control" v-model="deviceData.name">
    </div>
    <div class="form-group">
      <label for="name">Device IP:</label>
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
        .post('https://httpbin.org/post', this.deviceData, {
          headers: { 'content-type': 'application/json' }
        })
        .then(
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
