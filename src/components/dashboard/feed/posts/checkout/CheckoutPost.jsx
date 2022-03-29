import { useEffect } from "react";
import { useSelector } from "react-redux";
import { contentP } from "../../../../../redux/slices/post/checkout/checkoutSlice";

export const CheckoutPost = () => {

  const contentPost = useSelector(contentP) ?? "";

  useEffect(() => {
  }, [contentPost]);

  return (
    <div className="py-8 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-center">
          <p className="font-semibold text-3xl text-stone-700">Resumen de la promoción</p>
        </div>
        <div>
          <div className="space-y-3 w-1/2">
            <p className="font-medium text-xl">Publicación</p>
            <div className="border border-gray-300 rounded-lg px-5 py-3">
              <p>{contentPost}</p>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </div>
  )
}
