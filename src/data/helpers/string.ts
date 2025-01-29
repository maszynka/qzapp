export const slashSuffix = (str: string): string => {
    return str.endsWith('/') ? str : str + '/';
};
