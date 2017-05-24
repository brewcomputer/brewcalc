export const spitfireRecipe = {
  batchSize: 10,
  mashEfficiency: 0.75,
  fermentables: [
    {
      name: 'Chateau Pale Ale',
      amount: 15,
      potential: 1.037,
      color: 3.5,
      mashed: true,
    },
    {
      name: 'Crystal 120L',
      amount: 3,
      potential: 1.033,
      color: 120,
      mashed: true,
    },
    {
      name: 'Sugar',
      amount: 1.5,
      potential: 1.046,
      color: 0,
      mashed: false,
    },
  ],
  hops: [
    {
      name: 'Target',
      amount: 1.5,
      time: 60,
      alpha: 0.111,
      form: 'pellet',
      use: 'boil',
    },
    {
      name: 'East Kent Goldings',
      amount: 1.5,
      time: 15,
      alpha: 0.072,
      form: 'pellet',
      use: 'boil',
    },
  ],
}
