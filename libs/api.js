export const getAnimeResponse = async (source, query) => {
    try {
      const getApi = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${source}?${query}`);
      const JsonApi = await getApi.json();
      return JsonApi.data
    } catch (error) {
      return {
        mal_id: 1,
        title: "no internet",
        images: {
          webp: {
            image_url: "",
          },
        }
      }
    }
};
