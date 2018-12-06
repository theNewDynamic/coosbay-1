import React from "react";
import CMS from "netlify-cms";

//import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/products";
import ServicesPreview from "./cms-preview-templates/services";
import ContactPreview from "./cms-preview-templates/contact";
import SitepagesPreview from "./cms-preview-templates/sitepages";
import LodgingPreview from "./cms-preview-templates/lodging";

// Categories Control Widget
var CategoriesControl = createClass({
  handleChange: function(e) {
    this.props.onChange(e.target.value.split(',').map((e) => e.trim()));
  },

  render: function() {
    var value = this.props.value;
    return h('input', { type: 'text', value: value ? value.join(', ') : '', onChange: this.handleChange });
  }
});

var CategoriesPreview = createClass({
  render: function() {
    return h('ul', {},
      this.props.value.map(function(val, index) {
        return h('li', {key: index}, val);
      })
    );
  }
});

CMS.registerWidget('categories', CategoriesControl, CategoriesPreview);

// Youtube Editor Component
CMS.registerEditorComponent({
    // Internal id of the component
    id: "youtube",
    // Visible label
    label: "Youtube",
    // Fields the user need to fill out when adding an instance of the component
    fields: [{name: 'id', label: 'Youtube Video ID', widget: 'string'}],
    // Pattern to identify a block as being an instance of this component
    pattern: /^{{< youtube (\S+) >}}$/,
    // Function to extract data elements from the regexp match
    fromBlock: function(match) {
      return {
        id: match[1]
      };
    },
    // Function to create a text block from an instance of this component
    toBlock: function(obj) {
      return '{{< youtube ' + obj.id + ' >}}';
      //return '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + obj.id + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function(obj) {
      return (
        '<img src="https://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
      );
    }
  });

// Floated Image
CMS.registerEditorComponent({
    // Internal id of the component
    id: "floatimage",
    // Visible label
    label: "Floated Image",
    // Fields the user need to fill out when adding an instance of the component
    fields: [
        {name: 'src', label: 'Image', widget: 'image'},
        {name: 'float',
        label: 'Float',
        widget: 'select',
        options: [
                {label: "Left", value: "left"},
                {label: "Right", value: "right"},
                {label: "None", value: "none"}
            ]
        },
        {name: 'alt', label: 'Alt Text', widget: 'string'},
        {name: 'size',
        label: 'Size',
        widget: 'select',
        options: [
                {label: "20%", value: "20"},
                {label: "40%", value: "40"},
                {label: "60%", value: "60"},
                {label: "80%", value: "80"},
                {label: "100%", value: "100"}
            ]
        }
    ],
    // Pattern to identify a block as being an instance of this component
    pattern: /^{{< floatimage src="(\S+)" float="(\S+)" alt="([^\"]+)" size="(\S+)" >}}$/,
    // Function to extract data elements from the regexp match
    fromBlock: function(match) {
      return {
        src: match[1],
        float: match[2],
        alt: match[3],
        size: match[4]
      };
    },
    // Function to create a text block from an instance of this component
    toBlock: function(obj) {
      return '{{< floatimage src="' + obj.src + '" float="' + obj.float + '" alt="' + obj.alt + '" size="' + obj.size + '" >}}';
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function(obj) {
      return (
        '<img src="' + obj.src + '" alt="' + obj.alt + '" style="width: ' + obj.size + '%;" />'
      );
    }
  });


// Example of creating a custom color widget
// class ColorControl extends React.Component {
//   render() {
//     return <input
//         style={{height: "80px"}}
//         type="color"
//         value={this.props.value}
//         onInput={(e) => this.props.onChange(e.target.value)}
//     />;
//   }
// }

CMS.registerPreviewStyle("/css/main.css");
//CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerPreviewTemplate("values", ServicesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("sitepages", SitepagesPreview);
CMS.registerPreviewTemplate("lodging", LodgingPreview);
//CMS.registerWidget("color", ColorControl);