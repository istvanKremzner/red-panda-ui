import { FC, Fragment, useCallback, useEffect, useRef, useState } from "react";
import { useElementInViewport } from "./use-is-element-in-viewport.hook";
import classes from "./infinite-list.module.scss";
import clsx from "clsx";

export interface IInfiniteScrollProps<TElement> {
  initialItems?: TElement[];
  onLoad: () => TElement[] | Promise<TElement[]>;

  loader?: JSX.Element;
  renderItem: (item: TElement) => JSX.Element;
}

export const InfiniteList = <TElement extends object>({
  initialItems,
  onLoad,
  loader,
  renderItem,
}: IInfiniteScrollProps<TElement>) => {
  const [items, setItems] = useState<TElement[]>(initialItems ?? []);
  const [isLoading, setIsLoading] = useState(false);

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const {
    isElementInViewport: isLoaderVisible,
    evaluateElementPosition: evaluateLoaderPosition,
  } = useElementInViewport(loaderRef);

  const updateElements = useCallback(async () => {
    const newItems = await onLoad();

    setItems((state) => [...state, ...newItems]);
    setIsLoading(false);

    evaluateLoaderPosition();
  }, [setItems, onLoad, setIsLoading]);

  useEffect(() => {
    if (isLoaderVisible && !isLoading) {
      updateElements();
      setIsLoading(true);
    }
  }, [isLoaderVisible, isLoading]);

  return (
    <section className={classes.infiniteList}>
      {items.map((item, index) => (
        <Fragment key={index}>{renderItem(item)}</Fragment>
      ))}

      <div
        className={clsx(classes.loader, !isLoaderVisible && classes.hidden)}
        ref={loaderRef}
      >
        {loader}
      </div>
    </section>
  );
};
