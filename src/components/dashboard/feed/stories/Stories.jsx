import { PlusSmIcon } from "@heroicons/react/outline"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from 'swiper';
import './styles.css';
import { StorieCard } from './StorieCard';
import { useEffect, useState } from "react";

SwiperCore.use([Navigation]);

export const Stories = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
    .then(response => response.json())
    .then(data => setUsers(data.results));
  }, []);


  return (
    <div className="border rounded-xl my-6">
      <Swiper
        style={{
          '--swiper-navigation-size': '14px',
          '--swiper-navigation-color': '#318b94',
          'paddingLeft': '3rem',
          'paddingRight': '3rem',
          'paddingTop': '1.8rem',
          'paddingBottom': '1.8rem'
        }}
        slidesPerView={7}
        spaceBetween={25}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative flex flex-col items-center space-y-3">
            <div className="h-24 w-24 rounded-full grow-0 flex-none outline outline-gray-300 outline-2 outline-offset-2 overflow-hidden cursor-pointer">
              <img src="https://i.pravatar.cc/300?img=12" alt="image_random" className="object-cover" />
            </div>
            <p className="text-sm">Tu historia</p>
            <div className="cursor-pointer absolute right-0 bottom-8 bg-brand-blue-700 rounded-full h-6 w-6 flex items-center justify-center">
              <PlusSmIcon className="text-white h-5 w-5"/>
            </div>
          </div>
        </SwiperSlide>
        {
          users.length === 0 ? (<></>) : (
            users.map((user, key) => (
              <SwiperSlide key={key}>
                <StorieCard key={key} image={user.picture.large} name={user.name} />
              </SwiperSlide>
            ))
          )
        }
      </Swiper>
    </div>
  )
}
