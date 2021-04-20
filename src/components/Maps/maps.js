import react, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Busy = ({ text }) => (
  <div style={{
    color: 'red', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

const Empty = ({ text }) => (
  <div style={{
    color: 'lime', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'orange', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -33.917518,
      lng: 151.230771
    },
    zoom: 17
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '72vh', width: '70%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBlMQVkzbCIpIpQ8NDXcvdf3tPBns3aj-Y"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-33.918337}
            lng={151.231435}
            text="Ainsworth Building
            "
          />
          <Empty
            lat={-33.916509}
            lng={151.227945}
            text="SEB"
          />
          <Busy
            lat={-33.91754}
            lng={151.233408}
            text="UNSW Library"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;