
var opiatesTestResult = "";
var opiatesTestInterpretation = "";
var opiatesTestExplanation = "";
var oxycodoneTestResult = "";
var oxycodoneTestInterpretation = "";    
var oxycodoneTestExplanation = "";
var output = "";
var drugs = [];
// Toggles the drug choice's value to be true or false and changes the style if on
function toggleDrug(clicked_id){
    // Delete the folowing
    console.log("clicked_id: " + clicked_id);
    console.log("EARLY in the function - this value: " + document.getElementById(clicked_id).value);   

    if(document.getElementById(clicked_id).value == false || document.getElementById(clicked_id).value == undefined ){
        document.getElementById(clicked_id).value = true;
        document.getElementById(clicked_id).style.backgroundColor = "#14df4d";
        // change style so that it is pressed // make RED for test
    }
    else {
        document.getElementById(clicked_id).value = false;
        document.getElementById(clicked_id).style.backgroundColor = "#77C1E4";
    }
    console.log("this value: " + document.getElementById(clicked_id).value);      
    }
//  FUNCTION DESCRIPTION   
function addTestResult(clicked_id){
    if(clicked_id=="opiatesTestNegative"||clicked_id=="opiatesTestPositive"){
    if(clicked_id=="opiatesTestNegative"){
        document.getElementById(clicked_id).value = true;
        document.getElementById(clicked_id).style.backgroundColor = "#14df4d";
        document.getElementById("opiatesTestPositive").value = false;
        document.getElementById("opiatesTestPositive").style.backgroundColor = "#77C1E4";
    }
    else {
        document.getElementById(clicked_id).value = true;
        document.getElementById(clicked_id).style.backgroundColor = "#14df4d";
        document.getElementById("opiatesTestNegative").value = false; 
        document.getElementById("opiatesTestNegative").style.backgroundColor = "#77C1E4";
    }
    }
    else{
    if(clicked_id=="oxycodoneTestNegative"){
        document.getElementById(clicked_id).value = true;
        document.getElementById(clicked_id).style.backgroundColor = "#14df4d";
        document.getElementById("oxycodoneTestPositive").value = false;
        document.getElementById("oxycodoneTestPositive").style.backgroundColor = "#77C1E4";
    }
    else {
        document.getElementById(clicked_id).value = true;
        document.getElementById(clicked_id).style.backgroundColor = "#14df4d";
        document.getElementById("oxycodoneTestNegative").value = false;
        document.getElementById("oxycodoneTestNegative").style.backgroundColor = "#77C1E4";
    }
    }
    console.log(document.getElementById("opiatesTestNegative").value + " " + document.getElementById("opiatesTestPositive").value + " " + document.getElementById("oxycodoneTestNegative").value + " " + document.getElementById("oxycodoneTestPositive").value);
    // Style the buttons in CSS so that undefined and false are default and TRUE is red
}
//  FUNCTION DESCRIPTION   
function createDrugArray(){
    // for each drug
    var ids = ["buprenorphine","codeine","fentanyl","hydrocodone","hydromorphone","heroin-mam6","meperidine","methadone","morphine","oxycodone","oxymorphone"];
    var length = ids.length;
    for (let index = 0; index < ids.length; index++) {
    check(ids[index]);
    }
}
//  FUNCTION DESCRIPTION   
function check(currentValue){
    console.log(currentValue);
    // console.log("document.getElementById(buprenorphine).value: " + document.getElementById("buprenorphine").value);
    if(!(document.getElementById(currentValue).value == null || document.getElementById(currentValue).value == false)){
    var modifiedName = currentValue.charAt(0).toUpperCase() + currentValue.slice(1);
    drugs.push(modifiedName);      
    }
}


