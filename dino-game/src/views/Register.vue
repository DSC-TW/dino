<template>
  <div id="register">
    <h1>This is an register page</h1>
    <RegisterForm/>
  </div>
</template>
<script>
import RegisterForm from '../components/RegisterForm.vue'
export default {
  name: 'register',
  components: {
    RegisterForm
  }
}
</script>