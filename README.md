# Toneflix Dependencies
These are third party libraries recurrently used in our products that we do not want to include as individual files in final build
The prefered mode of distribution is by compiling via laravel mix.

A possible example is given below:

```
mix.scripts([
    'ToneflixDependencies/plugins.js',
    'ToneflixDependencies/helper.js',
    'ToneflixDependencies/multiselect.core.js',
    'ToneflixDependencies/multiselect.js',
], 'public/js/compile.js');
```