function opiatesTestProcess(){
    // if negative
    if(document.getElementById("opiatesTestNegative").value == true){
    opiatesTestResult = "Negative";
    }
    else if (document.getElementById("opiatesTestPositive").value == true){
    opiatesTestResult = "Positive";   
    }
    opiatesTestExplanation = "";

    if (opiatesTestResult == "Positive"){
        if(drugs.includes("Codeine") || drugs.includes("Morphine") || drugs.includes("Oxycodone") || drugs.includes("Heroin-mam6") || drugs.includes("Hydromorphone") || drugs.includes("Hydrocodone") ){
        opiatesTestInterpretation = "Expected";
        // finer granularity
        if(drugs.includes("Codeine") || drugs.includes("Morphine") || drugs.includes("Heroin-mam6")){
            // build string
            var opiates = ""
            if(drugs.includes("Codeine")){
            opiates = opiates + "Codeine, ";
            }
            if(drugs.includes("Morphine")){
            opiates = opiates + "Morphine, ";
            }
            if (opiates.length>0){
            opiatesTestExplanation = `Patient prescribed or using ${opiates}highly likely that Opiate test would be positive. `;
            }
            if(drugs.includes("Heroin-mam6")){
            opiatesTestExplanation = opiatesTestExplanation + "Patient using heroin, highly unlikely that Opiate test would be positive.";
            }
        }
        else{
            // build string
            var nonOpiates = "";
            if (drugs.includes("Hydromorphone")){
            nonOpiates = nonOpiates + "Hydromorphone"
            }
            if (drugs.includes("Hydrocodone")){
            if (nonOpiates.length > 0){
                nonOpiates+= ", ";
            }
            nonOpiates = nonOpiates + "Hydrocodone"
            }
            if (drugs.includes("Oxycodone")){
            if (nonOpiates.length > 0){
                nonOpiates+= ", ";
            }
            nonOpiates = nonOpiates + "Oxycodone"
            }
            opiatesTestExplanation = `High dose or recent ${nonOpiates}, this can give a positive Opiates Test.`;
        }
        }
        else {
        opiatesTestInterpretation = "Unexpected";
        opiatesTestExplanation = "Patient not prescribed Codeine, Morphine, Oxycodone, Hydromorphone or Hydromorphone nor using Heroin, so highly unlikely UDT would be positive.";
        }
    }
    else if (opiatesTestResult == "Negative"){
    if(drugs.includes("Codeine") || drugs.includes("Morphine") || drugs.includes("Oxycodone") || drugs.includes("Heroin-mam6") || drugs.includes("Hydromorphone") || drugs.includes("Hydrocodone") ){
        opiatesTestInterpretation = "Unexpected";
        // finer granularity
        if(drugs.includes("Codeine") || drugs.includes("Morphine") || drugs.includes("Heroin-mam6")){
            // build string
            var opiates = ""
            if(drugs.includes("Codeine")){
            opiates = opiates + "Codeine, ";
            }
            if(drugs.includes("Morphine")){
            opiates = opiates + "Morphine, ";
            }
            if (opiates.length>0){
            opiatesTestExplanation = `Patient prescribed or using ${opiates}highly unlikely that Opiate test would be negative. `;
            }
            if(drugs.includes("Heroin-mam6")){
            opiatesTestExplanation = opiatesTestExplanation + "Patient using heroin, highly unlikely that Opiate test would be negative.";
            }
        }
        else{
            // build string
            var nonOpiates = "";
            if (drugs.includes("Hydromorphone")){
                nonOpiates = nonOpiates + "Hydromorphone"
            }
            if (drugs.includes("Hydrocodone")){
            if (nonOpiates.length > 0){
                nonOpiates+= ", ";
            }
            nonOpiates = nonOpiates + "Hydrocodone"
            }
            if (drugs.includes("Oxycodone")){
            if (nonOpiates.length > 0){
                nonOpiates+= ", ";
            }
            nonOpiates = nonOpiates + "Oxycodone"
            }
            opiatesTestExplanation = `Low dose or distant dosing of ${nonOpiates}, this can give a positive Opiates Test.`;
        }
        }
        else {
        opiatesTestInterpretation = "Expected";
        opiatesTestExplanation = "Patient not prescribed Codeine, Morphine, Oxycodone, Hydromorphone or Hydromorphone nor using Heroin,  highly likely UDT would be negative.";
        }
    }
    
}

function oxycodoneTestProcess(){
    if(document.getElementById("oxycodoneTestNegative").value == true){
    oxycodoneTestResult = "Negative";
    }
    else if (document.getElementById("oxycodoneTestPositive").value == true){
    oxycodoneTestResult = "Positive";
    }
    
    if (oxycodoneTestResult == "Positive"){
        if(drugs.includes("Oxycodone") || drugs.includes("Oxymorphone")){
        oxycodoneTestInterpretation = "Expected";
        oxycodoneTestExplanation = "Patient prescribed Oxycodone and/or Oxymorphone, highly likely that Oxycodone test would be positive.";
        }
        else {
        oxycodoneTestInterpretation = "Unexpected";
        oxycodoneTestExplanation = "Patient NOT prescribed Oxycodone or Oxymorphone, highly unlikely that Oxycodone test would be positive.";
        }
    }
    else if (oxycodoneTestResult == "Negative"){
    if(drugs.includes("Oxycodone") || drugs.includes("Oxymorphone")){
        oxycodoneTestInterpretation = "Unexpected";
        oxycodoneTestExplanation = "Patient prescribed Oxycodone and/or Oxymorphone, highly unlikely that Oxycodone test would be negative.";
    }
    else {
        oxycodoneTestInterpretation = "Expected";
        oxycodoneTestExplanation = "Patient not prescribed Oxycodone or Oxymorphone, highly likely that Oxycodone test would be negative.";
    }

    }
}



