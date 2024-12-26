# Quarto Hybrid Documentation Template

This repository provides a Quarto template for creating documentation that includes both Python and R code along with their execution results.

## Environment Setup

1. **Install Poetry**:
   If Poetry is not installed, use the following command to install it:
   ```bash
   curl -sSL https://install.python-poetry.org | python3 -
   ```

2. **Install dependencies**:
   ```bash
   poetry install
   ```

3. **Install R packages**:
   Ensure R is installed, then run the following commands to install the required packages:
   ```r
   install.packages("renv")
   renv::restore()
   ```

## Usage

### Build Instructions

1. **Navigate to the `quarto` directory**:
   ```bash
   cd quarto
   ```

2. **Execute the build**:
   ```bash
   poetry run quarto render
   ```

### Adding Content

1. **Add new content to the `quarto/contents` directory**:
   Create new `.qmd` files in the `quarto/contents` directory and add the necessary content.

2. **Preview the content**:
   Use the following command to preview your changes in a browser:
   ```bash
   cd quarto
   poetry run quarto preview
   ```

### Modifying or Adding Sections

1. **Modify the directory structure under `quarto/contents`**:
   Adjust or add directories and files as needed within the `quarto/contents` directory.

2. **Edit `quarto/_quarto.yml`**:
   In the `_quarto.yml` file, update the `website: sidebar: contents:` section to specify the sections and the content within them.

   Example:
   ```yaml
   website:
     sidebar:
       contents:
         - section: Section 1
           contents:
             - file1.qmd
             - file2.qmd
         - section: Section 2
           contents:
             - file3.qmd
   ```
