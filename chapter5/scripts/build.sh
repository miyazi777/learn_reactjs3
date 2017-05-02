# JavaScript compile
babel --presets react,es2015 js/source -d js/build
# JavaScript packaging
browserify js/build/app.js -o bundle.js
# css pakaging
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css
# complate
date; echo;
