function fetchUserData(userId, callback) {
	console.log(`Fetching data for user ${userId}...`);
	setTimeout(() => {
		const user = {id: userId, name: "Amina Otieno", role: "Student" };
		callback(null, user); // (error, result) convention
	}, 1000);
}


fetchUserData(101, (error, user) => {
	if(error) {
		console.log("Something went wrong:", error);
		return;
	}

	console.log("Got user:", user);
});
