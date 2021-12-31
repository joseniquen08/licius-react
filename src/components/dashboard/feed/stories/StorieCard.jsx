export const StorieCard = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="h-24 w-24 rounded-full grow-0 flex-none outline outline-brand-blue-500 outline-2 outline-offset-2 overflow-hidden cursor-pointer">
        <img src={image} alt="image_random" className="object-cover object-center" />
      </div>
      <p className="text-sm">{name.first}</p>
    </div>
  )
}
