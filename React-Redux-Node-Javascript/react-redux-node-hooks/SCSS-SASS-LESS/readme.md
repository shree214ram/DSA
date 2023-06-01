Syntatic awsome style sheet 

https://www.ionos.com/digitalguide/websites/web-development/sass/

1. Its prepocessor . it compiles and convert into normal css 
2. Its a Language and It proves "DO NOT REPEAT YOURSELF" with the help of Variable , For Loop , conditional code 
3. cascading Indentation , hirarchi level of presentation is possible 
4. Mixin {import other }

# https://marksheet.io/sass-scss-less.html 

### Sass vs SCSS
    Sass has 2 syntaxes available:

    Sass itself (Syntactically Awesome StyleSheets) in .sass files
    SCSS (Sassy CSS) in .scss files, which is something halfway between regular CSS and Sass
    The difference between Sass and SCSS is quite subtle.

    Remember that:

    Sass is the name of the preprocessor
    SCSS is easier to learn
    all resources on the internet (like The Sass Way) mention Sass, not SCSS
    all features are available for both syntaxes
    everything in SCSS is available in Sass
    We’re actually going to write SCSS but still call it Sass.

#   Why SCSS first
    We’re gonna use SCSS for a few reasons:

   1. readibility: the syntax is very similar to CSS
    2. learning curve: it only adds a few additional features on top of CSS
    3. compatibility; a CSS file is a valid SCSS file
    4. resources: lots of online articles to read and open source libraries to use
    5. expandibility: it’s easy to go from SCSS to Sass
#   Features
    What Sass provides1 is:

   1. variables: instead of repeating #fce473 throughout your CSS file, just set $yellow: #fce473 once
    2. nesting: CSS rules can be nested within each other
    3. mixins: custom functions that can accept parameters and will prevent useless repetitions
    4. extensions: an easy way to inherit the same properties of another selector
    5. operators: adding/substracting/multiplying/dividing values, like 960px / 4 or $space * 2
    # DRY code
    Everything about Sass is to provide tools to prevent repeating yourself in your code: it’s the DRY principle, which stands for Don’t repeat yourself.

    variables prevents repeating values
    nesting prevents repeating selectors
    mixins and extensions prevent repeating properties
# Installing Sass
Head towards https://sass-lang.com/install to install Sass on your computer.

and any CSS preprocessor for that matter, but I’ll refer to Sass only from now on. ↩
