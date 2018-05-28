
//for Create random code
function randomCode(){
    var randomCode = '';
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 8;
     for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomCode += chars.substring(rnum,rnum+1);
    }
    return randomCode;
}
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

//create file for download
document.getElementById("download_code").addEventListener("click", function(){
    var filename = "test2.txt";
    var code = '';
    for (var j=0; j<250; j++){
        code += 'IA' + randomCode() + '\n';
    }
    download(filename, code);
}, false);