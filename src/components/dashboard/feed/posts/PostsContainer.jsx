
import { useEffect, useState } from "react";
import { ModalNewPost } from "./ModalNewPost";
import { PostCard } from "./PostCard";

export const PostsContainer = () => {

  const [users, setUsers] = useState([]);
  const [postIsOpen, setPostIsOpen] = useState(false);

  const closePostModal = () => {
    setPostIsOpen(false);
  }

  const openPostModal = () => {
    setPostIsOpen(true);
  }

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(data => setUsers(data.results))
    .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className="w-full flex flex-col space-y-4 py-8 px-10 overflow-y-auto" style={{ minHeight: 'calc(100vh - 4rem)', maxHeight: 'calc(100vh - 4rem)' }}>
        <div className="border rounded-xl py-6 px-8 flex items-center space-x-3 w-full">
          <div className="h-10 w-10 rounded-full overflow-hidden grow-0 flex-none">
            <img src="https://i.pravatar.cc/300?img=12" alt="image_random" />
          </div>
          <div className="w-full h-full">
            <button onClick={openPostModal} type="button" className="focus:outline-none cursor-text px-5 border hover:bg-slate-100 text-left text-gray-500 text-sm border-slate-300 w-full rounded-full py-2">
              ¿Qué hay de nuevo?
            </button>
          </div>
        </div>
        {
          users.length === 0 ? (<></>) : (
            users.map((user, key) => (
              <PostCard image={user.picture.large} name={user.name} location={user.location} number={key} />
            ))
          )
        }
      </div>
      <ModalNewPost postIsOpen={postIsOpen} closePostModal={closePostModal}/>
    </>
  )
}
