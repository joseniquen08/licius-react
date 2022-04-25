import { BookmarkIcon, ChatIcon, HeartIcon, ShareIcon } from '@heroicons/react/outline'
import React from 'react'

export const PostCard = ({ urls, title, image_perfil, author, content, number }) => {
  return (
    <div className="w-full border rounded-xl py-2 lg:py-5 px-6 lg:px-8">
      <div className="flex flex-row items-center space-x-3 py-1 px-1">
        <div className="h-12 w-12 rounded-full grow-0 flex-none overflow-hidden ">
          <img src={image_perfil === '' ? '/images/user-default.png' : image_perfil} alt="image_random" className="h-12 w-12 object-cover object-center" />
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
      {
        urls.length > 0 && (
          <div
            className={
              `rounded-xl overflow-hidden my-1 grid grid-flow-col h-[300px]
              ${
                urls.length === 1 ? ` grid-cols-1 grid-rows-1` : urls.length === 2 ? `grid-cols-2 grid-rows-1` : `grid-cols-2 grid-rows-2`
              }`
            }
          >
            {
              urls.map((url, index) => (
                <img key={index + url} src={url} alt={`imagen ${index}`} className={`${index === 2 ? 'row-span-2 col-span-2' : index === 0 ? 'row-span-3' : 'col-span-2'} h-full object-cover w-full object-center`} />
              ))
            }
          </div>
        )
      }
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
        <div className="h-12 w-12 rounded-full grow-0 flex-none overflow-hidden ">
          <img src={image_perfil === '' ? '/images/user-default.png' : image_perfil} alt="image_random" className="h-12 w-12 object-cover object-center" />
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
