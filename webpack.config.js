const path = require("path"); 
const HtmlWebPackPlugin  = require("html-webpack-plugin");



module.exports = {
    entry: {
        index :  './src/js/index.js'
        // about:  './src/js/about.js'
    }, 
    output: {
        filename : '[name].bundle.js',   //name maps every entry in the entry object and creates a new file
        path: path.join(__dirname, '/dist')
    }, 
    module: {
        rules : [
            {
                test: /\.js$/,
                exclude : /node_modules/, 
                use: { 
                    loader: 'babel-loader', 
                    options: {
                        presets: ["es2015"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    optimization: {                 // this prevents repetition of common code between files, less code at the end
        splitChunks : {
            cacheGroups :{
                commons: {
                    test: /[\\/]node_modules[\\/]/,   //excludes the node modules folder
                    name: "common", 
                    chunks: "all"
                }
            }
        }
    },
    plugins: [
        new HtmlWebPackPlugin({      // generates the default dist/index.html file  
            template: "src/index.html", 
            title: "Our Webpack App"
        })   
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true, 
        port: 9000
    }   


} 