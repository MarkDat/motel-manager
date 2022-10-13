import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {DxLookupComponent, DxPopupComponent} from 'devextreme-angular';
import List from 'devextreme/ui/list';
import {Key} from 'ts-keycode-enum';
import { CommonFunction } from '@app/shared/utilities/common-funtion';

@Component({
	selector: 'app-dx-lookup-custom',
	templateUrl: './dx-lookup-custom.component.html',
	styleUrls: ['./dx-lookup-custom.component.scss']
})
export class DxLookupCustomComponent implements OnInit {
	@ViewChild('addItemPopup', {static: false}) addItemPopup: DxPopupComponent;
	@ViewChild('dxLookup', {static: false}) dxLookup: DxLookupComponent;

	@Output() itemSelected = new EventEmitter<any>();
	@Output() clearSelected = new EventEmitter<any>();
	@Input() placeholder: string;
	@Input() searchPlaceHolder: string;
	@Input() noLookupData: string;
	@Input() dataSource: any;
	@Input() displayExpr: string;
	@Input() valueExpr: string;
	@Input() validateRequired: boolean = false;
	@Input() isDisabled = false;
	@Input() isSearch = true;
	@Input() isAddedMoreItem = false;
	@Input() isInlineControl = false;
	@Input() removeBorderBottom = false;
	@Input() isAcceptZeroValue = false;
	@Input() popupWidth = 'auto';
	@Input() height: number = 44;
	@Input() isChangePopupWith: boolean = false;
	@Input() isShowClearButton: boolean = false;
	@Input() allowRemotePaging = false;
	@Input() customItemTemplate: TemplateRef<HTMLElement>;
	@Input() customSearchBoxClass: string;
	@Input() closeOnOutsideClick: boolean = true;
	@Input() showTitle: boolean = true;

	@Output() tabKeyPress = new EventEmitter<any>();

	private _value: any;
	@Input() get value(): any {
		return this._value;
	}

	set value(value: any) {
		if (this._value !== value) {
			this._value = value;
			this.valueChange.emit(value);
		}
	}

	@Output() valueChange = new EventEmitter<any>();
	@Output() onSelectionChanged = new EventEmitter<any>();

	@Output() searchTermChange = new EventEmitter<any>();
	@Output() openAddNewPopup = new EventEmitter<any>();

	itemToAdd: string;
	searchLookupEnterInterval: any;
	@Output() addNewItemPopup = new EventEmitter<any>();
	searchListInstance: any;
	isOpened: boolean = false;

	constructor() {
	}

	initSearchBox(event) {
		const content = event.component._popup._$content;
		if (!!this.customSearchBoxClass && !content.hasClass(this.customSearchBoxClass)){
			content.addClass(this.customSearchBoxClass);
		}
		
		const popupContent = event.component._popup._$popupContent;
		const addItemWrapEle = popupContent.find('.lookup-add-item-wrap');

		if (addItemWrapEle.length > 0) {
			return;
		}

		const searchElement = popupContent.find('.dx-lookup-search-wrapper');
		const searchBox = searchElement.find('.dx-texteditor-input');
		const searchBoxElement = searchBox[0];
		if (searchBoxElement) {
			searchBoxElement.addEventListener('keydown', (e) => {
				if (e.key === 'Tab') {
					this.dxLookup.instance.close();
				}
			});
			searchBoxElement.addEventListener('keyup', (e) => {
				if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
					if (this.searchListInstance) {
						this.searchListInstance.unselectItem(0);
					}
					return;
				}

				//
				if (e.key === 'Enter') {
					if (this.dxLookup.items.length === 0 && this.isAddedMoreItem) {
						this.dxLookup.instance.close();
						this.openAddNewPopup.emit(Math.random());
					} else {
						if (this.searchListInstance && this.searchListInstance.isItemSelected(0)) {
							const firstSelected = this.searchListInstance.option('selectedItems')[0];
							if (firstSelected) {
								this.value = firstSelected[this.valueExpr];
								this.dxLookup.instance.close();
							}
						}
					}
				} else {
					if (/^\s/.test(searchBoxElement.value) && searchBoxElement.value.trim() !== '') {
						searchBoxElement.value = searchBoxElement.value.trim();
					}
					if (searchBoxElement.value && !this.allowRemotePaging) {
						this.setFirstSelection(popupContent);
					}

					this.searchTermChange.emit(searchBoxElement.value);
				}
			});

			setTimeout(() => {
				searchBoxElement.focus();
			}, 500);
		}
	}

	ngOnInit() {
	}

	onItemClick(event: any) {
		this.itemSelected.emit(event.itemData);
	}

	validationRequiredCallback = (param) => {
		if (this.validateRequired) {
			return !param.value;
		}

		return true;
	};

	private setFirstSelection(popupContent: any) {
		if (this.searchLookupEnterInterval) {
			clearInterval(this.searchLookupEnterInterval);
		}

		this.searchLookupEnterInterval = setInterval(() => {
			clearInterval(this.searchLookupEnterInterval);

			const dxList = popupContent.find('.dx-list');
			const instance = List.getInstance(dxList) as List;
			if (instance) {
				this.searchListInstance = instance;
				instance.selectItem(0);
			}
		}, 500);
	}

	onOpened(event: any) {
		this.isOpened = true;

		this.initSearchBox(event);
		
		const popupContent = event.component._popup._$popupContent;
		if (popupContent) {
			const dxList = popupContent.find('.dx-list');
			this.searchListInstance = List.getInstance(dxList) as List;

			this.searchListInstance.element().addEventListener('keydown', (e) => {
				this.dxLookup.instance.close();
			});
		}

		if (this.isChangePopupWith) {
			this.changeWidthPopup(event);
		}
	}

	changeWidthPopup(event: any) {
		const popupItemElement = event.component.content();
		if (!!popupItemElement) {
			popupItemElement.style.height = '100%';
			popupItemElement.parentElement.style.width = '250px';

			const popupBottom = popupItemElement.parentElement.getElementsByClassName('dx-popup-bottom');
			if (popupBottom.length > 0) {
				popupBottom[0].classList.add('custom-clear-popup-bottom');
			}
		}
	}

	onClosed($event: any) {
		this.isOpened = false;
	}

	onFocusIn(event) {
		if (!this.isOpened) {
			setTimeout(() => {
				this.dxLookup.instance.open();
			}, 200);
		}
	}

	focus() {
		setTimeout(() => {
			this.isOpened = true;
			this.dxLookup.instance.focus();
			setTimeout(() => {
				this.isOpened = true;
			}, 200);
		});
	}

	onKeyTabPress(event) {
		const isTabClicked = CommonFunction.IsKeyCodeMatch(event, Key.Tab, 'Tab');
		if (isTabClicked) {
			this.tabKeyPress.emit(event);
		}
	}

	onValueChanged(event: any) {
		if (event.value == null && !!event.previousValue) {
			this.clearSelected.emit(Math.random());
		}
	}

	onContentReady(event: any) {
		if (this.isChangePopupWith) {
			setTimeout(() => {
				this.changeWidthPopup(event);
			}, 0);
		}
	}
}
