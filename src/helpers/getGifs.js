export const getGifs = async(categories) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      categories
    )}&limit=20&api_key=1QMqOCPJAczHl0L3k0AGIfwaOuqh4UX9`;
    const resp = await fetch(url);
    const {
        data
    } = await resp.json();
    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        };
    });

    return gifs;
};