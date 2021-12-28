// object destructuring
const band = {
    bandName:"led zeppelin",
    famousSong: "stairway to heaven",
    year:1968,
    anotherFamousSong:"kashmir"
};
const {bandName:bName,famousSong:fSong,...restProps} = band;
console.log(bName);
console.log(fSong);
console.log(restProps);
