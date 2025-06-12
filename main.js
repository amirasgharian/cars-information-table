let searchInput = document.querySelector("#searchInput");
let yearFilter = document.querySelector("#yearFilter") ;
let carsTable = document.querySelector("#carsTable");
let tBody = document.querySelector("tbody") ;
searchInput.removeAttribute("disabled") ;
yearFilter.removeAttribute("disabled");
let globalCars = [] ;
let carsYear = [] ;
let chooseCars = [] ;

fetchCarsData().then(
    function resolve(cars)
   {    
        for(let item of cars)
        {
            tBody.innerHTML +=
            `<tr>    
                <td>${item.name}</td>
                <td>${item.model}</td>
                <td>${item.year}</td>
                <td>${item.color}</td>
            </tr>`;
        }

        for(let i = 0 ;i < cars.length;i++)
        {

            carsYear.push(cars[i].year) ;
        }
        const minYear = Math.min(...carsYear) ;
        const maxYear = Math.max(...carsYear) ;
        for(let i = maxYear ; i >= minYear ;i--)
        {
            yearFilter.innerHTML +=
            `
                <option>
                    ${i}
                </option>
            `
        }
    }
);

function renderCars(cars)
{
    const emptyListString = "ماشینی یافت نشد" ; 
    let notFound = true; 
    if(searchInput.value =="")
    {
        if(yearFilter.value=="🔽 فیلتر بر اساس سال ساخت")
        {
            tBody.innerHTML = "";
            for(let item of globalCars)
            {
                tBody.innerHTML +=
                `<tr>    
                    <td>${item.name}</td>
                    <td>${item.model}</td>
                    <td>${item.year}</td>
                    <td>${item.color}</td>
                </tr>`;
            }
        }
        else
        {
            tBody.innerHTML ="" ;
            for(let i = 0 ; i < globalCars.length; i++)
            {
                if(yearFilter.value == globalCars[i].year)
                {
                    tBody.innerHTML +=
                    `<tr>    
                        <td>${globalCars[i].name}</td>
                        <td>${globalCars[i].model}</td>
                        <td>${globalCars[i].year}</td>
                        <td>${globalCars[i].color}</td>
                    </tr>`;
                    notFound = false ;
                }
            } 
        }  
    }
    else if(searchInput.value !="")
    {
        tBody.innerHTML ="";
        for(let i = 0 ; i < globalCars.length ;i++)
        {
            if(searchInput.value == globalCars[i].name.substring(0,searchInput.value.length) && (yearFilter.value == globalCars[i].year || yearFilter.value=="🔽 فیلتر بر اساس سال ساخت"))
            {
                tBody.innerHTML +=
                `<tr>    
                    <td>${globalCars[i].name}</td>
                    <td>${globalCars[i].model}</td>
                    <td>${globalCars[i].year}</td>
                    <td>${globalCars[i].color}</td>
                </tr>`;
                notFound = false ;
            }
        }
        if(notFound == true)
        {

            tBody.innerHTML +=
            `<tr>   
                <td colspan="4">${emptyListString}</td>
            </tr>`
        }
    }        
}

function showLoadingInTable() 
{
    tBody.innerHTML = 
    `
        <tr>
            <td id="spinner-container-td" colspan="4">
            <div class="spinner-container">
                <div class="spinner"></div>
            </div>
            </td>
       </tr>
    `
}

function createYearFilterList(cars) 
{
    const emptyListString = "ماشینی یافت نشد" ; 
    let notFound = true ;
    tBody.innerHTML ="";
    if(yearFilter.value=="🔽 فیلتر بر اساس سال ساخت" )
    {
        for(let i = 0 ; i < globalCars.length ;i++)
        {
            if(searchInput.value == globalCars[i].name.substring(0,searchInput.value.length) && (yearFilter.value == globalCars[i].year || yearFilter.value=="🔽 فیلتر بر اساس سال ساخت"))
            {
                tBody.innerHTML +=
                `<tr>    
                    <td>${globalCars[i].name}</td>
                    <td>${globalCars[i].model}</td>
                    <td>${globalCars[i].year}</td>
                    <td>${globalCars[i].color}</td>
                </tr>`;
                notFound = false ;
            }
        }
    }
    for(let i = 0 ; i < globalCars.length; i++)
    {
        if(yearFilter.value == globalCars[i].year && searchInput.value == globalCars[i].name.substring(0,searchInput.value.length))
        {
            tBody.innerHTML +=
            `<tr>    
                <td>${globalCars[i].name}</td>
                <td>${globalCars[i].model}</td>
                <td>${globalCars[i].year}</td>
                <td>${globalCars[i].color}</td>
            </tr>`;
            notFound = false ;
        }
    }
    if(notFound == true)
    {
        tBody.innerHTML +=
        `<tr>   
            <td colspan="4">${emptyListString}</td>
        </tr>`
    }
}

function applyFilters(e) 
{
    if(e.type =="input")
    {
        showLoadingInTable();
        setTimeout(renderCars,"2500")
    }
    else if(e.type =="change")
    {
        showLoadingInTable();
        setTimeout(createYearFilterList,"1000");
    }
}
searchInput.addEventListener("input",applyFilters);
yearFilter.addEventListener("change",applyFilters);
