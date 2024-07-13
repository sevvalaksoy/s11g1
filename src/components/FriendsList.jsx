import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

export default function FriendsList(props) {
  const [friends, setFriends] = useState([]);

  const { loggedInUser } = useAuth();

  useEffect(() => {
    if (loggedInUser) {
      axios
        .get('https://nextgen-project.onrender.com/api/s11d2/friends', {
          headers: { Authorization: loggedInUser.token },
        })
        .then((response) => {
          setFriends(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [loggedInUser]);

  return (
    <div className="friendListDiv">
      <h1>FRIENDS LIST</h1>
      {friends.map((friend, key) => (
        <div className="friendList" key={key}>
          -{friend.name}-{friend.email}
        </div>
      ))}
    </div>
  );
}
