#!/usr/bin/env python3
"""
Module for hypermedia pagination with Server class.
"""
import csv
import math
from typing import List, Dict


def index_range(page: int, page_size: int) -> tuple:
    """
    Calculate the start and end index for pagination.

    Args:
        page (int): The page number (1-indexed)
        page_size (int): The number of items per page

    Returns:
        tuple: A tuple containing the start index and end index
    """
    # TODO: Copy your implementation from previous task
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
        """
        # TODO: Copy your implementation from previous task
        pass

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """
        Get a page of the dataset with hypermedia information.

        Args:
            page (int): The page number (default: 1)
            page_size (int): The number of items per page (default: 10)

        Returns:
            Dict: A dictionary containing:
                - page_size: the length of the returned dataset page
                - page: the current page number
                - data: the dataset page
                - next_page: number of the next page, None if no next page
                - prev_page: number of the previous page, None if no previous
                page
                - total_pages: the total number of pages in the dataset

        TODO: Implement this method
        Hints:
        1. Use get_page() to get the data
        2. Calculate total_pages using len(self.dataset()) and page_size
        3. Determine next_page and prev_page based on current page
        4. You might need the math module for calculations
        """
        pass
