<template>
  <div>
    <h1>Your IP is {{ ip }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ip: ''
    }
  },
  mounted() {
    this.$http.get('https://httpbin.org/ip').then(
      result => {
        this.ip = result.body.origin
      },
      error => {
        console.error(error)
      }
    )
  }
}
</script>
