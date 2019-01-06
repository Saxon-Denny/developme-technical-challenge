(d => {
    //get elements by id from index.html
    let random = d.getElementById("btnRandom");
    let list = d.getElementById("list");
    let teamOne = d.getElementById("teamOne");
    let teamTwo = d.getElementById("teamTwo");
    let asideSelector = d.getElementById("asideSelector");
    let title = d.getElementById("changeTitle");
    let numberInput = d.getElementById("numberInput");
    let add = d.getElementById("add");
    let teamOneName = d.getElementById("teamOneName");
    let teamTwoName = d.getElementById("teamTwoName");
    let btnTeamNameRandom = d.getElementById("btnTeamNameRandom");
    //teamNumber gats value from asideSelector(dropdown menu)
    let teamNumber =  asideSelector.options[asideSelector.selectedIndex].value;
    //global array
    let namesStore = [];

    //event listener for when the user changes between options on the select menu
    //and changes the title accordingly
    asideSelector.addEventListener("change", () => {
        teamNumber = asideSelector.options[asideSelector.selectedIndex].value;
        //if the selection is anything other than a 'n' or 'n' aside return an error 
        if(Number(teamNumber) === 0){
            title.innerHTML= 'Select number of players'; 
        }else{
            //adjust title
            title.innerHTML= 'Enter ' + teamNumber + ' names';
        };
    });  

    //function to validate the amount of inputted names and check they are = to the dropdown selection
    function validateNames(names) {
        //if the selection is anything other than a 'n' or 'n' aside return an error
        if(Number(teamNumber) === 0){
            return 'Select a valid number of players';
        };
        //if the number entered is less than number selected, alert how many names to be entered
        if(names.length < Number(teamNumber)) {
            return 'You are missing '  + (Number(teamNumber) - names.length)  + ' name(s)';
        };
        //if the number entered is more than number selected, alert how many names can be entered
        if(names.length > Number(teamNumber)) {
            return 'You can only enter ' + teamNumber +  ' names';
        };
    };
    
    //loop over names and check for any spaces between name entries and push to new array
    //if any blanks, this will be alerted as 'you are missing...' as array will be too short
    //this function also removes any blank spaces after entered names
    function cleanNames(names){
        let cleanedNames = [];
        
        //loop over names
        for (i = 0; i < names.length; i++){
             //check they are not equal to nothing
            if (names[i] !== ''){
                //push to cleanedNames
                cleanedNames.push(names[i]);
            }
        };
        //return CleanedNames
        return cleanedNames;
    };

    //add an event listener for clicked of randomise button
    random.addEventListener("click", () => {
        
        //split cleanNames array and push to global array namesStore
        namesStore = cleanNames(list.value.split('\n'));

        //check if validation function has passed
        let validationMessage = validateNames(namesStore);
        if (validationMessage != null){
            //if not alert validation messages
            alert(validationMessage);
            //if all ok, return the below
            return;
        }
        
        //randomise the user input
        let counter = namesStore.length;
        
        //while elements remain to be shuffled
        while (counter > 0) {
            //pick a remaining element
            let index = Math.floor(Math.random() * counter);
            counter--;
            //swap it with the current element
            let temp = namesStore[counter];
            namesStore[counter] = namesStore[index];
            namesStore[index] = temp;
        };
        //loacl arrays to be pushed into wiith new data for splitting the teams
        let teamOneStore = [];
        let teamTwoStore = [];

        //once randomised loop over and check array index is divisible by 2
        for (i = 0; i < namesStore.length; i++){
            if ( i % 2 === 0){
                //if yes push to first local array
                teamOneStore.push(namesStore[i]);
            }else{
                //if no push to second local array
                teamTwoStore.push(namesStore[i]);
            };
        };
        //clear namesStore
        namesStore = [];

        //populate the dom with the two randomised arrays in to the two html divs
        populateListOnDom (teamOne, teamOneStore);
        populateListOnDom (teamTwo, teamTwoStore);  
    });

    //function to populate the randomised lists on the dom
    function populateListOnDom(paramList, paramStore){
        //clear previous dom list before populating
        clearList(paramList);
        //create document fragment
        let fragment = d.createDocumentFragment();
        
        //create li's for each array object and append them to the ol
        //with a class list of team-group-item
        paramStore.forEach(string => {
            let li = d.createElement("li");
            //make sure its a string
            li.textContent = string;
            //with a class list of team-group-item
            li.classList.add("team-group-item");
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
   //add an event listener for clicked of add button
    add.addEventListener("click", () => {
        //check there is info in the input field
        if(numberInput.value == ""){
            alert ('Enter a number to be added to the list');
        }else{
            //create an element on the drop down list of the users input for 'n' aside
            let option = d.createElement("option");
            //set it to equal the input value
            option.textContent = numberInput.value;
            //add a class list of option-item
            option.classList.add("option-item");
            //clear the input
            numberInput.value = "";
            //focus the input
            numberInput.focus();
            //insert into aside selector
            asideSelector.insertBefore(option, asideSelector.LastElementChild);
            //alert the number is now available
            alert ('Your number has now been added to the dropdown list');
        };
    });

    //array for list of random teams
    let randomTeams = ['Man Utd', 'Arsenal', 'Man City', 'Sunderland', 
    'Barnsley', 'Leeds FC', 'West Ham Utd', 'Bournemouth FC', 'Sheffield Wednesday',
    'Wrexham Town FC', 'Aston Villa', 'Bristol Rovers', 'Hull FC'];

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
