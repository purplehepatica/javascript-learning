/** Pomoc w zakresie try...catch oraz Throw new, throw error zaczerpnięta z ChataGPT **/

  export async function getRandomActivityIdea(commentId) {

    try {
        const fetchedData = await fetch(`https://jsonplaceholder.typicode.com/comments/}`);

        if (!fetchedData.ok) {
            throw new Error(`Błąd sieci: ${fetchedData.status}, ${fetchedData.statusText}`);
        }

        const comment =  await fetchedData.json();
        return comment[commentId - 1].id;

    } catch (error) {
        console.error(`Wystąpił błąd podczas pobierania danych: ${error}`);
        throw error;
    }
}