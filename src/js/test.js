import {Component, html, render} from '@spope/glucose';

class TestComponent extends Component {
    renderComponent(){
        render(this, html`<p>Ready to build things`);
    }
}
customElements.define('test-component', TestComponent);

export default TestComponent;
