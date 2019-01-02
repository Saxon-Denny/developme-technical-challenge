(d => {

   
    let random = d.getElementById("random");
    let list = d.getElementById("list");
    let teamOne = d.getElementById("team-one");
    let teamTwo = d.getElementById("team-two");
    var asideSelector = d.getElementById("myList");
    var title = document.getElementById("title");
    
    

 
    let store = [];
    console.log(store);

    
    asideSelector.addEventListener("change", () => {
 
        let teamNumber = asideSelector.options[asideSelector.selectedIndex].value;
        title.innerHTML= 'Please enter ' + teamNumber + ' names';
    });  
  

    random.addEventListener("click", () => {

        store = list.value.split('\n');
        
        //for(var i = 0; i < store.length; i++) {
           // if (store[i] === '') {
            //    alert('please enter 10 names')
            //}else{


            let counter = store.length;
            let teamNumber = asideSelector.options[asideSelector.selectedIndex].value;
           
            if(counter === Number(teamNumber)){
                while (counter > 0) {
                    let index = Math.floor(Math.random() * counter);
                    counter--;
                    let temp = store[counter];
                    store[counter] = store[index];
                    store[index] = temp;
                }
                
                let teamOneStore = [];
                let teamTwoStore = [];

            for (i = 0; i < store.length; i++){
                if ( i % 2 === 0){
                    teamOneStore.push(store[i]);
                }else{
                    teamTwoStore.push(store[i]);
                }
            }
                
                populateListOnDom (list, store);
                clearList(list);
                store = [];

                populateListOnDom (teamOne, teamOneStore);
                console.log(teamOneStore);
                populateListOnDom (teamTwo, teamTwoStore);

            }else if(Number(teamNumber) === 0){
                alert('Please select a valid team number');

            }else if(counter < Number(teamNumber)) {
                alert('You must enter ' + teamNumber +  ' names');

            }else{
                alert('You can only enter ' + teamNumber +  ' names')
            }
       // }}
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
