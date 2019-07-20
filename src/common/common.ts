export function onQROK(): Promise<any> {
    return new Promise((resolve, reject) => {
        window.__awesome_qr_base_path = "/qr";

        window.require([window.__awesome_qr_base_path + '/awesome-qr.js'], function (AwesomeQR:any) {
            resolve(AwesomeQR);
        });
    })
}

export function sleep(millSeconds:number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, millSeconds)
    })
}
