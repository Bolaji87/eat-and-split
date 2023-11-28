import React, { useState } from "react";
import FriendsList from "./components/FriendsList.jsx";
import Button from "./components/Button.jsx";
import FormAddFriend from "./components/FormAddFriend.jsx";
import FormSplitBill from "./components/FormSplitBill.jsx";

const initialFriends = [
	{
		id: 118836,
		name: "Clark",
		image: "https://i.pravatar.cc/48?u=118836",
		balance: -7,
	},
	{
		id: 933372,
		name: "Sarah",
		image: "https://i.pravatar.cc/48?u=933372",
		balance: 20,
	},
	{
		id: 499476,
		name: "Anthony",
		image: "https://i.pravatar.cc/48?u=499476",
		balance: 0,
	},
];

function App() {
	const [friends, setFriends] = useState(initialFriends);
	const [showAddFriend, SetShowAddFriend] = useState(false);

	function handleAddFriend(friend) {
		setFriends((friends) => [...friends, friend]);
		SetShowAddFriend(false);
	}

	function handleShowAddFriend() {
		SetShowAddFriend((prev) => !prev);
	}
	return (
		<div className="app">
			<div className="sidebar">
				<FriendsList friends={friends} />
				{showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
				<Button onClick={handleShowAddFriend}>
					{showAddFriend ? "Close" : "Add Friend"}
				</Button>
			</div>
			<FormSplitBill />
		</div>
	);
}

export default App;
