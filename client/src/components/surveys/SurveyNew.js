import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyReview';

class SurveyNew extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { showFormReview: true };
    // } equal to =>
    state = { showFormReview: false };
    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview/>
        }
        return <SurveyForm onSurveySubmit = {() => this.setState({ showFormReview: true })}/>
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default SurveyNew;