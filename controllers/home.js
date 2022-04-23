//controller for rendering home page
module.exports.home = async function(req,res){
  
    return res.render('index.ejs',{
        title: 'MetaTag | Home'       
    });
}
