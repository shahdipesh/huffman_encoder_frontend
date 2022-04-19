import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './input_box.css';
import Button from '@mui/material/Button';
import Card from './Card';
const axios = require('axios');

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'TOBEORNOTTOBETHATISTHEBANANA',
            isValid: true,
            errorMessage: '',
            data:null
        };
    }

    encode() {
        axios.get('http://localhost:8080/encode/'+this.state.value).then(res => {
            let resArr = res.data;
            this.setState({data: resArr});
            
        }
        );
    }

    render() {
        return (
            <React.Fragment>
            <div className={"container"}>
           
             <div className={"input-box"}>
                <TextField
                    id="filled-helperText"
                    defaultValue="TOBEORNOTTOBETHATISTHEBANANA"
                    helperText="Enter the text to Encode"
                    variant="filled"
                    fullWidth
                    onChange={(event) => {this.setState({value: event.target.value})}}
                    
                    />
                </div>
                <div className={"button-box"}>
                <Button variant="contained" onClick={()=>this.encode()}>Encode</Button>
                </div>
               
            </div>

        <div className={"card-box"}>
            {this.state.data?
        
               this.state.data.map((item, index) => {
                    let key =(Object.keys(item));
                    let value = Object.values(item);
                    return <Card character={key} sequence={value} class={"Card"}/>
                    
                
               }
              )
       
              
                :null}

            </div>


            </React.Fragment>

        );
    }

}

export default Input;