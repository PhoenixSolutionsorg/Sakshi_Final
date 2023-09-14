const Media = {
    uploadMedia : (mediaFor,mediaType)=> ({
        url : `/media/upload/:${mediaFor}/:${mediaType}`,
        method : 'POST'
    })
}

export default Media;