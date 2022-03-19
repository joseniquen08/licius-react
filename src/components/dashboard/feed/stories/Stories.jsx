import { PlusSmIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StorieCard } from './StorieCard';
import './styles.css';

SwiperCore.use([Navigation]);

export const Stories = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
    .then(response => response.json())
    .then(data => setUsers(data.results));
  }, []);


  return (
    <div className="max-w-4xl mx-auto py-4">
      <div className="border rounded-xl">
        <Swiper
          style={{
            '--swiper-navigation-size': '14px',
            '--swiper-navigation-color': '#318b94',
            'paddingLeft': '3rem',
            'paddingRight': '3rem',
            'paddingTop': '1.8rem',
            'paddingBottom': '1.8rem'
          }}
          slidesPerView={6}
          spaceBetween={5}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative flex flex-col items-center space-y-3 w-24">
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
    </div>
  )
}
