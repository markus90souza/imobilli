import Image from 'next/image'
export const LayoutLeft = () => {
  return (
    <div className="relative aspect-video size-full">
    <Image
      src="/images/auth-layout.webp"
      alt="A skateboarder dropping into a bowl"
      fill
      className="absolute inset-0 object-cover"
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background to-black/80 lg:to-black/40" />
  
  </div>
  )
}
