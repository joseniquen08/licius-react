import { BookmarkIcon, ChatIcon, HeartIcon, ShareIcon } from '@heroicons/react/outline'
import React from 'react'

export const PostCard = ({ title, author, content, number }) => {
  return (
    <div className="w-full border rounded-xl py-2 lg:py-5 px-6 lg:px-8">
      <div className="flex flex-row items-center space-x-3 py-1 px-1">
        <div className="h-12 w-12 rounded-full grow-0 flex-none overflow-hidden ">
          <img src="/images/logo-rest.png" alt="image_random" className="object-cover object-center" />
        </div>
        <div>
          <p className="text-base text-gray-700 font-semibold">{author}</p>
          <p className="text-xs font-medium text-gray-600">{author}</p>
        </div>
      </div>
      <div className='my-3'>
        <p className="text-base font-semibold text-gray-800">{title}</p>
        <p className="text-sm text-gray-800">{content}</p>
      </div>
      <div className="rounded-xl overflow-hidden my-1">
        <img src={`https://picsum.photos/500/300?random=${number}`} alt="image_random_2" className="object-cover w-full object-center" />
      </div>
      <div className="flex flex-row justify-between px-1 py-2">
        <div className="flex flex-row space-x-4">
          <button type="button" className="">
            <HeartIcon className="h-6 w-6 text-gray-800" />
          </button>
          <button type="button" className="">
            <ChatIcon className="w-6 h-6 text-gray-800" />
          </button>
          <button type="button" className="">
            <ShareIcon className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        <div>
          <button type="button" className="">
            <BookmarkIcon className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
      <div className="py-5 flex flex-row space-x-3">
        <div className="h-14 w-14 rounded-full grow-0 flex-none overflow-hidden ">
          <img src="https://i.pravatar.cc/300?img=12" alt="image_random" className="object-cover object-center" />
        </div>
        <textarea
          type="text"
          name="comment"
          placeholder="Agregar un comentario"
          className="placeholder:text-sm text-sm block w-full focus:ring-2 focus:ring-gray-200 focus:outline-none px-4 py-2 border border-slate-300 rounded-lg resize-none"
        />
      </div>
    </div>
  )
}
