//jshint esversion:6
// module.exports yerine daha kısa olması için exports yazılabilir
exports.getDate = function (){

    const today = new Date();

    const options = { //for localDateString
      weekday: "long",
      day: "numeric",
      month: "long"
    };

    return today.toLocaleDateString("en-US", options);

}
exports.getDay = function(){

    const today = new Date();

    const options = { //for localDateString
      weekday: "long"
    };

    return today.toLocaleDateString("en-US", options);
}
