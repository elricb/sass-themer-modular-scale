module.exports = {
    plugins: [
        require('autoprefixer')({
             browsers: ['> 2%'], //'last 3 version'
             flexbox: true,
             cascade: false,
             supports: true
        })
    ]
}
