import {openSans } from "@/app/fonts"

export default function Footer(){
    return(
        <>
        <footer className={`h-80 bg-zinc-950 mt-[70px] ${openSans.className}`}>
        <div className="flex items-center justify-center flex-row">

            <div className="text-gray-200 flex justify-center flex-col">
                <a className="text-base">Ajuda</a>
                <div className="flex  justify-center flex-col text-sm gap-1">
                    <a>Produtos</a>
                    <a>Pagamentos</a>
                    <a>Carrinho</a>
                    <a>Entregas</a>
                    <a>Fale conosco</a>
                    <a>Pedidos</a>
                    <a>Trocas e Devoluções</a>
                </div>
            </div>
            <div className="text-gray-200 flex items-center justify-center flex-col gap-5">
                 <p>Redes sociais</p>
                 <div className="flex items-center justify-between flex-row gap-2">
                 <img width="30" height="30" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/afafaf/external-instagram-a-popular-social-networking-service-with-magic-filters-logo-bold-tal-revivo.png" alt="external-instagram-a-popular-social-networking-service-with-magic-filters-logo-bold-tal-revivo"/>
                 <img width="30" height="30" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/afafaf/external-whatsapp-messenger-cross-platform-mobile-devices-messaging-application-logo-bold-tal-revivo.png" alt="external-whatsapp-messenger-cross-platform-mobile-devices-messaging-application-logo-bold-tal-revivo"/>
                 </div>
            </div>
            <div>
                <p>Forma de Pagamentos</p>
            </div>
        </div>
        {/* <div>linha</div> */}
        <div>
            <div>
                <p>Brasil</p>
                <a>Politica de Privacidade</a>
                <a>Termos de uso</a>
            </div>
        </div>
        </footer>
        </>
    )
}