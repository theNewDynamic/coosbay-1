import React from "react";

export default class SitepagesPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "photo"]));
    let permalink = entry.getIn(["data", "url"]);

    return <div className="mw6 center ph3 pv4 cms-preview">
      <h1 className="f2 lh-title b mb3">{ entry.getIn(["data", "title"])}</h1>

      <p>Permalink: {permalink}<br />
      <a target="_blank" href={permalink}>Preview Page</a></p>

      <div className="cms mw6">
        { image && <img src={ image } alt={ entry.getIn(["data", "title"])} /> }
        { widgetFor("body") }
      </div>
    </div>;
  }
}
