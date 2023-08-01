function calldata(url){
    fetch(url).then(response => response.json()).then((data)=>{
        console.log(data);
    });
}

function say(name){

    console.log("Hallo"+ name)

}

export {calldata, say }