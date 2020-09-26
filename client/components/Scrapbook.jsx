import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Link } from "react-router-dom";
import { apiGetUserScrapbook } from "../apis/index";
import { receiveScrapbook } from "../actions/scrapbook";

class Scrapbook extends React.Component {
  componentDidMount() {
    apiGetUserScrapbook(1).then((scrapbook) =>
      this.props.dispatch(receiveScrapbook(scrapbook))
    );
  }

  render() {
    return (
      <>
        <div
          id="scrapbook"
          className="container content is-full has-background-primary"
        >
          <h1 className="has-text-white pt-3 has-text-centered">
            <i>Kereru Go!</i>
          </h1>
          <div className="card is-centered mx-4">
            <h2 className="has-text-centered pt-4">SCRAPBOOK</h2>
            <div className="birds">
              {this.props.scrapbook.map((item) => {
                return (
                  <Link
                    key={item.birdId}
                    to={`birds/scrapbook/:${item.birdId}`}
                  >
                    <div className="scrapbook-entry">
                      <img
                        className="img"
                        src={`${item.birdImg}`}
                        alt={`${item.birdName}`}
                      />
                      <h5 className="has-text-centered">{item.birdName}</h5>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(globalState) {
  return { scrapbook: globalState.scrapbook };
}

export default connect(mapStateToProps)(Scrapbook);
