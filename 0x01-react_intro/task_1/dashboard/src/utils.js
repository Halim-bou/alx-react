const getFullYear = () => {
    let current_year = new Date().getFullYear();
    return current_year;
}

const getFooterCopy = (isIndex) => {
    return (isIndex) ? "Holberton School":"Holberton School main dashboard";
}

module.exports = {
    getFooterCopy,
    getFullYear,
};