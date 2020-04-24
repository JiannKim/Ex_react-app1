import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';

class ErrorBoundary extends Component {
    state = {
        error: false
    };

    componentDidCatch(err, info) {
        console.log('에러가 발생');
        console.log({
            err,
            info
        });
        this.setState({
            error: true
        });
        if (process.env.NODE_ENV === 'production') {
            Sentry.captureException(err, { extra: info });
        }
    }

    render() {
        if (this.state.error) {
            return <h1>에러 발생!</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;