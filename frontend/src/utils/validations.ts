export const isValidEmail = (emailInput: string): boolean => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(emailInput);
}

export const isAtLeastSixCharacters = (input: string): boolean => {
    const regex = /.{6,}/;
    return regex.test(input);
}
