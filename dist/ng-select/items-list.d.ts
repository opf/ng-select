import { NgOption } from './ng-select.types';
import { NgSelectComponent } from './ng-select.component';
import { SelectionModel } from './selection-model';
export declare class ItemsList {
    private _ngSelect;
    private _selectionModel;
    private _groups;
    constructor(_ngSelect: NgSelectComponent, _selectionModel: SelectionModel);
    private _items;
    readonly items: NgOption[];
    private _filteredItems;
    readonly filteredItems: NgOption[];
    private _markedIndex;
    readonly markedIndex: number;
    readonly selectedItems: NgOption[];
    readonly markedItem: NgOption;
    readonly noItemsToSelect: boolean;
    readonly maxItemsSelected: boolean;
    readonly lastSelectedItem: NgOption;
    setItems(items: any[]): void;
    select(item: NgOption): void;
    unselect(item: NgOption): void;
    findItem(value: any): NgOption;
    addItem(item: any): NgOption;
    clearSelected(): void;
    findByLabel(term: string): NgOption;
    filter(term: string): void;
    resetFilteredItems(): void;
    unmarkItem(): void;
    markNextItem(): void;
    markPreviousItem(): void;
    markItem(item: NgOption): void;
    markSelectedOrDefault(markDefault?: boolean): void;
    resolveNested(option: any, key: string): any;
    mapItem(item: any, index: number): NgOption;
    mapSelectedItems(): void;
    private _showSelected;
    private _hideSelected;
    private _defaultSearchFn;
    private _getNextItemIndex;
    private _stepToItem;
    private _groupBy;
    private _flatten;
}
