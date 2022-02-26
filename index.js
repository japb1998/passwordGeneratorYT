var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = lowercase.map(function (char) { return char.toUpperCase(); });
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) {
    return i.toString();
});
var symbols = ("~`!@#$%^&*()_-+={[}]|:;" + "'<,>.?/").split("");
var buttonElement = document.querySelector("#generate-btn");
var textareaElement = document.querySelector("#password");
function getPasswordConfigurations() {
    var passwordLength = Number(prompt("Whats the desired length"));
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        return getPasswordConfigurations();
    }
    var includeUpper = confirm("Would you like upperCase letters added ?");
    var includeLower = confirm("Would you like lowercase letters added ?");
    var includeSymbols = confirm("Would you like symbols added ?");
    var includeNumbers = confirm("Would you like numbers added ?");
    return {
        passwordLength: passwordLength,
        includeLower: includeLower,
        includeUpper: includeUpper,
        includeSymbols: includeSymbols,
        includeNumbers: includeNumbers
    };
}
function generateFuntion() {
    var password = [];
    var possibleValues = [];
    var secureValues = [];
    var passwordConfigurations = getPasswordConfigurations();
    console.log(passwordConfigurations);
    if (passwordConfigurations === null || passwordConfigurations === void 0 ? void 0 : passwordConfigurations.includeLower) {
        possibleValues = possibleValues.concat(lowercase);
        secureValues.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    }
    if (passwordConfigurations === null || passwordConfigurations === void 0 ? void 0 : passwordConfigurations.includeNumbers) {
        possibleValues = possibleValues.concat(numbers);
        secureValues.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    if (passwordConfigurations === null || passwordConfigurations === void 0 ? void 0 : passwordConfigurations.includeSymbols) {
        possibleValues = possibleValues.concat(symbols);
        secureValues.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
    if (passwordConfigurations === null || passwordConfigurations === void 0 ? void 0 : passwordConfigurations.includeUpper) {
        possibleValues = possibleValues.concat(uppercase);
        secureValues.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    }
    console.log(possibleValues);
    //now we generate a random password;
    for (var i = 0; i < passwordConfigurations.passwordLength; i++) {
        var randomValue = possibleValues[Math.floor(Math.random() * possibleValues.length)];
        console.log(randomValue);
        password.push(randomValue);
    }
    //now we make sure we have at least one value of each category
    secureValues.forEach(function (value) {
        password[Math.floor(Math.random() * password.length)] = value;
        console.log(value);
    });
    return password;
}
buttonElement.addEventListener("click", function (e) {
    console.log("button clicked textarea:", textareaElement["value"]);
    //   console.log(getPasswordConfigurations());
    textareaElement.textContent = generateFuntion().join('');
});
