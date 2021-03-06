import { connect } from 'react-redux';
import { getAlbums } from './actions';
import Albums from './Albums';

function mapStateToProps(state) {
  return {
    albums: state.albums,
    error: state.albumsError,
    loading: state.albumsLoading
  };
}

function mapDispatchToProps(dispatch) {
  dispatch(getAlbums());
  return {};
}

const AlbumsContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Albums);

// export the wrapper
export default AlbumsContainer;
