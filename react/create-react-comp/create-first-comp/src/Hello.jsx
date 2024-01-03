function Hello(){
  // let myName="Muqtadir";
  let number=456;
  let fullName = () => {
    return "Md Abdul Muqtadir";
  }
  return <p>
    Message No: {number}  Hello this the future speaking.I am your master {fullName()}
  </p>
}

export default Hello;