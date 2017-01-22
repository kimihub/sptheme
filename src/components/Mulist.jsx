'use strict';

import {h, Component} from 'preact';
import mulist from '../datas/common/mulist.yml';

export default class Mulist extends Component {

  constructor(props) {
    if (!props.title) {
      props.title = mulist.title;
    }
    if (!props.url) {
      props.url = mulist.url;
    }
    super(props);
  }

  state = {
    state: 'add',
    disabledSubmit: false,
    disabledField: false
  }

  handleSubmit (e) {
    e.preventDefault();
    let xhr, formData, self;
    formData = new FormData();
    formData.append('email', this.state.email);   
    /*xhr = new XMLHttpRequest();
    self = this;
    xhr.addEventListener('load', function(e) {
      if (this.responseText.errors) {
        self.setState({
          notifications: "Error: " + this.responseText.errors
        });
      }
      if (this.responseText.data) {
        self.setState({
          notifications: this.responseText.data + " submitted with success"
        });
      }
    });
    xhr.open('POST', this.props.url, true);
    //xhr.setRequestHeader('Accept', '');
    //xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //xhr.setRequestHeader('Content-Length', Buffer.byteLength(formData));
    xhr.send(formData);*/
    fetchJsonp('https://mulist-http-kimi-dev.44fs.preview.openshiftapps.com/add', {
      method: 'post',
      headers: {
      'Accept': '*/*',
      'Content-Length': Buffer.byteLength(formData),
      'Content-Type': 'multipart/form-data; charset=utf-8'
      },
      body: formData
    });
  }

  handleChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleFocus(e) {
    this.setState({
      disabledSubmit: false,
      state: 'add',
    });
  }

  render ({url, title}, {state, disabledSubmit, disabledField}) { 
    return (
      <section className="mulist">
        <div className="container">
          <h4>{title}</h4>
          <form className="submitter" action={url} onSubmit={this.handleSubmit.bind(this)}>
            <input placeholder="Email" className={state} value={this.state.email} disabled={disabledField} onFocus={this.handleFocus.bind(this)} onChange={this.handleChange.bind(this)} type="email" name="email" />
            <input type="submit" className={state} disabled={disabledSubmit} value="&nbsp;" />
          </form>
        </div>
      </section>
    );
  }
}
