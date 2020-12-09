var http=require("http");
var fs=require("fs");
var url=require("url");
var qstring=require("querystring");
var m=require("./validate");

process_request=function(req,res)
{
	
	var p=url.parse(req.url);
	console.log(p.pathname);
	switch(p.pathname)
	{
		case "/":
					fs.readFile("login.html",function(err,data)
					{
						if(err)
							console.log("Error To Read File........");
						else
							res.end(data);
					});
					break;
		case "/validate":
						var d=qstring.parse(p.query);
						if(d.pass.length < 6)
							res.end("Login Failed :-Password should be At least 6 Character");
						var ans=m.validate(d.uname,d.pass);
						if(ans)
						{
							fs.readFile("success.html",function(err,data)
								{
									if(err)
										console.log("Error To Read File........");
									else
										res.end(data);
								});
						}
							
						else
						{
							fs.readFile("failure.html",function(err,data)
							{
								if(err)
									console.log("Error To Read File........");
								else
									res.end(data);
							});
						}
						break;
	}
}

var serv=http.createServer(process_request);
serv.listen(4545);
console.log("Server Running on Port 4545.......");