import { useNavigate } from "react-router-dom";

export const ChooseOption = () => {

  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <p className="text-center text-gray-700 text-xl font-medium">Acceder como</p>
      <div className="flex items-center justify-center text-base space-x-6 text-white">
        <div className="flex flex-col justify-center items-center">
          <img src="images/user_sign.png" alt="user_sign" className="h-72" />
          <button onClick={() => navigate("usuario")} type="button" className="w-40 font-medium bg-brand-green-500 hover:bg-brand-green-700 rounded-full py-2 flex justify-center">Usuario</button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="images/restaurant_sign.png" alt="restaurant_sign" className="h-72" />
          <button onClick={() => navigate("restaurante")} type="button" className="w-40 font-medium bg-brand-green-500 hover:bg-brand-green-700 rounded-full py-2 flex justify-center">Restaurante</button>
        </div>
      </div>
    </div>
  )
}
