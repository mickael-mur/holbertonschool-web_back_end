#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Get a page of the dataset with deletion-resilient pagination.

        Args:
            index (int): The current start index (default: None)
            page_size (int): The number of items per page (default: 10)

        Returns:
            Dict: A dictionary containing:
                - index: the current start index of the return page
                - next_index: the next index to query with
                - page_size: the current page size
                - data: the actual page of the dataset

        TODO: Implement this method
        Hints:
        1. Use assert to verify that index is in a valid range
        2. Use indexed_dataset() to get the indexed data
        3. The method should handle cases where items are deleted
        4. Even if some indexes are missing, you should return page_size items
        5. next_index should be the index after the last item returned
        """
        pass
