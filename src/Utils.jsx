function isComplexDataBg(value) {
    let regexp = new RegExp(/\s*(mp4\s*:|ogv\s*:|webm\s*:)/g);
    return regexp.test(value);
}

function getDataBg(oldValue, videoPath, posterPath){
    let newValue, poster;
    poster = oldValue.match(/poster\s*\:\s*[^\,]*/i)[0];
    if (videoPath){
        switch(getFileInfo(videoPath).extension){
            case ("mp4"):{
                newValue = `mp4: ${videoPath}, ${poster}`;
                break;
            }
            case ("ogv"):{
                newValue = `ogv: ${videoPath}, ${poster}`;
                break;
            }
            case ("webm"):{
                newValue = `webm: ${videoPath}, ${poster}`;
                break;
            }
        }
    }
    if (posterPath){
        newValue = oldValue.replace(poster, `poster: ${posterPath}`)
    }
    return newValue;

}

export function basename(path) {
    if (path) {
        return path.split("/").pop();
    }
    return null;
}

export function getFileInfo(path) {
    const baseName = basename(path);
    let index;
    for (let i = baseName.length; i >= 0; i--){
        if (baseName.charCodeAt(i) === 46){
            index = i;
            break;
        }
    }
    return {
        name: baseName.substring(0, index),
        extension: baseName.substring(index + 1)
    }
}

export function getVideData({videBg, videOpts, poster, video}) {
    let videData = {};

    // if poster change
    if (poster){
        if (videOpts) {
            let regexp = new RegExp(/posterType\s*\:\s*[a-z]*/g);
            videData.opts = videOpts.replace(regexp, `posterType: ${getFileInfo(poster).extension}`);
        }
        else {
            videData.opts = `posterType: ${getFileInfo(poster).extension}`
        }
    }

    // if change video
    else {
        if (videOpts) {
            videData.opts = videOpts // if video change and options already set
        }
        else {
            videData.opts = "posterType: detect"; // if video change and options not set yet
        }

    }

    // if data-vide-bg set as json
    if (isComplexDataBg(videBg)){
        videData.bg = getDataBg(videBg, video, poster);
    }
    // if data-vide-bg set as one value
    else{
        if (poster){
            videData.bg = `mp4: ${videBg}.mp4, ogv: ${videBg}.ogv, webm: ${videBg}.webm, poster: ${poster}`;
        }
        else{
            switch(getFileInfo(video).extension){
                case ("mp4"):{
                    videData.bg = `mp4: ${video}, poster: ${videBg}`;
                    break;
                }
                case ("ogv"):{
                    videData.bg = `ogv: ${video}, poster: ${videBg}`;
                    break;
                }
                case ("webm"):{
                    videData.bg = `webm: ${video}, poster: ${videBg}`;
                    break;
                }
            }
        }
    }

    return videData;
}

