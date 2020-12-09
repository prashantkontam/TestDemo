var users=[{name:"user1",pass:"pass01"},{name:"user2",pass:"pass02"},{name:"user3",pass:"pass03"},{name:"user4",pass:"pass04"},{name:"user5",pass:"pass05"},{name:"user6",pass:"pass06"}];

exports.validate=function(u,p)
{
	for(i=0;i<users.length;i++)
	{
		if((users[i].name==u)&& (users[i].pass==p))
		{
			return true;
		}
	}
	return false;
}