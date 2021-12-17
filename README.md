# Toneflix Dependencies
These are third party libraries recurrently used in our products that we do not want to include as individual files in final builds.

The preferred mode of distribution is by compiling via Laravel Mix or any other bundler.

A possible example is given below:

```js
mix.scripts([
    'ToneflixDependencies/multiselect.helper.js',
    'ToneflixDependencies/multiselect.core.js',
    'ToneflixDependencies/multiselect.js',
], 'public/js/compile.js');
```

## Directories
Where certain scripts are project specific, they will not be in the root directory, instead a new directory matching the project name will be used to house them, this is also a simple recommendation for proper structural organization and understanding.
 
