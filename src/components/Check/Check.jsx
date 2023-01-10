import React from 'react'
import { render } from 'react-dom'
import Card from 'react-credit-cards'
// import './index.css'

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './utils'

import 'react-credit-cards/es/styles-compiled.css'

export default class CreditCard extends React.Component {
  state = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null
  }

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer })
    }
  }

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    })
  }

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value)
    }

    this.setState({ [target.name]: target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    alert('Payment was successful')
    this.form.reset()
  }

  render () {
    const { name, number, expiry, cvc, focused, issuer } = this.state

    return (
      <div key='Payment'>
        <div className='App-payment'>
          <h1 className='CreditC'>Credit card</h1>

          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
            <div className='form-group' >
              <small>Name on card:</small>

              <input
                type='text'
                name='name'
                className='input'
                placeholder='Name'
                pattern='[a-z A-Z-]+'
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className='form-group'>
              <small>Card Number:</small>

              <input
                type='tel'
                name='number'
                className='input'
                placeholder='Card Number'
                pattern='[\d| ]{16,22}'
                maxLength='19'
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>

            <div className='form-group'>
              <small>Expiration Date:</small>

              <input
                type='tel'
                name='expiry'
                className='input'
                placeholder='Valid Thru'
                pattern='\d\d/\d\d'
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className='form-group'>
              <small>CVC:</small>

              <input 
                type='tel'
                name='cvc'
                className='input'
                placeholder='CVC'
                pattern='\d{3}'
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <input type='hidden' name='issuer' value={issuer} />
            <div className='form-actions'>
              <button className='button'>BUY</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

render(<CreditCard />, document.getElementById('root'))
