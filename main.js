function setup(){
    canvas = createCanvas(280, 280);
canvas.center();
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;
}
function clearCanvas(){
background("white");
}
function gotResult(error, results){
    if (error){
        console.error(error);
    }
    {
        console.log(results);
        document.getElementById(`label`).innerHTML=`Label :`+ results[0].label;
        document.getElementById('confidence').innerHTML=`Confidence : `+Math.round(results[0].confidence*100)+'%';
        utterThis= new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterThis);
    }

}
function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}
function preload(){
classifier=ml5.imageClassifier(`Doodlenet`);
} 
function draw() {
    strokeWeight(7);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}