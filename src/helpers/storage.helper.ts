/*
 * General utils for managing cookies in Typescript.
 */
export function setStorage(name: string, v: string) {
    window.localStorage.setItem(name, v);
}

export function getStorage(name: string) {
    return window.localStorage.getItem(name);
}

export function deleteStorage(name: string) {
    window.localStorage.removeItem(name);
}

export const storageHelper = {
    get: getStorage,
    set: setStorage,
    delete: deleteStorage
};
