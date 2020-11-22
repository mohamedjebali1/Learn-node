var fs = require('fs');
var path = require('path');
var pathfolder = process.argv[2];
var fileExt = "." + process.argv[3];
fs.readdir(pathfolder, function(err, list)
 {
    if (err)
     {
         return
          console.error(err)

}
else
{
    for (i = 0; i < list.length; i++) 
    {

    if ((path.extname(list[i]) === fileExt)) 
    {
        console.log(list[i]);
    }
};
}
});