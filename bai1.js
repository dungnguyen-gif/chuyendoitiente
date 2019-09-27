function convert() {
    let amount = Number(document.getElementById("amount").value);
    let formCurrent = document.getElementById("chuyendoi1").value;
    let toCurrent = document.getElementById("chuyendoi2").value;
​
    let result = 0;
    if (formCurrent == "USD" && toCurrent == "VNĐ"){
        result = amount*23000 + toCurrent;
    }
    else
    if (formCurrent == "VNĐ" && toCurrent == "USD"){
        result = amount/23000 + toCurrent;
    }
    else {
        result = "nhap lai";
    }
    console.log(result);
    document.getElementById("result").innerText = result;
}