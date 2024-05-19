import Filter from "../../../../components/Filter";
import styles from "./Header.module.css"

const Header = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <p>Reportes</p>
            <Filter />
        </div>
    );
}

export default Header;
