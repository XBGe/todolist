// date
exports.getDate = () => {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
}
//weeks number
exports.getDay = () => {
    const today = new Date();
    const options = {
        weekday: "long"
    };
    return today.toLocaleDateString("en-US", options);
}
//month
exports.getMonth = () =>{
    const today = new Date();
    const options = { 
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
}

