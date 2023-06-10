const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select_btn"),
searchInput = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");


let countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Côte d'Ivoire", "Democratic People's Republic of Korea", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia (Federated States of)", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Republic of Korea", "Republic of Moldova", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa"];


function addCountry(selectedCountry){
    options.innerHTML = "";
    countries.forEach(country => {
        // if selected country and country value is same then add selected class
        let isSelected = country == selectedCountry ? "selected" : "";
        // adding each country inside li and inserting all li inside options tag
        let li =`<li onclick ="updateName(this)" class="${isSelected}">${country}</li>`;
        // adding each country li inside li and inserting all li inside options tag
        options.insertAdjacentHTML("beforeend",li)
    });
}
addCountry();

function updateName(selectedli){
    searchInput.value = "";
    addCountry(selectedli.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedli.innerText;
}

searchInput.addEventListener("keyup", () =>{
    let arr =[]; //  creating empty array
    let searchedVal = searchInput.value.toLocaleLowerCase();
    //returnning all countries from array wich start with user searched value
    // and mapping returned country with li and joining then
    arr = countries.filter(data =>{
        return data.toLocaleLowerCase().startsWith(searchedVal);
    }).map(data=> `<li onclick ="updateName(this)">${data}</li>`).join("");
    options.innerHTML = arr ? arr : `<p>Oops! Country not found</p>`;
});


selectBtn.addEventListener("click", () =>{
    wrapper.classList.toggle("active");
});















































