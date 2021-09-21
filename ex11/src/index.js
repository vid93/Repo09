function switchCase(letter){
    var animals;
    switch(letter){
        case "a":
            animals = "antelope";
            break;
        case "b":
            animals = "Bird";
            break;
        case "b":
            animals = "Bird";
            break;
        default:
            animals = "stuff";
                break;            
    }
    return animals;
}



console.log(switchCase("d"));
module.exports = switchCase;