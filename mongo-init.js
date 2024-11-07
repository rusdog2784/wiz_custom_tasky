db.createUser(
	{
		user: "scott",
		pwd: "SuperSecret12#",
		roles: [
			{
				role: "readWrite",
				db: "taskydb"
			}
		]
	}
);