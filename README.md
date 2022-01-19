# Duc Duchy React Components

## Hello

- React components that I frequently used. [Live Demo](http://ptmdmusique.github.io/ducduchy-react-components)
- Checkout my [online portfolio](https://duc-duchy.io/)

## Get started

### Installation

1. Run `npm i ducduchy-react-components`
2. To use style, add `import "ducduchy-react-components/dist/ducduchy-react-components.cjs.production.min.css";` in your app

### Local development

1. make sure to run `npm install` once to install dependencies
2. run `npm storybook` to start the server
3. to add more components, say `MyComponent`:
   - create a folder `src/components/MyComponent`
   - create component file `src/components/MyComponent/MyComponent.tsx`
   - create story file `src/components/MyComponent/MyComponent.stories.tsx`
   - (optional) create a style file `src/components/MyComponent/MyComponent.scss` and import it in the component's `tsx` file
   - (TODO) create test file
   - create an index.ts file in the component folder, and re-export the component in it
   - re-export the component folder in the `src/components/index.ts` file

## Notes

1. Themes are stored in `src\components\main\theme.scss`. You can override with your custom CSS variables or even add your own theme.
2. Icon used in this project are from [Font Awesome](https://fontawesome.com/) (free version). However, you can add Pro version and just use the corresponding prefix as well as icon names after initialization.
3. Most of the style follows [Material Design 2](https://material.io/) and [Material Design 3](https://m3.material.io/)
4. Styling uses [Tailwind CSS](https://tailwindcss.com/)
5. Form validation uses [React Hook Form](https://react-hook-form.com/)
