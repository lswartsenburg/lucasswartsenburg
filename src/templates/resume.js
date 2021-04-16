import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {htmlToReact, safePrefix} from '../utils';
import Component from 'resumeGit'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

export default class Resume extends React.Component {
    render() {
        if (typeof window === 'undefined') {
          return null;
        }
        return (
            <Layout {...this.props}>
              <Component />
            </Layout>
        );
    }
}
