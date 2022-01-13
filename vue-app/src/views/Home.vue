<template>
  <div class="home">
    <h2>hello</h2>
    <Hello name="Bob"/>
    <h2>counter</h2>
    <Counter />
    <h2>user-form</h2>
    <UserForm />
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'
import Counter from '@/components/Counter.vue'
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'Home',
  components: {
    Hello,
    Counter,
    UserForm
  }
}
</script>
