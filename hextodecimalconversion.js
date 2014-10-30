/**
 * Created by D on 10/21/2014.
 */

//take a hexidecimal string and convert it to a decimal number a,b,c,d,e,f


//will be activated on button press
function hexConvert() {
    //split the string, find length, over for loop convert
    var hexString = document.getElementById("user_input").value;
    var hexArray = hexString.split("");
    var count = hexArray.length;
    hexArray.reverse(); //reverse to convert to base 10
    var totalDecimalValue = 0;

    outerLoop: for (var i=0; i<count; i++) {
        switch (hexArray[i]) {
            case "a":
                hexArray[i] = 10;
                break;
            case "b":
                hexArray[i] = 11;
                break;
            case "c":
                hexArray[i] = 12;
                break;
            case "d":
                hexArray[i] = 13;
                break;
            case "e":
                hexArray[i] = 14;
                break;
            case "f":
                hexArray[i] = 15;
                break;
            default:
                hexArray[i] = Number(hexArray[i]);
                if (hexArray[i] !== hexArray[i]) { //only if it is NaN will this be true
                    totalDecimalValue = "error: not a hex value";
                    break outerLoop;
                }
        }
        var hexMultiplier = Math.pow(16, i); //base 16A
        totalDecimalValue += (hexArray[i] * hexMultiplier); //base 10 value
    }
    document.getElementById("decimal_conversion").value = String(totalDecimalValue);
}

