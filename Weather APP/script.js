window.addEventListener("load", ()=>{ // used to get location after page has loaded
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position =>{ //inbuilt javascript function that retrieves location, lat. & long.
            long = position.coords.longitude
            lat = position.coords.latitude
                //api gotten from darksky.net then quoted backwards, geolocation also changed to ${lat},${long}
            const api = `https://api.darksky.net/forecast/f45fd163aefb3c633f0a30138a25fe5b/${lat},${long}`;
        });

    }

});