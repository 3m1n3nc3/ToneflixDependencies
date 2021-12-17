# Toneflix Dependencies
These are third party libraries recurrently used in our products that we do not want to include as individual files in final builds.

The prefered mode of distribution is by compiling via laravel mix or any other bundler, although this is not a requirement, just a recommendation.

A possible example is given below:

```js
mix.scripts([
    'ToneflixDependencies/multiselect.helper.js',
    'ToneflixDependencies/multiselect.core.js',
    'ToneflixDependencies/multiselect.js',
], 'public/js/compile.js');
```
