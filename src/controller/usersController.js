const { validationResult } = require("express-validator");

module.exports = {
    users: (req, res) => {
    return res.render("userRegister");
  },
    register: (req, res) => {
    let errors = validationResult(req);
    if(errors.isEmpty()){
       return res.send('Registro correcto')
    }else{
        return res.render('userRegister',{
           errors : errors.mapped(),
            old : req.body
        })
    }
  },
};