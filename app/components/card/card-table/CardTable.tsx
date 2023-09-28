import styles from './card-table.module.css';
import ReactMarkdown from "react-markdown";

interface CardTableElement {
    image: string,
    title: string,
    pairs?: {
        label: string,
        value: string,
    }[],
    individuals?: string[],
}

interface CardTableProps {
    cardTableElement: CardTableElement,
}

const CardTable = ({cardTableElement}: CardTableProps) => {
    const {image, title, pairs, individuals} = cardTableElement;
    return (
        <article className={styles.article}>
            <div className={styles.image}>
                <img src={image} alt={title}/>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <table className={styles.table}>
                <tbody>
                {pairs?.map((pair, index) => (
                    <tr key={index}>
                        <th>{pair.label}</th>
                        <td>{pair.value}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {individuals?.map((individual, index) => (
                <div key={index}>
                    <ReactMarkdown children={individual}/>
                </div>
            ))}
        </article>
    );
}
export default CardTable;