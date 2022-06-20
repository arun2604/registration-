import React, { useState } from "react";

const Shop = () => {
    
    const [name,setName] = useState ('');
    const [email,setEmail] = useState ('');
    const [pass,setPass] = useState ('');
    const [login ,setLogin] =useState(true)

    function handleSubmit (e){
        e.preventDefault();
        let arrays = JSON.parse(localStorage.getItem('details'))
        let arr = {
            name : name,
            email : email,
            pass : pass
        }
       if(name === '' || email ==='' || pass === ''){
        alert('enter all the fields');
       }
       else{
        if(localStorage.getItem('details') === null){
            localStorage.setItem('details','[]');
        }
        arrays(...arrays,arr);
        localStorage.setItem('details' ,JSON.stringify(arr));
        console.log('saved');
        setLogin(!login);
        
       }
    }
    
    return(
        <div class="form" id="myForm">
            <form action="" class="form-container">
                <h1>Registration</h1>
                <div className="inputs">
                    <label >Email</label>
                    <input type="text"
                    required
                    className="form-contrl" 
                    placeholder="enter your EMAIL"
                    onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="inputs">
                    <label >Name</label>
                    <input type="text"
                    required
                    className="form-contrl" 
                    placeholder="enter your NAME"
                    onChange={(e)=> setName(e.target.value)}/>
                    
                </div>
                <div className="inputs">
                    <label >PassWord</label>
                    <input type="PassWord"
                    required
                    className="form-contrl" 
                    placeholder="enter your Password"
                    onChange={(e)=> setPass(e.target.value)}/>                   
                </div>
                <button onClick={handleSubmit}>submit</button>
            </form>

        </div>
    );
};


export default Shop;