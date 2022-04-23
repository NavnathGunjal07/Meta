//controller for rendering DNS txt page
module.exports.dns = async function(req,res){
  
    return res.render('dnsTxt.ejs',{
        title: 'MetaTag | DNS TXT'       
    });
}
