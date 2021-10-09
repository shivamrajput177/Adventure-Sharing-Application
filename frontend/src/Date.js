module.exports.getDate=function ()
{
    let today=new Date();
      
    var options= {
    weekday: "long",
    day:  "numeric",
    month: "long"
}
return today.toLocaleDateString("en-US",options)
}

module.exports.getDay=function()
{
    let today=new Date();
    var options= {
    weekday: "long",

}
return today.toLocaleDateString("en-US",options)

}

module.exports.getMonth=function ()
{
    let today=new Date();
    var options= {
    month: "long",

}
return today.toLocaleDateString("en-US",options)

}

module.exports.getMonthcount=function ()
{
    let today=new Date();
    var options= {
    day: "numeric",

}
 return   today.toLocaleDateString("en-US",options)
}
