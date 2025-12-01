#!/usr/bin/env python3
"""
Module for simple pagination with Server class.
"""
import csv
import math
from typing import List


def index_range(page: int, page_size: int) -> tuple:
    """
    Calculate the start and end index for pagination.

    Args:
        page (int): The page number (1-indexed)
        page_size (int): The number of items per page

    Returns:
        tuple: A tuple containing the start index and end index
    """
    # TODO: Copy your implementation from 0-simple_helper_function.py
    pass


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Get a page of the dataset.

        Args:
            page (int): The page number (default: 1)
            page_size (int): The number of items per page (default: 10)

        Returns:
            List[List]: A list of rows for the requested page

        TODO: Implement this method
        Hints:
        1. Use assert to verify that page and page_size are integers > 0
        2. Use index_range to get the start and end indexes
        3. Use dataset() to get the data
        4. Return the appropriate slice of the dataset
        5. If indexes are out of range, return an empty list
        """
        pass
