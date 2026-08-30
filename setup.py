from setuptools import setup, find_packages

setup(
    name="enkrypto",
    version="0.9.5",

    description="EnKrypto Trust Verification SDK",

    author="EnKrypto",

    python_requires=">=3.8",

    packages=find_packages(),

    include_package_data=True,

    install_requires=[
        "pandas>=2.0.0",
        "numpy>=1.26.0",
        "openpyxl>=3.1.0",
        "pymongo>=4.0.0",
        "sqlalchemy>=2.0.0",
        "requests>=2.31.0",
        "httpx>=0.27.0",
        "python-dotenv>=1.0.0",
        "watchdog>=4.0.0",
        "pydantic>=2.0.0",
        "typing-extensions>=4.0.0"
    ],

    entry_points={
        "console_scripts": [
            "enk=enkrypto.cli:main"
        ]
    },

    classifiers=[
        "Programming Language :: Python :: 3",
        "Operating System :: OS Independent",
    ],

    zip_safe=False,
)