var decoder = {
  getCypher: function() {
    this.cypher = document.URL.split('?')[1]
  },
  getPassword: function() {
    console.log("getPassword Function Run")
    this.password = prompt("Please Enter Your Password")
  },
  showMessage: function() {
    this.message = decoder.decrypt()
  },
  decrypt: function() {
    cypher = CryptoJS.AES.decrypt(this.cypher, this.password).toString(CryptoJS.enc.Utf8)
    return cypher
  },
  solve: function() {
    this.getCypher()
    this.getPassword()
    this.showMessage()
    return this.message
  }
}
document.getElementById("decrypt").onclick = function(){
  message = decoder.solve()
  if (message == ""){
    alert("password incorrect")
  }
  else{
    alert("Your Message is: \n" + message)
  }

}

