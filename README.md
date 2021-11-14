# Next + Stitches Typescript SSG Boilerplate
This is a boilerplate for having NextJS in typescript as well as Stitches/React as the main library for styles.
This is optimized for SSG deployment since we will not be using `next/image` we will use `next-optimized-image` instead. 

## Requirements
- Node v16.13 or above
- yarn installed

## Setup
```bash
yarn
```

## Getting Started
Running the development server:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
The port maybe different if 3000 is occupied.

## Notes
Image optimization libraries installed are only for svg, you will need to install other image optimizers if you're going to use other extensions. Check that out [here](https://github.com/cyrilwanner/next-optimized-images).
