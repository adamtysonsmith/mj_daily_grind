rm -rf build/
mkdir build
cp src/index.html build/
webpack --config webpack.config.js -p