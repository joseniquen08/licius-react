import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useMercadopago } from "react-sdk-mercadopago/lib";
import { contentP, finalD, finalT, preferenceId, totalD, totalP } from "../../../../../redux/slices/post/checkout/checkoutSlice";

export const CheckoutPost = () => {

  const mercadopago = useMercadopago.v2('TEST-9b99dee9-2b94-4069-80aa-3f4ad1c31e28', { locale: 'es-PE' });

  const contentPost = useSelector(contentP) ?? "";
  const totalDays = useSelector(totalD) ?? 0;
  const finalDate = useSelector(finalD) ?? "";
  const finalTime = useSelector(finalT) ?? "";
  const totalPrice = useSelector(totalP) ?? 0;
  const preference_id = useSelector(preferenceId) ?? false;

  useEffect(() => {
    if (mercadopago && preference_id) {
      mercadopago.checkout({
        preference: {
          id: preference_id,
        },
        render: {
          container: '.cho-container',
          label: 'Pagar',
        },
        theme: {
          elementsColor: '#1E6C5B',
          headerColor: '#1E6C5B',
        }
      })
    }
  }, [contentPost, totalDays, finalDate, finalTime, totalPrice, mercadopago, preference_id]);

  return (
    <div className="py-8 px-4 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-center">
          <p className="font-semibold text-3xl text-stone-700">Resumen de la promoción</p>
        </div>
        <div className="w-full flex">
          <div className="space-y-6 w-1/2 px-8">
            <div className="space-y-3">
              <p className="font-semibold text-xl">Publicación</p>
              <div className="border border-gray-300 rounded-lg px-5 py-3">
                <p>{contentPost}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-xl">Duración de la promoción</p>
              <p>{totalDays} {totalDays > 1 ? 'días' : 'día'}, hasta el {finalDate} {finalTime}</p>
            </div>
          </div>
          <div className="space-y-6 w-1/2 px-8">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xl">Monto total</p>
              <p>S/. {totalPrice}.00</p>
            </div>
            <div className="cho-container"/>
          </div>
        </div>
      </div>
    </div>
  )
}
