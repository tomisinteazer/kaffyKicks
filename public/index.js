let imgList = '.DS_Store,0.jpeg,1.jpeg,10.jpeg,11.jpeg,12.jpeg,13.jpeg,14.jpeg,15.jpeg,16.jpeg,17.jpeg,18.jpeg,19.jpeg,2.jpeg,20.jpeg,21.jpeg,22.jpeg,23.jpeg,24.jpeg,25.jpeg,26.jpeg,27.jpeg,3.jpeg,4.jpeg,5.jpeg,6.jpeg,7.jpeg,8.jpeg,9.jpeg';
let res = imgList.split(",");
res.shift();
for (r of res) {
    re = "images/" + r.toString();
    var pics = document.createElement("img");
    pics.setAttribute("src", re)
    pics.setAttribute("alt", re)
    document.body.appendChild(pics);
}