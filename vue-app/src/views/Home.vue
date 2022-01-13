<template>
  <div class="home">
    <h2>hello</h2>
    <Hello name="Bob"/>
    <Hello :name="'Bob'"/>
    <h2 class="menu">counter</h2>
    <Counter />
    <h2>user-form</h2>
    <UserForm />
    <h2>HelloWorld</h2>
    <HelloWorld />
    <h2>MultiStateButton</h2>
    <MultiStateButton :items="['Toto', 'Titi', 'Tata']" />
    <h2>Select</h2>
    <Select />
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'
import Counter from '@/components/Counter.vue'
import UserForm from '@/components/UserForm.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import MultiStateButton from '@/components/MultiStateButton.vue'
import Select from '@/components/Select.vue'

export default {
  name: 'Home',
  components: {
    Hello,
    Counter,
    UserForm,
    HelloWorld,
    MultiStateButton,
    Select
  }
}
</script>
