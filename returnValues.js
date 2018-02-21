function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;
    return function(location){
        warningCounter++;
        let time = '';
        if(warningCounter === 0 || warningCounter >= 2){
            time = 'times';
        } else {
            time = 'time';
        };
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${time} today!`);
    }
}
const rocksWarning = hazardWarningCreator('Rocks on road');
const riot = hazardWarningCreator('Riot in the city');
const blizard = hazardWarningCreator('Blizard');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Main St and Pacific Ave');
rocksWarning('Main St and Pacific Ave');
riot('State St and Lake St');
blizard('Cook County');