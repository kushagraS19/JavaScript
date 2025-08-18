function Random(){
  let number = Math.random() * 30;

  return <h1 style={{'background-color' : '#558865'}}>Random number is {Math.random(number)}</h1>
}

export default Random;