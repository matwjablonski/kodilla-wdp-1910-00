# WDP Group Project

## Project description

Project is a sample of store page coded from a free PSD template created for the purpose of improving programming skills.

## Demo

[Visualisation of the website](https://kodilla-wdp-1910-00.netlify.com)

## Getting started

### Install

Please make sure you have installed Node.js (recommended version 12.13.1).

After cloning repository, install required packages using command `npm install`.

### Building

This package comes with [Parcel](https://parceljs.org/getting_started.html). The following tasks are available:
`watch` automatically rebuilds as files change
`build` builds project in `dist folder based on files included in`src folder
`code-quality` using [pretty-quick](https://github.com/azz/pretty-quick) and [eslint](https://eslint.org/) formats code to follow specific set of formatting rules and analyzes code to find problem in JS files.

### Git Hooks

Project uses Git Hooks, in this case each time you run `git commit command the`code-quality script will check files that you selected to commit.

## Project structure and good practices

All necessary to work source files are included in `src/` folder.

`images` - contains all images used in project,
`partials` - contains all .html files attached in index.html file, - each .html file includes one section, - file names start with the numbers from 10-header to 90-footer, which corresponds with position on the website.
`sass` - contains all .scss files attached in style.scss files divided to:
`bootstrap` styles package folder,
`FontAwesome` icons package folder,
`components` folder, which includes styles for each section,
`variables.scss`(includes defined all colors and sizes, variables names should clearly indicate what they relate to and should be used consistently),
`mixin.scss(includes all grouped CSS declarations reused throughout our application),`hover-config.scss(includes style created for hover effects used in our application)
Please make sure to check out [XXX.md](XXX.md).
`scripts` - contains all .js files, please make sure to check out [Scripts.md](Scripts.md).
`webfonts` - contains all font files used in project.

Commit name should be relatively short and define solved problem. While creating pull request name of the task should be used, moreover it is recommended to shortly describe the problem and it's solution.

### Website structure and features

Currently application is fully responsive and contains:

- `navigation bar` includes user menu and cart, where the summarise amount will be displayed,
- `main menu` allows search product and select product category as well as navigate to specific sections on the website,
- `hot-deals` section displays best deal products. Both sliders can be navigated manually, additionally left slider automatically changes products. For small devices users swipe feature has been added.
- `special-offers` section
- `new-furniture` section displays furnitures divided to categories. Each product can be added to cart, quickly viewed and rated(using star rating system). Moreover for each product on sale old price and new price is being displayed. It is also available for users to mark favourite or exchange product.
- `furniture gallery` section filters products according to four different categories besides features described above, tiny-slider included on the bottom allows easily browse articles.
- `blog-section` displays current blog posts always on top, comment option included.
- `brands section` modern carousel displaying brands with additional manual navigation.
- `feedback section` showing custumers reviews - automatic and manual navigation.
- `footer section` includes i.a. informations, payments options and social media links.
