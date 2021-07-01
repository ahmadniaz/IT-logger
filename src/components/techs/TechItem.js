import React from 'react'
import {connect} from 'react-redux';
import { deleteTechs } from '../../actions/techActions';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';


const TechItem =({ tech:{firstname, lastname, id}, deleteTechs }) => {
    const onDelete=()=>{
        deleteTechs(id)
        M.toast({html: 'Tech deleted successfully'})
    }
    return (
        <li className='collection-item'>
            <div>
                {firstname}{lastname}
                  <a href='#!' className='secondary-content' onClick={onDelete} >
                      <i className='material-icons grey-text' >delete</i>
                  </a>
            </div>
        </li>
         )
}

TechItem.propTypes = {
tech: PropTypes.object.isRequired
}

export default connect(null, {deleteTechs}) (TechItem)
