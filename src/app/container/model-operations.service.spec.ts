import { TestBed, inject } from '@angular/core/testing';

import { ModelOperationsService } from './model-operations.service';

describe('ModelOperationsService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ModelOperationsService]
		});
	});

	it('should be created service', inject([ModelOperationsService], (service: ModelOperationsService) => {
		expect(service).toBeTruthy();
	}));

	it('should be created div with class block containing "content text"', inject([ModelOperationsService], (service: ModelOperationsService) => {
		let model = {
			tag: 'div',
			attributes: { class: 'block' },
			text: 'content text'
		}
		expect(service.toHTML(model)).toEqual('<div class="block">content text</div>');
	}));

	it('should be created directive{content text}', inject([ModelOperationsService], (service: ModelOperationsService) => {
		let model = {
			tag: 'directive',
			text: 'content text'
		}
		expect(service.toHTML(model)).toEqual('<directive>content text</directive>');
	}));

	it('should be created div>h1{content text}', inject([ModelOperationsService], (service: ModelOperationsService) => {
		let model = {
			tag: 'div',
			content: [{
				tag: 'h1',
				text: 'content text'
			}]
		}
		expect(service.toHTML(model)).toEqual('<div><h1>content text</h1></div>');
	}));

	it('should be created span{content text}', inject([ModelOperationsService], (service: ModelOperationsService) => {
		let model = {
			tag: 'span',
			text: 'content text'
		}
		expect(service.toHTML(model)).toEqual('<span>content text</span>');
	}));

	it('should be created div>h1{title}+h2{description}+span(style="color: green")+input(value="value")+ul>li*3{item $}', inject([ModelOperationsService], (service: ModelOperationsService) => {
		let model = {
			tag: 'div',
			content: [
				{
					tag: 'h1',
					text: 'title'
				},
				{
					tag: 'h2',
					text: 'description'
				},
				{
					tag: 'span',
					attributes: { style: 'color: green' },
					content: [{ text: 'Enter value' }]
				},
				{
					tag: 'input',
					attributes: { value: 'value' }
				},
				{
					tag: 'ul',
					attributes: { class: 'list' },
					content: [
						{
							tag: 'li',
							text: 'item 1'
						},
						{
							tag: 'li',
							text: 'item 2'
						},
						{
							tag: 'li',
							text: 'item 3'
						}
					]
				},
			]
		}
		expect(service.toHTML(model)).toEqual('<div><h1>title</h1><h2>description</h2><span style="color: green">Enter value</span><input value="value"><ul class="list"><li>item 1</li><li>item 2</li><li>item 3</li></ul></div>');
	}));

	it('should be return an empty string', inject([ModelOperationsService], (service: ModelOperationsService) => {
		let model = {
			ass: 'div',
			attr: { class: 'block' },
			txt: 'content text'
		}
		expect(service.toHTML(model)).toEqual('');
	}));
});
