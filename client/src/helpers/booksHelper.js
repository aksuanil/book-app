const shortenDescription = (description) => {
    if (description && description.length > 200) {
        return description.substring(0, 200) + '...';
    }
    return description;
}

export { shortenDescription };