const searchForm = document.getElementById("search-form");
const searchBtn = document.getElementById("search-btn")
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("show-more-btn");
const accessKey = "rG_UOWB1OUq3EuC_a_BDkaxsDg68DJwmK2diPSGhttI";

let keywoard = "";
let page = 1;

async function searchImages(){

    keywoard = searchBox.value; 
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keywoard}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url)
    const data = await response.json()

    if (page === 1){
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMore.style.display = "block"
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

showMore.addEventListener("click", () =>{
    page++;
    searchImages();
})