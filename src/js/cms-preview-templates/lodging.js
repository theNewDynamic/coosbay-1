import React from "react";

export default class LodgingPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "photo-name"]));

    return <div className="mw6 center ph3 pv4 cms-preview">

    <div className="m-lodging-item">
        <div className="photo">
            { image && <img src={ image } alt={ entry.getIn(["data", "property-name"])} /> }
        </div>

        <div className="content">
            <div className="category">
                { entry.getIn(["data", "property-category"])}
            </div>

            <div className="location">
                <h2>{ entry.getIn(["data", "property-name"])}</h2>
                <p className="address">
                    { entry.getIn(["data", "address", "street1"])}<br />
                    { entry.getIn(["data", "address", "street2"])}<br />
                    { entry.getIn(["data", "address", "city"])}, { entry.getIn(["data", "address", "state"])} { entry.getIn(["data", "address", "zip"])}<br />
                    { entry.getIn(["data", "phone-local"])} | { entry.getIn(["data", "phone-toll-free"])}
                </p>
            </div>

            <div className="description">
                { entry.getIn(["data", "units"]) } { entry.getIn(["data", "cost"])}
                { entry.getIn(["data", "property-description"])}
            </div>

            <div className="amenities">
                { entry.getIn(["data", "amenities"]) }
            </div>

            <div className="links">
                <span className="map"><a href="" target="_blank">Map</a></span>
                <span className="website"><a href={ entry.getIn(["data", "website"])} target="_blank">Website</a></span>
            </div>
        </div>

    </div>

    </div>;
  }
}
