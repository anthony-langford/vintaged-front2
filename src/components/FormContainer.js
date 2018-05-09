import React from 'react';
import {reset} from 'redux-form';
import { connect } from 'react-redux';
import ContactForm from './Form';
export default class ContactPage extends React.Component {
    submit = (values, finalDispatch, finalProps) => {
        // print the form values to the console
        finalProps.reset();
        console.log(values);
    };
    render() {
        return <ContactForm onSubmit={this.submit} />
    }
}
