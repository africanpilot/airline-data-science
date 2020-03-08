import nbformat as nbf
from nbconvert.preprocessors import ExecutePreprocessor

def main():
    # 1.Create ipynb file
    nb = nbf.v4.new_notebook()

    with open('Code.txt', 'r') as f:
        userInput = f.read()

    code = userInput

    nb['cells'] = [nbf.v4.new_code_cell(code)]

    nbf.write(nb, 'Code_Input.ipynb')

    # 2. Execute ipynb file
    with open('Code_Input.ipynb') as f:
        nb = nbf.read(f, as_version=4)

    ep = ExecutePreprocessor(timeout=600, kernel_name='python3')
    ep.preprocess(nb, {'metadata': {'path': ''}})

    with open('Code_Output.ipynb', 'w', encoding='utf-8') as f:
        nbf.write(nb, f)


if __name__== "__main__":
    main()