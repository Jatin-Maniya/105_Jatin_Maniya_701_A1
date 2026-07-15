const admZip = require("adm-zip")

const zip = new admZip("../problem4/myFolder.zip")

zip.extractAllTo("extracted",true)

console.log("Zip File extracted Successfully!!")
