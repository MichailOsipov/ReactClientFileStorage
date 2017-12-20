import React, {PureComponent} from 'react';
import {nodeJsWorker} from 'api/node-js-worker';

export class FetchSomething extends PureComponent {
    state = {data: {}};

    componentDidMount() {
        nodeJsWorker()
            .then((response) => {
                this.setState(() => ({
                    data: response
                }));
            });
    }

    render() {
        return (
            <div>I fetch something!</div>
        );
    }
}
