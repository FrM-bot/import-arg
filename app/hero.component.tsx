
export default function HeroSection() {
  return (
    <section
      style={{
        backgroundImage: "url(/hero.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-[100dvh] bg-radial-[at_50%_75%] from-transparent via-neutral-800/40 to-neutral-900 to-90%" />
      {/* <div className="flex h-[100dvh] w-full container items-center justify-center overflow-hidden w-full md:shadow-xl">
            <div className="pt-70">
              <BoxReveal boxColor="#ffffff75" duration={0.5}>
                <p className="md:text-7xl text-5xl font-semibold text-neutral-50">
                  Descubre nuestra colección de productos<span>.</span>
                </p>
              </BoxReveal>
              <FadeText
                className="max-w-[600px] text-neutral-100 md:text-xl z-10 mt-2"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 1.5 } },
                }}
                text="Mejora tu estilo con nuestros productos premium. Diseñados para brindar comodidad y fabricados para durar."
              />
            </div>
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.2}
              duration={1}
              repeatDelay={1}
              className={cn(
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[160%] z-[0]"
              )}
            />
          </div>
        </div> */}
    </section>
  );
}
