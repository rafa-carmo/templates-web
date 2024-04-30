interface PictureCardProps {
  hiddenText?: boolean
  cards: {
    img: string
    text?: string
  }[]
}

export default function PictureCard({ hiddenText, cards }: PictureCardProps) {
  return (
    <section className="container mx-auto grid md:grid-cols-3 grid-cols-1 place-items-center mt-10 w-full md:max-w-4xl md:gap-0 gap-10">
      {cards.map((card, key) => (
        <div className="group w-full max-w-[18rem]" key={`card-${card.text}-${key}`}>
          <div className="relative h-72 w-full flex items-center justify-center rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-300">
            <div
              className={`absolute top-0 left-0 right-0 bottom-0 -z-10 object-cover bg-center bg-cover opacity-60 group-hover:opacity-90 duration-300 transition-opacity`}
              style={{
                backgroundImage: `url('${card.img}')`,
              }}
            ></div>
            {!hiddenText && (
              <p className="relative z-10 text-white font-bold text-2xl cursor-default">
                {card.text}
              </p>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}
