import {openSans } from "@/app/fonts"

export default function Footer(){
    return(
        <>
        <footer className={`h-80 bg-zinc-950 mt-[70px] pt-8 ${openSans.className}`}>
        <div className="flex items-center justify-center flex-row">
            <div className=" text-gray-200 flex  justify-center flex-col text-sm gap-1">
                    <a className="text-base mb-2">Ajuda</a>
                    <a>Produtos</a>
                    <a>Pagamentos</a>
                    <a>Carrinho</a>
                    <a>Entregas</a>
                    <a>Fale conosco</a>
                    <a>Pedidos</a>
                    <a>Trocas e Devoluções</a>
            </div>
            <div className="text-gray-200 flex items-center justify-center flex-col gap-4">
                 <p>Redes sociais</p>
                 <div className="flex items-center justify-between flex-row gap-2">
                 <img width="25" height="25" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/afafaf/external-instagram-a-popular-social-networking-service-with-magic-filters-logo-bold-tal-revivo.png" alt="external-instagram-a-popular-social-networking-service-with-magic-filters-logo-bold-tal-revivo"/>
                 <img width="25" height="25" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/afafaf/external-whatsapp-messenger-cross-platform-mobile-devices-messaging-application-logo-bold-tal-revivo.png" alt="external-whatsapp-messenger-cross-platform-mobile-devices-messaging-application-logo-bold-tal-revivo"/>
                 </div>
            </div>
            <div className="text-gray-200">
                <p>Forma de Pagamentos</p>
            </div>
        </div>
        <div className="w-full flex items-center justify-center mt-6">
        <div className="w-[95%] bg-zinc-800 h-[2px]"></div>
        </div>
        <div>
            <div className="text-gray-200 flex items-center justify-start flex-row gap-10 text-sm ml-[34px] mt-6">
                <p>Brasil</p>
                <a>Politica de Privacidade</a>
                <a>Termos de uso</a>
            </div>
        </div>
        </footer>
        </>
    )
}