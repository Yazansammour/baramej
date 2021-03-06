# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in baramej/__init__.py
from baramej import __version__ as version

setup(
	name='baramej',
	version=version,
	description='Baramej App',
	author='Shahzad Naser',
	author_email='shahzadnaser1122@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
