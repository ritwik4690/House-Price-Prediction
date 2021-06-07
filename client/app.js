function getBathValue(){
    var uiBathrooms = $("[name='uiBathrooms']");
    for(var i in uiBathrooms){
        if(uiBathrooms[i].checked){
            return parseInt(i)+1; //get no. of bathrooms
        }
    }
    return -1; //Invalid inputs
}

function getBHKValue(){
    var uiBHK = $("[name='uiBHK']");
    // console.log(uiBHK)
    // console.log(uiBHK[1].checked);
    for(var i in uiBHK){
        if(uiBHK[i].checked){
            return parseInt(i)+1; // get no. of bhk
        }
    }
    return -1; // Invalid inputs
}




function onClickedEstimatePrice(){
    console.log("estimate button clicked");
    const sqft = document.getElementById("uiSqft");
    const bhk = getBHKValue();
    const bathrooms = getBathValue();
    const location = document.getElementById("uiLocations");
    const estPrice = document.getElementById("uiEstimatedPrice");
    // console.log("bhk",bhk);
    // console.log("bath",bathrooms);
    // const url = "http://127.0.0.1:5000/predict";

    const url = "/api/predict"

    $.post(url,{
        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bathrooms,
        location: location.value
    },function(data, status){
        console.log(data.estimated_price);
        estPrice.innerHTML = "<h2>Rs. "+data.estimated_price.toString()+" Lakhs</h2>";
        console.log(status);
    });
}


function onPageLoad(){
    console.log("loaded document")
    // const url = "http://127.0.0.1:5000/locations";
    const url = "/api/locations"
    $.get(url, function(data, status){
        console.log("got locations");
        if(data){
            const locations = data.locations;
            const uiLocations = document.getElementById("uiLocations");
            $('#uiLocations').empty();
            for(var i in locations){
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    })
}

window.onload = onPageLoad;