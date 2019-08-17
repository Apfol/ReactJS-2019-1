document.addEventListener('DOMContentLoaded', squareUp, false);
var caja;
var partes = [1, 2, 3, 4, 5, 6, 7, 8];
var partes2 = [];
var partes3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var Vacio = 8;
function squareUp() {
    var canvas = document.getElementById("canvas");
    caja = canvas.getContext("2d");
}
function image(left, top, width, height) {
    this.Left = left;
    this.Top = top;
    this.Width = width;
    this.Height = height;
}
window.addEventListener('click', function (e) {
    var rect = canvas.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top
    for (var i = 0; i < partes2.length; i++) {
        var pos2 = partes2[i];
        var horizontalMatch = compara([x, y], pos2);
        if (horizontalMatch) {
            mueve(i);
        }


    }
});

function compara(p1, p2) {
    if ((p1[0] > p2[0] && p1[0] < p2[0] + 150) && (p1[1] > p2[1] && p1[1] < p2[1] + 150)) {
        return true
    }
}
function mueve(i) {
    var pos2 = partes2[i];
    if (i == 0) {
        if (Vacio == 1) {
            let pos3 = partes2[1];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            console.log(partes[i])
            Vacio = i;
            partes[i]=0;
        }
        if (Vacio == 3) {
            let pos3 = partes2[3];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
    }
    if (i == 1) {
        if (Vacio == 0) {
            let pos3 = partes2[0];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
        if (Vacio == 2) {
            let pos3 = partes2[2];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
        if (Vacio == 4) {
            let pos3 = partes2[4];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
    }
    if (i == 2) {
        if (Vacio == 1) {
            let pos3 = partes2[1];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
        if (Vacio == 5) {
            let pos3 = partes2[5];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
    }
    if (i == 3) {
        if (Vacio == 0) {
            let pos3 = partes2[0];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
        if (Vacio == 4) {
            let pos3 = partes2[4];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
        if (Vacio == 6) {
            let pos3 = partes2[6];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
    }
    if (i == 4) {
        if (Vacio == 1) {
            let pos3 = partes2[1];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
        if (Vacio == 5) {
            let pos3 = partes2[5];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
        if (Vacio == 3) {
            let pos3 = partes2[3];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
        if (Vacio == 7) {
            let pos3 = partes2[7];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
    }
    if (i == 5) {
        if (Vacio == 2) {
            let pos3 = partes2[2];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
        if (Vacio == 4) {
            let pos3 = partes2[4];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
        if (Vacio == 8) {
            let pos3 = partes2[8];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
    }
    if (i == 6) {
        if (Vacio == 3) {
            let pos3 = partes2[3];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
        if (Vacio == 7) {
            let pos3 = partes2[7];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }

    }
    if (i == 7) {
        if (Vacio == 6) {
            let pos3 = partes2[6];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
        if (Vacio == 8) {

            let pos3 = partes2[8];
            partes3[8] = partes[i];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
        if (Vacio == 4) {
            let pos3 = partes2[4];
            partes3[4] = partes[i];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
    }
    if (i == 8) {
        if (Vacio == 5) {
            let pos3 = partes2[5];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
        if (Vacio == 7) {
            let pos3 = partes2[7];
            partes3[7] = partes[i];
            caja.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + partes[i] + ".jpg";
            var pat = caja.createPattern(img, "repeat");
            caja.fillStyle = pat;
            caja.fillRect(pos3[0], pos3[1], 150, 150);
            partes[Vacio] = partes[i];
            Vacio = i;
        }
    }

    if (finish()) {
        alert("Felicidades Gano..!!");
        var img = new Image();
        img.src = "images/puzz9.jpg";
        var pat = caja.createPattern(img, "repeat");
        caja.fillStyle = pat;
        caja.fillRect(300,300, 150, 150);
    }
}
function finish() {
    var won = true;
    for (var i = 0; i < 8; i++) {
        if (partes[i] != (i + 1)) {
            won = false;
        }
    }
    return won;
}
window.addEventListener('keydown', function (e) {
    key = e.keyCode;
    if (key == 13) {
        e.preventDefault();
        start();
    }

});
function start() {
    caja.clearRect(0, 0, 450, 450);

    var nums = random();
    var t = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (t < 8) {
                var img = new Image();
                img.src = "images/puzz" + nums[t] + ".jpg";
                var pat = caja.createPattern(img, "repeat");
                caja.fillStyle = pat;
                caja.fillRect(150 * j, 150 * i, 150, 150);
                partes[t] = nums[t];
            }
            partes2[t] = [150 * j, 150 * i];
            t++;
        }
    }

}
function inicia() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (t < 8) {
                partes[t] = new image(150 * j, 150 * i, 150, 150);
                t++;
            }
        }
    }
}
function random() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8],
        ranNums = [],
        i = nums.length,
        j = 0;

    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        ranNums.push(nums[j]);
        nums.splice(j, 1);
    }
    return ranNums;
}