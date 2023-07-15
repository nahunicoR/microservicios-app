module.exports = (req, res, next) => {
    const {model} = req.params;

    if(["Character", "Film", "Planet"].includes(model)){
        next();
    }else{
        throw Error("Invalid Model");
    }; 
};