import React from 'react'
import floorplan from './floorplan.png';
import Modal from '../../Modal';

function tryme() {

    this.state =  {
        show: false,
        header: "Block1",
        footer: "",
        desc: "Booth1(project_name,tyoe,width,length,ID)"
    }
    
    return (
        <React.Fragment>
            <div>
              <h1>React Modal</h1>
              <Modal show={this.state.show} handleClose={this.hideModal} header={this.state.header} footer={this.state.footer} desc={this.state.desc}>
            
              </Modal>
 
              <button type="button" onClick={this.showModal}>
                open
              </button>
          </div>
        </React.Fragment>
    )
}
const pic = {
    width: '800x',
    height: '500px',
    resizeMode: 'contain'
}

const alignleft = {
    background: '#0f100',
    color: '#ff',
    borderWidth: '5'
}
const alignright = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
}

export default tryme;