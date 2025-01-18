#!/bin/bash

# Function to get authors (name and email) from the git repository
get_authors() {
  # Check if the directory is a valid git repository
  if [ ! -d .git ]; then
    echo "Error: This is not a git repository."
    exit 1
  fi

  # Get unique commit authors (name and email) using git log
  git log --format='%aN <%aE>' | sort | uniq
}

# Save authors to a file
save_authors_to_file() {
  authors=$(get_authors)
  output_file="authors.txt"

  # Check if the authors file exists and remove it
  if [ -f "$output_file" ]; then
    rm "$output_file"
  fi

  # Save authors to the file
  echo "$authors" > "$output_file"
  echo "Authors (with emails) have been saved to $output_file"
}

# Main function
main() {
  # Run the function to save authors to file
  save_authors_to_file
}

# Execute the main function
main

