import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

interface IDomNode {
	 tag?: string | undefined;
	 attributes?: {[key: string]: string};
	 content?: IDomNode[];
	 text?: string;
 }

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	ODomNode: IDomNode;

	constructor(private sanitizer: DomSanitizer) { }

	json: IDomNode = {
		tag: "div",
		content: [
			{
				tag: "span",
				attributes: { style: "color: red" },
				content: [{ text: "Enter value:" }]
			},
			{
				tag: "input",
				attributes: {
					type: "text",
					value: "test",
					style: "color: green"
				}
			}
		]
	}

	ngOnInit() {
		this.ODomNode = this.sanitizer.bypassSecurityTrustHtml(this.toHTML(this.json));
	}

	toHTML(iModel: IDomNode) {
		if (iModel.tag) {
			let element = document.createElement(iModel.tag);

			if (iModel.attributes)
				for (let attribute in iModel.attributes)
					element.setAttribute(attribute, iModel.attributes[attribute]);

			if (iModel.content) {
				let content = '';

				for (let i = 0; i < iModel.content.length; ++i)
					content += this.toHTML(iModel.content[i]);

				element.innerHTML = content;
			}

			if (iModel.text)
				element.innerHTML = iModel.text;

			return element.outerHTML;
		}
		else
			return iModel.text ? iModel.text : '';
	}
}