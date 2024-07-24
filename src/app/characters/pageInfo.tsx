async function getPageInfo(){
    const res = await fetch('https://rickandmortyapi.com/api/character', {
        next: {
            revalidate: 86400
        }
    })

    const data = await res.json();
    const results = data.info;
    return results
}

export default async function PageInfo({
    searchParams,
    }: {
        searchParams: { [key: string]: string | string[] | undefined }
    }) {
        const page = searchParams['page'] ?? '1';
        const pagesInfo = await getPageInfo()
        
        return(
            <>
            <p>Page {1} of {pagesInfo.pages}</p>
            
            </>
        )
}