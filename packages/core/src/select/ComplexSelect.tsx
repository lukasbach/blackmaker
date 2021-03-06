import * as React from 'react';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { IconName, TooltipPlacement } from '..';
import { TextInput, TextInputProps } from '../forms/textinput/TextInput';
import { Menu } from '../menu/Menu';
import { Popover, PopoverOpenTrigger, PopoverProps } from '../overlays/Popover';
import FocusTrap from 'focus-trap-react';
import cxs from 'cxs';
import { AnyElement } from '../common/AnyElement';
import { useHotKey } from '@blackmaker/hotkeys';
import { useUniqueId } from '../common/useUniqueId';
import { Instance } from 'tippy.js';

type MaybeUndefined<Type, CanBeUndefined extends boolean> = CanBeUndefined extends true ? Type | undefined : Type;
type SingleOrMulti<IsMulti extends boolean, Item, CanBeUndefined extends boolean> = IsMulti extends true
  ? Item[]
  : MaybeUndefined<Item, CanBeUndefined>;

export interface RenderItemProps {
  onClick: React.MouseEventHandler<HTMLElement>;
  onHover: React.MouseEventHandler<HTMLElement>;
  query: string;
  active: boolean;
  selected: boolean;
  matchesQuery: boolean;
  index: number;
  id: string;
}

export interface RenderStateProps<M extends boolean, T extends object> {
  query: string;
  selected: SingleOrMulti<M, T, true>;
  onChange: (value: string) => void;
  isOpen: boolean;
}

export interface ComplexSelectProps<M extends boolean, T extends object> {
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

  /**
   * Control which items are selected. Should be used in conjunction with ``onChange``. If set to
   * ``undefined``, the component is controlled. Use ``null`` for non-multi selects to specify that
   * no item is selected, or ``[]`` for multi selects.
   */
  selectedItems?: SingleOrMulti<M, T, false> | null;
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
  query?: string;
}

const DefaultRenderContentContainer = (itemContent: AnyElement | AnyElement[], embeddedSearch?: AnyElement) => (
  <FocusTrap>
    <Menu>
      {embeddedSearch}
      <div
        className={cxs({
          maxHeight: '400px',
          overflowY: 'auto',
        })}
      >
        {itemContent}
      </div>
    </Menu>
  </FocusTrap>
);

const DefaultRenderNoResults = (query: string) => <p>No results.</p>;

export const ComplexSelect: <T extends object, M extends boolean>(
  props: ComplexSelectProps<M, T>
) => React.ReactElement = props => {
  const childIdPrefix = useUniqueId('__blackmaker_select_child_');
  const { multi, items } = props;
  const [isInitial, setIsInitial] = useState(true);
  const [query, setQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [matchedItems, setMatchedItems] = useState<any[]>([]);
  const [activeItem, setActiveItem] = useState(items[0]);
  const [isOpen, setIsOpen] = useState(false);
  const embeddedInputRef = useRef<HTMLInputElement>(null);
  const popoverRef = useRef<Instance>(null);
  const renderContentContainer = props.renderContentContainer ?? DefaultRenderContentContainer;
  const NoResults = props.renderNoResults ? props.renderNoResults(query) : DefaultRenderNoResults(query);

  const isQueryControlled = !props.embedSearch;
  const isSelectedItemsControlled = props.selectedItems !== undefined;

  useEffect(() => {
    if (props.query !== undefined) {
      setQuery(props.query);
    }
  }, [props.query]);

  useEffect(() => {
    if (props.selectedItems !== undefined) {
      if (multi) {
        setSelectedItems(props.selectedItems as any[]);
      } else {
        setSelectedItems(props.selectedItems ? [props.selectedItems] : []);
      }
    }
  }, [props.selectedItems]);

  useEffect(() => {
    setIsInitial(false);
    props.onChangeQuery?.(query);
    const matched = items.filter(i => props.isMatching(query, i));
    setMatchedItems(matched);
    setActiveItem(matched[0]);
  }, [query]);

  useEffect(() => {
    if (!isOpen) {
      if (!isQueryControlled) {
        setQuery('');
      }
      setActiveItem(items[0]);
    }
  }, [isOpen]);

  const clickItem = (item: any) => {
    if (!item) return;

    const isSelected = selectedItems.includes(item);
    props.onSelect?.(item, isSelected);

    let newSelectedItems: any[];

    if (isSelected) {
      newSelectedItems = selectedItems.filter(i => !props.itemsEqual(i, item));
    } else {
      if (multi) {
        newSelectedItems = [...selectedItems, item];
      } else {
        newSelectedItems = [item];
        popoverRef.current?.hide();
      }
    }

    props.onChange?.(multi ? newSelectedItems : newSelectedItems[0] ?? (undefined as any));
    if (!isSelectedItemsControlled) {
      setSelectedItems(newSelectedItems);
    }
  };

  useHotKey({ combination: 'enter' }, () => {
    if (isOpen) {
      clickItem(activeItem);
    }
  }); // TODO scope to list container ref
  useHotKey({ combination: 'down' }, () => {
    const currentIndex = matchedItems.indexOf(activeItem);
    const newIndex = (currentIndex + 1) % matchedItems.length;
    setActiveItem(matchedItems[newIndex]);
    const activeElement = document.getElementById(childIdPrefix + newIndex);
    activeElement?.scrollIntoView({ behavior: 'auto', inline: 'nearest' });
  });
  useHotKey({ combination: 'up' }, () => {
    const currentIndex = matchedItems.indexOf(activeItem);
    const newIndex = currentIndex === 0 ? matchedItems.length - 1 : currentIndex - 1;
    setActiveItem(matchedItems[newIndex]);
    const activeElement = document.getElementById(childIdPrefix + newIndex);
    activeElement?.scrollIntoView({ behavior: 'auto', inline: 'nearest' });
  });

  let itemsList: JSX.Element[] = [];

  if ((isInitial && !props.initialContent) || matchedItems.length > 0) {
    itemsList = matchedItems.map((item, index) =>
      props.renderItem(item, {
        active: activeItem && props.itemsEqual(item, activeItem),
        selected: selectedItems.includes(item),
        index: index,
        matchesQuery: props.isMatching(query, item),
        onHover: () => setActiveItem(item),
        onClick: () => clickItem(item),
        query: query,
        id: childIdPrefix + index,
      })
    );
  }

  const content = renderContentContainer(
    isInitial ? props.initialContent ?? itemsList : matchedItems.length === 0 ? NoResults : itemsList,
    props.embedSearch &&
      (props.renderEmbeddedSearch?.(query, setQuery) ?? (
        <TextInput
          ref={embeddedInputRef}
          autoFocus={true}
          round={true}
          small={true}
          value={query}
          onChange={(e, value) => setQuery(value)}
          leftElement={IconName.Search}
          fill={true}
          placeholder="Search for items..."
          css={{
            marginBottom: '1em',
          }}
          {...props.embeddedSearchProps}
        />
      ))
  );

  return (
    <Popover
      ref={popoverRef}
      animated={true}
      trigger={PopoverOpenTrigger.ClickReference}
      placement={TooltipPlacement.BottomStart}
      onOpen={() => {
        setIsOpen(true);
        setTimeout(() => embeddedInputRef?.current?.focus());
      }}
      onClose={() => {
        setIsOpen(false);
      }}
      content={content}
      closeOnClick={true}
      closeOnEscape={true}
      {...props.popoverProps}
    >
      {props.renderState({
        onChange: setQuery,
        selected: multi ? selectedItems : selectedItems[0],
        query,
        isOpen,
      })}
    </Popover>
  );
};
