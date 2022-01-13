<script>
export default {
  name: 'MultiStateButton',
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      index: 0,
    };
  },
  methods: {
    nextItem() {
      this.index = (this.index + 1) % this.items.length;
    },
  },
  render() {
    return <button onClick={this.nextItem}>{this.items[this.index]}</button>;
  },
};
</script>
