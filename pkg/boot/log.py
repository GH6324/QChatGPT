import logging
import os
import sys
import time

import colorlog


log_colors_config = {
    'DEBUG': 'green',  # cyan white
    'INFO': 'white',
    'WARNING': 'yellow',
    'ERROR': 'red',
    'CRITICAL': 'cyan',
}


async def init_logging() -> logging.Logger:
    
    level = logging.INFO

    if 'DEBUG' in os.environ and os.environ['DEBUG'] in ['true', '1']:
        level = logging.DEBUG
    
    log_file_name = "logs/qcg-%s.log" % time.strftime("%Y-%m-%d-%H-%M-%S", time.localtime())

    qcg_logger = logging.getLogger("qcg")

    qcg_logger.setLevel(level)

    log_handlers: logging.Handler = [
        logging.StreamHandler(sys.stdout),
        logging.FileHandler(log_file_name)
    ]

    for handler in log_handlers:
        handler.setLevel(level)
        handler.setFormatter(
            colorlog.ColoredFormatter(
                fmt="[%(asctime)s.%(msecs)03d] %(pathname)s (%(lineno)d) - [%(levelname)s] :\n%(message)s",
                datefmt="%Y-%m-%d %H:%M:%S",
                log_colors=log_colors_config
            )
        )
        qcg_logger.addHandler(handler)

    return qcg_logger