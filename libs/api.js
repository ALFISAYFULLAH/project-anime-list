export const getAnimeResponse = async (source, query) => {
    try {
      const getApi = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${source}?${query}`);
      const JsonApi = await getApi.json();
      return JsonApi.data
    } catch (error) {
      return
    }
};
