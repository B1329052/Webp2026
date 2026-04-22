var imglist_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=4&format=json&nojsoncallback=1';

function getimg() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", imglist_Url, true);
    xhr.send();

    xhr.onload = function () {
        var data = JSON.parse(this.responseText);
        add_new_img(data.photos.photo);
    };
}

function add_new_img(dataset) {
    var gal = document.getElementById("gallery");

    gal.innerHTML = "";

    dataset.forEach(function (item) {
        console.log(item);

        var imgUrl = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_z.jpg`;
        var img = document.createElement("img");
        img.setAttribute("src", imgUrl);
        gal.appendChild(img);
    });
}