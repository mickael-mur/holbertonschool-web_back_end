#!/usr/bin/env python3
"""Module for executing multiple coroutines concurrently."""
import asyncio
import time
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measure the total execution time for wait_n and return average time."""
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    return (time.time() - start) / n
