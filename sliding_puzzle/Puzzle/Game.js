document.addEventListener('DOMContentLoaded', domloaded, false);
var ctx;
var images = [1, 2, 3, 4, 5, 6, 7, 8];
var images2 = [];
var images3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var blanco = 8;
var ganador = []
function domloaded() {
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Press enter to play..!!", 80, 210);
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
    for (var i = 0; i < images2.length; i++) {
        var pos2 = images2[i];
        var horizontalMatch = comparePositions([x, y], pos2);
        if (horizontalMatch) {
            paly(i);
        }


    }
});

function comparePositions(p1, p2) {
    if ((p1[0] > p2[0] && p1[0] < p2[0] + 150) && (p1[1] > p2[1] && p1[1] < p2[1] + 150)) {
        return true
    }
}
function paly(i) {
    var pos2 = images2[i];
    if (i == 0) {
        if (blanco == 1) {
            let pos3 = images2[1];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            console.log(images[i])
            blanco = i;
        }
        if (blanco == 3) {
            let pos3 = images2[3];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
    }
    if (i == 1) {
        if (blanco == 0) {
            let pos3 = images2[0];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
        if (blanco == 2) {
            let pos3 = images2[2];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
        if (blanco == 4) {
            let pos3 = images2[4];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
    }
    if (i == 2) {
        if (blanco == 1) {
            let pos3 = images2[1];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
        if (blanco == 5) {
            let pos3 = images2[5];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
    }
    if (i == 3) {
        if (blanco == 0) {
            let pos3 = images2[0];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
        if (blanco == 4) {
            let pos3 = images2[4];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
        if (blanco == 6) {
            let pos3 = images2[6];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
    }
    if (i == 4) {
        if (blanco == 1) {
            let pos3 = images2[1];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
        if (blanco == 5) {
            let pos3 = images2[5];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
        if (blanco == 3) {
            let pos3 = images2[3];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
        if (blanco == 7) {
            let pos3 = images2[7];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
    }
    if (i == 5) {
        if (blanco == 2) {
            let pos3 = images2[2];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
        if (blanco == 4) {
            let pos3 = images2[4];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
        if (blanco == 8) {
            let pos3 = images2[8];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
    }
    if (i == 6) {
        if (blanco == 3) {
            let pos3 = images2[3];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
        if (blanco == 7) {
            let pos3 = images2[7];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }

    }
    if (i == 7) {
        if (blanco == 6) {
            let pos3 = images2[6];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
        if (blanco == 8) {

            let pos3 = images2[8];
            images3[8] = images[i];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
        if (blanco == 4) {
            let pos3 = images2[4];
            images3[4] = images[i];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
    }
    if (i == 8) {
        if (blanco == 5) {
            let pos3 = images2[5];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
        if (blanco == 7) {
            let pos3 = images2[7];
            images3[7] = images[i];
            ctx.clearRect(pos2[0], pos2[1], 150, 150);
            var img = new Image();
            img.src = "images/puzz" + images[i] + ".jpg";
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.fillRect(pos3[0], pos3[1], 150, 150);
            images[blanco] = images[i];
            blanco = i;
        }
    }

    if (finish()) {
        alert("Felicidades Gano..!!");
        var img = new Image();
        img.src = "images/puzz9.jpg";
        var pat = ctx.createPattern(img, "repeat");
        ctx.fillStyle = pat;
        ctx.fillRect(300,300, 150, 150);
    }
}
function finish() {
    var won = true;
    for (var i = 0; i < 8; i++) {
        if (images[i] != (i + 1)) {
            won = false;
        }
    }
    return won;
}
window.addEventListener('keydown', function (e) {
    key = e.keyCode;
    if (key == 37) {
        e.preventDefault();
        moveleft();
    }
    if (key == 38) {
        e.preventDefault();
        moveup();
    }
    if (key == 39) {
        e.preventDefault();
        moveright();
    }
    if (key == 40) {
        e.preventDefault();
        movedown();
    }
    if (key == 13) {
        e.preventDefault();
        start();
    }

});
function start() {
    ctx.clearRect(0, 0, 450, 450);

    var nums = random();
    var t = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (t < 8) {
                var img = new Image();
                img.src = "images/puzz" + nums[t] + ".jpg";
                var pat = ctx.createPattern(img, "repeat");
                ctx.fillStyle = pat;
                ctx.fillRect(150 * j, 150 * i, 150, 150);
                images[t] = nums[t];
            }
            images2[t] = [150 * j, 150 * i];
            t++;
        }
    }

}
function inicia() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (t < 8) {
                images[t] = new image(150 * j, 150 * i, 150, 150);
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

