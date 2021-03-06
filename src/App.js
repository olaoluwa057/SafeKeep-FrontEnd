import './App.css';
import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.min.css';
import abi from './safekeepabi.js';
import {useEffect, useState} from 'react';


import { Navbar, Container, Col, Row, Card, Button  } from 'react-bootstrap';

function App() {
  const [account, setAccount] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [depositAmount, setDepositAmount] = useState([]);
  const [backupAddress, setBackupAdress] = useState([]);


 const [show,setShow] = useState(false);
 const [display, setdisplay] = useState(false);


 const checkAccount = async () => {
    const account = await window.web3.eth.getAccounts();
    setAccounts(account);
  };
 const loadFromChain = async () => {
      const Web3 = require('web3');
      const web3 = new Web3 ('http://localhost:8545');

      const network = await window.web3.eth.net.getNetworkType();
      const contractAddress = '0xa055dFC2190bA3C147D96C69eD5e11442A59525f';
      window.safeKeepContract = new window.web3.eth.Contract(
      abi,
      contractAddress
    );


    const result = await window.safeKeepContract.methods.getData().call(console.log('result'))
 }
useEffect(() => {
loadFromChain()

},[accounts])


    
  return (
  <div className="App">
      <Navbar bg="dark" variant="dark" className="rounded-top">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="./LogoWhite.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Dashboard  
    </Navbar.Brand>
   
         <span className="navbar-text flex-end  ">{account}</span>
    
  </Navbar>

  <Container className="pt-5">
    <h6 className="mb-n4"> Hide Balance less than eth </h6> 
     <input type="checkbox" className="margin"></input>
     <div border="dark "  className= "box position pad " style={{ width: '6rem', height: '2.5rem'}} >Admin</div>
  </Container>
  
<Container className="pt-5 pb-4">
  <Row>
  <Col sm={7}>

  <Card border="dark" style={{ width: '30rem', height: '13rem', } }>
    <Card.Body>
    <Row>
      <Col sm={7}>
        <h4 className="pt-4 ">ETH Balance</h4>
      <h4>0.001ETH</h4>
       </Col>
       <Col sm={5}>
           <h4 className="pt-4 ">$1234.00</h4>
           <div border="dark"  className= "box" style={{ width: '6rem', height: '2.5rem'}} >4.5%</div>
       </Col>
    </Row>
    <div className="pt-3 mt-2">
   <Button variant="outline-dark" style={{ width: '8rem'} } className=" mx-4" onClick={() =>setShow(true)} >Deposit</Button>{' '}
      <Button variant="outline-dark" style={{ width: '8rem'}} onClick={() =>setdisplay(true)}>Withdraw</Button>
     </div>  
    </Card.Body>
  </Card>

  <br/>
<>{
   show?<Card border="dark" style={{ width: '30rem', height: '13rem',top:'2' } } ClassName='mb-5'>
          <div class="">
            <h4 class="text-center mb-4 mt-3">DEPOSIT</h4>
            <form class="form-inline">
              <div class="form-group mx-sm-3 mb-2">
                <label htmlFor="deposit" class="sr-only">
                  ETH
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="deposit"
                  placeholder="Amount in ETH"
                 
                />
              </div>
              <div class="form-group mx-sm-3 mb-2">
                <label htmlFor="address" class="sr-only">
                  ETH
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="Backup Address"
                
                />
              </div>
              <div className="center">
              <button
              
                type="submit"
               
                className="btn btn-primary ml-5"
                onClick={() =>setShow(false)}
              >
                Deposit
              </button>
              </div>
            </form>
          </div>
         
        </Card>  :null
       
}
</>

{
   
   display?
   <Card border="dark" style={{ width: '30rem', height: '6rem', display:'flex'} }>
  
   <div class="col border-left">
            <h4 className="px-2 pt-2">Withdrawal</h4>
            <form class="form-inline">
              <div class="form-group mx-sm-3 mb-2">
                <label htmlFor="withdraw" class="sr-only">
                  withdraw
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="withdraw"
                  placeholder="ETH"
                /> 
              </div>
              <button
                type="submit"
                
                class="btn btn-primary mb-2"
                 onClick={() =>setdisplay(false)}
              >
                Withdraw
              </button>
            </form>
          </div> </Card>:null

}
<Card border="dark" style={{ width: '30rem', height: '13rem'} }>
    <Card.Body>
    <Row>
      <Col sm={7}>
        <h4 className="pt-4 ">SFP Balance</h4>
      <h4>0.001 SFP</h4>
       </Col>
       <Col sm={5}>
           <h4 className="pt-4 ">$184.00</h4>
           <div border="dark"  className= "box color" style={{ width: '6rem', height: '2.5rem'}} >4.5%</div>
       </Col>
    </Row>
    <div className="pt-3 mt-2">
      <Button variant="outline-dark" style={{ width: '8rem'} } className=" mx-4" >Deposit</Button>{' '}
      <Button variant="outline-dark" style={{ width: '8rem'} }>Withdraw</Button>
     </div>  
    </Card.Body>
</Card>

 <br/>
<div>
   <Card border="dark" style={{ width: '30rem', height: '13rem'} }>
    
    <Card.Body>
    <Row>
      <Col sm={7}>
        <h4 className="pt-4 ">DAI Balance</h4>
      <h4>0.001 DAI</h4>
       </Col>
       <Col sm={5}>
           <h4 className="pt-4 ">$184.00</h4>
           <div border="dark"  className= "box color1" style={{ width: '6rem', height: '2.5rem'}} >4.5%</div>
       </Col>
    </Row>
    <div className="pt-3 mt-2">
      <Button variant="outline-dark" style={{ width: '8rem'} } className=" mx-4" >Deposit</Button>{' '}
      <Button variant="outline-dark" style={{ width: '8rem'} }>Withdraw</Button>
     </div>
      
        
    </Card.Body>
  </Card>
<div/>
  <br />
 </div>
 </Col>  
 
 
  
    <Col sm={5}>
       <Card border="dark" style={{ width: '25rem', height: '13rem'} }>
         <Card.Body>
         <div className="pt-5">
           <h4 className="head">Your Balance</h4>
           <h4 className="head pt-2">$1234.00</h4>
          </div>
         </Card.Body>
       </Card>

       <br /> 

       <Card border="dark" style={{ width: '25rem', height: '13rem'} }>
         <Card.Body>
         <div className="pt-5">
           <h4 className="head">Back-up Address</h4>
           <h4 className="head pt-2">$1234.00</h4>
          </div>
          <div>
            <Card.Link eventKey="link-2" className="pt-4 position">Edit</Card.Link>
          </div>
         </Card.Body>
       </Card>

       <br/>
        <Card border="dark" style={{ width: '25rem', height: '13rem'} }>
         <Card.Body>
         <div className="pt-5">
           <h4 className="head">Ping Countdown</h4>
           <h4 className="head pt-2">00:22:34</h4>
          </div>
          <div>
            <div border="dark pt-4"  className= "box position " style={{ width: '6rem', height: '2.5rem' }} >Ping</div>
          </div>
          <br />
         </Card.Body>
       </Card>
    </Col>

    
  </Row>
</Container>

    



     
      
       


</div> 
 );
}

export default App;
