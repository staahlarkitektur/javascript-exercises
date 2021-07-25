const leapYears = function(year) {
    if (Number.isInteger(year/400)) {
        return true;
    }
    if (Number.isInteger(year/100)) {
        return false;
    }
    if (Number.isInteger(year/4)) {
        return true;
    }
    if (!Number.isInteger(year/4)) {
        return false;
    }


}

module.exports = leapYears
