import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { addTechs } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({addTechs}) => {
    const [firstname, setFirstName]= useState('');
    const [lastname, setLastName]= useState('');

   const onSubmit=()=>{
       if(firstname==='' || lastname===''){
           M.toast({html: 'Please enter first and lastname'})
        }
           else{
                addTechs({
                    firstname,
                    lastname
                });
               
                M.toast({html: `Tech ${firstname} was added successfully`})
           }
       
       
    }
    return (
        <div id='add-tech-modal' className='modal'>
         <div className='modal-content'>
            <h4>TECHS FORM </h4>
            <div className='row'>
                <div className='input-field'>
                    <input 
                      type='text'
                      name='firstname'
                      value={firstname}
                      onChange={e=>setFirstName(e.target.value)}
                      />
                      <label htmlFor='firstname' className='active'>
                          First Name:
                      </label>
                </div>
            </div>
            
            <div className='row'>
                <div className='input-field'>
                    <input 
                      type='text'
                      name='lastname'
                      value={lastname}
                      onChange={e=>setLastName(e.target.value)}
                      />
                      <label htmlFor='lastname' className='active'>
                          Last Name:
                      </label>
                </div>
            </div>
         </div>
         <div className='modal-footer'> 
         <a href='#!' onClick={onSubmit} className='modal-close blue waves-effect waves-green btn'>
             Enter
             </a>
         </div>
        </div>
    )
}
AddTechModal.propTypes={
    addTechs: PropTypes.func.isRequired
}

export default connect(null, {addTechs})(AddTechModal)