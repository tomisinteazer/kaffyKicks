let fs = require("fs");
let files = fs.readdirSync("./public/images");
let inter = []
for (file of files) {
    inter.push(file);

}
fs.writeFileSync("./public/index.js", `let imgList = '${(inter)}';
let res = imgList.split(",");
res.shift();
for (r of res) {
    re = "images/" + r.toString();
    var pics = document.createElement("img");
    pics.setAttribute("src" , re)
    pics.setAttribute("alt" , re)
    document.body.appendChild(pics);
}
`);
module.exports.inter = inter;
console.log("initial commit");