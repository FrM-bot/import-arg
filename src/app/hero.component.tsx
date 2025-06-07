import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern"
import BoxReveal from "@/components/magicui/box-reveal"
import { FadeText } from "@/components/magicui/fade-text"
import { cn } from "@/lib/utils"
import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer"

type HeroSectionProps = {
    title: string;
    description: BlocksContent;
    image: string;
}

export default function HeroSection({ title, description, image }: HeroSectionProps) {
  return (
    <section
    style={{
      backgroundImage: `url(${image})`
    }}
      className="bg-position-[43%_30%] bg-cover sm:h-[100dvh] h-[100dvh]"
    >
      <div className="w-full h-full bg-radial-[at_50%_50%] from-transparent via-neutral-800/30 to-neutral-900 to-90%">
        <div className="flex h-[100dvh] items-end justify-start overflow-hidden w-full md:shadow-xl">
          <div className="ms:pb-20 pb-40 container">
            <BoxReveal boxColor="#ffffff75" duration={0.5}>
              <p className="lg:text-7xl md:text-5xl text-3xl font-semibold text-neutral-50 pb-3 max-w-4xl z-10">
              {title}
              </p>
            </BoxReveal>
            <FadeText
              className="max-w-[60ch] text-neutral-100 md:text-xl z-10 mt-2 text-lg [&>p>strong]:font-bold"
              direction="up"
              framerProps={{
                show: { transition: { delay: 1.5 } },
              }}
            >
            <BlocksRenderer content={description} />
            </FadeText>
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
      </div>
    </section>
  );
}
