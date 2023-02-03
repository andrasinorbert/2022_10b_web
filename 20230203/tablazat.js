function caption_create(caption){
    let start_tag="<caption>";
    let end_tag="</caption>";
    let tartalom=caption;
    return start_tag+tartalom+end_tag;
}

function th_create(egy_fejlec_szovege){
    let start_tag="<th>";
    let end_tag="</th>";
    let tartalom=egy_fejlec_szovege;
    return start_tag+tartalom+end_tag;
}

function td_create(adat){
    let start_tag="<td>";
    let end_tag="</td>";
    let tartalom=adat;
    return start_tag+tartalom+end_tag;
}

function tr_create(adat_lista, tartalom_tipus){
    let start_tag="<tr>";
    let end_tag="</tr>";
    let tartalom="";
    for(let i=0;i<fejlec_lista.length;++i){
        if(tartalom_tipus=="th"){
            tartalom+=th_create(adat_lista[i]);
        }else{
            tartalom+=td_create(adat_lista[i]);
        }
    }
    return start_tag+tartalom+end_tag;
}

function thead_create(fejlec_lista){
    let start_tag="<thead>";
    let end_tag="</thead>";
    let tartalom=tr_create(fejlec_lista, "th");
    return start_tag+tartalom+end_tag;
}


function tbody_create(adatok_tomb){
    let start_tag="<tbody>";
    let end_tag="</tbody>";
    let tartalom="";
    for(let i=0; i<adatok_tomb.length;++i){
        tartalom+=tr_create(adatok_tomb[i], "td");
    }
    return start_tag+tartalom+end_tag;
}

function $(param){
    /*
    #: id
    else: Tagname
    */
    if(param[0]=='#'){
        return document.getElementById(
            param.slice(1));
    }else{
        return document.getElementsByTagName(param);
    }
}

function table_create(id, cap, fejlec_lista, adatok_tomb){
    let start_tag="<table>";
    let end_tag="</table>";
    let tartalom=
        caption_create(cap)
        +thead_create(fejlec_lista)
        +tbody_create(adatok_tomb);
    $(id).innerHTML=
        start_tag
        +tartalom
        +end_tag;
}

