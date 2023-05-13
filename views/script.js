const Price=document.getElementById("P");
const Dish=document.getElementById("D");
const Table =document.getElementById("T");
const btn = document.getElementById("btn");
const u1=document.getElementById("t1");
const u2=document.getElementById("t2");
const u3=document.getElementById("t3");

let id;

function showOnScreen(user) {
  if(user.Table === "table1"){
    const li = document.createElement("li");
  li.setAttribute("id", user.id);
  const textNode = `${user.Price}-  ${user.Dish}-  ${user.Table}`;
  li.appendChild(document.createTextNode(textNode));
  u1.appendChild(li);

  var deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  
  deleteBtn.appendChild(document.createTextNode("DELETE"));

  li.appendChild(deleteBtn);
  expense.appendChild(li);

  }else if(user.Table === "table2"){
    const li = document.createElement("li");
  li.setAttribute("id", user.id);
  const textNode = `${user.Price}-  ${user.Dish}-  ${user.Table}`;
  li.appendChild(document.createTextNode(textNode));
  u2.appendChild(li);

  var deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  
  deleteBtn.appendChild(document.createTextNode("DELETE"));

  li.appendChild(deleteBtn);
  expense.appendChild(li);

  }else if(user.Table === "table3"){
    const li = document.createElement("li");
  li.setAttribute("id", user.id);
  const textNode = `${user.Price}-  ${user.Dish}-  ${user.Table}`;
  li.appendChild(document.createTextNode(textNode));
  u3.appendChild(li);

  var deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  
  deleteBtn.appendChild(document.createTextNode("DELETE"));

  li.appendChild(deleteBtn);
  expense.appendChild(li);

  }
  

  
}



window.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await axios.get("http://localhost:3000/");
    // console.log(response)
    response.data.forEach((user) => {
      showOnScreen(user);
    });
    showTotalExpense();
  } catch (err) {
    console.error(err);
  }
});
// listen on submit
btn.addEventListener("click", addItem);

async function addItem(e) {
  e.preventDefault();
  
    var user = {
      Price: Price.value,
      Dish: Dish.value,
      Table: Table.value,
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/user",
        user
      );
      showOnScreen(response.data);
      
    } catch (err) {
      console.log(err);
    }
  }

//Remove item
u1.addEventListener("click", removeItem);
u2.addEventListener("click", removeItem);
u3.addEventListener("click", removeItem);

async function removeItem(e) {
  try {
    if (e.target.classList.contains("delete")) {
      if (confirm("Are You Sure?")) {
        var li = e.target.parentElement;
        id = li.id;
        await axios.delete(`http://localhost:3000/delete/${id}`);
        expense.removeChild(li);
      }
    }
  } catch (err) {
    console.log(err);
  }
}


