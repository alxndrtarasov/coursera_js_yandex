/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    let h = Number(hours);
    let m = Number (minutes);
    return (h>=0&&h<=23&&m>=0&&m<=59);
};
