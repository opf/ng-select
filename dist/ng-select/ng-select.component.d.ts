import { OnDestroy, OnChanges, AfterViewInit, ChangeDetectorRef, EventEmitter, TemplateRef, ElementRef, SimpleChanges, QueryList, InjectionToken } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
import { ConsoleService } from './console.service';
import { ItemsList } from './items-list';
import { NgOption } from './ng-select.types';
import { NgDropdownPanelComponent } from './ng-dropdown-panel.component';
import { NgOptionComponent } from './ng-option.component';
import { SelectionModelFactory } from './selection-model';
import { NgSelectConfig } from './config.service';
export declare const SELECTION_MODEL_FACTORY: InjectionToken<SelectionModelFactory>;
export declare type DropdownPosition = 'bottom' | 'top' | 'auto';
export declare type AutoCorrect = 'off' | 'on';
export declare type AutoCapitalize = 'off' | 'on';
export declare type AddTagFn = ((term: string) => any | Promise<any>);
export declare type CompareWithFn = (a: any, b: any) => boolean;
export declare class NgSelectComponent implements OnDestroy, OnChanges, AfterViewInit, ControlValueAccessor {
    classes: string;
    tabIndex: string;
    private autoFocus;
    private _cd;
    private _console;
    items: any[];
    bindLabel: string;
    bindValue: string;
    clearable: boolean;
    markFirst: boolean;
    placeholder: string;
    notFoundText: string;
    typeToSearchText: string;
    addTagText: string;
    loadingText: string;
    clearAllText: string;
    dropdownPosition: DropdownPosition;
    appendTo: string;
    loading: boolean;
    closeOnSelect: boolean;
    hideSelected: boolean;
    selectOnTab: boolean;
    openOnEnter: boolean;
    maxSelectedItems: number;
    groupBy: string | Function;
    groupValue: Function;
    bufferAmount: number;
    virtualScroll: boolean;
    selectableGroup: boolean;
    selectableGroupAsModel: boolean;
    searchFn: any;
    excludeGroupsFromDefaultSelection: boolean;
    clearOnBackspace: boolean;
    labelForId: any;
    autoCorrect: AutoCorrect;
    autoCapitalize: AutoCapitalize;
    typeahead: Subject<string>;
    multiple: boolean;
    addTag: boolean | AddTagFn;
    searchable: boolean;
    isOpen: boolean;
    compareWith: CompareWithFn;
    clearSearchOnAdd: boolean;
    blurEvent: EventEmitter<{}>;
    focusEvent: EventEmitter<{}>;
    changeEvent: EventEmitter<{}>;
    openEvent: EventEmitter<{}>;
    closeEvent: EventEmitter<{}>;
    searchEvent: EventEmitter<{}>;
    clearEvent: EventEmitter<{}>;
    addEvent: EventEmitter<{}>;
    removeEvent: EventEmitter<{}>;
    scroll: EventEmitter<{
        start: number;
        end: number;
    }>;
    scrollToEnd: EventEmitter<{}>;
    optionTemplate: TemplateRef<any>;
    optgroupTemplate: TemplateRef<any>;
    labelTemplate: TemplateRef<any>;
    multiLabelTemplate: TemplateRef<any>;
    headerTemplate: TemplateRef<any>;
    footerTemplate: TemplateRef<any>;
    notFoundTemplate: TemplateRef<any>;
    typeToSearchTemplate: TemplateRef<any>;
    loadingTextTemplate: TemplateRef<any>;
    tagTemplate: TemplateRef<any>;
    dropdownPanel: NgDropdownPanelComponent;
    ngOptions: QueryList<NgOptionComponent>;
    filterInput: ElementRef;
    disabled: boolean;
    readonly filtered: boolean;
    itemsList: ItemsList;
    viewPortItems: NgOption[];
    filterValue: string;
    dropdownId: string;
    selectedItemId: number;
    element: HTMLElement;
    focused: boolean;
    private _defaultLabel;
    private _primitive;
    private _manualOpen;
    private _pressedKeys;
    private _compareWith;
    private _clearSearchOnAdd;
    private readonly _destroy$;
    private readonly _keyPress$;
    private _onChange;
    private _onTouched;
    clearItem: (item: any) => void;
    constructor(classes: string, tabIndex: string, autoFocus: any, config: NgSelectConfig, newSelectionModel: SelectionModelFactory, _elementRef: ElementRef, _cd: ChangeDetectorRef, _console: ConsoleService);
    readonly selectedItems: NgOption[];
    readonly selectedValues: (string | Object)[];
    readonly hasValue: boolean;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    handleKeyDown($event: KeyboardEvent): void;
    handleMousedown($event: MouseEvent): void;
    handleArrowClick(): void;
    handleClearClick(): void;
    clearModel(): void;
    writeValue(value: any | any[]): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    toggle(): void;
    open(): void;
    close(): void;
    toggleItem(item: NgOption): void;
    select(item: NgOption): void;
    focus(): void;
    unselect(item: NgOption): void;
    selectTag(): void;
    showClear(): boolean;
    readonly showAddTag: boolean;
    showNoItemsFound(): boolean;
    showTypeToSearch(): boolean;
    filter(term: string): void;
    onInputFocus($event: any): void;
    onInputBlur($event: any): void;
    onItemHover(item: NgOption): void;
    detectChanges(): void;
    updateDropdownPosition(): void;
    private _setItems;
    private _setItemsFromNgOptions;
    private _isValidWriteValue;
    private _handleWriteValue;
    private _handleKeyPresses;
    private _updateNgModel;
    private _clearSearch;
    private _scrollToMarked;
    private _scrollToTag;
    private _handleTab;
    private _handleEnter;
    private _handleSpace;
    private _handleArrowDown;
    private _handleArrowUp;
    private _nextItemIsTag;
    private _handleBackspace;
    private readonly _isTypeahead;
    private _mergeGlobalConfig;
}
