
/**
 * An api gateway call
 * @param endpoint
 * @param path
 * @param method
 * @param headers
 * @param queryParams
 * @param body
 * @returns {Promise<any>}
 */
export async function invokeApi({
                                     endpoint = process.env.REACT_APP_API_GATEWAY,
                                     path,
                                     method = "GET",
                                     headers = {},
                                     queryParams = {},
                                     body
                                 }) {
    let url = endpoint + path;
    body = body ? JSON.stringify(body) : body;
    const results = await fetch(url, {
        method,
        headers,
        body
    });

    if (results.status !== 200) {
        throw new Error(await results.text());
    }

    return results.json();
}
