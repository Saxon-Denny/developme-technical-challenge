(d => {

    let random = d.getElementById("random");
    let list = d.getElementById("list");
    let teamOne = d.getElementById("team-one");
    let teamTwo = d.getElementById("team-two");
    let asideSelector = d.getElementById("myList");
    let title = document.getElementById("title");
    let teamNumber = asideSelector.options[asideSelector.selectedIndex].value;
    
    let namesStore = [];

    asideSelector.addEventListener("change", () => {
        teamNumber = asideSelector.options[asideSelector.selectedIndex].value;
        title.innerHTML= 'Please enter ' + teamNumber + ' names';
    });  

    function validateNames(names) {
        if(Number(teamNumber) === 0){
            return 'Please select a valid team number';
        }

        if(names.length < Number(teamNumber)) {
            return 'You must enter ' + teamNumber +  ' names';
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
            
        populateListOnDom (list, namesStore);
        clearList(list);
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
            li.classList.add("list-group-item");
            fragment.appendChild(li);

        });
        paramList.appendChild(fragment);
    }

    function clearList(paramList){
        paramList.textContent = "";
    }

})(document);
