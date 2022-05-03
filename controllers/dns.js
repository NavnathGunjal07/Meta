const dns = require("dns");

//controller for rendering DNS txt page
module.exports.dns = async function (req, res) {
  return res.render("dnsTxt.ejs", {
    title: "MetaTag | DNS TXT",
  });
};

//controller for returning dns txt record
//referred https://nodejs.org/api/dns.html#dnsresolvetxthostname-callback
module.exports.getDnsTxt = async function (req, res) {
  try {
    let url = req.body.url;
    let resObj = {};
    let dnstxt = req.body.dnstxt;
    dnstxt = dnstxt + "=";
    if (url.includes("https://")) url = url.replace("https://", "");
    if (url.includes("/")) url = url.replace("/", "");
    console.log(dnstxt);
    let found = false;
    await dns.resolveTxt(url, (err, records) => {
      if (err) {
        resObj["Error"] = "There is some kind of error in url please check";
      }
      for (let i of records) {
        let s = i[0];
        if (s.includes(dnstxt)) {
          resObj[dnstxt] = i;
          found = true;
          console.log("found");
          break;
        }
        console.log(s);
      }
      if (!found) {
        resObj["Error"] = `${dnstxt} does not exist in given url`;
      }
      res.send(resObj);
    });
  } catch (err) {
    resObj["Error"] = `Internal server error: ${err.message}`;
  }
};
