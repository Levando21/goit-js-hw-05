/** @format */

const myUsers = [
	{
		name: "Moore Hensley",
		gender: "male",
		balance: 2811,
	},
	{
		name: "Sharlene Bush",
		gender: "female",
		balance: 3821,
	},
	{
		name: "Ross Vazquez",
		gender: "male",
		balance: 3793,
	},
	{
		name: "Elma Head",
		gender: "female",
		balance: 2278,
	},
	{
		name: "Carey Barr",
		gender: "male",
		balance: 3951,
	},
	{
		name: "Blackburn Dotson",
		gender: "male",
		balance: 1498,
	},
	{
		name: "Sheree Anthony",
		gender: "female",
		balance: 2764,
	},
];

const getTotalBalanceByGender = (users, gender) => {
	let filterByGender = users.filter((user) => user.gender === gender);
	return filterByGender.reduce((totalBalance, user) => {
		return totalBalance + user.balance;
	}, 0);
};

console.log(getTotalBalanceByGender(myUsers, "male"));
console.log(getTotalBalanceByGender(myUsers, "female"));
