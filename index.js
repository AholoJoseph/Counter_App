 let count_entered = document.getElementById("count")
 console.log(count_entered)

 let save_dpl = document.getElementById("save_el")
 console.log(save_dpl)

 let count = 0
 function increment() {
     count += 1
     count_entered.textContent = count
 }


 function decrement() {
    count -= 1  
    count_entered.textContent = count
 }

function save() {
    let countString = count + " - "
    save_dpl.textContent += countString
    console.log(count)
    count_entered.textContent = 0
    count = 0
    
}







