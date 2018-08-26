import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
        value: '',
        hasErrors: false
      },
      comment: {
        value: '',
        hasErrors: false
      },
      errors: []
    }

    this.validations = [
      { name: 'email', label: 'email', rules: ['required', 'email'] },
      { name: 'comment', label: 'comentario', rules: ['required'] }
    ];
  }
  render() {
    return (
      <div className="Contact">
        <h2>Contáctanos</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          { this.state.errors.length ? (
            <div className="Contact-errors">
              Se han encontrado los siguientes errores:
              <ul>
                {this.state.errors.map((error, i) => (
                  <li key={i}>{error}.</li>
                ))}
              </ul>
            </div>
          ) : ''}
          <label htmlFor="email">Email</label>
          <input id="email" name="email" onChange={this.handleChange.bind(this)} />
          <label htmlFor="comment">Comentario</label>
          <textarea id="comment" name="comment" onChange={this.handleChange.bind(this)}>
          </textarea>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }

  handleChange(e) {
    const name = e.target.name,
      value = e.target.value,
      newState = {
        [name]: { ...this.state[name], value}
      };
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.validateForm()) {
      alert('Su comentario se ha enviado correctamente');
    };
  }

  validateForm() {
    const newState = {
      errors: []
    };

    this.validations.forEach((field) => {
      field.rules.some((rule) => {
        const fieldState = this.state[field.name];
        const error = this.checkRule(field.label, fieldState.value, rule);
        if(error) {
          newState[field.name] = { hasErrors: true };
          newState.errors.push(error);
          return true;
        }
        return false;
      });
    });

    this.setState(newState);
    return !newState.errors.length;
  }

  checkRule(label, value, rule) {
    switch(rule) {
      case 'required':
        if(!String(value).trim()) {
          return `Debe introducir un valor en el campo ${label}`;
        }
      break;
      case 'email':
        var re = /\S+@\S+\.\S+/;
        if (!re.test(value)) {
          return `El valor introducido en el campo ${label} no es un email válido`;
        }
      break;
      default:
        return false;
    }
  }
}

export default Contact;