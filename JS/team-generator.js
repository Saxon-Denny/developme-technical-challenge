(d => {

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

    let teamNumber =  asideSelector.options[asideSelector.selectedIndex].value;
    let namesStore = [];
    console.log(namesStore)

    asideSelector.addEventListener("change", () => {
        teamNumber = asideSelector.options[asideSelector.selectedIndex].value;
        if(Number(teamNumber) === 0){
            title.innerHTML= 'Select number of players'; 
        }else{
        title.innerHTML= 'Enter ' + teamNumber + ' names';
        }
    });  

    function validateNames(names) {
        if(Number(teamNumber) === 0){
            return 'Select a valid number of players';
        }

        if(names.length < Number(teamNumber)) {
            return 'You are missing '  + (Number(teamNumber) - names.length)  + ' name(s)';
        }

        if(names.length > Number(teamNumber)) {
            return 'You can only enter ' + teamNumber +  ' names';
        }
    } 
    
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
        
        namesStore = cleanNames(list.value.split('\n'));

        let validationMessage = validateNames(namesStore);
        if (validationMessage != null){
            alert(validationMessage);
            return;
        }

        let counter = namesStore.length;
        
        while (counter > 0) {
            let index = Math.floor(Math.random() * counter);
            counter--;
            let temp = namesStore[counter];
            namesStore[counter] = namesStore[index];
            namesStore[index] = temp;
        }
            
        let teamOneStore = [];
        let teamTwoStore = [];

        for (i = 0; i < namesStore.length; i++){
            if ( i % 2 === 0){
                teamOneStore.push(namesStore[i]);
            }else{
                teamTwoStore.push(namesStore[i]);
            }
        }
            
        namesStore = [];

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

    add.addEventListener("click", () => {
        if(numberInput.value == ""){
            alert ('Enter a number to be added to the list');
        }else{
            let option = d.createElement("option");
            option.textContent = numberInput.value;
            option.classList.add("option-item");
            numberInput.value = "";
            numberInput.focus();
            asideSelector.insertBefore(option, asideSelector.LastElementChild);
            alert ('Your number has now been added to the dropdown list');
        };
    });

    var myShows = ['Man Utd', 'Arsenal', 'Man City', 'Sunderland', 
    'Barnsley', 'Leeds FC', 'West Ham Utd', 'Bournemouth FC', 'Sheffield Wednesday',
    'Wrexham Town FC', 'Aston Villa', 'Bristol Rovers', 'Hull FC'];
    console.log(myShows);
    btnTeamNameRandom.addEventListener("click", () => {
    
        const shuffled = myShows.sort(() => .5 - Math.random());
        
        let teamNameOneShuffled = shuffled.slice(0,1);
        let teamNameOneString = teamNameOneShuffled.toString();
        teamOneName.value = teamNameOneString;

        let teamNameTwoShuffled = shuffled.slice(8,9);
        let teamNameTwoString = teamNameTwoShuffled.toString();
        teamTwoName.value = teamNameTwoString;
 
});


var myShows = ['Man Utd', 'Arsenal', 'Man City', 'Sunderland', 
'Barnsley', 'Leeds FC', 'West Ham Utd', 'Bournemouth FC', 'Sheffield Wednesday',
'Wrexham Town FC', 'Aston Villa', 'Bristol Rovers', 'Hull FC'];
console.log(myShows);
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
