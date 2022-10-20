const buttonEl = document.getElementById("btn");
buttonEl.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
        if(response.status >= 200 && response.status <= 299) {
            return response.json();
        } else {
            throw new error(`Encountered something unexpected: ${response.status} ${response.statusText}`);
        }
    })
    .then((data) => {
        const image = `<img src="${data.message}"/>`;
        document.getElementById("imglist").innerHTML="<li>"+image+"</li>"
    })
})
.catch((error) => {
    console.log(error);
});