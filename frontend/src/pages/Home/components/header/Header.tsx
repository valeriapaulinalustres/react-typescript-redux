import styles from "./Header.module.css";

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
            <p>Reportes</p>
            <input
                type="number"
                placeholder="ID Caso, ID Cliente o Tel"
                value={numberToFilterClient !== null ? numberToFilterClient.toString() : ""}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Header;
