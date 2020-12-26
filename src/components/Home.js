import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../assets/styles/Home.css";
import PlanetCard from "../reusables/PlanetCard";

const planetsource = [
  { id: "mercury", isFavourite: false, name: "Mercury" },
  { id: "venus", isFavourite: false, name: "Venus" },
  { id: "earth", isFavourite: false, name: "Earth" },
  { id: "mars", isFavourite: false, name: "Mars" },
  { id: "ceres", isFavourite: false, name: "Ceres" },
  { id: "jupiter", isFavourite: false, name: "Jupiter" },
  { id: "saturn", isFavourite: false, name: "Saturn" },
  { id: "pluto", isFavourite: false, name: "Pluto" },
  { id: "haumea", isFavourite: false, name: "Haumea" },
  { id: "makemake", isFavourite: false, name: "Makemake" },
  { id: "eris", isFavourite: false, name: "Eris" },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "planets",
      cardtype: "grid",
      sortby: "",
      planetData: [],
    };
  }

  componentDidMount() {
    this.setState({ planetData: planetsource });
  }

  markAllasFav = () => {
    const { planetData } = this.state;
    let obj = planetData;
    obj.map((item) => {
      item.isFavourite = true;
    });

    this.setState({ planetData: obj });
  };

  delAllfromFav = () => {
    const { planetData } = this.state;
    let obj = planetData;
    obj.map((item) => {
      item.isFavourite = false;
    });

    this.setState({ planetData: obj });
  };

  markAsFav = (id) => {
    const { planetData } = this.state;
    let obj = planetData;
    obj.map((item) => {
      if (item.id === id) {
        item.isFavourite = true;
      }
    });
    this.setState({ planetData: obj });
  };

  delFromFav = (id) => {
    const { planetData } = this.state;
    let obj = planetData;
    obj.map((item) => {
      if (item.id === id) {
        item.isFavourite = false;
      }
    });
    this.setState({ planetData: obj });
  };

  render() {
    const { planetData, selectedTab, cardtype, sortby } = this.state;

    let planetInfo;

    if (selectedTab === "favourites") {
      planetInfo = planetData.filter((planet) => planet.isFavourite);
    } else {
      if (sortby === "asec") {
        planetInfo = planetData.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
      } else if (sortby === "desc") {
        planetInfo = planetData.sort((a, b) =>
          a.name < b.name ? 1 : b.name < a.name ? -1 : 0
        );
      } else {
        planetInfo = planetData;
      }
    }

    return (
      <div className="home-component">
        <div className="home-tab-row">
          <div
            className="home-tab-option"
            style={
              selectedTab === "planets"
                ? { "border-bottom": "2px solid white" }
                : null
            }
            onClick={() => {
              if (selectedTab !== "planets") {
                this.setState({ selectedTab: "planets" });
              }
            }}
          >
            Planets
          </div>
          <div
            className="home-tab-option"
            style={
              selectedTab === "favourites"
                ? { "border-bottom": "2px solid white" }
                : null
            }
            onClick={() => {
              if (selectedTab !== "favourites") {
                this.setState({ selectedTab: "favourites" });
              }
            }}
          >
            Favourites
          </div>
        </div>
        {selectedTab === "planets" ? (
          <div className="help-row">
            <div className="left-part">
              <div className="mark-buttons" onClick={() => this.markAllasFav()}>
                {" "}
                + Mark all{" "}
              </div>
              <div
                className="mark-buttons"
                onClick={() => this.delAllfromFav()}
              >
                {" "}
                - Remove all{" "}
              </div>
            </div>
            <div className="right-part">
              <div className="sort-box">
                <div>Sort :</div>
                <div
                  onClick={() => {
                    if (sortby !== "asec") {
                      this.setState({ sortby: "asec" });
                    }
                  }}
                  className="pointer-class"
                >
                  {" "}
                  asec{" "}
                </div>
                <div
                  onClick={() => {
                    if (sortby !== "desc") {
                      this.setState({ sortby: "desc" });
                    }
                  }}
                  className="pointer-class"
                >
                  {" "}
                  desc{" "}
                </div>
              </div>
              <div className="icon-type-selector">
                <div
                  onClick={() => {
                    if (cardtype !== "grid") {
                      this.setState({ cardtype: "grid" });
                    }
                  }}
                  className="pointer-class"
                >
                  G
                </div>
                <div className="horizontal-bar"> </div>
                <div
                  onClick={() => {
                    if (cardtype !== "list") {
                      this.setState({ cardtype: "list" });
                    }
                  }}
                  className="pointer-class"
                >
                  L
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="content-area">
          {selectedTab === "planets" ? (
            planetInfo.map((planet) => (
              <PlanetCard
                item={planet}
                cardtype={cardtype}
                addasFav={this.markAsFav}
                removeasFav={this.delFromFav}
              />
            ))
          ) : planetInfo.length ? (
            planetInfo.map((planet) => (
              <div className="favourite-card">{planet.name}</div>
            ))
          ) : (
            <h4> Please add favourites </h4>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
