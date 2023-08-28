interface FoodCardProps {
  price?: string
  name: string
  description: string
  image: string
  reverse?: boolean
}

export default function FoodCard({
  price,
  name,
  description,
  image,
  reverse,
}: FoodCardProps) {
  return (
    <section
      className={`container mx-auto flex ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } flex-col items-center justify-center gap-5 py-32 md:px-0 px-5`}
    >
      <div className=" w-full max-w-lg flex flex-col items-end justify-end ">
        <div className="max-w-lg text-white flex flex-col gap-5 pb-3">
          <h3 className="text-4xl  font-bold">{price}</h3>
          <h3 className="font-bold text-xl ">{name}</h3>
          <p className="font-light">{description}</p>
        </div>
      </div>
      <div className="w-96 h-96 overflow-hidden rounded-3xl flex items-center justify-center">
        <img src={image} alt="" className="object-cover" />
      </div>
    </section>
  )
}
