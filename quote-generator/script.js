async function getQuote() {
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`
    const apiUrl = `http://api.forismatic.com/api/1.0/?method=getQuote&
    lang=en&format=json`
    let response;
    try {
        //const response = await fetch(proxyUrl + apiUrl);
        response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // const reader = response.body.getReader();
        // new ReadableStream({
        //     start(controller) {
        //         return pump();
        //         function pump() {
        //             // 스트림의 다음 Chunk에 대한 액세스를 제공하는 psomise를 리턴한다.
        //             return reader.read().then(({ done, value }) => {
        //                 // 더이상 읽을 데이터 조각이 없을때 스트림을 닫는다
        //                 if (done) {
        //                     controller.close();
        //                     return;
        //                 }
        //                 // 데이터 조각을 새로운 스트림(새로 만드는 커스텀 스트림)에 넣는다.
        //                 controller.enqueue(value);
        //                 console.log(value)
        //                 return pump();
        //             });
        //         }
        //     }
        // });


        console.log('whoops, no quote', error);
        getQuote();
    }
}

getQuote();