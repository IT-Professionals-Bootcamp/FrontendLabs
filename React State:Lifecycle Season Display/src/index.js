import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { enl: null, hataMsj: "" };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (yer) => this.setState({ enl: yer.coords.latitude }),
      (hata) => this.setState({ hataMsj: hata.message })
    );
  }

  renderContent() {
    if (this.state.hataMsj && !this.state.enl) {
      return <div>Hata: {this.state.hataMsj}</div>;
    }

    if (!this.state.hataMsj && this.state.enl) {
      return <SeasonDisplay enlem={this.state.enl} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
