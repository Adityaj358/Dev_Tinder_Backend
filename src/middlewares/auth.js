 const adminAuth = (req,res,next) => {
    const token = "xyz";
    const ifAdminAuthorized = token === "xycchtz";
    if(!ifAdminAuthorized){
      res.status(401).send("Unauthorized Request")
    }else{
      next()
    }
  };


module.exports = {
    adminAuth,
};