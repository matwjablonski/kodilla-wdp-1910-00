# CSS

## Assumptions

- We should be using SASS preprocessor and SCSS syntax,
- The files with `.scss` should be within `./src/sass/components` directory,
- Each `.scss` should be separate section/component,
- All the `.scss` files should be imported to main `./src/sass/style.scss` file,
- We use 2 spaces per per indentation-level,
- We don't use inline css in html files,
- All the css rules should be re-usable, (DRY, Don't Repeat Yourself),
- CSS rules should be applied to the class rather to the tags

#### Class naming

- All the class names should be readable and descriptive,
- Use `kebab-case`
- English class names

#### Variables

- Variables are a way to store information that you can re-use later.
- Variables names should clearly indicate what they relate to and should be used consistently
- We should extract variables for values like colors and sizes
- All the variables should be stored within `/src/sass/_variables.scss` file
- All the variables are prefixed with `$` symbol

```
$header-topbar-bg: #864343;

header {
  .top-bar {
    background-color: $header-topbar-bg;
  }
}
```

#### Mixin directives

- The `@mixin` directive lets you create CSS code that is to be reused throughout the website,
- All the mixin-s should be stored within `/src/sass/_mixin.scss` file

```
@mixin flex-footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ul {
  margin: 0 0 1.5rem 0;
  @include flex-footer;
  text-align: left;
}
```

#### Extend directives

- The @extend directive lets you share a set of CSS properties from one selector to another.

```
.message {
  border: 3px solid #ccc;
  padding: 10px;
}

.success {
  @extend .message;
  border-color: green;
}
```

#### CSS calc function

- The `calc()` function takes a single expression as its parameter, with the expression's result used as the value.

`width: calc(100% / 6 - 10px);`

**See also [SASS](https://sass-lang.com/guide)**
