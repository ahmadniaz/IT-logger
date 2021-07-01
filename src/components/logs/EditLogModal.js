import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {updateLogs} from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = ({current, updateLogs}) => {
    const [message, setMessage]= useState('');
    const [attention, setAttention]= useState(false);
    const [tech, setTech]= useState('');

        useEffect(() => {
        if(current){
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
        }
    }, [current]) 
   const onSubmit=()=>{
       if(message==='' || tech===''){
           M.toast({html: 'Please enter the message and tech'})
        }
           else{
               const updatedLog={
                   id:current.id,
                   message,
                   attention,
                   tech,
                   date: new Date()
                 }

                 updateLogs(updatedLog);
                 M.toast({html: `The log was updated by ${tech}`})
           }
       
       
    }
    return (
        <div id='edit-log-modal' className='modal' style={{height:'70%', width:'70' }}>
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

EditLogModal.prototypes={
    updateLogs:PropTypes.func.isRequired,
    current: PropTypes.object
}

const mapStateToProps=state=>({
  current: state.log.current  
})


export default connect(mapStateToProps, {updateLogs})(EditLogModal)