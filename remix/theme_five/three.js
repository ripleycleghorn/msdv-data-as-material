var text_string = `life deciduous tree ruled its annual budget Every year during short months March July grow entire new canopy leaves fails meet its quota year competitor will grow corner its previous space thus initiate long slow process tree will eventually lose its foothold die tree expects alive ten years hence no alternative succeed year every year after Lets consider modest unremarkable tree  one living street perhaps decorative maple tree height streetlight  not majestic maple reaching its full height forest  demure neighborhood tree thats one  quarter height its regal counterpart When sun directly overhead little maple example casts shadow size parking space However pluck off leaves lay flat side side cover three parking spaces suspending leaf separately tree stacked its surface area sort ladder light fall down Looking up notice leaves top tree smaller average leaves bottom allows sunlight caught near base whenever wind blows parts upper branches Look again youll notice leaves low canopy darker green  contain pigment helps leaf absorb sunshine allowing harvest weaker rays penetrate shade When building foliage tree budget leaf individually allocate position relative leaves good business plan will allow tree triumph largest longest  living street aint easy aint cheap The leaves little maple taken together weigh thirty  five pounds Every ounce therein pulled air mined soil  quickly  course few short months atmosphere plant gains carbon dioxide will sugar pith Thirty  five pounds maple leaves may not taste sweet me actually contain enough sucrose three pecan pies sweetest thing think right now pithy skeleton within leaves contains enough cellulose almost three hundred sheets paper number used print manuscript book Our trees source energy sun  light photons stimulate pigments within leaf buzzing electrons line unfathomably long chain pass excitement one other moving biochemical energy across cell exact location needed plant pigment chlorophyll large molecule within bowl its spoon  shaped structure sits one single precious magnesium atom amount magnesium needed enough chlorophyll fuel thirty  five pounds leaves equivalent amount magnesium found fourteen One Day vitamins ultimately dissolve bedrock geologically slow process Magnesium phosphorous iron micronutrients tree needs gained extremely dilute solution flows tiny mineral grains within soil order accumulate soil nutrients thirty  five pounds leaves require tree first absorb evaporate least eight thousand gallons water soil Thats enough fill tanker truck Thats enough keep twenty  five people alive year Thats enough worry when next going rain`
var text_array = text_string.toLowerCase().split(" ");
var no_repeats = [...new Set(text_array)];

let div = document.createElement("div")
document.body.appendChild(div);

no_repeats.sort();

no_repeats.forEach((item,index) => {
    let word = document.createElement("span");
    word.innerHTML = item + " ";
    let linebreak = document.createElement("br");

    if(index > 1 && (item[0] == no_repeats[index - 1][0]) == false) {
        //start new letters on a new line to create a barchart effect
        div.appendChild(linebreak);
        div.appendChild(word);
    }
    else {
        div.appendChild(word);
    }

})
