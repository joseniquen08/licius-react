import { TrendCard } from "./TrendCard"

export const TrendsContainer = () => {
  return (
    <div className="space-y-3">
      <p className="text-xl text-stone-800 font-bold">Tendencias</p>
      <div className="space-y-1 border rounded-lg px-4 py-4">
        <TrendCard title='Dieta'/>
        <TrendCard title='Rockys'/>
        <TrendCard title='Batidos'/>
        <TrendCard title='Ensalada'/>
        <TrendCard title='Comida orgánica'/>
      </div>
    </div>
  )
}
