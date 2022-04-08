import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name: 'pokemon-bolivia',
    api_key: '495737748356586',
    api_secret: 'WgmTi7b-0PhA11x8g1Efugb4ImI'
})

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'posts'
    })
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}