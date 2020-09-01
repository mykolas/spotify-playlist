const url = "https://api.spotify.com/v1/search"

type ResultList = { items: [] }
type Response = {
    albums: ResultList
    artists: ResultList
    tracks: ResultList
}

export const search = (token: string, query: string): Promise<Response> =>
    fetch(`${url}?type=album,artist,track&q=${query}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => response.json())
