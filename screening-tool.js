
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
        document.getElementById(clicked_id).style.backgroundColor = "#add9ba";
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
        document.getElementById(clicked_id).style.backgroundColor = "#add9ba";
        document.getElementById("opiatesTestPositive").value = false;
        document.getElementById("opiatesTestPositive").style.backgroundColor = "#77C1E4";
    }
    else {
        document.getElementById(clicked_id).value = true;
        document.getElementById(clicked_id).style.backgroundColor = "#add9ba";
        document.getElementById("opiatesTestNegative").value = false; 
        document.getElementById("opiatesTestNegative").style.backgroundColor = "#77C1E4";
    }
    }
    else{
    if(clicked_id=="oxycodoneTestNegative"){
        document.getElementById(clicked_id).value = true;
        document.getElementById(clicked_id).style.backgroundColor = "#add9ba";
        document.getElementById("oxycodoneTestPositive").value = false;
        document.getElementById("oxycodoneTestPositive").style.backgroundColor = "#77C1E4";
    }
    else {
        document.getElementById(clicked_id).value = true;
        document.getElementById(clicked_id).style.backgroundColor = "#add9ba";
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
        //opiatesTestInterpretation = "Expected";
        // finer granularity
        if(drugs.includes("Codeine") || drugs.includes("Morphine") || drugs.includes("Heroin-mam6")){
            opiatesTestInterpretation = "Expected";
            // build string
            var opiates = ""
            if(drugs.includes("Codeine")){
            opiates = opiates + "<b>Codeine</b>, ";
            }
            if(drugs.includes("Morphine")){
            opiates = opiates + "<b>Morphine</b>, ";
            }
            if (opiates.length>0){
            opiatesTestExplanation = `Patient prescribed or using ${opiates}highly likely that Opiate test would be positive. `;
            }
            if(drugs.includes("Heroin-mam6")){
            opiatesTestExplanation = opiatesTestExplanation + "Patient using <b>Heroin</b>, highly unlikely that Opiate test would be positive.";
            }
        }
        else{
            opiatesTestInterpretation = "Possible";
            // build string
            var nonOpiates = "";
            if (drugs.includes("Hydromorphone")){
            nonOpiates = nonOpiates + "<b>Hydromorphone</b>"
            }
            if (drugs.includes("Hydrocodone")){
            if (nonOpiates.length > 0){
                nonOpiates+= ", ";
            }
            nonOpiates = nonOpiates + "<b>Hydrocodone</b>"
            }
            if (drugs.includes("Oxycodone")){
            if (nonOpiates.length > 0){
                nonOpiates+= ", ";
            }
            nonOpiates = nonOpiates + "<b>Oxycodone</b>"
            }
            opiatesTestExplanation = `High dose or recent ${nonOpiates}, this can give a positive Opiates Test.`;
        }
        }
        else {
        opiatesTestInterpretation = "Unexpected";
        opiatesTestExplanation = "Patient not prescribed <b>Codeine</b>, <b>Morphine</b>, <b>Oxycodone</b>, <b>Hydromorphone</b> or <b>Hydromorphone</b> nor using <b>Heroin</b>, so highly unlikely UDT would be positive.";
        }
    }
    else if (opiatesTestResult == "Negative"){
    if(drugs.includes("Codeine") || drugs.includes("Morphine") || drugs.includes("Oxycodone") || drugs.includes("Heroin-mam6") || drugs.includes("Hydromorphone") || drugs.includes("Hydrocodone") ){
        // finer granularity
        if(drugs.includes("Codeine") || drugs.includes("Morphine") || drugs.includes("Heroin-mam6")){
            opiatesTestInterpretation = "Unexpected";
            // build string
            var opiates = ""
            if(drugs.includes("<b>Codeine</b>")){
            opiates = opiates + "Codeine, ";
            }
            if(drugs.includes("<b>Morphine</b>")){
            opiates = opiates + "Morphine, ";
            }
            if (opiates.length>0){
            opiatesTestExplanation = `Patient prescribed or using ${opiates}highly unlikely that Opiate test would be negative. `;
            }
            if(drugs.includes("Heroin-mam6")){
            opiatesTestExplanation = opiatesTestExplanation + "Patient using <b>Heroin</b>, highly unlikely that Opiate test would be negative.";
            }
        }
        else{
            opiatesTestInterpretation = "Possible";
            // build string
            var nonOpiates = "";
            if (drugs.includes("Hydromorphone")){
                nonOpiates = nonOpiates + "<b>Hydromorphone</b>"
            }
            if (drugs.includes("Hydrocodone")){
            if (nonOpiates.length > 0){
                nonOpiates+= ", ";
            }
            nonOpiates = nonOpiates + "<b>Hydrocodone</b>"
            }
            if (drugs.includes("Oxycodone")){
            if (nonOpiates.length > 0){
                nonOpiates+= ", ";
            }
            nonOpiates = nonOpiates + "<b>Oxycodone</b>"
            }
            opiatesTestExplanation = `Low dose or distant dosing of ${nonOpiates}, this can give a negative Opiates Test.`;
        }
        }
        else {
        opiatesTestInterpretation = "Expected";
        opiatesTestExplanation = "Patient not prescribed <b>Codeine</b>, <b>Morphine</b>, <b>Oxycodone</b>, <b>Hydromorphone</b> or <b>Hydromorphone</b> nor using <b>Heroin</b>,  highly likely UDT would be negative.";
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
            oxycodoneTestExplanation = "Patient prescribed <b>Oxycodone</b> and/or <b>Oxymorphone</b>, highly likely that Oxycodone test would be positive.";
        }
        else if(drugs.includes("Hydrocodone") || drugs.includes("Hydromorphone")){
            oxycodoneTestInterpretation = "Possible";  
            oxycodoneTestExplanation = "Patient prescribed <b>Hydrocodone</b> and/or <b>Hydromorphone</b>, possible that Oxycodone test would be positive from back metabolism of <b>Hydrocodone</b> to <b>Oxycodone</b> or of <b>Hydromorphone</b> to <b>Oxymorphone</b>.";
        }
        else {
        oxycodoneTestInterpretation = "Unexpected";
        oxycodoneTestExplanation = "Patient NOT prescribed <b>Oxycodone</b> or <b>Oxymorphone</b>, highly unlikely that Oxycodone test would be positive.";
        }
    }
    else if (oxycodoneTestResult == "Negative"){
    if(drugs.includes("Oxycodone") || drugs.includes("Oxymorphone")){
        oxycodoneTestInterpretation = "Unexpected";
        oxycodoneTestExplanation = "Patient prescribed <b>Oxycodone</b> and/or <b>Oxymorphone</b>, highly unlikely that Oxycodone test would be negative.";
    }
    else if(drugs.includes("Hydrocodone") || drugs.includes("Hydromorphone")){
        oxycodoneTestInterpretation = "Possible";  
        oxycodoneTestExplanation = "Patient prescribed <b>Hydrocodone</b> and/or <b>Hydromorphone</b>, possible that Oxycodone test would be negative. Low or distant Hydrocodone/Hydromorphone dosing can give a negative Oxycodone Test, however the test could also be positive from back metabolism of hydrocodone to Oxycodone.";
    }
    else {
        oxycodoneTestInterpretation = "Expected";
        oxycodoneTestExplanation = "Patient not prescribed <b>Oxycodone</b> or <b>Oxymorphone</b>, highly likely that Oxycodone test would be negative.";
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
        drugName = "<b>Buprenorphine</b>";
        testRecommended = "Opiates or Oxycodone screening test not appropriate for testing, consider confirmatory testing for <b>Buprenorphine</b>.";
        if ((opiatesTestResult=="Negative")&&(oxycodoneTestResult=="Negative")){
            interpretation = "Unexpected";
        }
        else {
            interpretation = "Unexpected";
        }
//         interpretation = "Unexpected";
        explanation = "Cannot determine if patient is or is not taking <b>Buprenorphine</b>, <b>Buprenorphine</b> not detected by Opiates or Oxycodone screening tests.";
        falsePositives = "N/A";
    }
    if (drugs[index]=="Codeine"){
        drugName = "<b>Codeine</b>";
        testRecommended = "Opiates is appropriate test.";
        if (opiatesTestResult=="Positive"){
        interpretation = "Expected";
        explanation = "Patient taking <b>Codeine</b>, highly likely that Opiates test would be positive.";
        } 
        else{
        interpretation = "Unexpected";
        explanation = "Patient taking <b>Codeine</b>, highly unlikely that Opiates test would be negative.";
        }
        falsePositives = ">3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin";
    }
    if (drugs[index]=="Fentanyl"){
        drugName = "<b>Fentanyl</b>";
        testRecommended = "Opiates or Oxycodone screening test not appropriate for testing, consider confirmatory testing for <b>Fentanyl</b>.";
        if ((opiatesTestResult=="Negative")&&(oxycodoneTestResult=="Negative")){
            interpretation = "Unexpected";
        }
        else {
            interpretation = "Unexpected";
        }
        explanation = "Cannot determine if patient is or is not taking <b>Fentanyl</b>, <b>Fentanyl</b> not detected by Opiates or Oxycodone screening tests.";
        falsePositives = "N/A";
    }
    if (drugs[index]=="Hydrocodone"){
        drugName = "<b>Hydrocodone</b>";
        testRecommended = "Opiates is appropriate test.";
        if (opiatesTestResult=="Positive" || oxycodoneTestResult=="Positive"){
        interpretation = "Possible";
        explanation = "High dose or recent <b>Hydrocodone</b> can result in a positive Opiates Test and/or Oxycodone Test. However, low or distant <b>Hydrocodone</b> dosing can result in a negative Opiates Test and/or Oxycodone Test.";
        } 
        else{
        interpretation = "Possible";
        explanation = "Low dose or distant <b>Hydrocodone</b> can result in a negative Opiates Test and/or Oxycodone Test. However, a high or recent <b>Hydrocodone</b> dosing can result in a positive Opiates Test and/or Oxycodone Test.";
        }
        falsePositives = ">3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin";
    }
    if (drugs[index]=="Hydromorphone"){
        drugName = "<b>Hydromorphone</b>";
        testRecommended = "Opiates is appropriate test.";
        if (opiatesTestResult=="Positive" || oxycodoneTestResult=="Positive"){
        interpretation = "Possible";
        explanation = "High dose or recent <b>Hydromorphone</b> can result in a positive Opiates Test and/or Oxycodone Test. However, low or distant <b>Hydromorphone</b> dosing can result in a negative Opiates Test and/or Oxycodone Test.";
        } 
        else{
        interpretation = "Possible";
        explanation = "Low dose or distant <b>Hydromorphone</b> can result in a negative Opiates Test and/or Oxycodone Test. However, a high or recent <b>Hydromorphone</b> dosing can result in a positive Opiates Test and/or Oxycodone Test.";
        }
        falsePositives = ">3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin";
    }
    if (drugs[index]=="Heroin-mam6"){
        drugName = "<b>Heroin</b>";
        testRecommended = "Opiates is appropriate test.";
        if (opiatesTestResult=="Positive"){
        interpretation = "Expected";
        explanation = "Patient taking <b>Heroin</b>, highly likely that Opiate test would be positive.";
        } 
        else{
        interpretation = "Unexpected";
        explanation = "Patient taking <b>Heroin</b>, highly unlikely that Opiate test would be negative.";
        }
        falsePositives = ">3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin";
    }
    if (drugs[index]=="Meperidine"){
        drugName = "<b>Meperidine</b>";
        testRecommended = "Opiates or Oxycodone screening test not appropriate for testing, consider confirmatory testing for <b>Meperidine</b>.";
        if ((opiatesTestResult=="Negative")&&(oxycodoneTestResult=="Negative")){
            interpretation = "Unexpected";
        }
        else {
            interpretation = "Unexpected";
        }
        explanation = "Cannot determine if patient is or is not taking <b>Meperidine</b>, Meperidine not detected by Opiates or Oxycodone screening tests";
        falsePositives = "N/A";
    }
    if (drugs[index]=="Methadone"){
        drugName = "<b>Methadone</b>";
        testRecommended = "Opiates or Oxycodone screening test not appropriate for testing, consider confirmatory testing for <b>Methadone</b>.";
        if ((opiatesTestResult=="Negative")&&(oxycodoneTestResult=="Negative")){
            interpretation = "Unexpected";
        }
        else {
            interpretation = "Unexpected";
        }
        explanation = "Cannot determine if patient is or is not taking <b>Methadone</b>, Methadone not detected by Opiates or Oxycodone screening tests";
        falsePositives = "N/A";
    }
    if (drugs[index]=="Morphine"){
        drugName = "<b>Morphine</b>";
        testRecommended = "Opiates is appropriate test.";
        if (opiatesTestResult=="Positive"){
        interpretation = "Expected";
        explanation = "Patient taking <b>Morphine</b>, highly likely that Opiate test would be positive.";
        } 
        else{
        interpretation = "Unexpected";
        explanation = "Patient taking <b>Morphine</b>, highly unlikely that Opiate test would be negative.";
        }
        falsePositives = ">3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin";
    }
    if (drugs[index]=="Oxycodone"){
        drugName = "<b>Oxycodone</b>";
        testRecommended = "Oxycodone is the appropriate test.";
        if (oxycodoneTestResult=="Positive"){
            interpretation = "Expected";
            explanation = "Patient taking <b>Oxycodone</b>, highly likely Oxycodone test and/or Opiates test would be positive.\nPossible high dose or recent <b>Oxycodone</b> can also give a positive Opiates Test.";
        } 
        else if(opiatesTestResult=="Positive"){
            interpretation = "Possible";
            explanation = "Possible high dose or recent <b>Oxycodone</b> can give a positive Opiates Test."; 
        }
        else{
        interpretation = "Unexpected";
        explanation = "Patient taking <b>Oxycodone</b>, highly unlikely Oxycodone test and Opiates test would be negative.";
        }
        falsePositives = ">3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin";
    }
    if (drugs[index]=="Oxymorphone"){
        drugName = "<b>Oxymorphone</b>";
        testRecommended = "Oxycodone is the appropriate test.";
        if (oxycodoneTestResult=="Positive"){
            interpretation = "Expected";
            explanation = "Patient taking <b>Oxymorphone</b>, highly likely Oxycodone test and/or Opiates test would be positive.\nPossible high dose or recent <b>Oxymorphone</b> can also give a positive Opiates Test.";
        } 
        else if(opiatesTestResult=="Positive"){
            interpretation = "Possible";
            explanation = "Possible high dose or recent <b>Oxymorphone</b> can give a positive Opiates Test."; 
        }
        else{
        interpretation = "Unexpected";
        explanation = "Patient taking <b>Oxymorphone</b>, highly unlikely Oxycodone test and Opiates test would be negative.";
        }
        falsePositives = ">3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin";
    }
    
    // add to output
    output = output + `<div class="text-block-34 shaded">${drugName}</div>
        <div class="text-block-34 shaded">${testRecommended}</div>
        <div class="text-block-34 shaded">${interpretation}</div>
        <div class="text-block-34 shaded">${explanation}</div>
        <div class="text-block-34 shaded">${falsePositives}</div>`;
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
        <div class="text-block-34 banner-JF">Results</div>
        <div class="text-block-34 banner-JF">Interpretation</div>
        <div class="text-block-34 banner-JF">Explanation</div>
        <div class="text-block-34 shaded">Opiates Test: ${opiatesTestResult}</div>
        <div class="text-block-34 shaded">${opiatesTestInterpretation}</div>
        <div class="text-block-34 shaded">${opiatesTestExplanation}</div>
        <div class="text-block-34 shaded">Oxycodone Test: ${oxycodoneTestResult}</div>
        <div class="text-block-34 shaded">${oxycodoneTestInterpretation}</div>
        <div class="text-block-34 shaded">${oxycodoneTestExplanation}</div>
    </div>
    <p><strong> What tests should I order to look for the drugs my patient is taking? </strong></p>
    <div class="w-layout-grid grid-3-JF">
        <div class="text-block-34 banner-JF">Medications/<br/>Drugs taken</div>
        <div class="text-block-34 banner-JF">Test Recommended</div>
        <div class="text-block-34 banner-JF">Interpretation</div>
        <div class="text-block-34 banner-JF">Explanation</div>
        <div class="text-block-34 banner-JF">False Positives</div>
        ${output}
    </div>
    </div>` 
}
