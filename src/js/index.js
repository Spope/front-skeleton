import {html, render} from '@spope/glucose';
import test from './test.js';

addEventListener('DOMContentLoaded', () => {
    render(document.body, html`<test-component />`);
});
