import Image from 'next/image'

interface MenuCardProps {
  img: string
  text: string
}

export default function MenuCard({ img, text }: MenuCardProps) {
  return (
    <div className="w-full md:w-[47%] flex flex-col items-center justify-center gap-5 md:px-0 px-5">
      <div className="w-full h-96 overflow-hidden flex items-center justify-center rounded-3xl">
        <Image src={img} alt="" width={720} height={720} />
      </div>
      <p className="text-white uppercase">{text}</p>
      <button className="px-7 py-4 bg-yellow-400 rounded-full font-bold text-lg">
        Show Menu
      </button>
    </div>
  )
}
