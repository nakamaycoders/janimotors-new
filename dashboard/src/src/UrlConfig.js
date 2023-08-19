export const api = `https://janimotors-api.onrender.com/api`;
export const imageApi = `https://janimotors-api.onrender.com`;

export const publicUrl = (fileName) =>{
    return `${api}/public/${fileName}`;
}

export const ImageUrl = (fileName) =>{
    return `${imageApi}/public/${fileName}`;
}