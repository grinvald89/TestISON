import { Injectable } from '@angular/core';

import { IDomNode } from '../shared/i-dom-node.interface';

@Injectable()
export class ModelOperationsService {
	toHTML (iModel: IDomNode) {
		if (iModel.tag) {
			let element = document.createElement(iModel.tag);

			if (iModel.attributes)
				for (let attribute in iModel.attributes)
					element.setAttribute(attribute, iModel.attributes[attribute]);

			if (iModel.content) {
				let content = '';

				for (let i = 0; i < iModel.content.length; i++)
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