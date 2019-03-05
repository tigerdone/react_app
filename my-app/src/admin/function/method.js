let deepClone=(v)=>{
    return JSON.parse(JSON.stringify(v));
};
let sleep = (delay)=> {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {

    }
};

exports.deepClone = deepClone;
exports.sleep = sleep;