function drugsProcess(){
    // go through each drug chosen
    for (let index = 0; index < drugs.length; index++) {
    var testRecommended = "";
    var interpretation = "";
    var explanation = "";
    var falsePositives = "";
    var drugName = "";

    // if drugs[index] == "drugName" do something
    if (drugs[index]=="Buprenorphine"){
        drugName = drugs[index];
        testRecommended = "Opiates or Oxycodone screening test are not appropriate for testing, consider confirmatory.";
        interpretation = "Unexpected";
        explanation = "Cannot determine if patient is or is not taking Buprenorphine, Buprenorphine not detected by Opiates or Oxycodone screening tests";
        falsePositives = "N/A";
    }
    if (drugs[index]=="Codeine"){
        drugName = drugs[index];
        testRecommended = "Opiates is appropriate test.";
        if (opiatesTestResult=="Positive"){
        interpretation = "Expected";
        explanation = "Patient taking Codeine, highly likely that Opiate test would be positive";
        } 
        else{
        interpretation = "Unexpected";
        explanation = "Patient taking Codeine, highly unlikely that Opiate test would be negative";
        }
        falsePositives = ">3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin";
    }
    if (drugs[index]=="Fentanyl"){
        drugName = drugs[index];
        testRecommended = "Opiates or Oxycodone screening test are not appropriate for testing, consider confirmatory";
        interpretation = "Unexpected";
        explanation = "Cannot determine if patient is or is not taking Fentanyl, Fentanyl not detected by Opiates or Oxycodone screening tests";
        falsePositives = "N/A";
    }
    if (drugs[index]=="Hydrocodone"){
        drugName = drugs[index];
        testRecommended = "Opiates is appropriate test";
        if (opiatesTestResult=="Positive"){
        interpretation = "Possible";
        explanation = "High dose or recent Hydrocodone can give a positive Opiates Test.";
        } 
        else{
        interpretation = "Possible";
        explanation = "Low or distant Hydrocodone dosing can give a negative Opiates Test.";
        }
        falsePositives = ">3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin";
    }
    if (drugs[index]=="Hydromorphone"){
        drugName = drugs[index];
        testRecommended = "Opiates is appropriate test";
        if (opiatesTestResult=="Positive"){
        interpretation = "Possible";
        explanation = "High dose or recent Hydromorphone can give a positive Opiates Test.";
        } 
        else{
        interpretation = "Possible";
        explanation = "Low or distant Hydromorphone dosing can give a negative Opiates Test.";
        }
        falsePositives = ">3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin";
    }
    if (drugs[index]=="Heroin-mam6"){
        drugName = "Heroin";
        testRecommended = "Opiates is appropriate test";
        if (opiatesTestResult=="Positive"){
        interpretation = "Expected";
        explanation = "Patient taking heroin, highly likely that Opiate test would be positive.";
        } 
        else{
        interpretation = "Unexpected";
        explanation = "Patient taking heroin, highly unlikely that Opiate test would be negative.";
        }
        falsePositives = ">3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin";
    }
    if (drugs[index]=="Meperidine"){
        drugName = drugs[index];
        testRecommended = "Opiates or Oxycodone screening test are not appropriate for testing, consider confirmatory.";
        interpretation = "Unexpected";
        explanation = "Cannot determine if patient is or is not taking Meperidine, Meperidine not detected by Opiates or Oxycodone screening tests";
        falsePositives = "N/A";
    }
    if (drugs[index]=="Methadone"){
        drugName = drugs[index];
        testRecommended = "Opiates or Oxycodone screening test are not appropriate for testing, consider confirmatory.";
        interpretation = "Unexpected";
        explanation = "Cannot determine if patient is or is not taking Methadone, Methadone not detected by Opiates or Oxycodone screening tests";
        falsePositives = "N/A";
    }
    if (drugs[index]=="Morphine"){
        drugName = drugs[index];
        testRecommended = "Opiates is appropriate test.";
        if (opiatesTestResult=="Positive"){
        interpretation = "Expected";
        explanation = "Patient taking morphine, highly likely that Opiate test would be positive.";
        } 
        else{
        interpretation = "Unexpected";
        explanation = "Patient taking morphine, highly unlikely that Opiate test would be negative.";
        }
        falsePositives = ">3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin";
    }
    if (drugs[index]=="Oxycodone"){
        drugName = drugs[index];
        testRecommended = "Oxycodone is the appropriate test.";
        if (oxycodoneTestResult=="Positive"){
        interpretation = "Expected";
        explanation = "Patient taking Oxycodone, highly likely Oxycodone test would be positive. \nPossible High dose or recent Oxycodone can give a positive Opiates Test..";
        } 
        else{
        interpretation = "Unexpected";
        explanation = "Patient taking Oxycodone, highly unlikely Oxycodone test would be negative. \n Possible High dose or recent Oxycodone can give a positive Opiates Test.";
        }
        falsePositives = ">3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin";
    }
    if (drugs[index]=="Oxymorphone"){
        drugName = drugs[index];
        testRecommended = "Oxycodone is the appropriate test.";
        if (oxycodoneTestResult=="Positive"){
        interpretation = "Expected";
        explanation = "Patient taking Oxymorphone, highly likely Oxycodone test would be positive. \nOxymorphone is not detected by Opiates Test.";
        } 
        else{
        interpretation = "Unexpected";
        explanation = "Patient taking Oxymorphone, highly unlikely Oxycodone test would be negative.\nOxymorphone is not detected by Opiates Test.";
        }
        falsePositives = ">3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin";
    }
    
    // add to output
    output = output + `<div class="text-block-34">${drugName}</div>
        <div class="text-block-34">${testRecommended}</div>
        <div class="text-block-34">${interpretation}</div>
        <div class="text-block-34">${explanation}</div>
        <div class="text-block-34">${falsePositives}</div>`;
    }
}


