class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            width: 100%;
            background-color:#98d9d1;
            color: Green;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        h2{
            font-family:Brush Script MT;
            text-align:center;
        
        }
        h1,h3{
            color: #ebebeb;
            text-align:center;
            font-family: Perpetua ;
        }
        h2{
            margin-bottom:10px;
        }
        h3{
            font-size:14px;
        }
        div {
            padding:10px;
        }
        </style>
        <div>
            <h1>~RUANG ACARA~</h1>
            <h2>Laman Terbaik tuk Menemukan Selera Film Favoritmu!</h2>
        </div>
        `;
    }
}

customElements.define("app-bar", AppBar);