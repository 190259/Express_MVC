//アクションメソッド
exports.index = (req, res)=>{
//    res.send('Hello routes/')
 res.send('home/index.ejs', data)
}
exports.about = (req, res) => {
    let data = { title: 'About Page' }
    res.render('home/about.ejs', data)
}