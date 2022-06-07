Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

Webcam.attach("#webcam");

function take_pic(){
    Webcam.snap(function(pic){
        document.getElementById("results").innerHTML="<img id='selfie' src='"+pic+"'>";
    });

}

console.log("ml5 version:",ml5.version);

img_model=ml5.imageClassifier("teachablemachine.withgoogle.com/models/NVAJZ2bfz/", modelLoaded);


img_model=ml5.imageClassifier("", modelLoaded);


function modelLoaded(){
    console.log("Model loaded successfully");
}

function identify_image(){
    pic_img=document.getElementById("selfie");
    img_model.classify(pic_img, get_result);
}

function get_result(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("object_name").innerHTML=result[0].label;
        document.getElementById("object_accuracy").innerHTML=result[0].confidence.toFixed(2);
    }
}

function identify_image(){
    pic_img=document.getElementById("selfie");
    img_model.classify(pic_img, get_result);
}
