//css du pied de page
document.getElementById("footer").style.background = "#2298fd";
document.getElementById("footer").style.width = "100%";
document.getElementById("footer").style.height = "100px";
//css des deux section
document.getElementById("section").style.height = "150px";
document.getElementById("section").style.width = "100%";
document.getElementById("section").style.background = "#2bb399";
document.getElementById("section").style.border = "#000"

document.getElementById("section1").style.height = "550px";
document.getElementById("section1").style.width = "100%";
document.getElementById("section1").style.background = "#2aa399";
document.getElementById("section1").style.border = "#000 solid"
    //css de aside et article (le corp)
document.getElementById("aside").style.height = "100%";
document.getElementById("aside").style.width = "25%";
document.getElementById("aside").style.background = "#2aa4a9";
document.getElementById("aside").style.cssFloat = "left"

document.getElementById("article").style.height = "100%";
document.getElementById("article").style.width = "75%";
document.getElementById("article").style.background = "#2aa3b9";
document.getElementById("article").style.cssFloat = "right"
    //css de l'en-tete
document.getElementById("nav").style.height = "30%";
document.getElementById("nav").style.width = "100%";
document.getElementById("nav").style.background = "#2aa5a9";
document.getElementById("nav").style.cssFloat = "low";
document.getElementById("nav").style.textAlign = "center";

document.getElementById("header").style.height = "70%";
document.getElementById("header").style.width = "100%";
document.getElementById("header").style.background = "#3aa4b9";
document.getElementById("header").style.cssFloat = "top"

//css d
document.getElementById("choix").style.display = "none";
//document.getElementById("tes").style.cssFloat = "right";
//document.getElementsByName("coordon").style.cssFloat = "right"
//document.getElementsById("form1").style.display = "hidden";
//document.getElementById("tes").style.visibility = 'hidden'

/*function test() {
    var di = document.querySelector("#1");
    alert(document.getElementById("footer") + di);
}*/
//il permet de reccupere les vales du formulaire et de les reaffiche 
function affiche() {
    var lien = document.createElement("a");
    var lientext = document.createTextNode("si vos informations sont bonne clique ici");
    lien.appendChild(lientext);
    lien.href = "#";
    var para = document.createElement("p");
    var paratext = document.createTextNode("voici les informations que vous avez donnée ");
    para.appendChild(paratext);
    var nomp = document.coordon.nom.value;
    var prenom = document.coordon.pnom.value;
    var dates = document.coordon.date.value;
    var date = dates.toString();
    var pass = document.coordon.passwod.value;
    var list1 = [nomp, prenom, date, pass];
    var list = ["nom", "prenom", "date_de_naissance", "password"];
    var tableau = document.createElement('table'),
        tr, td;
    for (var i = 0; i < list.length; i++) {
        td = document.createElement("td");
        var td1 = document.createElement("td");
        var tdtext = document.createTextNode(list[i]);
        var tdtext1 = document.createTextNode(list1[i]);
        td.appendChild(tdtext);
        td1.appendChild(tdtext1);
        tr = document.createElement("tr");
        tr.appendChild(td);
        tr.appendChild(td1);
        tableau.appendChild(tr);
    }
    var div = document.createElement("div");
    div.appendChild(para);
    div.appendChild(tableau)
    document.getElementById("result").appendChild(div);
    div.appendChild(lien);
    document.getElementById("coordon").style.display = "none"
    document.getElementById("imag1").style.height = "300px";
    document.getElementById("imag1").style.width = "400px"

}


function donnecoord() {

    //var form = document.getElementById("coordon");
    var image = document.getElementById("choix");
    document.getElementById("1").style.display = "none";
    //form.style.display = "block";
    image.style.display = "block";

}

document.getElementById("coordon").style.display = "none";

function creercompte() {

    var a = document.getElementById("coordon");
    var b = document.getElementById("form1");
    if (document.form.choix.value == "1") {
        if (b.style.display == "none") {
            b.style.display = "block";
            a.style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";
        }
    } else {
        b.style.display = "none";
    }

    if (document.form.choix.value == "2") {
        if (a.style.display == "none") {
            a.style.display = "block";
            b.style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";
        }
    } else {
        a.style.display = "none";
    }
}

function suivant() {

    var im = document.getElementsByTagName("img");
    for (var i = 0; i < im.length; i++) {
        document.getElementsById("1").style.display = "none"
        im[i].style.display = "block"
        alert("bonjour")
    }
}
//css du pied de page