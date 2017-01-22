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
    if (!props.button) {
      props.button = mulist.button? mulist.button:'';
    }
    super(props);
  }

  state = {
    state: 'add',
    disabledSubmit: '',
    disabledField: ''
  }

  handleSubmit (event) {
    let xhr, onfail, self;
    
    self = this;

    event.preventDefault();

    if (this.state.email.trim() === '') {
      return;
    }

    this.setState({
      disabledField: true,
      disabledSubmit: true,
      state:'load',
    });
      
    xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE) {
        try {
          xhr.responseJSON = JSON.parse(xhr.responseText);
        } catch(e) {
          xhr.responseJSON = null;
        }
      }
    };

    xhr.addEventListener('load', function () {
      self.setState({
        disabledField: ''
      });

      if (this.status === 200) {
        self.setState({
          state: 'checked'
        });
      } else {
        
        if (this.responseJSON.message === 'wrong email') {
          self.setState({
            state: 'error'
          });
        }
        else {
          self.setState({
            state: 'checked'
          });
        }
      }
    });

    onfail = () => {
      this.setState({
        disabledField: '',
        disabledSubmit: '',
        state: 'add',
      });
    };

    xhr.addEventListener('abort', onfail);
    xhr.addEventListener('error', onfail);
    xhr.addEventListener('timeout', onfail);
    xhr.open('POST', this.props.url + '/add');
    xhr.send('email=' + this.state.email);
  }

  handleChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleFocus(e) {
    this.setState({
      disabledSubmit: '',
      state: 'add',
    });
  }

  render ({url, title, button}, {state, disabledSubmit, disabledField}) { 
    if (button) {
      return (
        <section className="mulist">
          <div className="container">
            <h4>{title}</h4>
            <p><a href={url} className="button add" target="_blank">{button}</a></p> 
          </div>
        </section>
      );
    }
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
