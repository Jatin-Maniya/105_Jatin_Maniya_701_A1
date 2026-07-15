function getResponse(msg) {
    msg = msg.toLowerCase()

    if(msg.indexOf("hello") > -1  || msg.indexOf("hi") > -1) {
        return "Hello! Welcome to ABC College."
    }else if(msg.indexOf("courses") > -1 || msg.indexOf("course") > -1) {
        return "We offer BCA, B.Sc IT, B.Com and MBA."
    }else if(msg.indexOf("fees") > -1 || msg.indexOf("fee") > -1) {
        return "Please contact the accounts office for fee details."
    }else if (msg.indexOf("location") > -1 || msg.indexOf("address") > -1 || msg.indexOf("located") > -1) {
        return "ABC College is located on College Road, Surat, Gujarat.";
    }else if(msg.indexOf("admission") > -1) {
        return "Admissions are open from June to August.";
    }else if(msg.indexOf("contact") > -1 || msg.indexOf("phone") > -1 || msg.indexOf("number") > -1) {
        return "Phone: 9876543210";
    }else if (msg.indexOf("hostel") > -1) {
        return "Yes, hostel facilities are available for both boys and girls.";
    }else if(msg.indexOf("bye") > -1 || msg.indexOf("thank") > -1) {
        return "Thank you. Have a nice day!";
    }else {
        return "Sorry, I don't understand your question.";
    }
}

module.exports = getResponse;