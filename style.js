const convert=() => {
    const degree=document.getElementById('degrees').value;

    const option = document.getElementById('select');
    const selected=select.options[option.selectedIndex].id;
    console.log(selected)

    const celToFah=(cel) => {
        let fahren=Math.round((cel * 9/5)+32);
        return fahren;
    }
    const fahToCel=(far) =>{
        let celsius=Math.round((far - 32)*5/9);
        return celsius;
    }

    let result;

    if(selected==='cel'){
        result=celToFah(degree);
        document.getElementById('result').innerHTML= `${result} °Fahrenheit`;
    }
    else{
        result=fahToCel(degree);
        document.getElementById('result').innerHTML=`${result} °Celsius`;
    }
}