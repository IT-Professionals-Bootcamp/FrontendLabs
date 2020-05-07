import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class SongList extends Component {
  renderList() {
    return this.props.songs.map((sarki) => {
      return (
        <div className="item" key={sarki.title}>
          <div className="right floated content">
            <button className="ui primary button"
              onClick={() => this.props.selectSong(sarki)}
            >
              Select
            </button>
          </div>
          <div className="content">{sarki.title} </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);

