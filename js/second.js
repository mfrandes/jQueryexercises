
var a = [2, -5, 88, 29, -45, 452, 7, 78, 485, 18];
console.log("Initial Array", a);

function smallAndBig() {
    var b = Math.max.apply(null, a);
    console.log("The greatest value is: ", b);
    var c = Math.min.apply(null, a);
    console.log("The smalest value is: ", c);
};

function swapA() {
    if (a[i] > a[i + 1]) {
        console.log("Compair", a[i]);
        console.log("With", a[i + 1]);
        var b = a[i];
        a[i] = a[i + 1];
        a[i + 1] = b;
        console.log("Switch ", a[i], " with ", a[i + 1]);
        console.warn("swap A", a);
        arrangeArayUp();
    }
}
function swapB() {
    if (a[i] < a[i + 1]) {
        console.log("Compair", a[i]);
        console.log("With", a[i + 1]);
        var b = a[i];
        a[i] = a[i + 1];
        a[i + 1] = b;
        console.log("Switch ", a[i], " with ", a[i + 1]);
        console.warn("swap B", a)
        arrangeArayDown();
    }
}


/* prima varianta ineficienta
function arrangeArayUp() {
    for (i = 0; i <= a.length - 1; i++) {
        if (a[i] > a[i + 1]) {
            swapA();
        } else {
            if (a[i + 1] > a[i + 2]) {
                swapB();
            }
        }
        if (a[i + 1] > a[i + 2]) {
            swapB();
        } else {
            if (a[i] > a[i + 1]) {
                swapA();
            }
        }
    }
    for (i = 0; i <= a.length - 1; i++) {
        if (a[i] > a[i + 1]) {
            swapA();
        } else {
            if (a[i + 1] > a[i + 2]) {
                swapB();
            }
        }
        if (a[i + 1] > a[i + 2]) {
            swapB();
        } else {
            if (a[i] > a[i + 1]) {
                swapA();
            }
        }
    };
    for (i = 0; i <= a.length - 1; i++) {
        if (a[i] > a[i + 1]) {
            swapA();
        } else {
            if (a[i + 1] > a[i + 2]) {
                swapB();
            }
        }
        if (a[i + 1] > a[i + 2]) {
            swapB();
        } else {
            if (a[i] > a[i + 1]) {
                swapA();
            };
        };
    };
}; */
/*Working :))*/
function arrangeArayUp(){
    var n = a.length
    for (i = 0; i <= n - 1; i++) {
        if (a[i] > a[i + 1]) {
            swapA();
        } 
    }
}
function arrangeArayDown() {
    var n = a.length
    for (i = 0; i <= n - 1; i++) {
        if (a[i] < a[i + 1]) {
            swapB();
        } 
    }
    
    
    /*for (i = 0; i <= n - 1; i++) {
        if (a[0] > a[1] > a[2] > a[3] > a[4] > a[5] > a[6] > a[7] > a[8] > a[9]) {
            console.log("all donne : ", a);
        } else {
            swapA();
        }

    };*/
};


smallAndBig();
arrangeArayDown();
