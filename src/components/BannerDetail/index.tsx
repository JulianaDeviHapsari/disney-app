import styles from './index.module.css';
import clsx from 'clsx';

interface GenreItems {
    id: number;
    name: string;
}

interface Props {
    title: string;
    overview: string;
    releaseDate: string;
    genres: GenreItems[];
    language:string;
}

const BannerDetail = (props: Props) => {
    const { title, overview, releaseDate, genres = [], language } = props;

    return (
            <div className ={styles.container}>
                <div className={styles.details}>
                    <h1 className={styles.title}>{title}</h1>
                    <div className={clsx(styles.section, styles.section1)}>
                    <span>{releaseDate}</span>
                    <i>&#x2022;</i>
                    <span>{language}</span>
                    </div>
                    <div className={clsx(styles.section, styles.section2)}>
                    <p>{overview}</p>
                    </div>
                    <div className={clsx(styles.section, styles.section3)}>
                        {genres.map(({ id, name }, index)=> (
                            <>
                            {index > 0 && <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>}
                            <b key={id}>{name}</b>
                            </>
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default BannerDetail