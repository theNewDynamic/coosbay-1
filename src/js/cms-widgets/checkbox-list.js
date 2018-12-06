import React from 'react';
import CMS from 'netlify-cms';
import lodash from 'lodash';

/**
 * Custom class for generating the control and previews for checkboxList.
 * This allows for passing a custom list into the control.
 * Not the best solution, but it works.
 * @param
 * @return
 */
export class GenerateCheckboxList {

    constructor() {}

    getControl(optionsList) {
        return createClass({
            handleChange: function(e) {

                var currentList = [];
                
                if (this.props.value) {
                    currentList = this.props.value;

                    if (currentList.indexOf(e.target.value) === -1) {
                        currentList.push(e.target.value);
                    } else {
                        var indexToRemove = currentList.indexOf(e.target.value);
                        currentList.splice(indexToRemove, 1);
                    }
                }

                this.props.onChange(currentList);
                
                //this.props.onChange(e.target.value.split(',').map((e) => e.trim()));

                // Given a value, determine whether we need to add or remove it from this.props.value

            },
        
            render: function() {
                
                var values = this.props.value.map((e) => {return e;});
                console.log(values);
                //return h('input', { type: 'text', value: value ? value.join(', ') : '', onChange: this.handleChange });
                var options = optionsList;
            
                var list = options.map((e, index) => {
                    var item = e.id.toString(10);
                    var label = e.label;

                    //console.log(item, label);
            
                    var selectedList = [];
                    if (values !== undefined) {
                        selectedList = values.map((selectedElement) => {
                            //console.log('selectedElement: ', selectedElement);
                            return selectedElement.toString(10);
                        });
                    }
            
                    //console.log(item, selectedList.indexOf(item));
                    // console.log(selectedList);
            
                    if (selectedList.indexOf(item) !== -1) {
                        return <li key={index}><label><input type="checkbox" value={item} onChange={this.handleChange} checked="checked" /> {label}</label></li>;
                    } else {
                        return <li key={index}><label><input type="checkbox" value={item} onChange={this.handleChange} /> {label}</label></li>;
                    }
                });
            
                // var list = this.props.value.map((e, index) => {
                //     console.log(e);
                //     //return h('input', { type: 'checkbox', value: e, onChange: this.handleChange });
                //     return <label key={index}><input type="checkbox" value={e} onChange={this.handleChange} /> {e}</label>;
                // });
                //console.log(list);
                return <ul className="checkboxList">{list}</ul>;
            }
        });
    }

    getPreview() {
        return createClass({
            render: function() {
                return h('ul', {},
                    this.props.value.map(function(val, index) {
                        return h('li', {key: index}, val);
                    })
                );
            }
        });
    }
}
