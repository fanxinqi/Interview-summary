function get(url) {
    let xhr = new XMLHttpRequest(),
    return new Promise(function (reslove, reject) {
            xhr.open("get", url, false);
            xhr.send(null);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status == 200) {
                        reslove(xhr.responseText);
                    }
                }
            }
        
        })
}

