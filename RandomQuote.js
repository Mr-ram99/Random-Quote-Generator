var colors=[
    {
        quoteColor:"#87dea2",
        backColor:"#36bb5f"
    },
    {
        quoteColor:"#efca08",
        backColor:"#f49f0a"
    },
    {
        quoteColor:"#cbbfbb",
        backColor:"#EABDA8"
    },
    {
        quoteColor:"#EFC69B",
        backColor:"#DF9B6D"
    },
    {
        quoteColor:"#B6A6CA",
        backColor:"#A09ABC"
    },
    {
        quoteColor:"#FF2C55",
        backColor:"#C41E3D"
    },
    {
        quoteColor:"#FF2C55",
        backColor:"#E2294F"
    },
    {
        quoteColor:"#DD99BB",
        backColor:"#7B506F"
    },
    {
        quoteColor:"#6A7B76",
        backColor:"#3A4E48"
    },
    {
        quoteColor:"#A6D9F7",
        backColor:"#BCCCE0"
    },
    {
        quoteColor:"#A69CAC",
        backColor:"#474973"
    },
    {
        quoteColor:"#FBC4AB",
        backColor:"#F8AD9D"
    },
    {
        quoteColor:"#F4978E",
        backColor:"#F08080"
    },
    {
        quoteColor:"#F5DDDD",
        backColor:"#C2B2B4"
    },
    {
        quoteColor:"#E7BBE3",
        backColor:"#C884A6"
    },
    {
        quoteColor:"#D1DEDE",
        backColor:"#EAD2AC"
    },
    {
        quoteColor:"#0DAB76",
        backColor:"#139A43"
    },
    {
        quoteColor:"#A491D3",
        backColor:"#818AA3"
    },
    {
        quoteColor:"#F2ED6F",
        backColor:"#F4E04D"
    },
    {
        quoteColor:"#BE97C6",
        backColor:"#8661C1"
    },
    {
        quoteColor:"#F4E87C",
        backColor:"#CBBF7A"
    }

]
document.addEventListener('onload',generateQuote());
async function generateQuote(){
    
        
        var bg = document.getElementById("container");
        var q = document.getElementById("quote");
        var a =document.getElementById("author");
        var h =document.getElementById("header");
        var len;
        await fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            q.innerHTML=`"${data.content}"`;
            a.innerHTML=`-${data.author}`;

        })
        if(q.innerHTML.length>150)
        {
            generateQuote();
        }
        var index = Math.floor(Math.random()*21);
        q.style.backgroundColor=colors[index].quoteColor;
        bg.style.backgroundColor = colors[index].backColor;
        h.style.backgroundColor= colors[index].quoteColor;
}