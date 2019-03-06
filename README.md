# React Zero course


#### Create the package.json file
```npm init -y```

#### Install Webpack
```npm install --save-dev webpack webpack-dev-server webpack-cli```

###### Run webpack using `npm start` by adding it to the package.json file
````
  "scripts": {
    ...
    "start": "webpack-dev-server --config ./webpack.config.js --mode development"
  },
````

#### Install Babel
```
npm install --save-dev @babel/core @babel/preset-env
npm install --save-dev babel-loader
npm install --save-dev @babel/preset-react
```

#### Install React
```npm install --save react react-dom```
