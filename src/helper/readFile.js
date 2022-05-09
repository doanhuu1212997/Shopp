export const readBlob = function (file) {
    let blob = new Blob([file], { type: file?.type });
    return URL.createObjectURL(blob);
};

export const readBase64 = function (file) {
    let reader = new FileReader();
    let new_file = null;
    reader.onload = function () {
        new_file = reader.result;
    };
    reader.readAsDataURL(file);
    return new_file;
};

function cropFile(file, MAX_WIDTH = 300, MAX_HEIGHT = 300){

    const imgElement = document.createElement("img");

    const reader = new FileReader();

    reader.readAsDataURL(file);

    return new Promise(function (resolve) {
        reader.onload = function (event) {

            imgElement.src = event.target.result;

            imgElement.onload = function (e) {

                const canvas = document.createElement("canvas");

                canvas.width = MAX_WIDTH;
                canvas.height = MAX_HEIGHT;

                const ctx = canvas.getContext("2d");

                ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);

                const srcEncoded = ctx.canvas.toDataURL("image/jpeg");

                const parts = srcEncoded.split(';base64,');

                const imageType = parts[0].split(':')[1];

                const decodedData = window.atob(parts[1]);

                const uInt8Array = new Uint8Array(decodedData.length);

                for (let i = 0; i < decodedData.length; ++i) {
                    uInt8Array[i] = decodedData.charCodeAt(i);
                }

                let blob = new Blob([uInt8Array], { type: imageType });

                let url_blob = URL.createObjectURL(blob);
                
                resolve(url_blob);
            };
        };
    })
}

function fileUrl(file, MAX_WIDTH = 300, MAX_HEIGHT = 300){

    const imgElement = document.createElement("img");

    const reader = new FileReader();

    reader.readAsDataURL(file);

    return new Promise(function (resolve) {
        reader.onload = function (event) {

            imgElement.src = event.target.result;

            imgElement.onload = function (e) {

                const canvas = document.createElement("canvas");

                canvas.width = MAX_WIDTH;
                canvas.height = MAX_HEIGHT;

                const ctx = canvas.getContext("2d");

                ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);

                const srcEncoded = ctx.canvas.toDataURL("image/jpeg");
                
                resolve(srcEncoded);
            };
        };
    })
}

export const cropUrl = async function (file, MAX_WIDTH = 300, MAX_HEIGHT = 300) {

    if (!file) return;

    if (typeof file === 'string') {
        return new Promise(function(resolve){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', file, true);
            xhr.responseType = 'blob';
            xhr.onload = async function (e) {
                if (this.status == 200) {
                    var myBlob = this.response;
                    let url = await fileUrl(myBlob, MAX_WIDTH, MAX_HEIGHT);
                    resolve(url)
                }
            };
            xhr.send();
        })
    }
    return await cropFile(file, MAX_WIDTH, MAX_HEIGHT);
};

export const cropImage = async function (file, MAX_WIDTH = 300, MAX_HEIGHT = 300) {

    if (!file) return;

    if (typeof file === 'string') {
        return new Promise(function(resolve){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', file, true);
            xhr.responseType = 'blob';
            xhr.onload = async function (e) {
                if (this.status == 200) {
                    var myBlob = this.response;
                    let url = await cropFile(myBlob, MAX_WIDTH, MAX_HEIGHT);
                    resolve(url)
                }
            };
            xhr.send();
        })
    }
    return await cropFile(file, MAX_WIDTH, MAX_HEIGHT);
};

export function readVideoFile(f) {
    if (f) {
        var r = new FileReader();
        return new Promise(function (resolve) {
            r.onload = function (e) {
                let contents = e.target.result;

                let uint8Array = new Uint8Array(contents);

                let arrayBuffer = uint8Array.buffer;
                let blob = new Blob([arrayBuffer]);

                let url_blob = URL.createObjectURL(blob);

                resolve(url_blob)

            }
            r.readAsArrayBuffer(f);
        })

    } else {
        alert("Failed to load file");
    };
}