import * as React from 'react';
import { PropsWithChildren, useEffect, useState } from 'react';
import { IconName, TooltipPlacement } from '..';
import { TextInput, TextInputProps } from '../forms/textinput/TextInput';
import { Menu } from '../menu/Menu';
import { Popover, PopoverOpenTrigger, PopoverProps } from '../overlays/Popover';
import FocusTrap from 'focus-trap-react';
import cxs from 'cxs';
import { AnyElement } from '../common/AnyElement';
import { useHotKey } from '@blackmaker/hotkeys';

type MaybeUndefined<Type, CanBeUndefined extends boolean> = CanBeUndefined extends true ? Type | undefined : Type;
export type SingleOrMulti<IsMulti extends boolean, Item, CanBeUndefined extends boolean> = IsMulti extends true ? Item[] : MaybeUndefined<Item, CanBeUndefined>;

export interface RenderItemProps {
  onClick: React.MouseEventHandler<HTMLElement>;
  onHover: React.MouseEventHandler<HTMLElement>;
  query: string;
  active: boolean;
  selected: boolean;
  matchesQuery: boolean;
  index: number;
}

export interface RenderStateProps<M extends boolean, T extends object> {
  query: string;
  selected: SingleOrMulti<M, T, true>;
  onChange: (value: string) => void;
  isOpen: boolean;
}

export interface SelectProps<M extends boolean, T extends object> {
  multi: M;
  embedSearch: boolean;
  createNewItem?: (query: string) => SingleOrMulti<M, T, false>;
  createNewItemPosition?: 'start' | 'end';
  renderCreateNewItemBox?: (query: string, onClick: React.MouseEventHandler<HTMLElement>) => JSX.Element;
  initialContent?: JSX.Element;
  // onQueryItems?: (query: string, items: T[]) => T[];
  isMatching: (query: string, item: T) => boolean;
  renderItem: (item: T, props: RenderItemProps) => JSX.Element;
  items: ReadonlyArray<T>;
  renderNoResults?: (query: string) => JSX.Element;
  onChange?: (items: SingleOrMulti<M, T, true>) => void;
  onSelect?: (item: T, isSelected: boolean) => void;
  onChangeQuery?: (query: string) => void;
  renderState: (props: RenderStateProps<M, T>) => JSX.Element;
  renderEmbeddedSearch?: (query: string, onChange: (value: string) => void) => JSX.Element;
  embeddedSearchProps?: Partial<TextInputProps>;
  renderContentContainer?: (itemContent: AnyElement | AnyElement[], embeddedSearch?: AnyElement) => AnyElement;
  itemsEqual: (itemA: T, itemB: T) => boolean;
  popoverProps?: Partial<PopoverProps>;
}

const DefaultRenderContentContainer = (itemContent: JSX.Element, embeddedSearch?: JSX.Element) => (
  <FocusTrap>
    <Menu>
      {embeddedSearch}
      <div className={cxs({
        maxHeight: '400px',
        overflowY: 'auto',
      })}>
          {itemContent}
      </div>
    </Menu>
  </FocusTrap>
);

const DefaultRenderNoResults = (query: string) => (
  <p>No results.</p>
);

export const Select: <T extends object, M extends boolean>(props: SelectProps<M, T>) => React.ReactElement = props => {
  const { multi, items } = props;
  const [isInitial, setIsInitial] = useState(true);
  const [query, setQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [matchedItems, setMatchedItems] = useState([]);
  const [activeItem, setActiveItem] = useState(items[0]);
  const [isOpen, setIsOpen] = useState(false);
  const renderContentContainer = props.renderContentContainer ?? DefaultRenderContentContainer;
  const NoResults = props.renderNoResults ? props.renderNoResults(query) : DefaultRenderNoResults;

  useEffect(() => {
    setIsInitial(false);
    props.onChangeQuery?.(query);
    const matched = items.filter(i => props.isMatching(query, i));
    setMatchedItems(matched);
    setActiveItem(matched[0]);
  }, [query]);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setActiveItem(items[0]);
    }
  }, [isOpen]);

  const clickItem = (item) => {
    if (!item) return;

    const isSelected = selectedItems.includes(item);
    props.onSelect?.(item, isSelected);

    if (isSelected) {
      setSelectedItems(items => items.filter(i => !props.itemsEqual(i, item)));
    } else {
      if (multi) {
        setSelectedItems(items => [...items, item]);
      } else {
        setSelectedItems([item]);
      }
    }

    props.onChange?.(multi ? selectedItems : undefined as any);
  }

  useHotKey({ combination: 'enter' }, () => clickItem(activeItem)); // TODO scope to list container ref

  let itemsList: JSX.Element[] = [];

  if ((isInitial && !props.initialContent) || matchedItems.length > 0) {
    itemsList = matchedItems.map((item, index) => (
      props.renderItem(
        item,
        {
          active: activeItem && props.itemsEqual(item, activeItem),
          selected: selectedItems.includes(item),
          index: index,
          matchesQuery: props.isMatching(query, item),
          onHover: () => setActiveItem(item),
          onClick: () => clickItem(item),
          query: query
        }
      )
    ))
  }

  const content = !isOpen ? undefined : (renderContentContainer(
    isInitial ? (
      props.initialContent ?? itemsList
    ) : matchedItems.length === 0 ? (
      NoResults
    ) : (
      itemsList
    ),
    props.embedSearch && (props.renderEmbeddedSearch?.(query, setQuery) ?? (
      <TextInput
        elementProps={{
          onClick: e => e.stopPropagation(),
        }}
        autoFocus={true}
        round={true}
        small={true}
        value={query}
        onChange={(e, value) => setQuery(value)}
        leftElement={IconName.Search}
        fill={true}
        placeholder="Search for items..."
        {...props.embeddedSearchProps}
      />
    ))
  ));

  return (
    <Popover
      trigger={PopoverOpenTrigger.ClickReference}
      placement={TooltipPlacement.BottomStart}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      content={content}
      closeOnClickInside={!multi}
      closeOnClick={true}
      closeOnEscape={true}
      {...props.popoverProps}
    >
      { props.renderState({
        onChange: setQuery,
        selected: multi ? selectedItems : selectedItems[0],
        query,
        isOpen
      }) }
    </Popover>
  );
};
