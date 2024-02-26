
const getColor = () => {
    //for creating a random numn=ber wich can be a hexadecimal number by multiplying 16777215//
    const randumNumber = Math.floor(Math.random() * 16777215);
    //for converting hexadecimal number to string by tostring(16) it can be hexa code and # is concatinate for hexacode syntax// 
    const randumCode = "#" + randumNumber.toString(16);
    document.body.style.background = randumCode;
    document.getElementById("color-code").innerText = randumCode;
    navigator.clipboard.writeText(randumCode)
}
// Event call//
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
//initial call//
getColor()