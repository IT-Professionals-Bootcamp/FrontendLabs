import React from "react";
import axios from "axios";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {

    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID MUdx9tfh9r_0ba2OwTxzULfnHPzEDXJly-7817va1aA",
      },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar gonder={this.onSearchSubmit} />
        <ImageList resimler={this.state.images} />
      </div>
    );
  }
}

export default App;
