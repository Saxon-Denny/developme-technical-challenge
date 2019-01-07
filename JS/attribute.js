(d => {
    //get elements by id from index.html
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
    //global arrays for each set attribute
    let goalKeepersArr = [];
    let defenceArr = [];
    let midfieldArr = [];
    let attackArr = [];

    //remove blank spaces between names entered
    //this will not notify the user as no amount of names to be inputted has been selected
    function cleanNames(names){
        let cleanedNames = [];

        //loop over names
        for (i = 0; i < names.length; i++){
             //check they are not equal to nothing
            if (names[i] !== ''){
                //push to cleanedNames
                cleanedNames.push(names[i]);
            };
        };
        //return cleanedNames
        return cleanedNames;
    };
 
    //add event listener to random button
    random.addEventListener("click", () => {
        //use these two arrays to store randomised data in
        let teamOneStore = [];
        let teamTwoStore = [];
        //split and push the value of the input and cross reference with cleaned names
        goalKeepersArr = cleanNames(goalKeepers.value.split('\n'));

        //if text box is empty and nothing is pushed to the array
        //alert the user
        if (goalKeepersArr <= 0){
            alert('Enter at least two names in Goal Keepers')
        }else{

            //randomise the array
            let counter = goalKeepersArr.length;
            
            //while elements remain to be shuffled
            while (counter > 0) {
                //pick a remaining element
                let index = Math.floor(Math.random() * counter);
                counter--;
                //swap it with the current element
                let temp = goalKeepersArr[counter];
                goalKeepersArr[counter] = goalKeepersArr[index];
                goalKeepersArr[index] = temp;
            };
                
            //once randomised loop over and check array index is divisible by 2
            for (i = 0; i < goalKeepersArr.length; i++){
                if ( i % 2 === 0){
                    //if yes push to first local array
                    teamOneStore.push(goalKeepersArr[i]);
                }else{
                    //if no push to second local array
                    teamTwoStore.push(goalKeepersArr[i]);
                };
            };
         
            //split and push the value of the input and cross reference with cleaned names
            defenceArr = cleanNames(defence.value.split('\n'));

            //if text box is empty and nothing is pushed to the array
            //alert the user
            if (defenceArr <= 0){
                alert('Enter at least two names in Defence')
            }else{
        
                //randomise the array
                let counterDefence = defenceArr.length;
                
                //while elements remain to be shuffled
                while (counterDefence > 0) {
                    //pick a remaining element
                    let index = Math.floor(Math.random() * counterDefence);
                    counterDefence--;
                    //swap it with the current element
                    let temp = defenceArr[counterDefence];
                    defenceArr[counterDefence] = defenceArr[index];
                    defenceArr[index] = temp;
                };

                //once randomised loop over and check array index is divisible by 2
                for (i = 0; i < defenceArr.length; i++){
                    if ( i % 2 === 0){
                        //if yes push to first local array
                        teamOneStore.push(defenceArr[i]);
                    }else{
                        //if no push to second local array
                        teamTwoStore.push(defenceArr[i]);
                    };
                };

                //split and push the value of the input and cross reference with cleaned names
                midfieldArr = cleanNames(midfield.value.split('\n'));

                //if text box is empty and nothing is pushed to the array
                //alert the user
                if (midfieldArr <= 0){
                    alert('Enter at least two names in Midfield')
                }else{

                    //randomise the array
                    let counterMidfield = midfieldArr.length;
                    
                    //while elements remain to be shuffled
                    while (counterMidfield > 0) {
                        //pick a remaining element
                        let index = Math.floor(Math.random() * counterMidfield);
                        counterMidfield--;
                        //swap it with the current element
                        let temp = midfieldArr[counterMidfield];
                        midfieldArr[counterMidfield] = midfieldArr[index];
                        midfieldArr[index] = temp;
                    };

                    //once randomised loop over and check array index is divisible by 2
                    for (i = 0; i < midfieldArr.length; i++){
                        if ( i % 2 === 0){
                            //if yes push to first local array
                            teamOneStore.push(midfieldArr[i]);
                        }else{
                            //if no push to second local array
                            teamTwoStore.push(midfieldArr[i]);
                        };
                    };
        
                    //split and push the value of the input and cross reference with cleaned names
                    attackArr = cleanNames(attack.value.split('\n'));

                    //if text box is empty and nothing is pushed to the array
                    //alert the user
                    if (attackArr <= 0){
                        alert('Enter at least two names in Attack')
                    }else{

                        //randomise the array
                        let counterAttack= attackArr.length;
                        
                        //while elements remain to be shuffled
                        while (counterAttack > 0) {
                            //pick a remaining element
                            let index = Math.floor(Math.random() * counterAttack);
                            counterAttack--;
                            //swap it with the current element
                            let temp = attackArr[counterAttack];
                            attackArr[counterAttack] = attackArr[index];
                            attackArr[index] = temp;
                        };
                        //once randomised loop over and check array index is divisible by 2
                        for (i = 0; i < attackArr.length; i++){
                            if ( i % 2 === 0){
                                //if yes push to first local array
                                teamOneStore.push(attackArr[i]);
                            }else{
                                //if no push to second local array
                                teamTwoStore.push(attackArr[i]);
                            };
                        };
            
                        //clear arrays
                        goalKeepersArr = [];
                        defeneceArr = [];
                        midfieldArr = [];
                        attackArr = [];

                        //populate the dom with the two randomised arrays in to the two html divs
                        populateListOnDom (teamOne, teamOneStore);
                        populateListOnDom (teamTwo, teamTwoStore); 
                    };
                };
            };
        };
    });
    
    //function to populate the randomised lists on the dom
    function populateListOnDom(paramList, paramStore){
        //clear previous dom list before populating
        clearList(paramList);
        //create document fragment
        let fragment = d.createDocumentFragment();
        
        //create li's for each array object and append them to the ol
        paramStore.forEach(string => {
            let li = d.createElement("li");
            //make sure its a string
            li.textContent = string;
            //with a class list of team-group-item
            li.classList.add("team-group-item-attribute");
            //append child fragment with li
            fragment.appendChild(li);

        });
        //append fragment to paramList Child
        paramList.appendChild(fragment);
    };
    //function to clear the populated list on the dom
    function clearList(paramList){
        paramList.textContent = "";
    };

    //array for list of random teams
    let randomTeams = ['Man Utd', 'Arsenal', 'Man City', 'Sunderland', 
    'Barnsley', 'Liverpool', 'Leeds FC', 'West Ham Utd', 'Bournemouth FC', 'Sheffield Wednesday',
    'Wrexham Town FC', 'Aston Villa', 'Bristol Rovers', 'Hull FC',];

    //add event listener to button
    btnTeamNameRandom.addEventListener("click", () => {
        //shuffle teams  in the array
        const shuffled = randomTeams.sort(() => .5 - Math.random());
        
        //slice the 1st array item of shuffled array out 
        let teamNameOneShuffled = shuffled.slice(0,1);
        //return it as a string
        let teamNameOneString = teamNameOneShuffled.toString();
        //change the text box value to show the random selection
        teamOneName.value = teamNameOneString;

        //slice the 8th array item of shuffled array out 
        let teamNameTwoShuffled = shuffled.slice(8,9);
        //return it as a string
        let teamNameTwoString = teamNameTwoShuffled.toString();
        //change the text box value to show the random selection
        teamTwoName.value = teamNameTwoString;
    });

})(document);
