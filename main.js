var Y,M,D,H,M,Details
Y = document.querySelector(".Year");
M = document.querySelector(".month");
D = document.querySelector(".Day");
H = document.querySelector(".Hours");
m = document.querySelector(".Minutes");
Details = document.querySelector(".Details")

var monthNames = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
    "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
];

const d = new Date()
Y.innerHTML = d.getFullYear();
M.innerHTML = d.getMonth() + 1;
D.innerHTML = d.getDate();
H.innerHTML = d.getHours();
m.innerHTML = d.getMinutes();
Details.innerHTML = monthNames[d.getMonth()];

function Reload() {
    location.reload();
}