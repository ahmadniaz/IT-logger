import React, {useState} from 'react'
import {connect} from 'react-redux';
import {addLogs} from '../../actions/logActions';
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = ({addLogs}) => {
    const [message, setMessage]= useState('');
    const [attention, setAttention]= useState(false);
    const [tech, setTech]= useState('');
    

   const onSubmit=()=>{
       if(message==='' || tech===''){
           M.toast({html: 'Please enter the message and tech'})
        }
           else{
                const newLog={
                    message,
                    attention,
                    tech, 
                    date: new Date()
                }
                
                addLogs(newLog);
                M.toast({html: `Log added successfully by ${tech}`})
                
           }
    }
    return (
        <div id='add-log-modal' className='modal' style={{height:'70%', width:'70' }}>
         <div className='modal-content'>
            <h4>Enter the System Logs </h4>
            <div className='row'>
                <div className='input-field'>
                    <input 
                      type='text'
                      name='message'
                      value={message}
                      onChange={e=>setMessage(e.target.value)}
                      />
                      <label htmlFor='message' className='active'>
                          Log Message:
                      </label>
                </div>
            </div>
            <div className='row'>
                <div className='input-field'>
                    <select 
                     name='tech'
                     value={tech}
                     className='browser-default'
                     onChange={e=>setTech(e.target.value)}
                    >
                        <option value='' disabled>
                            Select Technician
                        </option>
                        <option value='John Doe'>John Doe</option>
                        <option value='Sam Smith'>Sam Smith</option>
                        <option value='Sara Williams'>Sara Williams</option>
                    </select>
                </div>
            </div>
            <div className='row'>
                <div className='input-field'>
                    <p>
                        <label>
                            <input
                             type='checkbox'
                             className='filled-in'
                             checked={attention}
                             value={attention}
                             onChange={e=>setAttention(!attention)}
                            />
                            <span>Needs Attention</span>
                        </label>
                    </p>
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
AddLogModal.prototypes={
    addLogs:PropTypes.func.isRequired,
    newLog: PropTypes.object.isRequired
}

export default connect(null,{addLogs})(AddLogModal);