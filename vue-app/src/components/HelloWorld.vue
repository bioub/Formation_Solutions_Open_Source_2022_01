<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      name: 'Romain',
    };
  },
  render() {
    return (
      <div id="root">
        <div>Prénom : <input v-model={this.name} /></div>
        <p>Hello { this.name }!</p>
      </div>
    );
  }
}
</script>
