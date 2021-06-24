const quotes =[
    {
        quote:"अगर आप सफल होना चाहते हो तो आपको अपने काम में एकाग्रता लानी होगी |",
        author:"बिल गेट्स"
    },
    {
        quote:"मैदान से हारा हुआ इंसान तो फिर से जीत सकता है लेकिन मन से हारा हुआ इंसान कभी नहीं जीत सकता इसलिए मन से कभी हार मत मानना |",
        author:""
    },
    {
        quote:"जब तक किसी काम को हम शुरू नहीं करते तब तक वह काम नामुमकिन ही लगता है |",
        author:"नेलसन मंडेला"
    },
    {
        quote:"मोती कभी भी किनारे पे खुद नहीं आते, उन्हें पाने के लिए समुन्दर में उतरना ही पड़ता है ।",
        author:""
    },
    {
        quote:"अगर आप कुछ ऐसा पाना चाहते हैं जो आपने पहले कभी नहीं पाया,तो आपके कुछ ऐसा करना पड़ेगा जो अपने पहले कभी नहीं किया।",
        author:""
    },
    {
        quote:"शुरुआत करने का तरीका है कि आप बात करना छोड़ दें और बस काम करना शुरू करें।",
        author:""
    },
    {
        quote:"अगर आप कुछ सोच सकते हैं, तो यकीन मानिए आप उसे कर भी सकते हैं।",
        author:""
    }
]
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
    }

]
document.addEventListener('onload',generateQuote());
function generateQuote(){
        var index = Math.floor(Math.random()*6);
        var bg = document.getElementById("container");
        var q = document.getElementById("quote");
        var a =document.getElementById("author");
        var h =document.getElementById("header");
        q.innerHTML=quotes[index].quote;
        a.innerHTML="-"+quotes[index].author;
        q.style.backgroundColor=colors[index].quoteColor;
        bg.style.backgroundColor = colors[index].backColor;
        h.style.backgroundColor= colors[index].quoteColor;
        h.style.color= colors[index].backColor;
}