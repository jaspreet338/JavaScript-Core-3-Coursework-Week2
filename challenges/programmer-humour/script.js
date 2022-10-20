let count = 0;

function showImage() {
    fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => {
        if(response.status >= 200 && response.status <= 299) {
            return response.json();
        } else {
             throw new error(
               `Encountered something unexpected: ${response.status} ${response.statusText}`
             );
        }
    })
    .then((jsonResponse) => {
        let imgDisplay = document.getElementById("display");
        if(imgDisplay.firstChild) {
            imgDisplay.removeChild(imgDisplay.firstChild);
        }
        count++;
        console.log(count);

        let funnyImgEl = document.createElement("img");
        funnyImgEl.src = jsonResponse.img;
        document.getElementById("display").appendChild(funnyImgEl);
    })
    .catch((error) => {
        console.log(error);
    });
}
showImage();
document.getElementById("btn").addEventListener("click", showImage);