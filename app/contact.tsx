'use client'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { WhatsAppUrl } from "@/lib/utils"
import type { FormEvent } from "react"

export const ContactUsSection = () => {
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData) as {
            message: string
        }
        window.open(WhatsAppUrl({ text: data.message }), '_blank')
    }
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted text-neutral-800" id="contact">
            <div className="container m-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contáctenos</h2>
                        <p className="max-w-2xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Contáctenos por algún producto que tengas en mente o por cualquier otro tema que te interese.
                        </p>
                    </div>
                    <div className="w-full max-w-2xl space-y-2">
                        <form onSubmit={onSubmit} className="flex flex-col gap-2">
                            {/* <div className="flex gap-2">
                                <Input name="title" className="w-full flex-1" placeholder="Asunto" type="text" />
                            </div> */}
                            <Textarea name="message" className="max-h-48" placeholder="Tu mensaje" />
                            <Button type="submit">Enviar</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}