
let form = document.querySelector("#form")
let items = document.querySelector(".items")

let firstinput = document.getElementById("input1")
let secinput = document.getElementById("input2")
let thirdinput = document.getElementById("input3")


/* -------------------------------------------------------------------------- */
/*                                 Add Expence                                */
/* -------------------------------------------------------------------------- */

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (items.children[0].classList.contains("list_heading")) {
        items.removeChild(items.children[0])

    }
    let enteredName = firstinput.value
    let enteredPrice = secinput.value
    let enteredcatagory = thirdinput.value
    items.innerHTML += `<li class="childs"><span class="childSpan">${enteredName}</span><span class="childSpan">${enteredPrice}
</span><span class="childSpan">${enteredcatagory}</span><button class="edit-btn">Edit</button><button class="deleteBtn">Delete</button></li>`

    // also adding to the local storage
    let obj = {
        Expancename: firstinput.value,
        Price: secinput.value,
        Catagory: thirdinput.value

    }


    localStorage.setItem(enteredName, JSON.stringify(obj))

    firstinput.value = ""
    secinput.value = ""
    thirdinput.value = ""

})



/* -------------------------------------------------------------------------- */
/*                               Delete Expence                               */
/* -------------------------------------------------------------------------- */


items.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteBtn")) {
        if (confirm("Are you Sure ? ")) {
            let li = e.target.parentElement
            items.removeChild(li)

            localStorage.removeItem(li.children[0].textContent)
        }

        if (items.children.length == 0) {
            items.innerHTML += "<h1 class='list_heading'> You didn't Spend Anything !! </h1>"
        }


    }
})



/* -------------------------------------------------------------------------- */
/*                                 edit button                                */
/* -------------------------------------------------------------------------- */
items.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-btn")) {
        let li = e.target.parentElement
        firstinput.value = li.children[0].innerText
        secinput.value = li.children[1].innerText
        thirdinput.value = li.children[2].innerText
        document.querySelector("#addExpenceBtn").value = "Edit Expence"
        items.removeChild(li)
        if (items.children.length == 0) {
            items.innerHTML += "<h1 class='list_heading'> You didn't Spend Anything !! </h1>"
        }
        localStorage.removeItem(li.children[0].textContent)
        document.querySelector("#addExpenceBtn").value = "Add Expence"


    }
})

