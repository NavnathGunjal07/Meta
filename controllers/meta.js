//controller for rendering Metatag Extracter page
module.exports.meta = async function(req,res){
  
    return res.render('metaTag.ejs',{
        title: 'MetaTag | Meta'       
    });
}


module.exports.getMetaTagContent = async function(req,res){

    res.setHeader('Content-Type', 'application/json');
    //make a new request to the URL provided in the HTTP POST request
    request(req.body.url, function (error, response, responseHtml) {
       // var resObj = {};

        //if there was an error in url or wrong wrl
        if (error) {
            res.end(JSON.stringify({error: 'There was an error of some kind'}));
            return;
        }
        console.log(responseHtml);

    });

    return res.redirect('back');
}