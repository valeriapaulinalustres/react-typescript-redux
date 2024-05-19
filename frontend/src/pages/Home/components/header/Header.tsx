import styles from "./Header.module.css";
import { IoIosSearch } from "react-icons/io";

type Props = {
    setNumberToFilterClient: React.Dispatch<React.SetStateAction<number | null>>;
    numberToFilterClient: number | null;
};

const Header = ({ setNumberToFilterClient, numberToFilterClient }: Props): JSX.Element => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numberValue = value !== "" ? parseInt(value, 10) : null; 
        setNumberToFilterClient(numberValue);
    };

    return (
        <div className={styles.container}>
            <h1>REPORTES</h1>
            <div className={styles.inputContainer}>
            <input
                type="number"
                placeholder="ID Caso, ID Cliente o Tel"
                value={numberToFilterClient !== null ? numberToFilterClient.toString() : ""}
                onChange={handleInputChange}
                className={styles.input}
            />
            <IoIosSearch className={styles.icon}/>
            </div>
        </div>
    );
};

export default Header;
