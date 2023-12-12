// app-modal.js
class AppModal extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        this.shadow = this.attachShadow({mode: 'open'});

        // Create styles
        const style = document.createElement('style');
        style.textContent = `
            #app {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                padding: 2em;
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            #app > * {
                position: relative;
                background-color: #fff;
                padding: 2em;
                border-radius: 1em;
                box-shadow: 0px 1em 2em rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23);
            }

            #closeButton {
                position: absolute;
                top: 0.8em;
                right: 0.8em;
                background: none;
                border: none;
                font-size: 1em;
                cursor: pointer;
                z-index: 10;
                background-color: #0078d4;
                color: white;
                padding: 10px;
                border-radius: 5px;
                box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23);            
            }
        `;

        // Create app div
        this.appDiv = document.createElement('div');
        this.appDiv.id = 'app';

        // Append styles and app div to the shadow root
        this.shadow.appendChild(style);
        this.shadow.appendChild(this.appDiv);
    }
    close() {
        while (this.appDiv.firstChild) {
            this.appDiv.removeChild(this.appDiv.firstChild);
        }
    }
    addCloseButton() {
        // Create close button
        const closeButton = document.createElement('button');
        closeButton.id = 'closeButton';
        closeButton.textContent = '✖';
        closeButton.addEventListener('click', () => {
            while (this.appDiv.firstChild) {
                this.appDiv.removeChild(this.appDiv.firstChild);
            }
        });

        // Append close button to the app div
        this.appDiv.appendChild(closeButton);
    }

    appendChild(node) {
        this.appDiv.appendChild(node);
        this.addCloseButton();
    }
}

export default AppModal;