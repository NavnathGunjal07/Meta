const meta = require("meta-grabber");
const URL = require("url").URL;
//controller for rendering Metatag Extracter page
module.exports.meta = async function (req, res) {
  return res.render("metaTag.ejs", {
    title: "MetaTag | Meta",
  });
};

//controller for returning the meta tag content
//used meta library documentation for this
module.exports.getMetaTagContent = async function (req, res) {
  let resObj = {};
  if (stringIsAValidUrl(req.body.url)) {
    let data = meta(req.body.url);
    let metaname = req.body.metatag;
    let string = data[metaname];
    console.log(data);
    
    if (string !== undefined) {
      resObj[metaname] = string;
    } else {
      resObj["Error"] = `${metaname} Not found in given url`;
    }
  
    res.send(resObj);
  }
  else {
    resObj["Error"] = `${req.body.url} Not found please enter valid url`;
    res.send(resObj);
  }
  
};


//function for validating url
//used https://stackoverflow.com/questions/30931079/validating-a-url-in-node-js
const stringIsAValidUrl = (s) => {
  try {
    new URL(s);
    return true;
  } catch (err) {
    return false;
  }
};
