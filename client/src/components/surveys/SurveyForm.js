import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';//similar to connect
//connect to store//Filed used to show different HTNL element
import SurveyField from './SurveyFiled';
import validateEmails from '../../utils/validateEmails';

const FIELDS =[
{ label: 'Survey Title', name: 'title', errorMessage: 'You must provide a title' },
{ label: 'Subjecy Line', name: 'subject', errorMessage: 'You must provide a subject'},
{ label: 'Email Body', name: 'body', errorMessage: 'You must provide a email body' },
{ label: 'Recipient List', name: 'emails', errorMessage: 'You must provide a email' }
];

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({label, name}) =>
        {
            return (
                <Field
                    key={name}
                    component={SurveyField}
                    type='text'
                    label={label}
                    name={name}/>
            );
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(() => this.props.onSurveySubmit())}>
                    {this.renderFields()}
                    <Link to='/surveys' className='red btn-flat left white-text'>
                        Cancel
                    </Link>
                    <button type="submit" className='teal btn-flat right white-text'>
                        Next
                        <i className='material-icons right'>done</i>
                    </button>
                </form>

            </div>
        );
    }
}
//values send by user
function validate(values) {
    const errors = {};

    // if(!values.title) {
    //     errors.title = 'You must provide a title';//error.title和Field中的name field相同
    // }
    errors.emails = validateEmails(values.emails || '');

    _.each(FIELDS, ({ name, errorMessage }) => {
        if (!values[name]) {
            errors[name] = errorMessage;
        }
    });


    return errors;//如果redux接受到一个空的{}，就会认为没有error
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);//adding some additional props to the survey form,  props.handleSubmit是reduxForm提供的*/*/}