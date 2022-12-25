let countEl = document.getElementById("count-el");
let savedCount = document.querySelector(".saved-count");
const dataTable = document.querySelector("#data-table");
const thead = document.querySelector("#thead");
let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
  const date = new Date();
  const time = new Intl.DateTimeFormat('default',
  {
      hour12: true,
      hour: 'numeric',
      minute: 'numeric'
  }).format(date);
  thead.style = `display: table-header-group;`;
  dataTable.insertAdjacentHTML(
    "beforeend",
    `
<tbody>
  <tr>
    <td>${date.toString().slice(0, 3)}</td>
    <td>${date.toString().slice(4, 15)}</td>
    <td>${time}</td>
    <td>${count}</td>
  </tr>
</tbody>



`
  );
}

