let userinput = document.getElementById("date")
userinput.max = new Date().toISOString().split("T")[0];
let reslut = document.getElementById("result");

function agecalculator() {
    let brithdate = new Date(userinput.value);
    let d1 = brithdate.getDate();
    let m1 = brithdate.getMonth() + 1;
    let y1 = brithdate.getFullYear();

    // let today = new Date();

    let d2 = new Date().getDate();
    let m2 = new Date().getMonth() + 1;
    let y2 =new Date().getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--
        d3 = getdayinmonth(y1, m1) + d2 - d1;
    }
    if(m3 <0){
        m3 = 11;
        y3--;
    }
    reslut.innerHTML = `Your Are ${y3} years , ${m3} months And ${d3} days in old`;
    console.log(d3, m3, y3);
}
function getdayinmonth(year, month) {
    return new Date(year, month, 0).getDate();
}