import React, {  useEffect} from 'react'
import {connect} from 'react-redux';
import { getTechs } from '../../actions/techActions';
import TechItem from './TechItem';
import PropTypes from 'prop-types';




 const TechListModal = ({tech:{techs, loading}, getTechs}) => {
 useEffect(()=>{
        getTechs();
        //eslint-disable-next-line
    }, [])

    return (
       <div id='tech-list-modal' className='modal'>
           <div className='modal-content'>
               <h4> Technician List</h4>
               <ul className='collection'>
                {techs && techs!==null && !loading && 
                techs.map(tech=> <TechItem tech={tech} key={tech.id} />)}
               </ul>
            </div>
       </div>
    )
   
}
TechListModal.propTypes={
    getTechs: PropTypes.func.isRequired,
    techs:PropTypes.object
}

const mapStateToProps=state=>({
tech: state.tech
})

export default connect(mapStateToProps, {getTechs}) (TechListModal);