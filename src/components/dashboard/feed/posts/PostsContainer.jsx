
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { setResponsePaymentSuccessAction, statusPayment } from "../../../../redux/slices/post/checkout/checkoutSlice";
import { setCreatePostSuccessAction, setPostSuccessAction, statusCP } from "../../../../redux/slices/post/postSlice";
import { getPosts } from "../../../../utils/api/services/posts/posts";
import decodeToken from "../../../../utils/jwt/decode";
import { ToastPost } from "../../../shared/ToastPost";
import { ToastPublishedPost } from "../../../shared/ToastPublishedPost";
import { ModalNewPost } from "./ModalNewPost";
import { PostCard } from "./PostCard";

export const PostsContainer = () => {

  const decryptedToken = decodeToken(localStorage.getItem("token"));
  const img_perfil = decryptedToken.user.profile.image_url;

  const [posts, setPosts] = useState([]);
  const [postIsOpen, setPostIsOpen] = useState(false);

  const dispatch = useDispatch();
  const status_payment = useSelector(statusPayment) ?? false;
  const statusCreatePost = useSelector(statusCP) ?? false;

  const closePostModal = () => {
    setPostIsOpen(false);
  }

  const openPostModal = () => {
    setPostIsOpen(true);
  }

  useEffect(() => {
    getPosts()
    .then(data => setPosts(data));
  }, [statusCreatePost]);

  useEffect(() => {
    if (status_payment) {
      setTimeout(() => {
        dispatch(setResponsePaymentSuccessAction(false));
      }, 5000);
    }
    if (statusCreatePost) {
      setTimeout(() => {
        dispatch(setCreatePostSuccessAction(false));
        dispatch(setPostSuccessAction(false));
      }, 5000);
    }
    // eslint-disable-next-line
  }, [status_payment, statusCreatePost]);

  return (
    <>
      <Container className="w-full py-5 lg:py-8 md:px-6 lg:px-10 overflow-y-auto">
        <div className="max-w-[45rem] mx-auto flex flex-col space-y-4">
          <div className="border rounded-xl py-6 px-8 flex items-center space-x-3 w-full">
            <div className="h-10 w-10 rounded-full overflow-hidden flex flex-none">
              <img className="w-10 h-10 object-cover object-center bg-white flex-none" src={`${img_perfil === '' ? '/images/user-default.png' : img_perfil}`} alt="user_img" />
            </div>
            <div className="w-full h-full">
              <button onClick={openPostModal} type="button" className="focus:outline-none cursor-text px-5 border hover:bg-slate-100 text-left text-gray-500 text-sm border-slate-300 w-full rounded-full py-2">
                ¿Qué hay de nuevo?
              </button>
            </div>
          </div>
          {
            posts.length === 0 ? (<></>) : (
              posts.map((post, index) => (
                <PostCard key={post.id} urls={post.attachment_urls} image_perfil={post.client ? post.client.image_url : post.restaurant.image_url} title={post.title} author={post.client ? post.client.full_name : post.restaurant.nombre_comercial} number={index+1} content={post.content}/>
              ))
            )
          }
        </div>
      </Container>
      <ModalNewPost postIsOpen={postIsOpen} closePostModal={closePostModal}/>
      {
        status_payment && <ToastPublishedPost/>
      }
      {
        statusCreatePost && <ToastPost/>
      }
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
