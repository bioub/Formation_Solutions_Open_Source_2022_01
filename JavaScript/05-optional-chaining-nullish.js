const contacts = [
  {
    name: 'Jean',
    address: {
      city: 'Paris',
      coords: {
        lat: 0,
        long: 0.546756,
      }
    }
  },
  {
    name: 'Eric',
  },
  {
    name: 'Paul',
    address: {
      city: 'Nice',
    }
  }
];

for (const c of contacts) {
  // Optional Chaining ?
  // Nullish Coalescing Operator ??
  const lat = c.address?.coords?.lat ?? 0.5;

  console.log(lat);

}
