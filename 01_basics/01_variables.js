const accountId = 123456
let accountEmail = "supriyo@sadhu.com"
var accountPassword = "123456789"
accountCity = "Burdwan"
let accountState;

/* 
    Prefer not use var
    because of issue in block scope and functional scope
*/



accountEmail = "sup@sad.com"
accountPassword ="654321"
accountCity = "Kolkata"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
