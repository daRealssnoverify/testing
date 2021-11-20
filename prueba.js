var req = new XMLHttpRequest();
req.open('GET', document.location, false);
req.send(null);
var headers = req.getAllResponseHeaders().toLowerCase();
console.log('Detalles de headers' + headers);
if (headers === null) {
    console.log('methodic');
}
else {





    var dust = "coffe";
    var n = 0;
    window.setInterval(function () {
        console.log('value modified to' + n);
        var ctt = n++;
        ctt;

        if (n => 0) {
            var c = localStorage.setItem("time", n);
            localStorage.setItem("time", n);
            console.log('new item set' + ctt);


        }
        else {
            console.log('not loaded');
        }
    }, 1000);


    document.addEventListener('onhaschange', function () {

        clearInterval(ctt);


    }, false);



    //window.setInterval(function () {
        var b = localStorage.getItem("time");
        console.log(b);
        window.addEventListener("beforeunload", function (e) {


            var dust = "coffe3";
            var b = localStorage.getItem("time");
            if (b == 1) {   //check for inbound facebook shitty fake bots.
                var dust = "coffe3";
                var b = localStorage.getItem("time");
                var type_of_user = "missclicked user or crawler";
                $.ajax({
                    type: "POST",
                    url: "./assets/php/app.php",
                    data: { dust: dust, ip_f: localStorage.getItem("ip_f"), b: localStorage.getItem("time"), type_of_user: type_of_user, totem: localStorage.getItem("totem"), tassy: tassy  }
                }).done(function (msg) {
                    console.log("Los datos que se recibieron: " + msg);
                });

            }
            else {
                
            }

            if (b >= 4) {
                var type_of_user = "probably a legit user";
                var dust = "coffe3";
                var b = localStorage.getItem("time");
                $.ajax({
                    type: "POST",
                    url: "./assets/php/app.php",
                    data: { dust: dust, ip_f: localStorage.getItem("ip_f"), b: localStorage.getItem("time"), type_of_user: type_of_user, totem: localStorage.getItem("totem"), tassy: tassy }
                }).done(function (msg) {
                    console.log("Los datos que se recibieron: " + msg);
                });

            }
            else {
            }

            

        });

        

   // }, 1000);

    

}
