import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'; 
import { connect } from 'react-redux';
import { addArtikel } from '../actions/itemActions';



class ArtikelModal extends Component {
  state = {
    modal: false,
    name: '',
    artikel: ''
  }


  

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }); 
    this.setState({ [e.target.artikel]: e.target.value });
  }

//   handleChange = (stateName, e) => {
//     this.setState({ [stateName]: e.target.value });
// }

  onSubmit = e => {
    e.preventDefault();

    const newArtikel = {
      name: this.state.name,
      artikel: this.state.artikel
    }

    //Tambah artikel via addArtikel action
    this.props.addArtikel(newArtikel);

    //close modal
    this.toggle();
  }

  render() {
    return(
      <div>
        <Button
        color="dark"
        style={{marginTop: '2rem', marginBottom: '2rem'}}
        onClick={this.toggle}
        >Tambah Artikel
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Tambah ke List Artikel</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="artikel">Artikel</Label>
                <Input
                  type="text"
                  name="name"
                  id="artikel" 
                  placeholder="Judul Artikel"
                  onChange={this.onChange}
                />
                 <Input
                  type="text"
                  name="artikel"
                  id="artikel" 
                  placeholder="Tulis Artikel"
                  onChange={this.onChange}
                />
                <Button
                  color="dark"
                  style={{marginTop: '1rem'}}
                  block
                >Tambah
                </Button>
              </FormGroup>  
            </Form> 
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({  
  artikel: state.artikel
});

export default connect(mapStateToProps, { addArtikel })(ArtikelModal);