// FUNCTION Spit out output based on what is in the local variables
function interpret() {
    drugs = [];
    output = "";
    opiatesTestExplanation = "";
    // 1. Make sure that both tests have been run
        // if they haven't, say in RED - "Please select a result for opiates and oxycodone test. If you need to review test/drug interactions, please refer to What is an opiates screening test?"
    if(document.getElementById("opiatesTestNegative").value == undefined || document.getElementById("oxycodoneTestNegative").value == undefined){
    document.getElementById('result').style.color = "red";
    document.getElementById('result').innerHTML = `Invalid Entry: Please select a result for opiates and oxycodone test. If you need to review test/drug interactions, please refer to <a href="http://mytopcare.org/udt-calculator/screening-panels/">What is an opiates screening test?</a>`;
    return;
    }    
    // 2. if no drugs are chosen, negative results are expected if you have positive results, those results are unexpected

    // Sets/reset color in case it was turned red due to an error
    document.getElementById('result').style.color = "black";

    // Prepares array of drugs and medications currently being used
    createDrugArray();
    console.log(drugs);
    // Processes the inputs and generates the appropriate outputs for a doctor
    opiatesTestProcess();
    oxycodoneTestProcess();
    drugsProcess();

    document.getElementById('result').innerHTML = `<div>
    <p><strong>How do I interpret the results of the UDT?</strong></p>
    <div class="w-layout-grid grid-1-JF">
        <div>
        <div class="text-block-34 banner-JF">Results</div>
        </div>
        <div class="text-block-34 banner-JF">Interpretation</div>
        <div class="text-block-34 banner-JF">Explanation</div>
        <div class="text-block-34">Opiates Test: ${opiatesTestResult}</div>
        <div class="text-block-34">${opiatesTestInterpretation}</div>
        <div class="text-block-34">${opiatesTestExplanation}</div>
        <div class="text-block-34">Oxycodone Test: ${oxycodoneTestResult}</div>
        <div class="text-block-34">${oxycodoneTestInterpretation}</div>
        <div class="text-block-34">${oxycodoneTestExplanation}</div>
    </div>
    <p><strong> What tests should I order to look for the drugs my patient is taking? </strong></p>
    <div class="w-layout-grid grid-3-JF">
        <div class="text-block-34 banner-JF">Medications/<br/>Drugs taken</div>
        <div class="text-block-34 banner-JF">Test Recommended</div>
        <div class="text-block-34 banner-JF">Interpretation</div>
        <div class="text-block-34 banner-JF">Explanation</div>
        <div class="text-block-34 banner-JF">False Positives</div>
    </div>
    ${output}
    </div>` 
}
