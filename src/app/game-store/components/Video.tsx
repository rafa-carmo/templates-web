interface VideoProps {
  video: string
}

export function Video({ video }: VideoProps) {
  return (
    <video
      autoPlay
      muted
      loop
      className="absolute top-0 bottom-0 left-0 right-0 -z-20 object-cover w-full h-full"
    >
      <source src={video} type="video/mp4" />
    </video>
  )
}
