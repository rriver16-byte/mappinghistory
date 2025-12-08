//fetching from an API



async function fetchLandmark(){

    await fetch("https://data.cityofnewyork.us/api/v3/views/buis-pvji/query.json?query=SELECT%20the_geom%2C%20objectid%2C%20borough%2C%20block%2C%20lot%2C%20address%2C%20bbl%2C%20lpc_name%2C%20lpc_lpnumb%2C%20lpc_sitede%2C%20lpc_sitest%2C%20lpc_altern%2C%20desdate%2C%20landmarkty%2C%20url_report%20WHERE%20((%60desdate%60%20%3E%20%272025-01-01%27)%20AND%20%60desdate%60%20IS%20NOT%20NULL)&app_token=naUk2Xt1bg1bqMjUEP74skogG")
    .then((response) => response.json())
    .then((data) => {
        
        displayLandmark(data[0]);
        }
         
         );
}
     
    
       



function displayLandmark(data) {
    
    
        
    const landmarkDisplay = document.querySelector("#landmark");
  
    landmarkDisplay.innerHTML = 
        `<div>
                <ul>
                    <li>
                        <p>${data.lpc_name}</p>
                    </li>
                    <li>
                        <p>${data.address}</p>
                        
                    </li>
                    <li>
                        <p><a href=${data.url_report}">Designation Report</p>
                    </li>
                </ul>  
            </div>`;
}
            


document.querySelector('#generate').addEventListener("click", fetchLandmark);

fetchLandmark();