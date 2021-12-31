import { useEffect, useState } from "react";
import { PostCard } from "./PostCard"

export const PostsContainer = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(data => setUsers(data.results));
  }, []);

  return (
    <div className="w-full flex flex-col space-y-6 border py-6 px-10 rounded-xl">
      {
        users.length === 0 ? (<></>) : (
          users.map((user, key) => (
            <PostCard image={user.picture.large} name={user.name} location={user.location} number={key} />
          ))
        )
      }
    </div>
  )
}
