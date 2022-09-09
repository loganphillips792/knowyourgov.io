# Installing Python dependencies

1. ```python3 -m venv ~/Desktop/KnowYourGovVenv```
2. ```source ~/Desktop/KnowYourGovVenv/bin/activate```
3. ```which pip``` to verify what is being used (Should point to the one from the virtual environment)
4. ```~/Desktop/KnowYourGovVenv/bin/python3 -m pip install --upgrade pip```
5. ```pip install -r backend/requirements.txt```