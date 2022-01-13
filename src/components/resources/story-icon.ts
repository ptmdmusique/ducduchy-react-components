export const storyIcons = {
  "✌": ["fas", "hand-peace"],
  "🐶": ["fas", "dog"],
  "🐱": ["fas", "cat"],
} as const;

export const storyIconOption = {
  options: Object.keys(storyIcons),
  mapping: storyIcons,
  control: {
    type: "select",
    labels: Object.entries(storyIcons).reduce(
      (accum, [key, icon]) => ({
        ...accum,
        [key]: `${key} ${icon[1]}`,
      }),
      {},
    ),
  },
} as const;
