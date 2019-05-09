class App extends React.Component {
   render() {
      return (
         <div>
            <button onClick = {add}>Checkout</button>  
            
         </div>
      );
   }
}

add = () => {
  ReactDOM.render(<div>
    <label>name</label><input />
    <label>email</label><input />
    <label>password</label><input />
    <button onClick = {next} >Next</button>
  </div>, document.getElementById('app'));
}

next = () => {
  ReactDOM.render(<div><h4>Address</h4>
    <label>city</label><input />
      <label>state</label><input />
      <label>zip code</label><input />
      <label>phone number</label><input />
      <button onClick = {next2}>Next</button> </div>, document.getElementById('app'))
  
}

next2 = () => {
  ReactDOM.render(<div><h4>Address</h4>
    <label>credit card number</label><input />
      <label>expiry date</label><input />
      <label>CVV</label><input />
      <label>billing zip code</label><input />
      <button>Submit</button> </div>, document.getElementById('app'))
  
}
ReactDOM.render(<App />, document.getElementById('app'));
