








let input = document.getElementById("input");
let button = document.getElementById("button");

const vowelCounter = (text) => {
    let counter = 0; /// this is counter count every char


    
    for (let i = 0; i < text.length; i++) {
        if (text[i] == 'a' || text[i] == 'A' || text[i] == 'e' || text[i] == 'E' || text[i] == 'i' || text[i] == 'I' || text[i] == 'o' || text[i] == 'O' || text[i] == 'e' || text[i] == 'E') {
            counter++;
        } //// here we give us option to select waht char are vowel
    }
    


    alert(counter); /// this is alert() show counter output
}


button.addEventListener("click",()=>{
    vowelCounter(input.value);
    console.log(input.value);
    console.log("vowel counter tiggred")
})
