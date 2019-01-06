(d => {

    let random = d.getElementById("btnRandom");
    let goalKeepers = d.getElementById("goalKeeper");
    let defence = d.getElementById("defence");
    let midfield = d.getElementById("midfield");
    let attack = d.getElementById("attack");
    let teamOne = d.getElementById("teamOne");
    let teamTwo = d.getElementById("teamTwo");
    let teamOneName = d.getElementById("teamOneName");
    let teamTwoName = d.getElementById("teamTwoName");
    let btnTeamNameRandom = d.getElementById("btnTeamNameRandom");

    let goalKeepersArr = [];
    let defenceArr = [];
    let midfieldArr = [];
    let attackArr = [];

    function cleanNames(names){
        let cleanedNames = [];

         for (i = 0; i < names.length; i++){
            if (names[i] !== ''){
                cleanedNames.push(names[i]);
            }
        };

        return cleanedNames;
    }
 

    random.addEventListener("click", () => {

        let teamOneStore = [];
        let teamTwoStore = [];

        goalKeepersArr = cleanNames(goalKeepers.value.split('\n'));

        let counter = goalKeepersArr.length;
        
        while (counter > 0) {
            let index = Math.floor(Math.random() * counter);
            counter--;
            let temp = goalKeepersArr[counter];
            goalKeepersArr[counter] = goalKeepersArr[index];
            goalKeepersArr[index] = temp;
        }
            

        for (i = 0; i < goalKeepersArr.length; i++){
            if ( i % 2 === 0){
                teamOneStore.push(goalKeepersArr[i]);
            }else{
                teamTwoStore.push(goalKeepersArr[i]);
            }
        }
    
        defenceArr = cleanNames(defence.value.split('\n'));

        let counterDefence = defenceArr.length;
        
        while (counterDefence > 0) {
            let index = Math.floor(Math.random() * counterDefence);
            counterDefence--;
            let temp = defenceArr[counterDefence];
            defenceArr[counterDefence] = defenceArr[index];
            defenceArr[index] = temp;
        }

        for (i = 0; i < defenceArr.length; i++){
            if ( i % 2 === 0){
                teamOneStore.push(defenceArr[i]);
            }else{
                teamTwoStore.push(defenceArr[i]);
            }
        }
        midfieldArr = cleanNames(midfield.value.split('\n'));

        let counterMidfield = midfieldArr.length;
        
        while (counterMidfield > 0) {
            let index = Math.floor(Math.random() * counterMidfield);
            counterMidfield--;
            let temp = midfieldArr[counterMidfield];
            midfieldArr[counterMidfield] = midfieldArr[index];
            midfieldArr[index] = temp;
        }

        for (i = 0; i < midfieldArr.length; i++){
            if ( i % 2 === 0){
                teamOneStore.push(midfieldArr[i]);
            }else{
                teamTwoStore.push(midfieldArr[i]);
            }
        }

        attackArr = cleanNames(attack.value.split('\n'));

        let counterAttack= attackArr.length;
        
        while (counterAttack > 0) {
            let index = Math.floor(Math.random() * counterAttack);
            counterAttack--;
            let temp = attackArr[counterAttack];
            attackArr[counterAttack] = attackArr[index];
            attackArr[index] = temp;
        }

        for (i = 0; i < attackArr.length; i++){
            if ( i % 2 === 0){
                teamOneStore.push(attackArr[i]);
            }else{
                teamTwoStore.push(attackArr[i]);
            }
        }
            
    
        goalKeepersArr = [];
        defeneceArr = [];
        midfieldArr = [];
        attackArr = [];

        populateListOnDom (teamOne, teamOneStore);
        populateListOnDom (teamTwo, teamTwoStore); 
    
    });

    function populateListOnDom(paramList, paramStore){
        clearList(paramList);
        let fragment = d.createDocumentFragment();
        
        paramStore.forEach(string => {
            let li = d.createElement("li");
            li.textContent = string;
            li.classList.add("team-group-item");
            fragment.appendChild(li);

        });
        paramList.appendChild(fragment);
    }

    function clearList(paramList){
        paramList.textContent = "";
    }


    var myShows = ['Man Utd', 'Arsenal', 'Man City', 'Sunderland', 
    'Barnsley', 'Leeds FC', 'West Ham Utd', 'Bournemouth FC', 'Sheffield Wednesday',
    'Wrexham Town FC', 'Aston Villa', 'Bristol Rovers', 'Hull FC'];
  
    btnTeamNameRandom.addEventListener("click", () => {
    
        const shuffled = myShows.sort(() => .5 - Math.random());
        
        let teamNameOneShuffled = shuffled.slice(0,1);
        let teamNameOneString = teamNameOneShuffled.toString();
        teamOneName.value = teamNameOneString;

        let teamNameTwoShuffled = shuffled.slice(8,9);
        let teamNameTwoString = teamNameTwoShuffled.toString();
        teamTwoName.value = teamNameTwoString;
 
});




})(document);
