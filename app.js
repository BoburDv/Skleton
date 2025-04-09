document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", function(){
        document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("tab-active"));
        tab.classList.add("tab-active");

        let url = "";
        if(tab.id == "tab1"){
            url = "https://json-api.uz/api/project/fn37/products"
        } 
        else if(tab.id == "tab2"){
            url = "https://json-api.uz/api/project/fn37/students"
        } 
        else if(tab.id == "tab3"){
            url = "https://json-api.uz/api/project/fn37/animals"
        } 
        else if(tab.id == "tab4"){
            url = "https://json-api.uz/api/project/fn37/cars"
        }

        elLoader.classList.remove("hidden")
        elMain.classList.add("hidden")

        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                render(result);
            })
    })
})

const elMain = document.getElementById("main"), elLoader = document.getElementById("loader")

function render({data}) {
    elLoader.classList.add("hidden")
    elMain.innerHTML = "";
    data.forEach((element) => {
        const {name, description, price} = element;
        elMain.innerHTML += `
        <li>
        <div class="card bg-base-100 shadow-sm">
        <div class="card-body">
          <h2 class="card-title">${name}</h2>
          <p class="line-clamp-3">${description}</p>
          <div class="justify-end card-actions">
            <button class="btn btn-primary">${price}</button>
          </div>
        </div>
        </div>
        </li>
        `
    })
    elMain.classList.add("grid")
    elMain.classList.remove("hidden")
}

fetch("https://json-api.uz/api/project/fn37/products")
.then((result) => {
    return result.json()
})
.then((result) => {
    render(result)
})