import type {MetaFunction} from "@remix-run/node";
import HeroTypeOne from "~/components/hero/hero-type-one";
import Swiper from "~/components/swiper/Swiper";

export const meta: MetaFunction = () => {
    return [
        {title: "Academia Integral"},
        {
            name: "description",
            content: "La Academia Integral es la academia líder de la región Áncash, con 28 años de calidad educativa."
        },
    ];
};

export default function Index() {
    return (
        <div style={{minHeight: '100vh', marginTop: '4.5rem'}}>
            <HeroTypeOne heroElement={
                {
                    title: '# ¡Logremos *juntos* tu ingreso!',
                    images: [
                        'https://i.postimg.cc/3JgY3TQh/hero-1.png',
                        'https://i.postimg.cc/Hx7F3wpm/hero-2.png'
                    ]
                }
            }/>
            <Swiper/>
        </div>
    );
}
