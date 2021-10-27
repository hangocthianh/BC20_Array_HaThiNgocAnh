
// Nhập các số nguyên vào mảng
var arrayNum = [];
function addNum() {
    var num = Number(document.querySelector("#num").value);
    // kiểm tra số nguyên
    if (Number.isInteger(num)) {
        arrayNum.push(num);
    } else {
        alert("Hãy nhập số nguyên!");
    }
    document.querySelector("#arrayNum").innerHTML = arrayNum;
}
document.querySelector("#btnAdd").onclick = addNum;


//1. Tổng các số dương
function sumNum() {
    var sum = 0;
    for (var i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] > 0) {
            sum += arrayNum[i];
        }
    }
    document.querySelector("#sum").innerHTML = "Tổng các số dương là: " + sum;
}
document.querySelector("#btnSum").onclick = sumNum;

// 2. Đếm có bao nhiêu số dương
function countNum() {
    var count = 0;
    for (var i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] > 0) {
            count++;
        }
    }
    document.querySelector("#positive").innerHTML = "Có " + count + " số dương";
}
document.querySelector("#btnCount").onclick = countNum;

// 3. Tìm số nhỏ nhất
function minNum() {
    var min = arrayNum[0];
    for (var i = 1; i < arrayNum.length; i++) {
        if (min > arrayNum[i]) {
            min = arrayNum[i];
        }
    }
    document.querySelector("#min").innerHTML = "Số nhỏ nhất là: " + min;
}
document.querySelector("#btnMin").onclick = minNum;

// 4. Tìm số dương nhỏ nhất
function minPosiNum() {
    var arrMinPosi = [];
    for(var i=0; i< arrayNum.length;i++){
        if(arrayNum[i] > 0){
            arrMinPosi.push(arrayNum[i]);
        }
    }
    if(arrMinPosi.length > 0){
        var minPosi = arrMinPosi[0];
        for (var j = 1; j < arrMinPosi.length; j++) {
            if (arrMinPosi[j] < minPosi) {
                minPosi = arrMinPosi[j];
            }
        }
    } else{
        alert("Mảng không có số dương!")
    }
    document.querySelector("#minPositive").innerHTML = "Số dương nhỏ nhất là: " + minPosi;
}
document.querySelector("#btnMinPositive").onclick = minPosiNum;

// 5. Tìm số chẵn cuối cùng
function evenNum() {
    for (var i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] % 2 == 0) {
            var even = arrayNum[i];
        }
    }
    document.querySelector("#even").innerHTML = "Số chẵn cuối cùng là: " + even;
}
document.querySelector("#btnEven").onclick = evenNum;

// 6. Đổi chỗ 2 giá trị trong mảng theo vị trí
function change() {
    var index_1 = document.querySelector("#index-1").value;
    var index_2 = document.querySelector("#index-2").value;
    if (index_1 >= 0 && index_1 < arrayNum.length && index_2 >= 0 && index_2 < arrayNum.length) {
        var item = arrayNum[index_1];
        arrayNum[index_1] = arrayNum[index_2];
        arrayNum[index_2] = item;
    } else {
        alert("Nhập các vị trí từ " + 0 + " đến " + (arrayNum.length - 1));
    }
    document.querySelector("#arrayChange").innerHTML = "Mảng sau khi đổi: " + arrayNum;
}
document.querySelector("#btnChange").onclick = change;

// 7. Sắp xếp mảng theo thứ tự tăng dần
function sortUp() {
    arrSortUp = [];
    for (var k = 0; k < arrayNum.length; k++) {
        arrSortUp.push(arrayNum[k]);
    }
    console.log(arrSortUp);
    for (var i = 0; i < arrSortUp.length; i++) {
        for (var j = 0; j < arrSortUp.length - 1; j++) {
            if (arrSortUp[j] > arrSortUp[j + 1]) {
                var item = arrSortUp[j];
                arrSortUp[j] = arrSortUp[j + 1];
                arrSortUp[j + 1] = item;
            }
        }
    }
    document.querySelector("#arraySort").innerHTML = "Mảng sắp xếp tăng dần: " + arrSortUp;
}
document.querySelector("#btnSort").onclick = sortUp;

// 8. Tìm số nguyên tố đầu tiên
function primeFirst() {
    var arrPrime = [];
    for (var i = 0; i < arrayNum.length; i++) {
        var count = 0;
        for (var j = 2; j <= Math.sqrt(arrayNum[i]); j++) {
            if (arrayNum[i] % j == 0) {
                count++;
            }
        }
        if (count == 0 && arrayNum[i] > 1) {
            arrPrime.push(arrayNum[i]);
        }
    }
    document.querySelector("#prime").innerHTML = "Số nguyên tố đầu tiên là: " + arrPrime[0];
}
document.querySelector("#btnPrime").onclick = primeFirst;

// 9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
var arrNumFloat = [];
function addNumFloat() {
    var numFloat = Number(document.querySelector("#numFloat").value);
    arrNumFloat.push(numFloat);
    document.querySelector("#arrNumFloat").innerHTML = arrNumFloat;
}
document.querySelector("#btnAddFloat").onclick = addNumFloat;
function countInt() {
    var count = 0;
    for (var i = 0; i < arrNumFloat.length; i++) {
        if (Number.isInteger(arrNumFloat[i])) {
            count++;
        }
    }
    document.querySelector("#int").innerHTML = "Có " + count + " số nguyên";
}
document.querySelector("#btnInt").onclick = countInt;

// 10. So sánh số lượng số dương và số lượng số âm
function compare() {
    var countPosi = 0; // biến đếm số dương
    var countNega = 0; // biến đếm số âm
    for (var i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] > 0) {
            countPosi++;
        } else if (arrayNum[i] < 0) {
            countNega++;
        }
    }
    var resultCompare = "";
    if (countPosi > countNega) {
        resultCompare = "Số dương > Số âm";
    } else if (countPosi < countNega) {
        resultCompare = "Số âm > Số dương";
    } else {
        resultCompare = "Số âm = Số dương"
    }
    document.querySelector("#compare").innerHTML = resultCompare;
}
document.querySelector("#btnCompare").onclick = compare;