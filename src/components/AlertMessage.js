import React, { Component } from 'react'

export default class AlertMessage extends Component {
  render() {
        return (
            <div className={`alert alert-${this.props.category} alert-dismissible fade show`} role='alert'>
                <strong>{this.props.message}</strong>
                <button type='button' className='btn-close' onClick={() => this.props.flashMessage(null, null)}></button>
            </div>
        )
    }
}