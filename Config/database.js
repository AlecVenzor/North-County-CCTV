if(process.env.NODE_ENV === "production")
{
    module.exports = {mongoURI: "mongodb+srv://Alec:Alec@cluster0-jn7qd.gcp.mongodb.net/test?retryWrites=true&w=majority"}
}
else
{
module.exports = {mongoURI:"mongodb://localhost/AC_Security-dev"}
}