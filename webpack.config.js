// Path Configuration

var path = require ('path'),
    srcPath = path.join(__dirname,'src'),
    destPath = path.join(__dirname,'public_html/js');


module.exports = {

    entry: [srcPath + '/main.jsx'],
    output: {
        path: destPath,
        filename: "main.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.jsx/, loader: "jsx-loader" }
        ]
    }
};

