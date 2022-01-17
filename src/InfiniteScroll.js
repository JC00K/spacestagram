import { useState, useEffect, useRef } from 'react';

export default function InfiniteScroll(props) {
  const { getItems } = props;
  const [items, setItems] = useState([]);
  const pageToLoad = useRef(
    new URLSearchParams(window.location.search).get('page') || 1
  );
  const initialPageLoaded = useRef(false);
  const [hasMore, setHasMore] = useState(true);

  const loadItems = async () => {
    const data = await getItems({
      page: pageToLoad.current,
    });
    setHasMore(data.totalPages > pageToLoad.current);
    setItems((prevItems) => [...prevItems, ...data]);
  };

  useEffect(() => {
    if (initialPageLoaded.current) {
      return;
    }

    loadItems();
    initialPageLoaded.current = true;
  }, [loadItems]);

  return {
    items,
    hasMore,
    loadItems,
  };
}
