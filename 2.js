var tbody = document.getElementsByTagName("tbody");
var tr = tbody[0].getElementsByTagName("tr");
////////////////////////////////////////////////////////
function Author(n, e) {
    this.name = n;
    this.email = e;
}
function mybook(r, o, t) {
    this.bookname = r
    this.price = o;
    this.autorinbook = t
}

var arrbook = [];
console.log(arrbook);
var booknum = document.getElementsByClassName("booknum")[0];
///////// start of error//////////
var ebooknum = document.getElementsByClassName("spann")[0];
var ebookname = document.getElementsByClassName("spann")[1];
var eprice = document.getElementsByClassName("spann")[2];
var eauthor = document.getElementsByClassName("spann")[3];
var eauthoremail = document.getElementsByClassName("spann")[4];
var bookNumAsNumber = 0;
///////// end of error//////////
var click1 = document.getElementsByTagName("button")[0];
var click2 = document.getElementsByTagName("button")[1];
var form1 = document.getElementsByClassName("form1")[0];
var form2 = document.getElementsByClassName("form2")[0];
click1.addEventListener("click", vaall);
var remover = 0;
var ss;
function vaall() {
    if (isNaN(booknum.value) || booknum.value === "") {
        ebooknum.classList.remove("timeerror");
        ebooknum.innerText = "valid! please enter numbers only"
    } else {
        ebooknum.classList.add("timeerror");
        form1.style.visibility = "hidden"
        form2.style.visibility = "visible";
        bookNumAsNumber = Number(booknum.value);
        ss = bookNumAsNumber;
    }

}
var bookname = document.getElementById("bookname");
var price = document.getElementById("price");
var Authorname = document.getElementById("Authorname");
var Authoremail = document.getElementById("Authoremail");

click2.addEventListener("click", formm);
function formm() {
    if (vanme() && vprice() && vaurhoremail() && vaurhorname()) {
        var author = new Author(Authorname.value, Authoremail.value);
        var booook = new mybook(bookname.value, price.value, author);
        arrbook.push(booook);
        bookNumAsNumber--;
        alert("book num " + (bookNumAsNumber + 1) + "sumbutid");

    }
    if (bookNumAsNumber === 0) {
        form2.style.visibility = "hidden"
        var table = document.getElementsByTagName("table")[0];
        table.style.visibility = "visible"

        arrbook.forEach(function (el, ind) {
            tbody[0].innerHTML += "<tr> <td>" + el.bookname + "</td><td>" +
                el.price + "</td><td>" + el.autorinbook.name + "</td><td>" + el.autorinbook.email + "</td>  <td><button>Edit</button></td>  <td> <button  onclick='deletee(" + ind + ")'>Delete</button></td></tr>";
        })

    }

    // bookname.value = ""
    // price.value = ""
    // Authorname.value = ""
    // Authoremail.value = ""


}


function vanme() {
    if (isFinite(bookname.value) || bookname.value === "") {
        ebookname.classList.remove("timeerror");
        ebookname.innerText = "valid! please enter char only"

    } else {
        ebookname.classList.add("timeerror");
        // bookNamee = bookname.value;
        return true;
    }
}



function vprice() {
    if (isNaN(price.value) || price.value === "") {
        eprice.classList.remove("timeerror");
        eprice.innerText = "valid! please enter numbers only"
    } else {
        eprice.classList.add("timeerror");
        return true;
    }
}


function vaurhorname() {
    if (isFinite(Authorname.value) || Authorname.value === "") {
        eauthor.classList.remove("timeerror");
        eauthor.innerText = "valid! please enter char only"
    } else {
        eauthor.classList.add("timeerror");
        return true;
    }
}

function vaurhoremail() {
    var checkmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (Authoremail.value === "" || isFinite(Authoremail.value) || checkmail.test(Authoremail.value) === false) {
        eauthoremail.classList.remove("timeerror")
        eauthoremail.innerText = "vaild! please enter your email";
    }
    else {
        eauthoremail.classList.add("timeerror");
        return true;

    }
}

function deletee(tt) {
     if (tt = Math.abs(bookNumAsNumber - remover) ) {
        tt = 0
    }
    arrbook.splice(tt, 1);
    tr[tt].remove();
}

console.log(arrbook);




