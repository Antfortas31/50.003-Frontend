
import React, { Component }  from 'react';
export default class Modal extends React.Component {
 
	render() {
		const { handleClose, desc, show, header, footer  } = this.props
		const showHideClassName = show ? 'show-div' : 'hide-div';
		console.log(this.props);
      return (
      	<div className={showHideClassName}>
      	   <div id="myModal" className="modal">
 
			  <div className="modal-content">
			    <div className="modal-header">
			      <span className="close" onClick={this.props.handleClose}>×</span>
			      <h2>{header}</h2>
			    </div>
			    <div className="modal-body">
			    	<p>{desc}</p> <p>Booth2(project_name,type,width,length,ID)
                    </p>            
                </div>
                <div className="modal-footer"><h3>{footer}</h3></div>               </div>
 
			</div>
            <div className={showHideClassName}>
                <div id="myModal" className="modal2">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>{header}</h2>
                    </div>
                    <div className="modal-body">
                        <p>{desc}</p>
                    </div>
                </div>
                </div>
                
            </div>
            
 
		</div>
        
	  );
    }	
}