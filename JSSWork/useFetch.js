console.log("hi");

// function fetchdata(){
// const response=fetch("https://dummyjson.com/recipes");
// response.then(data=>{
//     console.log(data);
//     data.json().then((res)=>{
//         //console.log(res.recipes[0].name);
//         console.log(res.recipes[0]);
//     //     let disp=`${res.recipes[0].id+" "+res.recipes[0].name+res.recipes[0].ingredients+res.recipes[0].instructions+res.recipes[0].mealType}`;
//     //    // document.getElementById("disp").innerHTML=res.recipes[0].name;
//     //     document.getElementById("disp").innerHTML=disp;
//     const recipe = res.recipes[0];
//     const tableHTML = `
//         <table border="1" cellspacing="0" cellpadding="5">
//             <tr>
//                 <th>ID</th>
//                 <td>${recipe.id}</td>
//             </tr>
//             <tr>
//                 <th>Name</th>
//                 <td>${recipe.name}</td>
//             </tr>
//             <tr>
//                 <th>Ingredients</th>
//                 <td>${recipe.ingredients.join(", ")}</td>
//             </tr>
//         </table>
//     `;
//     document.getElementById("disp").innerHTML = tableHTML;
//     })
// })
function fetchdata() {
    fetch("https://dummyjson.com/recipes")
        .then(response => response.json())
        .then(res => {
            // Start building the table HTML
            let tableHTML = `
                <table border="1" cellspacing="0" cellpadding="5">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Ingredients</th>
                    </tr>
            `;

            // Loop through each recipe and add a row for each one
            res.recipes.forEach(recipe => {
                tableHTML += `
                    <tr>
                        <td>${recipe.id}</td>
                        <td>${recipe.name}</td>
                        <td>${recipe.ingredients.join(", ")}</td>
                    </tr>
                `;
            });

            // Close the table
            tableHTML += `</table>`;

            // Insert the table into the 'disp' element
            document.getElementById("disp").innerHTML = tableHTML;
        })
.catch(error=>console.log(error))
.finally(()=>console.log("Hi,finally closed all the resources"))
}
