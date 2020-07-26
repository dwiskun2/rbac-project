import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Row } from 'reactstrap' ;
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getArtikels, deleteArtikel } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ArtikelList extends Component {

  componentDidMount() {
    this.props.getArtikels();
  }

  onDeleteClick = id => {
    this.props.deleteArtikel(id);
  }

  render() {  
    const { artikels } = this.props.artikel
    return(
      <div>
     <Container>
    
      <ListGroup>
        <TransitionGroup classNames="artikel-list">
          {artikels.map(({ _id,name, artikel }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
              <Button
                outline
                className="remove-btn"
                color="danger"
                size="sm"
                onClick={this.onDeleteClick.bind(this, _id)}
              >&times;</Button>
                {name}
                <Row
                style={{marginTop: '1rem'}}
                >
                  {artikel}
                </Row>
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
     </Container>
     </div>
    );
  }
}

ArtikelList.propTypes = {
  getArtikels: PropTypes.func.isRequired,
  artikel: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  artikel: state.artikel
});

export default connect(
  mapStateToProps, 
  { getArtikels, deleteArtikel }
  )(ArtikelList); 


    {/* <Button
        className="tambah-btn"
        color="dark"
        onClick={() => {
          const name = prompt('Enter Artikel');
          if(name) {
            this.setState(state => ({
              artikels: [...state.artikels, { id: uuid(), name }]
            }));
          }
        }}
      >
        Tambah Artikel
      </Button> */}