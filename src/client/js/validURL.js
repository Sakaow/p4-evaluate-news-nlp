// reference : https://gist.github.com/geoffreyrobichaux/0a7774b424703b6c0fffad309ab0ad0a

function validURL(str) {
    var regexp = /^(ftp|http|https|chrome|:\/\/|\.|@){2,}(localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\S*:\w*@)*([a-zA-Z]|(\d{1,3}|\.){7}){1,}(\w|\.{2,}|\.[a-zA-Z]{2,3}|\/|\?|&|:\d|@|=|\/|\(.*\)|#|-|%)*$/gum
    return regexp.test(str);
}

export {validURL}