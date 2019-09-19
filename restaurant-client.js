function LoadTables() {

    const url = window.location.origin + "/api/tables";
    console.log(url);
    fetch(url)
    .then((res) => res.json())
    .then(function (data) {
        console.log(data);
        if (!data) return;

        let i = 0;
        const tableSection = document.getElementById("tableSection");

        data.forEach(element => {

            
            const firstDiv = document.createElement("div");
            i++;
            let elemId = "tableWell-" + i;
            let elemhtml = `<h4><span class="label label-primary">${i}</span># ${element.name}</h4>`
                        
            firstDiv.className = "well";
            firstDiv.setAttribute("id",elemId);
            firstDiv.innerHTML = elemhtml;

            tableSection.append(firstDiv);                    
            
        });        
        
    });
  };

  function LoadWaitList() {

    const url = window.location.origin + "/api/waitlist";
    console.log(url);
    fetch(url)
    .then((res) => res.json())
    .then(function (data) {
        console.log(data);
        if (!data) return;

        let i = 0;
        const waitlistSection = document.getElementById("waitListSection");

        data.forEach(element => {

            
            const firstDiv = document.createElement("div");
            i++;
            let elemId = "tableWell-" + i;
            let elemhtml = `<h4><span class="label label-primary">${i}</span># ${element.name}</h4>`
                        
            firstDiv.className = "well";
            firstDiv.setAttribute("id",elemId);
            firstDiv.innerHTML = elemhtml;

            waitlistSection.append(firstDiv);                    
            
        });        
        
    });
  };


  LoadTables();
  LoadWaitList();