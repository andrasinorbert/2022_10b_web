


var id= "#tablazat";
var caption="Táblázat cime";
var fejlec_lista=["fejlec1", "fejlec2", "fejlec3"];
var tbody=[
    ["adat1", "adat2", "adat3"],
    ["sor2oszlop1", "sor2oszlop2", "sor2oszlop3"],
    ["sor3oszlop1", "sor3oszlop2", "sor3oszlop3"],
    ["sor4oszlop1", "sor4oszlop2", "sor4oszlop3"]
]

table_create(id, caption, fejlec_lista, tbody);

function new_caption(input_id){
    let cap= $(input_id).value;
    table_create(id, cap, fejlec_lista, tbody);
}

let tables=$("table");
for(let i =0; i<tables.length; ++i){
    tables[i].classList.add("my_border");
}
let tds=$("td");
for(let i =0; i<tds.length; ++i){
    tds[i].classList.add("my_border");
}
let ths=$("th");
for(let i =0; i<ths.length; ++i){
    ths[i].classList.add("my_border");
}