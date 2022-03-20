
import { useEffect, useState } from "react";
import styled from 'styled-components';
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
      <Container className="posts__container w-full py-8 px-10 overflow-y-auto">
        <div className="max-w-[45rem] mx-auto flex flex-col space-y-4">
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
                <PostCard key={key} image={user.picture.large} name={user.name} location={user.location} number={key} />
              ))
            )
          }
        </div>
      </Container>
      <ModalNewPost postIsOpen={postIsOpen} closePostModal={closePostModal}/>
    </>
  )
}

const Container = styled.div`
  min-height: calc(100vh - 4rem);
  max-height: calc(100vh - 4rem);
  &::-webkit-scrollbar {
    width: 14px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 10px;
  }
  &:hover::-webkit-scrollbar {
    background: #eee;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: #1E6C5B;
    border: 3px solid #eee;
  }
`;
