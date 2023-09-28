import styles from './swiper.module.css';

import CardTable from "~/components/card/card-table";

const Swiper = () => {
    return (
        <section className={styles.section}>
            <h2>Nuestros ciclos</h2>
            <div className={`container ${styles.swiper}`}>
                <CardTable cardTableElement={{
                    title: 'Ciclo 5to Pre',
                    image: 'https://res.cloudinary.com/drirvybel/image/upload/v1695443855/large_363948408_863003215352534_4003094844118016346_n_dbfa8945cd.jpg',
                    pairs: [
                        {
                            label: 'Inicia:',
                            value: new Date('9/28/2023').toLocaleDateString('es-ES', {weekday:'short', day:'numeric', month: 'long', year:'numeric'}),
                        },
                        {
                            label: 'Finaliza:',
                            value: new Date('10/28/2023').toLocaleDateString('es-ES', {weekday:'short', day:'numeric', month: 'long', year:'numeric'}),
                        }
                    ]
                }}/>
                <CardTable cardTableElement={{
                    title: 'Ciclo 5to Pre',
                    image: 'https://res.cloudinary.com/drirvybel/image/upload/v1695443855/large_363948408_863003215352534_4003094844118016346_n_dbfa8945cd.jpg',
                    pairs: [
                        {
                            label: 'Inicia:',
                            value: new Date('9/28/2023').toLocaleDateString('es-ES', {weekday:'short', day:'numeric', month: 'long', year:'numeric'}),
                        },
                        {
                            label: 'Finaliza:',
                            value: new Date('10/28/2023').toLocaleDateString('es-ES', {weekday:'short', day:'numeric', month: 'long', year:'numeric'}),
                        }
                    ]
                }}/>
                <CardTable cardTableElement={{
                    title: 'Ciclo 5to Pre',
                    image: 'https://res.cloudinary.com/drirvybel/image/upload/v1695443855/large_363948408_863003215352534_4003094844118016346_n_dbfa8945cd.jpg',
                    pairs: [
                        {
                            label: 'Inicia:',
                            value: new Date('9/28/2023').toLocaleDateString('es-ES', {weekday:'short', day:'numeric', month: 'long', year:'numeric'}),
                        },
                        {
                            label: 'Finaliza:',
                            value: new Date('10/28/2023').toLocaleDateString('es-ES', {weekday:'short', day:'numeric', month: 'long', year:'numeric'}),
                        }
                    ]
                }}/>
                <CardTable cardTableElement={{
                    title: 'Ciclo 5to Pre',
                    image: 'https://res.cloudinary.com/drirvybel/image/upload/v1695443855/large_363948408_863003215352534_4003094844118016346_n_dbfa8945cd.jpg',
                    pairs: [
                        {
                            label: 'Inicia:',
                            value: new Date('9/28/2023').toLocaleDateString('es-ES', {weekday:'short', day:'numeric', month: 'long', year:'numeric'}),
                        },
                        {
                            label: 'Finaliza:',
                            value: new Date('10/28/2023').toLocaleDateString('es-ES', {weekday:'short', day:'numeric', month: 'long', year:'numeric'}),
                        }
                    ]
                }}/>
            </div>
        </section>
    );
}
export default Swiper;